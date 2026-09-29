import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ClipboardList,
  HeartHandshake,
  Home,
  Lightbulb,
  Search,
  Sparkles,
  Users,
} from "lucide-react";

import thaisFoto from "@/assets/thais-foto.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Thais Cerqueira — Psicopedagoga | Clínica e Institucional",
      },
      {
        name: "description",
        content:
          "Avaliação psicopedagógica, intervenção individualizada e orientação à família e à escola. Um olhar individualizado para compreender, acolher e favorecer a aprendizagem.",
      },
      {
        property: "og:title",
        content: "Thais Cerqueira — Psicopedagoga | Clínica e Institucional",
      },
      {
        property: "og:description",
        content:
          "Um olhar individualizado para compreender, acolher e favorecer a aprendizagem.",
      },
    ],
  }),
  component: Index,
});

const destaques = [
  {
    icon: Search,
    titulo: "Investigação e avaliação",
    texto: "Avaliação psicopedagógica completa para entender como a criança aprende.",
  },
  {
    icon: Lightbulb,
    titulo: "Dificuldades de aprendizagem",
    texto: "Identificação e acompanhamento das dificuldades de leitura, escrita e cálculo.",
  },
  {
    icon: Sparkles,
    titulo: "Intervenção individualizada",
    texto: "Planos de estudo construídos a partir das necessidades de cada aluno.",
  },
  {
    icon: HeartHandshake,
    titulo: "Orientação família e escola",
    texto: "Acompanhamento conjunto para que todos caminhem na mesma direção.",
  },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60rem 40rem at 85% -10%, var(--color-rose-soft) 0%, transparent 60%), radial-gradient(50rem 30rem at -10% 40%, var(--color-accent) 0%, transparent 55%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Psicopedagogia Clínica e Institucional
            </p>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Aprender é transformar{" "}
              <span className="italic text-primary">possibilidades</span> em{" "}
              <span className="italic text-primary">conquistas</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Um olhar individualizado para compreender, acolher e favorecer a
              aprendizagem — respeitando o tempo e a história de cada aluno.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Agendar uma conversa
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                Conhecer os serviços
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-rose-soft/60" aria-hidden />
            <img
              src={thaisFoto.url}
              alt="Thais Cerqueira, psicopedagoga, em seu consultório"
              className="relative aspect-[3/4] w-full rounded-[2rem] object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destaques.map((item) => (
            <div
              key={item.titulo}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                {item.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre-preview */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-8 sm:p-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Quem atende o seu filho importa
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Thais Cerqueira é psicopedagoga com atuação clínica e
              institucional, dedicada a investigar as causas das dificuldades de
              aprendizagem e a construir caminhos possíveis junto de crianças,
              famílias e escolas.
            </p>
            <Link
              to="/sobre"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Conheça a Thais
            </Link>
          </div>
          <div className="grid gap-3">
            {[
              "Escuta cuidadosa da história escolar de cada aluno",
              "Avaliação e devolutivas claras para a família",
              "Trabalho em parceria com a escola",
              "Acolhimento e respeito ao ritmo de cada criança",
            ].map((linha) => (
              <div
                key={linha}
                className="flex items-start gap-3 rounded-xl bg-secondary/70 px-4 py-3"
              >
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold"
                  aria-hidden
                />
                <p className="text-sm font-medium text-foreground">{linha}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços preview */}
      <section className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Como eu posso ajudar
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Da investigação ao acompanhamento, cada etapa é pensada para
              favorecer o desenvolvimento cognitivo, emocional e das habilidades
              de aprendizagem.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ClipboardList,
                titulo: "Investigação e avaliação psicopedagógica",
              },
              { icon: Lightbulb, titulo: "Dificuldades de aprendizagem" },
              {
                icon: Sparkles,
                titulo: "Rastreio de transtornos do neurodesenvolvimento",
              },
              { icon: Users, titulo: "Intervenção individualizada" },
              { icon: HeartHandshake, titulo: "Orientação à família e à escola" },
              { icon: Home, titulo: "Psicopedagogia institucional" },
            ].map((item) => (
              <Link
                key={item.titulo}
                to="/servicos"
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <item.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-foreground">
                  {item.titulo}
                </h3>
                <p className="mt-3 text-sm font-semibold text-primary group-hover:underline">
                  Saiba mais
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
          Vamos conversar sobre a aprendizagem do seu filho?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          O primeiro passo é uma conversa acolhedora para entender a história e
          as necessidades de cada aluno.
        </p>
        <Link
          to="/contato"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
        >
          Entrar em contato
        </Link>
      </section>
    </div>
  );
}
