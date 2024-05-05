// Array untuk menyimpan data destinasi
const destinasi ={
  "alam" : [
      { tempat:'alam', info:'limpakuwus',imageUrl: "limpakuwus.jpg", content: "Limpakuwus", info:'limpakuwus',lokasi:'Baturaden'},
      { tempat:'alam', info:'caub',imageUrl: "caub.webp" ,  content:"Menara Pandang Caub",lokasi:'Baturaden' },
      { tempat:'alam', info:'melung',imageUrl: "melung1.jpg" ,  content:"Melung", lokasi:'Baturaden' }
  ],
  "taman" : [
    { tempat:'taman', info:'botani',imageUrl: "botani2.jpg" ,  content:"Taman Botani",lokasi:'Baturaden'},
    { tempat:'taman', info:'andang',imageUrl: "an1.jpg" ,  content:"Taman Andang Pangrenan",lokasi:'Purwokero'},
    { tempat:'taman',info:'kebunraya',imageUrl: "kbr1.jpg" ,  content:"Kebunraya",lokasi:'Baturaden',tempat:'taman' },
    { tempat:'taman',info:'maskemambang' ,imageUrl: "ms1.jpg" ,  content:"Maaskemambang",lokasi:'Purwokerto' },
    { tempat:'taman', info:'nsw' ,  imageUrl: "nsw1.jpg" ,  content:"New Small Word",lokasi:'Purwokero' },

    
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
      <img src="./assets/images/${element.tempat}/${element.info}/${element.imageUrl}" alt="${element.content}" />
      <div class="text-overlay">
          <div class="title">${element.content}</div>
          <div class="subtitle">${element.lokasi}</div>
          <a href="./assets/${element.tempat}/${element.info}.html"><button type="button" class="btn btn-secondary btn-sm">Informasi Sengkap</button></a>
          <button type="button" class="btn btn-secondary btn-sm" onclick="tampilkanSub('${element.info}')">Lihat Lebih Banyak Gambar</button>
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
      { tempat:'alam', info:'limpakuwus',imageUrl: "limpakuwus.jpg", content: "Limpakuwus" },
      { tempat:'alam', info:'limpakuwus',imageUrl: "limpakuwus2.jpg" ,  content:"Limpakuwus"},
      { tempat:'alam', info:'limpakuwus',imageUrl: "limpakuwus3.jpg" ,  content:"Limpakuwus"},
      { tempat:'alam', info:'limpakuwus',imageUrl: "limpakuwus4.jpg" ,  content:"Limpakuwus"},
      { tempat:'alam', info:'limpakuwus',imageUrl: "limpakuwus5.jpg" ,  content:"Limpakuwus"}

    ],
  "caub": [
    { tempat:'alam', info:'caub',imageUrl: "caub2.webp", content: "Caub Baturaden" },
    { tempat:'alam', info:'caub',imageUrl: "caub5.webp", content: "Caub Baturaden" },
    { tempat:'alam', info:'caub',imageUrl: "caub5.jpg", content: "Caub Baturaden" },
    { tempat:'alam', info:'caub',imageUrl: "caub4.jpg", content: "Caub Baturaden" },
    { tempat:'alam', info:'caub',imageUrl: "caub3.jpg", content: "Caub Baturaden" },

  ],
  "melung": [
    { tempat:'alam', info:'melung',imageUrl: "Melung.jpg", content: "Melung Baturaden" },
    { tempat:'alam', info:'melung',imageUrl: "melung1.jpg", content: "Melung Baturaden" },
    { tempat:'alam', info:'melung',imageUrl: "melung4.jpg", content: "Melung Baturaden" },
    { tempat:'alam', info:'melung',imageUrl: "melung5.jpg", content: "Melung Baturaden" },
    { tempat:'alam', info:'melung',imageUrl: "melung2.webp", content: "Melung Baturaden" },
  ],
//taman
  "botani":[
    { tempat:'taman', info:'botani',imageUrl:"botani1.jpg", content: "Taman Botani Baturaden" },
    { tempat:'taman', info:'botani', imageUrl: "botani3.png", content: "Taman Botani Baturaden" },
    { tempat:'taman', info:'botani',imageUrl: "botani4.jpg", content: "Taman Botani Baturaden" },
    { tempat:'taman', info:'botani',imageUrl: "botani5.jpg", content: "Taman Botani Baturaden" },
    { tempat:'taman', info:'botani',imageUrl: "botani2.jpg", content: "Taman Botani Baturaden" },
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
      <div class="swiper-slide">
      
      <img src="./assets/images/${element.tempat}/${element.info}/${element.imageUrl}" alt="${element.content}" />
      </div>
    </div>

    `;
    subKonten.appendChild(subb); // Tambahkan kartu ke dalam isi sub-konten
  });
}

