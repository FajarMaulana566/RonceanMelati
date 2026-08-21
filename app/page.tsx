const layanan = [
  ["01", "/images/SatuSetRoncean.jpg" , "Roncean Pengantin", "Ronce rambut, kalung, gelang, dan pelengkap busana untuk hari istimewa.", "Sesuai adat & model"],
  ["02", "/images/SigerSunda.jpg" ,"Siger Sunda", "Aksen melati segar untuk lamaran, akad, siraman, wisuda, dan acara keluarga.", "Ukuran dapat disesuaikan"],
  ["03", "/images/BajuPengantin.jpg" , "Pesanan Khusus", "Kirim referensimu. Kami akan membantu menentukan model yang sesuai kebutuhan.", "Konsultasi model tersedia"],
];

const langkah = [
  ["Ceritakan momenmu", "Sampaikan tanggal acara, jenis kebutuhan, dan jumlah pesanan."],
  ["Pilih model roncean", "Kirim referensi atau konsultasikan bentuk yang paling sesuai."],
  ["Konfirmasi pesanan", "Detail harga dan waktu pengerjaan diberikan sebelum produksi."],
];

const pricelist = [
  { nama: 'Penganten Anak Rasul', harga: ' Mulai Rp 700.000 - Rp 1.500.000' },
  { nama: 'Penganten Sunat', harga: ' Mulai Rp 600.000' },
  { nama: 'Siger Sunda', harga: ' Mulai Rp 300.000' },
  { nama: 'Air Terjun', harga: ' Mulai Rp 700.000' },
  { nama: 'Jawa Dan Sanggul Garuda', harga: ' Mulai Rp 600.000' },
  { nama: 'Kebaya Melati 1 Pasang', harga: ' Mulai Rp 3.500.000' },
  { nama: 'Roncean Custom', harga: ' Harga menyesuaikan' }
];

function Melati({
  kecil = false,
  className = "",
  }: {
  kecil?: boolean;
  className?: string;
  }) {
    return (
      <span className={`melati ${kecil ? "kecil" : ""} ${className}`}>
        <img
          src="/images/logo.jpg"
          alt="Logo Handayani Melati Roncean"
        />
      </span>
    );
}

