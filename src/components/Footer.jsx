import "./Footer2.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div>
          <h4 className="footer-title">TOURS CHANTECLERC</h4>
          <button className="btn btn-dark">
            Espace voyageurs
          </button>
          <button className="btn btn-blue">
            Portail des agents
          </button>
        </div>

        <div>
          <h4 className="footer-title">Быстрые ссылки</h4>
          <ul className="footer-list">
            <li>À propos</li>
            <li>Emplois</li>
            <li>Actualités</li>
            <li>Brochures</li>
          </ul>
        </div>

        <div>
          <h4 className="footer-title">Подписывайтесь</h4>
          <ul className="footer-list">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
          </ul>
        </div>

        <div className="footer-copy">
          © 2026 Tours Chanteclerc
           <h4 className="footer-title">Способы оплаты</h4>
  <div className="payment-icons">
    <img src="/payments/visa.png" alt="Visa" />
    <img src="/payments/mastercard.png" alt="MasterCard" />
    <img src="/payments/uzcard.png" alt="Uzcard" />
    <img src="/payments/humo.png" alt="Humo" />
    <img src="/payments/payme.png" alt="Payme" />
    <img src="/payments/click.png" alt="Click" />
  </div>
        </div>


      </div>
    </footer>
  );
}

