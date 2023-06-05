import "./style.css";

const template = document.createElement("template");

template.innerHTML = `
    <a class="product-link" target="_blank">
        <img></img>
        <h3></h3>
    </a>
    
    `;

class ProductCard extends HTMLElement {
  constructor() {
    super();

    this.appendChild(template.content.cloneNode(true));

    this.querySelector("h3").textContent = this.getAttribute("title");
    this.querySelector("img").src = this.getAttribute("src");
    this.querySelector("img").alt = this.getAttribute("alt");
    this.querySelector("a").href = this.getAttribute("href");
    this.querySelector("a").classList.add("flex", "flex-col", "no-underline");
    this.querySelector("h3").classList.add("text-lg");
  }
}

customElements.define("product-card", ProductCard);
