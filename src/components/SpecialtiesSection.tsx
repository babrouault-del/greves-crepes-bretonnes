import galetteImage from "@/assets/galette-complete.jpg";
import crepeImage from "@/assets/crepe-caramel.jpg";
import cidreImage from "@/assets/cidre-breton.jpg";

const specialties = [
  {
    title: "Galette Complète",
    description: "Œuf, jambon, fromage sur galette de sarrasin bretonne",
    image: galetteImage,
  },
  {
    title: "Crêpe Caramel Beurre Salé",
    description: "Notre caramel maison au beurre salé de Bretagne",
    image: crepeImage,
  },
  {
    title: "Cidre Artisanal",
    description: "Sélection de cidres bretons traditionnels",
    image: cidreImage,
  },
];

const SpecialtiesSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-playfair">
            Nos Spécialités
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos créations gourmandes préparées avec des produits frais et
            locaux
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {specialties.map((specialty, index) => (
            <div
              key={specialty.title}
              className="group bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-warm transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={specialty.image}
                  alt={specialty.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 font-playfair">
                  {specialty.title}
                </h3>
                <p className="text-muted-foreground">{specialty.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
