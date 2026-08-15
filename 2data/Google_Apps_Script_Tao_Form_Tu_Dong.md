# 🚀 Hướng Dẫn & Mã Nguồn Tự Động Tạo Google Form (Google Apps Script)

> **Mục đích:** Tự động tạo 100% biểu mẫu Google Form khảo sát nhu cầu phụ huynh + tự động liên kết với 1 file Google Sheets để nhận dữ liệu đăng ký.

---

## 1. Hướng Dẫn Thực Hiện Nhanh (30 Giây)

1. Mở trình duyệt và truy cập: **https://script.new** (Đăng nhập tài khoản Google của bạn).
2. Xóa toàn bộ code mặc định trong ô soạn thảo.
3. **Copy toàn bộ khối mã code bên dưới** và dán vào.
4. Bấm biểu tượng **💾 Lưu** (Save / Ctrl + S).
5. Bấm nút **▶ Chạy (Run)** ở thanh công cụ phía trên.
6. Cấp quyền truy cập cho Google Script khi được hỏi (*Review permissions -> Chọn tài khoản -> Advanced/Nâng cao -> Go to project (unsafe) -> Allow*).
7. Xem ở khung **Nhật ký thực thi (Execution log)** ở dưới cùng: Copy link `Published URL` và gửi lại để gắn vào website.

---

## 2. Khối Mã Nguồn Google Apps Script (Copy toàn bộ bên dưới)

```javascript
function createAINativeHubForm() {
  // 1. Tạo Google Form mới với tiêu đề và mô tả chuẩn
  var form = FormApp.create('AI NATIVE HUB — Khảo Sát Nhu Cầu & Tư Vấn May Đo 1-1');
  
  form.setDescription(
    'Kính gửi Quý Phụ Huynh,\n\n' +
    'Để Coach chuẩn bị lộ trình học tập may đo chính xác theo đúng sở thích và năng lực của con, xin Quý Phụ Huynh dành 2 phút điền một số thông tin sơ bộ dưới đây.\n\n' +
    '🔒 Toàn bộ thông tin được bảo mật 100% và chỉ dùng cho mục đích tư vấn định hướng.'
  );
  
  form.setAllowResponseEdits(false);
  form.setAcceptingResponses(true);
  form.setIsQuiz(false);

  // Câu 1: Họ & Tên Phụ Huynh
  var q1 = form.addTextItem();
  q1.setTitle('Họ & Tên Phụ Huynh')
    .setRequired(true);

  // Câu 2: Số Điện Thoại / Zalo
  var q2 = form.addTextItem();
  q2.setTitle('Số Điện Thoại / Zalo để Coach tiện trao đổi')
    .setHelpText('Ví dụ: 0912 345 678')
    .setRequired(true);

  // Câu 3: Khối lớp của con
  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('Con đang học lớp mấy?')
    .setChoiceValues([
      'Cấp 2: Lớp 6 - Lớp 8',
      'Lớp 9 (Chuẩn bị thi chuyển cấp vào 10)',
      'Cấp 3: Lớp 10 - Lớp 11',
      'Lớp 12 / Chuẩn bị hồ sơ Du học & Đại học'
    ])
    .setRequired(true);

  // Câu 4: Thói quen sử dụng thiết bị
  var q4 = form.addCheckboxItem();
  q4.setTitle('Hiện tại con dùng máy tính / điện thoại chủ yếu vào việc gì?')
    .setChoiceValues([
      'Lướt TikTok / YouTube / Mạng xã hội giải trí',
      'Chơi game trực tuyến',
      'Tự tìm tòi đồ họa, làm video hoặc âm nhạc',
      'Học tập, tra cứu tài liệu trên trường'
    ])
    .showOtherOption(true)
    .setRequired(false);

  // Câu 5: Kỳ vọng lớn nhất của gia đình
  var q5 = form.addParagraphTextItem();
  q5.setTitle('Kỳ vọng hoặc mong muốn lớn nhất của gia đình khi con tham gia chương trình?')
    .setHelpText('Ví dụ: Chuyển thói quen nghiện game thành tự tay làm app/video, rèn tính tự giác kỷ luật số, học Vibe Coding săn học bổng...')
    .setRequired(false);

  // 2. Tạo Google Sheet tự động liên kết để hứng toàn bộ câu trả lời
  var ss = SpreadsheetApp.create('AI Native Hub — Danh Sách Đăng Ký Tư Vấn (Responses)');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  // 3. Lấy các đường link cần thiết
  var publishedUrl = form.getPublishedUrl();
  var editUrl = form.getEditUrl();
  var sheetUrl = ss.getUrl();

  Logger.log('====================================================');
  Logger.log('✅ ĐÃ TẠO FORM VÀ BẢNG SHEET THÀNH CÔNG!');
  Logger.log('🔗 LINK GỬI CHO PHỤ HUYNH (Published URL): ' + publishedUrl);
  Logger.log('📊 LINK BẢNG GOOGLE SHEET QUẢN LÝ: ' + sheetUrl);
  Logger.log('✏️ LINK CHỈNH SỬA FORM NẾU CẦN (Edit URL): ' + editUrl);
  Logger.log('====================================================');
}
```
