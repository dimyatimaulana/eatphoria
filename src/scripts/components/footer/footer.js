const footer = () => {
  const footerElement = document.querySelector('.footer');

  footerElement.innerHTML = `
  <div class="links">
  <div class="useful_links">
      <h2>Useful Links</h2>
      <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='#'>Favorite</a></li>
          <li><a href='https://maulana-dimyati.vercel.app/'>About</a></li>
      </ul>
  </div> 
  <div class="product_help">
      <h2>Product Help</h2>
      <ul>
          <li><a href='#'>FAQ</a></li>
          <li><a href='#'>Privacy Policy</a></li>
          <li><a href='#'>Support</a></li>
          <li><a href='#'>Terms & Conditions</a></li>
      </ul>
  </div>
  </div>
  <div class="copyrights">
      <h3>Copyrights 2023 Eatphoria All rights reserved.</h3>
  </div>
  `;
};

export default footer;
