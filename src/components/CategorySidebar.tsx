import { categories } from "@/data/weapons";
import { cn } from "@/lib/utils";

interface CategorySidebarProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategorySidebar = ({ selectedCategory, onSelectCategory }: CategorySidebarProps) => {
  return (
    <aside className="w-full md:w-64 bg-card rounded-lg p-6 h-fit sticky top-24">
      <h2 className="text-xl font-bold mb-4 text-foreground">Категории</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => onSelectCategory(null)}
              className={cn(
                "w-full text-left px-4 py-2 rounded-lg transition-all",
                selectedCategory === null 
                  ? "bg-primary text-primary-foreground font-semibold" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <span className="mr-2">Все товары</span>
            </button>
          </li>
          {categories.map((category, index) => (
            <li key={category.id}>
              <button
                onClick={() => onSelectCategory(category.name)}
                className={cn(
                  "w-full text-left px-4 py-2 rounded-lg transition-all",
                  selectedCategory === category.name 
                    ? "bg-primary text-primary-foreground font-semibold" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <span className="mr-2">{index + 1}.</span>
                {category.name}
                <span className="ml-2 text-sm opacity-70">({category.count})</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default CategorySidebar;
