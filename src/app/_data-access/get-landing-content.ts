/**
 * Data Access Layer da landing page.
 * Hoje o conteúdo é estático; quando houver banco/CMS, só estas funções mudam.
 */

export type Category = "Tecnologia" | "Negócios" | "Design" | "Idiomas";

export type Course = {
  id: string;
  title: string;
  category: Category;
  instructor: string;
  hours: number;
  lessons: number;
  rating: number;
  students: number;
  price: number;
  oldPrice?: number;
  level: "Iniciante" | "Intermediário" | "Avançado";
  badge?: string;
};

export type Testimonial = { name: string; role: string; text: string };

export type Faq = { question: string; answer: string };

export type Plan = {
  name: string;
  /** Preço em reais; `null` quando é sob consulta. */
  price: number | null;
  pricePrefix: string;
  period: string;
  features: string[];
  cta: string;
  isFeatured: boolean;
};

export type LandingContent = {
  categories: Category[];
  courses: Course[];
  testimonials: Testimonial[];
  faqs: Faq[];
  plans: Plan[];
};

const categories: Category[] = ["Tecnologia", "Negócios", "Design", "Idiomas"];

const courses: Course[] = [
  {
    id: "programacao-web",
    title: "Desenvolvimento Web do Zero ao Primeiro Emprego",
    category: "Tecnologia",
    instructor: "Marina Duarte",
    hours: 64,
    lessons: 212,
    rating: 4.9,
    students: 18420,
    price: 297,
    oldPrice: 497,
    level: "Iniciante",
    badge: "Mais vendido",
  },
  {
    id: "dados-python",
    title: "Análise de Dados com Python e SQL",
    category: "Tecnologia",
    instructor: "Rafael Nogueira",
    hours: 42,
    lessons: 138,
    rating: 4.8,
    students: 9310,
    price: 247,
    level: "Intermediário",
  },
  {
    id: "gestao-projetos",
    title: "Gestão de Projetos Ágeis na Prática",
    category: "Negócios",
    instructor: "Camila Torres",
    hours: 28,
    lessons: 86,
    rating: 4.8,
    students: 7650,
    price: 197,
    oldPrice: 297,
    level: "Intermediário",
  },
  {
    id: "financas",
    title: "Finanças Pessoais para Começar a Investir",
    category: "Negócios",
    instructor: "Bruno Almeida",
    hours: 16,
    lessons: 54,
    rating: 4.7,
    students: 21030,
    price: 97,
    level: "Iniciante",
    badge: "Novo",
  },
  {
    id: "ux-ui",
    title: "UX/UI Design: da Pesquisa ao Protótipo",
    category: "Design",
    instructor: "Luana Pereira",
    hours: 38,
    lessons: 120,
    rating: 4.9,
    students: 6120,
    price: 267,
    level: "Iniciante",
  },
  {
    id: "ingles",
    title: "Inglês para o Trabalho: Conversação e Reuniões",
    category: "Idiomas",
    instructor: "Thiago Ramos",
    hours: 50,
    lessons: 160,
    rating: 4.8,
    students: 12870,
    price: 227,
    oldPrice: 347,
    level: "Intermediário",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Ana Clara Souza",
    role: "Desenvolvedora Front-end",
    text: "Comecei do zero em programação e em oito meses consegui minha primeira vaga. As aulas são curtas, diretas e os projetos práticos fizeram toda a diferença.",
  },
  {
    name: "Pedro Henrique Lima",
    role: "Analista de Dados",
    text: "Estudava no ônibus, no intervalo do almoço, à noite. Poder aprender no meu ritmo foi o que me fez finalmente terminar um curso.",
  },
  {
    name: "Juliana Martins",
    role: "Product Designer",
    text: "O certificado me ajudou na promoção, mas o que mais valeu foi a comunidade. Sempre tinha alguém para tirar dúvidas e dar feedback.",
  },
];

const faqs: Faq[] = [
  {
    question: "Por quanto tempo tenho acesso aos cursos?",
    answer:
      "Na compra avulsa, o acesso é vitalício, incluindo as atualizações do conteúdo. Nos planos de assinatura, você acessa todo o catálogo enquanto a assinatura estiver ativa.",
  },
  {
    question: "Os cursos têm certificado?",
    answer:
      "Sim. Ao concluir 100% das aulas e as atividades, você recebe um certificado digital com código de verificação para compartilhar no LinkedIn.",
  },
  {
    question: "Posso estudar pelo celular?",
    answer:
      "Pode. A plataforma funciona no navegador do celular, tablet e computador, e o seu progresso é sincronizado entre os dispositivos.",
  },
  {
    question: "E se eu não gostar do curso?",
    answer: "Você tem 7 dias de garantia. Se não ficar satisfeito, devolvemos 100% do valor, sem perguntas.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos cartão de crédito em até 12x, Pix e boleto. O pagamento é processado em ambiente seguro.",
  },
];

const plans: Plan[] = [
  {
    name: "Curso avulso",
    price: 97,
    pricePrefix: "a partir de",
    period: "pagamento único",
    features: ["Acesso vitalício ao curso", "Certificado de conclusão", "Suporte do instrutor", "Garantia de 7 dias"],
    cta: "Escolher curso",
    isFeatured: false,
  },
  {
    name: "Koalume Anual",
    price: 39,
    pricePrefix: "12x de",
    period: "ou R$ 468 à vista por ano",
    features: [
      "Todos os 120+ cursos liberados",
      "Trilhas de carreira completas",
      "Certificados ilimitados",
      "Comunidade e mentorias ao vivo",
      "Novos cursos todo mês",
    ],
    cta: "Assinar agora",
    isFeatured: true,
  },
  {
    name: "Empresas",
    price: null,
    pricePrefix: "",
    period: "para times a partir de 10 pessoas",
    features: ["Painel de gestão do time", "Trilhas personalizadas", "Relatórios de progresso", "Gerente de sucesso dedicado"],
    cta: "Falar com vendas",
    isFeatured: false,
  },
];

export async function getLandingContent(): Promise<LandingContent> {
  return { categories, courses, testimonials, faqs, plans };
}
