export default function Hero() {
  return (
    <div className="hero">
      <div className="overlay">
        <h1>Africa</h1>
        <p>Lorem ipsum dolor sit amet.</p>

        <div className="search-box">
          <input placeholder="Город или регион" />
          <input placeholder="Дата" />
          <input placeholder="Куда" />
          <button>🔍</button>
        </div>
      </div>
    </div>
  );
}