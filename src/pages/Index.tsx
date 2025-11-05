import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategorySidebar from "@/components/CategorySidebar";
import WeaponCard from "@/components/WeaponCard";
import { weapons } from "@/data/weapons";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredWeapons = selectedCategory 
    ? weapons.filter(weapon => weapon.category === selectedCategory)
    : weapons;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            Каталог оружия
          </h1>
          <p className="text-xl text-muted-foreground">
            Профессиональное оружие для специалистов
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <CategorySidebar 
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                Найдено товаров: <span className="font-bold text-foreground">{filteredWeapons.length}</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWeapons.map((weapon) => (
                <WeaponCard key={weapon.id} weapon={weapon} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
