import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <Link
      to={`/product/${data.id}`}
      className="border border-gray-300 rounded-xl group overflow-hidden hover:shadow-lg transition-shadow"
    >
      <figure className="px-4 pt-4 overflow-hidden flex justify-center items-center bg-white">
        <img
          className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
          src={data.image}
          alt={data.title}
        />
      </figure>

      <div className="p-3">
        <h3 className="text-lg font-semibold line-clamp-1">{data.title}</h3>
        <p className="text-red-600 font-bold mt-1">${data.price}</p>
      </div>
    </Link>
  );
}

export default Card;
