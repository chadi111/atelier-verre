import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const FORMSPREE_URL = "https://formspree.io/f/xwvgvarn";

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="font-serif text-4xl text-foreground">Contact</h1>
      <p className="mt-4 text-muted-foreground">
        Une question sur votre projet de cuisine ? Ecrivez-nous.
      </p>

      {status === "sent" ? (
        <p className="mt-8 rounded-md bg-accent p-4 text-foreground">
          Merci, votre message a bien été envoyé !
        </p>
      ) : (
<form
  onSubmit={handleSubmit}
  action={FORMSPREE_URL}
  method="POST"
  className="mt-8 flex flex-col gap-4"
>          <div>
            <label className="block text-sm font-medium text-foreground">Nom</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 w-full rounded-md border border-input px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-md border border-input px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="mt-1 w-full rounded-md border border-input px-3 py-2"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
          >
            {status === "sending" ? "Envoi..." : "Envoyer"}
          </button>
          {status === "error" && (
            <p className="text-sm text-red-600">
              Une erreur est survenue, réessayez plus tard.
            </p>
          )}
        </form>
      )}
    </main>
  );
}