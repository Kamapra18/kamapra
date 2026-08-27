---
title: "Belajar Dasar Dasar Website"
type: "belajar"
category: "Web Development"
level: "Pemula"
coverImage: "/posts/web-basic.jpeg"
date: "2025-07-20"
---

### 1. Apa Itu Website dan Konsep Dasarnya

Website adalah kumpulan halaman digital yang saling terhubung, bisa diakses lewat internet menggunakan browser seperti Chrome, Safari, atau Firefox. Satu website biasanya berisi banyak halaman, dan tiap halaman punya alamatnya sendiri yang disebut URL. Website bisa dimiliki oleh siapa saja, mulai dari individu yang bikin blog pribadi, perusahaan yang bikin company profile, sampai institusi pemerintah yang bikin portal layanan publik.

## Istilah Dasar yang Perlu Diketahui

Ada beberapa istilah yang sering tertukar tapi sebenarnya punya arti berbeda.

- **Halaman web (webpage)**, satu dokumen tunggal yang bisa diakses lewat satu URL, misalnya halaman "Tentang Kami" atau halaman "Kontak".
- **Website**, kumpulan dari beberapa halaman web yang saling terhubung dan biasanya berada di bawah satu domain yang sama.
- **URL (Uniform Resource Locator)**, alamat unik yang menunjukkan lokasi suatu halaman di internet, biasanya berbentuk seperti `https://contohsitus.com/tentang-kami`.
- **Browser**, aplikasi yang digunakan untuk mengakses dan menampilkan halaman website, seperti Chrome, Firefox, Safari, atau Edge.
- **Web server**, komputer yang bertugas menyimpan file website dan mengirimkannya setiap kali ada permintaan dari browser.

## Kenapa Website Penting Dipahami Sejak Awal

Sebelum masuk ke bagian teknis yang lebih dalam, penting untuk paham dulu gambaran besarnya. Website bukan sekadar tampilan visual di layar, tapi hasil dari banyak komponen yang bekerja sama, mulai dari tempat file disimpan, cara file itu dikirim, sampai cara browser menampilkannya jadi sesuatu yang bisa dibaca dan digunakan manusia.

Kalau dianalogikan, website itu seperti sebuah gedung, dan tiap halaman di dalamnya seperti ruangan ruangan yang ada di gedung itu. URL adalah alamat yang menunjukkan ruangan mana yang sedang dituju, sementara browser adalah kendaraan yang dipakai untuk sampai ke sana. Gedungnya sendiri (server) berdiri di atas tanah (hosting) yang disewa, dan punya alamat resmi (domain) supaya orang lain bisa menemukannya.

**Referensi:**

- [Learn web development – MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn_web_development)

### 2. Jenis Jenis Website

Secara umum, website bisa dibedakan berdasarkan bagaimana kontennya ditampilkan dan diperbarui. Memahami perbedaan ini penting supaya bisa menentukan pendekatan yang tepat saat mau membangun website sendiri nantinya.

## Website Statis

Website statis menampilkan konten yang sama untuk semua pengunjung. Kontennya tidak berubah secara otomatis, kecuali developer secara manual mengubah kodenya dan mengunggah ulang filenya ke server. Website jenis ini cocok untuk halaman profil sederhana, landing page, atau portofolio yang isinya jarang berubah.

Kelebihan website statis, prosesnya lebih cepat dimuat karena server tidak perlu memproses data tambahan, cukup mengirim file yang sudah jadi. Kekurangannya, kalau kontennya perlu sering diperbarui, harus selalu diedit manual lewat kode.

## Website Dinamis

Website dinamis menampilkan konten yang bisa berubah tergantung interaksi pengguna atau data yang tersimpan di server, misalnya halaman marketplace yang menampilkan produk berbeda beda tergantung pencarian pengguna, atau halaman media sosial yang isinya berubah setiap kali ada postingan baru.

Website dinamis biasanya terhubung ke database, sehingga konten yang ditampilkan bisa diambil dan diperbarui secara otomatis tanpa perlu mengedit kode setiap kali ada perubahan data.

## Single Page dan Multi Page

Selain statis dan dinamis, website juga bisa dibedakan dari jumlah halaman yang dimuat penuh oleh browser.

Single Page Application (SPA) memuat satu halaman utama saja, lalu kontennya berubah secara dinamis lewat JavaScript tanpa perlu reload penuh setiap kali pengguna berpindah bagian. Contoh penerapannya banyak dipakai di aplikasi web modern yang terasa cepat dan responsif seperti aplikasi chat berbasis web.

