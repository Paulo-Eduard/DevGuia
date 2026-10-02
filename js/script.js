/* =========================================================
   DEVGUIA — SCRIPT.JS (Lógica Principal da Aplicação)
========================================================= */

"use strict";

(() => {
  const DevGuia = {
    init() {
      this.initMobileMenu();
      this.initHtmlTags();
      this.initHtmlSearch();
      this.initCategoryFilters();
      this.initCssSearch();
      this.initExampleFilters();
      this.initChallengeFilters();
      this.initCopyButtons();
      this.initLaboratory();
      this.initChallengeMode();
      this.initFullscreen();
      this.initKeyboardShortcuts();
      this.updateYear();
    },

    /* NAVEGAÇÃO MOBILE */
    initMobileMenu() {
      const toggle = document.getElementById("menuToggle") || document.querySelector(".menu-button");
      const nav = document.getElementById("mainNav") || document.querySelector(".nav-links");

      if (!toggle || !nav) return;

      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("show");
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
        toggle.textContent = open ? "✕" : "☰";
      });

      nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          nav.classList.remove("show");
          toggle.setAttribute("aria-expanded", "false");
          toggle.setAttribute("aria-label", "Abrir menu");
          toggle.textContent = "☰";
        });
      });
    },

    /* CARREGAMENTO DE TAGS HTML */
    initHtmlTags() {
      const container = document.getElementById("htmlTagsContainer");
      if (!container) return;

      if (!window.DevGuiaHTML || !Array.isArray(window.DevGuiaHTML.htmlTags)) {
        console.error("DevGuia: html-tags.js não foi carregado corretamente.");
        container.innerHTML = `
          <div class="error-message">
            <h3>Não foi possível carregar as tags</h3>
            <p>Verifique se html-tags.js é carregado antes do script principal.</p>
          </div>
        `;
        return;
      }

      this.renderHtmlTags(window.DevGuiaHTML.htmlTags);
    },

    renderHtmlTags(tags) {
      const container = document.getElementById("htmlTagsContainer");
      const noResults = document.getElementById("noResults");

      if (!container) return;

      container.innerHTML = "";

      if (!tags.length) {
        if (noResults) noResults.hidden = false;
        this.updateResultsCount(0);
        return;
      }

      if (noResults) noResults.hidden = true;

      const fragment = document.createDocumentFragment();

      tags.forEach(tag => {
        const card = document.createElement("article");
        card.className = "card tag-card";
        card.dataset.category = tag.category || "";
        card.dataset.name = tag.name || "";

        card.innerHTML = `
          <header class="card-header">
            <span class="tag-badge">&lt;${this.escapeHtml(tag.name)}&gt;</span>
            <span class="category-badge">${this.escapeHtml(this.formatCategory(tag.category))}</span>
          </header>
          <h3>${this.escapeHtml(tag.title || tag.name)}</h3>
          <p>${this.escapeHtml(tag.description || "Sem descrição disponível.")}</p>
          <pre><code>${this.escapeHtml(tag.syntax || `<${tag.name}>`)}</code></pre>
          <footer class="card-footer">
            <button class="secondary-button btn-details">Ver Detalhes</button>
            <button class="copy-button">Copiar Sintaxe</button>
          </footer>
        `;

        card.querySelector(".btn-details").addEventListener("click", () => this.openTagModal(tag));
        card.querySelector(".copy-button").addEventListener("click", (e) => this.copyText(tag.syntax || `<${tag.name}>`, e.target));

        fragment.appendChild(card);
      });

      container.appendChild(fragment);
      this.updateResultsCount(tags.length);
    },

    /* BUSCA E FILTROS DE TAGS HTML (INDEX.HTML) */
    initHtmlSearch() {
      const input = document.getElementById("searchInput");
      if (!input) return;

      input.addEventListener("input", () => this.filterHtml());
    },

    filterHtml() {
      const input = document.getElementById("searchInput");
      const container = document.getElementById("htmlTagsContainer");

      if (!container) return;

      const term = input ? input.value.trim().toLowerCase() : "";
      const activeFilter = document.querySelector("#categoryFilters .category-button.active, #categoryFilters .filter-button.active, .category-filters .active");
      const category = activeFilter?.dataset.category || "todos";

      const cards = container.querySelectorAll(".tag-card, .card");
      let visible = 0;

      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const matchesText = !term || text.includes(term);
        const cardCategory = card.dataset.category || "";
        const matchesCategory = category === "todos" || cardCategory === category;

        const show = matchesText && matchesCategory;
        card.style.display = show ? "" : "none";
        card.hidden = !show;

        if (show) visible++;
      });

      this.updateNoResults(visible);
      this.updateResultsCount(visible);
    },

    initCategoryFilters() {
      const buttons = document.querySelectorAll("#categoryFilters [data-category], .category-filters [data-category], .filters [data-category]");
      if (!buttons.length) return;

      buttons.forEach(button => {
        button.addEventListener("click", () => {
          buttons.forEach(item => item.classList.remove("active"));
          button.classList.add("active");
          this.filterHtml();
        });
      });
    },

    updateNoResults(count) {
      const noResults = document.getElementById("noResults");
      if (noResults) noResults.hidden = count !== 0;
    },

    /* BUSCA CSS (CSS.HTML) */
    initCssSearch() {
      const input = document.getElementById("cssSearchInput");
      if (!input) return;

      input.addEventListener("input", () => {
        const term = input.value.trim().toLowerCase();
        const cards = document.querySelectorAll(".css-card, .card");
        let visible = 0;

        cards.forEach(card => {
          const show = !term || card.textContent.toLowerCase().includes(term);
          card.style.display = show ? "" : "none";
          card.hidden = !show;

          if (show) visible++;
        });

        this.updateResultsCount(visible);
      });
    },

    /* FILTROS DE EXEMPLOS (EXEMPLOS.HTML) */
    initExampleFilters() {
      const buttons = document.querySelectorAll("[data-example], [data-example-filter]");
      if (!buttons.length) return;

      buttons.forEach(button => {
        button.addEventListener("click", () => {
          buttons.forEach(item => item.classList.remove("active"));
          button.classList.add("active");

          const filter = button.dataset.example || button.dataset.exampleFilter;
          const cards = document.querySelectorAll(".example-card, [data-example-type], [data-example-category]");
          let visible = 0;

          cards.forEach(card => {
            const cardCategory = card.dataset.exampleType || card.dataset.exampleCategory;
            const show = filter === "todos" || cardCategory === filter;

            card.style.display = show ? "" : "none";
            card.hidden = !show;

            if (show) visible++;
          });

          this.updateResultsCount(visible);
        });
      });
    },

    /* FILTROS DE DESAFIOS (DESAFIOS.HTML) */
    initChallengeFilters() {
      const buttons = document.querySelectorAll("[data-difficulty], [data-difficulty-filter]");
      if (!buttons.length) return;

      buttons.forEach(button => {
        button.addEventListener("click", () => {
          buttons.forEach(item => item.classList.remove("active"));
          button.classList.add("active");

          const filter = button.dataset.difficulty || button.dataset.difficultyFilter;
          const cards = document.querySelectorAll(".challenge-card[data-difficulty]");
          let visible = 0;

          cards.forEach(card => {
            const show = filter === "todos" || card.dataset.difficulty === filter;

            card.style.display = show ? "" : "none";
            card.hidden = !show;

            if (show) visible++;
          });

          this.updateResultsCount(visible);
        });
      });
    },

    /* BOTÕES DE COPIAR CÓDIGO */
    initCopyButtons() {
      document.addEventListener("click", event => {
        const button = event.target.closest("[data-copy-code], .copy-button");
        if (!button) return;

        const targetCode = button.closest(".code-panel, .card")?.querySelector("code")?.textContent;
        const text = button.dataset.copyCode || button.dataset.copy || targetCode;

        if (text) {
          this.copyText(text, button);
        }
      });
    },

    async copyText(text, button) {
      try {
        await navigator.clipboard.writeText(text);
        this.setCopiedState(button);
        this.showToast("Código copiado!");
      } catch (error) {
        console.error("DevGuia: erro ao copiar código.", error);
        this.showToast("Não foi possível copiar o código.", "error");
      }
    },

    setCopiedState(button) {
      if (!button) return;

      const original = button.dataset.originalText || button.innerHTML;
      button.dataset.originalText = original;

      button.innerHTML = "✓ Copiado";
      button.classList.add("copied");

      clearTimeout(button._copyTimer);
      button._copyTimer = setTimeout(() => {
        button.innerHTML = original;
        button.classList.remove("copied");
      }, 1500);
    },

    /* MODAL DE DETALHES */
    openTagModal(tag) {
      this.closeExistingModal();

      const overlay = document.createElement("div");
      overlay.className = "devguia-modal-overlay";

      const modal = document.createElement("div");
      modal.className = "devguia-modal card";
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-modal", "true");

      modal.innerHTML = `
        <button class="devguia-modal-close" aria-label="Fechar modal">✕</button>
        <div class="modal-header">
          <span class="tag-badge">HTML &lt;${this.escapeHtml(tag.name)}&gt;</span>
          <h2>${this.escapeHtml(tag.title || "Tag HTML")}</h2>
        </div>
        <div class="modal-body">
          <p>${this.escapeHtml(tag.description || "Sem descrição disponível.")}</p>
          <h4>Sintaxe</h4>
          <pre><code>${this.escapeHtml(tag.syntax || "")}</code></pre>
          <h4>Exemplo</h4>
          <pre><code>${this.escapeHtml(tag.example || "")}</code></pre>
          ${tag.tip ? `<p class="tip-box">💡 <strong>Dica:</strong> ${this.escapeHtml(tag.tip)}</p>` : ""}
        </div>
      `;

      overlay.appendChild(modal);
      document.body.appendChild(overlay);
      document.body.classList.add("modal-open");

      requestAnimationFrame(() => overlay.classList.add("active"));

      const closeBtn = modal.querySelector(".devguia-modal-close");
      closeBtn.addEventListener("click", () => this.closeModal(overlay));

      overlay.addEventListener("click", e => {
        if (e.target === overlay) this.closeModal(overlay);
      });

      closeBtn.focus();
    },

    closeModal(overlay) {
      if (!overlay) return;
      overlay.classList.remove("active");
      document.body.classList.remove("modal-open");
      setTimeout(() => overlay.remove(), 180);
    },

    closeExistingModal() {
      const modal = document.querySelector(".devguia-modal-overlay");
      if (modal) modal.remove();
      document.body.classList.remove("modal-open");
    },

    showToast(message, type = "success") {
      document.querySelectorAll(".devguia-toast").forEach(t => t.remove());

      const toast = document.createElement("div");
      toast.className = `devguia-toast ${type}`;
      toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 12px 20px;
        background: ${type === "error" ? "var(--danger)" : "var(--success)"};
        color: white;
        border-radius: 8px;
        font-weight: bold;
        z-index: 2000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        transition: opacity 0.3s ease;
      `;

      toast.textContent = (type === "error" ? "!" : "✓") + " " + message;
      document.body.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 300);
      }, 2200);
    },

    /* LABORATÓRIO E PRÉ-VISUALIZAÇÃO DE CÓDIGO */
    initLaboratory() {
      const htmlEditor = document.getElementById("htmlCode");
      const cssEditor = document.getElementById("cssCode");
      const preview = document.getElementById("preview");

      if (!htmlEditor || !cssEditor || !preview) return;

      const runButton = document.getElementById("runButton");
      const resetButton = document.getElementById("resetButton");
      const refreshButton = document.getElementById("refreshPreview");

      const defaultHTML = htmlEditor.value;
      const defaultCSS = cssEditor.value;

      const run = () => this.runLaboratory(htmlEditor, cssEditor, preview);

      if (runButton) runButton.addEventListener("click", run);
      if (refreshButton) refreshButton.addEventListener("click", run);

      if (resetButton) {
        resetButton.addEventListener("click", () => {
          htmlEditor.value = defaultHTML;
          cssEditor.value = defaultCSS;
          this.updateLineNumbers(htmlEditor, "htmlLineNumbers");
          this.updateLineNumbers(cssEditor, "cssLineNumbers");
          run();
          this.showToast("Laboratório restaurado.");
        });
      }

      this.initEditorTabs();
      this.initEditor(htmlEditor, "htmlLineNumbers");
      this.initEditor(cssEditor, "cssLineNumbers");
      run();
    },

    runLaboratory(htmlEditor, cssEditor, preview) {
      const html = htmlEditor.value;
      const css = cssEditor.value;

      preview.srcdoc = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
          <meta charset="UTF-8">
          <style>${css}</style>
        </head>
        <body>
          ${html}
        </body>
        </html>
      `;

      this.setStatus("Código executado com sucesso.", "success");
    },

    setStatus(message, type = "success") {
      const status = document.getElementById("statusText");
      if (!status) return;

      status.textContent = message;
      status.className = `status-text ${type}`;
    },

    initEditorTabs() {
      const htmlTab = document.getElementById("htmlTab");
      const cssTab = document.getElementById("cssTab");
      const htmlPanel = document.getElementById("htmlEditorPanel");
      const cssPanel = document.getElementById("cssEditorPanel");

      if (!htmlTab || !cssTab) return;

      htmlTab.addEventListener("click", () => {
        htmlTab.classList.add("active");
        cssTab.classList.remove("active");
        if (htmlPanel) htmlPanel.classList.remove("css-editor-hidden");
        if (cssPanel) cssPanel.classList.add("css-editor-hidden");
      });

      cssTab.addEventListener("click", () => {
        cssTab.classList.add("active");
        htmlTab.classList.remove("active");
        if (cssPanel) cssPanel.classList.remove("css-editor-hidden");
        if (htmlPanel) htmlPanel.classList.add("css-editor-hidden");
      });
    },

    initEditor(textarea, lineNumbersId) {
      this.updateLineNumbers(textarea, lineNumbersId);

      textarea.addEventListener("input", () => this.updateLineNumbers(textarea, lineNumbersId));

      textarea.addEventListener("scroll", () => {
        const numbers = document.getElementById(lineNumbersId);
        if (numbers) numbers.scrollTop = textarea.scrollTop;
      });

      textarea.addEventListener("keydown", event => {
        if (event.key === "Tab") {
          event.preventDefault();
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;

          textarea.value = textarea.value.slice(0, start) + "    " + textarea.value.slice(end);
          textarea.selectionStart = textarea.selectionEnd = start + 4;

          textarea.dispatchEvent(new Event("input"));
        }
      });
    },

    updateLineNumbers(textarea, lineNumbersId) {
      const numbers = document.getElementById(lineNumbersId);
      if (!numbers || !textarea) return;

      const total = textarea.value.split("\n").length;
      numbers.innerHTML = Array.from({ length: total }, (_, i) => `${i + 1}`).join("<br>");
    },

    /* MODO DESAFIO */
    initChallengeMode() {
      const panel = document.getElementById("challengePanel");
      if (!panel) return;

      const params = new URLSearchParams(window.location.search);
      const id = params.get("desafio");
      if (!id) return;

      const challenges = {
        1: { title: "Desafio #01 — Título", description: "Crie um título principal utilizando a tag <h1>." },
        2: { title: "Desafio #02 — Apresentação", description: "Crie um pequeno cartão de apresentação usando HTML e CSS." },
        3: { title: "Desafio #03 — Formulário", description: "Crie um formulário com nome, email e botão de envio." },
        4: { title: "Desafio #04 — Card estilizado", description: "Crie um card utilizando cores, espaçamento, bordas e sombras." },
        5: { title: "Desafio #05 — Flexbox", description: "Utilize Flexbox para organizar três elementos lado a lado." },
        6: { title: "Desafio #06 — Página completa", description: "Crie uma página com HTML semântico e CSS responsivo." }
      };

      const challenge = challenges[id];
      if (!challenge) return;

      const title = document.getElementById("challengeTitle");
      const description = document.getElementById("challengeDescription");

      if (title) title.textContent = challenge.title;
      if (description) description.textContent = challenge.description;

      panel.hidden = false;
    },

    /* UTILITÁRIOS DIVERSOS */
    initFullscreen() {
      const button = document.getElementById("fullscreenPreview");
      const preview = document.getElementById("preview");

      if (!button || !preview) return;

      button.addEventListener("click", async () => {
        try {
          if (!document.fullscreenElement) {
            await preview.requestFullscreen();
          } else {
            await document.exitFullscreen();
          }
        } catch (error) {
          console.error("DevGuia: erro no fullscreen.", error);
          this.showToast("Não foi possível abrir em tela cheia.", "error");
        }
      });
    },

    initKeyboardShortcuts() {
      document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
          const modal = document.querySelector(".devguia-modal-overlay");
          if (modal) this.closeModal(modal);
        }

        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
          const search = document.getElementById("searchInput") || document.getElementById("cssSearchInput");
          if (search) {
            event.preventDefault();
            search.focus();
          }
        }
      });
    },

    updateResultsCount(count) {
      document.querySelectorAll("[data-results-count]").forEach(el => el.textContent = count);
    },

    formatCategory(category) {
      const names = {
        estrutura: "Estrutura",
        texto: "Texto",
        midia: "Mídia",
        formularios: "Formulários",
        semantica: "Semántica",
        tabelas: "Tabelas",
        seletores: "Seletores",
        cores: "Cores",
        "box-model": "Box Model",
        flexbox: "Flexbox",
        grid: "Grid",
        responsivo: "Responsivo"
      };

      return names[category] || category || "Geral";
    },

    updateYear() {
      const year = new Date().getFullYear();
      document.querySelectorAll("[data-current-year]").forEach(el => el.textContent = year);
    },

    escapeHtml(value) {
      return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }
  };

  window.DevGuia = DevGuia;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => DevGuia.init(), { once: true });
  } else {
    DevGuia.init();
  }
})();