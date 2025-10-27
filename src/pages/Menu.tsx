import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuSections = [
  {
    title: "Nos Galettes de Sarrasin",
    items: [
      { name: "Galette Complète", description: "Œuf, jambon, fromage", price: "9,50 €" },
      { name: "Galette Forestière", description: "Champignons, lardons, crème, fromage", price: "10,50 €" },
      { name: "Galette Océane", description: "Saumon fumé, crème fraîche, aneth", price: "11,50 €" },
      { name: "Galette Chèvre Miel", description: "Fromage de chèvre, miel, noix", price: "10,00 €" },
      { name: "Galette Savoyarde", description: "Reblochon, pommes de terre, lardons", price: "11,00 €" },
      { name: "Galette Végétarienne", description: "Légumes de saison, fromage", price: "9,50 €" },
    ],
  },
  {
    title: "Nos Crêpes Sucrées",
    items: [
      { name: "Crêpe Caramel Beurre Salé", description: "Notre spécialité maison", price: "6,50 €" },
      { name: "Crêpe Sucre", description: "Classique et intemporelle", price: "4,50 €" },
      { name: "Crêpe Nutella", description: "Pour les gourmands", price: "5,50 €" },
      { name: "Crêpe Pommes Cannelle", description: "Pommes poêlées, cannelle, caramel", price: "7,00 €" },
      { name: "Crêpe Belle-Hélène", description: "Poire, chocolat, amandes", price: "7,50 €" },
      { name: "Crêpe Flambée", description: "Grand Marnier ou Calvados", price: "8,00 €" },
    ],
  },
  {
    title: "Nos Boissons",
    items: [
      { name: "Cidre Brut", description: "Breton traditionnel", price: "4,00 €" },
      { name: "Cidre Doux", description: "Pour les palais délicats", price: "4,00 €" },
      { name: "Jus de Pomme Artisanal", description: "100% pur jus breton", price: "3,50 €" },
      { name: "Bière Bretonne", description: "Sélection locale", price: "5,00 €" },
      { name: "Café Gourmand", description: "Café & assortiment de mini-crêpes", price: "7,00 €" },
    ],
  },
  {
    title: "Menu Enfant",
    items: [
      { name: "Menu P'tit Breton", description: "1 galette au choix + 1 crêpe sucrée + boisson", price: "10,00 €" },
    ],
  },
];

const Menu = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
                Notre Carte
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Découvrez nos galettes et crêpes préparées avec des produits frais et
                locaux
              </p>
              <Button variant="outline" className="shadow-soft">
                <Download className="mr-2 h-4 w-4" />
                Télécharger le menu PDF
              </Button>
            </div>
          </div>
        </section>

        {/* Menu Sections */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-16">
              {menuSections.map((section, sectionIndex) => (
                <div
                  key={section.title}
                  className="animate-slide-up"
                  style={{ animationDelay: `${sectionIndex * 100}ms` }}
                >
                  <h2 className="text-3xl font-bold text-foreground mb-8 text-center font-playfair">
                    {section.title}
                  </h2>
                  <div className="bg-card rounded-lg shadow-soft p-8">
                    <div className="space-y-6">
                      {section.items.map((item) => (
                        <div
                          key={item.name}
                          className="flex justify-between items-start gap-4 pb-6 border-b border-border last:border-0 last:pb-0"
                        >
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-foreground mb-1">
                              {item.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                          <div className="text-lg font-bold text-primary whitespace-nowrap">
                            {item.price}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-soft p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-playfair">
                Informations importantes
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  🌾 Toutes nos galettes sont préparées à base de farine de sarrasin
                  bretonne 100% sans gluten
                </p>
                <p>
                  🥛 Allergies et intolérances : merci de nous signaler toute allergie
                  alimentaire
                </p>
                <p>
                  🍽️ Les prix sont indicatifs et peuvent varier selon la saison et la
                  disponibilité des produits
                </p>
                <p className="text-sm italic pt-4">
                  Tous nos plats sont faits maison avec des produits frais. L'attente en
                  vaut la peine !
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Menu;
