const cssExamples = [
  {
    id: 1,
    name: "Seletores CSS",
    category: "seletores",
    title: "Encontre elementos para estilizar",
    description: "Os seletores indicam quais elementos HTML receberão determinado estilo.",
    syntax: "p { color: blue; }",
    example: "<p>Este texto será azul.</p>",
    css: "p { color: blue; }",
    tip: "Use classes para reutilizar estilos em vários elementos."
  },
  {
    id: 2,
    name: "Classes",
    category: "seletores",
    title: "Crie estilos reutilizáveis",
    description: "Classes permitem aplicar o mesmo estilo a diferentes elementos.",
    syntax: ".card { padding: 20px; border-radius: 10px; }",
    example: "<div>Meu cartão</div>",
    css: ".card { padding: 20px; border-radius: 10px; background: #1e293b; color: white; }",
    tip: "Classes são a forma mais recomendada para organizar componentes CSS."
  },
  {
    id: 3,
    name: "Cores",
    category: "cores",
    title: "Adicione cores aos elementos",
    description: "CSS permite definir cores usando Hexadecimal, RGB, HSL e nomes.",
    syntax: "color: #38bdf8; background-color: #0f172a;",
    example: "<div>Cores com CSS</div>",
    css: ".color-box { color: white; background-color: #0f172a; padding: 20px; border-radius: 10px; }",
    tip: "O formato hexadecimal e variáveis CSS garantem padrão visual no projeto."
  },
  {
    id: 6,
    name: "Box Model",
    category: "box-model",
    title: "Entenda a caixa dos elementos",
    description: "Todo elemento é composto por conteúdo, padding, border e margin.",
    syntax: "margin: 20px; padding: 20px; border: 2px solid white;",
    example: "<div>Box Model</div>",
    css: ".box-model { width: 200px; padding: 20px; margin: 20px auto; border: 2px solid #38bdf8; background: #1e293b; }",
    tip: "Use box-sizing: border-box no reset CSS para facilitar dimensionamentos."
  },
  {
    id: 10,
    name: "Flexbox",
    category: "flexbox",
    title: "Organize elementos em uma dimensão",
    description: "Flexbox alinha e distribui espaço entre itens ao longo de um eixo.",
    syntax: "display: flex; justify-content: center; align-items: center;",
    example: "<div><div>1</div><div>2</div><div>3</div></div>",
    css: ".flex-container { display: flex; justify-content: center; align-items: center; gap: 10px; }\n.flex-container div { padding: 20px; background: #1e293b; }",
    tip: "Excelente para centralização e barras de navegação."
  },
  {
    id: 13,
    name: "CSS Grid",
    category: "grid",
    title: "Crie layouts em duas dimensões",
    description: "CSS Grid organiza conteúdo em linhas e colunas simultaneamente.",
    syntax: "display: grid; grid-template-columns: repeat(3, 1fr);",
    example: "<div><div>1</div><div>2</div><div>3</div></div>",
    css: ".grid-container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }\n.grid-container div { padding: 20px; text-align: center; background: #1e293b; }",
    tip: "Perfeito para galerias, dashboards e listas de cards."
  }
];

function getCssExamplesByCategory(category) {
  if (typeof category !== "string" || !category.trim() || category.trim().toLowerCase() === "todos") {
    return cssExamples;
  }
  const normalized = category.trim().toLowerCase();
  return cssExamples.filter(ex => ex.category.toLowerCase() === normalized);
}

function searchCssExamples(search) {
  if (typeof search !== "string" || !search.trim()) return cssExamples;
  const term = search.trim().toLowerCase();
  return cssExamples.filter(
    ex =>
      ex.name.toLowerCase().includes(term) ||
      ex.title.toLowerCase().includes(term) ||
      ex.description.toLowerCase().includes(term) ||
      ex.category.toLowerCase().includes(term) ||
      ex.syntax.toLowerCase().includes(term)
  );
}

if (typeof window !== "undefined") {
  window.DevGuiaCSS = { cssExamples, getCssExamplesByCategory, searchCssExamples };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { cssExamples, getCssExamplesByCategory, searchCssExamples };
}