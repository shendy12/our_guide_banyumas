// Array untuk menyimpan data destinasi
const destinasi ={
  "alam" : [
      { tempat:'alam', info:'limpakuwus',imageUrl: "limpakuwus.jpg", content: "Limpakuwus", info:'limpakuwus',lokasi:'Baturaden'},
      { tempat:'alam', info:'caub',imageUrl: "caub.webp" ,  content:"Menara Pandang Caub",lokasi:'Baturaden' },
      { tempat:'alam', info:'melung',imageUrl: "melung1.jpg" ,  content:"Melung", lokasi:'Baturaden' },
      { tempat:'alam', info:'gomblang',imageUrl: "c.jpg" ,  content:"Curug Gomblang", lokasi:'Baturaden' }

  
    ],
  "taman" : [
    { tempat:'taman', info:'botani',imageUrl: "botani2.jpg" ,  content:"Taman Botani",lokasi:'Baturaden'},
    { tempat:'taman', info:'andang',imageUrl: "an1.jpg" ,  content:"Taman Andang Pangrenan",lokasi:'Purwokero'},
    { tempat:'taman',info:'kebunraya',imageUrl: "kbr1.jpg" ,  content:"Kebunraya",lokasi:'Baturaden'},
    { tempat:'taman',info:'maskemambang' ,imageUrl: "ms1.jpg" ,  content:"Maaskemambang",lokasi:'Purwokerto' },
    { tempat:'taman', info:'nsw' ,  imageUrl: "nsw1.jpg" ,  content:"New Small Word",lokasi:'Purwokero' },

    
  ],
  "museum" : [
    {tempat:'museum',info:'js',imageUrl: "js2.jpg", content:'Museum Panglima Besar TNI Jenderal Sudirman' , lokasi:'Purwokerto'},
    {tempat:'museum',info:'bri',imageUrl: "bri1.jpg", content:'Museum Bank Rakyat Indonesia', lokasi:'Purwokerto'},

  ]
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
      kolom.className = 'swiper-slide '; 
      kolom.innerHTML = `
      <div class="swiper-slide" id="isikonten">
      <img src="./assets/images/${element.tempat}/${element.info}/${element.imageUrl}" alt="${element.content}" style="max-width: 100%; height: 100%;"/>
      <div class="text-overlay">
          <div class="title">${element.content}</div>
          <div class="subtitle">${element.lokasi}</div>
          <a href="./assets/${element.tempat}/${element.info}.html"><button type="button" class="btn btn-secondary btn-sm">Informasi Lengkap</button></a>
          <a href="#subkonten">
          <button type="button" class="btn btn-secondary btn-sm" onclick="tampilkanSub('${element.info}')">Gambar - gambar di destinasi</button>
          </a>
          </div>
      </div>
    `;
    
    isi.appendChild(kolom); 
    
  });
}
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


  "gomblang" : [
    { tempat:'alam', info:'gomblang',imageUrl: "c.jpg" ,  content:"Curug Gomblang", lokasi:'Baturaden' },
    { tempat:'alam', info:'gomblang',imageUrl: "c1.jpg" ,  content:"Curug Gomblang", lokasi:'Baturaden' },
    { tempat:'alam', info:'gomblang',imageUrl: "c2.jpg" ,  content:"Curug Gomblang", lokasi:'Baturaden' },
    { tempat:'alam', info:'gomblang',imageUrl: "c3.jpg" ,  content:"Curug Gomblang", lokasi:'Baturaden' },
    { tempat:'alam', info:'gomblang',imageUrl: "c4.jpg" ,  content:"Curug Gomblang", lokasi:'Baturaden' }

  ],
