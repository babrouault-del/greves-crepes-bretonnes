import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import ReservationCTA from "@/components/ReservationCTA";
import { Helmet } from "react-helmet";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Crêperie des Grèves",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "23 Rue des Grèves",
      "addressLocality": "Langueux",
      "postalCode": "22360",
      "addressCountry": "FR"
    },
    "servesCuisine": "Crêperie bretonne",
    "telephone": "+33296000000",
    "priceRange": "€",
    "openingHours": "Tu-Su 12:00-14:00, 19:00-21:30",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "bestRating": "5",
      "reviewCount": "127"
    },
    "url": "https://creperie-des-greves.fr"
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <SpecialtiesSection />
        <ReservationCTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
