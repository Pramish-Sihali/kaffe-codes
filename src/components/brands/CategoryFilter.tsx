"use client";


const CategoryFilter = ({ 
    categories,
    selectedCategory,
    onCategoryClick
  }: {
    categories: string[];
    selectedCategory: string;
    onCategoryClick: (category: string) => void;
  }) => {
    return (
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryClick(category)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
              selectedCategory === category
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    );
  };

  export default CategoryFilter;