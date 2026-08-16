import os
import sys
from ftplib import FTP, FTP_TLS

# ==============================================================================
# AI NATIVE HUB — TỰ ĐỘNG DEPLOY WEBSITE LÊN CPANEL HOSTING
# ==============================================================================

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.abspath(os.path.join(SCRIPT_DIR, "../../")) if "Automations" in SCRIPT_DIR else os.path.abspath(".")
ENV_FILE = os.path.join(ROOT_DIR, ".env")

# Thư mục nguồn của website cần deploy (Mặc định: site-01-k12-creator)
SOURCE_DIR = os.path.join(ROOT_DIR, "sites", "site-01-k12-creator")

def load_env():
    env_vars = {}
    if os.path.exists(ENV_FILE):
        with open(ENV_FILE, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    k, v = line.split("=", 1)
                    env_vars[k.strip()] = v.strip().strip('"').strip("'")
    return env_vars

def upload_directory(ftp, local_dir, remote_dir=""):
    for item in os.listdir(local_dir):
        local_path = os.path.join(local_dir, item)
        remote_path = f"{remote_dir}/{item}" if remote_dir else item
        
        if os.path.isdir(local_path):
            try:
                ftp.mkd(remote_path)
            except Exception:
                pass # Thư mục đã tồn tại
            upload_directory(ftp, local_path, remote_path)
        else:
            with open(local_path, "rb") as f:
                print(f"  ⬆️ Uploading: {remote_path}...")
                ftp.storbinary(f"STOR {remote_path}", f)

def deploy():
    env = load_env()
    
    ftp_host = env.get("FTP_HOST", "gipted.com")
    ftp_user = env.get("FTP_USER", "")
    ftp_pass = env.get("FTP_PASS", "")
    ftp_port = int(env.get("FTP_PORT", 21))
    
    if not ftp_user or not ftp_pass:
        print("❌ Thiếu thông tin FTP_USER hoặc FTP_PASS trong file .env!")
        print("👉 Vui lòng điền vào file .env theo mẫu:")
        print("   FTP_HOST=gipted.com")
        print("   FTP_USER=deploy@gipted.com")
        print("   FTP_PASS=MatKhauCuaBan")
        print("   FTP_PORT=21")
        sys.exit(1)
        
    print(f"====================================================")
    print(f"🚀 BẮT ĐẦU DEPLOY LÊN CPANEL: {ftp_host}")
    print(f"📂 Thư mục nguồn: {SOURCE_DIR}")
    print(f"👤 Tài khoản FTP: {ftp_user}")
    print(f"====================================================\n")
    
    if not os.path.exists(SOURCE_DIR):
        print(f"❌ Không tìm thấy thư mục nguồn: {SOURCE_DIR}")
        sys.exit(1)
        
    try:
        # Thử kết nối FTP thông thường
        ftp = FTP()
        ftp.connect(ftp_host, ftp_port, timeout=30)
        ftp.login(ftp_user, ftp_pass)
        ftp.set_pasv(True)
        print("✅ Kết nối FTP thành công!")
        
        upload_directory(ftp, SOURCE_DIR)
        
        ftp.quit()
        print(f"\n====================================================")
        print(f"🎉 DEPLOY HOÀN TẤT 100% LÊN CPANEL!")
        print(f"🌐 Website đã sẵn sàng chạy trên domain của bạn!")
        print(f"====================================================")
        
    except Exception as e:
        print(f"❌ Lỗi trong quá trình upload FTP: {e}")

if __name__ == "__main__":
    deploy()
