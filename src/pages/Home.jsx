import React, { useState } from "react";
import ProductCard from "../components/Home/ProductCard";
import useFetch from "../hooks/UseFetch";

const Home = () => {
    const { data, loading, errors } = useFetch("https://dummyjson.com/recipes");
    const [currentPage, setCurrentPage] = useState(1);
    const recipes = Array.isArray(data)
        ? data
        : Array.isArray(data?.recipes)
            ? data.recipes
            : [];
    const totalPages = Math.ceil(recipes.length / 6);
    const visibleRecipes = recipes.slice((currentPage - 1) * 6, currentPage * 6);
    console.log(visibleRecipes);

    return (
        <main className="min-h-screen bg-[#fafafa] px-6 py-8">
            <div className="mx-auto max-w-6xl">
                <h1 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                    Recipe Results
                </h1>

                {loading ? (
                    <p className="py-12 text-center text-gray-500">Loading recipes...</p>
                ) : errors ? (
                    <p className="py-12 text-center text-red-600" role="alert">
                        Could not load recipes: {errors}
                    </p>
                ) : recipes.length === 0 ? (
                    <p className="py-12 text-center text-gray-500">No recipes found.</p>
                ) : (
                    <>
                        <section
                            aria-label="Recipe results"
                            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            {visibleRecipes.map((recipe) => (
                                <ProductCard key={recipe.id} recipe={recipe} />
                            ))}
                        </section>

                        {totalPages > 1 && (
                            <nav
                                aria-label="Recipe pagination"
                                className="mt-8 flex items-center justify-center gap-5"
                            >
                                <button
                                    className="rounded-full bg-yellow-400 px-5 py-2 text-sm font-bold text-gray-900 transition-colors hover:bg-yellow-500 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
                                    disabled={currentPage === 1}
                                    onClick={() =>
                                        setCurrentPage((page) => Math.max(1, page - 1))
                                    }
                                    type="button"
                                >
                                    Previous
                                </button>
                                <span aria-live="polite" className="text-sm font-semibold text-gray-700">
                                    Page {currentPage} of {totalPages}
                                </span>
                                <button
                                    className="rounded-full bg-yellow-400 px-5 py-2 text-sm font-bold text-gray-900 transition-colors hover:bg-yellow-500 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
                                    disabled={currentPage === totalPages}
                                    onClick={() =>
                                        setCurrentPage((page) => Math.min(totalPages, page + 1))
                                    }
                                    type="button"
                                >
                                    Next
                                </button>
                            </nav>
                        )}
                    </>
                )}
            </div>
        </main>
    );
};

export default Home;