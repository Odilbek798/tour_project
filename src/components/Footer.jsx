export default function Footer() {
  return (
    <footer className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-sm text-gray-600">
        
        <div>
          <h4 className="font-semibold mb-4">TOURS CHANTECLERC</h4>
          <button className="block bg-gray-800 text-white px-4 py-2 rounded mb-3">
            Espace voyageurs
          </button>
          <button className="block bg-blue-600 text-white px-4 py-2 rounded">
            Portail des agents
          </button>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
          <ul className="space-y-2">
            <li>À propos</li>
            <li>Emplois</li>
            <li>Actualités</li>
            <li>Brochures</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Подписывайтесь</h4>
          <ul className="space-y-2">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
          </ul>
        </div>

        <div className="text-xs">
          © 2026 Tours Chanteclerc
        </div>

      </div>
    </footer>
  );
}