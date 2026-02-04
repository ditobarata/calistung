const daftarBenda = [
    // HEWAN
    { nama: "SAPI", emoji: "🐄" }, { nama: "AYAM", emoji: "🐓" }, { nama: "KUCING", emoji: "🐱" },
    { nama: "BEBEK", emoji: "🦆" }, { nama: "SINGA", emoji: "🦁" }, { nama: "GAJAH", emoji: "🐘" },
    { nama: "MONYET", emoji: "🐒" }, { nama: "KUDA", emoji: "🐎" }, { nama: "BABI", emoji: "🐖" },
    { nama: "DOMBA", emoji: "🐑" }, { nama: "KELELAWAR", emoji: "🦇" }, { nama: "SERIGALA", emoji: "🐺" },
    { nama: "LEBAH", emoji: "🐝" }, { nama: "CACING", emoji: "🪱" }, { nama: "KUPU", emoji: "🦋" },
    { nama: "IKAN", emoji: "🐟" }, { nama: "HIU", emoji: "🦈" }, { nama: "GURITA", emoji: "🐙" },
    { nama: "KEPITING", emoji: "🦀" }, { nama: "KURA", emoji: "🐢" },

    // BUAH & MAKANAN
    { nama: "APEL", emoji: "🍎" }, { nama: "JERUK", emoji: "🍊" }, { nama: "PISANG", emoji: "🍌" },
    { nama: "SEMANGKA", emoji: "🍉" }, { nama: "ANGGUR", emoji: "🍇" }, { nama: "STROBERI", emoji: "🍓" },
    { nama: "MELON", emoji: "🍈" }, { nama: "NANAS", emoji: "🍍" }, { nama: "MANGGA", emoji: "🥭" },
    { nama: "CERI", emoji: "🍒" }, { nama: "ROTI", emoji: "🍞" }, { nama: "PIZZA", emoji: "🍕" },
    { nama: "DONAT", emoji: "🍩" }, { nama: "ESKRIM", emoji: "🍦" }, { nama: "COKELAT", emoji: "🍫" },
    { nama: "MADU", emoji: "🍯" }, { nama: "SUSU", emoji: "🥛" }, { nama: "TELUR", emoji: "🥚" },
    { nama: "BURGER", emoji: "🍔" }, { nama: "KENTANG", emoji: "🍟" },

    // BENDA & ALAT TULIS
    { nama: "TAS", emoji: "🎒" }, { nama: "BUKU", emoji: "📖" }, { nama: "PENSIL", emoji: "✏️" },
    { nama: "PENGGARIS", emoji: "📏" }, { nama: "GUNTING", emoji: "✂️" }, { nama: "KERTAS", emoji: "📄" },
    { nama: "BOLA", emoji: "⚽" }, { nama: "BONEKA", emoji: "🧸" }, { nama: "BALON", emoji: "🎈" },
    { nama: "SEPEDA", emoji: "🚲" }, { nama: "MOBIL", emoji: "🚗" }, { nama: "BIS", emoji: "🚌" },
    { nama: "KERETA", emoji: "🚂" }, { nama: "PESAWAT", emoji: "✈️" }, { nama: "ROKET", emoji: "🚀" },
    { nama: "KAPAL", emoji: "🚢" }, { nama: "PAYUNG", emoji: "☂️" }, { nama: "TOPI", emoji: "🧢" },
    { nama: "SEPATU", emoji: "👟" }, { nama: "KAOS", emoji: "👕" },

    // ALAM & SEKITAR
    { nama: "MATAHARI", emoji: "☀️" }, { nama: "BULAN", emoji: "🌙" }, { nama: "BINTANG", emoji: "⭐" },
    { nama: "AWAN", emoji: "☁️" }, { nama: "PELANGI", emoji: "🌈" }, { nama: "API", emoji: "🔥" },
    { nama: "POHON", emoji: "🌳" }, { nama: "BUNGA", emoji: "🌻" }, { nama: "DAUN", emoji: "🍃" },
    { nama: "RUMAH", emoji: "🏠" }, { nama: "LAMPU", emoji: "💡" }, { nama: "KURSI", emoji: "🪑" },
    { nama: "MEJA", emoji: "TABLE" }, { nama: "JAM", emoji: "⏰" }, { nama: "KACA", emoji: "🪞" },
    { nama: "TELEPON", emoji: "📱" }, { nama: "GITAR", emoji: "🎸" }, { nama: "DRUM", emoji: "🥁" },
    { nama: "TEROMPET", emoji: "🎺" }, { nama: "PIANO", emoji: "🎹" },

    // TAMBAHAN RANDOM
    { nama: "SISIR", emoji: "🪮" }, { nama: "SABUN", emoji: "🧼" }, { nama: "HANDUK", emoji: "🧖" },
    { nama: "GIGI", emoji: "🦷" }, { nama: "MATA", emoji: "👁️" }, { nama: "TELINGA", emoji: "👂" },
    { nama: "TANGAN", emoji: "🖐️" }, { nama: "KAKI", emoji: "🦶" }, { nama: "KAMERA", emoji: "📷" },
    { nama: "RADIO", emoji: "📻" }, { nama: "KUNCI", emoji: "🔑" }, { nama: "PALU", emoji: "🔨" },
    { nama: "OBENG", emoji: "🪛" }, { nama: "PACUL", emoji: "⛏️" }, { nama: "SENTER", emoji: "🔦" },
    { nama: "BOTOL", emoji: "🍼" }, { nama: "SENDOK", emoji: "🥄" }, { nama: "GARPU", emoji: "🍴" },
    { nama: "GELAS", emoji: "🥛" }, { nama: "PIRING", emoji: "🍽️" },

    // ALAT MUSIK (15)
    { nama: "GITAR", emoji: "🎸" }, { nama: "BIOLA", emoji: "🎻" }, { nama: "DRUM", emoji: "🥁" },
    { nama: "PIANO", emoji: "🎹" }, { nama: "TEROMPET", emoji: "🎺" }, { nama: "SAKSOFON", emoji: "🎷" },
    { nama: "AKORDEON", emoji: "🪗" }, { nama: "HARPA", emoji: "Strings" }, { nama: "BANJO", emoji: "🪕" },
    { nama: "SULING", emoji: "🪈" }, { nama: "LONCENG", emoji: "🔔" }, { nama: "REBANA", emoji: "🪘" },
    { nama: "MIKROFON", emoji: "🎤" }, { nama: "RADIO", emoji: "📻" }, { nama: "HEADPHONE", emoji: "🎧" },

    // CUACA & ALAM (20)
    { nama: "HUJAN", emoji: "🌧️" }, { nama: "PETIR", emoji: "⚡" }, { nama: "SALJU", emoji: "❄️" },
    { nama: "ANGIN", emoji: "🌬️" }, { nama: "PELANGI", emoji: "🌈" }, { nama: "GUNUNG", emoji: "⛰️" },
    { nama: "PANTAI", emoji: "🏖️" }, { nama: "PULAU", emoji: "🏝️" }, { nama: "GURUN", emoji: "🌵" },
    { nama: "SUNGAI", emoji: "🏞️" }, { nama: "OMBAK", emoji: "🌊" }, { nama: "API", emoji: "🔥" },
    { nama: "AIR", emoji: "💧" }, { nama: "BATU", emoji: "🪨" }, { nama: "BUMI", emoji: "🌍" },
    { nama: "BULAN", emoji: "🌙" }, { nama: "BINTANG", emoji: "⭐" }, { nama: "PLANET", emoji: "🪐" },
    { nama: "METEOR", emoji: "☄️" }, { nama: "KAKTUS", emoji: "🌵" },

    // BENDA DI RUMAH (30)
    { nama: "KURSI", emoji: "🪑" }, { nama: "MEJA", emoji: "🛋️" }, { nama: "PINTU", emoji: "🚪" },
    { nama: "JENDELA", emoji: "🪟" }, { nama: "TEMPAT TIDUR", emoji: "🛏️" }, { nama: "LAMPU", emoji: "💡" },
    { nama: "CERMIN", emoji: "🪞" }, { nama: "TV", emoji: "📺" }, { nama: "KULKAS", emoji: "🧊" },
    { nama: "TELEPON", emoji: "☎️" }, { nama: "SABUN", emoji: "🧼" }, { nama: "HANDUK", emoji: "🧖" },
    { nama: "GUNTING", emoji: "✂️" }, { nama: "PALU", emoji: "🔨" }, { nama: "KUNCI", emoji: "🔑" },
    { nama: "PAYUNG", emoji: "☂️" }, { nama: "SENTER", emoji: "🔦" }, { nama: "KOMPOR", emoji: "🔥" },
    { nama: "BOTOL", emoji: "🍼" }, { nama: "GELAS", emoji: "🥛" }, { nama: "PIRING", emoji: "🍽️" },
    { nama: "SENDOK", emoji: "🥄" }, { nama: "GARPU", emoji: "🍴" }, { nama: "PISAU", emoji: "🔪" },
    { nama: "TAS", emoji: "🎒" }, { nama: "DOMPET", emoji: "👛" }, { nama: "JAM", emoji: "⏰" },
    { nama: "KADO", emoji: "🎁" }, { nama: "LILIN", emoji: "🕯️" }, { nama: "SAPU", emoji: "🧹" }
];

