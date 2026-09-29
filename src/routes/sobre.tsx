import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { GraduationCap, Heart, Star } from "lucide-react";

import thaisFoto from "@/assets/thais-foto.jpg.asset.json";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Thais Cerqueira, Psicopedagoga" },
      {
        name: "description",
        content:
          "Conheça Thais Cerqueira, psicopedagoga clínica e institucional dedicada a compreender, acolher e favorecer a aprendizagem de cada paciente.",
      },
      { property: "og:title", content: "Sobre — Thais Cerqueira, Psicopedagoga" },
      {
        property: "og:description",
        content:
          "Psicopedagoga clínica e institucional, com um olhar individualizado para cada paciente.",
      },
    ],
  }),
  component: Sobre,
});

const pilares = [
  {
    icon: Heart,
    titulo: "Acolhimento",
    texto:
      "Escuta sem julgamentos, para que paciente e família se sintam seguros desde a primeira conversa.",
  },
  {
    icon: Star,
    titulo: "Individualidade",
    texto:
      "Nenhum plano de trabalho é igual a outro: cada paciente tem sua história, seu ritmo e suas possibilidades.",
  },
  {
    icon: GraduationCap,
    titulo: "Parceria",
    texto:
      "Família e escola são parte essencial do processo — o trabalho caminha junto, com objetivos claros.",
  },
];

function Sobre() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50rem 30rem at 90% -20%, var(--color-rose-soft) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-rose-soft/60" aria-hidden />
            <img
              src={thaisFoto.url}
              alt="Thais Cerqueira, psicopedagoga"
              className="relative aspect-[3/4] w-full rounded-[2rem] object-cover shadow-lg"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Sobre
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-foreground sm:text-5xl">
              Thais Cerqueira
            </h1>
            <p className="mt-2 text-lg font-semibold text-primary">
              Psicopedagoga — Clínica e Institucional
            </p>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Psicopedagoga dedicada a compreender os caminhos — e os obstáculos
                — da aprendizagem. Seu trabalho nasce da escuta atenta da história
                de cada paciente e se apoia em investigação rigorosa, intervenção
                individualizada e diálogo constante com famílias e escolas.
              </p>
              <p>
                Acredita que toda criança pode aprender quando é compreendida em
                sua individualidade e acolhida emocionalmente. Por isso, une
                técnica e sensibilidade para transformar dificuldades em
                conquistas.
              </p>
            </div>
            <blockquote className="mt-8 rounded-2xl border-l-4 border-gold bg-card px-6 py-5 font-display text-xl italic leading-relaxed text-foreground">
              "Aprender é transformar possibilidades em conquistas."
            </blockquote>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-3">
          {pilares.map((pilar) => (
            <div
              key={pilar.titulo}
              className="rounded-2xl border border-border bg-card p-7 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <pilar.icon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="mt-4 font-display text-xl font-semibold text-foreground">
                {pilar.titulo}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pilar.texto}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/contato"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Agendar uma conversa
          </Link>
        </div>
      </section>
    </div>
  );
}
