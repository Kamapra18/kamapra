---
id: 6
title: "GoalFin - Mobile App"
slug: "goalfin"

category: "Application"
year: 2026
status: "Completed"

description: "Aplikasi mobile Android pengelolaan keuangan pribadi dengan pencatatan transaksi, target keuangan, dan dashboard interaktif. Proyek pertama saya membuat aplikasi mobile, dikerjakan untuk UAS mata kuliah Pemrograman Mobile."

coverImage: "/galeri/goalfin.png"

roles:
  - "Mobile Developer"
  - "Frontend Developer"

technologies:
  - "Expo"
  - "TypeScript"
  - "Supabase"
  - "PostgreSQL"

links:
  demo: "https://expo.dev/accounts/kamapra/projects/goalfin/builds/e4068660-50c2-4105-b4c2-5ff9bb509810"
  repository: "https://github.com/Kamapra18/goalfin"

featured: true
---

## Overview

Ini adalah proyek pertama saya dalam membuat aplikasi mobile, lebih tepatnya aplikasi Android. Sebelumnya saya terbiasa membangun website, jadi masuk ke dunia aplikasi mobile terasa seperti melangkah ke wilayah baru.

GoalFin adalah aplikasi pengelolaan keuangan pribadi yang dibangun dengan Expo dan TypeScript. Aplikasi ini membantu pengguna mencatat pemasukan dan pengeluaran harian, menentukan target keuangan, dan memantau kondisi keuangan lewat dashboard yang interaktif. Data pengguna disimpan di Supabase dengan database PostgreSQL.

## Latar Belakang

GoalFin lahir sebagai proyek UAS mata kuliah Pemrograman Mobile. Tugasnya adalah membuat sebuah aplikasi mobile yang utuh, dan aplikasi itulah yang menentukan kelulusan di mata kuliah tersebut. Artinya, proyek ini bukan sekadar latihan, tetapi harus benar-benar jadi dan bisa dijalankan.

Untuk temanya, saya memilih pengelolaan keuangan pribadi karena dekat dengan kehidupan sehari-hari. Banyak orang ingin lebih teratur soal uang, tetapi berhenti di tengah jalan karena pencatatannya terasa merepotkan. Dari situ muncul gagasan aplikasi yang membuat pencatatan terasa ringan: cepat dicatat, otomatis dirapikan, dan hasilnya langsung terlihat dalam bentuk grafik. Pengguna juga tidak hanya mencatat, tetapi punya tujuan yang bisa dikejar, misalnya menabung untuk membeli sesuatu.

## Tujuan

- Menyelesaikan proyek UAS Pemrograman Mobile dengan aplikasi yang utuh dan berfungsi
- Memudahkan pengguna mencatat pemasukan dan pengeluaran harian
- Merapikan transaksi lewat kategorisasi otomatis
- Membantu pengguna menetapkan dan memantau target keuangan
- Menyajikan ringkasan kondisi keuangan lewat grafik dan statistik
- Menyimpan data pengguna dengan aman
- Belajar membangun aplikasi mobile Android dari nol

## Peran Saya

Saya membangun GoalFin dari sisi aplikasi mobile menggunakan Expo dan TypeScript, termasuk menyusun tampilan, mengelola alur data, dan menghubungkan aplikasi dengan Supabase sebagai layanan backend, autentikasi, dan penyimpanan data.

## Fitur Utama

### Pencatatan pemasukan dan pengeluaran

Fitur inti aplikasi ini. Pengguna dapat mencatat transaksi harian, baik pemasukan maupun pengeluaran, dengan alur yang dibuat sesederhana mungkin agar pencatatan tidak terasa membebani.

### Kategorisasi transaksi otomatis

Transaksi dikelompokkan ke dalam kategori secara otomatis. Dengan begitu, pengguna tidak perlu memilah satu per satu dan bisa langsung melihat ke mana uangnya paling banyak digunakan.

### Goals keuangan

Pengguna bisa membuat target keuangan, lalu memantau progresnya secara real-time. Fitur ini mengubah aplikasi dari sekadar buku catatan menjadi alat untuk mencapai tujuan, karena setiap kemajuan terlihat jelas.

### Dashboard interaktif

Dashboard menampilkan grafik dan statistik yang merangkum kondisi keuangan pengguna. Angka yang tadinya tersebar di banyak transaksi jadi mudah dibaca dalam sekali lihat.

