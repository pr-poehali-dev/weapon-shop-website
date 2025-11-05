import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-primary p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Icon name="Target" className="text-primary-foreground" size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">АРСЕНАЛ</h1>
              <p className="text-xs text-muted-foreground">Магазин профессионального оружия</p>
            </div>
          </Link>
          
          <div className="flex items-center gap-6">
            <a href="tel:+79991234567" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Icon name="Phone" size={20} />
              <span className="hidden md:inline">+7 (999) 123-45-67</span>
            </a>
            <a href="mailto:info@arsenal-weapons.ru" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Icon name="Mail" size={20} />
              <span className="hidden md:inline">info@arsenal-weapons.ru</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
