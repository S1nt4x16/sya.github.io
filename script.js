document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const openPopup = document.getElementById("openPopup");
  const closePopup = document.getElementById("closePopup");
  const bgMusic = document.getElementById("bgMusic");
  let clickCount = 0;

  // Show popup
  openPopup.addEventListener("click", () => {
    clickCount++;
    popup.style.display = "block";
    bgMusic.play(); // Play music when popup is opened

    // Jika tombol sudah diklik sekali, ubah teks atau fungsinya
    if (clickCount === 1) {
      openPopup.textContent = "Klik untuk Kejutan Selanjutnya";
    } else if (clickCount === 2) {
      openPopup.textContent = "Kejutan Selesai";
      openPopup.disabled = true; // Nonaktifkan tombol setelah digunakan dua kali
    }
  });

  // Close popup with animation and SweetAlert
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
    Swal.fire({
      title: 'Make a wish! 🎉',
      text: 'ASIKKKKK NAMBAH TUAAAAA',
      icon: 'success',
      confirmButtonText: 'YEYYYY!!!'
    }).then(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      // Tambahkan kejutan kedua
      if (clickCount === 2) {
        Swal.fire({
          title: 'Ada Kejutan Tambahan dong wkwkw! 🎈',
          text: 'Balon berubah warna!',
          icon: 'info',
          confirmButtonText: 'Keren gak?:)'
        });

        // Ubah warna balon
        const balloons = document.querySelectorAll('.balloon');
        balloons.forEach((balloon) => {
          balloon.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        });
      }
    });
  });
});