### Autentikasi dan keamanan data

Data pengguna disimpan di Supabase dengan database PostgreSQL, dilengkapi sistem autentikasi yang terenkripsi. Untuk aplikasi keuangan, keamanan data adalah hal yang tidak bisa ditawar, sehingga bagian ini mendapat perhatian khusus.

## Proses Desain

Saya mulai dari pertanyaan sederhana: apa yang paling dibutuhkan pengguna saat membuka aplikasi keuangan? Jawabannya: mencatat transaksi dengan cepat, melihat ringkasan, dan tahu progres target mereka. Alur aplikasi lalu disusun mengikuti urutan itu, agar pengguna bisa mencapai fitur utama dengan langkah yang sedikit.

Karena aplikasi dipakai di layar kecil, tampilan dibuat bersih dan fokus. Hierarki informasi, ukuran teks, dan penataan grafik diperhatikan agar data keuangan yang padat tetap terbaca dengan nyaman.

![Tampilan GoalFin](/galeri/goalfin.png)

## Pengembangan

### Expo dan TypeScript

Expo dipilih karena mempercepat pengembangan aplikasi mobile berbasis React Native, mulai dari menjalankan aplikasi di perangkat sampai membuat build. TypeScript membantu menjaga kode tetap aman dan terstruktur, terutama untuk data keuangan yang tipenya perlu konsisten, seperti nominal, kategori, dan tanggal.

### Supabase dan PostgreSQL

Supabase dipakai sebagai backend, mencakup database PostgreSQL, penyimpanan data pengguna, dan autentikasi. PostgreSQL cocok untuk data transaksi yang terstruktur, dan Supabase membuat integrasinya dengan aplikasi mobile jauh lebih praktis tanpa harus membangun server dari nol.

### Build lewat expo.dev

Aplikasi dibuat dalam bentuk build lewat expo.dev, sehingga bisa dicoba langsung di perangkat Android tanpa harus menjalankan proyek dari kode sumber. Tautan build tersedia di bagian demo, dan kode proyek bisa dilihat di GitHub.

## Tantangan dan Pelajaran

Bagian paling menantang dari proyek ini justru bukan membuat fiturnya, tetapi proses build ke expo.dev. Di awal, saya cukup kesulitan karena ada beberapa bug yang tidak terlihat dan baru ketahuan ketika proses build berjalan. Aplikasi yang terasa baik-baik saja saat dikembangkan ternyata menyimpan masalah yang harus dibereskan satu per satu sebelum build bisa berhasil.

Pengalaman ini cukup menguras kesabaran, tetapi juga sangat berharga. Saya belajar menelusuri pesan error, membaca log build dengan teliti, dan memahami bahwa aplikasi yang berjalan di tahap pengembangan belum tentu siap dirilis. Karena ini proyek pertama saya di dunia aplikasi mobile, setiap masalah menjadi pelajaran baru.

Dari proyek ini saya belajar beberapa hal:

- Bug yang tidak terlihat bisa baru muncul saat proses build, jadi build sebaiknya dicoba lebih awal, bukan di akhir
- Membaca log dan pesan error dengan teliti adalah kemampuan yang sangat menentukan
- Aplikasi keuangan harus mudah dipakai setiap hari, kalau terlalu rumit pengguna akan berhenti mencatat
- TypeScript sangat membantu menjaga konsistensi data yang sensitif seperti nominal uang
- Supabase mempercepat pengembangan backend, terutama untuk autentikasi dan database
- Memikirkan keamanan data sejak awal lebih baik daripada menambahkannya belakangan

## Hasil

GoalFin berhasil diselesaikan sebagai proyek UAS Pemrograman Mobile dan menjadi aplikasi Android pertama yang saya bangun. Aplikasi ini memiliki pencatatan transaksi, kategorisasi otomatis, goals keuangan dengan pelacakan progres, serta dashboard interaktif. Aplikasi bisa dicoba lewat build expo.dev, dan kode sumbernya tersedia di https://github.com/Kamapra18/goalfin.

Bagi saya, proyek ini adalah langkah penting dari dunia web ke aplikasi mobile. Selain menghasilkan aplikasi yang utuh, saya juga belajar bahwa menyelesaikan sebuah aplikasi berarti menyelesaikan seluruh perjalanannya, termasuk bagian build yang sering tidak terlihat.
