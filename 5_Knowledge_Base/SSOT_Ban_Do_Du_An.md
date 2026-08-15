# 🧭 BẢN ĐỒ CẤU TRÚC DỰ ÁN & NGUỒN SỰ THẬT (SSoT)
*Cập nhật lần cuối: Tháng 8/2026*

Tài liệu này là **Nguồn Sự Thật Duy Nhất (Single Source of Truth - SSoT)** dùng để tra cứu nhanh vị trí của tất cả các file, tài liệu, giáo án và mã nguồn sau khi dự án chuyển sang kiến trúc Monorepo 5 Lớp.

---

## 🏛️ TỔNG QUAN KIẾN TRÚC MONOREPO

Dự án AI Native Hub được chia làm 2 phân khu chính:
1. **Front-Stage (Thư mục Gốc - Root):** Mã nguồn website hiển thị công khai.
2. **Back-Stage (Các thư mục `1_` đến `5_`):** Hệ thống quản trị nội bộ, giáo án, và kịch bản sales.

---

## 🗺️ BẢN ĐỒ TRA CỨU CHI TIẾT (MỚI vs CŨ)

### 🌐 0. Thư mục gốc (Root) - Mã Nguồn Website
*Nơi chứa "mặt tiền" của học viện để GitHub Pages tự động deploy.*
* **`index.html`**, **`style.css`**, **`app.js`**: Mã nguồn Website.
* **`assets/`**: Chứa toàn bộ hình ảnh, logo, QR code được hiển thị trên web.
* *(Trước đây: Website nằm lộn xộn chung với các file docs).*

### 💼 1. `1_Business_Operations` - Vận Hành & Sales
*Nơi chứa hệ tư tưởng cốt lõi và các tài liệu chốt sales (thay thế cho thư mục `1docs` cũ).*
* **`Philosophy/`**: Các tài liệu lõi về triết lý giảng dạy.
  * `Chien_Luoc_Thu_Thap_Du_Lieu.md` (Chiến lược phễu)
  * `tuoc_methodology_course_design.md` (Phương pháp luận)
* **`Sales_And_CRM/`**: Kịch bản tư vấn và thông tin gói học.
  * `Sales_Packages.md`, `Bao_Gia_AI_Creator.md`
  * `Sales_Kit_Phu_Huynh_Hoc_Sinh_THCS_THPT.md` (Tài liệu chào hàng)
  * `Kich_Ban_Nhan_Tin_Nho_Gioi_Thieu.md`

### 🎓 2. `2_Coaching_Academy` - Giáo Án & Hồ Sơ Học Viên
*Nơi làm việc chính của Mentor (thay thế cho thư mục `2data` cũ).*
* **`K12_Students/Tung_Linh_Lop9/`**: Toàn bộ tài nguyên của học viên Tùng Linh.
  * *Soạn giáo trình Buổi 3, Buổi 4... hãy lưu vào đây.*
  * `Profile_Diep_Tung_Linh.md` (Hồ sơ cá nhân)
  * `Lo_Trinh_30_Buoi_Tung_Linh.md` (Khung chương trình)
  * `Giao_Trinh_Buoi_1...` & `Buoi_2...`
* **`Templates_Syllabus/`**: Các form mẫu khảo sát và khung giáo án chung.
  * `Khao_sat_Phu_huynh_Hoc_sinh.md`

### ⚙️ 3. `3_Tech_And_Automations` - Kỹ Thuật & Tự Động Hóa
*Nơi lưu trữ các script chạy ngầm và mã nguồn kỹ thuật.*
* **`Automations/`**: Hệ thống đồng bộ dữ liệu.
  * `sync_leads.py` (Script kéo data học viên từ Google Form).
  * `Google_Apps_Script...` (Code tạo và dịch Form sang Tam Ngữ).

### 🎬 4. `4_Media_And_Content` - Truyền Thông & Mạng Xã Hội
*Nơi lưu trữ tư liệu thô để làm nội dung.*
* **`Assets_And_Images/`**: Kho ảnh stock, ảnh raw, tài liệu thiết kế chưa lên web.
* **`Facebook_Posts/` & `YouTube_Scripts/`**: Nơi lưu content đăng mạng xã hội (hiện tại trống, sẵn sàng mở rộng).

### 🧠 5. `5_Knowledge_Base` - Nguồn Sự Thật & Công Cụ
*Bộ não của toàn hệ thống dự án.*
* **`Tools_And_Links/`**: 
  * `Quan_Ly_Links_Bieu_Mau.md` (Link Form, Link Sheet quan trọng).
  * `LINKS.md`
* **`SSOT_Ban_Do_Du_An.md`**: Chính là file bạn đang đọc.

---

## 🔍 QUY TẮC LÀM VIỆC MỚI
1. **Muốn sửa Website:** Mở các file ở ngoài cùng (`index.html`, `style.css`).
2. **Muốn thêm học viên mới:** Tạo thư mục mới trong `2_Coaching_Academy/K12_Students/`.
3. **Muốn chạy tool tự động lấy Leads:** Vào `3_Tech_And_Automations/Automations/` chạy `python sync_leads.py`. Dữ liệu sẽ tự động lưu vào `1_Business_Operations/Sales_And_CRM/Leads/`.
