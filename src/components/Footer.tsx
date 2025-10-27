import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground font-playfair">
              Crêperie des Grèves
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p>23 Rue des Grèves</p>
                  <p>22360 Langueux, France</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+33296000000" className="hover:text-primary transition-smooth">
                  02 96 00 00 00
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mardi - Dimanche</p>
                  <p>12h00 - 14h00 • 19h00 - 21h30</p>
                  <p className="text-xs mt-1 italic">Fermé lundi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground font-playfair">
              Navigation
            </h3>
            <nav className="space-y-2 text-sm">
              <Link
                to="/"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Accueil
              </Link>
              <Link
                to="/la-creperie"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                La Crêperie
              </Link>
              <Link
                to="/menu"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Notre Menu
              </Link>
              <Link
                to="/galerie"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Galerie
              </Link>
              <Link
                to="/contact"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Réservation & Contact
              </Link>
            </nav>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground font-playfair">
              À propos
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Restaurant breton traditionnel depuis 1995. Galettes de sarrasin et crêpes
              sucrées préparées avec des produits frais et locaux.
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.6/5</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Crêperie des Grèves. Tous droits réservés.{" "}
            <Link to="/mentions-legales" className="hover:text-primary transition-smooth">
              Mentions légales
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