Multi Page Application (MPA) memuat halaman baru sepenuhnya setiap kali pengguna berpindah bagian, jadi tiap halaman punya URL sendiri dan dimuat ulang dari server. Pendekatan ini masih banyak dipakai, terutama untuk website yang mengutamakan SEO dan kesederhanaan struktur.

**Referensi:**

- [Learn web development – MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn_web_development)

### 3. Cara Kerja Website

Untuk memahami cara kerja website, penting untuk mengenal konsep client dan server, serta bagaimana keduanya saling berkomunikasi setiap kali sebuah halaman diminta.

## Konsep Client-Server

Client adalah perangkat yang digunakan pengguna untuk mengakses website, misalnya laptop atau HP lewat aplikasi browser. Server adalah komputer lain, biasanya berada di pusat data yang menyimpan file website dan bertugas mengirimkan file tersebut ketika diminta oleh client.

Client dan server ini bisa berada di lokasi geografis yang jauh berbeda. Client bisa saja berada di Indonesia, sementara server tempat file website disimpan berada di negara lain, tapi karena internet menghubungkan keduanya, proses pengiriman data tetap bisa berlangsung dalam hitungan detik atau bahkan lebih cepat.

## Proses Request dan Response

Setiap kali mengetik alamat website di browser, sebenarnya terjadi rangkaian proses berikut secara sangat cepat:

1. Browser mengubah domain yang diketik menjadi alamat IP lewat sistem DNS.
2. Browser mengirim permintaan (request) ke server yang beralamat di IP tersebut, menanyakan halaman yang dituju.
3. Server memproses permintaan tersebut, mencari file atau data yang diminta.
4. Server mengirimkan kembali (response) berupa file halaman yang diminta, biasanya berupa file HTML, CSS, dan JavaScript.
5. Browser menerima file tersebut, memprosesnya, lalu menampilkannya sebagai halaman website yang utuh.

Analoginya mirip seperti memesan makanan di restoran. Pengunjung (client) memesan menu ke pelayan, pesanan diteruskan ke dapur (server), dapur memasak sesuai pesanan, lalu makanan yang sudah jadi dikirim kembali ke meja pengunjung. Proses ini terjadi berulang kali setiap kali pengunjung berpindah halaman atau melakukan aksi tertentu di website.

**Referensi:**

