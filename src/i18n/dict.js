/* Landing-page translations. Order per row: [Khmer, Burmese, Lao, Bahasa Indonesia].
   English is the key itself and needs no row. Reused verbatim from the Neary
   app's own dictionary wherever the same concept appears there, so wording
   stays identical once a visitor moves from this site into the app. */

export const LANGS = [
  { code: "en", native: "English", en: "English" },
  { code: "km", native: "ភាសាខ្មែរ", en: "Khmer" },
  { code: "my", native: "မြန်မာဘာသာ", en: "Burmese" },
  { code: "lo", native: "ພາສາລາວ", en: "Lao" },
  { code: "id", native: "Bahasa Indonesia", en: "Indonesian" },
];

export const SCRIPT_FONT = {
  km: "'Noto Sans Khmer', 'Figtree', sans-serif",
  my: "'Noto Sans Myanmar', 'Figtree', sans-serif",
  lo: "'Noto Sans Lao', 'Figtree', sans-serif",
};

export const DICT = {
  // Nav / footer links
  "News": ["ព័ត៌មាន", "သတင်း", "ຂ່າວ", "Berita"],
  "FAQ": ["សំណួរញឹកញាប់", "မေးလေ့ရှိသောမေးခွန်းများ", "ຄຳຖາມທີ່ພົບເລື້ອຍ", "Tanya Jawab"],
  "About": ["អំពីយើង", "အကြောင်း", "ກ່ຽວກັບ", "Tentang"],
  "Services": ["សេវាកម្ម", "ဝန်ဆောင်မှုများ", "ການບໍລິການ", "Layanan"],
  "Log in": ["ចូលគណនី", "လော့ဂ်အင်ဝင်ရန်", "ເຂົ້າສູ່ລະບົບ", "Masuk"],
  "Register": ["ចុះឈ្មោះ", "စာရင်းသွင်းရန်", "ລົງທະບຽນ", "Daftar"],
  "Get started": ["ចាប់ផ្តើម", "စတင်ရန်", "ເລີ່ມຕົ້ນ", "Mulai"],
  "Learn": ["រៀន", "သင်ယူရန်", "ຮຽນຮູ້", "Belajar"],
  "Admin console": ["កុងសូលអ្នកគ្រប់គ្រង", "စီမံခန့်ခွဲမှု ကွန်ဆိုးလ်", "ຄອນໂຊນຄຸ້ມຄອງ", "Konsol admin"],
  "Explore": ["រុករក", "လေ့လာရန်", "ສຳຫຼວດ", "Jelajahi"],
  "In partnership with": ["ជាដៃគូជាមួយ", "ပူးပေါင်းဆောင်ရွက်သူ", "ຮ່ວມມືກັບ", "Bermitra dengan"],
  "Log in to the app": ["ចូលទៅកម្មវិធី", "အက်ပ်သို့ လော့ဂ်အင်ဝင်ရန်", "ເຂົ້າສູ່ແອັບ", "Masuk ke aplikasi"],
  "CGCC (guarantee scheme)": ["CGCC (គម្រោងធានា)", "CGCC (အာမခံအစီအစဉ်)", "CGCC (ໂຄງການຄ້ຳປະກັນ)", "CGCC (skema penjaminan)"],

  // Disclosure / trust
  "A Ministry of Women's Affairs programme — Kingdom of Cambodia, operated by LinkIT": [
    "កម្មវិធីមួយរបស់ក្រសួងកិច្ចការនារី — ព្រះរាជាណាចក្រកម្ពុជា ដំណើរការដោយ LinkIT",
    "အမျိုးသမီးရေးရာဝန်ကြီးဌာန၏ အစီအစဉ်တစ်ခု — ကမ္ဘောဒီးယားနိုင်ငံ၊ LinkIT မှ လည်ပတ်ဆောင်ရွက်သည်",
    "ໂຄງການຂອງກະຊວງກິດຈະການແມ່ຍິງ — ລາຊະອານາຈັກກຳປູເຈຍ, ດຳເນີນງານໂດຍ LinkIT",
    "Program Kementerian Urusan Perempuan — Kerajaan Kamboja, dioperasikan oleh LinkIT",
  ],
  "We prepare and connect. We do not lend.": [
    "យើងរៀបចំ និងភ្ជាប់ទំនាក់ទំនង។ យើងមិនផ្តល់កម្ចីទេ។",
    "ကျွန်ုပ်တို့ ပြင်ဆင်ပြီး ချိတ်ဆက်ပေးပါသည်။ ကျွန်ုပ်တို့ ချေးငွေမပေးပါ။",
    "ພວກເຮົາກຽມພ້ອມ ແລະ ເຊື່ອມຕໍ່. ພວກເຮົາບໍ່ໄດ້ໃຫ້ກູ້ຢືມ.",
    "Kami menyiapkan dan menghubungkan. Kami tidak memberi pinjaman.",
  ],

  // Hero
  "Let's grow your business,": ["តោះរីកចម្រើនអាជីវកម្មរបស់អ្នក,", "သင့်လုပ်ငန်းကို ကြီးထွားအောင် လုပ်ကြပါစို့,", "ມາຂະຫຍາຍທຸລະກິດຂອງທ່ານ,", "Ayo kembangkan bisnis Anda,"],
  "together.": ["ជាមួយគ្នា។", "အတူတကွ။", "ນຳກັນ.", "bersama."],
  "A free app for women entrepreneurs in Cambodia — learn, track your sales, get a mentor, and get connected to financing when you're ready. In Khmer first.": [
    "កម្មវិធីឥតគិតថ្លៃសម្រាប់សហគ្រិនស្ត្រីនៅកម្ពុជា — រៀន តាមដានការលក់របស់អ្នក ស្វែងរកអ្នកណែនាំ ហើយភ្ជាប់ទៅនឹងហិរញ្ញប្បទាននៅពេលអ្នកត្រៀមខ្លួនរួចរាល់។ ជាភាសាខ្មែរជាមុន។",
    "ကမ္ဘောဒီးယားရှိ အမျိုးသမီး စွန့်ဦးတီထွင်လုပ်ငန်းရှင်များအတွက် အခမဲ့အက်ပ် — သင်ယူပါ၊ သင့်အရောင်းကို မှတ်တမ်းတင်ပါ၊ လမ်းညွှန်တစ်ဦးရယူပြီး အသင့်ဖြစ်သောအခါ ငွေကြေးအထောက်အပံ့နှင့် ချိတ်ဆက်ပါ။ မြန်မာမတိုင်မီ ခမာဘာသာဖြင့် အရင်ရရှိနိုင်ပါသည်။",
    "ແອັບຟຣີສຳລັບຜູ້ປະກອບການແມ່ຍິງໃນກຳປູເຈຍ — ຮຽນຮູ້, ຕິດຕາມການຂາຍ, ຫາທີ່ປຶກສາ, ແລະ ເຊື່ອມຕໍ່ກັບແຫຼ່ງທຶນເມື່ອທ່ານພ້ອມ. ເປັນພາສາຂະແມກ່ອນ.",
    "Aplikasi gratis untuk perempuan wirausaha di Kamboja — belajar, catat penjualan Anda, dapatkan mentor, dan terhubung ke pembiayaan saat Anda siap. Tersedia dalam Bahasa Khmer terlebih dahulu.",
  ],
  "I have an account": ["ខ្ញុំមានគណនីរួចហើយ", "ကျွန်မ/ကျွန်တော် အကောင့်ရှိပြီးသားပါ", "ຂ້ອຍມີບັນຊີແລ້ວ", "Saya sudah punya akun"],
  "See what you get": ["មើលអ្វីដែលអ្នកទទួលបាន", "သင်ရရှိမည့်အရာများကို ကြည့်ရန်", "ເບິ່ງສິ່ງທີ່ທ່ານໄດ້ຮັບ", "Lihat apa yang Anda dapatkan"],
  "Free to use. Available in Khmer, English, Burmese, Lao and Bahasa Indonesia.": [
    "ប្រើប្រាស់ដោយឥតគិតថ្លៃ។ មានជាភាសាខ្មែរ អង់គ្លេស ភូមា ឡាវ និងឥណ្ឌូនេស៊ី។",
    "အခမဲ့ အသုံးပြုနိုင်ပါသည်။ ခမာ၊ အင်္ဂလိပ်၊ မြန်မာ၊ လာအို နှင့် အင်ဒိုနီးရှား ဘာသာစကားများဖြင့် ရရှိနိုင်ပါသည်။",
    "ໃຊ້ຟຣີ. ມີໃຫ້ບໍລິການເປັນພາສາຂະແມ, ອັງກິດ, ມ້ຽນມາ, ລາວ ແລະ ອິນໂດເນເຊຍ.",
    "Gratis digunakan. Tersedia dalam Bahasa Khmer, Inggris, Myanmar, Lao, dan Indonesia.",
  ],

  // How it works
  "How it works": ["របៀបដំណើរការ", "အလုပ်လုပ်ပုံ", "ວິທີການເຮັດວຽກ", "Cara kerjanya"],
  "Four steps, at your own pace": ["ជំហានចំនួនបួន តាមល្បឿនផ្ទាល់ខ្លួនរបស់អ្នក", "အဆင့်လေးဆင့်၊ သင့်ကိုယ်ပိုင်နှုန်းအလိုက်", "ສີ່ຂັ້ນຕອນ, ຕາມຈັງຫວະຂອງທ່ານເອງ", "Empat langkah, sesuai kecepatan Anda sendiri"],
  "Sign up": ["ចុះឈ្មោះចូល", "စာရင်းသွင်းရန်", "ລົງທະບຽນ", "Daftar"],
  "Pick your language, add a few details about your business. Takes a few minutes.": [
    "ជ្រើសរើសភាសារបស់អ្នក បន្ថែមព័ត៌មានលម្អិតមួយចំនួនអំពីអាជីវកម្មរបស់អ្នក។ ចំណាយពេលត្រឹមតែពីរបីនាទីប៉ុណ្ណោះ។",
    "သင့်ဘာသာစကားကို ရွေးချယ်ပြီး၊ သင့်လုပ်ငန်းအကြောင်း အချက်အလက်အနည်းငယ် ထည့်သွင်းပါ။ မိနစ်အနည်းငယ်သာ ကြာမြင့်ပါသည်။",
    "ເລືອກພາສາຂອງທ່ານ, ເພີ່ມລາຍລະອຽດກ່ຽວກັບທຸລະກິດຂອງທ່ານ. ໃຊ້ເວລາພຽງບໍ່ຫຼາຍນາທີ.",
    "Pilih bahasa Anda, tambahkan beberapa detail tentang bisnis Anda. Hanya perlu beberapa menit.",
  ],
  "Build your records": ["បង្កើតកំណត់ត្រារបស់អ្នក", "သင့်မှတ်တမ်းများကို တည်ဆောက်ပါ", "ສ້າງບັນທຶກຂອງທ່ານ", "Bangun catatan Anda"],
  "Learn a little, track your sales, and watch your readiness score grow.": [
    "រៀនបន្តិចម្តងៗ តាមដានការលក់របស់អ្នក ហើយមើលពិន្ទុត្រៀមខ្លួនរបស់អ្នកកើនឡើង។",
    "အနည်းငယ် သင်ယူပြီး၊ သင့်အရောင်းကို မှတ်တမ်းတင်ကာ၊ သင့်အသင့်ဖြစ်မှုရမှတ် တိုးတက်လာသည်ကို ကြည့်ရှုပါ။",
    "ຮຽນຮູ້ໜ້ອຍໜຶ່ງ, ຕິດຕາມການຂາຍ, ແລະເບິ່ງຄະແນນຄວາມພ້ອມຂອງທ່ານເພີ່ມຂຶ້ນ.",
    "Belajar sedikit demi sedikit, catat penjualan Anda, dan lihat skor kesiapan Anda tumbuh.",
  ],
  "Get ready for financing": ["ត្រៀមខ្លួនសម្រាប់ហិរញ្ញប្បទាន", "ငွေကြေးအထောက်အပံ့ အတွက် အသင့်ဖြစ်အောင် ပြင်ဆင်ပါ", "ກຽມພ້ອມສຳລັບແຫຼ່ງທຶນ", "Bersiap untuk pembiayaan"],
  "Register your business and see your score clear the bar for a bank referral.": [
    "ចុះបញ្ជីអាជីវកម្មរបស់អ្នក ហើយមើលពិន្ទុរបស់អ្នកឈានដល់កម្រិតសម្រាប់ការណែនាំទៅធនាគារ។",
    "သင့်လုပ်ငန်းကို မှတ်ပုံတင်ပြီး၊ ဘဏ်သို့ ညွှန်းပို့ရန် လိုအပ်သော ရမှတ်ပမာဏသို့ ရောက်ရှိလာသည်ကို ကြည့်ပါ။",
    "ຈົດທະບຽນທຸລະກິດຂອງທ່ານ ແລະເບິ່ງຄະແນນຂອງທ່ານຜ່ານເກນສຳລັບການສົ່ງຕໍ່ໄປທະນາຄານ.",
    "Daftarkan bisnis Anda dan lihat skor Anda melewati ambang batas untuk rujukan ke bank.",
  ],
  "Connect, on your terms": ["ភ្ជាប់ទំនាក់ទំនង តាមលក្ខខណ្ឌរបស់អ្នក", "ချိတ်ဆက်ပါ၊ သင့်စည်းကမ်းချက်များအတိုင်း", "ເຊື່ອມຕໍ່ຕາມເງື່ອນໄຂຂອງທ່ານ", "Terhubung, dengan syarat Anda sendiri"],
  "Choose to be introduced to a partner bank. You can change your mind at any time.": [
    "ជ្រើសរើសឱ្យបានណែនាំទៅធនាគារដៃគូ។ អ្នកអាចផ្លាស់ប្តូរចិត្តបានគ្រប់ពេល។",
    "မိတ်ဖက်ဘဏ်တစ်ခုသို့ မိတ်ဆက်ပေးရန် ရွေးချယ်ပါ။ သင့်စိတ်ကို အချိန်မရွေး ပြောင်းလဲနိုင်ပါသည်။",
    "ເລືອກທີ່ຈະຖືກແນະນຳໃຫ້ຮູ້ຈັກທະນາຄານຄູ່ຮ່ວມງານ. ທ່ານສາມາດປ່ຽນໃຈໄດ້ທຸກເວລາ.",
    "Pilih untuk diperkenalkan ke bank mitra. Anda bisa berubah pikiran kapan saja.",
  ],

  // Services
  "What you get": ["អ្វីដែលអ្នកទទួលបាន", "သင်ရရှိမည့်အရာများ", "ສິ່ງທີ່ທ່ານໄດ້ຮັບ", "Apa yang Anda dapatkan"],
  "Everything you need, in one place": ["អ្វីៗគ្រប់យ៉ាងដែលអ្នកត្រូវការ នៅកន្លែងតែមួយ", "လိုအပ်သမျှအားလုံးကို တစ်နေရာတည်းတွင်", "ທຸກສິ່ງທີ່ທ່ານຕ້ອງການ ຢູ່ບ່ອນດຽວ", "Semua yang Anda butuhkan, dalam satu tempat"],
  "Six simple services, free to use, built around how a small business actually runs.": [
    "សេវាកម្មសាមញ្ញចំនួនប្រាំមួយ ប្រើប្រាស់ដោយឥតគិតថ្លៃ បង្កើតឡើងតាមរបៀបដែលអាជីវកម្មខ្នាតតូចដំណើរការជាក់ស្តែង។",
    "ရိုးရှင်းသော ဝန်ဆောင်မှုခြောက်ခု၊ အခမဲ့အသုံးပြုနိုင်ပြီး၊ လုပ်ငန်းငယ်တစ်ခု အမှန်တကယ် လည်ပတ်ပုံအတိုင်း ဒီဇိုင်းထုတ်ထားသည်။",
    "ການບໍລິການງ່າຍໆ 6 ຢ່າງ, ໃຊ້ຟຣີ, ອອກແບບຕາມວິທີການດຳເນີນທຸລະກິດຂະໜາດນ້ອຍທີ່ແທ້ຈິງ.",
    "Enam layanan sederhana, gratis digunakan, dirancang sesuai cara usaha kecil sebenarnya berjalan.",
  ],
  "Short, practical lessons on bookkeeping, cash flow, pricing and more — in Khmer, at your own pace.": [
    "មេរៀនខ្លីៗ ជាក់ស្តែងស្តីពីការធ្វើបញ្ជី លំហូរសាច់ប្រាក់ ការកំណត់តម្លៃ និងច្រើនទៀត — ជាភាសាខ្មែរ តាមល្បឿនផ្ទាល់ខ្លួនរបស់អ្នក។",
    "စာရင်းကိုင်ခြင်း၊ ငွေသားစီးဆင်းမှု၊ စျေးနှုန်းသတ်မှတ်ခြင်းနှင့် အခြားအကြောင်းအရာများအတွက် တိုတောင်းပြီး လက်တွေ့ကျသော သင်ခန်းစာများ — ခမာဘာသာစကားဖြင့်၊ သင့်ကိုယ်ပိုင်နှုန်းအတိုင်း။",
    "ບົດຮຽນສັ້ນໆ ແລະ ນຳໃຊ້ໄດ້ຈິງ ກ່ຽວກັບການບັນຊີ, ກະແສເງິນສົດ, ການກຳນົດລາຄາ ແລະ ອື່ນໆ — ເປັນພາສາຂະແມ, ຕາມຈັງຫວະຂອງທ່ານເອງ.",
    "Pelajaran singkat dan praktis tentang pembukuan, arus kas, penetapan harga dan lainnya — dalam Bahasa Khmer, sesuai kecepatan Anda sendiri.",
  ],
  "Track your sales": ["តាមដានការលក់របស់អ្នក", "သင့်အရောင်းကို မှတ်တမ်းတင်ပါ", "ຕິດຕາມການຂາຍຂອງທ່ານ", "Lacak penjualan Anda"],
  "Record what comes in and what goes out every day, by hand or automatically through QR payments.": [
    "កត់ត្រាអ្វីដែលចូល និងអ្វីដែលចេញរាល់ថ្ងៃ ដោយដៃ ឬដោយស្វ័យប្រវត្តិតាមរយៈការទូទាត់ QR។",
    "နေ့စဉ် ဝင်ငွေနှင့် ထွက်ငွေများကို လက်ဖြင့် သို့မဟုတ် QR ငွေပေးချေမှုများမှတစ်ဆင့် အလိုအလျောက် မှတ်တမ်းတင်ပါ။",
    "ບັນທຶກລາຍຮັບ ແລະ ລາຍຈ່າຍທຸກໆມື້, ດ້ວຍມືຫຼືອັດຕະໂນມັດຜ່ານການຈ່າຍເງິນ QR.",
    "Catat pemasukan dan pengeluaran setiap hari, manual atau otomatis lewat pembayaran QR.",
  ],
  "Ask Neary AI": ["សួរ Neary AI", "Neary AI ကို မေးမြန်းပါ", "ຖາມ Neary AI", "Tanya Neary AI"],
  "Get quick answers to everyday business questions, any time. If it can't help safely, a real officer will.": [
    "ទទួលបានចម្លើយរហ័សចំពោះសំណួរអាជីវកម្មប្រចាំថ្ងៃ គ្រប់ពេលវេលា។ ប្រសិនបើវាមិនអាចជួយបានដោយសុវត្ថិភាព មន្ត្រីពិតនឹងជួយ។",
    "နေ့စဉ် လုပ်ငန်းဆိုင်ရာ မေးခွန်းများအတွက် အမြန်ဖြေကြားချက်များ ရယူပါ။ မလုံခြုံစွာ ကူညီနိုင်ခြင်း မရှိပါက၊ တာဝန်ရှိသူ တစ်ဦးက ကူညီပေးပါလိမ့်မည်။",
    "ຮັບຄຳຕອບໄວສຳລັບຄຳຖາມທຸລະກິດປະຈຳວັນ, ທຸກເວລາ. ຖ້າມັນຊ່ວຍບໍ່ໄດ້ຢ່າງປອດໄພ, ເຈົ້າໜ້າທີ່ຈິງຈະຊ່ວຍ.",
    "Dapatkan jawaban cepat untuk pertanyaan bisnis sehari-hari, kapan saja. Jika tidak bisa membantu dengan aman, petugas asli yang akan membantu.",
  ],
  "Check your readiness": ["ពិនិត្យភាពត្រៀមខ្លួនរបស់អ្នក", "သင့်အသင့်ဖြစ်မှုကို စစ်ဆေးပါ", "ກວດສອບຄວາມພ້ອມຂອງທ່ານ", "Periksa kesiapan Anda"],
  "See a simple score for how ready your business is — and exactly what would raise it.": [
    "មើលពិន្ទុសាមញ្ញមួយបង្ហាញពីកម្រិតត្រៀមខ្លួនរបស់អាជីវកម្មអ្នក — និងអ្វីដែលនឹងបង្កើនវាឱ្យច្បាស់លាស់។",
    "သင့်လုပ်ငန်း မည်မျှအသင့်ဖြစ်ကြောင်း ရိုးရှင်းသော ရမှတ်တစ်ခုကို ကြည့်ပါ — ၎င်းကို မည်သို့မြှင့်တင်ရမည်ကိုပါ အတိအကျ သိရှိနိုင်ပါသည်။",
    "ເບິ່ງຄະແນນງ່າຍໆວ່າທຸລະກິດຂອງທ່ານພ້ອມພຽງໃດ — ແລະສິ່ງທີ່ຈະຊ່ວຍເພີ່ມມັນຢ່າງແນ່ນອນ.",
    "Lihat skor sederhana seberapa siap bisnis Anda — dan persisnya apa yang bisa meningkatkannya.",
  ],
  "Talk to a mentor": ["និយាយជាមួយអ្នកណែនាំ", "လမ်းညွှန်တစ်ဦးနှင့် စကားပြောပါ", "ລົມກັບທີ່ປຶກສາ", "Bicara dengan mentor"],
  "Verified women who've grown a business like yours, matched by sector and province.": [
    "ស្ត្រីដែលបានផ្ទៀងផ្ទាត់ ដែលបានលូតលាស់អាជីវកម្មដូចរបស់អ្នក ផ្គូផ្គងតាមវិស័យ និងខេត្ត។",
    "သင့်ကဲ့သို့ လုပ်ငန်းကို ကြီးထွားအောင် လုပ်ဆောင်ခဲ့သော အတည်ပြုပြီးသား အမျိုးသမီးများ၊ က႑နှင့် ခရိုင်အလိုက် ကိုက်ညီအောင် စီစဉ်ပေးထားသည်။",
    "ແມ່ຍິງທີ່ຢັ້ງຢືນແລ້ວ ຜູ້ທີ່ໄດ້ຂະຫຍາຍທຸລະກິດຄືກັບຂອງທ່ານ, ຈັບຄູ່ຕາມຂະແໜງການ ແລະ ແຂວງ.",
    "Perempuan terverifikasi yang telah mengembangkan bisnis seperti milik Anda, dicocokkan berdasarkan sektor dan provinsi.",
  ],
  "Get connected to financing": ["ភ្ជាប់ទៅនឹងហិរញ្ញប្បទាន", "ငွေကြေးအထောက်အပံ့နှင့် ချိတ်ဆက်ပါ", "ເຊື່ອມຕໍ່ກັບແຫຼ່ງທຶນ", "Terhubung ke pembiayaan"],
  "When you're ready, we introduce you to a partner bank — only with your say-so, every time.": [
    "នៅពេលអ្នកត្រៀមខ្លួនរួចរាល់ យើងនឹងណែនាំអ្នកទៅកាន់ធនាគារដៃគូ — ដោយមានការយល់ព្រមពីអ្នកគ្រប់ពេល។",
    "သင် အသင့်ဖြစ်သောအခါ၊ ကျွန်ုပ်တို့သည် သင့်ကို မိတ်ဖက်ဘဏ်တစ်ခုသို့ မိတ်ဆက်ပေးပါမည် — သင့်ခွင့်ပြုချက်ဖြင့်သာ၊ အမြဲတမ်း။",
    "ເມື່ອທ່ານພ້ອມ, ພວກເຮົາຈະແນະນຳທ່ານໃຫ້ຮູ້ຈັກທະນາຄານຄູ່ຮ່ວມງານ — ດ້ວຍການຍິນຍອມຂອງທ່ານເທົ່ານັ້ນ, ທຸກຄັ້ງ.",
    "Saat Anda siap, kami memperkenalkan Anda ke bank mitra — hanya dengan persetujuan Anda, setiap saat.",
  ],
  "See all services": ["មើលសេវាកម្មទាំងអស់", "ဝန်ဆောင်မှုအားလုံးကို ကြည့်ရန်", "ເບິ່ງການບໍລິການທັງໝົດ", "Lihat semua layanan"],

  // CTA
  "Ready to get started?": ["ត្រៀមខ្លួនចាប់ផ្តើមហើយឬនៅ?", "စတင်ရန် အဆင်သင့်ဖြစ်ပြီလား?", "ພ້ອມທີ່ຈະເລີ່ມຕົ້ນແລ້ວບໍ?", "Siap untuk memulai?"],
  "Create a business profile in minutes and see your first Business Health score today.": [
    "បង្កើតប្រវត្តិរូបអាជីវកម្មក្នុងរយៈពេលប៉ុន្មាននាទី ហើយមើលពិន្ទុសុខភាពអាជីវកម្មដំបូងរបស់អ្នកនៅថ្ងៃនេះ។",
    "မိနစ်အနည်းငယ်အတွင်း လုပ်ငန်းပရိုဖိုင်တစ်ခု ဖန်တီးပြီး၊ ယနေ့ပင် သင့်ပထမဆုံး လုပ်ငန်းကျန်းမာရေးရမှတ်ကို ကြည့်ပါ။",
    "ສ້າງໂປຣໄຟລ໌ທຸລະກິດພາຍໃນບໍ່ຈັກນາທີ ແລະ ເບິ່ງຄະແນນສຸຂະພາບທຸລະກິດທຳອິດຂອງທ່ານມື້ນີ້.",
    "Buat profil bisnis dalam hitungan menit dan lihat skor Kesehatan Bisnis pertama Anda hari ini.",
  ],

  // Footer
  "A Ministry of Women's Affairs programme, Kingdom of Cambodia — delivered by LinkIT.": [
    "កម្មវិធីមួយរបស់ក្រសួងកិច្ចការនារី ព្រះរាជាណាចក្រកម្ពុជា — ដឹកនាំដោយ LinkIT។",
    "အမျိုးသမီးရေးရာဝန်ကြီးဌာန၏ အစီအစဉ်တစ်ခု၊ ကမ္ဘောဒီးယားနိုင်ငံ — LinkIT မှ ဆောင်ရွက်သည်။",
    "ໂຄງການຂອງກະຊວງກິດຈະການແມ່ຍິງ, ລາຊະອານາຈັກກຳປູເຈຍ — ດຳເນີນການໂດຍ LinkIT.",
    "Program Kementerian Urusan Perempuan, Kerajaan Kamboja — diselenggarakan oleh LinkIT.",
  ],
  "Neary prepares and connects — it never lends money or holds your funds. Financing decisions are always made by the partner bank. This is a pilot-stage programme and figures shown may include illustrative data during rollout.": [
    "Neary រៀបចំ និងភ្ជាប់ទំនាក់ទំនង — វាមិនដែលផ្តល់កម្ចី ឬកាន់កាប់មូលនិធិរបស់អ្នកឡើយ។ ការសម្រេចចិត្តផ្តល់ហិរញ្ញប្បទាន តែងតែធ្វើឡើងដោយធនាគារដៃគូ។ នេះជាកម្មវិធីនៅដំណាក់កាលសាកល្បង ហើយចំនួនដែលបង្ហាញអាចរួមបញ្ចូលទិន្នន័យឧទាហរណ៍ក្នុងអំឡុងពេលដាក់ឱ្យប្រើប្រាស់ជាបណ្តើរៗ។",
    "Neary သည် ပြင်ဆင်ပေးပြီး ချိတ်ဆက်ပေးသည် — ၎င်းသည် ငွေချေးပေးခြင်း သို့မဟုတ် သင့်ရန်ပုံငွေများကို ကိုင်တွယ်ခြင်း လုံးဝ မရှိပါ။ ငွေကြေးအထောက်အပံ့ ဆုံးဖြတ်ချက်များကို မိတ်ဖက်ဘဏ်က အမြဲ ချမှတ်ပါသည်။ ဤသည်မှာ စမ်းသပ်အဆင့် အစီအစဉ်တစ်ခုဖြစ်ပြီး ပြသထားသော ကိန်းဂဏန်းများသည် စတင်လည်ပတ်ချိန်တွင် သာဓကဒေတာများ ပါဝင်နိုင်ပါသည်။",
    "Neary ກຽມພ້ອມ ແລະ ເຊື່ອມຕໍ່ — ມັນບໍ່ເຄີຍໃຫ້ກູ້ຢືມເງິນ ຫຼືຖືເງິນທຶນຂອງທ່ານ. ການຕັດສິນໃຈດ້ານການເງິນແມ່ນເຮັດໂດຍທະນາຄານຄູ່ຮ່ວມງານສະເໝີ. ນີ້ແມ່ນໂຄງການໄລຍະນຳຮ່ອງ ແລະ ຕົວເລກທີ່ສະແດງອາດປະກອບມີຂໍ້ມູນຕົວຢ່າງໃນລະຫວ່າງການເປີດຕົວ.",
    "Neary menyiapkan dan menghubungkan — tidak pernah meminjamkan uang atau menyimpan dana Anda. Keputusan pembiayaan selalu dibuat oleh bank mitra. Ini adalah program tahap percontohan dan angka yang ditampilkan mungkin termasuk data ilustratif selama peluncuran.",
  ],

  // Stats
  "Women already using Neary": ["ស្ត្រីដែលកំពុងប្រើប្រាស់ Neary រួចហើយ", "Neary ကို လက်ရှိ အသုံးပြုနေသော အမျိုးသမီးများ", "ແມ່ຍິງທີ່ກຳລັງໃຊ້ Neary ແລ້ວ", "Perempuan yang sudah menggunakan Neary"],
  "Provinces served today": ["ខេត្តដែលបានផ្តល់សេវាកម្មនាពេលបច្ចុប្បន្ន", "ယနေ့ ဝန်ဆောင်မှုပေးနေသော ခရိုင်များ", "ແຂວງທີ່ໃຫ້ບໍລິການໃນປັດຈຸບັນ", "Provinsi yang dilayani saat ini"],
  "Loans approved through partner banks": ["ប្រាក់កម្ចីត្រូវបានអនុម័តតាមរយៈធនាគារដៃគូ", "မိတ်ဖက်ဘဏ်များမှတစ်ဆင့် အတည်ပြုပြီးသော ချေးငွေများ", "ເງິນກູ້ທີ່ອະນຸມັດຜ່ານທະນາຄານຄູ່ຮ່ວມງານ", "Pinjaman yang disetujui lewat bank mitra"],
  "Financing unlocked so far": ["ហិរញ្ញប្បទានដែលទទួលបានរហូតមកដល់ពេលនេះ", "ယခုအထိ ရရှိပြီးသော ငွေကြေးအထောက်အပံ့", "ແຫຼ່ງທຶນທີ່ປົດລັອກມາຮອດປັດຈຸບັນ", "Pembiayaan yang berhasil diperoleh sejauh ini"],
  "Figures from the current pilot, updated regularly.": [
    "ចំនួនតួលេខមកពីគម្រោងសាកល្បងបច្ចុប្បន្ន ធ្វើបច្ចុប្បន្នភាពជាទៀងទាត់។",
    "လက်ရှိ စမ်းသပ်အစီအစဉ်မှ ကိန်းဂဏန်းများ၊ ပုံမှန် အပ်ဒိတ်လုပ်ထားသည်။",
    "ຕົວເລກຈາກໂຄງການນຳຮ່ອງປັດຈຸບັນ, ອັບເດດເປັນປະຈຳ.",
    "Angka dari program percontohan saat ini, diperbarui secara berkala.",
  ],

  // Community
  "Some of the businesses on Neary": ["អាជីវកម្មមួយចំនួននៅលើ Neary", "Neary ပေါ်ရှိ လုပ်ငန်းအချို့", "ບາງທຸລະກິດຢູ່ໃນ Neary", "Beberapa bisnis di Neary"],
  "Tailoring & handicraft": ["ជាងកាត់ដេរ និងសិប្បកម្ម", "ချုပ်ခြင်း နှင့် လက်မှုပညာ", "ການຕັດຫຍິບ ແລະ ຫັດຖະກຳ", "Menjahit & kerajinan tangan"],
  "Food & beverage": ["ម្ហូបអាហារ និងភេសជ្ជៈ", "အစားအသောက်", "ອາຫານ ແລະ ເຄື່ອງດື່ມ", "Makanan & minuman"],
  "Retail & grocery": ["លក់រាយ និងទំនិញប្រើប្រាស់", "လက်လီရောင်းချခြင်း နှင့် စျေးဝယ်", "ຄ້າຍ ແລະ ຮ້ານຂາຍເຄື່ອງ", "Ritel & sembako"],
  "Beauty & personal care": ["សម្ផស្ស និងការថែទាំផ្ទាល់ខ្លួន", "အလှအပ နှင့် ကိုယ်ရေးကိုယ်တာ စောင့်ရှောက်မှု", "ຄວາມງາມ ແລະ ການດູແລສ່ວນຕົວ", "Kecantikan & perawatan pribadi"],
  "Agro-processing": ["កែច្នៃកសិផល", "စိုက်ပျိုးရေးထုတ်ကုန် ပြုပြင်ခြင်း", "ການປຸງແຕ່ງກະສິກຳ", "Pengolahan hasil pertanian"],
  "Other services": ["សេវាកម្មផ្សេងទៀត", "အခြားဝန်ဆောင်မှုများ", "ການບໍລິການອື່ນໆ", "Layanan lainnya"],

  // News
  "News & updates": ["ព័ត៌មាន និងបច្ចុប្បន្នភាព", "သတင်းနှင့် အပ်ဒိတ်များ", "ຂ່າວ ແລະ ອັບເດດ", "Berita & pembaruan"],
  "What's new": ["អ្វីដែលថ្មី", "ဘာအသစ်များ ရှိလဲ", "ມີຫຍັງໃໝ່", "Apa yang baru"],
  "What's new on Neary": ["អ្វីដែលថ្មីនៅលើ Neary", "Neary တွင် ဘာအသစ်များ ရှိလဲ", "ມີຫຍັງໃໝ່ໃນ Neary", "Apa yang baru di Neary"],
  "Partnerships, milestones and new features, as they happen.": [
    "កិច្ចសហការ ស្ថានីយ៍សំខាន់ៗ និងមុខងារថ្មីៗ នៅពេលវាកើតឡើង។",
    "ပူးပေါင်းဆောင်ရွက်မှုများ၊ မှတ်တိုင်များနှင့် အင်္ဂါရပ်အသစ်များကို ဖြစ်ပေါ်တိုင်း။",
    "ການຮ່ວມມື, ໄລຍະສຳຄັນ ແລະ ຄຸນສົມບັດໃໝ່, ໃນທັນທີທີ່ມັນເກີດຂຶ້ນ.",
    "Kemitraan, pencapaian, dan fitur baru, begitu terjadi.",
  ],
  "See all news": ["មើលព័ត៌មានទាំងអស់", "သတင်းအားလုံးကို ကြည့်ရန်", "ເບິ່ງຂ່າວທັງໝົດ", "Lihat semua berita"],
  "New feature": ["មុខងារថ្មី", "လုပ်ဆောင်ချက်အသစ်", "ຄຸນສົມບັດໃໝ່", "Fitur baru"],
  "Partnership": ["ភាពជាដៃគូ", "ပူးပေါင်းဆောင်ရွက်မှု", "ການຮ່ວມມື", "Kemitraan"],
  "Milestone": ["ស្ថានីយ៍សំខាន់", "မှတ်တိုင်", "ໄລຍະສຳຄັນ", "Pencapaian"],
  "New content": ["មាតិកាថ្មី", "အကြောင်းအရာအသစ်", "ເນື້ອຫາໃໝ່", "Konten baru"],
  "Programme": ["កម្មវិធី", "အစီအစဉ်", "ໂຄງການ", "Program"],
  "Verified Mentors is here": ["អ្នកណែនាំដែលបានផ្ទៀងផ្ទាត់មកដល់ហើយ", "အတည်ပြုပြီးသား လမ်းညွှန်များ ရောက်ရှိလာပြီ", "ທີ່ປຶກສາທີ່ຢັ້ງຢືນແລ້ວມາຮອດແລ້ວ", "Mentor Terverifikasi kini hadir"],
  "Ask for a mentor in your sector and province — sessions are by phone or message, whenever suits you both.": [
    "ស្នើសុំអ្នកណែនាំក្នុងវិស័យ និងខេត្តរបស់អ្នក — វគ្គជួបគ្នាតាមទូរស័ព្ទ ឬសារ នៅពេលណាដែលងាយស្រួលសម្រាប់អ្នកទាំងពីរ។",
    "သင့်ကဏ္ဍနှင့် ခရိုင်ရှိ လမ်းညွှန်တစ်ဦးကို တောင်းဆိုပါ — အစည်းအဝေးများသည် ဖုန်း သို့မဟုတ် မက်ဆေ့ချ်ဖြင့်၊ နှစ်ဦးလုံးအဆင်ပြေချိန်တွင် ဖြစ်ပါသည်။",
    "ຂໍທີ່ປຶກສາໃນຂະແໜງການ ແລະ ແຂວງຂອງທ່ານ — ການສົນທະນາຜ່ານໂທລະສັບ ຫຼືຂໍ້ຄວາມ, ເມື່ອທັງສອງຝ່າຍສະດວກ.",
    "Minta mentor di sektor dan provinsi Anda — sesi lewat telepon atau pesan, kapan pun cocok untuk Anda berdua.",
  ],
  "Wing Bank joins as a lending partner": ["Wing Bank ចូលរួមជាដៃគូឥណទាន", "Wing Bank သည် ချေးငွေမိတ်ဖက်အဖြစ် ပါဝင်လာသည်", "Wing Bank ເຂົ້າຮ່ວມເປັນຄູ່ຮ່ວມງານດ້ານເງິນກູ້", "Wing Bank bergabung sebagai mitra pembiayaan"],
  "Women who reach a finance-ready score can now also be referred to Wing Bank, alongside ABA Bank and PRASAC.": [
    "ស្ត្រីដែលឈានដល់ពិន្ទុត្រៀមខ្លួនផ្នែកហិរញ្ញវត្ថុ ឥឡូវនេះក៏អាចត្រូវបានណែនាំទៅ Wing Bank ផងដែរ រួមជាមួយ ABA Bank និង PRASAC។",
    "ငွေကြေးအထောက်အပံ့ ရမှတ်ရောက်ရှိသော အမျိုးသမီးများသည် ABA Bank နှင့် PRASAC နှင့်အတူ Wing Bank သို့လည်း ယခု ညွှန်းပို့နိုင်ပါပြီ။",
    "ແມ່ຍິງທີ່ບັນລຸຄະແນນພ້ອມດ້ານການເງິນ ດຽວນີ້ສາມາດຖືກສົ່ງຕໍ່ໄປ Wing Bank ນຳ ABA Bank ແລະ PRASAC ນຳກັນ.",
    "Perempuan yang mencapai skor siap-finansial kini juga bisa dirujuk ke Wing Bank, selain ABA Bank dan PRASAC.",
  ],
  "Over 1,300 women now on Neary": ["ស្ត្រីជាង ១,៣០០ នាក់កំពុងប្រើ Neary ហើយឥឡូវនេះ", "အမျိုးသမီး ၁,၃၀၀ ကျော် Neary ပေါ်တွင် ရှိနေပြီ", "ແມ່ຍິງກວ່າ 1,300 ຄົນຢູ່ໃນ Neary ແລ້ວ", "Lebih dari 1.300 perempuan kini di Neary"],
  "Across Phnom Penh, Siem Reap, Battambang and Kampong Cham — with 29 loans approved so far.": [
    "គ្រប់ខេត្តភ្នំពេញ សៀមរាប បាត់ដំបង និងកំពង់ចាម — ជាមួយប្រាក់កម្ចីចំនួន ២៩ ត្រូវបានអនុម័តរួចហើយ។",
    "ဖနွမ်းပင်၊ စီယမ်းရိပ်၊ ဗတ္တမ်ဘောင်း နှင့် ကမ်ပောင်ချမ်း တစ်ဝှမ်းလုံးတွင် — ချေးငွေ ၂၉ ခု အတည်ပြုပြီးဖြစ်သည်။",
    "ທົ່ວແຂວງພະນົມເປັນ, ຊຽມຣຽບ, ບັດຕຳບອງ ແລະ ກຳປົງຈາມ — ມີເງິນກູ້ 29 ລາຍການອະນຸມັດແລ້ວ.",
    "Di Phnom Penh, Siem Reap, Battambang dan Kampong Cham — dengan 29 pinjaman yang disetujui sejauh ini.",
  ],
  "New lesson: Selling online": ["មេរៀនថ្មី៖ លក់តាមអនឡាញ", "သင်ခန်းစာအသစ်- အွန်လိုင်းရောင်းချခြင်း", "ບົດຮຽນໃໝ່: ການຂາຍອອນລາຍ", "Pelajaran baru: Berjualan online"],
  "A short guide to listing your products online and taking orders through social media.": [
    "មគ្គុទ្ទេសក៍ខ្លីមួយស្តីពីការដាក់បង្ហាញផលិតផលរបស់អ្នកលើអនឡាញ និងទទួលការបញ្ជាទិញតាមប្រព័ន្ធផ្សព្វផ្សាយសង្គម។",
    "သင့်ကုန်ပစ္စည်းများကို အွန်လိုင်းတွင် စာရင်းသွင်းပြီး ဆိုရှယ်မီဒီယာမှတစ်ဆင့် အော်ဒါများ လက်ခံရယူရန် အတိုချုပ် လမ်းညွှန်။",
    "ຄູ່ມືສັ້ນໆ ກ່ຽວກັບການລົງລາຍການສິນຄ້າອອນລາຍ ແລະ ຮັບຄຳສັ່ງຊື້ຜ່ານໂຊຊຽວມີເດຍ.",
    "Panduan singkat memasang produk Anda secara online dan menerima pesanan lewat media sosial.",
  ],
  "Digital Selling Bootcamp — applications open": ["វគ្គបណ្តុះបណ្តាលលក់ឌីជីថល — ការដាក់ពាក្យបើកហើយ", "ဒစ်ဂျစ်တယ် ရောင်းချရေး လေ့ကျင့်သင်တန်း — လျှောက်လွှာများ ဖွင့်ပါပြီ", "ຄ້າຍຝຶກອົບຮົມການຂາຍດິຈິຕອລ — ເປີດຮັບສະໝັກແລ້ວ", "Bootcamp Penjualan Digital — pendaftaran dibuka"],
  "A free training programme with 120 places, run with an e-commerce partner.": [
    "កម្មវិធីបណ្តុះបណ្តាលឥតគិតថ្លៃដែលមានកន្លែងចំនួន ១២០ ដំណើរការជាមួយដៃគូអុីខមមើស។",
    "ေနရာ ၁၂၀ ပါဝင်သော အခမဲ့ လေ့ကျင့်ရေး အစီအစဉ်တစ်ခု၊ အီးကామတ်စ် မိတ်ဖက်နှင့်အတူ လုပ်ဆောင်သည်။",
    "ໂຄງການຝຶກອົບຮົມຟຣີທີ່ມີ 120 ບ່ອນ, ດຳເນີນການຮ່ວມກັບຄູ່ຮ່ວມງານອີຄອມເມີຊ.",
    "Program pelatihan gratis dengan 120 tempat, diselenggarakan bersama mitra e-commerce.",
  ],

  // FAQ
  "Frequently asked": ["សំណួរដែលសួរញឹកញាប់", "မကြာခဏ မေးလေ့ရှိသော", "ຄຳຖາມທີ່ພົບເລື້ອຍ", "Pertanyaan umum"],
  "Questions people ask us": ["សំណួរដែលមនុស្សសួរមកយើង", "ကျွန်ုပ်တို့ကို လူများ မေးလေ့ရှိသော မေးခွန်းများ", "ຄຳຖາມທີ່ຄົນມັກຖາມພວກເຮົາ", "Pertanyaan yang sering ditanyakan"],
  "Is Neary a bank? Will I get a loan directly from Neary?": [
    "តើ Neary ជាធនាគារឬ? តើខ្ញុំនឹងទទួលបានប្រាក់កម្ចីដោយផ្ទាល់ពី Neary ដែរឬទេ?",
    "Neary သည် ဘဏ်တစ်ခုလား? Neary ထံမှ တိုက်ရိုက် ချေးငွေရမည်လား?",
    "Neary ເປັນທະນາຄານບໍ? ຂ້ອຍຈະໄດ້ຮັບເງິນກູ້ໂດຍກົງຈາກ Neary ບໍ?",
    "Apakah Neary bank? Apakah saya akan mendapat pinjaman langsung dari Neary?",
  ],
  "No. Neary does not lend money and never makes the credit decision. We help you get ready — with records, formalization and a clear readiness score — then introduce you to a partner bank if you choose to be. The bank decides.": [
    "ទេ។ Neary មិនផ្តល់ប្រាក់កម្ចី ហើយមិនដែលធ្វើការសម្រេចចិត្តផ្តល់ឥណទានឡើយ។ យើងជួយអ្នកឱ្យត្រៀមខ្លួន — ជាមួយកំណត់ត្រា ការចុះបញ្ជីអាជីវកម្ម និងពិន្ទុត្រៀមខ្លួនច្បាស់លាស់ — បន្ទាប់មកណែនាំអ្នកទៅធនាគារដៃគូ ប្រសិនបើអ្នកជ្រើសរើសធ្វើដូច្នេះ។ ធនាគារជាអ្នកសម្រេចចិត្ត។",
    "မဟုတ်ပါ။ Neary သည် ငွေချေးမပေးပါ၊ ချေးငွေဆိုင်ရာ ဆုံးဖြတ်ချက်ကိုလည်း မချမှတ်ပါ။ ကျွန်ုပ်တို့သည် သင့်ကို အသင့်ဖြစ်အောင် ကူညီပေးပါသည် — မှတ်တမ်းများ၊ မှတ်ပုံတင်ခြင်းနှင့် ရှင်းလင်းသော အသင့်ဖြစ်မှုရမှတ်ဖြင့် — ထို့နောက် သင်ရွေးချယ်ပါက မိတ်ဖက်ဘဏ်တစ်ခုသို့ မိတ်ဆက်ပေးပါသည်။ ဘဏ်ကသာ ဆုံးဖြတ်ပါသည်။",
    "ບໍ່. Neary ບໍ່ໄດ້ໃຫ້ກູ້ຢືມເງິນ ແລະ ບໍ່ເຄີຍຕັດສິນໃຈເລື່ອງສິນເຊື່ອ. ພວກເຮົາຊ່ວຍໃຫ້ທ່ານກຽມພ້ອມ — ດ້ວຍບັນທຶກ, ການຈົດທະບຽນ ແລະ ຄະແນນຄວາມພ້ອມທີ່ຊັດເຈນ — ຈາກນັ້ນແນະນຳທ່ານໃຫ້ຮູ້ຈັກທະນາຄານຄູ່ຮ່ວມງານຖ້າທ່ານເລືອກ. ທະນາຄານເປັນຜູ້ຕັດສິນໃຈ.",
    "Tidak. Neary tidak meminjamkan uang dan tidak pernah membuat keputusan kredit. Kami membantu Anda siap — dengan catatan, formalisasi bisnis dan skor kesiapan yang jelas — lalu memperkenalkan Anda ke bank mitra jika Anda memilihnya. Bank yang memutuskan.",
  ],
  "Is it free to use?": ["តើវាឥតគិតថ្លៃឬទេ?", "အခမဲ့ အသုံးပြုနိုင်ပါသလား?", "ໃຊ້ຟຣີບໍ?", "Apakah gratis digunakan?"],
  "Yes. Neary is a Ministry of Women's Affairs programme, operated by LinkIT, and is free for women entrepreneurs to use.": [
    "ព្រម។ Neary គឺជាកម្មវិធីរបស់ក្រសួងកិច្ចការនារី ដំណើរការដោយ LinkIT ហើយឥតគិតថ្លៃសម្រាប់សហគ្រិនស្ត្រីប្រើប្រាស់។",
    "ဟုတ်ကဲ့။ Neary သည် အမျိုးသမီးရေးရာဝန်ကြီးဌာန၏ အစီအစဉ်တစ်ခုဖြစ်ပြီး LinkIT မှ ဆောင်ရွက်သည်၊ အမျိုးသမီး စွန့်ဦးတီထွင်လုပ်ငန်းရှင်များ အခမဲ့ အသုံးပြုနိုင်ပါသည်။",
    "ແມ່ນ. Neary ເປັນໂຄງການຂອງກະຊວງກິດຈະການແມ່ຍິງ, ດຳເນີນການໂດຍ LinkIT, ແລະ ຟຣີສຳລັບຜູ້ປະກອບການແມ່ຍິງ.",
    "Ya. Neary adalah program Kementerian Urusan Perempuan, dioperasikan oleh LinkIT, dan gratis digunakan oleh perempuan wirausaha.",
  ],
  "Is my information safe?": ["តើព័ត៌មានរបស់ខ្ញុំមានសុវត្ថិភាពទេ?", "ကျွန်မ၏ အချက်အလက်များ လုံခြုံပါသလား?", "ຂໍ້ມູນຂອງຂ້ອຍປອດໄພບໍ?", "Apakah informasi saya aman?"],
  "You control what's shared and with whom. Nothing goes to a bank unless you start that referral yourself and approve it. You can withdraw your consent at any time, and you can ask to see, correct or delete your data.": [
    "អ្នកគ្រប់គ្រងអ្វីដែលត្រូវចែករំលែក និងជាមួយអ្នកណា។ គ្មានអ្វីត្រូវបានផ្ញើទៅធនាគារឡើយ លុះត្រាតែអ្នកផ្តើមការណែនាំនោះដោយខ្លួនឯង ហើយអនុម័តវា។ អ្នកអាចដកការយល់ព្រមរបស់អ្នកបានគ្រប់ពេល ហើយអ្នកអាចស្នើសុំមើល កែតម្រូវ ឬលុបទិន្នន័យរបស់អ្នក។",
    "မည်သည့်အရာကို မည်သူနှင့် မျှဝေမည်ကို သင်ကိုယ်တိုင် ထိန်းချုပ်ပါသည်။ သင်ကိုယ်တိုင် ထိုညွှန်းပို့မှုကို စတင်ပြီး အတည်ပြုမှသာ ဘဏ်သို့ ပေးပို့ပါသည်။ သင်၏ သဘောတူညီချက်ကို အချိန်မရွေး ရုပ်သိမ်းနိုင်ပြီး၊ သင့်ဒေတာကို ကြည့်ရှုရန်၊ ပြင်ဆင်ရန် သို့မဟုတ် ဖျက်ရန် တောင်းဆိုနိုင်ပါသည်။",
    "ທ່ານຄວບຄຸມສິ່ງທີ່ຈະແບ່ງປັນ ແລະ ກັບໃຜ. ບໍ່ມີຫຍັງຖືກສົ່ງໄປທະນາຄານ ເວັ້ນເສຍແຕ່ທ່ານເລີ່ມການສົ່ງຕໍ່ນັ້ນເອງ ແລະ ອະນຸມັດມັນ. ທ່ານສາມາດຖອນການຍິນຍອມໄດ້ທຸກເວລາ, ແລະ ສາມາດຂໍເບິ່ງ, ແກ້ໄຂ ຫຼືລຶບຂໍ້ມູນຂອງທ່ານໄດ້.",
    "Anda mengontrol apa yang dibagikan dan dengan siapa. Tidak ada yang dikirim ke bank kecuali Anda sendiri yang memulai rujukan itu dan menyetujuinya. Anda bisa mencabut persetujuan kapan saja, dan bisa meminta untuk melihat, mengoreksi, atau menghapus data Anda.",
  ],
  "Do I need to already have a registered business?": ["តើខ្ញុំចាំបាច់ត្រូវមានអាជីវកម្មដែលបានចុះបញ្ជីរួចហើយឬទេ?", "မှတ်ပုံတင်ပြီးသား လုပ်ငန်းတစ်ခု ရှိရမည်လား?", "ຂ້ອຍຕ້ອງມີທຸລະກິດທີ່ຈົດທະບຽນແລ້ວບໍ?", "Apakah saya harus sudah punya bisnis yang terdaftar?"],
  "No — you can start recording your sales and learning right away. Registering your business is a step inside the app when you're ready, with a guided checklist.": [
    "ទេ — អ្នកអាចចាប់ផ្តើមកត់ត្រាការលក់ និងរៀនបានភ្លាមៗ។ ការចុះបញ្ជីអាជីវកម្មរបស់អ្នកគឺជាជំហានមួយនៅក្នុងកម្មវិធីនៅពេលអ្នកត្រៀមខ្លួន ជាមួយបញ្ជីត្រួតពិនិត្យណែនាំ។",
    "မဟုတ်ပါ — သင့်အရောင်းကို ချက်ချင်း မှတ်တမ်းတင်ပြီး သင်ယူနိုင်ပါသည်။ သင့်လုပ်ငန်းကို မှတ်ပုံတင်ခြင်းသည် သင် အသင့်ဖြစ်သောအခါ အက်ပ်အတွင်း အဆင့်တစ်ခု ဖြစ်ပြီး၊ လမ်းညွှန် စစ်ဆေးစာရင်းနှင့်အတူ ဖြစ်ပါသည်။",
    "ບໍ່ — ທ່ານສາມາດເລີ່ມບັນທຶກການຂາຍ ແລະ ຮຽນຮູ້ໄດ້ທັນທີ. ການຈົດທະບຽນທຸລະກິດຂອງທ່ານແມ່ນຂັ້ນຕອນໜຶ່ງພາຍໃນແອັບເມື່ອທ່ານພ້ອມ, ພ້ອມລາຍການກວດສອບແນະນຳ.",
    "Tidak — Anda bisa langsung mulai mencatat penjualan dan belajar. Mendaftarkan bisnis Anda adalah langkah di dalam aplikasi saat Anda siap, dengan daftar periksa berpandu.",
  ],
  "What languages does Neary support?": ["តើ Neary គាំទ្រភាសាអ្វីខ្លះ?", "Neary က ဘယ်ဘာသာစကားတွေကို ပံ့ပိုးပေးလဲ?", "Neary ຮອງຮັບພາສາໃດແດ່?", "Bahasa apa saja yang didukung Neary?"],
  "Khmer first, with Burmese, Lao, English and Bahasa Indonesia also available in the app.": [
    "ភាសាខ្មែរជាមុន ជាមួយភាសាភូមា ឡាវ អង់គ្លេស និងឥណ្ឌូនេស៊ី ក៏មាននៅក្នុងកម្មវិធីផងដែរ។",
    "ခမာဘာသာစကား အရင်ဆုံး၊ မြန်မာ၊ လာအို၊ အင်္ဂလိပ်နှင့် အင်ဒိုနီးရှား ဘာသာစကားများလည်း အက်ပ်တွင် ရရှိနိုင်ပါသည်။",
    "ພາສາຂະແມກ່ອນ, ພ້ອມກັບພາສາມ້ຽນມາ, ລາວ, ອັງກິດ ແລະ ອິນໂດເນເຊຍ ທີ່ມີໃນແອັບນຳ.",
    "Bahasa Khmer terlebih dahulu, dengan Burma, Lao, Inggris dan Bahasa Indonesia juga tersedia di aplikasi.",
  ],
  "What is 'Neary AI'?": ["តើ 'Neary AI' គឺជាអ្វី?", "'Neary AI' ဆိုတာ ဘာလဲ?", "'Neary AI' ແມ່ນຫຍັງ?", "Apa itu 'Neary AI'?"],
  "A chat assistant for everyday business questions — pricing, cash flow, what documents you need. It gives advice only, never a credit, legal or tax decision, and always offers to connect you to a real officer.": [
    "ជំនួយការជជែកសម្រាប់សំណួរអាជីវកម្មប្រចាំថ្ងៃ — តម្លៃ លំហូរសាច់ប្រាក់ តើអ្នកត្រូវការឯកសារអ្វីខ្លះ។ វាផ្តល់តែដំបូន្មានប៉ុណ្ណោះ មិនដែលធ្វើការសម្រេចចិត្តផ្នែកឥណទាន ច្បាប់ ឬពន្ធ ហើយតែងតែផ្តល់ជូននូវការភ្ជាប់ទៅមន្ត្រីពិត។",
    "နေ့စဉ် လုပ်ငန်းဆိုင်ရာ မေးခွန်းများအတွက် ချက်တင်လက်ထောက် — စျေးနှုန်း၊ ငွေသားစီးဆင်းမှု၊ လိုအပ်သော စာရွက်စာတမ်းများ။ ၎င်းသည် အကြံပြုချက်သာ ပေးပါသည်၊ ချေးငွေ၊ ဥပဒေ သို့မဟုတ် အခွန်ဆိုင်ရာ ဆုံးဖြတ်ချက် ဘယ်တော့မှ မချပါ၊ တာဝန်ရှိသူ တစ်ဦးနှင့် ချိတ်ဆက်ပေးရန် အမြဲ ကမ်းလှမ်းပါသည်။",
    "ຜູ້ຊ່ວຍສົນທະນາສຳລັບຄຳຖາມທຸລະກິດປະຈຳວັນ — ລາຄາ, ກະແສເງິນສົດ, ເອກະສານທີ່ຕ້ອງການ. ມັນໃຫ້ພຽງແຕ່ຄຳແນະນຳ, ບໍ່ເຄີຍຕັດສິນໃຈເລື່ອງສິນເຊື່ອ, ກົດໝາຍ ຫຼືພາສີ, ແລະສະເໜີໃຫ້ເຊື່ອມຕໍ່ກັບເຈົ້າໜ້າທີ່ຈິງສະເໝີ.",
    "Asisten obrolan untuk pertanyaan bisnis sehari-hari — harga, arus kas, dokumen apa yang dibutuhkan. Ia hanya memberi saran, tidak pernah keputusan kredit, hukum atau pajak, dan selalu menawarkan untuk menghubungkan Anda ke petugas asli.",
  ],
  "I already have an account. How do I get back in?": ["ខ្ញុំមានគណនីរួចហើយ។ តើខ្ញុំចូលវិញយ៉ាងដូចម្តេច?", "ကျွန်မ/ကျွန်တော် အကောင့်ရှိပြီးသားပါ။ ဘယ်လို ပြန်ဝင်ရမလဲ?", "ຂ້ອຍມີບັນຊີແລ້ວ. ຂ້ອຍຈະເຂົ້າຄືນແນວໃດ?", "Saya sudah punya akun. Bagaimana cara masuk kembali?"],
  "Open the app and choose \"I already have an account\" — you'll just need your phone number, no need to go through sign-up again.": [
    "បើកកម្មវិធី ហើយជ្រើសរើស \"ខ្ញុំមានគណនីរួចហើយ\" — អ្នកគ្រាន់តែត្រូវការលេខទូរស័ព្ទរបស់អ្នក មិនចាំបាច់ចុះឈ្មោះម្តងទៀតទេ។",
    "အက်ပ်ကို ဖွင့်ပြီး \"ကျွန်မ/ကျွန်တော် အကောင့်ရှိပြီးသားပါ\" ကို ရွေးချယ်ပါ — သင့်ဖုန်းနံပါတ်သာ လိုအပ်ပြီး၊ စာရင်းသွင်းခြင်းကို ထပ်လုပ်စရာ မလိုအပ်ပါ။",
    "ເປີດແອັບ ແລະ ເລືອກ \"ຂ້ອຍມີບັນຊີແລ້ວ\" — ທ່ານພຽງແຕ່ຕ້ອງການເບີໂທລະສັບ, ບໍ່ຈຳເປັນຕ້ອງລົງທະບຽນໃໝ່.",
    "Buka aplikasi dan pilih \"Saya sudah punya akun\" — Anda hanya perlu nomor telepon, tidak perlu mendaftar ulang.",
  ],
  "Who can join?": ["តើអ្នកណាខ្លះអាចចូលរួម?", "ဘယ်သူတွေ ပါဝင်နိုင်လဲ?", "ໃຜສາມາດເຂົ້າຮ່ວມໄດ້?", "Siapa yang bisa bergabung?"],
  "Women running or starting a small business in the provinces Neary currently serves. It's rolling out to more provinces over time.": [
    "ស្ត្រីដែលកំពុងដំណើរការ ឬចាប់ផ្តើមអាជីវកម្មខ្នាតតូចនៅក្នុងខេត្តដែល Neary កំពុងផ្តល់សេវាកម្មបច្ចុប្បន្ន។ វានឹងពង្រីកទៅខេត្តជាច្រើនទៀតតាមពេលវេលា។",
    "Neary လက်ရှိ ဝန်ဆောင်မှုပေးနေသော ခရိုင်များတွင် လုပ်ငန်းငယ်တစ်ခု လုပ်ဆောင်နေသော သို့မဟုတ် စတင်နေသော အမျိုးသမီးများ။ အချိန်ကြာလာသည်နှင့်အမျှ ခရိုင်ပိုမိုများပြားစွာသို့ ချဲ့ထွင်သွားမည် ဖြစ်ပါသည်။",
    "ແມ່ຍິງທີ່ດຳເນີນ ຫຼືເລີ່ມທຸລະກິດຂະໜາດນ້ອຍໃນແຂວງທີ່ Neary ໃຫ້ບໍລິການໃນປັດຈຸບັນ. ມັນກຳລັງຂະຫຍາຍໄປສູ່ແຂວງອື່ນໆເພີ່ມເຕີມຕາມການເວລາ.",
    "Perempuan yang menjalankan atau memulai usaha kecil di provinsi yang saat ini dilayani Neary. Akan diperluas ke lebih banyak provinsi seiring waktu.",
  ],

  // Partners
  "Our partners": ["ដៃគូរបស់យើង", "ကျွန်ုပ်တို့၏ မိတ်ဖက်များ", "ຄູ່ຮ່ວມງານຂອງພວກເຮົາ", "Mitra kami"],
  "Banks who accept our referrals": ["ធនាគារដែលទទួលយកការណែនាំរបស់យើង", "ကျွန်ုပ်တို့၏ ညွှန်းပို့မှုများကို လက်ခံသော ဘဏ်များ", "ທະນາຄານທີ່ຮັບການສົ່ງຕໍ່ຂອງພວກເຮົາ", "Bank yang menerima rujukan kami"],
  "soon": ["ឆាប់ៗនេះ", "မကြာမီ", "ໄວໆນີ້", "segera"],
  "Available today in": ["មានផ្តល់ជូននាពេលបច្ចុប្បន្ននៅ", "ယနေ့ ရရှိနိုင်သည့်နေရာများ", "ມີໃຫ້ໃນປັດຈຸບັນຢູ່", "Tersedia hari ini di"],

  // About / Scope truths
  "About Neary": ["អំពី Neary", "Neary အကြောင်း", "ກ່ຽວກັບ Neary", "Tentang Neary"],
  "Who runs Neary, and what it's for": ["អ្នកណាដំណើរការ Neary និងវាមានបំណងអ្វី", "Neary ကို ဘယ်သူ လည်ပတ်ပြီး ဘာအတွက်ရည်ရွယ်လဲ", "ໃຜເປັນຜູ້ດຳເນີນງານ Neary ແລະ ມັນມີໄວ້ເພື່ອຫຍັງ", "Siapa yang menjalankan Neary, dan untuk apa"],
  "Ministry of Women's Affairs": ["ក្រសួងកិច្ចការនារី", "အမျိုးသမီးရေးရာ ဝန်ကြီးဌာန", "ກະຊວງກິດຈະການແມ່ຍິງ", "Kementerian Urusan Perempuan"],
  "Neary is a programme of the Ministry of Women's Affairs, Kingdom of Cambodia — the government body responsible for advancing gender equality and women's economic empowerment nationally. Neary is one part of that wider mandate, focused specifically on women running small and micro businesses.": [
    "Neary គឺជាកម្មវិធីមួយរបស់ក្រសួងកិច្ចការនារី ព្រះរាជាណាចក្រកម្ពុជា — ស្ថាប័នរដ្ឋាភិបាលទទួលបន្ទុកលើកកម្ពស់សមភាពយេនឌ័រ និងការផ្តល់សិទ្ធិអំណាចផ្នែកសេដ្ឋកិច្ចដល់ស្ត្រីទូទាំងប្រទេស។ Neary គឺជាផ្នែកមួយនៃភារកិច្ចទូលំទូលាយនោះ ដោយផ្តោតជាពិសេសលើស្ត្រីដែលដំណើរការអាជីវកម្មខ្នាតតូច និងខ្នាតមីក្រូ។",
    "Neary သည် အမျိုးသမီးရေးရာ ဝန်ကြီးဌာန၊ ကမ္ဘောဒီးယားနိုင်ငံ၏ အစီအစဉ်တစ်ခုဖြစ်ပြီး — ၎င်းသည် နိုင်ငံတစ်ဝှမ်း ကျား/မ တန်းတူညီမျှမှုနှင့် အမျိုးသမီးများ၏ စီးပွားရေးအခွင့်အာဏာမြှင့်တင်ရေးအတွက် တာဝန်ရှိသော အစိုးရအဖွဲ့အစည်း ဖြစ်ပါသည်။ Neary သည် ထိုကျယ်ပြန့်သော တာဝန်ဝတ္တရား၏ တစ်စိတ်တစ်ပိုင်းဖြစ်ပြီး၊ လုပ်ငန်းငယ်နှင့် အလွန်ငယ်သော လုပ်ငန်းများ လုပ်ဆောင်နေသော အမျိုးသမီးများအပေါ် အထူး အာရုံစိုက်ထားသည်။",
    "Neary ແມ່ນໂຄງການໜຶ່ງຂອງກະຊວງກິດຈະການແມ່ຍິງ, ລາຊະອານາຈັກກຳປູເຈຍ — ອົງການລັດຖະບານທີ່ຮັບຜິດຊອບການສົ່ງເສີມຄວາມສະເໝີພາບທາງເພດ ແລະ ການເສີມສ້າງອຳນາດທາງເສດຖະກິດຂອງແມ່ຍິງທົ່ວປະເທດ. Neary ເປັນສ່ວນໜຶ່ງຂອງພາລະກິດອັນກວ້າງຂວາງນັ້ນ, ເນັ້ນໜັກໃສ່ແມ່ຍິງທີ່ດຳເນີນທຸລະກິດຂະໜາດນ້ອຍ ແລະ ຈຸນລະວິສາຫະກິດ.",
    "Neary adalah program Kementerian Urusan Perempuan, Kerajaan Kamboja — badan pemerintah yang bertanggung jawab memajukan kesetaraan gender dan pemberdayaan ekonomi perempuan secara nasional. Neary adalah bagian dari mandat yang lebih luas itu, berfokus khusus pada perempuan yang menjalankan usaha kecil dan mikro.",
  ],
  "Operated by LinkIT": ["ដំណើរការដោយ LinkIT", "LinkIT မှ လည်ပတ်သည်", "ດຳເນີນງານໂດຍ LinkIT", "Dioperasikan oleh LinkIT"],
  "The Ministry sets the programme's direction and policy; day-to-day, the app and admin console are built and operated by LinkIT, a technology delivery partner. LinkIT moderates content and AI answers and keeps a full audit trail of sensitive decisions, so the Ministry retains oversight of the programme it owns.": [
    "ក្រសួងកំណត់ទិសដៅ និងគោលនយោបាយរបស់កម្មវិធី ចំណែកឯការងារប្រចាំថ្ងៃ កម្មវិធី និងកុងសូលអ្នកគ្រប់គ្រង ត្រូវបានបង្កើត និងដំណើរការដោយ LinkIT ដែលជាដៃគូផ្តល់សេវាបច្ចេកវិទ្យា។ LinkIT ត្រួតពិនិត្យមាតិកា និងចម្លើយ AI ព្រមទាំងរក្សាដានសវនកម្មពេញលេញនៃការសម្រេចចិត្តរសើប ដូច្នេះក្រសួងនៅតែរក្សាការត្រួតពិនិត្យលើកម្មវិធីដែលខ្លួនជាម្ចាស់។",
    "ဝန်ကြီးဌာနက အစီအစဉ်၏ ဦးတည်ချက်နှင့် မူဝါဒကို သတ်မှတ်ပါသည်၊ နေ့စဉ်လုပ်ငန်းများတွင်မူ အက်ပ်နှင့် စီမံခန့်ခွဲမှု ကွန်ဆိုးလ်ကို နည်းပညာ ပေးပို့ရေး မိတ်ဖက် LinkIT မှ တည်ဆောက်ပြီး လည်ပတ်ပါသည်။ LinkIT သည် အကြောင်းအရာနှင့် AI ဖြေကြားချက်များကို ထိန်းကျောင်းပြီး၊ အာရုံခံနိုင်စွမ်းရှိသော ဆုံးဖြတ်ချက်များ၏ စာရင်းစစ် မှတ်တမ်း အပြည့်အစုံကို ထိန်းသိမ်းထားသဖြင့် ဝန်ကြီးဌာနက ၎င်းပိုင်ဆိုင်သော အစီအစဉ်ကို ကြီးကြပ်မှု ဆက်လက် ထိန်းထားနိုင်ပါသည်။",
    "ກະຊວງກຳນົດທິດທາງ ແລະ ນະໂຍບາຍຂອງໂຄງການ; ໃນການເຮັດວຽກປະຈຳວັນ, ແອັບ ແລະ ຄອນໂຊນຄຸ້ມຄອງຖືກສ້າງ ແລະ ດຳເນີນງານໂດຍ LinkIT, ຄູ່ຮ່ວມງານດ້ານເທັກໂນໂລຢີ. LinkIT ຄວບຄຸມເນື້ອຫາ ແລະ ຄຳຕອບ AI ແລະ ຮັກສາຮ່ອງຮອຍການກວດສອບເຕັມຮູບແບບຂອງການຕັດສິນໃຈທີ່ລະອຽດອ່ອນ, ດັ່ງນັ້ນກະຊວງຈຶ່ງຮັກສາການຄວບຄຸມເບິ່ງແຍງໂຄງການທີ່ຕົນເປັນເຈົ້າຂອງ.",
    "Kementerian menetapkan arah dan kebijakan program; sehari-hari, aplikasi dan konsol admin dibangun dan dioperasikan oleh LinkIT, mitra penyedia teknologi. LinkIT memoderasi konten dan jawaban AI serta menyimpan jejak audit lengkap atas keputusan sensitif, sehingga Kementerian tetap memegang pengawasan atas program miliknya.",
  ],
  "Why Neary exists": ["ហេតុអ្វី Neary កើតមានឡើង", "Neary ဘာကြောင့် ရှိနေရသလဲ", "ເປັນຫຍັງ Neary ຈຶ່ງມີຢູ່", "Mengapa Neary ada"],
  "Most women-run businesses in Cambodia start informally — a stall, a small workshop, a home kitchen — and many stay that way, even as they grow. Without steady records or a registered business, it's hard to prove a business is ready for financing, and just as hard for a bank to say yes. Neary exists to close that gap: a free, guided path from everyday recordkeeping through formalization to a documented readiness score — so that when a woman is ready to ask a bank for financing, she can show up with a real track record, not just a good idea.": [
    "អាជីវកម្មភាគច្រើនដែលដំណើរការដោយស្ត្រីនៅកម្ពុជា ចាប់ផ្តើមដោយមិនផ្លូវការ — ដុំកន្លែងលក់ ការហាងជាងតូច ផ្ទះបាយ — ហើយច្រើនស្ថិតនៅដដែលទោះបីវាកំពុងរីកចម្រើនក៏ដោយ។ បើគ្មានកំណត់ត្រាថេរ ឬអាជីវកម្មដែលបានចុះបញ្ជី វាពិបាកបញ្ជាក់ថាអាជីវកម្មមួយត្រៀមខ្លួនសម្រាប់ហិរញ្ញប្បទាន ហើយក៏ពិបាកសម្រាប់ធនាគារនិយាយថាព្រមដែរ។ Neary កើតឡើងដើម្បីបំពេញចន្លោះនោះ៖ ផ្លូវឥតគិតថ្លៃដែលមានការណែនាំចាប់ពីការកត់ត្រាប្រចាំថ្ងៃ ឆ្លងកាត់ការចុះបញ្ជីផ្លូវការ រហូតដល់ពិន្ទុត្រៀមខ្លួនដែលបានចងក្រង — ដូច្នេះនៅពេលស្ត្រីម្នាក់ត្រៀមខ្លួនសុំហិរញ្ញប្បទានពីធនាគារ នាងអាចបង្ហាញខ្លួនជាមួយប្រវត្តិការងារពិតប្រាកដ មិនមែនត្រឹមតែគំនិតល្អមួយប៉ុណ្ណោះទេ។",
    "ကမ္ဘောဒီးယားရှိ အမျိုးသမီးများ လုပ်ဆောင်သော လုပ်ငန်းအများစုသည် အလွတ်သဘောဖြင့် စတင်ကြသည် — ဆိုင်ခန်းလေး၊ လုပ်ရုံလေး၊ အိမ်မီးဖိုချောင် — ပြီးတော့ ကြီးထွားလာသည့်တိုင် များစွာသော လုပ်ငန်းများသည် ထိုအတိုင်းပင် ကျန်နေတတ်သည်။ တည်ငြိမ်သော မှတ်တမ်းများ သို့မဟုတ် မှတ်ပုံတင်ထားသော လုပ်ငန်းမရှိလျှင်၊ လုပ်ငန်းတစ်ခု ငွေကြေးအထောက်အပံ့အတွက် အသင့်ဖြစ်ကြောင်း သက်သေပြရန် ခက်ခဲပြီး ဘဏ်အတွက်လည်း သဘောတူရန် ထိုနည်းတူပင် ခက်ခဲပါသည်။ Neary သည် ထိုကွာဟချက်ကို ပိတ်ရန် ရှိနေခြင်းဖြစ်သည် — နေ့စဉ် မှတ်တမ်းတင်ခြင်းမှ မှတ်ပုံတင်ခြင်းအထိ၊ မှတ်တမ်းတင်ထားသော အသင့်ဖြစ်မှုရမှတ်တစ်ခုအထိ အခမဲ့ လမ်းညွှန်ပေးမည့် လမ်းကြောင်း — ထို့ကြောင့် အမျိုးသမီးတစ်ဦး ဘဏ်ထံ ငွေကြေးအထောက်အပံ့ တောင်းဆိုရန် အသင့်ဖြစ်သောအခါ၊ သူမသည် စိတ်ကူးကောင်းတစ်ခုတည်းမက် အမှန်တကယ် လုပ်ဆောင်ချက် မှတ်တမ်းနှင့်အတူ ရောက်ရှိလာနိုင်ပါသည်။",
    "ທຸລະກິດທີ່ດຳເນີນໂດຍແມ່ຍິງສ່ວນຫຼາຍໃນກຳປູເຈຍເລີ່ມຕົ້ນແບບບໍ່ເປັນທາງການ — ແຜງຂາຍເຄື່ອງ, ຮ້ານຊ່າງນ້ອຍໆ, ຄົວເຮືອນ — ແລະ ຫຼາຍໆອັນຍັງຄົງເປັນແບບນັ້ນ ເຖິງແມ່ນວ່າມັນຈະຂະຫຍາຍຕົວກໍຕາມ. ຖ້າບໍ່ມີບັນທຶກທີ່ໝັ້ນຄົງ ຫຼືທຸລະກິດທີ່ຈົດທະບຽນແລ້ວ, ມັນຍາກທີ່ຈະພິສູດວ່າທຸລະກິດພ້ອມສຳລັບແຫຼ່ງທຶນ, ແລະ ຍາກເຊັ່ນກັນສຳລັບທະນາຄານທີ່ຈະເວົ້າວ່າຕົກລົງ. Neary ມີຢູ່ເພື່ອອຸດຊ່ອງຫວ່າງນັ້ນ: ເສັ້ນທາງທີ່ນຳພາຟຣີ ຈາກການບັນທຶກປະຈຳວັນ ຜ່ານການຈົດທະບຽນທຸລະກິດ ໄປສູ່ຄະແນນຄວາມພ້ອມທີ່ມີເອກະສານ — ດັ່ງນັ້ນເມື່ອແມ່ຍິງຄົນໜຶ່ງພ້ອມທີ່ຈະຂໍແຫຼ່ງທຶນຈາກທະນາຄານ, ນາງສາມາດມາພ້ອມກັບປະຫວັດການເຮັດວຽກທີ່ແທ້ຈິງ, ບໍ່ແມ່ນພຽງແຕ່ໄອເດຍທີ່ດີ.",
    "Sebagian besar bisnis yang dijalankan perempuan di Kamboja dimulai secara informal — sebuah lapak, bengkel kecil, dapur rumahan — dan banyak yang tetap begitu, bahkan saat berkembang. Tanpa catatan yang stabil atau bisnis yang terdaftar, sulit membuktikan bisnis siap untuk pembiayaan, dan sama sulitnya bagi bank untuk mengatakan ya. Neary ada untuk menutup celah itu: jalur gratis dan berpandu dari pencatatan sehari-hari melalui formalisasi hingga skor kesiapan yang terdokumentasi — sehingga saat seorang perempuan siap meminta pembiayaan ke bank, ia bisa datang dengan rekam jejak nyata, bukan sekadar ide bagus.",
  ],
  "How we work": ["របៀបដែលយើងធ្វើការ", "ကျွန်ုပ်တို့ လုပ်ဆောင်ပုံ", "ພວກເຮົາເຮັດວຽກແນວໃດ", "Cara kami bekerja"],
  "Neary doesn't try to replace the institutions already doing this well — it connects to them. Business registration goes through the existing government registry. Payments run on QR rails already used across Cambodia. Financing decisions are made by licensed partner banks and a guarantee scheme, never by Neary. Our job is preparation and introduction, with a woman's consent required at every step where her information is shared beyond the app.": [
    "Neary មិនព្យាយាមជំនួសស្ថាប័នដែលកំពុងធ្វើកិច្ចការនេះបានល្អរួចហើយនោះទេ — វាភ្ជាប់ទំនាក់ទំនងទៅកាន់ស្ថាប័នទាំងនោះវិញ។ ការចុះបញ្ជីអាជីវកម្មឆ្លងកាត់ការចុះបញ្ជីរដ្ឋាភិបាលដែលមានស្រាប់។ ការទូទាត់ដំណើរការលើប្រព័ន្ធ QR ដែលកំពុងប្រើប្រាស់ទូទាំងកម្ពុជារួចហើយ។ ការសម្រេចចិត្តហិរញ្ញប្បទានធ្វើឡើងដោយធនាគារដៃគូដែលមានអាជ្ញាប័ណ្ណ និងគម្រោងធានា មិនមែនដោយ Neary ឡើយ។ ការងាររបស់យើងគឺការរៀបចំ និងការណែនាំ ដោយមានការយល់ព្រមពីស្ត្រីនៅគ្រប់ជំហាននៃការចែករំលែកព័ត៌មានរបស់នាងលើសពីកម្មវិធី។",
    "Neary သည် ဤအရာကို ကောင်းစွာ လုပ်ဆောင်နေသော အဖွဲ့အစည်းများကို အစားထိုးရန် မကြိုးစားပါ — ၎င်းသည် ထိုအဖွဲ့အစည်းများနှင့် ချိတ်ဆက်ပေးပါသည်။ လုပ်ငန်းမှတ်ပုံတင်ခြင်းသည် လက်ရှိ အစိုးရ မှတ်ပုံတင်စာရင်းမှတစ်ဆင့် ဖြစ်ပါသည်။ ငွေပေးချေမှုများသည် ကမ္ဘောဒီးယားတစ်ဝှမ်း အသုံးပြုနေပြီးသား QR စနစ်ပေါ်တွင် လည်ပတ်ပါသည်။ ငွေကြေးအထောက်အပံ့ ဆုံးဖြတ်ချက်များကို လိုင်စင်ရ မိတ်ဖက်ဘဏ်များနှင့် အာမခံအစီအစဉ်က ချမှတ်ပြီး၊ Neary က မချမှတ်ပါ။ ကျွန်ုပ်တို့၏ တာဝန်မှာ ပြင်ဆင်ခြင်းနှင့် မိတ်ဆက်ပေးခြင်းဖြစ်ပြီး၊ သူမ၏ အချက်အလက်ကို အက်ပ်ပြင်ပသို့ မျှဝေသည့် အဆင့်တိုင်းတွင် အမျိုးသမီး၏ သဘောတူညီချက် လိုအပ်ပါသည်။",
    "Neary ບໍ່ໄດ້ພະຍາຍາມແທນທີ່ສະຖາບັນທີ່ກຳລັງເຮັດສິ່ງນີ້ດີແລ້ວ — ມັນເຊື່ອມຕໍ່ກັບພວກເຂົາ. ການຈົດທະບຽນທຸລະກິດຜ່ານທະບຽນລັດຖະບານທີ່ມີຢູ່ແລ້ວ. ການຈ່າຍເງິນດຳເນີນຜ່ານລະບົບ QR ທີ່ໃຊ້ຢູ່ທົ່ວກຳປູເຈຍແລ້ວ. ການຕັດສິນໃຈດ້ານການເງິນແມ່ນເຮັດໂດຍທະນາຄານຄູ່ຮ່ວມງານທີ່ໄດ້ຮັບອະນຸຍາດ ແລະ ໂຄງການຄ້ຳປະກັນ, ບໍ່ແມ່ນໂດຍ Neary. ໜ້າວຽກຂອງພວກເຮົາແມ່ນການກຽມພ້ອມ ແລະ ການແນະນຳ, ໂດຍຕ້ອງໄດ້ຮັບການຍິນຍອມຈາກແມ່ຍິງໃນທຸກຂັ້ນຕອນທີ່ຂໍ້ມູນຂອງນາງຖືກແບ່ງປັນອອກນອກແອັບ.",
    "Neary tidak berusaha menggantikan institusi yang sudah melakukan ini dengan baik — ia terhubung dengan mereka. Pendaftaran bisnis melalui registri pemerintah yang sudah ada. Pembayaran berjalan di jalur QR yang sudah digunakan di seluruh Kamboja. Keputusan pembiayaan dibuat oleh bank mitra berlisensi dan skema penjaminan, bukan oleh Neary. Tugas kami adalah persiapan dan perkenalan, dengan persetujuan perempuan diperlukan di setiap langkah saat informasinya dibagikan di luar aplikasi.",
  ],
  "Good to know": ["អ្វីដែលគួរដឹង", "သိထားသင့်သည့်အရာများ", "ສິ່ງທີ່ຄວນຮູ້", "Baik untuk diketahui"],
  "A Ministry of Women's Affairs programme, operated by LinkIT. A few things worth knowing before you start.": [
    "កម្មវិធីមួយរបស់ក្រសួងកិច្ចការនារី ដំណើរការដោយ LinkIT។ វត្ថុពិតមួយចំនួនដែលគួរដឹងមុនពេលអ្នកចាប់ផ្តើម។",
    "အမျိုးသမီးရေးရာ ဝန်ကြီးဌာန၏ အစီအစဉ်တစ်ခု၊ LinkIT မှ ဆောင်ရွက်သည်။ စတင်မလုပ်ဆောင်မီ သိထားသင့်သည့် အချက်အနည်းငယ်။",
    "ໂຄງການຂອງກະຊວງກິດຈະການແມ່ຍິງ, ດຳເນີນງານໂດຍ LinkIT. ບາງສິ່ງທີ່ຄວນຮູ້ກ່ອນທ່ານເລີ່ມຕົ້ນ.",
    "Program Kementerian Urusan Perempuan, dioperasikan oleh LinkIT. Beberapa hal yang perlu diketahui sebelum Anda mulai.",
  ],
  "We don't lend money, and we don't decide who gets a loan — that's always the bank's decision.": [
    "យើងមិនផ្តល់ប្រាក់កម្ចីទេ ហើយយើងក៏មិនសម្រេចចិត្តថាអ្នកណាទទួលបានប្រាក់កម្ចីដែរ — នោះជានិច្ចជាការសម្រេចចិត្តរបស់ធនាគារ។",
    "ကျွန်ုပ်တို့ ငွေချေးမပေးပါ၊ ဘယ်သူ ချေးငွေရမည်ကိုလည်း ကျွန်ုပ်တို့ ဆုံးဖြတ်ခြင်း မရှိပါ — ၎င်းသည် ဘဏ်၏ ဆုံးဖြတ်ချက် အမြဲပင် ဖြစ်ပါသည်။",
    "ພວກເຮົາບໍ່ໄດ້ໃຫ້ກູ້ຢືມເງິນ, ແລະ ພວກເຮົາບໍ່ໄດ້ຕັດສິນໃຈວ່າໃຜຈະໄດ້ຮັບເງິນກູ້ — ນັ້ນແມ່ນການຕັດສິນໃຈຂອງທະນາຄານສະເໝີ.",
    "Kami tidak meminjamkan uang, dan kami tidak memutuskan siapa yang mendapat pinjaman — itu selalu keputusan bank.",
  ],
  "We don't hold your money. Payments go straight through to your own account.": [
    "យើងមិនកាន់កាប់លុយរបស់អ្នកទេ។ ការទូទាត់ចូលដោយផ្ទាល់ទៅគណនីផ្ទាល់ខ្លួនរបស់អ្នក។",
    "ကျွန်ုပ်တို့ သင့်ငွေကို မကိုင်တွယ်ပါ။ ငွေပေးချေမှုများသည် သင့်ကိုယ်ပိုင် အကောင့်သို့ တိုက်ရိုက် ရောက်ရှိသွားပါသည်။",
    "ພວກເຮົາບໍ່ໄດ້ຖືເງິນຂອງທ່ານ. ການຈ່າຍເງິນຈະໄປຫາບັນຊີຂອງທ່ານໂດຍກົງ.",
    "Kami tidak menyimpan uang Anda. Pembayaran langsung masuk ke rekening Anda sendiri.",
  ],
  "We don't replace government registration — we guide you to it, and help you keep track.": [
    "យើងមិនជំនួសការចុះបញ្ជីរដ្ឋាភិបាលទេ — យើងណែនាំអ្នកទៅកាន់វា និងជួយអ្នកតាមដាន។",
    "ကျွန်ုပ်တို့ အစိုးရ မှတ်ပုံတင်ခြင်းကို အစားထိုးခြင်း မရှိပါ — ကျွန်ုပ်တို့ သင့်ကို ၎င်းသို့ လမ်းညွှန်ပေးပြီး၊ ခြေရာခံရန် ကူညီပေးပါသည်။",
    "ພວກເຮົາບໍ່ໄດ້ແທນທີ່ການຈົດທະບຽນລັດຖະບານ — ພວກເຮົານຳພາທ່ານໄປຫາມັນ, ແລະ ຊ່ວຍໃຫ້ທ່ານຕິດຕາມ.",
    "Kami tidak menggantikan pendaftaran pemerintah — kami memandu Anda ke sana, dan membantu Anda memantaunya.",
  ],
  "Our AI coach gives advice only. For anything serious, it hands you to a real person.": [
    "គ្រូបង្វឹក AI របស់យើងផ្តល់តែដំបូន្មានប៉ុណ្ណោះ។ សម្រាប់រឿងអ្វីដែលធ្ងន់ធ្ងរ វានឹងបញ្ជូនអ្នកទៅមនុស្សពិត។",
    "ကျွန်ုပ်တို့၏ AI ကုလိုက်သည် အကြံပြုချက်သာ ပေးပါသည်။ အရေးကြီးသော အရာများအတွက်၊ ၎င်းက သင့်ကို လူတစ်ဦးထံ လွှဲပေးပါသည်။",
    "ໂຄ້ຊ AI ຂອງພວກເຮົາໃຫ້ພຽງແຕ່ຄຳແນະນຳ. ສຳລັບເລື່ອງທີ່ຮ້າຍແຮງ, ມັນຈະສົ່ງທ່ານໄປຫາຄົນຈິງ.",
    "Pelatih AI kami hanya memberi saran. Untuk hal yang serius, ia akan mengarahkan Anda ke orang sungguhan.",
  ],
};
