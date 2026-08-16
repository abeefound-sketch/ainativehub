# 🌐 AI NATIVE HUB — HỆ SINH THÁI ĐÀO TẠO & ƯƠM MẦM NĂNG LỰC SỐ

> *"Chúng ta không thiếu công cụ. Chúng ta thiếu người biết cách ra lệnh."*  
> — Triết lý Tuộc (`1_Business_Operations/Philosophy/tuoc.md`)

---

## 🧭 I. TỔNG QUAN & VAI TRÒ CHIẾN LƯỢC
**AI Native Hub** là một hệ sinh thái huấn luyện công nghệ đa tầng, vừa đóng vai trò tạo dòng tiền thực tế qua các chương trình **Bespoke Private Mentorship 1-kèm-1**, vừa là **vườn ươm tài năng ngầm (Stealth Talent Incubator)** cho đại dự án **Project TRINITY** (Hệ sinh thái Deep-Tech Quốc gia Kỹ thuật số: AI — Năng lượng — Bảo mật Lượng tử).

Mô hình hoạt động dựa trên cơ chế: **Đào tạo thực chiến May đo $\rightarrow$ Giải phóng năng suất $\rightarrow$ Sàng lọc Top 5% tinh hoa (RLHF Experts & Co-founders).**

---

## 🏛️ II. CẤU TRÚC MONOREPO MỞ RỘNG (DIRECTORY ARCHITECTURE)

```text
D:\5Projects\ainativehub/
│
├── 📁 1_Business_Operations/           # Khối Vận Hành & Chiến Lược Kinh Doanh
│   ├── Philosophy/                     # Triết lý "Tuộc" & Định hướng cốt lõi (tuoc.md)
│   ├── Sales_And_CRM/                  # Bộ Sales Kit, Báo giá, Quy trình phễu ngược
│   └── Talent_Incubator_Registry/      # Sổ đăng ký & Phễu sàng lọc nhân tài cho Trinity
│
├── 📁 2_Coaching_Academy/              # Khối Học Viện Huấn Luyện (Tri Thức & Giáo Án)
│   ├── K12_Students/                   # Giáo án Cấp 2-3 (Thư mục từng học viên, VD: Tung_Linh_Lop9)
│   ├── Univ_Students/                  # Giáo trình Đại học, Du học sinh & Thạc sĩ (Research, Portfolio)
│   ├── Professionals/                  # Giáo trình 5-7 năm kinh nghiệm (Tự động hóa, Quản trị, Co-founders)
│   └── Templates_Syllabus/             # Khung giáo trình may đo mẫu 8-30 buổi
│
├── 📁 3_Tech_And_Automations/          # Khối Kỹ Thuật & Tự Động Hóa
│   ├── Automations/                    # Webhook, Make/n8n, kịch bản tự động hóa CRM
│   ├── Shared_Engine/                  # Design tokens, CSS dùng chung, UI components
│   └── Website_Source/                 # Tài liệu đặc tả kỹ thuật kiến trúc website
│
├── 📁 4_Media_And_Content/             # Khối Truyền Thông & Kịch Bản
│   ├── Website_Content/                # Kịch bản Copywriting chi tiết cho từng website
│   ├── Assets_And_Images/              # Kho media, video ambient, hình ảnh case studies
│   └── Social_Campaigns/               # Bài viết định vị LinkedIn, Facebook
│
├── 📁 5_Knowledge_Base/                # Kho Dữ Liệu & Công Cụ
│   ├── Prompt_Library/                 # Thư viện prompt chuẩn hóa thực chiến
│   └── Tools_And_Links/                # Danh mục tài khoản AI bản quyền & công cụ thực chiến
│
└── 📁 sites/                           # KHU VỰC CHỨA CÁC SUBREPO WEBSITES ĐỘC LẬP
    ├── 🌐 site-01-k12-creator/         # Subrepo 1: Website dành cho Phụ huynh & Học sinh cấp 2-3
    ├── 🌐 site-02-academic-pro/        # Subrepo 2: Website dành cho Sinh viên, Du học sinh & Thạc sĩ
    ├── 🌐 site-03-fellowship-bespoke/  # Subrepo 3: Website Silent Luxury (Dân đi làm 5-7 năm & Co-founders)
    └── 🌐 site-04-trinity-talent-gate/ # Subrepo 4: Cổng tiếp nhận & Sát hạch nhân sự STEM / RLHF
```

---

## 🛠️ III. HƯỚNG DẪN CÁC LUỒNG CÔNG VIỆC DÀNH CHO CON NGƯỜI (HUMAN WORKFLOWS)

### 1. Khi soạn bài & theo dõi học viên cụ thể (VD: Em Diệp Tùng Linh):
* **Nơi làm việc:** Vào đúng thư mục học viên tại `2_Coaching_Academy/K12_Students/Tung_Linh_Lop9/`.
* **Soạn bài mới:** Tạo file `Giao_Trinh_Buoi_X_Tung_Linh.md` (hoặc `.html`).
* **Tham chiếu bài giảng:** Lấy prompt từ `5_Knowledge_Base/Prompt_Library/` và cập nhật nhật ký học tập vào `Profile_Diep_Tung_Linh.md`.

### 2. Khi có học viên mới:
* Chỉ cần tạo một thư mục mới theo tên học viên trong phân nhóm tương ứng:
  * Học sinh K12 $\rightarrow$ `2_Coaching_Academy/K12_Students/[Ten_Hoc_Vien]/`
  * Sinh viên $\rightarrow$ `2_Coaching_Academy/Univ_Students/[Ten_Hoc_Vien]/`
  * Người đi làm $\rightarrow$ `2_Coaching_Academy/Professionals/[Ten_Hoc_Vien]/`

### 3. Khi phát triển hoặc chỉnh sửa Website:
* **Website K12:** Làm việc tại `sites/site-01-k12-creator/`.
* **Website Fellowship / Silent Luxury (Dân đi làm & Co-founder):** Làm việc tại `sites/site-03-fellowship-bespoke/`.
* **Tham chiếu tài liệu Copywriting & UX/UI:** Mở các file spec tại `4_Media_And_Content/Website_Content/`.

---

## 📄 IV. TÀI LIỆU QUAN TRỌNG CẦN ĐỌC
1. [tuoc.md](file:///D:/5Projects/ainativehub/1_Business_Operations/Philosophy/tuoc.md) — Triết lý nền tảng của nhà sáng lập.
2. [Spec_Nghien_Cuu_Thi_Truong_Va_Tep_Khach_Hang.md](file:///D:/5Projects/ainativehub/1_Business_Operations/Sales_And_CRM/Spec_Nghien_Cuu_Thi_Truong_Va_Tep_Khach_Hang.md) — Phân tích thị trường và chân dung khách hàng.
3. [Spec_Website_UX_UI_And_Brand_Identity.md](file:///D:/5Projects/ainativehub/4_Media_And_Content/Website_Content/Spec_Website_UX_UI_And_Brand_Identity.md) — Quy chuẩn thiết kế Silent Luxury.
4. [Talent_Pipeline_Specification.md](file:///D:/5Projects/ainativehub/1_Business_Operations/Talent_Incubator_Registry/Talent_Pipeline_Specification.md) — Cơ chế chuyển giao nhân sự cho Project Trinity.