let targetKata = "";
let hurufTertebak = [];

const emojiDisplay = document.getElementById("emoji-display");
const wordDisplay = document.getElementById("word-display");
const hiddenInput = document.getElementById("hidden-input");
const nextBtn = document.getElementById("next-btn");
let animationTimeout;

function mulaiGame() {
    // Reset data
    const acak = daftarBenda[Math.floor(Math.random() * daftarBenda.length)];
    targetKata = acak.nama;
    emojiDisplay.innerText = acak.emoji;
    hurufTertebak = [];
    nextBtn.style.display = "none";
    
    perbaruiTampilan();
    hiddenInput.focus(); // Munculkan keyboard

    // Panggil animasi saat emoji baru muncul
    animasikanEmoji('bounce'); // Bisa 'bounce' atau 'pulse'
}

function perbaruiTampilan() {
    let teks = "";
    for (let huruf of targetKata) {
        if (hurufTertebak.includes(huruf)) {
            teks += huruf;
        } else {
            teks += "_";
        }
    }
    wordDisplay.innerText = teks;

    // Jika menang
    if (!teks.includes("_")) {
        wordDisplay.style.color = "#00C853"; /* Hijau cerah saat menang */
        nextBtn.style.display = "inline-block";
        animasikanEmoji('pulse'); // Animasi saat menang
    } else {
        wordDisplay.style.color = "#6A1B9A"; /* Ungu ceria saat bermain */
    }
}

