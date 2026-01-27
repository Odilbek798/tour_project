export default function TourCard({ image, title, days, nights, meals, price }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <span className="inline-block text-xs bg-gray-200 px-3 py-1 rounded-full mb-3">
          САФАРИ
        </span>

        <h3 className="text-lg font-semibold mb-3">
          {title}
        </h3>

        <div className="text-sm text-gray-600 space-y-1 mb-4">
          <p>• {days} дня</p>
          <p>• {nights} ночи</p>
          <p>• {meals} приёмов пищи</p>
        </div>

        <div className="flex justify-between items-center border-t pt-4">
          <span className="text-gray-500 text-sm">От</span>
          <span className="text-xl font-bold">
            {price} $
          </span>
        </div>
      </div>
    </div>
  );
}