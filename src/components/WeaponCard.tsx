import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Weapon } from "@/data/weapons";
import Icon from "@/components/ui/icon";

interface WeaponCardProps {
  weapon: Weapon;
}

const WeaponCard = ({ weapon }: WeaponCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover-scale border-border bg-card">
      <Link to={`/weapon/${weapon.id}`}>
        <div className="aspect-video overflow-hidden bg-muted">
          <img 
            src={weapon.image} 
            alt={weapon.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>
      
      <CardContent className="p-6">
        <div className="mb-2">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            {weapon.category}
          </span>
        </div>
        
        <Link to={`/weapon/${weapon.id}`}>
          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
            {weapon.name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Icon name="Circle" size={12} className="text-primary" />
            <span>{weapon.caliber}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Weight" size={12} className="text-primary" />
            <span>{weapon.weight}</span>
          </div>
        </div>
        
        <p className="text-2xl font-bold text-primary">
          {weapon.price}
        </p>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Link to={`/weapon/${weapon.id}`} className="w-full">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Подробнее
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default WeaponCard;
