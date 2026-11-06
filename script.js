// Mengambil elemen tombol dan modal dari HTML
const btnBuka = document.getElementById('btnBuka');
const btnTutup = document.getElementById('btnTutup');
const modalPopup = document.getElementById('modalPopup');

// Fungsi membuka pop-up saat tombol utama diklik
btnBuka.addEventListener('click', () => {
    modalPopup.style.display = 'flex';
});

// Fungsi menutup pop-up saat tombol tutup diklik
btnTutup.addEventListener('click', () => {
    modalPopup.style.display = 'none';
});