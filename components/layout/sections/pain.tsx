import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface PainProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: PainProps[] = [
  {
    icon: "TrendingDown",
    title: "Preiskampf",
    description:
      "Du wirst ständig mit billigeren Konkurrenten verglichen. Deine Expertise wird nicht wahrgenommen, und Du musst mit dem Preis runter.",
  },
  {
    icon: "Calendar",
    title: "Leere Kalender",
    description:
      "Trotz harter Arbeit ist Dein Kalender oft leer. Du weißt nicht, woher die nächsten Kunden kommen sollen.",
  },
  {
    icon: "Wallet",
    title: "Wenig Abschlüsse",
    description:
      "Du hast viele Gespräche, doch am Ende kommt wenig dabei rum. Du weißt nicht, woran es liegt.",
  },
  {
    icon: "Sparkle",
    title: "Kein Mehrwert",
    description:
      "Du verkaufst einfach Deine Dienstleistung, statt Ergebnisse. Mögliche Kunden sehen Dich als 'nur ein weiterer Anbieter'.",
  },
];

export const PainSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-violett mb-2 tracking-wider">Das Problem</h2>

          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
            Kommt Dir das bekannt vor?
          </h2>
          <p className="text-xl text-white/60 mb-8">
            Du verfolgst Deinen Traum von der Selbstständigkeit, arbeitest viel und opferst Dich auf. Jeden Monat wird die Umsatzuhr auf 0 gestellt und Du hoffst, sie irgendwie wieder aufgedreht zu bekommen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }) => (
            <Card
              key={title}
              className="bg-violett/30 border-solid border-violett/70 hover:border-violett transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="#7D39EB"
                    className="mb-6 text-primary"
                  />
                </div>

                <CardTitle className="text-white">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-white/60">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