//taman
  "botani":[
    { tempat:'taman', info:'botani',imageUrl:"botani1.jpg", content: "Taman Botani Baturaden" },
    { tempat:'taman', info:'botani', imageUrl: "botani3.png", content: "Taman Botani Baturaden" },
    { tempat:'taman', info:'botani',imageUrl: "botani4.jpg", content: "Taman Botani Baturaden" },
    { tempat:'taman', info:'botani',imageUrl: "botani5.jpg", content: "Taman Botani Baturaden" },
    { tempat:'taman', info:'botani',imageUrl: "botani2.jpg", content: "Taman Botani Baturaden" },
  ],
  'andang':[
  { tempat:'taman', info:'andang',imageUrl: "an1.jpg" ,  content:"Taman Andang Pangrenan"},
  { tempat:'taman', info:'andang',imageUrl: "an2.jpg" ,  content:"Taman Andang Pangrenan"},
  { tempat:'taman', info:'andang',imageUrl: "an3.jpg" ,  content:"Taman Andang Pangrenan"},
  { tempat:'taman', info:'andang',imageUrl: "an4.jpg" ,  content:"Taman Andang Pangrenan"},
  { tempat:'taman', info:'andang',imageUrl: "an5.jpg" ,  content:"Taman Andang Pangrenan"},
  ],
  'kebunraya':[
  { tempat:'taman',info:'kebunraya',imageUrl: "kbr1.jpg" ,  content:"Kebunraya" },
  { tempat:'taman',info:'kebunraya',imageUrl: "kbr2.jpg" ,  content:"Kebunraya" },
  { tempat:'taman',info:'kebunraya',imageUrl: "kbr3.jpg" ,  content:"Kebunraya" },
  { tempat:'taman',info:'kebunraya',imageUrl: "kbr4.jpg" ,  content:"Kebunraya" },
  { tempat:'taman',info:'kebunraya',imageUrl: "kbr5.jpg" ,  content:"Kebunraya" },

],

  'maskemambang' :[
  { tempat:'taman',info:'maskemambang' ,imageUrl: "ms1.jpg" ,  content:"Maaskemambang" },
  { tempat:'taman',info:'maskemambang' ,imageUrl: "ms2.jpg" ,  content:"Maaskemambang" },
  { tempat:'taman',info:'maskemambang' ,imageUrl: "ms3.jpg" ,  content:"Maaskemambang" },
  { tempat:'taman',info:'maskemambang' ,imageUrl: "ms4.jpg" ,  content:"Maaskemambang" },
  { tempat:'taman',info:'maskemambang' ,imageUrl: "ms5.jpg" ,  content:"Maaskemambang" },

],
  'nsw' :[
    { tempat:'taman', info:'nsw' ,  imageUrl: "nsw1.jpg" ,  content:"New Small Word" },
    { tempat:'taman', info:'nsw' ,  imageUrl: "nsw2.jpg" ,  content:"New Small Word" },
    { tempat:'taman', info:'nsw' ,  imageUrl: "nsw3.jpg" ,  content:"New Small Word" },
    { tempat:'taman', info:'nsw' ,  imageUrl: "nsw4.jpg" ,  content:"New Small Word" },
    { tempat:'taman', info:'nsw' ,  imageUrl: "nsw5.png" ,  content:"New Small Word" },

  ],

  //museum

  'js' : [
    {tempat:'museum',info:'js',imageUrl: "js2.jpg", content:'Museum Panglima Besar TNI Jenderal Sudirman'},
    {tempat:'museum',info:'js',imageUrl: "js1.jpg", content:'Museum Panglima Besar TNI Jenderal Sudirman'},
    {tempat:'museum',info:'js',imageUrl: "js3.jpg", content:'Museum Panglima Besar TNI Jenderal Sudirman'},
    {tempat:'museum',info:'js',imageUrl: "js4.jpg", content:'Museum Panglima Besar TNI Jenderal Sudirman'},

  ],
  'bri' :[
    {tempat:'museum',info:'bri',imageUrl: "bri.jpg", content:'Museum Bank Rakyat Indonesia'},
    {tempat:'museum',info:'bri',imageUrl: "bri1.jpg", content:'Museum Bank Rakyat Indonesia'},
    {tempat:'museum',info:'bri',imageUrl: "bri2.jpg", content:'Museum Bank Rakyat Indonesia'},
    {tempat:'museum',info:'bri',imageUrl: "bri3.jpg", content:'Museum Bank Rakyat Indonesia'},
    {tempat:'museum',info:'bri',imageUrl: "bri4.jpg", content:'Museum Bank Rakyat Indonesia'},

  ]

}
// Fungsi untuk menampilkan sub-konten berdasarkan destinasi yang dipilih
function tampilkanSub(category) {
  var subKonten = document.getElementById('subkonten');
  subKonten.innerHTML = ''; // Mengosongkan isi HTML sebelum menambahkan data baru
  sub_img[category].forEach(element => { // Akses array sub_img[category]
      var subb = document.createElement('div'); 
      subb.className = 'swiper-slide'; 
      subb.innerHTML = `
      <div class="swiper-slide">
      
      <img src="./assets/images/${element.tempat}/${element.info}/${element.imageUrl}" alt="${element.content}" />
      </div>
    </div>

    `;
    subKonten.appendChild(subb);
  });
}

//agar akan langsung tamppil gambar di halaman isi maka saya mengakalinya dengan triger dimana itu akan meng click bagian yg ada onclick yg saya sisipkan di dokumen //
function triggerClick() {
  document.querySelector("#triger").click();
}

