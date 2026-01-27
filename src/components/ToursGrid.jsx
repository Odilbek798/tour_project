import TourCard from "./TourCard";

const tours = [
  {
    image: "https://images.unsplash.com/photo-1549366021-9f761d040a94",
    title: "Частные заповедники Саби-Сэндс (Южный регион)",
    days: 3,
    nights: 2,
    meals: 5,
    price: 5745,
  },
  {
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Частные заповедники национального парка Крюгер",
    days: 3,
    nights: 2,
    meals: 5,
    price: 3460,
  },
  {
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
    title: "Частные резервации Тимбавати",
    days: 3,
    nights: 2,
    meals: 5,
    price: 1985,
  },
];

export default function ToursGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-8">
        {tours.map((tour, i) => (
          <TourCard key={i} {...tour} />
        ))}
      </div>
    </section>
  );
}