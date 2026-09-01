---
title: "Dasar Kecerdasan Buatan (AI)"
type: "belajar"
category: "Artificial Intelligence"
level: "Pemula"
coverImage: "/posts/dasar-ai.jpeg"
date: "2026-07-20"
---

### 1. Apa Itu AI dan Sejarah Singkatnya

AI (Artificial Intelligence) adalah teknologi yang memberikan kemampuan berpikir dan belajar kepada komputer, sehingga dapat menyelesaikan tugas secara otomatis dengan sedikit atau tanpa campur tangan manusia. Pendekatannya adalah meniru kecerdasan manusia menggunakan algoritma yang dipengaruhi data.

AI bukan teknologi baru. Perkembangannya dimulai sejak 1950 ketika John McCarthy, Marvin Minsky, dan para ilmuwan MIT mulai mengembangkan program komputer yang bisa meniru kemampuan manusia. Konferensi Dartmouth 1956 (DSRPAI) menjadi tonggak AI sebagai bidang ilmu mandiri.

## Istilah Dasar yang Perlu Diketahui

- **Artificial Intelligence (AI)**, teknologi yang meniru perilaku cerdas manusia pada komputer agar bisa belajar dan mengambil keputusan.
- **Algoritma**, sekumpulan instruksi atau langkah langkah yang diikuti komputer untuk menyelesaikan suatu masalah.
- **Model**, hasil akhir dari proses pelatihan ML yang bisa digunakan untuk melakukan prediksi atau klasifikasi data baru.
- **Data**, kumpulan fakta mentah yang menjadi bahan utama untuk melatih sistem AI.
- **Inferensi**, proses menggunakan model yang sudah dilatih untuk membuat prediksi terhadap data baru.

## Kenapa AI Penting Dipahami Sejak Awal

Sebelum masuk ke bagian teknis, penting memahami gambaran besarnya dulu. AI bukan sekedar program pintar, tapi hasil dari banyak komponen yang bekerja sama, mulai dari data yang dikumpulkan, cara data itu diolah, sampai cara model yang terbentuk digunakan untuk mengambil keputusan.

Kalau dianalogikan, AI itu seperti seorang ahli yang belajar dari pengalaman. Semakin banyak pengalaman (data) yang ia punya, semakin baik kemampuannya dalam menyelesaikan masalah baru yang belum pernah ia temui sebelumnya.

**Referensi:**

