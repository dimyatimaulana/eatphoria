const about = () => {
  const aboutContainer = document.querySelector('.about-container');
  aboutContainer.innerHTML = `
    <div class='about__text'>
      <h3>Eatphoria</h3>
      <p>
        adalah aplikasi yang dapat membantu anda menemukan restaurant favorite sebagai referensi wisata kuliner Anda.
        Terdapat berbagai macam pilihan mulai dari cafe, restoran, coffee shop dan lain - lain.
      </p>
    </div>
  `;
};

export default about;
