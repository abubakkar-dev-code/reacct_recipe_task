import React, { useState } from "react";
import {
  FaStar,
  FaClock,
  FaFire,
  FaUtensils,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";

const ProductCard = ({ recipe = {} }) => {
  const [isSaved, setIsSaved] = useState(false);

  const ingredients = Array.isArray(recipe.ingredients) ? recipe.ingredients : [];
  const tags = Array.isArray(recipe.tags) ? recipe.tags.slice(0, 2) : [];
  const duration =
    Number(recipe.duration) ||
    Number(recipe.prepTimeMinutes || 0) + Number(recipe.cookTimeMinutes || 0);
  const description =
    recipe.description ||
    (ingredients.length
      ? `Made with ${ingredients.slice(0, 3).join(", ")}${
          ingredients.length > 3 ? " and more." : "."
        }`
      : "A delicious recipe to try at home.");

  return (
    <article className="group grid h-full w-full grid-rows-[auto_1fr] overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        {recipe.image ? (
          <img
            alt={recipe.name || "Recipe"}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            src={recipe.image}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100 text-sm text-gray-400">
            No image available
          </div>
        )}
        {recipe.rating ? (
          <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-gray-800 shadow-sm backdrop-blur-xs">
            <FaStar className="text-amber-500" size={11} />
            <span>{Number(recipe.rating).toFixed(1)}</span>
            {recipe.reviewCount ? (
              <span className="text-[10px] font-normal text-gray-400">
                ({recipe.reviewCount})
              </span>
            ) : null}
          </div>
        ) : null}
        <button
          aria-label={isSaved ? "Remove from saved recipes" : "Save recipe"}
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 shadow-sm backdrop-blur-xs transition-transform hover:scale-110 active:scale-95 cursor-pointer"
          onClick={() => setIsSaved((prev) => !prev)}
          type="button"
        >
          {isSaved ? (
            <FaBookmark className="text-yellow-500" size={13} />
          ) : (
            <FaRegBookmark className="text-gray-500 hover:text-gray-900" size={13} />
          )}
        </button>
        {recipe.cuisine ? (
          <span className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-xs">
            {recipe.cuisine}
          </span>
        ) : null}
      </div>
      <div className="grid grid-rows-[auto_auto_auto_1fr_auto] gap-3 p-5">
        <div className="flex flex-wrap items-center gap-1.5">
          {tags.map((tag, index) => (
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                index === 0
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                  : "bg-sky-50 text-sky-700 border border-sky-100"
              }`}
              key={`${tag}-${index}`}
            >
              #{tag}
            </span>
          ))}
        </div>
        <h2
          className="line-clamp-1 text-lg font-bold text-gray-900 transition-colors group-hover:text-yellow-600"
          title={recipe.name}
        >
          {recipe.name || "Untitled recipe"}
        </h2>
        <p className="line-clamp-2 text-sm leading-relaxed text-gray-500">
          {description}
        </p>
        <div className="grid grid-cols-3 divide-x divide-gray-100 rounded-xl bg-gray-50/80 p-2 text-center text-xs self-center">
          <div className="flex flex-col items-center justify-center px-1">
            <span className="text-[10px] font-medium text-gray-400">Total Time</span>
            <span className="mt-0.5 flex items-center gap-1 font-bold text-gray-800">
              <FaClock className="text-amber-500" size={10} />
              {duration > 0 ? `${duration}m` : "25m"}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center px-1">
            <span className="text-[10px] font-medium text-gray-400">Difficulty</span>
            <span className="mt-0.5 flex items-center gap-1 font-bold text-gray-800">
              <FaUtensils className="text-emerald-500" size={10} />
              {recipe.difficulty || "Easy"}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center px-1">
            <span className="text-[10px] font-medium text-gray-400">Calories</span>
            <span className="mt-0.5 flex items-center gap-1 font-bold text-gray-800">
              <FaFire className="text-orange-500" size={10} />
              {recipe.caloriesPerServing ? `${recipe.caloriesPerServing}` : "320"}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2.5 pt-2">
          <button
            className="flex items-center justify-center rounded-xl bg-yellow-400 py-2.5 px-3 text-center text-sm font-bold text-gray-900 shadow-xs transition-all hover:bg-yellow-500 active:scale-[0.98] cursor-pointer"
            type="button"
          >
            View Recipe
          </button>
          <button
            aria-label={isSaved ? "Saved" : "Save recipe"}
            className={`flex items-center justify-center gap-1.5 rounded-xl border py-2.5 px-3 text-sm font-semibold transition-all active:scale-[0.98] cursor-pointer ${
              isSaved
                ? "border-yellow-400 bg-yellow-50 text-yellow-800"
                : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
            }`}
            onClick={() => setIsSaved((prev) => !prev)}
            type="button"
          >
            {isSaved ? (
              <FaBookmark className="text-yellow-600" size={12} />
            ) : (
              <FaRegBookmark className="text-gray-500" size={12} />
            )}
            <span>{isSaved ? "Saved" : "Save"}</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
