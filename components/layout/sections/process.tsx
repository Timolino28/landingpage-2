import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Kostenloses Erstgespräch",
    description:
      "Wir lernen uns kennen. Du buchst einen Termin, und wir sprechen über Deine aktuelle Situation, Ziele und Hürden. Völlig unverbindlich.",
  },
  {
    icon: "BadgeCheck",
    title: "Analyse & Deep Dive",
    description:
      "Wir analysieren Dein bestehendes Angebot und identizieren die Lücken. Wo lässt Du Geld liegen? Wo ist die Positionierung unscharf?",
  },
  {
    icon: "Goal",
    title: "Erstellung 'Volltreffer-Angebot'",
    description:
      "Wir entwicklen ein maßgeschneidertes, unwiderstehliches Angebot für Dich. Auf Wert ausgerichtet, nicht stundenbasiert. Werbetexte inklusive.",
  },
  {
    icon: "PictureInPicture",
    title: "Zahlung erst bei Erfolg",
    description:
      "Du zahlst nur, wenn Du mit dem Ergebnis zu 100% zufrieden bist. Kein Risiko für Dich. Das ist unsere Verpflichtung anderen Unternehmern zu helfen.",
  },

];

export const ProcessSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Die Lösung
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Wie wir Dir helfen
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Unser bewährter Ansatz, der auch Dich auf das nächste Level bringen wird.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
