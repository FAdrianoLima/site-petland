export const SITE = {
  url: "https://www.petlanddistribuicao.com.br",
  whatsapp: "5541999999999",
  telefone: "(41) 9 9999-9999",
  email: "contato@petlanddistribuicao.com.br",
  endereco: "Curitiba - PR",
  instagram: "https://www.instagram.com/petlandoficial/",
  facebook: "https://www.facebook.com/profile.php?id=100063740851000",
};

export const wa = (msg = "Olá! Quero ser cliente Petland Distribuição.") =>
  `https://api.whatsapp.com/send?phone=${SITE.whatsapp}&text=${encodeURIComponent(msg)}`;

export const MARCAS = [
  {
    id: "royal-canin",
    nome: "Royal Canin",
    cor: "#e2001a",
    titulo: "Nutrição de precisão para cães e gatos",
    desc: "Rações super premium por raça, porte, idade e necessidade clínica. A marca que o tutor já pede na loja e na clínica.",
    itens: [
      "Linhas por raça e porte",
      "Gatos castrados e indoor",
      "Veterinary Diet",
      "Filhotes e sênior",
    ],
  },
  {
    id: "petpassion",
    nome: "PetPassion",
    cor: "#6a2c91",
    titulo: "Alto padrão para groomers e pet shops",
    desc: "Perfumes, shampoos, condicionadores e máscaras de hidratação com performance profissional e acabamento de vitrine.",
    itens: [
      "Shampoos e condicionadores",
      "Máscaras de tratamento",
      "Perfumes e colônias",
      "Linhas para tosa e finalização",
    ],
  },
  {
    id: "pethy",
    nome: "Pethy Group",
    cor: "#f47b20",
    titulo: "Preço bom, giro rápido",
    desc: "Higiene e petiscos com ótimo custo-benefício para completar o mix da loja sem apertar a margem.",
    itens: [
      "Petiscos",
      "Fraldas e tapetes",
      "Shampoos e perfumes",
      "Linha de higiene",
    ],
  },
  {
    id: "wanpy",
    nome: "Wanpy",
    cor: "#0fa3a3",
    titulo: "Petiscos que cães e gatos adoram",
    desc: "Variedade de petiscos de alta aceitação para recompensa, treino e momentos de carinho.",
    itens: [
      "Petiscos para cães",
      "Petiscos para gatos",
      "Snacks naturais",
      "Opções para treino",
    ],
  },
];