export default function Home() {
  return <main>
    <nav className="nav">
      <a className="merek" href="#beranda" aria-label="Handayani Melati Roncean"><Melati className="logo-header"/><span><strong>Handayani</strong><small>Melati Roncean</small></span></a>
      <div className="navlink"><a href="#layanan">Layanan</a><a href="#tentang">Tentang</a><a href="#pesan">Cara Pesan</a></div>
      <a
    className="navcta"
    href="https://wa.me/6283862672514"
    target="_blank"
    rel="noreferrer"
  >
    Hubungi Kami
</a>
    </nav>

    <section className="hero" id="beranda">
      <div className="herocopy">
        <p className="eyebrow"><span/>Roncean melati dari Desa Gesik</p>
        <h1>Merangkai melati untuk <em>momen berkesan.</em></h1>
        <p className="lead">Roncean bunga melati yang dibuat dengan teliti untuk pernikahan, lamaran, acara adat, dan berbagai kebutuhan spesialmu.</p>
        <div className="actions"><a className="button utama" href="#layanan">Lihat Pilihan</a><a className="textlink" href="#pesan">Cara memesan ↗</a></div>
        <div className="trust"><div><strong>Segar</strong><span>Melati pilihan</span></div><div><strong>Rapi</strong><span>Dironce teliti</span></div><div><strong>Fleksibel</strong><span>Sesuai kebutuhan</span></div></div>
      </div>
      <div className="herovisual">
        <img src="/images/handayani-hero.png" alt="Roncean bunga melati tertata di atas nampan anyaman"/>
        <span className="bingkai"/>
        <div className="lokasi"><img className="melati" src="/images/logo.jpg" alt="Logo Handayani Melati Roncean"/><span><small>Dibuat langsung di</small><strong>Blok Kembang</strong></span></div>
      </div>
      <a className="jelajah" href="#layanan"><span>↓</span>Jelajahi</a>
    </section>

    <section className="layanan" id="layanan">
      <div className="heading"><div><p className="eyebrow"><span/>Pilihan roncean</p><h2>Dirangkai untuk setiap cerita.</h2></div><p>Kami menerima pesanan berdasarkan model, ukuran, dan kebutuhan acara. Tunjukkan referensimu, lalu kami bantu menyesuaikannya.</p></div>
      <div className="cards">
        {layanan.map(([no, gambar, judul, deskripsi, catatan], i) => <article className="card" key={judul}>
          <div className={`cardimg potong${i + 1}`}><img src={gambar} alt=""/><span>{no}</span></div>
          <div className="cardbody"><h3>{judul}</h3><p>{deskripsi}</p><small><i/>{catatan}</small></div>
        </article>)}
      </div>
      <div className="harga">
  <h3>Daftar Estimasi Harga</h3>
  
  <div className="harga-list">
    {pricelist.map((item, index) => (
      <div className="harga-item" key={index}>
        <div className="harga-header">
          <strong>{item.nama}</strong>
          <span className="nominal">{item.harga}</span>
        </div>
      </div>
      ))}
    </div>

    <p className="catatan">
      *Harga akhir menyesuaikan model, jumlah bunga, ukuran, dan tingkat kerumitan roncean.
    </p>
  
    <a href="#kontak" className="btn-kontak">Tanyakan estimasi →</a>
    </div>
  </section>

    <section className="tentang" id="tentang">
      <div className="seni"><div><Melati/></div><p>Desa Gesik<br/><strong>Blok Kembang</strong></p></div>
      <div className="cerita"><p className="eyebrow terang"><span/>Tentang kami</p><h2>Tradisi yang dijaga lewat setiap rangkaian.</h2><p>Handayani Melati Roncean merupakan UMKM dari Desa Gesik, Blok Kembang. Setiap roncean dibuat secara manual dengan perhatian pada kerapian, kesegaran, dan kesesuaian model untuk momen pelanggan.</p><blockquote>“Satu per satu bunga dirangkai agar tampil indah saat momen penting tiba.”</blockquote><a className="button putih" href="#kontak">Kenali & Hubungi Kami</a></div>
    </section>

    <section className="carapesan" id="pesan">
      <div className="intro"><p className="eyebrow"><span/>Cara memesan</p><h2>Tiga langkah sederhana.</h2><p>Hubungi kami lebih awal agar jadwal pengerjaan dapat disiapkan dengan baik.</p></div>
      <ol>{langkah.map(([judul, deskripsi], i) => <li key={judul}><span>0{i+1}</span><div><h3>{judul}</h3><p>{deskripsi}</p></div></li>)}</ol>
    </section>

    <section className="kontak" id="kontak">
      <Melati/><p className="eyebrow tengah"><span/>Pesan untuk momenmu</p><h2>Punya model roncean yang kamu inginkan?</h2><p>Kirim referensimu dan ceritakan kebutuhan acara. Kami siap membantu menyiapkan rangkaian yang sesuai.</p>
      <div className="kontakaksi"><a
   className="segera"
    href="https://wa.me/6283862672514"
    target="_blank"
    rel="noreferrer"
  >
  WhatsApp
  <small>0838-6267-2514</small>
</a>
  
  <a href="https://www.tiktok.com/@yesihandayani78" target="_blank" rel="noreferrer">TikTok<small>@yesihandayani78</small></a><a href="https://www.facebook.com/search/top?q=Handayani%20Melati%20Roncean" target="_blank" rel="noreferrer">Facebook<small>Handayani Melati Roncean</small></a></div>
      <small className="alamat">Melayani dari Desa Gesik, Blok Kembang</small>
    </section>

<section className="lokasi-usaha" id="lokasi">
  <div className="lokasi-info">
    <p className="eyebrow">Lokasi Kami</p>

    <h2>Datang dan lihat langsung proses roncean melati</h2>

    <p className="alamat-lengkap">
      Desa Gesik, Blok Kembang, Kecamatan Tengah Tani<br />
      Kabupaten Cirebon, Jawa Barat
    </p>

    <a
      className="tombol-maps"
      href="https://www.google.com/maps/search/?api=1&query=Desa+Gesik+Blok+Kembang+Cirebon"
      target="_blank"
      rel="noreferrer"
    >
      Buka di Google Maps
    </a>
  </div>

  <div className="map-wrapper">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.65262612981317!2d108.51903484746134!3d-6.71578995019873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee1a8099fa27b%3A0x707cb8433c445fbf!2sHANDAYANI%20RUNCE%20MELATI!5e0!3m2!1sid!2sid!4v1786374154106!5m2!1sid!2sid"
      title="Lokasi Handayani Runce Melati"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  </div>
</section>

    <footer><a className="merek" href="#beranda"><Melati className="logo-footer"/><span><strong>Handayani</strong><small>Melati Roncean</small></span></a><p>Roncean bunga melati untuk berbagai momen dan kebutuhan.</p>
  <div className="footer-menu">
    <a href="#layanan">Layanan</a>
    <a href="#cara-pesan">Cara Pesan</a>
    <a href="#kontak">Kontak</a>
  </div>

    <small className="footer-copy">
      © 2026 Handayani Melati Roncean X KKN 02 Politeknik LP3I Cirebon.
    </small>
    </footer>
  </main>;
}
