# 🤖 AGENTS.MD — CHỈ DẪN VẬN HÀNH DÀNH CHO CODING AGENTS & AI ASSISTANTS

> **Dự án:** AI Native Hub (Subrepo thuộc Hệ sinh thái Project TRINITY)  
> **Cơ chế hoạt động:** Monorepo quản lý Multi-Subrepo Websites & Học viện Huấn luyện Cá nhân hóa.

---

## ⚡ 1. NGUYÊN TẮC CỐT LÕI (CORE RULES FOR AGENTS)

1. **TUYỆT ĐỐI KHÔNG TẠO MÃ NGUỒN WEBSITE Ở THƯ MỤC GỐC (ROOT):**
   * Mọi mã nguồn website (HTML, CSS, JS, Assets) bắt buộc phải nằm trong các thư mục con tương ứng bên trong thư mục `sites/`.
   * Thư mục gốc chỉ chứa tài liệu quản trị (`README.md`, `AGENTS.md`, cấu hình repo chung).
2. **BẢO TOÀN DỮ LIỆU HỌC VIÊN:**
   * Không bao giờ xóa hoặc sửa đè lên file học viên khác. Mỗi học viên có một thư mục riêng biệt tại `2_Coaching_Academy/`.
3. **TUÂN THỦ NGUỒN SỰ THẬT (SINGLE SOURCE OF TRUTH):**
   * Triết lý giáo dục: Tham chiếu `1_Business_Operations/Philosophy/tuoc.md`.
   * Quy chuẩn thiết kế & Copywriting: Tham chiếu `4_Media_And_Content/Website_Content/`.
   * Kiến trúc kỹ thuật: Tham chiếu `3_Tech_And_Automations/`.

---

## 🗺️ 2. MA TRẬN ĐỊNH TUYẾN TÁC VỤ (TASK ROUTING MATRIX)

Khi nhận yêu cầu từ User, Agent PHẢI xác định đúng thư mục mục tiêu theo bảng sau:

| Yêu cầu của User | Thư mục Agent cần làm việc | File tài liệu tham chiếu |
| :--- | :--- | :--- |
| **Soạn bài cho học sinh K12** (VD: Tùng Linh) | `2_Coaching_Academy/K12_Students/[Ten_Hoc_Vien]/` | `Lo_Trinh_30_Buoi_Tung_Linh.md` |
| **Soạn bài cho Sinh viên / Thạc sĩ** | `2_Coaching_Academy/Univ_Students/[Ten_Hoc_Vien]/` | `Spec_Chuong_Trinh_AI_Career_Accelerator.md` |
| **Soạn bài cho Dân đi làm / Quản lý** | `2_Coaching_Academy/Professionals/[Ten_Hoc_Vien]/` | `Spec_Chuong_Trinh_AI_Productivity_Mastery.md` |
| **Code/Chỉnh sửa Website K12** | `sites/site-01-k12-creator/` | `index.html`, `style.css`, `app.js` |
| **Code/Chỉnh sửa Website Sinh viên** | `sites/site-02-academic-pro/` | `Spec_Chuong_Trinh_AI_Career_Accelerator.md` |
| **Code/Chỉnh sửa Website Fellowship (Silent Luxury)** | `sites/site-03-fellowship-bespoke/` | `Spec_Website_UX_UI_And_Brand_Identity.md`, `Spec_Website_Copywriting_Read_Between_Lines.md` |
| **Tự động hóa Webhook, CRM, n8n** | `3_Tech_And_Automations/Automations/` | `design_tokens.css` |
| **Báo giá, Sales Kit, Đối tác** | `1_Business_Operations/Sales_And_CRM/` | `Spec_Nghien_Cuu_Thi_Truong_Va_Tep_Khach_Hang.md` |
| **Sàng lọc nhân tài cho Project Trinity** | `1_Business_Operations/Talent_Incubator_Registry/` | `Talent_Pipeline_Specification.md` |

---

## 🎨 3. QUY CHUẨN THIẾT KẾ & CODE (WEB DEVELOPMENT STANDARDS)

* **Công nghệ:** Ưu tiên HTML5 Semantic, Vanilla CSS (kết nối `design_tokens.css` từ `3_Tech_And_Automations/Shared_Engine/`), và Vanilla JavaScript.
* **Phong cách Thiết kế:** Tuân thủ chuẩn **Silent Luxury & Architectural Tech Minimalism**.
  * Bảng màu: Obsidian (`#08090C`), Slate (`#14161C`), Titanium (`#F3F4F6`), Emerald Active (`#10B981`).
  * Typography: `Instrument Serif` (Editorial), `Plus Jakarta Sans` (Body), `JetBrains Mono` (Code/Data).
* **Cấm kỵ Cliché:**
  * ❌ Không dùng màu tím trên nền tối (No Purple on Dark).
  * ❌ Không dùng đường viền phát sáng lòe loẹt (No Glowing Colored Borders).
  * ❌ Không tạo cảm giác bán khóa học lùa gà (No countdown timers, no fake discount pills).
  * ❌ Không dùng ảnh stock người cười công nghiệp hoặc bàn tay robot 3D.

---

## 📋 4. QUY ƯỚC ĐẶT TÊN FILE (NAMING CONVENTIONS)

* Tài liệu tiếng Việt không dấu hoặc có dấu gạch dưới: `Spec_Ten_Noi_Dung.md` hoặc `Giao_Trinh_Buoi_01_Ten_Hoc_Vien.md`.
* Thư mục: `PascalCase_With_Underscore` hoặc `kebab-case` cho thư mục website (VD: `site-03-fellowship-bespoke`).
* Code: Chữ thường phân cách bằng dấu gạch ngang (`main.css`, `spatial-scroll.js`).
