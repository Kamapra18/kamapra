---
title: "Glossarium Web Development"
type: "glossarium"
category: "Web Development"
lastUpdated: "2025-07-20"
---

Kumpulan istilah dalam dunia web development dari A sampai Z, mencakup bahasa pemrograman, framework, konsep arsitektur, API, database, hingga deployment.

---

## A

- **A/B Testing**: Metode pengujian eksperimental dengan membandingkan dua versi halaman web atau elemen (versi A dan B) untuk melihat mana yang memiliki performa atau angka konversi lebih baik.
- **Access Control**: Mekanisme keamanan yang mengatur dan membatasi hak pengguna untuk mengakses atau memanipulasi sumber daya tertentu dalam sistem.
- **Access Token**: Kredensial digital (seperti string terenkripsi atau JWT) yang digunakan klien untuk mengakses API atau data yang dilindungi tanpa perlu mengirim ulang username dan password.
- **Accessibility (a11y)**: Praktik mendesain dan mengembangkan website agar dapat digunakan dan diakses dengan mudah oleh semua orang, termasuk pengguna dengan disabilitas.
- **ACL (Access Control List)**: Daftar aturan yang menentukan hak akses pengguna atau sistem terhadap objek atau file tertentu (misalnya hak baca, tulis, atau eksekusi).
- **Active Record**: Pola arsitektur ORM (Object-Relational Mapping) di mana sebuah kelas mewakili tabel database, dan instansinya mewakili satu baris data sekaligus menyimpan logika bisnis dan manipulasi data.
- **Adaptive Design**: Pendekatan desain web yang menyediakan beberapa tata letak statis berbeda yang disesuaikan secara khusus untuk ukuran layar perangkat tertentu.
- **Ajax (Asynchronous JavaScript and XML)**: Teknik mengirim dan mengambil data dari server di latar belakang secara asinkron tanpa harus memuat ulang (*reload*) seluruh halaman web.
- **Algorithm**: Urutan langkah-langkah logis dan terstruktur yang didefinisikan untuk menyelesaikan suatu masalah atau menjalankan komputasi tertentu.
- **Alpine.js**: Framework JavaScript yang ringan dan minimalis untuk menambahkan interaktivitas sederhana langsung pada markup HTML tanpa kerumitan framework besar.
- **Amazon Web Services (AWS)**: Platform penyedia layanan komputasi awan (*cloud computing*) komprehensif milik Amazon yang mencakup server, database, penyimpanan, AI, dan analitik.
- **Angular**: Framework TypeScript open-source berbasis komponen yang dikembangkan Google untuk membangun aplikasi web berskala besar dan kompleks.
- **Anonymous Function**: Fungsi dalam pemrograman yang didefinisikan tanpa memiliki nama (*identifier*), sering digunakan sebagai argumen (*callback*) atau fungsi sekali pakai.
- **API (Application Programming Interface)**: Antarmuka yang memungkinkan dua atau lebih aplikasi/layanan perangkat lunak saling berkomunikasi dan bertukar data melalui aturan standar.
- **API Gateway**: Server perantara yang bertindak sebagai pintu masuk tunggal untuk mengelola, mengarahkan (*routing*), mengamankan, dan membatasi laju permintaan (*rate limiting*) ke berbagai layanan mikro (*microservices*).
- **API Key**: Kode alfanumerik unik yang diberikan kepada pengembang atau aplikasi untuk mengidentifikasi dan memverifikasi panggilan API ke suatu layanan.
- **API Rate Limiting**: Mekanisme pembatasan jumlah permintaan (*request*) yang dapat dilakukan oleh seorang pengguna atau klien ke API dalam periode waktu tertentu demi mencegah kelebihan beban (*overload*) dan serangan *abuse*.
- **API Versioning**: Praktik pengelolaan versi pada API (seperti `/v1/`, `/v2/`) agar perubahan sistem baru tidak merusak (*breaking changes*) kompatibilitas aplikasi klien yang masih memakai versi lama.
- **Apollo Client**: Pustaka manajemen status komprehensif untuk JavaScript yang digunakan untuk mengelola dan mengambil data dari GraphQL API ke aplikasi frontend.
- **Apollo Server**: Pustaka server GraphQL open-source berbasis Node.js yang mempermudah pembuatan API GraphQL yang terhubung ke database atau REST API.
- **Application Performance Monitoring (APM)**: Praktik dan kumpulan alat untuk memantau, mendiagnosis performa, melacak latensi, dan mendeteksi anomali pada aplikasi web secara real-time.
- **Application Shell**: Pola arsitektur PWA yang memisahkan struktur UI minimalis (header, nav, kerangka) yang dimuat instan dengan konten dinamis yang diambil belakangan.
- **ARIA (Accessible Rich Internet Applications)**: Kumpulan atribut HTML khusus dari W3C yang membantu teknologi asistif (seperti *screen reader*) memahami struktur dan perilaku elemen web interaktif.
- **Array**: Struktur data berurutan yang menyimpan kumpulan elemen dengan tipe data sama atau berbeda yang diakses menggunakan indeks angka (dimulai dari 0).
- **Asynchronous Programming**: Paradigma pemrograman yang memungkinkan suatu operasi berjalan di latar belakang tanpa memblokir (*non-blocking*) eksekusi kode lainnya yang sedang berjalan.
- **Async/Await**: Fitur sintaksis modern dalam JavaScript/TypeScript yang menyederhanakan penulisan kode asinkron (berbasis *Promise*) agar terlihat dan berperilaku layaknya kode sinkron yang mudah dibaca.
- **Atomic Design**: Metodologi pembuatan sistem desain antarmuka dengan memecah UI menjadi lima level hierarki: *Atoms, Molecules, Organisms, Templates,* dan *Pages*.
- **Authentication**: Proses verifikasi dan pembuktian identitas pengguna, klien, atau sistem (misalnya memeriksa kecocokan username dan password).
- **Authorization**: Proses penentuan dan pemberian izin mengenai aksi apa saja atau data apa saja yang boleh diakses oleh pengguna yang sudah terotentikasi.
- **Automated Testing**: Praktik pengujian perangkat lunak menggunakan skrip dan alat otomatis untuk memverifikasi fungsionalitas kode tanpa pengujian manual yang berulang.
- **Axios**: Pustaka HTTP client berbasis *Promise* untuk JavaScript/TypeScript yang digunakan di browser maupun Node.js untuk melakukan request ke server.
- **Asset Bundling**: Proses penggabungan beberapa file aset kode (CSS, JS, gambar) menjadi satu atau sedikit file guna mengurangi jumlah HTTP request saat halaman dimuat.
- **Asset Optimization**: Proses kompresi, minifikasi, dan pengoptimalan ukuran file aset (gambar, skrip, stylesheet) agar website memuat lebih cepat tanpa mengurangi kualitas secara signifikan.
- **Audit Log**: Catatan riwayat keamanan kronologis yang merekam semua aktivitas penting, perubahan data, atau akses sistem yang dilakukan oleh pengguna atau sistem.
- **Authentication Flow**: Alur langkah terstruktur yang dilalui pengguna dan sistem untuk memvalidasi kredensial dari proses login hingga penerbitan token atau sesi.
- **Authorization Server**: Server khusus dalam protokol OAuth/OIDC yang bertugas mengautentikasi pengguna dan menerbitkan token izin (*access token/ID token*) kepada klien.
- **Auto Scaling**: Fitur infrastruktur cloud yang secara otomatis menambah atau mengurangi kapasitas sumber daya server (CPU, memori, instans) berdasarkan beban trafik real-time.

---

## B

- **Backend**: Bagian sistem aplikasi web di sisi server yang menangani logika bisnis, pengolahan data, keamanan, dan komunikasi dengan database yang tidak terlihat langsung oleh pengguna.
- **Backend-as-a-Service (BaaS)**: Model layanan cloud di mana penyedia pihak ketiga menyediakan seluruh infrastruktur backend (autentikasi, database, storage) melalui API/SDK (contoh: Firebase, Supabase).
- **Backend-for-Frontend (BFF)**: Pola arsitektur di mana backend khusus dibuat terpisah untuk melayani kebutuhan spesifik dari antarmuka pengguna tertentu (misal satu BFF untuk mobile, satu BFF untuk web desktop).
- **Backward Compatibility**: Kemampuan sistem, pustaka, atau API versi baru untuk tetap bekerja dengan baik dan kompatibel dengan sistem atau kode lama tanpa menimbulkan error.
- **Bandwidth**: Kapasitas maksimum transfer data yang dapat dikirimkan melalui koneksi jaringan atau server dalam kurun waktu tertentu (biasanya dihitung dalam bit per detik/bps).
- **Base URL**: Bagian awal URL yang konsisten (protokol, domain, dan port/jalur dasar) yang menjadi fondasi bagi endpoint-endpoint API lainnya (contoh: `https://api.domain.com/v1`).
- **Base64**: Skema pengodean (*encoding*) biner-ke-teks yang merepresentasikan data biner ke dalam format string ASCII yang aman ditransmisikan lewat protokol teks seperti HTTP atau email.
- **Bash (Bourne Again SHell)**: Antarmuka baris perintah (*command-line shell*) dan bahasa skrip default di sebagian besar sistem operasi Linux dan macOS untuk menjalankan perintah sistem.
- **Batch Processing**: Metode pemrosesan sekumpulan data dalam jumlah besar sekaligus pada waktu tertentu tanpa memerlukan intervensi interaktif secara terus-menerus.
- **Bcrypt**: Fungsi *hashing* kata sandi satu arah yang dirancang khusus dengan mekanisme *salt* dan faktor biaya (*cost factor*) untuk memperlambat serangan *brute-force*.
- **Bearer Token**: Jenis token keamanan dalam format header HTTP (`Authorization: Bearer <token>`) yang memberikan hak akses kepada siapa saja yang memegang token tersebut.
- **Behavior-Driven Development (BDD)**: Pendekatan pengembangan perangkat lunak berbasis TDD yang menitikberatkan komunikasi kolaboratif dengan menulis skenario pengujian dalam bahasa manusia yang mudah dipahami (misal format: *Given-When-Then*).
- **Binary Search**: Algoritma pencarian efisien dengan kompleksitas $O(\log n)$ yang bekerja dengan membagi dua kumpulan data yang sudah terurut secara berulang hingga elemen ditemukan.
- **Blue-Green Deployment**: Strategi rilis aplikasi dengan menjalankan dua lingkungan produksi identik (*Blue* versi lama, *Green* versi baru) untuk memastikan pembaruan tanpa *downtime* dan memungkinkan *rollback* instan.
- **Boilerplate**: Bagian kode standar, konfigurasi, atau struktur proyek awal yang sering digunakan berulang kali tanpa banyak perubahan untuk memulai proyek baru.
- **Bootstrap**: Framework CSS open-source populer yang menyediakan sistem grid responsif serta kumpulan komponen UI siap pakai untuk mempercepat pembuatan tampilan web.
- **Branch**: Saluran pengembangan terisolasi dalam sistem kontrol versi (seperti Git) yang memungkinkan developer mengerjakan fitur atau perbaikan *bug* tanpa memengaruhi kode utama (*main/master*).
- **Branching Strategy**: Kumpulan konvensi dan aturan tim dalam membuat, menamai, dan menggabungkan (*merge*) branch Git (contoh: Git Flow, GitHub Flow, Trunk-Based Development).
- **Browser**: Perangkat lunak aplikasi (seperti Chrome, Safari, Firefox, Edge) yang bertugas mengambil, menerjemahkan kode (HTML, CSS, JS), dan menampilkan halaman web kepada pengguna.
- **Browser DevTools**: Kumpulan alat bantu bawaan di dalam browser untuk menginspeksi elemen DOM, debugging JavaScript, memantau request jaringan, profil performa, dan pengujian responsivitas.
- **Build Tool**: Program (seperti Webpack, Vite, esbuild) yang mengotomatisasi proses persiapan kode sumber menjadi aset siap produksi (transpilasi, minifikasi, bundling, kompresi).
- **Bundle**: File hasil gabungan dari berbagai modul kode sumber (JavaScript, CSS, aset) yang telah diproses dan dioptimalkan agar siap disajikan ke browser.
- **Bundler**: Alat bantu pengembang (seperti Webpack, Rollup, Parcel) yang menganalisis grafik dependensi modul-modul kode dan mengemasnya menjadi satu atau beberapa file *bundle*.
- **Business Logic**: Bagian inti dari kode aplikasi yang mengatur aturan operasional, validasi alur kerja nyata, dan perhitungan logika bisnis (di luar urusan UI atau basis data teknis).
- **Bun**: Lingkungan runtime JavaScript, pengelola paket (*package manager*), *test runner*, dan *bundler* serba-bisa yang dibangun dari nol menggunakan bahasa Zig agar sangat cepat.

