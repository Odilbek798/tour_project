import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div>
          <h4 className="footer-title">TOURS CHANTECLERC</h4>
          <button className="btn2 btn-dark">
            Espace voyageurs
          </button>
          <button className="btn2 btn-blue">
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
          © 2026 Tours
        </div>

      </div>
    </footer>
  );
}
