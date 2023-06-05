import "./style.css";

const template = document.createElement("template");

template.innerHTML = `<img></img>
<h3></h3>`;

class ProductCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open", delegatesFocus: true });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h3").textContent =
      this.getAttribute("title");
    this.shadowRoot.querySelector("img").src = this.getAttribute("src");
  }
}

customElements.define("product-card", ProductCard);