- [Artificial intelligence – Wikipedia](https://en.wikipedia.org/wiki/Artificial_intelligence)

---

### 2. Taksonomi AI

Pengertian AI sangat luas dan mencakup banyak kelompok keilmuan di dalamnya. Penting untuk memahami hierarki ini supaya tidak bingung saat menemukan istilah istilah seperti Machine Learning atau Deep Learning.

## Empat Tingkatan Utama

Dari yang paling umum ke paling spesifik:

- **Artificial Intelligence (AI)**, payung besar yang mencakup semua teknologi yang meniru kecerdasan manusia.
- **Machine Learning (ML)**, cabang AI yang menggunakan metode statistika agar komputer bisa belajar dari data tanpa diprogram secara eksplisit.
- **Deep Learning**, bagian dari ML yang didasari jaringan saraf tiruan dengan banyak lapisan, mampu memproses data kompleks seperti gambar dan suara.
- **Generative AI**, bagian dari Deep Learning yang bisa menghasilkan konten baru berdasarkan input pengguna, seperti teks, gambar, kode, atau audio.

## Hubungan Antar Tingkatan

Setiap tingkatan adalah subset dari tingkatan di atasnya. Semua Machine Learning adalah AI, tapi tidak semua AI adalah Machine Learning. Begitu juga Deep Learning adalah bagian dari ML, dan Generative AI adalah bagian dari Deep Learning.

Contoh nyata di masing masing tingkatan: spam filter adalah AI, sistem rekomendasi Netflix adalah ML, pengenalan wajah di smartphone adalah Deep Learning, dan ChatGPT atau DALL-E adalah Generative AI.

**Referensi:**

- [Machine learning – Wikipedia](https://en.wikipedia.org/wiki/Machine_learning)

---

### 3. Penerapan AI di Dunia Nyata

AI sudah hadir di hampir semua bidang industri, dari kesehatan, keuangan, transportasi, sampai hiburan. Dua contoh paling sering ditemui dalam kehidupan sehari hari adalah smart speaker dan kendaraan otonom.

## Smart Speaker

Smart speaker adalah perangkat yang diaktifkan menggunakan suara dan mampu merespons perintah verbal. Misalnya saat kita mengucapkan "berikan cuaca hari ini", perangkat langsung merespons. Proses di baliknya terdiri dari empat tahap:

1. Deteksi kata pemicu seperti "Ok, Google!" yang menghasilkan nilai benar atau salah.
2. Pengenalan suara untuk menangkap perintah, lalu dipetakan menjadi teks.
3. Interpretasi maksud perintah menggunakan algoritma yang sudah dilatih sebelumnya.
4. Eksekusi perintah, misalnya mengembalikan audio berisi informasi cuaca.

## Self-driving Car

Kendaraan otonom seperti Tesla menerima input dari berbagai sensor, termasuk kamera dan radar laser. Data dari sensor tersebut digunakan untuk mendeteksi posisi kendaraan lain dan pejalan kaki, lalu merancang pergerakan secara otomatis agar bisa menghindari tabrakan tanpa bantuan pengemudi.

Kedua contoh ini punya pola yang sama: ada input (suara atau sensor), ada pemrosesan menggunakan model AI, dan ada output berupa aksi atau respons yang relevan.

**Referensi:**

- [Self-driving car – Wikipedia](https://en.wikipedia.org/wiki/Self-driving_car)

---

### 4. AI Workflow

Sebelum sebuah model AI bisa digunakan, ada serangkaian proses yang harus dilalui. Memahami alur ini penting supaya punya gambaran utuh, bukan cuma bagian tengahnya saja.

## Lima Tahapan Utama

Pengembangan AI secara umum mengikuti lima tahapan yang berurutan:

- **Digitalise & Collect**, pengumpulan dan digitalisasi data dari berbagai sumber seperti database, sensor, atau file. Tahap ini sangat menentukan karena data yang dikumpulkan akan menjadi dasar pelatihan model.
- **Transform**, pembersihan dan perubahan format data agar siap digunakan, termasuk menghapus data yang tidak relevan atau memperbaiki data yang rusak.
- **Train**, pemilihan dan penerapan algoritma yang paling sesuai dengan data yang dimiliki untuk menghasilkan model yang optimal.
- **Execute**, model yang sudah dilatih dijalankan untuk melakukan tugasnya, sekaligus terus dievaluasi akurasinya.
- **Provide Insights & Make Decisions**, ekstraksi pengetahuan dari model untuk mendukung pengambilan keputusan dan menjadi acuan pengembangan AI selanjutnya.

## Catatan Penting

Proses ini bersifat iteratif, bisa berulang kapan saja jika ada tahapan sebelumnya yang perlu diperbaiki. Tidak ada algoritma yang cocok secara universal untuk semua data dan tujuan, jadi eksperimen dan evaluasi adalah bagian normal dari proses ini.

**Referensi:**

- [Machine learning pipeline – Wikipedia](<https://en.wikipedia.org/wiki/Pipeline_(machine_learning)>)

---

### 5. Apa Itu Data dan Tipe-Tipenya

Data adalah fondasi dari semua sistem AI. Kualitas dan jumlah data yang baik langsung memengaruhi seberapa baik model yang dihasilkan.

## Tiga Istilah yang Sering Tertukar

- **Data**, entri tunggal atau informasi individual, misalnya satu baris data pelanggan.
- **Dataset**, kumpulan data yang disusun secara terstruktur untuk tujuan tertentu seperti pelatihan ML atau analisis statistik.
- **Basis Data**, kumpulan banyak dataset yang diorganisir agar mudah diakses dan dikelola. Dataset adalah bagian yang diambil dari basis data.

## Tipe Data Terstruktur

Data terstruktur memiliki format dan tata letak yang tetap sehingga mudah dibaca dan diproses.

**Data Kuantitatif** adalah data yang bisa diukur dalam bentuk angka:

- **Kontinu**, nilai numerik apa pun termasuk desimal. Contoh: suhu 24,5 derajat, tinggi badan 170,3 cm.
- **Diskrit**, hanya bilangan bulat, tidak bisa dipecah ke unit lebih kecil. Contoh: stok produk 12 unit, jumlah pelanggan 500 orang.

**Data Kategorikal** adalah data yang dikelompokkan berdasarkan label atau nama:

- **Ordinal**, memiliki urutan atau peringkat yang bermakna. Contoh: rating bintang 1 sampai 5, tingkat kepuasan rendah, sedang, tinggi.
- **Nominal**, tidak memiliki urutan, hanya sebagai pembeda. Contoh: jenis kelamin, warna produk, nama kota.

## Tipe Data Tidak Terstruktur

Data yang tidak memiliki format atau struktur yang jelas. Lebih kompleks dan bervariasi, tapi justru mayoritas data di dunia nyata masuk kategori ini. Contoh: gambar, video, rekaman audio, teks bebas, dan data sensor.

**Referensi:**

- [Data (information) – Wikipedia](<https://en.wikipedia.org/wiki/Data_(information)>)

---

### 6. Kualitas Data: Prinsip GIGO

Setelah tahu apa itu data, penting juga memahami kenapa kualitas data sangat krusial dalam pengembangan AI.

## Garbage In, Garbage Out

GIGO adalah prinsip yang menyatakan bahwa output suatu sistem tidak akan lebih baik dari inputnya. Kalau data yang dimasukkan buruk, tidak relevan, atau keliru, model AI yang dihasilkan pun tidak akan sesuai harapan, tidak peduli seberapa canggih algoritmanya.

## Masalah Umum dalam Data

Ada beberapa masalah yang paling sering ditemui saat bekerja dengan data nyata:

- Data tidak relevan, tidak sesuai dengan tujuan yang ingin dicapai.
- Data outlier, nilainya jauh berbeda dari data lainnya dan bisa menyesatkan model.
- Data duplikat, data yang sama muncul lebih dari sekali dan bisa membuat model bias.
- Data kosong (missing value), bisa ditangani dengan menghapus baris tersebut atau mengisinya dengan nilai rata-rata atau median jika datanya numerik.
- Data tidak benar, salah catat atau berasal dari sumber yang tidak bisa dipercaya.

Memahami masalah ini penting karena sebagian besar waktu pengerjaan proyek AI di dunia nyata justru dihabiskan untuk membersihkan dan menyiapkan data, bukan untuk melatih modelnya.

**Referensi:**

- [Garbage in, garbage out – Wikipedia](https://en.wikipedia.org/wiki/Garbage_in,_garbage_out)

---

### 7. Machine Learning: Pemrograman Tradisional vs ML

Machine Learning (ML) adalah cabang AI yang memberikan komputer kemampuan belajar tanpa diprogram secara eksplisit. Untuk memahami apa yang membuatnya berbeda, perlu dibandingkan dulu dengan pendekatan pemrograman tradisional.

## Perbedaan Paradigma

Pada pemrograman tradisional, programmer secara eksplisit menuliskan semua aturan dalam bentuk kode. Data dan aturan dimasukkan sebagai input, dan solusi dihasilkan sebagai output.

Bayangkan kita ingin mengklasifikasikan pelanggan berdasarkan satu parameter seperti umur, cukup satu kondisi sederhana. Tapi saat parameternya bertambah jadi lima, sepuluh, atau seratus, jumlah kondisi yang harus ditulis berkembang sangat besar dan menjadi tidak efisien untuk dikelola.

Machine Learning membalik paradigma ini. Data dan label (solusi yang sudah diketahui) dimasukkan sebagai input, dan komputer secara otomatis menghasilkan aturan sendiri sebagai output. Aturan inilah yang kemudian digunakan untuk memprediksi data baru yang belum pernah dilihat sebelumnya.

## Kapan ML Lebih Cocok

ML bukan solusi untuk semua masalah. ML paling efektif digunakan ketika:

- Pola dalam data terlalu kompleks untuk dirumuskan secara manual.
- Ada data dalam jumlah besar yang tersedia untuk pelatihan.
- Aturan yang dibutuhkan terlalu banyak dan sering berubah seiring waktu.

**Referensi:**

- [Machine learning – Wikipedia](https://en.wikipedia.org/wiki/Machine_learning)

---

### 8. Tipe-Tipe Machine Learning

ML dibagi menjadi beberapa kategori berdasarkan jenis data dan cara model belajar. Tiga kategori yang paling sering digunakan adalah supervised learning, unsupervised learning, dan reinforcement learning.

## Supervised Learning

Model dilatih menggunakan data yang sudah memiliki label atau jawaban yang benar. Model belajar mengenali karakteristik tiap kelas, lalu memprediksi label untuk data baru yang belum pernah dilihat sebelumnya.

Bayangkan kita punya kumpulan foto apel dan stroberi beserta labelnya. Setelah model mempelajari karakteristik kedua buah tersebut, ia bisa mengklasifikasikan foto buah baru yang belum pernah dilihat sebelumnya. Supervised learning paling banyak dipakai di industri karena mudah dipahami dan akurasinya mudah diukur.

## Unsupervised Learning

Data yang digunakan tidak memiliki label. Model belajar sendiri untuk menemukan pola, kesamaan, dan perbedaan dalam dataset, lalu mengelompokkan data berdasarkan karakteristik yang serupa.

Bayangkan sekumpulan sayuran tercampur tanpa nama. Model akan secara mandiri mengelompokkannya berdasarkan warna, bentuk, atau ukuran tanpa diberitahu kategorinya terlebih dahulu. Cocok untuk segmentasi pelanggan, analisis eksplorasi data, dan pengenalan pola.

## Reinforcement Learning

Sebuah agen belajar membuat keputusan terbaik melalui proses coba dan salah. Agen melakukan aksi di lingkungannya, lalu menerima hadiah atau penalti berdasarkan hasil aksi tersebut. Tujuannya adalah memaksimalkan total hadiah dari waktu ke waktu.

Bayangkan seorang mahasiswa baru yang belum tahu peraturan kelasnya. Saat menggunakan HP di kelas ia dapat penalti, saat aktif berdiskusi ia dapat poin tambahan. Ia terus memperbarui kebijakannya sampai menemukan perilaku yang paling menguntungkan. Pendekatan ini banyak dipakai untuk melatih agen dalam permainan, robot, atau sistem rekomendasi real-time.

**Referensi:**

- [Reinforcement learning – Wikipedia](https://en.wikipedia.org/wiki/Reinforcement_learning)

---

### 9. Machine Learning Workflow

Proses pengembangan ML bersifat iteratif, artinya bisa berulang kapan saja jika ada tahap sebelumnya yang perlu diperbaiki. Ada lima tahapan yang umumnya dilalui.

## Lima Tahapan ML

- **Pengumpulan Data**, mengambil dataset dari berbagai sumber. Data yang terkumpul masih mentah dan belum siap langsung digunakan.
- **Data Preprocessing**, pembersihan dan transformasi data agar siap digunakan. Mencakup penanganan missing value, data duplikat, scaling, normalisasi, dan penggabungan dataset dari berbagai sumber.
- **Model Development**, pemilihan algoritma dan pengaturan hyperparameter yang paling sesuai dengan data. Tidak ada algoritma yang cocok secara universal.
- **Model Evaluation**, menilai performa model pada data uji yang belum pernah dilihat model sebelumnya. Model yang baik bukan hanya bekerja baik di data latih, tapi juga di data baru.
- **Model Deployment**, menyimpan dan menjalankan model di platform nyata seperti web, mobile, atau IoT, sehingga bisa digunakan untuk prediksi di dunia nyata.

## Model Maintenance

Setelah model di-deploy, performanya akan menurun seiring waktu karena data di dunia nyata terus berubah. Ada dua pendekatan untuk menjaganya tetap relevan:

- **Manual Retraining**, melatih ulang model dari awal dengan data lama ditambah data baru. Lebih banyak effort, tapi memungkinkan penemuan pendekatan yang lebih baik.
- **Continuous Learning**, sistem terotomasi yang secara berkala mengumpulkan data baru, menguji akurasi model, dan melatih ulang jika performanya turun. Lebih efisien untuk data yang berubah cepat.

**Referensi:**

- [Machine learning pipeline – Wikipedia](<https://en.wikipedia.org/wiki/Pipeline_(machine_learning)>)

---

### 10. Deep Learning dan Jaringan Saraf Tiruan

Deep Learning adalah bagian dari ML yang cara kerjanya terinspirasi dari otak manusia. Kemampuannya memproses data kompleks seperti gambar, suara, dan teks membuatnya menjadi fondasi banyak teknologi AI modern.

## Artificial Neural Network (ANN)

ANN atau Jaringan Saraf Tiruan adalah model ML yang terinspirasi dari neuron biologis di otak manusia. Komponen dasarnya adalah perceptron, yang ditemukan Frank Rosenblatt pada 1957.

Setiap perceptron menerima input berupa angka, mengalikannya dengan bobot yang merepresentasikan seberapa penting input tersebut, menjumlahkan semuanya bersama bias, lalu melewatkannya ke fungsi aktivasi untuk menghasilkan output. Fungsi aktivasi inilah yang memungkinkan jaringan saraf mengenali pola non-linier yang mayoritas ada di data dunia nyata.

## Struktur Layer

Deep Learning terdiri dari tiga jenis layer utama:

- **Input Layer**, menerima dan meratakan data masukan menjadi format yang bisa diproses. Misalnya gambar 28x28 piksel diratakan menjadi array 784 elemen.
- **Hidden Layer**, memproses data di antara input dan output. Semakin banyak hidden layer, semakin kompleks pola yang bisa dipelajari.
- **Output Layer**, menghasilkan prediksi akhir. Menggunakan fungsi aktivasi Sigmoid untuk dua kelas, atau Softmax untuk tiga kelas atau lebih.

**Referensi:**

- [Deep learning – Wikipedia](https://en.wikipedia.org/wiki/Deep_learning)

---

### 11. Penerapan Deep Learning di Industri

Deep Learning sudah diimplementasikan di banyak bidang. Dua yang paling representatif adalah pengolahan citra dan pengolahan teks.

## Computer Vision

Computer vision memungkinkan komputer mendapatkan informasi dari gambar dan video, meniru sistem penglihatan manusia. Pendekatannya menggunakan Convolutional Neural Network (CNN) yang belajar mengklasifikasikan gambar dari banyak data berlabel.

Sebelum pendekatan ini ada, klasifikasi gambar memerlukan tim ahli yang mendefinisikan setiap fitur secara manual, misalnya bentuk paruh burung atau pola bulu sayapnya. Prosesnya panjang dan tidak skalabel. Deep Learning membalik pendekatan ini: cukup berikan banyak contoh gambar berlabel, dan model akan menemukan pola sendiri.

Contoh penerapan di bidang kesehatan: COVID-Net mencapai akurasi 90% dalam mendeteksi COVID-19 dari foto rontgen dada. Gauss Surgical menggunakan computer vision untuk memonitor kehilangan darah secara real-time selama operasi.

## Natural Language Processing (NLP)

NLP adalah subbidang AI untuk memproses, memahami, dan menghasilkan bahasa manusia. Memungkinkan komputer memahami bahasa sehari-hari, bukan hanya bahasa pemrograman formal.

Saat kita bertanya ke asisten digital "Apa jadwalku hari ini?" dan mendapat jawaban yang relevan, NLP yang bekerja di baliknya untuk memahami konteks pertanyaan tersebut. Contoh penerapan lainnya: mesin pencari, analisis sentimen media sosial, chatbot layanan pelanggan, dan terjemahan bahasa otomatis.

**Referensi:**

- [Computer vision – Wikipedia](https://en.wikipedia.org/wiki/Computer_vision)
- [Natural language processing – Wikipedia](https://en.wikipedia.org/wiki/Natural_language_processing)

---

### 12. Deployment Model: Format dan Perangkat Keras

Setelah model dilatih, perlu diekspor dalam format yang sesuai dengan platform target dan dijalankan menggunakan perangkat keras yang tepat.

## Format Deployment

- **TensorFlow.js**, untuk deployment di web browser. Inferensi terjadi di sisi klien tanpa perlu server, memanfaatkan WebGL untuk akselerasi hardware. Cocok untuk aplikasi web interaktif yang butuh respons cepat tanpa ketergantungan koneksi internet.
- **TensorFlow Lite**, untuk deployment di perangkat mobile dan IoT. Tidak memerlukan koneksi internet untuk inferensi, menjaga privasi pengguna, dan memiliki latency serta konsumsi daya yang lebih rendah. Contoh penggunaan nyata: Traveloka OCR untuk pengenalan KTP otomatis, dan Google Translate Instant Camera untuk menerjemahkan teks melalui foto.

## Pilihan Perangkat Keras

- **CPU**, cocok untuk model ML sederhana yang tidak melibatkan jaringan saraf, seperti decision tree atau k-means clustering.
- **GPU**, ideal untuk pelatihan jaringan saraf besar yang memerlukan komputasi intensif dan paralel. GPU bisa memproses banyak operasi matematika sekaligus.
- **TPU**, dirancang khusus oleh Google untuk mempercepat komputasi ML, terutama untuk model deep learning skala besar di cloud.

Pemilihan perangkat keras menjadi penting terutama saat deploy ke layanan cloud computing, karena spesifikasi yang dipilih langsung memengaruhi biaya operasional.

**Referensi:**

- [TensorFlow Lite – TensorFlow Docs](https://www.tensorflow.org/lite)
- [TensorFlow.js – TensorFlow Docs](https://www.tensorflow.org/js)

---

### Rangkuman

- AI adalah teknologi yang meniru kecerdasan manusia agar komputer bisa belajar dan mengambil keputusan secara otomatis.
- Taksonomi AI berjenjang dari AI, Machine Learning, Deep Learning, sampai Generative AI, masing masing adalah subset dari yang di atasnya.
- Smart speaker dan kendaraan otonom adalah dua contoh penerapan AI yang paling sering ditemui sehari hari.
- AI workflow terdiri dari lima tahap: collect, transform, train, execute, dan provide insights, dan bersifat iteratif.
- Data adalah fondasi AI. Dibedakan menjadi data terstruktur (kuantitatif dan kategorikal) dan tidak terstruktur (gambar, suara, teks bebas).
- Prinsip GIGO menyatakan bahwa data yang buruk akan selalu menghasilkan model yang buruk, tidak peduli seberapa canggih algoritmanya.
- ML membalik paradigma pemrograman tradisional: bukan programmer yang menulis aturan, tapi komputer yang menemukan aturannya sendiri dari data.
- Tiga tipe ML utama: supervised learning (data berlabel), unsupervised learning (tanpa label), dan reinforcement learning (belajar dari hadiah dan penalti).
- ML workflow mencakup pengumpulan data, preprocessing, pengembangan model, evaluasi, dan deployment, dilanjutkan dengan maintenance berkala.
- Deep Learning menggunakan jaringan saraf tiruan berlapis untuk memproses data kompleks seperti gambar dan teks.
- Computer vision dan NLP adalah dua penerapan deep learning yang paling banyak ditemui di industri saat ini.
- Pilihan format deployment (TensorFlow.js atau TF-Lite) dan perangkat keras (CPU, GPU, TPU) menentukan performa dan biaya operasional model di dunia nyata.

> _"AI terlihat seperti sihir kalau dilihat dari luar, tapi jadi masuk akal begitu dipahami satu lapisan demi satu lapisan."_
