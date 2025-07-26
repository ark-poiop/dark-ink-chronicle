import { categories } from "@/data/blog-posts";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`
            category-pill transition-all duration-200
            ${selectedCategory === category.id
              ? `${category.color} text-white shadow-md scale-105`
              : "bg-newsletter-surface-elevated text-newsletter-text-secondary hover:bg-newsletter-surface-hover hover:text-newsletter-text-primary"
            }
          `}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;