function animasikanEmoji(animasiKelas) {
    clearTimeout(animationTimeout);
    emojiDisplay.classList.remove('emoji-bounce', 'emoji-pulse', 'emoji-idle'); // Hapus animasi sebelumnya
    // Paksa reflow agar animasi bisa diulang
    void emojiDisplay.offsetWidth; 
    emojiDisplay.classList.add(animasiKelas);

    // Kembali ke animasi santai (idle) setelah animasi reaksi selesai
    animationTimeout = setTimeout(() => {
        emojiDisplay.classList.remove(animasiKelas);
        emojiDisplay.classList.add('emoji-idle');
    }, 600);
}


// Tangkap input dari keyboard HP
hiddenInput.addEventListener("input", (e) => {
    const input = e.target.value.toUpperCase();
    e.target.value = ""; // Kosongkan lagi inputnya

    if (targetKata.includes(input)) {
        if (!hurufTertebak.includes(input)) {
            hurufTertebak.push(input);
            // Animasi emoji kecil saat huruf benar
            animasikanEmoji('pulse'); 
        }
    } else {
        // Mungkin bisa tambahkan animasi "goyang" jika salah, tapi biarkan dulu untuk kesederhanaan
    }
    perbaruiTampilan();
});

// Pastikan keyboard muncul saat layar diklik
document.body.addEventListener("click", () => {
    hiddenInput.focus();
});

nextBtn.addEventListener("click", mulaiGame);

// Mulai pertama kali
mulaiGame();