// Array untuk menyimpan data destinasi
const destinasi ={
  "alam" : [
      { imageUrl: "http://localhost/uts/assets/images/alam/limpakuwus/limpakuwus.jpg", content: "Limpakuwus", info:'limpakuwus' ,tempat:'alam'},
      { imageUrl: "http://localhost/uts/assets/images/alam/caub/caub.webp" ,  content:"Menara Pandang Caub Baturraden", info:'caub',tempat:'alam' },
      { imageUrl: "http://localhost/uts/assets/images/alam/melung/melung1.jpg" ,  content:"Melung Bauraden",info:'melung',tempat:'alam' }
  ],
  "taman" : [
    { imageUrl: "http://localhost/uts/assets/images/taman/botani/botani2.jpg" ,  content:"Taman Botani Baturaden", info:'botani',tempat:'taman' },
    { imageUrl: "http://localhost/uts/assets/images/taman/andang/an1.jpg" ,  content:"Taman Andang Pangrenan Purwokerto", info:'andang',tempat:'taman' },
    { imageUrl: "http://localhost/uts/assets/images/taman/kebunraya/kbr1.jpg" ,  content:"Kebunraya", info:'kebunraya',tempat:'taman' },
    { imageUrl: "http://localhost/uts/assets/images/taman/maskemambang/ms1.jpg" ,  content:"Maaskemambang", info:'maskemambang',tempat:'taman' },
    { imageUrl: "http://localhost/uts/assets/images/taman/nsw/nsw1.jpg" ,  content:"New Small Word", info:'nsw',tempat:'taman' },

    
  ],
  "museum" : []
}

// Fungsi untuk menampilkan destinasi berdasarkan kategori
function tampilkan(category) {
  var isi = document.getElementById('swep1');
  var subKonten = document.getElementById('swep2');
  subKonten.innerHTML = ''
  // Mengambil elemen swiper-wrapper dengan ID swep1
  isi.innerHTML = ''; // Mengosongkan isi swiper-wrapper sebelum menambahkan data baru
  destinasi[category].forEach(element => { // Akses array destinasi[category]
      var kolom = document.createElement('div');
      kolom.className = 'card swiper-slide'; // Memastikan kolom memiliki kelas swiper-slide
      kolom.innerHTML = `
          <img src="${element.imageUrl}" class="card-img-top" alt="destinasi" onclick="tampilkanSub('${element.info}')"> 
          <div class="card-body">
              <p class="card-text">${element.content}</p>
              <a href="./assets/${element.tempat}/${element.info}.html">
              <button type="button" class="btn btn-primary btn-lg">informasi</button>
              </a>
          </div> 
      `;
      isi.appendChild(kolom); // Tambahkan kolom ke dalam isi swiper-wrapper
  });
   subContentShown = false;
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
function tampilkanSub(category) {
  var subKonten = document.getElementById('swep2');
  subKonten.innerHTML = ''; // Mengosongkan isi HTML sebelum menambahkan data baru
  sub_img[category].forEach(element => { // Akses array sub_img[category]
      var card = document.createElement('div'); // Buat elemen div untuk setiap kartu
      card.className = 'card swiper-slide'; 
      card.innerHTML = `
      <img src="${element.imageUrl}" class="card-img-top" alt="destinasi">
          <div class="card-body">
              <p class="card-text">${element.content}</p>
          </div> 
      `;
      subKonten.appendChild(card); // Tambahkan kartu ke dalam isi sub-konten
  });
}

