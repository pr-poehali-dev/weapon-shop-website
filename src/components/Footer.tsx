import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">О магазине</h3>
            <p className="text-muted-foreground mb-4">
              Профессиональный магазин оружия с 15-летним опытом работы. 
              Только сертифицированная продукция от ведущих производителей.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="MapPin" size={20} className="text-primary" />
                <span>г. Москва, ул. Оружейная, 15</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Phone" size={20} className="text-primary" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Mail" size={20} className="text-primary" />
                <span>info@arsenal-weapons.ru</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Clock" size={20} className="text-primary" />
                <span>Пн-Пт: 9:00 - 20:00, Сб-Вс: 10:00 - 18:00</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Информация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Доставка и оплата</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Гарантии</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Лицензирование</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Возврат товара</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2024 АРСЕНАЛ. Все права защищены. Продажа оружия осуществляется при наличии соответствующих лицензий.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
