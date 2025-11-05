import { useParams, Link } from "react-router-dom";
import { weapons } from "@/data/weapons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const WeaponDetail = () => {
  const { id } = useParams();
  const weapon = weapons.find(w => w.id === Number(id));

  if (!weapon) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Оружие не найдено</h1>
          <Link to="/">
            <Button>Вернуться в каталог</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <Icon name="ArrowLeft" size={20} />
          <span>Назад в каталог</span>
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-muted rounded-lg overflow-hidden">
            <img 
              src={weapon.image} 
              alt={weapon.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                {weapon.category}
              </span>
            </div>
            
            <h1 className="text-4xl font-bold mb-6 text-foreground">
              {weapon.name}
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              {weapon.description}
            </p>

            <Card className="mb-8 bg-card border-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-foreground">Характеристики</h2>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Калибр:</span>
                    <span className="font-semibold text-foreground">{weapon.caliber}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Вес:</span>
                    <span className="font-semibold text-foreground">{weapon.weight}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Длина:</span>
                    <span className="font-semibold text-foreground">{weapon.length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Цена</p>
                <p className="text-4xl font-bold text-primary">{weapon.price}</p>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Оформить заказ
              </Button>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2 text-foreground">
                <Icon name="Info" size={20} className="text-primary" />
                Важная информация
              </h3>
              <p className="text-sm text-muted-foreground">
                Продажа оружия осуществляется только при наличии соответствующих лицензий и разрешительных документов. 
                Перед покупкой необходимо предоставить все необходимые документы согласно законодательству РФ.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WeaponDetail;
