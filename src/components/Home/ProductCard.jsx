const ProductCard = ({ recipe }) => {
  const ingredients = Array.isArray(recipe.ingredients) ? recipe.ingredients : [];
  const tags = Array.isArray(recipe.tags) ? recipe.tags.slice(0, 2) : [];
  const duration =
    Number(recipe.duration) ||
    Number(recipe.prepTimeMinutes || 0) + Number(recipe.cookTimeMinutes || 0);
  const description =
    recipe.description ||
    (ingredients.length
      ? `Made with ${ingredients.slice(0, 3).join(", ")}${ingredients.length > 3 ? " and more." : "."
      }`
      : "A delicious recipe to try at home.");

  return (
    <article className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
      {recipe.image ? (
        <img
          alt={recipe.name || "Recipe"}
          className="h-36 w-full object-cover"
          loading="lazy"
          src={recipe.image}
        />
      ) : (
        <div className="h-36 bg-gray-100" />
      )}
      <div className="p-4">
        <h2 className="line-clamp-1 text-lg font-bold text-gray-900">
          {recipe.name || "Untitled recipe"}
        </h2>
        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-gray-500">
          {description}
        </p>

        <div className="mt-3 flex min-h-6 flex-wrap items-center gap-2">
          {tags.map((tag, index) => (
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-semibold ${index === 0
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-sky-100 text-sky-700"
                }`}
              key={`${tag}-${index}`}
            >
              {tag}
            </span>
          ))}
          {duration > 0 && (
            <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800">
              {duration} mins
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-col md:flex-row gap-2">
          <span className="inline-flex flex-1 items-center justify-center rounded-full bg-yellow-400 px-3 py-2 text-sm font-bold text-gray-900">
            View Recipe
          </span>
          <span className="inline-flex flex-1 items-center justify-center rounded-full border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-gray-800">
            Save
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
