import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
});

const projects = [
  {
    title: "Cuisine minérale",
    description: "Rénovation intégrale, plan de travail en pierre.",
    image: "https://plus.unsplash.com/premium_photo-1671269942050-df7e96b3e4ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwa2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Cuisine bois clair",
    description: "Conception sur mesure, ilot central.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZXJuJTIwa2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Cuisine ouverte",
    description: "Fusion cuisine / salon, verriere atelier.",
    image: "https://images.unsplash.com/photo-1617228069096-4638a7ffc906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZXJuJTIwa2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

function PortfolioPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="font-serif text-4xl text-foreground">Portfolio</h1>
      <p className="mt-4 text-muted-foreground">
        Une selection de nos realisations recentes.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-lg border border-input"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-lg font-semibold text-foreground">{project.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}