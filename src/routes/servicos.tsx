import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  ClipboardList,
  HeartHandshake,
  Lightbulb,
  School,
  Search,
  Sparkles,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Thais Cerqueira, Psicopedagoga" },
      {
        name: "description",
        content:
          "Psicopedagogia clínica e institucional: avaliação, dificuldades de aprendizagem, rastreio do neurodesenvolvimento, intervenção individualizada e orientação à família e à escola.",
      },
      { property: "og:title", content: "Serviços — Thais Cerqueira, Psicopedagoga" },
      {
        property: "og:description",
        content:
          "Investigação, intervenção e orientação para favorecer a aprendizagem de cada aluno.",
      },
    ],
  }),
  component: Servicos,
});

const servicos = [
  {
    icon: Search,
    titulo: "Investigação e avaliação psicopedagógica",
    texto:
      "Processo completo de investigação da queixa, análise da história escolar e do desenvolvimento, observações e instrumentos específicos — para compreender como, por que e para quê o aluno aprende.",
  },
  {
    icon: BookOpen,
    titulo: "Dificuldades de aprendizagem",
    texto:
      "Acompanhamento de dificuldades de leitura, escrita, raciocínio lógico-matemático e atenção, com planos de trabalho construídos a partir das reais necessidades do aluno.",
  },
  {
    icon: Sparkles,
    titulo: "Rastreio de dificuldades e transtornos do neurodesenvolvimento",
    texto:
      "Identificação precoce de sinais que exigem atenção — como TDAH, transtornos específicos de aprendizagem e outros quadros do neurodesenvolvimento — com encaminhamentos qualificados quando necessário.",
  },
  {
    icon: Users,
    titulo: "Intervenção individualizada",
    texto:
      "Sessões planejadas para cada criança, respeitando seu estilo de aprendizagem, fortalecendo estratégias e ressignificando a relação com o aprender.",
  },
  {
    icon: Lightbulb,
    titulo: "Desenvolvimento cognitivo, emocional e das habilidades de aprendizagem",
    texto:
      "Estímulo às funções cognitivas, à autonomia e à autoestima do aluno, integrando os aspectos emocionais que fazem parte de todo processo de aprendizagem.",
  },
  {
    icon: HeartHandshake,
    titulo: "Orientação à família e à escola",
    texto:
      "Devolutivas, orientações e articulação entre família e escola para que o trabalho psicopedagógico se estenda para além do consultório.",
  },
  {
    icon: School,
    titulo: "Psicopedagogia institucional",
    texto:
      "Assessoria a escolas e instituições na análise de práticas pedagógicas, na formação de equipes e no acompanhamento de alunos com queixas de aprendizagem.",
  },
];

function Servicos() {
  return (
    <div className="bg-secondary/40">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Psicopedagogia clínica e institucional
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-foreground sm:text-5xl">
            Como o acompanhamento acontece
          </h1>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Cada aluno traz uma história única. O trabalho psicopedagógico
            investiga essa história, identifica o que dificulta a aprendizagem e
constrói, junto com a família e a escola, caminhos para que o aluno
            avance com confiança.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((item) => (
            <div
              key={item.titulo}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <item.icon className="h-5.5 w-5.5 text-primary" />
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold leading-snug text-foreground">
                {item.titulo}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.texto}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-card p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Não sabe por onde começar?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            A avaliação psicopedagógica é o ponto de partida ideal: ela revela o
            que está por trás da dificuldade e orienta todo o trabalho.
          </p>
          <Link
            to="/contato"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Agendar uma avaliação
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Ou chame direto pelo{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
