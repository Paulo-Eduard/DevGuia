/* =========================================================
   DEVGUIA — CSS EXAMPLES (Banco de dados de exemplos CSS)
   ========================================================= */

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
    example: '<div class="card">Meu cartão</div>',
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
    example: '<div class="color-box">Cores com CSS</div>',
    css: ".color-box { color: white; background-color: #0f172a; padding: 20px; border-radius: 10px; }",
    tip: "O formato hexadecimal e variáveis CSS garantem padrão visual no projeto."
  },
  {
    id: 4,
    name: "Texto",
    category: "texto",
    title: "Personalize textos",
    description: "Você pode controlar tamanho, fonte, alinhamento, espaçamento e outros aspectos do texto.",
    syntax: "font-size: 24px; font-weight: bold; text-align: center;",
    example: "<h2>Texto estilizado</h2>",
    css: "h2 { font-size: 24px; font-weight: bold; text-align: center; letter-spacing: 1px; }",
    tip: "Evite usar muitos tamanhos e fontes diferentes na mesma página."
  },
  {
    id: 5,
    name: "Fontes",
    category: "texto",
    title: "Escolha a aparência da fonte",
    description: "A propriedade font-family define qual família tipográfica será utilizada.",
    syntax: "font-family: Arial, sans-serif;",
    example: '<p class="fonte">Texto com outra fonte</p>',
    css: ".fonte { font-family: Arial, sans-serif; font-size: 20px; }",
    tip: "Sempre tenha uma fonte alternativa caso a primeira não esteja disponível."
  },
  {
    id: 6,
    name: "Box Model",
    category: "box-model",
    title: "Entenda a caixa dos elementos",
    description: "Todo elemento HTML é uma caixa composta por conteúdo, padding, border e margin.",
    syntax: "margin: 20px; padding: 20px; border: 2px solid white;",
    example: '<div class="box-model">Box Model</div>',
    css: ".box-model { width: 200px; padding: 20px; margin: 20px auto; border: 2px solid #38bdf8; background: #1e293b; }",
    tip: "Use box-sizing: border-box no reset CSS para facilitar dimensionamentos."
  },
  {
    id: 7,
    name: "Width e Height",
    category: "box-model",
    title: "Controle o tamanho",
    description: "Width e height definem largura e altura de um elemento.",
    syntax: "width: 300px; height: 150px;",
    example: '<div class="size-box">300 × 150</div>',
    css: ".size-box { width: 300px; height: 150px; display: flex; align-items: center; justify-content: center; background: #1e293b; border: 2px solid #38bdf8; }",
    tip: "Para layouts responsivos, considere usar %, rem, vw, vh ou max-width."
  },
  {
    id: 8,
    name: "Margin",
    category: "box-model",
    title: "Crie espaço externo",
    description: "Margin cria espaço entre um elemento e outros elementos ao seu redor.",
    syntax: "margin: 20px;",
    example: '<div class="margin-box">Espaçamento externo</div>',
    css: ".margin-box { margin: 30px; padding: 20px; background: #1e293b; }",
    tip: "Margin atua no espaço externo do elemento."
  },
  {
    id: 9,
    name: "Padding",
    category: "box-model",
    title: "Crie espaço interno",
    description: "Padding cria espaço entre o conteúdo e a borda do elemento.",
    syntax: "padding: 20px;",
    example: '<div class="padding-box">Espaçamento interno</div>',
    css: ".padding-box { padding: 30px; background: #1e293b; border: 2px solid #38bdf8; }",
    tip: "Padding aumenta o espaço interno sem afastar o elemento dos outros."
  },
  {
    id: 10,
    name: "Flexbox",
    category: "flexbox",
    title: "Organize elementos em uma dimensão",
    description: "Flexbox alinha e distribui espaço entre itens ao longo de um eixo.",
    syntax: "display: flex; justify-content: center; align-items: center;",
    example: '<div class="flex-container"><div>1</div><div>2</div><div>3</div></div>',
    css: ".flex-container { display: flex; justify-content: center; align-items: center; gap: 10px; }\n.flex-container div { padding: 20px; background: #1e293b; }",
    tip: "Excelente para centralização e barras de navegação."
  },
  {
    id: 11,
    name: "Flex Direction",
    category: "flexbox",
    title: "Defina a direção dos elementos",
    description: "flex-direction determina se os elementos serão organizados em linha ou coluna.",
    syntax: "display: flex; flex-direction: column;",
    example: '<div class="direction"><div>Item 1</div><div>Item 2</div><div>Item 3</div></div>',
    css: ".direction { display: flex; flex-direction: column; gap: 10px; }\n.direction div { padding: 10px; background: #1e293b; }",
    tip: "Os valores mais comuns são row e column."
  },
  {
    id: 12,
    name: "Justify Content",
    category: "flexbox",
    title: "Controle o eixo principal",
    description: "justify-content controla a distribuição dos elementos no eixo principal.",
    syntax: "display: flex; justify-content: space-between;",
    example: '<div class="justify"><span>A</span><span>B</span><span>C</span></div>',
    css: ".justify { display: flex; justify-content: space-between; padding: 20px; background: #0f172a; }\n.justify span { padding: 10px; background: #1e293b; }",
    tip: "Experimente center, space-between, space-around e space-evenly."
  },
  {
    id: 13,
    name: "CSS Grid",
    category: "grid",
    title: "Crie layouts em duas dimensões",
    description: "CSS Grid organiza conteúdo em linhas e colunas simultaneamente.",
    syntax: "display: grid; grid-template-columns: repeat(3, 1fr);",
    example: '<div class="grid-container"><div>1</div><div>2</div><div>3</div></div>',
    css: ".grid-container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }\n.grid-container div { padding: 20px; text-align: center; background: #1e293b; }",
    tip: "Perfeito para galerias, dashboards e listas de cards."
  },
  {
    id: 14,
    name: "Grid Template Columns",
    category: "grid",
    title: "Defina as colunas do Grid",
    description: "grid-template-columns determina quantas colunas o layout terá e suas proporções.",
    syntax: "grid-template-columns: 1fr 2fr;",
    example: '<div class="columns"><div>1fr</div><div>2fr</div></div>',
    css: ".columns { display: grid; grid-template-columns: 1fr 2fr; gap: 10px; }\n.columns div { padding: 20px; background: #1e293b; }",
    tip: "A unidade fr representa uma fração do espaço disponível."
  },
  {
    id: 15,
    name: "Position",
    category: "responsivo",
    title: "Controle a posição dos elementos",
    description: "A propriedade position permite controlar como um elemento será posicionado na página.",
    syntax: "position: relative; position: absolute;",
    example: '<div class="position-box"><span>Elemento</span></div>',
    css: ".position-box { position: relative; height: 120px; background: #1e293b; }\n.position-box span { position: absolute; right: 10px; bottom: 10px; }",
    tip: "Absolute normalmente utiliza um elemento ancestral com position: relative como referência."
  },
  {
    id: 16,
    name: "Media Queries",
    category: "responsivo",
    title: "Adapte a página para diferentes telas",
    description: "Media queries permitem aplicar estilos diferentes dependendo do tamanho da tela.",
    syntax: "@media (max-width: 768px) { .container { display: block; } }",
    example: '<div class="responsive">Redimensione a tela</div>',
    css: ".responsive { padding: 30px; background: #1e293b; }\n@media (max-width: 600px) { .responsive { padding: 15px; } }",
    tip: "Sempre teste sua página em telas pequenas."
  },
  {
    id: 17,
    name: "CSS Variables",
    category: "cores",
    title: "Crie variáveis reutilizáveis",
    description: "Variáveis CSS armazenam valores que podem ser reutilizados no projeto.",
    syntax: ":root { --cor-principal: #38bdf8; }\nbutton { background: var(--cor-principal); }",
    example: '<button class="variable-button">Botão</button>',
    css: ":root { --cor-principal: #38bdf8; }\n.variable-button { padding: 12px 20px; border: none; border-radius: 8px; background: var(--cor-principal); color: white; }",
    tip: "Variáveis facilitam a manutenção de temas e paletas de cores."
  },
  {
    id: 18,
    name: "Border Radius",
    category: "box-model",
    title: "Arredonde os cantos",
    description: "border-radius cria cantos arredondados nos elementos.",
    syntax: "border-radius: 12px;",
    example: '<div class="rounded">Cantos arredondados</div>',
    css: ".rounded { padding: 30px; background: #1e293b; border: 2px solid #38bdf8; border-radius: 16px; }",
    tip: "Você pode usar valores diferentes para cada canto."
  },
  {
    id: 19,
    name: "Box Shadow",
    category: "box-model",
    title: "Adicione sombras",
    description: "box-shadow cria sombras ao redor de elementos.",
    syntax: "box-shadow: 0 10px 30px rgba(0,0,0,.3);",
    example: '<div class="shadow">Card com sombra</div>',
    css: ".shadow { padding: 30px; background: #1e293b; border-radius: 12px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35); }",
    tip: "Sombras leves deixam a interface mais agradável."
  },
  {
    id: 20,
    name: "Transitions",
    category: "responsivo",
    title: "Crie mudanças suaves",
    description: "transition permite suavizar alterações de propriedades CSS.",
    syntax: "transition: transform 0.3s ease;",
    example: '<button class="transition-button">Passe o mouse</button>',
    css: ".transition-button { padding: 12px 20px; border: none; border-radius: 8px; background: #1e293b; color: white; cursor: pointer; transition: transform 0.3s ease; }\n.transition-button:hover { transform: translateY(-4px); }",
    tip: "Use transições curtas para manter a interface responsiva."
  },
  {
    id: 21,
    name: "Hover",
    category: "seletores",
    title: "Altere elementos ao passar o mouse",
    description: "A pseudo-classe :hover aplica estilos quando o cursor passa sobre o elemento.",
    syntax: "button:hover { transform: scale(1.05); }",
    example: '<button class="hover-button">Passe o mouse</button>',
    css: ".hover-button { padding: 12px 20px; border: none; border-radius: 8px; background: #1e293b; color: white; cursor: pointer; transition: transform 0.2s ease; }\n.hover-button:hover { transform: scale(1.05); }",
    tip: "Combine :hover com transition para criar efeitos suaves."
  },
  {
    id: 22,
    name: "Display",
    category: "layout",
    title: "Controle como o elemento será exibido",
    description: "display define o comportamento visual de um elemento dentro do layout.",
    syntax: "display: block; display: flex; display: grid;",
    example: '<div class="display-example">Elemento</div>',
    css: ".display-example { display: flex; align-items: center; justify-content: center; height: 100px; background: #1e293b; }",
    tip: "Os valores block, flex, grid e none são muito utilizados."
  },
  {
    id: 23,
    name: "Gap",
    category: "flexbox",
    title: "Crie espaço entre elementos",
    description: "gap define o espaço entre os itens em layouts Flexbox e Grid.",
    syntax: "display: flex; gap: 20px;",
    example: '<div class="gap-example"><div>1</div><div>2</div><div>3</div></div>',
    css: ".gap-example { display: flex; gap: 20px; }\n.gap-example div { padding: 20px; background: #1e293b; }",
    tip: "gap simplifica o alinhamento sem precisar de margins individuais."
  },
  {
    id: 24,
    name: "Object Fit",
    category: "responsivo",
    title: "Controle imagens e vídeos",
    description: "object-fit define como uma imagem ou vídeo deve preencher seu contêiner.",
    syntax: "object-fit: cover;",
    example: '<div class="image-box"><img src="https://via.placeholder.com/300x150" alt="Exemplo" /></div>',
    css: ".image-box { width: 300px; height: 150px; overflow: hidden; }\n.image-box img { width: 100%; height: 100%; object-fit: cover; }",
    tip: "cover garante preenchimento total mantendo a proporção."
  },
  {
    id: 25,
    name: "Overflow",
    category: "box-model",
    title: "Controle conteúdo que ultrapassa a caixa",
    description: "overflow determina o comportamento quando o conteúdo ultrapassa os limites do elemento.",
    syntax: "overflow: hidden; overflow: auto;",
    example: '<div class="overflow-box">Conteúdo dentro de uma área limitada.</div>',
    css: ".overflow-box { width: 250px; height: 80px; padding: 15px; overflow: auto; background: #1e293b; }",
    tip: "Use auto para exibir barra de rolagem apenas quando necessário."
  }
];

