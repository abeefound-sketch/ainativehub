import os
import sys
import json
import re
from datetime import datetime
import gspread
from google.oauth2.service_account import Credentials

# ==============================================================================
# AI NATIVE HUB — HỆ THỐNG TỰ ĐỘNG ĐỒNG BỘ LEADS & MAY ĐO HỒ SƠ HỌC VIÊN
# ==============================================================================

CREDENTIALS_FILE = "ainativehub-4e06928576b5.json"
SPREADSHEET_ID = "18fgBwb1GSrS35PM3U2EsOFVxroazZirLnctlRauCeHE"
LEADS_DATA_DIR = "2data/leads"

SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive"
]

def sanitize_filename(name):
    clean = re.sub(r'[^\w\s-]', '', str(name)).strip()
    return re.sub(r'[-\s]+', '_', clean)

def get_service_account_client():
    if not os.path.exists(CREDENTIALS_FILE):
        print(f"❌ Không tìm thấy file {CREDENTIALS_FILE} trong thư mục dự án.")
        sys.exit(1)
        
    creds = Credentials.from_service_account_file(CREDENTIALS_FILE, scopes=SCOPES)
    client = gspread.authorize(creds)
    return client

def find_value(record, keywords):
    for k, v in record.items():
        for kw in keywords:
            if kw.lower() in k.lower():
                return v
    return "N/A"

def sync_leads():
    client = get_service_account_client()
    try:
        sh = client.open_by_key(SPREADSHEET_ID)
        worksheet = sh.get_worksheet(0)
        records = worksheet.get_all_records()
        
        print(f"====================================================")
        print(f"📊 KẾT NỐI GOOGLE SHEET THÀNH CÔNG: '{sh.title}'")
        print(f"👥 Tổng số lượt đăng ký ghi nhận: {len(records)}")
        print(f"====================================================\n")
        
        if not records:
            print("ℹ️ Hiện tại chưa có dữ liệu đăng ký mới nào trong bảng tính.")
            return []
            
        os.makedirs(LEADS_DATA_DIR, exist_ok=True)
        
        for i, lead in enumerate(records, start=1):
            timestamp = find_value(lead, ['dấu thời gian', 'timestamp', 'time'])
            parent_name = find_value(lead, ['họ & tên', 'họ và tên', 'parent', 'tên phụ huynh', '姓名'])
            phone = find_value(lead, ['số điện thoại', 'zalo', 'phone', 'whatsapp', '电话'])
            grade = find_value(lead, ['lớp', 'grade', 'khối', '年级'])
            device_habit = find_value(lead, ['thiết bị', 'habit', 'máy tính', 'điện thoại', '习惯'])
            goal = find_value(lead, ['kỳ vọng', 'mong muốn', 'goal', 'expectation', '期望'])
            
            if parent_name == "N/A":
                parent_name = f"PhuHuynh_{i}"
                
            print(f"[{i}] {parent_name} | SĐT/Zalo: {phone} | Lớp: {grade}")
            print(f"    • Thói quen: {device_habit}")
            print(f"    • Kỳ vọng: {goal}\n")
            
            # Tự động xuất file Hồ sơ Chân dung & Kịch bản tư vấn
            filename = f"{LEADS_DATA_DIR}/Ho_So_{sanitize_filename(parent_name)}_{i}.md"
            profile_content = f"""# 📋 HỒ SƠ ĐĂNG KÝ TƯ VẤN — {parent_name}
**Ngày đăng ký:** {timestamp}  
**Mã hồ sơ:** LEAD-{i:03d}

---

## 1. THÔNG TIN KHẢO SÁT BAN ĐẦU
* **Phụ huynh:** {parent_name}
* **Số Zalo/Hotline/WhatsApp:** {phone}
* **Khối lớp của con:** {grade}
* **Thực trạng dùng thiết bị:** {device_habit}
* **Kỳ vọng của gia đình:** {goal}

---

## 2. PHÂN TÍCH NHU CẦU & ĐỀ XUẤT LỘ TRÌNH MAY ĐO
* **Định vị:** Học sinh {grade} cần chuyển dịch từ vai trò tiêu thụ sang kiến tạo.
* **Gói khuyến nghị:** Gói 2 Tháng (Kiến Tạo - Vibe Coding) để con vừa có kênh nội dung cá nhân, vừa tự tay lập trình được 01 Web App/Chatbot hoàn chỉnh.
* **Sản phẩm đầu ra kỳ vọng:** 01 Ứng dụng trợ lý học tập hoặc mini-game theo đúng sở thích của con.

---

## 3. KỊCH BẢN TIN NHẮN ZALO MAY ĐO GỬI PHỤ HUYNH
```text
Dạ em chào anh/chị {parent_name}! Em là Coach Anh Tuấn (Jake) từ AI Native Hub.
Em vừa nhận được phiếu đăng ký tư vấn của anh/chị cho cháu (học sinh {grade}).

Qua chia sẻ của anh/chị về việc mong muốn "{goal}", em đã nghiên cứu sơ bộ một lộ trình may đo riêng giúp cháu chuyển hóa thời gian sử dụng thiết bị sang kỹ năng Vibe Coding và tự tay làm ra sản phẩm thật.

Em xin phép gửi anh/chị khung phác thảo sơ bộ. Anh/chị tiện trao đổi qua Zalo này hay tiện cho em 15 phút đàm thoại ngắn để em tư vấn chi tiết phương án cho cháu ạ?
```
"""
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(profile_content)
                
        print(f"✅ Đã tự động tạo/cập nhật {len(records)} hồ sơ phân tích & kịch bản Zalo trong thư mục '{LEADS_DATA_DIR}/'!")
        return records
        
    except Exception as e:
        print(f"❌ Lỗi: {e}")

if __name__ == "__main__":
    sync_leads()