- [How does the Internet work? – MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

### 4. Browser dan Rendering

Setelah file dari server sampai di browser, ada proses lagi sebelum halaman benar benar terlihat oleh pengguna, proses ini disebut rendering.

## Apa Itu Rendering

Rendering adalah proses browser menerjemahkan kode (HTML, CSS, JavaScript) menjadi tampilan visual yang bisa dilihat dan digunakan. Tanpa proses ini, yang diterima browser hanya berupa teks kode mentah, bukan tampilan yang rapi seperti yang biasa kita lihat sehari hari.

## Gambaran Prosesnya

Secara garis besar, browser akan membaca struktur halaman dari HTML terlebih dahulu, membentuk sesuatu yang disebut DOM (Document Object Model), semacam representasi struktur halaman dalam bentuk yang bisa diproses lebih lanjut. Setelah itu, browser menerapkan gaya tampilan dari CSS ke struktur tersebut, menentukan warna, ukuran, dan posisi tiap elemen. Terakhir, browser menjalankan JavaScript yang menambahkan interaktivitas, seperti tombol yang bisa diklik, animasi, atau perubahan tampilan berdasarkan aksi pengguna.

## Rendering di Sisi Server dan Client

Selain proses rendering standar di browser, ada juga pendekatan lain, yaitu server-side rendering dan static rendering. Server-side rendering berarti server yang menyiapkan tampilan HTML terlebih dahulu sebelum dikirim ke browser, sehingga halaman bisa langsung terlihat lebih cepat. Static rendering berarti halaman HTML sudah disiapkan sejak proses build, jauh sebelum ada permintaan dari pengguna, sehingga waktu muatnya bisa lebih cepat dan konsisten.

Ketiga proses ini terjadi sangat cepat sehingga pengguna hanya melihat hasil akhirnya, halaman yang sudah tersusun rapi dan bisa langsung digunakan.

**Referensi:**

- [Rendering on the Web – web.dev](https://web.dev/articles/rendering-on-the-web)

### 5. Domain dan Hosting

Dua istilah ini sering muncul bersamaan, tapi punya fungsi yang berbeda satu sama lain.

## Domain

Domain adalah nama alamat website yang mudah diingat manusia, misalnya contohsitus.com. Tanpa domain, pengguna harus mengetik alamat IP server yang berupa rangkaian angka seperti 192.168.2.10, yang jelas jauh lebih sulit diingat dibanding nama biasa.

Domain didaftarkan lewat penyedia layanan bernama registrar, dan biasanya perlu diperpanjang tiap periode tertentu, umumnya setiap tahun. Domain terdiri dari beberapa bagian, misalnya di "contohsitus.com", bagian ".com" disebut top-level domain, sementara "contohsitus" disebut second-level domain.

## Hosting

Hosting adalah layanan penyimpanan tempat semua file website disimpan, mulai dari kode program, gambar, sampai database. Hosting inilah yang menjalankan server yang merespons permintaan dari browser pengguna setiap kali ada yang mengakses website.

Ada berbagai jenis hosting, mulai dari shared hosting yang lebih murah karena berbagi sumber daya server dengan website lain, sampai dedicated hosting atau cloud hosting yang lebih fleksibel dan biasanya dipakai untuk website dengan trafik besar.

Kalau domain diibaratkan alamat rumah, hosting adalah rumah itu sendiri, tempat semua isi website benar benar disimpan. Alamat saja tidak cukup kalau rumahnya tidak ada, begitu juga domain tidak akan berfungsi tanpa hosting yang menyimpan filenya.

**Referensi:**

- [What is a domain name? – Cloudflare Learning Center](https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name/)

### 6. HTTPS dan Keamanan Dasar

Saat mengakses website, biasanya ada tanda gembok kecil di sebelah alamat URL di browser. Tanda ini berkaitan dengan keamanan koneksi antara pengguna dan server.

## Apa Itu HTTPS

HTTPS adalah versi aman dari HTTP, protokol yang digunakan untuk mengirim data antara browser dan server. Perbedaan utamanya, HTTPS mengenkripsi data yang dikirim menggunakan protokol bernama TLS (dulu disebut SSL), sehingga lebih sulit disadap atau dimanipulasi pihak lain saat proses pengiriman berlangsung.

## Cara Kerjanya Secara Sederhana

Saat browser terhubung ke website yang menggunakan HTTPS, terjadi proses yang disebut handshake, semacam negosiasi awal antara browser dan server untuk menyepakati kunci enkripsi yang akan dipakai selama sesi komunikasi berlangsung. Setelah handshake selesai, semua data yang dikirim dan diterima selama sesi itu akan terenkripsi.

## Kenapa Ini Penting

Tanpa HTTPS, data yang dikirim antara pengguna dan server, misalnya saat login atau mengisi form pembayaran, berisiko lebih besar untuk diintip atau diubah oleh pihak yang tidak berkepentingan saat data itu masih dalam perjalanan. Karena itu, sebagian besar browser modern sekarang menandai website tanpa HTTPS sebagai "Tidak Aman", dan mesin pencari juga cenderung memprioritaskan website yang sudah menggunakan HTTPS.

**Referensi:**

- [What is SSL? – Cloudflare Learning Center](https://www.cloudflare.com/learning/ssl/what-is-ssl/)
- [What is HTTPS? – Cloudflare Learning Center](https://cloudflare.com/learning/security/glossary/what-is-https)

### 7. Front-End Development

Front-end adalah bagian website yang langsung berinteraksi dengan pengguna, semua yang terlihat dan bisa disentuh atau diklik di layar.

## Tiga Elemen Utama

Front-end secara garis besar dibangun dari tiga elemen yang saling melengkapi:

- **HTML (HyperText Markup Language)**, digunakan untuk menyusun struktur konten, seperti judul, paragraf, gambar, tombol, dan elemen elemen lain yang membentuk kerangka halaman.
- **CSS (Cascading Style Sheets)**, digunakan untuk mengatur tampilan visual, seperti warna, tata letak, jarak antar elemen, dan bagaimana tampilan menyesuaikan diri di berbagai ukuran layar.
- **JavaScript**, digunakan untuk menambahkan interaktivitas, seperti tombol yang bisa diklik, animasi saat scroll, validasi form, sampai pengambilan data dari server tanpa perlu memuat ulang halaman.

## Kenapa Ketiganya Perlu Dipelajari Bareng

Ketiga elemen ini biasanya tidak berdiri sendiri, tapi saling melengkapi dalam satu halaman yang sama. HTML memberi struktur, CSS memberi tampilan, dan JavaScript memberi perilaku. Kalau salah satu dihilangkan, pengalaman pengguna di halaman itu akan terasa timpang, entah jadi terlihat berantakan tanpa CSS, atau terasa kaku tanpa interaktivitas dari JavaScript.

Kalau dianalogikan ke sebuah rumah, HTML adalah kerangka bangunannya, CSS adalah cat dan dekorasinya, sementara JavaScript adalah bagian yang membuat pintu bisa dibuka otomatis atau lampu bisa dinyalakan lewat sensor.

**Referensi:**

- [Learn web development – MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn_web_development)

### 8. Back-End Development

Kalau front-end berurusan dengan tampilan, back-end berurusan dengan logika dan data di balik layar, bagian yang tidak terlihat langsung oleh pengguna tapi menentukan bagaimana website benar benar bekerja.

## Apa yang Dikerjakan di Back-End

Back-end bertanggung jawab menangani berbagai proses penting, seperti autentikasi pengguna (memastikan siapa yang sedang login), pengolahan data, validasi input, komunikasi dengan database, sampai memastikan permintaan dari front-end diproses dengan benar sebelum hasilnya dikirim kembali ke browser.

## Server dan Database

Server adalah komputer yang menjalankan program back-end, memproses permintaan yang masuk, lalu mengirim balik hasilnya. Database adalah tempat data website disimpan secara terstruktur, misalnya data pengguna, produk, transaksi, atau komentar. Front-end biasanya tidak berkomunikasi langsung dengan database, melainkan lewat perantara back-end yang menjaga supaya akses ke data tetap aman dan terkontrol.

Pemisahan tanggung jawab ini penting, karena kalau front-end bisa langsung mengakses database tanpa perantara, risiko keamanan dan potensi kesalahan data akan jauh lebih besar.

**Referensi:**

- [Learn web development – MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn_web_development)

### 9. Bahasa Pemrograman dan Framework

Setelah memahami peran front-end dan back-end secara konsep, penting juga mengenal alat konkret yang benar benar dipakai untuk membangunnya.

## Bahasa Pemrograman

Bahasa pemrograman adalah bahasa yang digunakan untuk menulis instruksi bagi komputer. Di sisi front-end, bahasa utamanya JavaScript, karena satu satunya bahasa yang bisa dijalankan langsung oleh browser untuk keperluan interaktivitas. Di sisi back-end, ada banyak pilihan bahasa, misalnya PHP, Python, atau JavaScript juga (dijalankan lewat lingkungan bernama Node.js), masing masing punya kelebihan dan komunitasnya sendiri.

## Framework

Framework adalah kerangka kerja yang dibangun di atas bahasa pemrograman, berisi kumpulan alat, aturan, dan struktur siap pakai supaya developer tidak perlu menulis semuanya dari nol setiap kali membuat fitur baru. Di sisi front-end, contohnya React atau Vue, yang mempermudah pengelolaan tampilan dan interaktivitas kompleks. Di sisi back-end, contohnya Laravel (berbasis PHP), Django (berbasis Python), atau Express (berbasis Node.js), yang mempermudah pengelolaan routing, database, dan logika aplikasi.

Framework bisa dianalogikan seperti cetakan kue, bahasa pemrograman adalah adonannya, sementara framework memberi bentuk dan struktur supaya prosesnya lebih cepat dan konsisten dibanding membuat cetakan sendiri dari nol setiap kali mau bikin kue baru.

**Referensi:**

- [Learn web development – MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn_web_development)

### 10. API, Penghubung Front-End dan Back-End

Front-end dan back-end perlu cara untuk saling berkomunikasi dengan aturan yang jelas dan konsisten, di sinilah API berperan.

## Apa Itu API

API, singkatan dari Application Programming Interface, adalah perantara yang memungkinkan dua sistem berbeda saling bertukar data dengan aturan tertentu. Front-end mengirim permintaan lewat API, back-end memprosesnya, lalu mengembalikan data yang dibutuhkan lewat API yang sama.

## Analogi Sederhana

API bisa dianalogikan seperti pelayan restoran. Pengunjung (front-end) tidak perlu masuk ke dapur (back-end) untuk memesan makanan, cukup memberi tahu pelayan (API) apa yang diinginkan, lalu pelayan yang menyampaikan pesanan itu ke dapur dan membawa hasilnya kembali.

## Kenapa Dibutuhkan

Tanpa API, front-end dan back-end tidak punya cara standar untuk saling mengerti satu sama lain. API menyediakan format komunikasi yang konsisten, biasanya berupa data terstruktur seperti JSON, sehingga front-end tidak perlu tahu detail teknis bagaimana data diproses di server, cukup tahu cara memintanya lewat API dan format data apa yang akan diterima sebagai balasannya.

**Referensi:**

- [API – Glossary, MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/API)

### 11. CMS (Content Management System)

Tidak semua website dibangun dengan menulis kode dari nol. Sebagian besar website di internet justru dibangun menggunakan CMS.

## Apa Itu CMS

CMS adalah sistem yang memungkinkan seseorang mengelola konten website tanpa harus menulis kode, cukup lewat dashboard yang sudah disediakan. Contoh CMS yang paling populer adalah WordPress, yang banyak dipakai untuk membangun berbagai jenis website, dari blog pribadi, company profile, sampai toko online.

## Kelebihan dan Batasannya

CMS mempercepat proses pembuatan website karena banyak fitur dasar sudah tersedia, tinggal disesuaikan lewat pilihan tema dan plugin tambahan. Seseorang tanpa latar belakang coding sekalipun bisa membuat website yang layak pakai hanya dengan CMS.

Tapi untuk kebutuhan yang sangat spesifik, unik, atau kompleks, developer tetap perlu masuk ke bagian kode untuk melakukan penyesuaian lebih lanjut, karena fitur bawaan CMS tidak selalu bisa mengakomodasi semua kebutuhan khusus sebuah bisnis atau project.

**Referensi:**

- [WordPress.org](https://wordpress.org)

### 12. Tools yang Dibutuhkan buat Mulai

Sebelum mulai belajar praktik langsung, ada beberapa alat dasar yang perlu disiapkan supaya proses belajarnya lebih lancar.

## Text Editor

Text editor digunakan untuk menulis kode. Salah satu yang paling umum dipakai saat ini adalah Visual Studio Code, karena gratis, ringan, dan punya banyak ekstensi pendukung yang bisa disesuaikan dengan kebutuhan, mulai dari auto-complete, integrasi Git, sampai live preview.

## Browser Developer Tools

Hampir semua browser modern punya fitur developer tools bawaan, berguna untuk memeriksa struktur halaman, men-debug error, melihat request yang dikirim ke server, dan melihat bagaimana kode dijalankan langsung di browser secara real-time.

## Version Control (Git)

Git adalah sistem yang digunakan untuk melacak perubahan kode dari waktu ke waktu, sangat berguna terutama saat bekerja dalam tim, supaya perubahan dari banyak orang bisa digabungkan dengan rapi tanpa saling menimpa pekerjaan orang lain. Git juga memungkinkan developer untuk kembali ke versi kode sebelumnya kalau ada kesalahan yang perlu diperbaiki.

**Referensi:**

- [Visual Studio Code Docs](https://code.visualstudio.com/docs)
- [Git Documentation](https://git-scm.com/doc)

### Rangkuman

- Website adalah kumpulan halaman digital yang saling terhubung, diakses lewat browser menggunakan URL.
- Website bisa dibedakan jadi statis atau dinamis, dan single page atau multi page.
- Website bekerja lewat proses request dari client dan response dari server, dibantu sistem DNS untuk menerjemahkan domain jadi alamat IP.
- Browser menerjemahkan kode jadi tampilan lewat proses rendering, bisa terjadi di sisi client, server, atau lewat static rendering.
- Domain adalah alamat website yang mudah diingat, hosting adalah tempat file website benar benar disimpan.
- HTTPS melindungi data yang dikirim antara pengguna dan server lewat proses enkripsi.
- Front-end menangani tampilan lewat HTML, CSS, dan JavaScript, back-end menangani logika dan data lewat server dan database.
- Bahasa pemrograman adalah alat dasar menulis instruksi, framework mempercepat proses lewat struktur siap pakai.
- API jadi penghubung komunikasi yang konsisten antara front-end dan back-end.
- CMS memungkinkan pembuatan website tanpa menulis kode dari nol, dengan WordPress sebagai contoh paling populer.
- Tools dasar yang perlu disiapkan meliputi text editor, browser developer tools, dan Git untuk version control.

> _"Website itu rumit kalau dilihat sekaligus, tapi jadi masuk akal begitu dipecah bagian per bagian."_
