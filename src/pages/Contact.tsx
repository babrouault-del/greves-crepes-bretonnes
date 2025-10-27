import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande de réservation envoyée !",
      description: "Nous vous confirmerons votre réservation par téléphone dans les plus brefs délais.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
                Réservation & Contact
              </h1>
              <p className="text-lg text-muted-foreground">
                Réservez votre table ou contactez-nous pour toute question
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <div className="bg-card rounded-lg shadow-soft p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6 font-playfair">
                    Réserver une table
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="votre@email.fr"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="06 00 00 00 00"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Date *</Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Heure *</Label>
                        <Input
                          id="time"
                          name="time"
                          type="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guests">Nombre de personnes *</Label>
                      <Input
                        id="guests"
                        name="guests"
                        type="number"
                        min="1"
                        max="20"
                        required
                        value={formData.guests}
                        onChange={handleChange}
                        placeholder="2"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message (optionnel)</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Demandes particulières, allergies..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 shadow-warm">
                      Envoyer la demande de réservation
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Nous vous confirmerons votre réservation par téléphone
                    </p>
                  </form>
                </div>
              </div>

              {/* Contact Info & Map */}
              <div className="space-y-8 animate-slide-up">
                {/* Contact Info */}
                <div className="bg-card rounded-lg shadow-soft p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6 font-playfair">
                    Nos coordonnées
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Adresse</p>
                        <p className="text-muted-foreground">23 Rue des Grèves</p>
                        <p className="text-muted-foreground">22360 Langueux, France</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Téléphone</p>
                        <a
                          href="tel:+33296000000"
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          02 96 00 00 00
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <a
                          href="mailto:contact@creperie-des-greves.fr"
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          contact@creperie-des-greves.fr
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground mb-2">Horaires d'ouverture</p>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p>Mardi - Dimanche</p>
                          <p>12h00 - 14h00</p>
                          <p>19h00 - 21h30</p>
                          <p className="italic text-xs mt-2">Fermé le lundi</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Maps */}
                <div className="bg-card rounded-lg shadow-soft overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2668.8!2d-2.7!3d48.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDMwJzAwLjAiTiAywrA0MicwMC4wIlc!5e0!3m2!1sfr!2sfr!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Carte de localisation de la Crêperie des Grèves"
                  ></iframe>
                </div>

                {/* Access Info */}
                <div className="bg-accent/20 rounded-lg p-6">
                  <h3 className="font-bold text-foreground mb-2">Accès & Stationnement</h3>
                  <p className="text-sm text-muted-foreground">
                    Parking gratuit disponible à proximité. La crêperie est facilement
                    accessible en voiture depuis Saint-Brieuc (5 minutes).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
