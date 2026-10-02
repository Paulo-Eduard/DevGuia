/* =========================================================
   DEVGUIA — HTML TAGS (Banco de dados de tags HTML)
========================================================= */

const htmlTags = [
  {
    name: "header",
    category: "estrutura",
    title: "Cabeçalho",
    description: "Representa o cabeçalho de uma página ou seção.",
    syntax: "<header>\n  ...\n</header>",
    example: "<header>\n  <h1>DevGuia</h1>\n</header>",
    tip: "Utilize para o topo da página ou de artigos."
  },
  {
    name: "main",
    category: "estrutura",
    title: "Conteúdo principal",
    description: "Define o conteúdo principal e exclusivo de uma página.",
    syntax: "<main>\n  ...\n</main>",
    example: "<main>\n  <h2>Conteúdo</h2>\n</main>",
    tip: "Deve haver apenas um elemento <main> visível por página."
  },
  {
    name: "section",
    category: "estrutura",
    title: "Seção",
    description: "Agrupa um conteúdo relacionado dentro da página.",
    syntax: "<section>\n  ...\n</section>",
    example: "<section>\n  <h2>Sobre</h2>\n</section>",
    tip: "Sempre inclua um título (h1-h6) dentro da section."
  },
  {
    name: "article",
    category: "semantica",
    title: "Artigo",
    description: "Representa um conteúdo independente e distribuível.",
    syntax: "<article>\n  ...\n</article>",
    example: "<article>\n  <h2>Notícia</h2>\n</article>",
    tip: "Ideal para posts de blog e cards independentes."
  },
  {
    name: "footer",
    category: "estrutura",
    title: "Rodapé",
    description: "Representa o rodapé de uma página ou seção.",
    syntax: "<footer>\n  ...\n</footer>",
    example: "<footer>\n  <p>© 2026 DevGuia</p>\n</footer>",
    tip: "Contém direitos autorais e links de navegação."
  },
  {
    name: "h1",
    category: "texto",
    title: "Título principal",
    description: "Representa o título de maior importância da página.",
    syntax: "<h1>Título</h1>",
    example: "<h1>Bem-vindo ao DevGuia</h1>",
    tip: "Utilize apenas um <h1> por página para boa hierarquia e SEO."
  },
  {
    name: "h2",
    category: "texto",
    title: "Título secundário",
    description: "Representa uma seção ou subtítulo dentro do conteúdo.",
    syntax: "<h2>Subtítulo</h2>",
    example: "<h2>Subtítulo da Seção</h2>",
    tip: "Use para dividir seções dentro de uma página."
  },
  {
    name: "h3",
    category: "texto",
    title: "Título de terceiro nível",
    description: "Representa um subtítulo dentro de uma seção.",
    syntax: "<h3>Subtítulo</h3>",
    example: "<h3>Subtítulo Menor</h3>",
    tip: "Ideal para estruturar tópicos específicos."
  },
  {
    name: "p",
    category: "texto",
    title: "Parágrafo",
    description: "Define um bloco de texto em forma de parágrafo.",
    syntax: "<p>Texto do parágrafo.</p>",
    example: "<p>Aprender HTML é o primeiro passo na Web.</p>",
    tip: "Evite colocar elementos de bloco dentro de um <p>."
  },
  {
    name: "strong",
    category: "texto",
    title: "Texto importante",
    description: "Indica que um trecho possui forte importância.",
    syntax: "<strong>Texto importante</strong>",
    example: "<p><strong>Atenção!</strong> Leia as instruções.</p>",
    tip: "Confere relevância semântica e visual (negrito)."
  },
  {
    name: "em",
    category: "texto",
    title: "Ênfase",
    description: "Indica ênfase em determinado trecho de texto.",
    syntax: "<em>Texto destacado</em>",
    example: "<p>Este conceito é <em>muito importante</em>.</p>",
    tip: "Confere ênfase semântica e visual (itálico)."
  },
  {
    name: "br",
    category: "texto",
    title: "Quebra de linha",
    description: "Insere uma quebra de linha no conteúdo.",
    syntax: "Linha 1<br>Linha 2",
    example: "<p>Olá!<br>Tudo bem?</p>",
    tip: "Use com moderação. Para espaçamento entre elementos, prefira CSS."
  },
  {
    name: "a",
    category: "texto",
    title: "Link",
    description: "Cria um link para outra página ou recurso.",
    syntax: '<a href="URL">Texto do link</a>',
    example: '<a href="https://example.com">Visitar site</a>',
    tip: "O atributo href define o destino do link."
  },
  {
    name: "img",
    category: "midia",
    title: "Imagem",
    description: "Exibe uma imagem dentro da página.",
    syntax: '<img src="caminho/imagem.png" alt="Descrição">',
    example: '<img src="logo.png" alt="Logo DevGuia">',
    tip: "Sempre utilize o atributo alt para acessibilidade."
  },
  {
    name: "video",
    category: "midia",
    title: "Vídeo",
    description: "Insere conteúdo de vídeo na página.",
    syntax: '<video src="video.mp4" controls></video>',
    example: '<video src="aula.mp4" controls width="300"></video>',
    tip: "O atributo controls adiciona os controles de reprodução."
  },
  {
    name: "audio",
    category: "midia",
    title: "Áudio",
    description: "Insere um arquivo de áudio na página.",
    syntax: '<audio src="audio.mp3" controls></audio>',
    example: '<audio src="podcast.mp3" controls></audio>',
    tip: "Use controls para permitir que o usuário controle a reprodução."
  },
  {
    name: "form",
    category: "formularios",
    title: "Formulário",
    description: "Agrupa elementos utilizados para entrada e envio de dados.",
    syntax: '<form action="destino.php" method="POST">\n  ...\n</form>',
    example: '<form action="/enviar" method="POST">\n  <button type="submit">Enviar</button>\n</form>',
    tip: "Utilize os atributos action e method para envio de dados."
  },
  {
    name: "label",
    category: "formularios",
    title: "Rótulo",
    description: "Define um rótulo para um campo de formulário.",
    syntax: '<label for="meuInput">Nome:</label>',
    example: '<label for="nome">Seu Nome:</label>\n<input type="text" id="nome">',
    tip: "Associe o label ao campo usando os atributos for e id."
  },
  {
    name: "input",
    category: "formularios",
    title: "Campo de entrada",
    description: "Permite que o usuário insira diferentes tipos de dados.",
    syntax: '<input type="text" placeholder="Digite aqui">',
    example: '<input type="email" placeholder="seu@email.com">',
    tip: "O atributo type define o comportamento e o tipo de validação do campo."
  },
  {
    name: "textarea",
    category: "formularios",
    title: "Área de texto",
    description: "Cria um campo para textos maiores.",
    syntax: '<textarea rows="4" cols="50"></textarea>',
    example: '<textarea placeholder="Escreva sua mensagem..."></textarea>',
    tip: "Indicado para mensagens, comentários e textos longos."
  },
  {
    name: "button",
    category: "formularios",
    title: "Botão",
    description: "Cria um botão interativo que pode disparar ações.",
    syntax: '<button type="button">Clique Aqui</button>',
    example: '<button type="submit">Enviar Formulário</button>',
    tip: "Em formulários, defina explicitamente o atributo type (button, submit ou reset)."
  },
  {
    name: "select",
    category: "formularios",
    title: "Lista de opções",
    description: "Cria uma lista suspensa para seleção.",
    syntax: '<select>\n  <option value="1">Opção 1</option>\n</select>',
    example: '<select>\n  <option value="br">Brasil</option>\n  <option value="us">Estados Unidos</option>\n</select>',
    tip: "Utilize elementos <option> internos para definir as alternativas."
  },
  {
    name: "table",
    category: "tabelas",
    title: "Tabela",
    description: "Cria uma estrutura para apresentação de dados tabulares.",
    syntax: '<table>\n  ...\n</table>',
    example: '<table>\n  <tr>\n    <th>Nome</th>\n    <th>Idade</th>\n  </tr>\n  <tr>\n    <td>Paulo</td>\n    <td>19</td>\n  </tr>\n</table>',
    tip: "Organize dados utilizando <thead>, <tbody>, <tr>, <th> e <td>."
  },
  {
    name: "tr",
    category: "tabelas",
    title: "Linha da tabela",
    description: "Define uma linha de células dentro de uma tabela.",
    syntax: '<tr>\n  ...\n</tr>',
    example: '<tr>\n  <td>Dados</td>\n</tr>',
    tip: "Contém elementos <th> ou <td>."
  },
  {
    name: "th",
    category: "tabelas",
    title: "Cabeçalho da tabela",
    description: "Define uma célula de cabeçalho com texto em negrito e centralizado.",
    syntax: '<th>Nome</th>',
    example: '<tr>\n  <th>Produto</th>\n  <th>Preço</th>\n</tr>',
    tip: "Ideal para descrever o título das colunas."
  },
  {
    name: "td",
    category: "tabelas",
    title: "Célula da tabela",
    description: "Define uma célula comum de dados dentro de uma tabela.",
    syntax: '<td>Valor</td>',
    example: '<tr>\n  <td>Camisa</td>\n  <td>R$ 50,00</td>\n</tr>',
    tip: "Contém os dados reais exibidos nas linhas."
  },
  {
    name: "ul",
    category: "estrutura",
    title: "Lista não ordenada",
    description: "Cria uma lista de itens demarcados por marcadores.",
    syntax: '<ul>\n  <li>Item</li>\n</ul>',
    example: '<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>',
    tip: "Use quando a ordem dos itens não for relevante."
  },
  {
    name: "ol",
    category: "estrutura",
    title: "Lista ordenada",
    description: "Cria uma lista de itens numerados sequencialmente.",
    syntax: '<ol>\n  <li>Primeiro item</li>\n</ol>',
    example: '<ol>\n  <li>Passo 1</li>\n  <li>Passo 2</li>\n</ol>',
    tip: "Ideal para etapas, tutoriais ou classificações."
  },
  {
    name: "li",
    category: "estrutura",
    title: "Item de lista",
    description: "Representa um item individual dentro de uma lista <ul> ou <ol>.",
    syntax: '<li>Item</li>',
    example: '<li>Item 1</li>',
    tip: "Deve ser sempre colocado como filho de <ul> ou <ol>."
  },
  {
    name: "div",
    category: "estrutura",
    title: "Divisão genérica",
    description: "Cria um contêiner genérico em bloco para organizar conteúdo.",
    syntax: '<div>...</div>',
    example: '<div><p>Conteúdo</p></div>',
    tip: "Prefira tags semânticas (header, main, section) quando possível."
  },
  {
    name: "span",
    category: "texto",
    title: "Contêiner em linha",
    description: "Agrupa pequenos trechos de texto para estilização em linha.",
    syntax: '<span>Texto</span>',
    example: '<p>Aprenda <span style="color: blue;">HTML</span> todos os dias.</p>',
    tip: "Não adiciona quebra de linha visual ao redor do texto."
  },
  {
    name: "nav",
    category: "semantica",
    title: "Navegação",
    description: "Representa uma seção destinada a conter links de navegação.",
    syntax: '<nav>\n  ...\n</nav>',
    example: '<nav>\n  <a href="#">Início</a>\n  <a href="#">Contato</a>\n</nav>',
    tip: "Utilize para menus principais, menus de rodapé ou barras laterais."
  },
  {
    name: "aside",
    category: "semantica",
    title: "Conteúdo complementar",
    description: "Representa conteúdo indiretamente relacionado ao artigo ou página principal.",
    syntax: '<aside>\n  ...\n</aside>',
    example: '<aside>\n  <h3>Artigos Relacionados</h3>\n</aside>',
    tip: "Ideal para barras laterais, caixas de aviso e banners."
  },
  {
    name: "figure",
    category: "semantica",
    title: "Figura",
    description: "Representa um conteúdo autônomo com uma legenda opcional.",
    syntax: '<figure>\n  <img src="..."/>\n</figure>',
    example: '<figure>\n  <img src="foto.jpg" alt="Paisagem">\n  <figcaption>Uma bela paisagem.</figcaption>\n</figure>',
    tip: "Agrupa mídias com suas respectivas legendas semânticas."
  },
  {
    name: "figcaption",
    category: "semantica",
    title: "Legenda da figura",
    description: "Define a legenda para um elemento <figure>.",
    syntax: '<figcaption>Legenda</figcaption>',
    example: '<figure>\n  <img src="foto.jpg">\n  <figcaption>Foto de exemplo</figcaption>\n</figure>',
    tip: "Deve ser inserido como primeiro ou último filho dentro de <figure>."
  },
  {
    name: "details",
    category: "semantica",
    title: "Detalhes expansíveis",
    description: "Cria um widget interativo que o usuário pode abrir e fechar.",
    syntax: '<details>\n  <summary>Clique aqui</summary>\n  Conteúdo detalhado.\n</details>',
    example: '<details>\n  <summary>O que é HTML?</summary>\n  <p>HTML estrutura páginas web.</p>\n</details>',
    tip: "Excelente para seções de Perguntas Frequentes (FAQ)."
  },
  {
    name: "summary",
    category: "semantica",
    title: "Resumo expansível",
    description: "Define o cabeçalho visível de um elemento <details>.",
    syntax: '<summary>Título do Resumo</summary>',
    example: '<details>\n  <summary>Ver resposta</summary>\n  <p>Explicação...</p>\n</details>',
    tip: "Funciona como o botão de abrir e fechar da tag <details>."
  }
];

