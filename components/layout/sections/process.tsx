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
      "Wir analysieren Dein bestehendes Angebot und identifizieren die Lücken. Wo lässt Du Geld liegen? Wo ist die Positionierung unscharf?",
  },
  {
    icon: "Goal",
    title: "Erstellung 'Volltreffer-Angebot'",
    description:
      "Wir entwicklen ein maßgeschneidertes, unwiderstehliches Angebot für Dich, das Deine Interessenten nur schwer ablehnen können.",
  },
  {
    icon: "PictureInPicture",
    title: "Zahlung erst bei Erfolg",
    description:
      "Du zahlst nur, wenn Du Resultate siehst. Das ist unsere Verpflichtung anderen Unternehmern zu helfen.",
  },

];

export const ProcessSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-limone text-center mb-2 tracking-wider">
        Die Lösung
      </h2>

      <h2 className="text-3xl text-white md:text-4xl text-center font-bold mb-4">
        Wie wir Dir helfen
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-white/60 mb-8">
        Unser Ansatz, der auch Dich hoffentlich auf das nächste Level bringen wird.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-limone/30 border-solid border-limone/70 hover:border-limone transition-all delay-75 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-limone/20 p-2 rounded-full ring-8 ring-limone/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="#C6FF33"
                    className="text-limone"
                  />
                </div>

                <CardTitle className="text-white">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-white/60 text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
