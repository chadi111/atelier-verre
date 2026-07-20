import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const sections = [
  {
    title: "Qui sommes-nous",
    content:
      "Atelier Verre est un studio d architecture specialise dans la conception de cuisines sur mesure. Notre equipe combine expertise technique et sensibilite artistique.",
  },
  {
    title: "Notre processus",
    content:
      "Tout commence par un echange pour cerner vos besoins. Nous concevons ensuite votre cuisine en 3D, vous la visitez en realite virtuelle, puis notre equipe la construit.",
  },
  {
    title: "Nos services",
    content:
      "Conception de cuisines sur mesure, architecture d interieur, modelisation 3D et visite en realite virtuelle, coordination des travaux jusqu a la livraison.",
  },
  {
    title: "Questions frequentes",
    content:
      "Combien de temps prend un projet ? En general 3 a 6 mois. Peut on visiter la cuisine avant les travaux ? Oui, grace a notre visite en realite virtuelle.",
  },
];

function HomePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="font-serif text-5xl text-foreground">Atelier Verre</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Architecture, design et réalité virtuelle pour cuisines d'exception.
        Nous concevons votre cuisine, vous la visitez en réalité virtuelle,
        puis nous la transformons en réalité.
      </p>

      <div className="mt-6 w-full max-w-xl">
        {sections.map((section, index) => (
          <div key={section.title} className="border-t border-input">
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="flex w-full items-center justify-between py-4 text-left text-foreground"
            >
              <span className="font-medium">{section.title}</span>
              <span
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>
            {openIndex === index && (
              <p className="pb-4 text-sm text-muted-foreground">
                {section.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}