# AI Native Hub — Private Coaching Academy

Dự án này là kho lưu trữ toàn bộ mã nguồn Website hiển thị công khai, hệ thống tự động hóa (Automations), kịch bản chốt sales, và giáo án giảng dạy 1 kèm 1 cho học viện AI Native Hub.

## 🧭 Hướng Dẫn Sử Dụng Repo (Nguồn Sự Thật - SSoT)

Cấu trúc thư mục của dự án đã được chuyển đổi sang chuẩn **Monorepo**. Để xem chi tiết bản đồ hướng dẫn tìm kiếm các file cũ (Syllabus, Sales Kit, Scripts...) đã được chuyển đi đâu, vui lòng đọc tài liệu Nguồn Sự Thật (SSoT) tại:

👉 **[`5_Knowledge_Base/SSOT_Ban_Do_Du_An.md`](./5_Knowledge_Base/SSOT_Ban_Do_Du_An.md)**

---

### Tóm tắt kiến trúc 5 Lớp:
1. **Root (`./`)**: Mã nguồn website `index.html`, `style.css` và ảnh `assets/` (phục vụ tự động Deploy qua GitHub Pages).
2. **`1_Business_Operations/`**: Kịch bản sales, báo giá, hệ tư tưởng.
3. **`2_Coaching_Academy/`**: Giáo trình giảng dạy, hồ sơ cá nhân học viên (K12, Sinh viên, Người đi làm).
4. **`3_Tech_And_Automations/`**: Script kéo Data khách hàng, tạo Google Form tự động.
5. **`4_Media_And_Content/`** & **`5_Knowledge_Base/`**: Nguồn lưu trữ tài nguyên truyền thông và kho tri thức / prompt.
