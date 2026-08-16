# SPEC: KIẾN TRÚC KỸ THUẬT & HIỆU ỨNG SPATIAL SCROLL
*Dự án: AI Native Hub (Static Website)*
*Công nghệ: HTML5 Semantic, Vanilla CSS, Vanilla JavaScript (Zero Dependencies)*

---

## I. MỤC TIÊU KỸ THUẬT & HIỆU NĂNG (PERFORMANCE GOALS)

1. **Tốc độ tải trang:** First Contentful Paint (FCP) `< 0.3s`, Time to Interactive (TTI) `< 0.5s`.
2. **Zero Framework Bloat:** 100% mã nguồn tĩnh thuần túy (No React, No Vue, No Tailwind runtime), không phụ thuộc CDN cồng kềnh.
3. **Responsive & Mobile-First:** Tối ưu hóa 60fps trên mọi thiết bị từ iPhone SE đến màn hình 4K Ultrawide.
4. **Chuẩn SEO & A11y:** Cấu trúc thẻ Semantic HTML5 chuẩn mực, hỗ trợ chế độ `prefers-reduced-motion`.

---

## II. TRIỂN KHAI HIỆU ỨNG SPATIAL SCROLL (CUỘN CHUỘT TIẾN VÀO KHÔNG GIAN 3D)

### 1. Cơ chế phối cảnh 3D bằng CSS Transform & Perspective
* Khung chứa chính được thiết lập thuộc tính `perspective: 1200px` và `perspective-origin: center center`.
* Khi cuộn chuột, JavaScript bắt sự kiện cuộn (`window.addEventListener('scroll', ...)` thông qua `requestAnimationFrame`) để tính toán tỷ lệ cuộn chuẩn hóa (`progress = scrollY / maxScroll`).
* Các tầng nội dung (Layers) được biến đổi giá trị `translateZ`:
  * Tầng 1 (Hero Title): Di chuyển từ `translateZ(0px)` lên `translateZ(600px)` và mờ dần (`opacity: 0`), tạo cảm giác camera bay xuyên qua dòng chữ.
  * Tầng 2 (Bản Tuyên Ngôn & Hồ Sơ): Di chuyển từ tọa độ xa `translateZ(-800px)` tiến dần về vị trí chính diện `translateZ(0px)` với hiệu ứng rõ nét dần.

### 2. Video Nền Ambient Hero (Subtle Ambient Loop)
* **Thông số kỹ thuật video:**
  * Định dạng: `.webm` (ưu tiên) và fallback `.mp4` (H.264).
  * Độ phân giải: 1080p, tối ưu nén Bitrate dưới `3.5 Mbps` (Dung lượng `< 3MB`).
  * Thuộc tính HTML: `autoplay muted loop playsinline`.
* **Kỹ thuật hòa trộn thị giác (Visual Blending):**
  * Đặt một lớp phủ CSS `background: radial-gradient(circle, rgba(8,9,12,0.4) 0%, rgba(8,9,12,0.95) 100%)`.
  * Kết hợp lớp phủ hạt mịn `background-image: url('noise.png')` với `opacity: 0.03` và `mix-blend-mode: overlay` để video chìm sâu vào nền đen tuyền của trang web.

---

## III. KIẾN TRÚC THƯ MỤC SOURCE CODE GỢI Ý

```
ainativehub/
├── index.html         # Cấu trúc nội dung chuẩn ngữ nghĩa (Semantic HTML5)
├── style.css          # Hệ thống Design Tokens, 3D Spatial Styles & Animations
├── app.js            # Điều khiển Spatial Scroll, Form Validation & Terminal Simulator
└── assets/
    ├── ambient_bg.webm    # Video nền mờ ảo
    ├── noise.png          # Hạt texture mịn
    └── artifacts/         # Ảnh chụp giao diện sản phẩm thực tế
```

---

## IV. ĐOẠN MÃ MẪU CỐT LÕI (CORE IMPLEMENTATION SNIPPET)

```javascript
// Spatial Scroll Controller using requestAnimationFrame (60 FPS)
let ticking = false;

function onScroll() {
  const scrollY = window.scrollY;
  const heroHeight = document.querySelector('.hero-spatial').offsetHeight;
  const progress = Math.min(scrollY / heroHeight, 1);

  const heroContent = document.querySelector('.hero-content-layer');
  const portalContent = document.querySelector('.portal-layer');

  if (heroContent && portalContent) {
    // Camera moves forward through the hero text
    heroContent.style.transform = `translate3d(0, 0, ${progress * 500}px)`;
    heroContent.style.opacity = `${1 - progress * 1.5}`;

    // The next space approaches from the deep background
    const portalZ = -600 + progress * 600;
    portalContent.style.transform = `translate3d(0, 0, ${portalZ}px)`;
    portalContent.style.opacity = `${progress}`;
  }
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(onScroll);
    ticking = true;
  }
}, { passive: true });
```
