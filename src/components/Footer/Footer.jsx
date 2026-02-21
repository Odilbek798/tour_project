import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="buttons">
          <h4 className="footer-title">IT TOUR</h4>
          <button className="bton btn-dark">
            Recomendations
          </button>
          <button className="bton btn-blue">
            Contact
          </button>
        </div>

        <div>
          <h4 className="footer-title">Turli xil ma'lumotlar</h4>
          <ul className="footer-list">
            <li>Qoshimcha ma'lumotlar</li>
            <li>Tour haqida savollar</li>
            <li>Bog'lanish usuli</li>
            <li>Mavjud turlar</li>
          </ul>
        </div>

        <div>
          <h4 className="footer-title">Ilovalar</h4>
          <ul className="footer-list">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
          </ul>
        </div>

        <div className="footer-copy">
          © 2026 IT TOUR
           <h4 className="footer-title"></h4>
  <div className="payment_icons">
    <p>Visa</p>
    <p>MasterCard</p>
    <p>UzCard</p>
    <p>Humo</p>
    <p>Payme</p>
    <p>Click</p>
    
  </div>
        </div>


      </div>
    </footer>
  );
}

