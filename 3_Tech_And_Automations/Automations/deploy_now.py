import os
import sys
import requests
from ftplib import FTP, FTP_TLS

# ==============================================================================
# AI NATIVE HUB — TRIỂN KHAI TỰ ĐỘNG LÊN CPANEL (ATELIER.GIPTED.COM)
# ==============================================================================

CPANEL_HOST = "gipted.com"
CPANEL_USER = "sdgiptedcom"
CPANEL_TOKEN = "IHSJPKD1CMOCAV2UFHMGD71VK0OD2SZQ"
CPANEL_PASS = "Tuan4Sieu"

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.abspath(os.path.join(SCRIPT_DIR, "../../")) if "Automations" in SCRIPT_DIR else os.path.abspath(".")
SOURCE_DIR = os.path.join(ROOT_DIR, "sites", "site-01-k12-creator")
ZIP_FILE = os.path.join(ROOT_DIR, "atelier-website.zip")

def test_ftp_deploy():
    print(f"🔄 Đang kết nối tới FTP {CPANEL_HOST} với user '{CPANEL_USER}'...")
    try:
        ftp = FTP()
        ftp.connect(CPANEL_HOST, 21, timeout=20)
        ftp.login(CPANEL_USER, CPANEL_PASS)
        ftp.set_pasv(True)
        print("✅ Kết nối FTP thành công!")
        
        # Kiểm tra danh sách thư mục
        file_list = ftp.nlst()
        print(f"📂 Danh mục trên server: {file_list}")
        
        # Xác định thư mục đích
        target_dir = "public_html/atelier"
        
        # Thử vào thư mục target_dir
        try:
            ftp.cwd(target_dir)
            print(f"✅ Đã vào thư mục đích: {target_dir}")
        except Exception:
            # Thử thư mục atelier.gipted.com
            try:
                target_dir = "atelier.gipted.com"
                ftp.cwd(target_dir)
                print(f"✅ Đã vào thư mục đích: {target_dir}")
            except Exception:
                try:
                    target_dir = "public_html"
                    ftp.cwd(target_dir)
                    try:
                        ftp.mkd("atelier")
                    except Exception:
                        pass
                    ftp.cwd("atelier")
                    print(f"✅ Đã tạo/vào thư mục: public_html/atelier")
                except Exception as e:
                    print(f"❌ Không vào được thư mục đích: {e}")
                    return False
                    
        # Upload toàn bộ file từ SOURCE_DIR
        def upload_recursive(local_path, remote_sub=""):
            for item in os.listdir(local_path):
                lp = os.path.join(local_path, item)
                rp = f"{remote_sub}/{item}" if remote_sub else item
                if os.path.isdir(lp):
                    try:
                        ftp.mkd(rp)
                    except Exception:
                        pass
                    upload_recursive(lp, rp)
                else:
                    with open(lp, "rb") as f:
                        print(f"  ⬆️ Uploading: {rp}...")
                        ftp.storbinary(f"STOR {rp}", f)
                        
        print("\n🚀 Bắt đầu tải mã nguồn và toàn bộ hình ảnh lên server...")
        upload_recursive(SOURCE_DIR)
        
        ftp.quit()
        print("\n====================================================")
        print("🎉 TẤT CẢ FILE ĐÃ ĐƯỢC UPLOAD THÀNH CÔNG 100%!")
        print("====================================================")
        return True
    except Exception as e:
        print(f"❌ Lỗi kết nối FTP: {e}")
        return False

def test_api_token():
    print(f"\n🔄 Kiểm tra cPanel UAPI Token trên https://{CPANEL_HOST}:2083...")
    headers = {
        "Authorization": f"cpanel {CPANEL_USER}:{CPANEL_TOKEN}"
    }
    url = f"https://{CPANEL_HOST}:2083/execute/Fileman/list_files"
    params = {"dir": "public_html"}
    try:
        res = requests.get(url, headers=headers, params=params, verify=False, timeout=15)
        print(f"Status Code: {res.status_code}")
        if res.status_code == 200:
            print("✅ cPanel API Token hợp lệ và hoạt động hoàn hảo!")
            return True
        else:
            print(f"Response: {res.text[:300]}")
            return False
    except Exception as e:
        print(f"Lỗi API: {e}")
        return False

if __name__ == "__main__":
    import urllib3
    urllib3.disable_warnings()
    success = test_ftp_deploy()
    if not success:
        test_api_token()
