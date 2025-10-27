import Header from "@/components/Header";
import Footer from "@/components/Footer";
import exteriorImage from "@/assets/creperie-exterior.png";
import interiorImage from "@/assets/interior.jpg";
import galetteImage from "@/assets/galette-complete.jpg";
import crepeImage from "@/assets/crepe-caramel.jpg";
import cidreImage from "@/assets/cidre-breton.jpg";
import heroImage from "@/assets/hero-crepes.jpg";
import galetteCaramelChantilly from "@/assets/galette-caramel-chantilly.jpg";
import galetteSaumon from "@/assets/galette-saumon.jpg";
import dessertsAssortis from "@/assets/desserts-assortis.jpg";
import galetteFromage from "@/assets/galette-fromage.jpg";
import crepeChocolat from "@/assets/crepe-chocolat.jpg";

const galleryImages = [
  {
    src: exteriorImage,
    alt: "Façade de la Crêperie des Grèves avec ses volets rouge terre cuite",
    category: "Extérieur",
  },
  {
    src: interiorImage,
    alt: "Intérieur chaleureux de la crêperie avec murs en pierre",
    category: "Ambiance",
  },
  {
    src: galetteImage,
    alt: "Galette complète avec œuf, jambon et fromage",
    category: "Galettes",
  },
  {
    src: galetteCaramelChantilly,
    alt: "Galette sucrée au caramel avec chantilly maison",
    category: "Galettes",
  },
  {
    src: galetteSaumon,
    alt: "Galette au saumon fumé et œufs",
    category: "Galettes",
  },
  {
    src: galetteFromage,
    alt: "Galette burger au fromage fondant",
    category: "Galettes",
  },
  {
    src: crepeImage,
    alt: "Crêpe au caramel beurre salé maison",
    category: "Crêpes",
  },
  {
    src: crepeChocolat,
    alt: "Crêpe au chocolat généreusement garnie",
    category: "Crêpes",
  },
  {
    src: dessertsAssortis,
    alt: "Assortiment de desserts bretons maison",
    category: "Desserts",
  },
  {
    src: cidreImage,
    alt: "Sélection de cidres bretons artisanaux",
    category: "Boissons",
  },
  {
    src: heroImage,
    alt: "Assortiment de galettes et crêpes sur ardoise",
    category: "Spécialités",
  },
];

const Galerie = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
                Galerie Photos
              </h1>
              <p className="text-lg text-muted-foreground">
                Découvrez en images l'ambiance chaleureuse de notre crêperie et nos
                délicieuses spécialités bretonnes
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-warm transition-smooth animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                      <span className="inline-block px-3 py-1 bg-primary rounded-full text-sm font-medium mb-2">
                        {image.category}
                      </span>
                      <p className="text-sm">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-soft p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4 font-playfair">
                Venez découvrir nos spécialités !
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Réservez dès maintenant votre table pour vivre l'expérience Crêperie des
                Grèves
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-smooth shadow-warm font-medium"
                >
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Galerie;
