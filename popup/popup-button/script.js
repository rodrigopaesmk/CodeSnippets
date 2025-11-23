const openBtn = document.querySelector('.open-popup-btn');
    const overlay = document.getElementById('popupOverlay');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closeBtn');

    openBtn.addEventListener('click', () => {
      overlay.classList.add('active');
      popup.classList.add('active');
    });

    closeBtn.addEventListener('click', closePopup);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closePopup();
      }
    });

    function closePopup() {
      popup.classList.remove('active');
      overlay.classList.remove('active');
    }