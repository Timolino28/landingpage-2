"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="w-full bg-black">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm text-limone border-limone py-2 px-4">
            <span>Bring Deine Dienstleistung aufs nächste Level</span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-white text-4xl md:text-6xl font-bold">
            <h1>
              Wir steigern Deinen Umsatz in den nächsten
              <span className="text-transparent px-2 bg-gradient-to-r from-limone to-[#FFFFFF] bg-clip-text">
                6 Wochen
              </span>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-primary-foreground/60">
            Durch die Erstellung eines verkaufsfähiges Angebots setzen wir Dich von Deiner Konkurrenz ab.
            <br /> Du zahlst erst, wenn Du Ergebnisse siehst - versprochen!
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-fit md:w-fit font-bold bg-limone text-black">
              Kostenloses Erstgespräch buchen
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