---

## C

- **Cache**: Tempat penyimpanan data sementara berkecepatan tinggi yang menyimpan salinan data atau hasil komputasi agar permintaan berikutnya dapat dilayani lebih cepat tanpa memproses ulang.
- **Cache Busting**: Teknik memaksa browser mengunduh versi file terbaru (misal dengan menambahkan hash unik pada nama file seperti `app.a1b2c.js`) saat terjadi pembaruan kode.
- **Cache Invalidation**: Proses menghapus, mengganti, atau menandai data yang tersimpan di cache sebagai kedaluwarsa saat data sumber aslinya telah berubah.
- **Callback**: Fungsi yang dilewatkan sebagai argumen ke dalam fungsi lain untuk dipanggil kembali (*executed*) setelah tugas atau operasi tertentu selesai dijalankan.
- **Call Stack**: Struktur data LIFO (*Last In, First Out*) di JavaScript engine yang bertugas melacak urutan pemanggilan fungsi yang sedang dieksekusi dalam program.
- **CDN (Content Delivery Network)**: Jaringan server terdistribusi secara geografis di seluruh dunia yang bertugas menyajikan konten statis (gambar, CSS, JS) dari server terdekat dengan lokasi pengguna agar waktu muat lebih cepat.
- **CI/CD (Continuous Integration / Continuous Deployment)**: Praktik otomasi alur kerja pengujian kode baru secara berkala (CI) dan peluncuran kode secara otomatis ke lingkungan staging atau produksi (CD).
- **CLI (Command Line Interface)**: Antarmuka berbasis teks yang memungkinkan pengguna berinteraksi dan mengontrol sistem operasi atau program dengan mengetikkan perintah baris teks.
- **Client**: Perangkat atau aplikasi (seperti browser di laptop atau smartphone) yang meminta layanan, data, atau halaman web dari server.
- **Client-Side Rendering (CSR)**: Pendekatan perenderan web di mana browser mengunduh HTML kosong minimal dan file JavaScript, lalu JavaScript membangun struktur UI secara langsung di perangkat pengguna.
- **Cloud Computing**: Model penyediaan sumber daya teknologi informasi (seperti server, database, penyimpanan, jaringan) melalui internet dengan skema bayar sesuai penggunaan (*pay-as-you-go*).
- **Cloudflare**: Perusahaan penyedia jaringan pengiriman konten (CDN), mitigasi DDoS, sertifikat keamanan SSL/TLS, dan layanan infrastruktur DNS global.
- **CMS (Content Management System)**: Perangkat lunak yang memungkinkan pengguna membuat, mengedit, mengorganisasi, dan mempublikasikan konten digital di web tanpa harus memahami bahasa pemrograman.
- **Code Coverage**: Metrik pengukuran persentase baris kode, fungsi, atau cabang logika dalam aplikasi yang dieksekusi saat pengujian otomatis (*automated test*) dijalankan.
- **Code Splitting**: Teknik pemecahan *bundle* JavaScript menjadi potongan-potongan file lebih kecil yang hanya dimuat saat diperlukan (*on-demand*), guna mempercepat waktu muat awal aplikasi.
- **Component**: Unit independen dan *reusable* dalam antarmuka pengguna yang menggabungkan struktur tampilan, gaya (*style*), dan perilaku logika dalam satu modul.
- **Component Architecture**: Pola desain pembuatan aplikasi web dengan menyusun keseluruhan sistem menjadi komponen-komponen kecil modular yang dapat digabungkan dan digunakan kembali.
- **Composition API**: Paradigma penulisan komponen di Vue 3 yang memungkinkan pengelompokan logika berdasarkan fungsionalitas menggunakan fungsi impor daripada berbasis objek (*Options API*).
- **Container**: Paket perangkat lunak ringan dan terisolasi yang mengemas kode aplikasi beserta semua pustaka dan dependensinya sehingga dapat berjalan konsisten di lingkungan mana pun (contoh: Docker).
- **Content Delivery Network**: *(Lihat CDN)* Jaringan server global yang menyajikan konten statis ke pengguna dari lokasi server terdekat untuk memperkecil latensi.
- **Content Management System**: *(Lihat CMS)* Platform aplikasi untuk mengelola konten website secara visual dan mudah tanpa coding langsung.
- **Content Security Policy (CSP)**: Header keamanan HTTP yang membatasi sumber daya (skrip, gaya gambar, iframe) yang diizinkan untuk dimuat oleh browser guna mencegah serangan injeksi seperti XSS.
- **Cookie**: Potongan data kecil yang dikirim server dan disimpan oleh browser di komputer pengguna untuk mengingat informasi status, sesi login, atau preferensi pelacakan.
- **CORS (Cross-Origin Resource Sharing)**: Mekanisme keamanan berbasis header HTTP pada browser yang mengontrol apakah aplikasi web pada satu domain diizinkan mengakses sumber daya dari domain yang berbeda.
- **CQRS (Command Query Responsibility Segregation)**: Pola arsitektur yang memisahkan operasi pembacaan data (*Query*) dan operasi modifikasi/penulisan data (*Command*) ke dalam model terpisah demi performa dan skalabilitas.
- **CRUD (Create, Read, Update, Delete)**: Empat operasi dasar dalam manipulasi data persisten pada database atau RESTful API.
- **CSRF (Cross-Site Request Forgery)**: Jenis serangan keamanan siber di mana situs jahat memperdaya browser korban untuk mengirimkan permintaan HTTP yang tidak sah ke aplikasi web tempat korban sedang terotentikasi.
- **CSS (Cascading Style Sheets)**: Bahasa lembar gaya yang digunakan untuk mendesain tata letak, warna, tipografi, dan tampilan visual dari dokumen HTML.
- **CSS Grid**: Sistem tata letak dua dimensi (baris dan kolom) bawaan CSS yang kuat untuk mendesain antarmuka pengguna yang fleksibel dan kompleks.
- **CSS Module**: Pendekatan penulisan CSS di mana semua nama kelas (*class names*) secara otomatis diubah menjadi cakupan lokal (*locally scoped*) agar tidak bertabrakan dengan komponen lain.
- **CSS-in-JS**: Teknik penulisan gaya CSS langsung di dalam file kode JavaScript/TypeScript menggunakan pustaka seperti Styled Components atau Emotion.
- **Custom Hook**: Fungsi JavaScript khusus dalam React yang diawali dengan kata `use` yang memungkinkan ekstraksi dan penggunaan kembali logika *stateful* di berbagai komponen.

---

## D

