import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, ClipboardList, Instagram, MessagesSquare } from "lucide-react";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/contato";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Thais Cerqueira, Psicopedagoga" },
      {
        name: "description",
        content:
          "Entre em contato e agende uma conversa sobre a aprendizagem do seu filho. Atendimento psicopedagógico clínico e institucional.",
      },
      { property: "og:title", content: "Contato — Thais Cerqueira, Psicopedagoga" },
      {
        property: "og:description",
        content: "Agende uma conversa para entender como favorecer a aprendizagem.",
      },
    ],
  }),
  component: Contato,
});

const passos = [
  {
    icon: MessagesSquare,
    titulo: "1. Primeira conversa",
    texto:
      "Um encontro inicial para ouvir a história do aluno, a queixa da família e os objetivos do acompanhamento.",
  },
  {
    icon: ClipboardList,
    titulo: "2. Avaliação",
    texto:
      "Investigação psicopedagógica com instrumentos e atividades específicas para cada caso.",
  },
  {
    icon: CalendarCheck,
    titulo: "3. Devolutiva e plano",
    texto:
      "Encontro para compartilhar os resultados e definir, juntos, o caminho do acompanhamento.",
  },
];

function Contato() {
  return (
    <div className="bg-secondary/40">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Contato
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-foreground sm:text-5xl">
            Vamos conversar?
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
            Se o seu filho está com dificuldades na escola, ou se a sua
            instituição busca um acompanhamento psicopedagógico, o primeiro passo
            é uma conversa acolhedora.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {passos.map((passo) => (
            <div
              key={passo.titulo}
              className="rounded-2xl border border-border bg-card p-7 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <passo.icon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="mt-4 font-display text-lg font-semibold text-foreground">
                {passo.titulo}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {passo.texto}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-border bg-card p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Agende uma conversa
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Atendimento psicopedagógico clínico e institucional, presencial e
            com acompanhamento próximo das famílias.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
              Agendar pelo WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              <Instagram className="h-4.5 w-4.5 text-primary" />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            WhatsApp {WHATSAPP_DISPLAY}
          </p>
        </div>
      </section>
    </div>
  );
}
