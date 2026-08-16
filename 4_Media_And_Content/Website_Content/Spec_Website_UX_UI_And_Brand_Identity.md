# SPEC: THIẾT KẾ GIAO DIỆN UX/UI & BỘ NHẬN DIỆN THƯƠNG HIỆU
*Dự án: AI Native Hub (Static Website Edition)*
*Phong cách định vị: Silent Luxury / Architectural Tech Minimalism*

---

## I. NGUYÊN TẮC THIẾT KẾ CỐT LÕI (DESIGN PRINCIPLES)

1. **Silent Luxury (Sang trọng thầm lặng):** Không dùng các bảng màu lòe loẹt (tím neon, xanh lơ chói chang). Thay vào đó, tạo sự đẳng cấp qua tỷ lệ khoảng trắng (Whitespace), cấu trúc lưới nghiêm ngặt và Typography đỉnh cao.
2. **Read Between the Lines (Đọc ý tại ngôn ngoại):** Tránh mọi từ ngữ kích động lòng tham (kiếm nghìn đô) hoặc nỗi sợ hãi (bị mất việc). Mọi câu chữ đều sắc lạnh, đĩnh đạc, mang phong thái của một viện nghiên cứu / văn phòng cố vấn chiến lược.
3. **Bán như không bán (The Anti-Sell):** Không nút "Mua ngay", không đếm ngược giảm giá, không gắn huy hiệu giả tạo. Chuyển đổi thông qua việc **"Nộp hồ sơ thẩm định bài toán" (Application Intake)**.

---

## II. HỆ THỐNG MÀU SẮC (COLOR SYSTEM)

| Tên màu | Mã HEX | Mục đích sử dụng |
| :--- | :--- | :--- |
| **Obsidian Deep** | `#08090C` | Nền chính toàn trang (Tạo độ sâu vô tận) |
| **Graphite Slate** | `#14161C` | Nền các khối Card, Module nội dung |
| **Hairline Border**| `rgba(255, 255, 255, 0.08)` | Đường viền ngăn cách siêu mảnh, sắc sảo |
| **Titanium White** | `#F3F4F6` | Tiêu đề chính, Text nổi bật (Tương phản cao) |
| **Muted Slate** | `#9094A0` | Nội dung mô tả, phụ đề (Dịu mắt, trang nhã) |
| **Active Emerald** | `#10B981` | Điểm nhấn duy nhất: Trạng thái hệ thống đang mở, nút nộp hồ sơ |
| **Noise Texture** | `2-3% opacity` | Phủ lên toàn bộ trang để tạo chất cảm vật lý cao cấp |

---

## III. HỆ THỐNG TYPOGRAPHY (FONT SYSTEM)

```
[ DISPLAY & EDITORIAL ]  -> Instrument Serif (Italic) / Newsreader
[ PRIMARY BODY TEXT ]    -> Plus Jakarta Sans / Inter (Clean Geometric)
[ TECHNICAL & METADATA ] -> JetBrains Mono (Code, Status, Numbers)
```

* **Tiêu đề Display:** Kết hợp giữa Sans-Serif đậm và Serif nghiêng mang tính học thuật (VD: *"Chúng ta không thiếu công cụ — Chúng ta thiếu* ***người ra lệnh***.*"*).
* **Văn bản Body:** Kích thước `15px - 16px`, `line-height: 1.7`, `letter-spacing: -0.01em` mang lại cảm giác thoáng đãng, dễ đọc.
* **Số liệu & Tag:** Font Monospace viết hoa toàn bộ (`letter-spacing: 0.15em`).

---

## IV. QUY CHUẨN ĐỒ HỌA & HÌNH ẢNH (ASSETS & VISUALS)

1. **Biểu đồ Kiến trúc (Architecture Blueprints):**
   * Vẽ bằng SVG đường nét mảnh 1px.
   * Thể hiện sơ đồ dòng chảy dữ liệu (Input → Orchestrator → Autonomous Agents → Live Artifact).
   * Chú thích kỹ thuật bằng font Monospace.
2. **Hình ảnh Artifacts (Hiện vật thật):**
   * Ảnh chụp giao diện sản phẩm hoặc terminal thật được bo góc tối giản, có bóng đổ tự nhiên mờ ảo (`box-shadow: 0 20px 40px rgba(0,0,0,0.6)`).
   * Tuyệt đối không dùng ảnh stock người bắt tay, robot 3D hay khuôn mặt cười công nghiệp.
3. **Logo & Wordmark:**
   * Dạng Geometric Monogram hình học sắc sảo kết hợp Wordmark in hoa `AI NATIVE HUB` có chấm xanh trạng thái bên cạnh (`●`).

---

## V. CẤU TRÚC CÁC SECTION TRÊN WEBSITE

1. **Header Minimalist:** Logo, Nhãn trạng thái `● CURRENT INTAKE: 02/03 SPOTS (THÁNG 8)`, Nút CTA `[Nộp Đề Bài]`.
2. **Hero Section:** Dòng Tuyên ngôn triết học + Interactive Terminal Simulator (Mô phỏng Vibe Coding 30 giây).
3. **The Filter (Bộ lọc 2 cột):** Cột "Chương trình KHÔNG dành cho ai" vs "Chương trình DÀNH cho ai".
4. **Live Artifacts (Show sản phẩm thật):** 3 Case studies sản phẩm thực tế đã triển khai và đang chạy online.
5. **The Underlying Vision (Bản tuyên ngôn khát vọng):** Đoạn văn bài luận về kỷ nguyên năng lực số và cơ hội bứt phá của Việt Nam.
6. **The Protocol (Quy trình 3 bước):** 1. Nộp hồ sơ → 2. Thẩm định 15 phút → 3. Triển khai may đo.
7. **Application Dossier (Form nộp bài toán):** 4 câu hỏi sâu sắc thẩm định năng lực và bài toán của ứng viên.