- **Data**: Kumpulan fakta mentah, angka, teks, atau simbol yang diproses atau disimpan oleh komputer untuk menghasilkan informasi.
- **Data Binding**: Mekanisme sinkronisasi data otomatis antara model data aplikasi dan elemen antarmuka pengguna (UI).
- **Data Fetching**: Proses pengambilan data dari sumber eksternal (seperti server, REST API, atau database) ke dalam aplikasi frontend.
- **Data Normalization**: Proses pengorganisasian data dalam basis data relasional untuk mengurangi redundansi data dan meningkatkan integritas data.
- **Data Pipeline**: Rangkaian proses otomatis yang mengekstrak data dari berbagai sumber, mentransformasikannya, dan memindahkannya ke sistem tujuan untuk dianalisis atau disimpan.
- **Data Transfer Object (DTO)**: Objek sederhana tanpa logika bisnis yang dirancang khusus untuk membawa dan mentransfer data antar proses atau lapisan arsitektur aplikasi.
- **Data Validation**: Proses pemeriksaan dan pemastian bahwa data yang dimasukkan ke dalam sistem telah memenuhi kriteria tipe, format, dan batasan yang ditentukan sebelum diproses lebih lanjut.
- **Database**: Sistem terorganisasi untuk menyimpan, mengelola, mencari, dan memperbarui kumpulan data secara efisien dan aman.
- **Database Index**: Struktur data khusus pada database yang meningkatkan kecepatan operasi pencarian dan pengambilan data pada kolom tertentu dengan sedikit mengorbankan kecepatan penulisan.
- **Database Migration**: Skrip otomatis terkelola yang melacak dan menerapkan perubahan skema database (seperti membuat tabel atau menambah kolom) secara bertahap dan konsisten di berbagai lingkungan tim.
- **Database Schema**: Struktur cetak biru (*blueprint*) formal yang mendefinisikan tabel, kolom, tipe data, relasi, dan batasan dalam sebuah database.
- **Database Transaction**: Unit kerja tunggal yang mengeksekusi serangkaian operasi database dengan prinsip ACID (bersifat *all-or-nothing*—semua berhasil atau semuanya dibatalkan).
- **DDoS (Distributed Denial of Service)**: Serangan siber yang membanjiri server atau jaringan target dengan jutaan lalu lintas palsu dari banyak komputer terdistribusi hingga server tumbang dan tidak dapat diakses.
- **Debugging**: Proses sistematis untuk mengidentifikasi, menganalisis, melacak, dan memperbaiki *bug* atau kesalahan logika dalam kode program.
- **Dependency Injection (DI)**: Pola desain perangkat lunak di mana sebuah objek menerima objek lain yang dibutuhkannya (*dependency*) dari luar daripada membuatnya sendiri di dalam kelas, guna memudahkan modularitas dan pengujian (*testing*).
- **Deployment**: Proses memindahkan, mengonfigurasi, dan merilis aplikasi perangkat lunak dari lingkungan pengembangan (*development*) ke server produksi (*production*) agar dapat diakses pengguna.
- **Design Pattern**: Solusi umum yang terbukti efektif dan dapat digunakan kembali untuk memecahkan masalah-masalah arsitektur yang sering muncul dalam rekayasa perangkat lunak.
- **Design System**: Kumpulan standar desain terpadu, pedoman, aset visual, dan komponen kode yang dapat digunakan kembali untuk menjaga konsistensi produk digital di seluruh tim.
- **Design Token**: Nilai desain dasar yang diabstraksikan ke dalam variabel kode (seperti kode warna, ukuran spasi, *font size*, radius) untuk menjaga sinkronisasi antara desain UI (Figma) dan kode frontend.
- **DevOps**: Praktik budaya dan kolaborasi yang menggabungkan pengembangan perangkat lunak (*Development*) dan operasi TI (*Operations*) untuk mempercepat siklus pengiriman perangkat lunak dengan kualitas tinggi.
- **DNS (Domain Name System)**: Sistem buku telepon internet yang menerjemahkan nama domain yang mudah dibaca manusia (seperti `google.com`) menjadi alamat IP numerik (seperti `142.250.190.46`).
- **Docker**: Platform open-source berbasis kontainerisasi yang memungkinkan pengembang mengemas aplikasi beserta lingkungan eksekusinya ke dalam satu unit portabel (*container*).
- **DOM (Document Object Model)**: Representasi pohon objek terstruktur dari dokumen HTML yang dibuat oleh browser, memungkinkan JavaScript untuk membaca dan memanipulasi konten, gaya, dan struktur halaman secara dinamis.
- **Domain**: Nama alamat unik yang mudah diingat yang digunakan pengguna untuk mengakses website di internet (contoh: `wikipedia.org`).
- **Domain-Driven Design (DDD)**: Pendekatan pengembangan perangkat lunak yang berfokus pada pemodelan logika sistem yang sangat mencerminkan domain bisnis dan aturan dunia nyata melalui bahasa terpadu (*Ubiquitous Language*).
- **DRY (Don't Repeat Yourself)**: Prinsip dasar rekayasa perangkat lunak yang menekankan bahwa setiap potongan pengetahuan atau logika harus memiliki representasi tunggal dan tidak ambigu di dalam sistem untuk menghindari duplikasi kode.
- **Dynamic Import**: Fitur pemuatan modul JavaScript secara dinamis dan asinkron pada saat runtime (`import('./module.js')`), sering digunakan untuk mendukung *code splitting*.
- **Dynamic Rendering**: Teknik perenderan di mana server menghasilkan HTML yang berbeda tergantung pada siapa yang meminta (misal mengirimkan halaman ter-render statis untuk bot *search engine* dan CSR untuk pengguna biasa).
- **Dynamic Route**: Rute halaman atau endpoint API yang memiliki parameter variabel pada URL-nya (seperti `/users/:id` atau `/blog/[slug]`) untuk menampilkan data yang berbeda sesuai parameter tersebut.

---

## E

- **Edge Computing**: Paradigma komputasi terdistribusi yang memproses data dan mengeksekusi kode di lokasi yang sedekat mungkin dengan pengguna akhir (pada server tepi jaringan/CDN) guna memangkas latensi.
- **Edge Function**: Potongan kode nirserver (*serverless function*) yang dieksekusi secara instan di server CDN terdekat dengan lokasi pengguna global untuk merespons permintaan dengan kecepatan maksimal.
- **Elasticsearch**: Mesin pencari dan analitik data terdistribusi berbasis dokumen JSON yang sangat cepat dan mendukung pencarian teks lengkap (*full-text search*).
- **Encryption**: Proses matematis untuk mengacak data yang dapat dibaca (*plaintext*) menjadi format yang tidak dapat dipahami (*ciphertext*) sehingga hanya dapat dibaca oleh pihak yang memiliki kunci dekripsi yang sah.
- **End-to-End Encryption (E2EE)**: Sistem komunikasi aman di mana data dienkripsi di perangkat pengirim dan hanya dapat didekripsi di perangkat penerima tujuan, sehingga pihak ketiga atau penyedia server sekalipun tidak dapat membaca isinya.
- **Endpoint**: Alamat URL spesifik pada server atau API tempat klien mengirimkan permintaan untuk mengakses sumber daya atau menjalankan fungsi tertentu (contoh: `GET /api/users`).
- **Entity**: Objek atau konsep dalam domain aplikasi yang memiliki identitas unik yang bertahan sepanjang siklus hidupnya (sering kali dipetakan ke tabel dalam database).
- **Entity Relationship Diagram (ERD)**: Diagram visual yang menggambarkan struktur model basis data, entitas-entitas di dalamnya, beserta hubungan relasi (*one-to-one, one-to-many, many-to-many*) antarentitas.
- **Environment Variable**: Variabel dinamis di luar kode aplikasi yang menyimpan konfigurasi lingkungan sistem operasi atau server (seperti kunci API, URL database, atau kredensial rahasia).
- **Error Boundary**: Komponen khusus (umumnya dalam React) yang menangkap error JavaScript di komponen anak di bawahnya, mencatat error tersebut, dan menampilkan UI alternatif cadangan daripada membuat seluruh aplikasi *crash*.
- **Error Handling**: Mekanisme terencana dalam kode untuk mendeteksi, menangkap, mengantisipasi, dan merespons kesalahan (*error/exception*) yang terjadi saat aplikasi berjalan.
- **Error Monitoring**: Proses dan alat bantu (seperti Sentry, Datadog) yang secara proaktif melacak, mengumpulkan laporan *crash*, dan memberi notifikasi saat terjadi kesalahan pada aplikasi di lingkungan produksi.
- **Event**: Peristiwa atau tindakan yang terdeteksi oleh sistem atau browser (seperti klik mouse, penekanan tombol keyboard, pengiriman form, atau pemuatan halaman).
- **Event Bubbling**: Mekanisme propagasi event di DOM browser di mana event yang terjadi pada elemen terdalam akan merambat naik (*bubble up*) ke elemen-elemen induknya di atasnya.
- **Event Delegation**: Teknik penanganan event dengan memanfaatkan *event bubbling*, yaitu memasang satu *event listener* pada elemen induk untuk mengelola event dari banyak elemen anak sekaligus.
- **Event Loop**: Mekanisme internal di JavaScript runtime yang bertugas memantau *Call Stack* dan *Task Queue*, memindahkan tugas asinkron yang siap dieksekusi ke *stack* ketika *stack* sedang kosong.
- **Event-Driven Architecture**: Pola arsitektur perangkat lunak di mana alur sistem dipicu oleh produksi, deteksi, dan konsumsi peristiwa (*events*) secara asinkron.
- **Event Sourcing**: Pola arsitektur penyimpanan data di mana setiap perubahan status sistem disimpan sebagai urutan riwayat peristiwa (*events*) yang tidak dapat diubah (*immutable*), bukan hanya menyimpan status terakhir.
- **Express.js**: Framework backend minimalis, fleksibel, dan sangat populer untuk Node.js yang menyediakan fitur routing dan middleware tangguh untuk membangun web server dan API.
- **ESLint**: Alat analisis kode statis (*linter*) untuk JavaScript dan TypeScript yang mendeteksi pola bermasalah, bug potensial, dan memastikan kepatuhan terhadap standar gaya penulisan kode.
- **ECMAScript**: Standar spesifikasi resmi untuk bahasa pemrograman berbasis skrip yang menjadi dasar standarisasi JavaScript (dikelola oleh komite TC39).
- **ES Modules (ESM)**: Format modul standar resmi JavaScript modern yang menggunakan sintaks `import` dan `export` untuk memuat dependensi antarfile.
- **ETag (Entity Tag)**: Header HTTP yang berisi penanda versi atau hash unik dari suatu sumber daya, digunakan oleh browser dan server untuk memvalidasi apakah konten cache masih segar tanpa perlu mengunduh ulang.
- **Eventual Consistency**: Model konsistensi dalam sistem terdistribusi di mana semua replika database dijamin akan memiliki data yang sama secara seragam setelah rentang waktu tertentu tanpa ada pembaruan baru.
- **Exponential Backoff**: Algoritma strategi pengulangan (*retry*) di mana jeda waktu tunggu sebelum mencoba kembali permintaan yang gagal akan dilipatgandakan secara eksponensial untuk menghindari membebani server yang sedang bermasalah.

---

## F

- **Favicon**: Ikon kecil yang mewakili website yang ditampilkan di tab browser, daftar bookmark, dan hasil riwayat pencarian (biasanya berukuran 16x16 atau 32x32 piksel).
- **Fetch API**: Antarmuka bawaan modern pada JavaScript browser untuk melakukan permintaan jaringan (*HTTP request*) asinkron menggunakan *Promise*.
- **File Upload**: Proses pengiriman file (seperti gambar, dokumen, video) dari perangkat klien ke server untuk disimpan di penyimpanan lokal server atau *cloud storage*.
- **File-Based Routing**: Sistem penentuan rute URL aplikasi yang dipetakan secara otomatis berdasarkan struktur direktori dan file di dalam proyek (seperti pada Next.js atau Nuxt.js).
- **Firebase**: Platform pengembangan aplikasi dari Google yang menyediakan layanan backend lengkap (BaaS) seperti Firestore database, autentikasi, hosting, analitik, dan *cloud functions*.
- **Flexbox (Flexible Box Layout)**: Modul tata letak satu dimensi di CSS yang memudahkan pengaturan posisi, perataan, dan distribusi ruang antar elemen di dalam kontainer, baik secara horizontal maupun vertikal.
- **Font Loading**: Proses bagaimana browser mengunduh, mengurai, dan menerapkan font kustom pada halaman web, sering kali berkaitan dengan optimasi *layout shift* (CLS).
- **Font Optimization**: Praktik mengoptimalkan pengiriman font web (seperti penggunaan format WOFF2, subset karakter, dan *font-display: swap*) untuk mempercepat rendering teks.
- **Foreign Key**: Kolom dalam tabel basis data relasional yang merujuk pada *Primary Key* di tabel lain untuk membentuk hubungan relasional antar kedua tabel.
- **Form Validation**: Proses verifikasi data yang dimasukkan pengguna ke dalam formulir web untuk memastikan formatnya benar dan sesuai aturan sebelum diproses atau disimpan.
- **Framework**: Kerangka kerja terstruktur berupa kumpulan pustaka, utilitas, dan konvensi arsitektur yang menjadi fondasi bagi pengembang dalam membangun aplikasi tanpa menulis kode dari nol.
- **Frontend**: Bagian dari aplikasi web yang langsung dilihat, dialami, dan diinteraksikan oleh pengguna di layar peramban (*browser*).
- **Full-Stack**: Istilah untuk pengembang atau teknologi yang mencakup seluruh lapisan pengembangan aplikasi web, mulai dari antarmuka frontend, logika backend, hingga basis data dan infrastruktur.
- **Function**: Blok kode terorganisasi dan mandiri yang dirancang untuk melakukan tugas tertentu, dapat menerima parameter input dan mengembalikan nilai output.
- **Functional Programming**: Paradigma pemrograman yang memperlakukan komputasi sebagai evaluasi fungsi matematika, menekankan penggunaan *pure functions*, data *immutable*, dan menghindari *side effects*.
- **FastAPI**: Framework web modern berbasis Python yang sangat cepat untuk membangun API performa tinggi dengan fitur otomatisasi validasi data menggunakan Pydantic dan dokumentasi Swagger interaktif.
- **Fastify**: Framework server web untuk Node.js yang sangat berfokus pada kecepatan eksekusi tinggi, efisiensi konsumsi memori, dan arsitektur berbasis *plugin*.
- **Feature Flag**: Teknik pengembangan yang memungkinkan pengembang mengaktifkan atau menonaktifkan fitur tertentu di lingkungan produksi tanpa perlu melakukan *deploy* ulang kode.
- **Federated Identity**: Sistem manajemen identitas yang memungkinkan pengguna menggunakan satu set kredensial untuk login ke berbagai aplikasi di organisasi atau domain berbeda (contoh: *Sign in with Google/Apple*).

---

## G

- **Garbage Collection**: Mekanisme manajemen memori otomatis dalam bahasa pemrograman (seperti JavaScript) yang mendeteksi dan membebaskan alokasi memori yang sudah tidak lagi digunakan oleh aplikasi.
- **Gateway**: Titik akses jaringan atau layanan perantara yang menerjemahkan protokol atau menjadi jembatan lalu lintas data antara dua sistem yang berbeda.
- **GET**: Salah satu metode permintaan HTTP yang digunakan khusus untuk meminta dan mengambil data dari server tanpa mengubah keadaan (*state*) data di server.
- **Git**: Sistem kontrol versi terdistribusi (*distributed version control system*) yang melacak setiap perubahan kode sumber secara historis dan memfasilitasi kolaborasi tim.
- **GitHub**: Platform berbasis cloud untuk meng-host repositori Git, menyediakan kolaborasi kode, manajemen proyek, *code review*, dan fitur CI/CD.
- **GitHub Actions**: Platform otomatisasi alur kerja terintegrasi di GitHub yang memungkinkan pembuatan pipeline CI/CD langsung di dalam repositori proyek.
- **GitLab**: Platform DevOps komprehensif berbasis web yang menyediakan manajemen repositori Git, pelacakan isu, pipeline CI/CD bawaan, dan fitur keamanan terpadu.
- **GitOps**: Praktik operasional yang menggunakan repositori Git sebagai sumber kebenaran tunggal (*single source of truth*) untuk mengotomatisasi infrastruktur dan penyebaran aplikasi secara deklaratif.
- **GraphQL**: Bahasa kueri untuk API yang dikembangkan oleh Meta, memungkinkan klien meminta secara presisi data yang dibutuhkan saja tanpa *overfetching* atau *underfetching*.
- **Grid Layout**: Sistem tata letak dua dimensi berbasis baris dan kolom di CSS yang mempermudah perancangan antarmuka kompleks yang responsif.
- **Google Cloud (GCP)**: Kumpulan layanan komputasi awan yang disediakan oleh Google, mencakup hosting, database, mesin virtual, analisis data besar, dan kecerdasan buatan.
- **Graceful Degradation**: Prinsip desain yang memastikan website modern tetap dapat berfungsi pada tingkat dasar di browser lama atau perangkat dengan keterbatasan, meskipun beberapa fitur canggih dinonaktifkan.
- **Guard**: Mekanisme pencegahan atau proteksi (seperti *route guard* di Vue/Angular) yang memeriksa kondisi tertentu (misal status autentikasi) sebelum mengizinkan navigasi ke rute tertentu.

---

## H

- **Hash Function**: Fungsi matematis satu arah yang mengubah input data dengan panjang berapa pun menjadi string alfanumerik acak dengan panjang tetap yang unik.
- **Health Check**: Endpoint API atau pemeriksaan berkala yang digunakan oleh *load balancer* atau orkestrator kontainer untuk memverifikasi apakah suatu layanan server berjalan normal atau mengalami gangguan.
- **Headless CMS**: Sistem manajemen konten (*CMS*) yang hanya menyediakan antarmuka pengeditan konten dan API (REST atau GraphQL) untuk menyajikan data, tanpa terikat pada lapisan tampilan antarmuka frontend tertentu.
- **Header**: Bagian metadata dari permintaan (*request*) atau balasan (*response*) HTTP yang membawa informasi kontekstual seperti tipe konten, autentikasi, pengaturan cache, dan cookie.
- **Hook**: Fitur di React (atau konsep dalam framework lain) yang memungkinkan fungsi komponen menggunakan *state* dan fitur siklus hidup React lainnya tanpa perlu menulis kelas.
- **Hosting**: Layanan infrastruktur server yang menyewakan ruang penyimpanan dan sumber daya komputasi agar file website dapat diakses melalui internet sepanjang waktu.
- **Hot Module Replacement (HMR)**: Fitur alat bantu pengembangan modern yang mengganti, menambah, atau menghapus modul kode di browser secara instan saat kode disimpan tanpa me-refresh seluruh halaman.
- **HTML (HyperText Markup Language)**: Bahasa markah standar yang mendefinisikan struktur dan kerangka dasar dari konten sebuah halaman web.
- **HTTP (HyperText Transfer Protocol)**: Protokol komunikasi jaringan lapisan aplikasi yang menjadi fondasi pertukaran data antara browser web (*client*) dan server di internet.
- **HTTP/2**: Revisi utama protokol HTTP yang memperkenalkan fitur *multiplexing* (banyak request dalam satu koneksi TCP), kompresi header, dan *server push* untuk performa lebih cepat.
- **HTTP/3**: Versi terbaru protokol HTTP yang berjalan di atas protokol transport QUIC (berbasis UDP), mengatasi masalah *head-of-line blocking* dan membuat koneksi web jauh lebih cepat dan stabil.
- **HTTPS (HTTP Secure)**: Versi aman dari protokol HTTP yang mengenkripsi seluruh pertukaran data antara klien dan server menggunakan sertifikat TLS/SSL.
- **HSTS (HTTP Strict Transport Security)**: Header keamanan HTTP yang memaksa browser untuk selalu berkomunikasi dengan website hanya melalui koneksi aman HTTPS.
- **HATEOAS (Hypermedia As The Engine Of Application State)**: Prinsip tingkat lanjut dalam arsitektur REST API di mana respon server menyediakan tautan (*hypermedia*) dinamis yang memandu klien tentang aksi apa saja yang dapat dilakukan selanjutnya.
- **Hydration**: Proses di mana JavaScript di sisi klien mengambil alih HTML statis yang sebelumnya dirender oleh server (SSR/SSG), mengaktifkan event listener, dan membuat halaman menjadi interaktif sepenuhnya.
- **HTTP Status 200 (OK)**: Kode status HTTP yang menandakan bahwa permintaan berhasil diproses oleh server dan respons yang diharapkan berhasil dikirim.
- **HTTP Status 201 (Created)**: Kode status HTTP yang menandakan bahwa permintaan berhasil diproses dan telah berhasil menciptakan sumber daya (*resource*) baru di server.
- **HTTP Status 301 (Moved Permanently)**: Kode status HTTP yang menandakan bahwa URL sumber daya yang diminta telah dipindahkan secara permanen ke URL baru yang disertakan dalam header respons.
- **HTTP Status 302 (Found / Temporary Redirect)**: Kode status HTTP yang menandakan bahwa sumber daya untuk sementara berada di URL lain, namun klien tetap harus menggunakan URL lama untuk permintaan di masa mendatang.
- **HTTP Status 304 (Not Modified)**: Kode status HTTP yang menandakan bahwa sumber daya yang diminta belum mengalami perubahan sejak versi cache terakhir, sehingga klien dapat menggunakan salinan lokalnya.
- **HTTP Status 400 (Bad Request)**: Kode status HTTP yang menandakan bahwa server tidak dapat memproses permintaan karena kesalahan sintaks atau data yang tidak valid dari sisi klien.
- **HTTP Status 401 (Unauthorized)**: Kode status HTTP yang menandakan bahwa permintaan memerlukan autentikasi yang valid (klien belum login atau token tidak sah).
- **HTTP Status 403 (Forbidden)**: Kode status HTTP yang menandakan bahwa server memahami identitas klien, tetapi klien tidak memiliki izin atau hak akses untuk melihat sumber daya tersebut.
- **HTTP Status 404 (Not Found)**: Kode status HTTP yang menandakan bahwa server tidak dapat menemukan sumber daya atau halaman yang diminta pada URL tersebut.
- **HTTP Status 405 (Method Not Allowed)**: Kode status HTTP yang menandakan bahwa metode HTTP yang dikirimkan (misal `POST`) tidak didukung atau diizinkan untuk endpoint tersebut.
- **HTTP Status 409 (Conflict)**: Kode status HTTP yang menandakan terjadinya konflik data di server saat memproses permintaan (misalnya mendaftarkan email yang sudah terdaftar sebelumnya).
- **HTTP Status 422 (Unprocessable Entity)**: Kode status HTTP yang menandakan bahwa server memahami tipe konten permintaan dan sintaksnya benar, tetapi data di dalamnya gagal memenuhi aturan validasi bisnis.
- **HTTP Status 429 (Too Many Requests)**: Kode status HTTP yang menandakan bahwa klien telah mengirimkan terlalu banyak permintaan dalam periode waktu tertentu dan telah melampaui batas *rate limit*.
- **HTTP Status 500 (Internal Server Error)**: Kode status HTTP umum yang menandakan bahwa server mengalami kesalahan tak terduga atau *bug* internal saat memproses permintaan.
- **HTTP Status 502 (Bad Gateway)**: Kode status HTTP yang menandakan bahwa server yang bertindak sebagai gateway/proxy menerima respons yang tidak valid dari server hulu (*upstream server*).
- **HTTP Status 503 (Service Unavailable)**: Kode status HTTP yang menandakan bahwa server saat ini tidak dapat menangani permintaan karena kelebihan beban (*overloaded*) atau sedang dalam proses pemeliharaan (*maintenance*).
- **HTTP Status 504 (Gateway Timeout)**: Kode status HTTP yang menandakan bahwa server gateway/proxy tidak menerima respons tepat waktu dari server hulu (*upstream*) hingga batas waktu habis (*timeout*).

---

## I

- **IAM (Identity and Access Management)**: Kerangka kerja keamanan dan kumpulan kebijakan untuk mengelola identitas digital serta mengatur izin akses pengguna dan layanan ke sumber daya cloud.
- **Identity Provider (IdP)**: Layanan sistem yang membuat, memelihara, dan mengelola informasi identitas pengguna serta menyediakan layanan otentikasi kepada aplikasi pihak ketiga.
- **Immutable Data**: Struktur data yang nilainya tidak dapat diubah setelah dibuat; jika ada perubahan, sistem akan menghasilkan salinan baru dengan nilai yang diperbarui.
- **Incremental Static Regeneration (ISR)**: Fitur pada Next.js yang memungkinkan halaman web statis diperbarui atau dibuat ulang di latar belakang secara bertahap saat ada permintaan, tanpa perlu membangun ulang (*rebuild*) seluruh website.
- **IndexedDB**: Basis data NoSQL transaksional bawaan browser untuk menyimpan sejumlah besar data terstruktur dan file/blob secara lokal di sisi klien.
- **Inheritance**: Konsep fundamental dalam OOP di mana sebuah kelas (*child class*) dapat mewarisi properti dan metode dari kelas lain (*parent class*).
- **Input Sanitization**: Proses membersihkan dan memfilter input data dari pengguna untuk menghapus atau menonaktifkan karakter berbahaya sebelum data diproses atau ditampilkan guna mencegah kerentanan keamanan seperti XSS.
- **Input Validation**: Pemeriksaan teknis untuk memastikan bahwa data yang dimasukkan pengguna memenuhi kriteria format, panjang, dan batasan tipe yang ditentukan.
- **Integration Testing**: Tingkat pengujian perangkat lunak di mana unit-unit modul yang berbeda digabungkan dan diuji bersama untuk memverifikasi bahwa mereka berinteraksi secara tepat.
- **Internationalization (i18n)**: Proses merancang dan mempersiapkan aplikasi web agar dapat dengan mudah diadaptasi ke berbagai bahasa, format tanggal/mata uang, dan preferensi wilayah geografis yang berbeda tanpa perubahan kode inti.
- **IP Address (Internet Protocol Address)**: Label numerik unik yang diberikan kepada setiap perangkat yang terhubung ke jaringan komputer yang menggunakan protokol internet untuk komunikasi.
- **Idempotency**: Sifat operasi atau API di mana pemanggilan berulang kali dengan parameter yang sama akan selalu menghasilkan keadaan sistem yang sama tanpa menimbulkan efek samping tak terduga (contoh: metode HTTP `GET`, `PUT`, dan `DELETE`).

---

## J

- **JavaScript**: Bahasa pemrograman tingkat tinggi, dinamis, dan multi-paradigma yang menjadi bahasa standar untuk menambahkan interaktivitas dan logika di web browser serta di sisi server.
- **Java**: Bahasa pemrograman berbasis kelas, berorientasi objek murni, dan portabel (*Write Once, Run Anywhere*) yang banyak digunakan untuk membangun aplikasi enterprise berskala besar.
- **Java Spring Boot**: Framework berbasis Java open-source yang mempermudah pembuatan aplikasi backend mikroservis yang siap produksi dengan konfigurasi minimal.
- **Jenkins**: Server otomatisasi open-source berbasis Java yang digunakan untuk mengotomatisasi alur integrasi dan pengiriman berkelanjutan (CI/CD).
- **Jest**: Framework pengujian JavaScript yang komprehensif dan mudah digunakan, populer digunakan untuk unit test dan integration test pada aplikasi React dan Node.js.
- **JSON (JavaScript Object Notation)**: Format pertukaran data berbasis teks standar yang ringan, mudah dibaca manusia, dan mudah diuraikan (*parsed*) oleh mesin komputasi.
- **JSON Schema**: Standar berbasis JSON yang digunakan untuk mendefinisikan, memvalidasi, dan mendokumentasikan struktur serta format data dokumen JSON.
- **JSON Web Token (JWT)**: Standar terbuka (RFC 7519) ringkas dan mandiri untuk mentransmisikan klaim informasi keamanan antara dua pihak secara aman dalam bentuk objek JSON bertanda tangan digital (*digitally signed*).
- **JSON-LD (JSON for Linked Data)**: Metode penulisan data terstruktur menggunakan format JSON untuk menyajikan metadata kaya pada halaman web agar mudah dimengerti oleh mesin pencari (*rich snippets*).
- **jQuery**: Pustaka JavaScript klasik yang mempermudah manipulasi dokumen HTML/DOM, penanganan event, animasi, dan pemanggilan Ajax di berbagai variasi browser lama.
- **JSX (JavaScript XML)**: Ekstensi sintaksis untuk JavaScript yang memungkinkan penulisan markup yang mirip HTML langsung di dalam kode JavaScript/React.

---

## K

- **Keyboard Accessibility**: Aspek aksesibilitas web yang memastikan seluruh fungsi interaktif website dapat dinavigasi dan dioperasikan sepenuhnya hanya menggunakan keyboard tanpa memerlukan mouse.
- **Keyframe Animation**: Teknik animasi CSS (`@keyframes`) yang memungkinkan penentuan tahapan perubahan gaya visual elemen pada titik-titik persentase waktu tertentu dari awal hingga akhir durasi animasi.
- **Keycloak**: Solusi perangkat lunak manajemen identitas dan akses (*IAM*) open-source yang menyediakan fitur Single Sign-On (SSO), manajemen pengguna, dan integrasi OAuth2/OIDC.
- **Kubernetes (K8s)**: Platform orkestrasi kontainer open-source untuk mengotomatisasi penyebaran (*deployment*), penskalaan (*scaling*), dan pengelolaan aplikasi berbasis kontainer dalam skala besar.

---

## L

- **Lazy Loading**: Pola optimasi performa yang menunda pemuatan sumber daya non-kritis (seperti gambar di luar layar atau modul JS) hingga sumber daya tersebut benar-benar dibutuhkan oleh pengguna.
- **Layout**: Struktur susunan visual elemen-elemen desain pada halaman web, mencakup penataan header, navigasi, konten utama, sidebar, dan footer.
- **Layered Architecture**: Pola desain arsitektur perangkat lunak yang membagi sistem menjadi lapisan-lapisan dengan tanggung jawab terpisah (misalnya lapisan presentasi, logika bisnis, akses data, dan basis data).
- **Largest Contentful Paint (LCP)**: Metrik Core Web Vitals yang mengukur waktu yang dibutuhkan untuk merender elemen konten visual terbesar (seperti gambar utama atau blok teks) yang terlihat di layar pengguna.
- **Lifecycle**: Rangkaian tahapan yang dilalui oleh suatu komponen aplikasi dari mulai dibuat (*mounting*), diperbarui (*updating*), hingga dihapus dari DOM (*unmounting*).
- **Load Balancer**: Perangkat lunak atau perangkat keras yang mendistribusikan lalu lintas jaringan yang masuk secara merata ke beberapa server aplikasi backend untuk mencegah kelebihan beban pada satu server.
- **Load Testing**: Jenis pengujian performa yang menguji perilaku dan ketahanan sistem aplikasi web di bawah beban volume trafik pengguna yang tinggi secara bersamaan.
- **Localhost**: Nama host standar yang merujuk pada komputer lokal yang sedang digunakan saat ini (berkorespondensi dengan alamat IP loopback `127.0.0.1`).
- **Localization (l10n)**: Proses penyesuaian konten aplikasi web agar sesuai dengan bahasa, budaya, konvensi format waktu/angka, dan konteks hukum pasar lokal tertentu.
- **Logging**: Praktik pencatatan informasi operasional, peringatan, transaksi, dan pesan error dari aplikasi ke dalam file log untuk keperluan analisis dan debugging.
- **Long Polling**: Teknik komunikasi di mana klien meminta data ke server, dan server menahan (*hold*) permintaan tersebut tetap terbuka sampai ada data baru yang tersedia sebelum mengirimkan respons dan menutup koneksi.
- **Laravel**: Framework aplikasi web berbasis PHP yang elegan dan ekspresif dengan sintaks yang rapi, menyediakan alat lengkap seperti routing, ORM Eloquent, migrasi, dan sistem antrean.
- **Lighthouse**: Alat audit otomatis open-source dari Google untuk mengukur performa, aksesibilitas, SEO, dan praktik terbaik (*best practices*) sebuah halaman web.

---

## M

- **Markdown**: Bahasa markah berbasis teks sederhana yang mudah dibaca dan ditulis, dirancang untuk dikonversi menjadi HTML yang terstruktur rapi.
- **Material Design**: Sistem desain komprehensif yang dikembangkan oleh Google yang menggunakan metafora visual terinspirasi dari sifat fisik kertas dan tinta.
- **Media Query**: Fitur CSS3 yang memungkinkan penerapan aturan gaya yang berbeda berdasarkan karakteristik perangkat, seperti lebar layar (*viewport*), resolusi, atau orientasi perangkat.
- **Memoization**: Teknik optimasi komputasi yang menyimpan hasil panggilan fungsi yang berat ke dalam memori cache dan mengembalikan hasil tersebut ketika fungsi dipanggil kembali dengan input yang persis sama.
- **Memory Leak**: Masalah alokasi memori di mana memori yang sudah tidak digunakan lagi oleh program gagal dibebaskan oleh sistem, menyebabkan penggunaan RAM terus membengkak hingga aplikasi melambat atau *crash*.
- **Message Queue**: Komponen arsitektur middleware yang menyimpan pesan atau tugas asinkron dalam antrean sementara sampai komponen pekerja (*worker*) siap memprosesnya (contoh: RabbitMQ, Apache Kafka).
- **Metadata**: Data yang menjelaskan data lain; dalam konteks web, informasi kontekstual tentang halaman web (seperti judul, deskripsi, gambar preview) yang ditaruh di dalam tag `<head>` HTML.
- **Middleware**: Lapisan perangkat lunak perantara yang mengeksekusi kode di antara penerimaan permintaan klien dan pembuatan respons akhir oleh fungsi penangan (*route handler*).
- **Microfrontend**: Pendekatan arsitektur di mana antarmuka frontend web yang besar dipecah menjadi aplikasi-aplikasi frontend kecil yang independen dan dapat dikembangkan serta di-deploy oleh tim yang berbeda.
- **Microservices**: Pola arsitektur yang membangun aplikasi sebagai kumpulan layanan-layanan kecil yang independen, berjalan di prosesnya masing-masing, dan berkomunikasi melalui protokol ringan seperti HTTP REST atau gRPC.
- **Migration**: *(Lihat Database Migration)* Proses pengubahan skema database terstruktur secara terversi dan aman dari satu versi ke versi berikutnya.
- **MIME Type (Multipurpose Internet Mail Extensions)**: Standar identifikasi tipe media dan format file yang ditransmisikan melalui internet (contoh: `text/html`, `application/json`, `image/png`).
- **Mobile-First**: Filosofi desain dan pengembangan web yang memprioritaskan perancangan antarmuka untuk layar smartphone kecil terlebih dahulu sebelum menambahkan penyesuaian untuk layar tablet dan desktop yang lebih besar.
- **Monorepo**: Strategi repositori perangkat lunak di mana kode dari banyak proyek, pustaka, atau paket aplikasi disimpan bersama di dalam satu repositori kontrol versi tunggal.
- **Monolith**: Pola arsitektur perangkat lunak tradisional di mana seluruh komponen aplikasi (frontend, backend, database handler) digabungkan menjadi satu kesatuan basis kode tunggal yang di-deploy bersamaan.
- **Monitoring**: Pengumpulan, visualisasi, dan analisis data metrik kinerja sistem secara terus-menerus untuk mendeteksi potensi masalah sebelum berdampak pada pengguna.
- **Mutation Observer**: Antarmuka JavaScript bawaan browser yang menyediakan kemampuan untuk mengamati dan merespons perubahan yang terjadi pada struktur pohon DOM.
- **MVC (Model-View-Controller)**: Pola arsitektur perangkat lunak klasik yang memisahkan aplikasi menjadi tiga komponen utama: Model (data dan logika bisnis), View (tampilan UI), dan Controller (penghubung alur antar keduanya).
- **Multi-Factor Authentication (MFA)**: Sistem keamanan autentikasi yang mewajibkan pengguna memverifikasi identitas menggunakan dua atau lebih faktor bukti berbeda (misal: password + kode OTP SMS/aplikator).
- **Multi-Tenant**: Arsitektur perangkat lunak di mana satu instans aplikasi melayani banyak pelanggan/organisasi (*tenant*) yang berbeda dengan data masing-masing yang tetap terisolasi secara aman.

---

## N

- **Namespace**: Ruang lingkup deklaratif yang membungkus kumpulan pengenal (fungsi, kelas, variabel) untuk mencegah terjadinya tabrakan nama (*name collision*) dalam program.
- **Navigation Guard**: Fungsi perantara dalam router sisi klien yang mencegat dan mengontrol alur transisi rute (misalnya menolak akses ke halaman dasbor jika pengguna belum login).
- **Nested Route**: Pola perutean di mana sebuah rute halaman berada di dalam hierarki rute induknya, memungkinkan tampilan antarmuka bersarang (*nested UI layout*) yang modular.
- **Netlify**: Platform hosting cloud dan otomatisasi alur kerja modern yang dirancang untuk aplikasi Jamstack, situs statis, dan *serverless functions*.
- **Network Latency**: Jeda waktu yang dibutuhkan sebuah paket data untuk berpindah dari satu titik asal ke titik tujuan melalui jaringan komputer (biasanya diukur dalam milidetik/ms).
- **Next.js**: Framework React full-stack tingkat produksi yang populer, mendukung *Server-Side Rendering (SSR)*, *Static Site Generation (SSG)*, *Server Actions*, dan optimasi performa terpadu.
- **Nginx**: Server web, reverse proxy, dan load balancer open-source berkinerja tinggi yang dirancang untuk menangani konkurensi koneksi besar dengan konsumsi memori rendah.
- **Node.js**: Lingkungan eksekusi (*runtime*) JavaScript open-source di luar browser yang dibangun di atas engine V8 Chrome untuk membangun aplikasi backend yang cepat dan scalable.
- **NoSQL**: Kategori basis data non-relasional yang menyimpan data dalam format fleksibel tanpa skema relasional kaku (seperti model dokumen JSON, key-value, kolom lebar, atau graf).
- **Normalization**: *(Lihat Data Normalization)* Proses pengorganisasian tabel database untuk meminimalkan redundansi data.
- **Nuxt.js**: Framework tingkat tinggi berbasis Vue.js untuk membangun aplikasi web modern dengan dukungan perenderan SSR, SSG, dan arsitektur modular yang rapi.
- **Non-Blocking I/O**: Model operasi input/output yang memungkinkan pemrosesan eksekusi kode lain tetap berjalan tanpa harus menunggu operasi I/O (seperti membaca file atau database) selesai.
- **Nonce (Number Used Once)**: Angka atau token acak unik yang hanya digunakan satu kali dalam komunikasi kriptografi atau header keamanan untuk mencegah serangan pemutaran ulang (*replay attacks*) dan validasi skrip CSP.

---

## O

- **OAuth**: Protokol otorisasi standar terbuka (RFC 6749) yang memungkinkan aplikasi pihak ketiga mendapatkan akses terbatas ke akun pengguna tanpa membagikan kata sandi pengguna.
- **Object-Oriented Programming (OOP)**: Paradigma pemrograman yang berpusat pada konsep "objek" yang berisi data (dalam bentuk properti/atribut) dan kode (dalam bentuk metode/fungsi).
- **Object Storage**: Arsitektur penyimpanan data yang mengelola dan memanipulasi file sebagai objek mandiri beserta metadatanya (contoh: Amazon S3, Google Cloud Storage), sangat ideal untuk file media statis.
- **Observer Pattern**: Pola desain di mana sebuah objek (*subject*) memelihara daftar objek pengamat (*observers*) yang secara otomatis diberi tahu jika ada perubahan status pada subjek tersebut.
- **Observability**: Kemampuan untuk mengukur dan memahami keadaan internal suatu sistem secara menyeluruh hanya berdasarkan keluaran data eksternal (metrik, log, dan traces).
- **Offline-First**: Pendekatan perancangan aplikasi web yang memastikan fungsi utama aplikasi tetap dapat berjalan lancar saat perangkat tidak memiliki koneksi internet, lalu menyinkronkan data saat online kembali.
- **OpenAPI**: Spesifikasi deskripsi standar terbuka independen-bahasa untuk mendokumentasikan antarmuka REST API agar dapat dibaca oleh manusia maupun mesin.
- **OpenID Connect (OIDC)**: Lapisan identitas sederhana yang dibangun di atas protokol OAuth 2.0 yang memungkinkan klien memverifikasi identitas pengguna akhir dan memperoleh informasi profil dasar pengguna.
- **Open Graph**: Protokol metadata dari Meta yang memungkinkan halaman web mengontrol bagaimana kontennya ditampilkan (gambar thumbnail, judul, deskripsi) saat dibagikan ke media sosial.
- **OpenTelemetry**: Standar dan kerangka kerja observabilitas open-source dari CNCF untuk membuat, mengumpulkan, dan mengekspor data telemetri (traces, metrics, logs) dari aplikasi.
- **OpenSSL**: Pustaka kriptografi open-source tangguh yang mengimplementasikan protokol keamanan SSL/TLS serta fungsi-fungsi enkripsi data.
- **Optional Chaining**: Fitur sintaks JavaScript modern (`?.`) yang memungkinkan pembacaan nilai properti yang bersarang tanpa menyebabkan error jika properti induknya bernilai `null` atau `undefined`.
- **Origin**: Kombinasi tiga elemen dari sebuah URL: skema protokol (misal `https`), nama domain/host (misal `example.com`), dan nomor port (misal `443`).
- **ORM (Object-Relational Mapping)**: Teknik pemrograman yang memetakan data antara sistem basis data relasional dan objek dalam bahasa pemrograman berorientasi objek (contoh: Prisma, Hibernate, Eloquent).
- **Overfetching**: Masalah pengambilan data API di mana klien mengunduh lebih banyak data daripada yang sebenarnya dibutuhkan oleh tampilan UI (masalah yang sering diatasi oleh GraphQL).

---

## P

- **Package Manager**: Alat bantu perangkat lunak yang mengotomatisasi proses instalasi, pembaruan, konfigurasi, dan penghapusan dependensi pustaka kode dalam proyek (contoh: npm, Yarn, pnpm).
- **Pagination**: Teknik membagi kumpulan data besar menjadi beberapa halaman atau segmen yang lebih kecil agar pemuatan data lebih cepat dan UI tidak kewalahan merender seluruh data sekaligus.
- **Partial Hydration**: Teknik optimasi perenderan di mana hanya komponen UI yang interaktif saja yang di-hidrasi dengan JavaScript di browser, sementara elemen statis lainnya dibiarkan sebagai HTML murni.
- **Partial Prerendering (PPR)**: Strategi perenderan mutakhir yang menggabungkan kerangka cangkang statis yang instan dengan komponen dinamis yang di-streaming secara paralel dalam satu rute halaman yang sama.
- **Password Hashing**: Proses transformasi kata sandi teks polos menjadi nilai hash matematis yang tidak dapat dibalik menggunakan algoritma satu arah yang aman sebelum disimpan di database.
- **Payment Gateway**: Layanan aplikasi e-commerce yang memproses, memverifikasi, dan mengamankan transaksi pembayaran kartu kredit atau metode digital lainnya antara pelanggan dan pedagang (*merchant*).
- **Performance API**: Kumpulan antarmuka bawaan di browser yang memungkinkan pengembang mengukur dan mengumpulkan metrik waktu kinerja halaman web secara akurat.
- **Performance Budget**: Batas batas metrik kinerja terukur yang ditetapkan oleh tim pengembangan (seperti ukuran file maksimal atau waktu LCP) yang tidak boleh dilanggar saat membangun fitur baru.
- **PHP**: Bahasa skrip sisi server (*server-side scripting*) open-source yang sangat populer, menjadi fondasi bagi platform web raksasa seperti WordPress dan framework Laravel.
- **Plugin**: Modul kode perangkat lunak tambahan yang mengintegrasikan fitur atau fungsionalitas baru ke dalam aplikasi atau sistem utama yang sudah ada tanpa mengubah kode intinya.
- **Polyfill**: Potongan kode JavaScript yang menyediakan fungsionalitas modern pada browser lama yang belum mendukung fitur tersebut secara bawaan.
- **Polymorphism**: Kemampuan dalam pemrograman berorientasi objek di mana objek dari berbagai kelas yang berbeda dapat merespons metode dengan nama yang sama dengan implementasi perilaku yang berbeda.
- **Polling**: Teknik pengambilan data di mana klien secara teratur dan berkala mengirimkan permintaan HTTP ke server untuk mengecek apakah ada data baru.
- **Port**: Nomor saluran komunikasi logis (antara 0 hingga 65535) yang digunakan oleh sistem operasi untuk mengarahkan lalu lintas data jaringan ke proses atau aplikasi server tertentu (contoh: port 80 untuk HTTP, 443 untuk HTTPS).
- **POST**: Metode permintaan HTTP yang digunakan untuk mengirimkan data ke server untuk membuat entitas sumber daya baru atau memproses tindakan tertentu.
- **PostCSS**: Alat pemroses stylesheet dengan plugin JavaScript yang digunakan untuk mentransformasikan gaya CSS (seperti menambahkan vendor prefix otomatis atau mengurai sintaks modern).
- **Postman**: Platform aplikasi populer untuk merancang, menguji, mendokumentasikan, dan mengotomatisasi pengujian endpoint API.
- **Prefetch**: Teknik mengunduh sumber daya (halaman, skrip, atau data) di latar belakang sebelum pengguna benar-benar menavigasi ke halaman tersebut, sehingga saat diklik halaman dapat muncul secara instan.
- **Preload**: Instruksi deklaratif kepada browser (`<link rel="preload">`) untuk mengunduh aset penting berprioritas tinggi secepat mungkin saat halaman mulai dimuat.
- **Pre-rendering**: Proses pembuatan dokumen HTML statis di awal (saat build time atau di server) sebelum dikirim ke browser pengguna untuk mempercepat tampilan awal dan membantu SEO.
- **Prettier**: Alat pemformat kode (*code formatter*) otomatis yang memastikan konsistensi gaya penulisan kode di seluruh file proyek sesuai aturan yang ditentukan.
- **Progressive Web App (PWA)**: Aplikasi web yang dibangun dengan kemampuan modern (seperti Service Worker dan Web App Manifest) sehingga dapat diinstal, berjalan luring (*offline*), dan memberikan pengalaman seperti aplikasi native.
- **Promise**: Objek dalam JavaScript yang merepresentasikan keberhasilan atau kegagalan dari suatu operasi asinkron yang nilainya akan tersedia di masa mendatang.
- **Proxy**: Server perantara yang bertindak atas nama klien untuk meneruskan permintaan ke server lain, sering digunakan untuk caching, anonimitas, atau keamanan.
- **Python**: Bahasa pemrograman tingkat tinggi yang serbaguna, terkenal dengan sintaksnya yang sangat bersih dan mudah dibaca, serta mendominasi bidang kecerdasan buatan, data science, dan web backend.
- **Prisma**: ORM generasi baru untuk Node.js dan TypeScript yang menyediakan skema deklaratif, migrasi otomatis, dan *type-safety* penuh dalam penulisan kueri database.
- **Pipeline**: Rangkaian tahapan otomatis yang memproses kode secara berurutan mulai dari kompilasi, pengujian, audit keamanan, hingga proses penyebaran (*deployment*).
- **Platform as a Service (PaaS)**: Layanan komputasi awan di mana penyedia menyediakan platform lengkap bagi pengembang untuk membangun, menjalankan, dan mengelola aplikasi tanpa perlu mengurus konfigurasi infrastruktur server di bawahnya (contoh: Heroku, Render).
- **Pub/Sub (Publish/Subscribe)**: Pola perpesanan asinkron di mana pengirim pesan (*publisher*) tidak mengirimkan pesan langsung ke penerima tertentu, melainkan mempublikasikannya ke sebuah topik yang didengarkan oleh penerima (*subscriber*).

---

## R

- **Race Condition**: Situasi *bug* konkurensi di mana hasil akhir dari suatu program bergantung pada urutan atau waktu eksekusi yang tidak dapat diprediksi dari beberapa thread atau operasi asinkron yang berjalan bersamaan.
- **Rate Limiting**: Kebijakan pembatasan frekuensi permintaan jaringan yang diizinkan dalam rentang waktu tertentu untuk melindungi server dari serangan dan beban berlebih.
- **React**: Pustaka JavaScript deklaratif berbasis komponen yang dikembangkan oleh Meta untuk membangun antarmuka pengguna interaktif yang dinamis dan efisien.
- **Redis**: Penyimpanan struktur data dalam memori (*in-memory*) open-source yang sangat cepat, sering dimanfaatkan sebagai database cache, manajemen sesi, dan *message broker*.
- **Redux**: Pustaka manajemen status (*state management*) yang dapat diprediksi untuk aplikasi JavaScript, memusatkan status aplikasi dalam satu *store* terpusat dengan aturan perubahan berbasis *action* dan *reducer*.
- **Refactoring**: Proses penataan dan restrukturisasi kode yang sudah ada tanpa mengubah perilaku eksternalnya, bertujuan untuk meningkatkan keterbacaan, mengurangi kompleksitas, dan mempermudah pemeliharaan.
- **Refresh Token**: Token berumur panjang khusus yang digunakan untuk meminta *access token* baru secara aman setelah *access token* yang lama kedaluwarsa tanpa memaksa pengguna login ulang.
- **Regular Expression (RegExp)**: Pola karakter khusus yang digunakan untuk mencocokkan, memvalidasi, mencari, dan memanipulasi teks dalam string secara fleksibel.
- **Relational Database**: Jenis basis data yang mengorganisasi data ke dalam baris dan kolom tabel yang saling terhubung melalui relasi kunci (*keys*), dikelola menggunakan bahasa SQL (contoh: PostgreSQL, MySQL).
- **Repository Pattern**: Pola desain arsitektur yang mengisolasi logika akses data dari lapisan logika bisnis aplikasi, bertindak sebagai mediator antara domain dan penyimpanan database.
- **Request**: Pesan yang dikirimkan oleh klien ke server yang berisi metode aksi, URL target, header, dan parameter atau data tubuh (*body*).
- **Response**: Pesan balasan yang dikirimkan oleh server kembali ke klien yang berisi kode status, header informasi, dan data muatan (*payload*) yang diminta.
- **REST API (Representational State Transfer API)**: Standar arsitektur antarmuka berbasis web yang menggunakan protokol stateless HTTP, metode standar (`GET`, `POST`, `PUT`, `DELETE`), dan format data standar (seperti JSON) untuk manipulasi sumber daya.
- **Responsive Design**: Pendekatan perancangan web yang membuat halaman dapat menyesuaikan tata letak dan tampilannya secara otomatis agar nyaman dilihat di berbagai ukuran layar dan perangkat.
- **Retry**: Mekanisme otomatisasi untuk mencoba kembali eksekusi suatu operasi jaringan yang gagal akibat gangguan sementara.
- **Reverse Proxy**: Server yang berada di depan server-server web internal yang bertugas menerima permintaan dari internet, lalu meneruskannya ke server internal yang sesuai untuk tujuan load balancing, keamanan, dan caching.
- **Routing**: Mekanisme penentuan bagaimana aplikasi atau server merespons permintaan klien ke endpoint URL tertentu berdasarkan jalurnya.
- **Rollback**: Proses pengembalian status sistem, database, atau versi rilis aplikasi ke keadaan stabil sebelumnya setelah terjadi kesalahan atau kegagalan pada rilis terbaru.
- **Ruby on Rails**: Framework aplikasi web full-stack berbasis bahasa Ruby yang menganut filosofi *Convention over Configuration* untuk mempercepat proses pengembangan.
- **Real User Monitoring (RUM)**: Pendekatan pemantauan performa web yang mengumpulkan data metrik langsung dari pengalaman nyata pengguna saat berinteraksi dengan website di dunia nyata.
- **Revalidation**: Proses pengecekan dan penyegaran data cache lama dengan data terbaru dari server untuk memastikan data yang ditampilkan tetap mutakhir.

---

## S

- **SAML (Security Assertion Markup Language)**: Standar terbuka berbasis XML untuk pertukaran data autentikasi dan otorisasi antara pihak penyedia identitas (*IdP*) dan penyedia layanan (*SP*).
- **SASS / SCSS**: Bahasa praprosesor CSS yang memperluas kemampuan CSS standar dengan fitur variabel, *nesting*, *mixins*, fungsi matematika, dan modularitas file.
- **Schema Validation**: Proses validasi struktur dan tipe data terhadap aturan skema formal yang telah didefinisikan untuk memastikan kebenaran data yang diterima.
- **Scope**: Ruang lingkup visibilitas dan aksesibilitas variabel, fungsi, atau objek dalam bagian tertentu dari kode program saat dieksekusi.
- **Search Engine Optimization (SEO)**: Kumpulan teknik dan praktik optimasi konten dan arsitektur website agar memiliki peringkat lebih tinggi dan visibilitas lebih baik di mesin pencari (seperti Google).
- **Secret Management**: Praktik dan alat keamanan khusus untuk menyimpan, mengelola, dan mengontrol akses ke informasi sensitif seperti kunci API, token, dan kata sandi database.
- **Security Headers**: Kumpulan header HTTP yang dikirimkan oleh server untuk memerintahkan browser mengaktifkan mekanisme perlindungan bawaan terhadap berbagai serangan web (seperti CSP, X-Frame-Options, HSTS).
- **Seed**: Skrip untuk mengisi database dengan sekumpulan data awal atau data tiruan (*dummy data*) yang diperlukan untuk pengujian atau pengaturan awal aplikasi.
- **Semantic HTML**: Penggunaan elemen HTML yang memiliki arti makna kontekstual yang jelas bagi peramban dan pembaca layar (seperti `<article>`, `<nav>`, `<header>`, `<footer>`), bukan hanya tag generik `<div>`.
- **Semantic Versioning (SemVer)**: Konvensi penomoran versi perangkat lunak berformat `MAJOR.MINOR.PATCH` untuk mengomunikasikan jenis perubahan yang dilakukan (apakah ada breaking changes, fitur baru, atau perbaikan bug).
- **Serialization**: Proses pengubahan struktur data atau objek dalam memori menjadi format string atau biner (seperti JSON string) agar dapat ditransmisikan melalui jaringan atau disimpan ke disk.
- **Server**: Komputer fisik atau mesin virtual berkinerja tinggi yang menyediakan data, sumber daya, atau layanan kepada komputer lain (*clients*) di dalam jaringan.
- **Server-Side Rendering (SSR)**: Metode perenderan aplikasi web di mana server menghasilkan dokumen HTML yang sudah terisi data lengkap secara dinamis pada setiap permintaan sebelum dikirimkan ke browser.
- **Service Worker**: Skrip JavaScript latar belakang yang berjalan terpisah dari halaman web utama di browser, bertindak sebagai proxy jaringan yang memungkinkan fitur offline caching, sinkronisasi latar belakang, dan notifikasi *push*.
- **Service Mesh**: Lapisan infrastruktur khusus yang mengelola dan mengamankan komunikasi antar-layanan pada arsitektur mikroservis (contoh: Istio, Linkerd).
- **Session**: Mekanisme penyimpanan informasi keadaan sementara pengguna di server selama pengguna berinteraksi dengan website dari proses login hingga logout.
- **Shadow DOM**: Standar web yang menyediakan pohon DOM terisolasi dan gaya CSS berkapsul rapi di dalam elemen komponen khusus tanpa bocor ke dokumen utama.
- **Sharding**: Metode pemartisian database yang memecah kumpulan data besar menjadi bagian-bagian lebih kecil (*shards*) yang didistribusikan ke beberapa server database terpisah.
- **Single Page Application (SPA)**: Aplikasi web yang hanya memuat satu dokumen HTML utama, kemudian memperbarui konten halaman secara dinamis lewat JavaScript tanpa perlu me-reload seluruh halaman saat berpindah menu.
- **Single Sign-On (SSO)**: Skema autentikasi yang memungkinkan pengguna mengakses banyak aplikasi atau sistem yang berbeda hanya dengan satu kali proses login menggunakan satu set kredensial.
- **Singleton**: Pola desain pembuatan objek yang memastikan bahwa sebuah kelas hanya memiliki satu instans global di seluruh jalannya aplikasi.
- **Sitemap**: Dokumen XML yang mencantumkan daftar seluruh URL halaman penting pada sebuah website untuk membantu peramban mesin pencari mengindeks konten secara efisien.
- **SQL (Structured Query Language)**: Bahasa standar untuk berinteraksi, mengelola, mencari, dan memanipulasi data dalam sistem manajemen basis data relasional (RDBMS).
- **SQL Injection (SQLi)**: Jenis serangan keamanan siber di mana penyerang menyisipkan perintah SQL berbahaya ke dalam input aplikasi untuk memanipulasi kueri database tanpa izin.
- **Static Site Generation (SSG)**: Metode pembuatan website di mana seluruh file HTML, CSS, dan aset halaman di-generate secara statis di awal pada saat proses *build time*, menghasilkan kecepatan muat yang sangat tinggi.
- **State Management**: Praktik dan arsitektur pengelolaan kondisi (*state*) data yang berubah di dalam aplikasi antarmuka agar tetap sinkron di seluruh komponen.
- **Status Code**: Kode angka 3-digit yang dikirimkan oleh server dalam respons HTTP untuk memberi tahu klien tentang hasil status pemrosesan permintaan (misal: 200, 404, 500).
- **Streaming**: Metode pengiriman data media atau respons HTTP secara terus-menerus dalam potongan-potongan data (*chunks*) sehingga klien dapat mulai memprosesnya tanpa menunggu seluruh file selesai diunduh.
- **Supabase**: Platform open-source alternatif Firebase yang menyediakan backend lengkap berbasis PostgreSQL dengan dukungan autentikasi, penyimpanan file, dan langganan data real-time.
- **Suspense**: Fitur di React yang memungkinkan komponen menampilkan UI pengganti sementara (*fallback/spinner*) saat komponen anak di dalamnya sedang menunggu data atau aset selesai dimuat secara asinkron.
- **SVG (Scalable Vector Graphics)**: Format gambar berbasis XML untuk grafis vektor dua dimensi yang tidak akan pecah atau kehilangan kualitas saat diperbesar ke resolusi layar berapa pun.
- **Swagger**: Kumpulan alat open-source berbasis spesifikasi OpenAPI untuk merancang, mendokumentasikan, dan menguji REST API secara interaktif.
- **System Design**: Proses pendefinisian arsitektur, modul, antarmuka, dan data untuk sebuah sistem perangkat lunak agar memenuhi kebutuhan fungsional dan non-fungsional (seperti skalabilitas, ketersediaan, dan keamanan).

---

## T

- **Tailwind CSS**: Framework CSS berbasis *utility-first* yang menyediakan kumpulan kelas utilitas siap pakai (seperti `flex`, `pt-4`, `text-center`) untuk membangun desain antarmuka kustom langsung pada markup HTML.
- **Task Queue**: Sistem antrean untuk mengelola dan mendistribusikan tugas-tugas pemrosesan berat di latar belakang agar tidak memblokir alur utama aplikasi server.
- **Template Engine**: Alat pemroses perangkat lunak yang menggabungkan template tampilan dengan data dinamis untuk menghasilkan dokumen HTML akhir (contoh: EJS, Blade, Jinja).
- **Test-Driven Development (TDD)**: Metodologi pengembangan perangkat lunak di mana pengembang menulis kasus uji otomatis (*test*) terlebih dahulu sebelum menulis kode fungsional yang diperlukan untuk meloloskan tes tersebut.
- **Testing Library**: Kumpulan utilitas pengujian yang mendorong praktik pengujian antarmuka dengan cara yang menyerupai bagaimana pengguna nyata berinteraksi dengan aplikasi web.
- **Thread**: Unit eksekusi terkecil dalam sebuah proses sistem operasi yang dapat dijadwalkan dan dijalankan secara independen oleh CPU.
- **Throttling**: Teknik pembatasan frekuensi eksekusi suatu fungsi sehingga fungsi tersebut hanya dapat dijalankan maksimal sekali dalam rentang interval waktu yang telah ditentukan (berguna untuk event yang sangat sering terpicu seperti *scroll* atau *resize*).
- **Time-to-First-Byte (TTFB)**: Metrik performa jaringan yang mengukur durasi waktu dari saat browser mengirimkan permintaan HTTP hingga byte respons pertama diterima dari server.
- **Timeout**: Batas waktu maksimal yang ditentukan untuk sebuah operasi jaringan atau fungsi sebelum operasi tersebut otomatis dihentikan dan dinyatakan gagal.
- **Token Authentication**: Metode keamanan di mana pengguna membuktikan identitasnya dengan menyertakan token kriptografi yang sah pada setiap permintaan ke server.
- **Transpiler**: Alat kompilator sumber-ke-sumber (*source-to-source compiler*) yang menerjemahkan kode dari satu bahasa atau versi sintaks ke bahasa/versi lain pada tingkat abstraksi yang sama (contoh: Babel mentranspilasi ES6+ ke ES5).
- **Tree Shaking**: Teknik optimasi *dead-code elimination* pada bundler JavaScript yang secara otomatis menghapus fungsi atau kode yang tidak pernah diimpor dan tidak digunakan dari bundel akhir.
- **Trigger**: Prosedur tersimpan di database yang dieksekusi secara otomatis setiap kali terjadi peristiwa data tertentu (seperti `INSERT`, `UPDATE`, atau `DELETE`) pada suatu tabel.
- **TLS (Transport Layer Security)**: Protokol kriptografi modern penerus SSL yang menyediakan privasi dan integritas data untuk komunikasi melalui jaringan komputer (seperti HTTPS).
- **TCP (Transmission Control Protocol)**: Protokol lapisan transport berorientasi koneksi yang menjamin pengiriman paket data secara andal, berurutan, dan bebas dari kesalahan antara dua perangkat jaringan.
- **TypeScript**: Bahasa pemrograman bertipe statis yang merupakan *superset* dari JavaScript yang dikembangkan oleh Microsoft, menambahkan tipe data eksplisit dan pemeriksaan kesalahan saat kompilasi.

---

## U

- **UI (User Interface)**: Ruang visual dan interaktif (tombol, formulir, menu, tipografi) tempat manusia berinteraksi secara langsung dengan aplikasi perangkat lunak atau website.
- **URL (Uniform Resource Locator)**: Format alamat standar yang digunakan untuk mengidentifikasi dan menemukan lokasi sumber daya unik tertentu di jaringan internet.
- **Unit Testing**: Pengujian otomatis yang memverifikasi kebenaran unit kode terkecil secara terisolasi (biasanya pada tingkat fungsi tunggal atau metode kelas).
- **Upstream**: Arah lalu lintas atau repositori sumber yang menjadi asal data atau kode; dalam jaringan, merujuk pada server asal (*origin server*) yang berada di belakang proxy atau load balancer.
- **User Experience (UX)**: Keseluruhan persepsi, kemudahan, efisiensi, dan kepuasan yang dirasakan pengguna saat berinteraksi dengan produk digital.
- **UUID (Universally Unique Identifier)**: Nilai pengenal unik standar 128-bit (berupa string heksadesimal 36 karakter) yang dijamin unik secara global tanpa memerlukan sistem koordinasi terpusat.
- **UTF-8**: Standar pengodean karakter variabel untuk Unicode yang dapat merepresentasikan seluruh karakter tulisan dari berbagai bahasa di dunia, menjadi format teks standar di web.
- **Unidirectional Data Flow**: Pola arsitektur di mana aliran data hanya bergerak dalam satu arah yang jelas (misalnya dari komponen induk ke anak melalui *props*, dan perubahan diteruskan melalui *event*), membuat alur aplikasi lebih mudah diprediksi.
- **Upsert**: Operasi kombinasi database yang secara cerdas memperbarui (*UPDATE*) baris data jika data tersebut sudah ada, atau memasukkan (*INSERT*) baris baru jika data tersebut belum ada.

---

## V

- **Validation**: *(Lihat Data Validation)* Proses pengujian keabsahan data terhadap aturan atau batasan yang telah ditetapkan.
- **Version Control**: Sistem perangkat lunak yang mencatat riwayat perubahan file dari waktu ke waktu sehingga versi tertentu dapat ditinjau atau dipulihkan kembali (contoh: Git).
- **Viewport**: Area tampilan layar yang terlihat oleh pengguna di browser tempat konten web ditampilkan.
- **Virtual DOM**: Representasi struktur DOM riil dalam bentuk objek memori ringan (digunakan oleh React/Vue) yang memungkinkan perbandingan cepat (*diffing*) agar pembaruan ke DOM asli dapat diminimalkan untuk performa maksimal.
- **Vite**: Alat bantu pengembangan (*build tool*) frontend modern yang sangat cepat, memanfaatkan fitur native ES Modules di browser saat pengembangan dan esbuild/Rollup untuk produksi.
- **Vercel**: Platform cloud untuk hosting aplikasi web frontend dan full-stack modern (pencipta Next.js) dengan fitur otomatisasi CI/CD, *edge network*, dan penyebaran instan.
- **Vue.js**: Framework JavaScript progresif berbasis komponen yang fleksibel dan mudah dipelajari untuk membangun antarmuka pengguna web yang reaktif.
- **VPS (Virtual Private Server)**: Lingkungan mesin virtual privat yang berjalan di atas server fisik bersama, memberikan pengguna akses kontrol penuh (*root access*) dan sumber daya komputasi yang terdedikasi.
- **VPN (Virtual Private Network)**: Layanan terenkripsi yang memperluas jaringan privat melintasi jaringan publik, memungkinkan pengguna mengirim dan menerima data secara anonim dan aman.
- **Vulnerability**: Celah, kelemahan, atau *bug* dalam sistem perangkat lunak yang dapat dieksploitasi oleh pihak jahat untuk mendapatkan akses ilegal atau merusak sistem.

---

## W

- **WebAssembly (Wasm)**: Format instruksi biner tingkat rendah portabel yang memungkinkan kode yang ditulis dalam bahasa berkinerja tinggi (seperti C++, Rust, Go) dieksekusi di browser dengan kecepatan mendekati kecepatan *native*.
- **WebAuthn (Web Authentication API)**: Standar web resmi dari W3C yang memungkinkan autentikasi berbasis kunci publik yang aman dan tanpa kata sandi (*passwordless*) menggunakan sensor biometrik atau kunci keamanan fisik (seperti passkeys).
- **Web Component**: Kumpulan standar teknologi web bawaan (Custom Elements, Shadow DOM, HTML Templates) yang memungkinkan pembuatan komponen UI modular yang dapat digunakan kembali di framework mana pun atau dengan JavaScript murni.
- **Webhook**: Mekanisme komunikasi otomatis berbasis peristiwa di mana sebuah aplikasi mengirimkan data payload HTTP POST secara real-time ke URL aplikasi lain segera setelah suatu peristiwa terjadi.
- **WebSocket**: Protokol komunikasi dua arah (*full-duplex*) berkesinambungan melalui satu koneksi TCP tunggal antara klien dan server, sangat ideal untuk aplikasi real-time seperti obrolan (*chat*) atau papan skor langsung.
- **WebRTC (Web Real-Time Communication)**: Teknologi open-source yang memungkinkan browser dan aplikasi seluler melakukan komunikasi audio, video, dan pertukaran data secara *peer-to-peer* (P2P) secara langsung tanpa perantara server media.
- **Web Vitals**: Inisiatif dari Google untuk menyediakan metrik panduan terpadu mengenai sinyal kualitas penting bagi pengalaman pengguna di web (seperti kecepatan memuat, interaktivitas, dan stabilitas visual).
- **Web Worker**: Fitur peramban yang memungkinkan skrip JavaScript dieksekusi di thread latar belakang terpisah dari thread UI utama, mencegah browser mengalami *freeze* saat melakukan kalkulasi berat.
- **Webpack**: Bundler modul statis untuk aplikasi JavaScript modern yang menganalisis grafik dependensi modul dan mengemas seluruh kode dan aset proyek menjadi satu atau beberapa bundel file optimal.
- **WordPress**: Sistem manajemen konten (CMS) open-source terpopuler di dunia yang menggerakkan puluhan persen website di internet, mendukung ribuan tema dan plugin.
- **WooCommerce**: Plugin e-commerce open-source untuk WordPress yang mengubah website menjadi toko online yang lengkap dan dapat disesuaikan.
- **WAI-ARIA**: *(Lihat ARIA)* Inisiatif Aksesibilitas Web untuk Aplikasi Internet yang Kaya dari W3C guna meningkatkan aksesibilitas konten web dinamis bagi pengguna penyandang disabilitas.
- **Web Application Firewall (WAF)**: Firewall tingkat aplikasi yang memantau, memfilter, dan memblokir lalu lintas HTTP/HTTPS berbahaya yang ditujukan ke aplikasi web untuk melindungi dari serangan seperti SQL injection dan XSS.

---

## X

- **XML (Extensible Markup Language)**: Bahasa markah berbasis teks fleksibel yang dirancang untuk menyimpan dan mentransmisikan data terstruktur dengan tag yang dapat ditentukan sendiri oleh pengguna.
- **XHR (XMLHttpRequest)**: Objek API JavaScript klasik yang digunakan untuk melakukan pertukaran data antara browser dan server di latar belakang tanpa me-refresh halaman (pendahulu dari Fetch API).
- **XSS (Cross-Site Scripting)**: Kerentanan keamanan web di mana penyerang berhasil menyuntikkan skrip berbahaya (biasanya JavaScript) ke dalam halaman web yang dilihat oleh pengguna lain.
- **X-Frame-Options**: Header keamanan respons HTTP yang mengontrol apakah peramban diizinkan untuk merender halaman di dalam tag `<frame>`, `<iframe>`, `<embed>`, atau `<object>` guna mencegah serangan *clickjacking*.
- **X-Forwarded-For (XFF)**: Header HTTP standar de-facto yang digunakan untuk mengidentifikasi alamat IP asal klien yang terhubung ke web server melalui proxy atau load balancer.
- **XPath (XML Path Language)**: Bahasa kueri untuk memilih dan menavigasi simpul (*nodes*) di dalam dokumen XML atau HTML.
- **XSLT (Extensible Stylesheet Language Transformations)**: Bahasa berbasis XML yang digunakan untuk mentransformasikan dokumen XML menjadi format dokumen lain (seperti HTML atau teks).

---

## Y

- **YAML (YAML Ain't Markup Language)**: Format serialisasi data berbasis teks yang berorientasi pada kemudahan keterbacaan manusia, sering digunakan untuk file konfigurasi perangkat lunak (seperti Docker Compose atau pipeline CI/CD).
- **Yarn**: Pengelola paket JavaScript modern yang dikembangkan oleh Meta sebagai alternatif npm yang cepat, andal, dan aman dengan manajemen dependensi terisolasi.

---

## Z

- **Zero Downtime Deployment**: Strategi penyebaran versi baru aplikasi di mana proses pembaruan berjalan mulus tanpa adanya waktu henti (*downtime*) atau gangguan layanan sama sekali bagi pengguna.
- **Zero Trust**: Model arsitektur keamanan siber yang menerapkan prinsip "jangan pernah percaya, selalu verifikasi", di mana setiap pengguna dan perangkat harus selalu diautentikasi dan diotorisasi secara ketat baik di dalam maupun di luar jaringan.
- **z-index**: Properti CSS yang mengatur urutan tumpukan (*stack order*) elemen yang diposisikan sepanjang sumbu-Z (elemen dengan nilai z-index lebih tinggi akan berada di atas elemen dengan nilai lebih rendah).
- **Zod**: Pustaka deklarasi dan validasi skema berbasis TypeScript yang mengutamakan *developer experience* dengan inferensi tipe data otomatis (*type inference*) saat runtime.

---

> _"Kamu tidak perlu hafal semua istilah ini sekaligus. Cukup kenali, dan kembalilah saat kamu benar benar membutuhkannya."_