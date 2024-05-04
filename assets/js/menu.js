// Array untuk menyimpan data destinasi
const destinasi ={
  "alam" : [
      { imageUrl: "https://lh3.googleusercontent.com/p/AF1QipNoO_1prFxo5Xn4OdjNMvReMgBZrw_gwzFdjND7=s1360-w1360-h1020
", content: "Limpakuwus", info:'limpakuwus',lokasi:'Baturaden' ,tempat:'alam'},
      { imageUrl: "http://localhost/uts/assets/images/alam/caub/caub.webp" ,  content:"Menara Pandang Caub Baturraden", info:'caub',lokasi:'Baturaden' ,tempat:'alam' },
      { imageUrl: "http://localhost/uts/assets/images/alam/melung/melung1.jpg" ,  content:"Melung Bauraden",info:'melung', lokasi:'Baturaden',tempat:'alam' }
        
],
  "taman" : [
    { imageUrl: "http://localhost/uts/assets/images/taman/botani/botani2.jpg" ,  content:"Taman Botani Baturaden", info:'botani',lokasi:'Baturaden',tempat:'taman' },
    { imageUrl: "http://localhost/uts/assets/images/taman/andang/an1.jpg" ,  content:"Taman Andang Pangrenan Purwokerto", info:'andang',lokasi:'Purwokero',tempat:'taman' },
    { imageUrl: "http://localhost/uts/assets/images/taman/kebunraya/kbr1.jpg" ,  content:"Kebunraya", info:'kebunraya',lokasi:'Baturaden',tempat:'taman' },
    { imageUrl: "http://localhost/uts/assets/images/taman/maskemambang/ms1.jpg" ,  content:"Maaskemambang", info:'maskemambang',lokasi:'Purwokerto',tempat:'taman' },
    { imageUrl: "http://localhost/uts/assets/images/taman/nsw/nsw1.jpg" ,  content:"New Small Word", info:'nsw' ,lokasi:'Purwokero',tempat:'taman' },

    
  ],
  "museum" : []
}

// Fungsi untuk menampilkan destinasi berdasarkan kategori
function tampilkan(category) {
  var isi = document.getElementById('isikonten');
  var subs = document.getElementById('subkonten');
  subs.innerHTML='';
  isi.innerHTML = '';
   // Mengosongkan isi kontainer sebelum menambahkan data baru
  destinasi[category].forEach(element => { // Akses array destinasi[category]
      var kolom = document.createElement('div');
      kolom.className = 'swiper-slide '; // Menambahkan kelas kolom
      kolom.innerHTML = `
      <div class="swiper-slide">
        <!-- Gambar -->
        <img src="${element.imageUrl}" alt="${element.content}" />
        <!-- Teks -->
        <div class="text-overlay">
          <div class="title">${element.content}</div>
          <div class="subtitle">${element.lokasi}</div>
          <div class="text">
            <p>
              
            </p>
          </div>
          <a href="./assets/${element.tempat}/${element.info}.html" class="btn btn-secondary btn-sm">Informasi</a>
          <button type="button" class="btn btn-secondary btn-sm" onclick="tampilkanSub('${element.info}')">Lihat Lebih Banyak</button>
        </div>
      </div>
    `;
    
    isi.appendChild(kolom); // Tambahkan kolom ke dalam kontainer
    
  });
}
// Objek untuk menyimpan data sub-kategori
const sub_img = {
//alam
  "limpakuwus": [
      { imageUrl: "http://localhost/uts/assets/images/alam/limpakuwus/limpakuwus.jpg", content: "Limpakuwus" },
      { imageUrl: "http://localhost/uts/assets/images/alam/limpakuwus/limpakuwus2.jpg" ,  content:"Limpakuwus"},
      { imageUrl: "http://localhost/uts/assets/images/alam/limpakuwus/limpakuwus3.jpg" ,  content:"Limpakuwus"},
      { imageUrl: "http://localhost/uts/assets/images/alam/limpakuwus/limpakuwus4.jpg" ,  content:"Limpakuwus"},
      { imageUrl: "http://localhost/uts/assets/images/alam/limpakuwus/limpakuwus5.jpg" ,  content:"Limpakuwus"}

    ],
  "caub": [
    { imageUrl: "http://localhost/uts/assets/images/alam/caub/caub2.webp", content: "Caub Baturaden" },
    { imageUrl: "http://localhost/uts/assets/images/alam/caub/caub5.webp", content: "Caub Baturaden" },
    { imageUrl: "http://localhost/uts/assets/images/alam/caub/caub5.jpg", content: "Caub Baturaden" },
    { imageUrl: "http://localhost/uts/assets/images/alam/caub/caub4.jpg", content: "Caub Baturaden" },
    { imageUrl: "http://localhost/uts/assets/images/alam/caub/caub3.jpg", content: "Caub Baturaden" },

  ],
  "melung": [
    { imageUrl: "http://localhost/uts/assets/images/alam/Melung/Melung.jpg", content: "Melung Baturaden" },
    { imageUrl: "http://localhost/uts/assets/images/alam/Melung/melung1.jpg", content: "Melung Baturaden" },
    { imageUrl: "http://localhost/uts/assets/images/alam/Melung/melung4.jpg", content: "Melung Baturaden" },
    { imageUrl: "http://localhost/uts/assets/images/alam/Melung/melung5.jpg", content: "Melung Baturaden" },
    { imageUrl: "http://localhost/uts/assets/images/alam/Melung/melung2.webp", content: "Melung Baturaden" },
  ],
//taman
  "botani":[
    { imageUrl: "http://localhost/uts/assets/images/taman/botani/botani1.jpg", content: "Taman Botani Baturaden" },
    { imageUrl: "http://localhost/uts/assets/images/taman/botani/botani3.png", content: "Taman Botani Baturaden" },
    { imageUrl: "http://localhost/uts/assets/images/taman/botani/botani4.jpg", content: "Taman Botani Baturaden" },
    { imageUrl: "http://localhost/uts/assets/images/taman/botani/botani5.jpg", content: "Taman Botani Baturaden" },
    { imageUrl: "http://localhost/uts/assets/images/taman/botani/botani2.jpg", content: "Taman Botani Baturaden" },
  ]
}
// Fungsi untuk menampilkan sub-konten berdasarkan destinasi yang dipilih
// Fungsi untuk menampilkan sub-konten berdasarkan destinasi yang dipilih
function tampilkanSub(category) {
  var subKonten = document.getElementById('subkonten');
  subKonten.innerHTML = ''; // Mengosongkan isi HTML sebelum menambahkan data baru
  sub_img[category].forEach(element => { // Akses array sub_img[category]
      var subb = document.createElement('div'); // Buat elemen div untuk setiap kartu
      subb.className = 'swiper-slide'; 
      subb.innerHTML = `
      <div class="card text-bg-dark" onclick="tampilkanDetail('${element.detail}')">
        <div class="card-img-overlay">
          <h5 class="card-title">${element.content}</h5>
        </div> 
      </div>
      <img src="${element.imageUrl}" class="card-img" alt="${element.content}">
    `;
    subKonten.appendChild(subb); // Tambahkan kartu ke dalam isi sub-konten
  });
}

