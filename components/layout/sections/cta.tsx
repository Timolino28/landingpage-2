import DiscordIcon from "@/components/icons/discord-icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CallToAction = () => {
  return (
    <section id="community" className="py-12 bg-limone">
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-neutral-900 border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <DiscordIcon color="white" />
                <div className="text-white">
                  Bist Du bereit für
                  <span className="text-violett pl-2  bg-clip-text">
                    Wachstum?
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Buche jetzt Dein kostenloses Erstgespräch.
            </CardContent>

            <CardFooter>
              <Button asChild className="bg-limone text-black">
                <a href="#" target="_blank">
                  Zur Buchung
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
