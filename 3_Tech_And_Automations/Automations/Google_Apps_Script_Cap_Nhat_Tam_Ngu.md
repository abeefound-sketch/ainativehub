# 🌐 Google Apps Script — Tự Động Cập Nhật Form Sang Tam Ngữ (VI / EN / ZH)

> **Mục đích:** Cập nhật trực tiếp biểu mẫu hiện tại sang chuẩn Tam ngữ quốc tế (Tiếng Việt • English • 中文).  
> **Ưu điểm:** Giữ nguyên 100% đường link cũ và bảng Google Sheet hiện tại, không làm thay đổi gì về liên kết trên website!

---

### Hướng Dẫn Thực Hiện (20 Giây):

1. Mở trang Google Apps Script bạn đã tạo lúc nãy (hoặc truy cập: **https://script.google.com**).
2. Xóa code cũ trong ô soạn thảo, **copy và dán toàn bộ đoạn code bên dưới** vào.
3. Nhấn **`Ctrl + S`** (Lưu) rồi bấm nút **▶ Chạy (Run)**.
4. Mở lại Google Form, toàn bộ câu hỏi sẽ tự động chuyển sang bản Tam ngữ chuẩn!

---

### Mã Nguồn Script (Copy toàn bộ khối bên dưới):

```javascript
function updateExistingFormToTrilingual() {
  var FORM_ID = '1LgECiqYYXlGMTnLqH-1zI450QLp64weV_7hJo1sX_Uk';
  var form = FormApp.openById(FORM_ID);
  
  // 1. Cập nhật Tiêu đề & Mô tả Tam ngữ
  form.setTitle('AI NATIVE HUB — Discovery Survey | 需求调研与定制咨询 (VI / EN / ZH)');
  
  form.setDescription(
    'Kính gửi Quý Phụ Huynh / Dear Parents / 尊敬的家长：\n\n' +
    '🇻🇳 Để Coach chuẩn bị lộ trình học tập may đo chính xác theo sở thích và năng lực của con, xin Quý Phụ Huynh dành 2 phút điền thông tin sơ bộ dưới đây.\n' +
    '🇬🇧 To help us craft a bespoke 1-on-1 roadmap tailored to your child’s passion and level, please take 2 minutes to complete this brief intake.\n' +
    '🇨🇳 为便于导师根据孩子的兴趣与能力定制专属的1对1培养方案，请您花2分钟填写以下基本信息。\n\n' +
    '🔒 100% Confidential / Toàn bộ thông tin được bảo mật / 信息严格保密。'
  );

  // Xóa các câu hỏi cũ để tạo lại câu hỏi Tam ngữ chuẩn sạch
  var items = form.getItems();
  for (var i = items.length - 1; i >= 0; i--) {
    form.deleteItem(i);
  }

  // Câu 1: Họ & Tên Phụ Huynh
  var q1 = form.addTextItem();
  q1.setTitle('1. Họ & Tên Phụ Huynh / Parent Full Name / 家长姓名 *')
    .setRequired(true);

  // Câu 2: Số Điện Thoại / Zalo / WhatsApp
  var q2 = form.addTextItem();
  q2.setTitle('2. Số Điện Thoại / Zalo / WhatsApp / 电话号码 *')
    .setHelpText('e.g. 0898 907 709 / +84...')
    .setRequired(true);

  // Câu 3: Khối lớp của con
  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Con đang học lớp mấy? / Student Grade / 孩子的年级 *')
    .setChoiceValues([
      '🇻🇳 Cấp 2: Lớp 6 - 8 | 🇬🇧 Middle School: Grade 6 - 8 | 🇨🇳 初中 (6-8年级)',
      '🇻🇳 Lớp 9 Luyện thi vào 10 | 🇬🇧 Grade 9 Exam Prep | 🇨🇳 初三中考备考 (9年级)',
      '🇻🇳 Cấp 3: Lớp 10 - 11 | 🇬🇧 High School: Grade 10 - 11 | 🇨🇳 高中 (10-11年级)',
      '🇻🇳 Lớp 12 / Du học | 🇬🇧 Grade 12 / College Prep | 🇨🇳 高三 / 留学申请'
    ])
    .setRequired(true);

  // Câu 4: Thói quen thiết bị
  var q4 = form.addCheckboxItem();
  q4.setTitle('4. Hiện tại con dùng thiết bị chủ yếu để làm gì? / Primary Device Habits / 屏幕使用习惯')
    .setChoiceValues([
      '📱 Lướt TikTok / YouTube / Mạng xã hội (Social Media Scrolling / 刷短视频与社交)',
      '🎮 Chơi game trực tuyến (Online Gaming / 玩网络游戏)',
      '🎨 Tự tìm tòi sáng tạo video, đồ họa, âm nhạc (Creative Projects / 探索创作与设计)',
      '📚 Học tập, tra cứu tài liệu bài tập (Academic Study & Research / 查资料与学习)'
    ])
    .showOtherOption(true)
    .setRequired(false);

  // Câu 5: Kỳ vọng lớn nhất
  var q5 = form.addParagraphTextItem();
  q5.setTitle('5. Kỳ vọng lớn nhất của gia đình khi con tham gia? / Main Goal for Your Child / 核心培养期望')
    .setHelpText('e.g. Tự tay làm App/Video, chuyển từ nghiện game sang làm chủ công nghệ, rèn kỷ luật số / Build real apps, digital discipline...')
    .setRequired(false);

  Logger.log('====================================================');
  Logger.log('✅ ĐÃ CẬP NHẬT FORM SANG BẢN TAM NGỮ THÀNH CÔNG!');
  Logger.log('🔗 Link Form: ' + form.getPublishedUrl());
  Logger.log('====================================================');
}
```
