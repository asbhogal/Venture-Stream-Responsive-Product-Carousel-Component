import "./style.css";

const template = document.createElement("template");

template.innerHTML = `
    <a target="_blank">
        <img></img>
        <h3></h3>
    </a>
    
    `;

class ProductCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open", delegatesFocus: true });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector("h3").textContent =
      this.getAttribute("title");
    this.shadowRoot.querySelector("img").src = this.getAttribute("src");
    this.shadowRoot.querySelector("img").alt = this.getAttribute("alt");
    this.shadowRoot.querySelector("a").href = this.getAttribute("href");
  }
}

customElements.define("product-card", ProductCard);