/* =========================================================
   FUNÇÕES AUXILIARES
   ========================================================= */

function getCssExampleByName(name) {
  if (typeof name !== "string" || !name.trim()) return undefined;
  const normalizedName = name.trim().toLowerCase();
  return cssExamples.find(example => example.name.toLowerCase() === normalizedName);
}

function getCssExampleById(id) {
  const numericId = Number(id);
  if (!Number.isFinite(numericId)) return undefined;
  return cssExamples.find(example => example.id === numericId);
}

function getCssExamplesByCategory(category) {
  if (typeof category !== "string" || !category.trim() || category.trim().toLowerCase() === "todos") {
    return cssExamples;
  }
  const normalizedCategory = category.trim().toLowerCase();
  return cssExamples.filter(example => example.category.toLowerCase() === normalizedCategory);
}

function searchCssExamples(search) {
  if (typeof search !== "string" || !search.trim()) return cssExamples;
  const term = search.trim().toLowerCase();
  return cssExamples.filter(example =>
    example.name.toLowerCase().includes(term) ||
    example.title.toLowerCase().includes(term) ||
    example.description.toLowerCase().includes(term) ||
    example.category.toLowerCase().includes(term) ||
    (example.tip && example.tip.toLowerCase().includes(term)) ||
    example.syntax.toLowerCase().includes(term)
  );
}

function getCssCategories() {
  return [...new Set(cssExamples.map(example => example.category))].sort();
}

/* =========================================================
   EXPORTAÇÃO (NAVEGADOR E NODE.JS)
   ========================================================= */

if (typeof window !== "undefined") {
  window.DevGuiaCSS = {
    cssExamples,
    getCssExampleByName,
    getCssExampleById,
    getCssExamplesByCategory,
    searchCssExamples,
    getCssCategories
  };
  window.cssExamples = cssExamples; // Compatibilidade com chamadas diretas
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    cssExamples,
    getCssExampleByName,
    getCssExampleById,
    getCssExamplesByCategory,
    searchCssExamples,
    getCssCategories
  };
}