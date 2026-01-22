import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Ist das Erstegspräch wirklich kostenlos?",
    answer: "Ja. Dieses Versprechen ist kein Köder, sondern Tatsache. Das Erstgespräch und auch alle weiteren Folgegespräche sind ohne Kosten für Dich.",
    value: "item-1",
  },
  {
    question: "Wie läuft die Zusammenarbeit ab?",
    answer:
      "Nach unserem Erstgespräch gehen wir mit den Infos, die Du uns gegeben hast, in die erste Analyse und brainstormen erste Ideen. Sehr wahrscheinlich werden sich bei uns weitere Fragen auftun, die wir telefonisch mit Dir klären. Sobald wir die Strategie für Dich aufgestellt haben, setzen wir sie für Dich um. Ab diesem Zeitpunkt beginnt die 6 Wochenfrist für die Erfolgsmessung.",
    value: "item-2",
  },
  {
    question:
      "Wie messt Ihr 'Erfolg' hinsichtlich der Zahlung Eurer Unterstützung?",
    answer:
      "Wenn Du nach Implementierung unserer Strategie, die wir für Dich ausgearbeitet haben, nach 6 Wochen nicht mindestens 10% Umsatzwachstum siehst, bist Du uns keinen Cent schuldig.",
    value: "item-3",
  },
  {
    question: "Warum macht ihr das?",
    answer: "Wir sind ein junges Unternehmen und müssen selbst noch viel lernen. Mit diesem Ansatz, der für uns funktioniert hat, möchten wir feststellen, ob wir auch anderen Unternehmern helfen können.",
    value: "item-4",
  },
  {
    question:
      "Enim ad minim veniam, quis nostrud exercitation ullamco laboris?",
    answer: "consectetur adipisicing elit. Sint labore.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Häufig gestellte Fragen
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