/* =========================================================
   FUNÇÕES AUXILIARES
========================================================= */

function getHtmlTag(tagName) {
  if (typeof tagName !== "string" || !tagName.trim()) return undefined;
  const normalized = tagName.trim().toLowerCase();
  return htmlTags.find(tag => tag.name.toLowerCase() === normalized);
}

function getHtmlTagsByCategory(category) {
  if (typeof category !== "string" || !category.trim() || category.trim().toLowerCase() === "todos") {
    return htmlTags;
  }
  const normalized = category.trim().toLowerCase();
  return htmlTags.filter(tag => tag.category.toLowerCase() === normalized);
}

function searchHtmlTags(search) {
  if (typeof search !== "string" || !search.trim()) return htmlTags;
  const term = search.trim().toLowerCase();
  return htmlTags.filter(
    tag =>
      tag.name.toLowerCase().includes(term) ||
      tag.title.toLowerCase().includes(term) ||
      tag.description.toLowerCase().includes(term) ||
      (tag.tip && tag.tip.toLowerCase().includes(term)) ||
      tag.category.toLowerCase().includes(term)
  );
}

function getHtmlCategories() {
  return [...new Set(htmlTags.map(tag => tag.category))].sort();
}

/* =========================================================
   EXPORTAÇÃO (NAVEGADOR E NODE.JS)
========================================================= */

if (typeof window !== "undefined") {
  window.DevGuiaHTML = {
    htmlTags,
    getHtmlTag,
    getHtmlTagsByCategory,
    searchHtmlTags,
    getHtmlCategories
  };
  window.htmlTags = htmlTags; // Compatibilidade com chamadas diretas
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    htmlTags,
    getHtmlTag,
    getHtmlTagsByCategory,
    searchHtmlTags,
    getHtmlCategories
  };
}