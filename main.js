import "./style.css";

const template = document.createElement("template");

template.innerHTML = `
    <a class="product-link" target="_blank">
      <img class="product-image"></img>
      <h3 class="product-title"></h3>
      <div class="product-arrow-container">
        <img class="product-arrow" src="/icons/Arrow.svg"></img>
      </div>
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
    this.querySelector("a").classList.add(
      "flex",
      "flex-col",
      "no-underline",
      "hover:scale-105",
      "transition"
    );
    this.querySelector("img").classList.add("max-w-none");
    this.querySelector(".product-arrow-container").classList.add(
      "hidden",
      "justify-center",
      "items-center",
      "h-10",
      "w-10",
      "bg-white",
      "rounded-full",
      "absolute",
      "right-[30px]",
      "bottom-[54.25px]",
      "group-hover:flex"
    );
    this.querySelector(".product-arrow").classList.add(
      "flex",
      "h-[11.64px]",
      "w-[12.30px]"
    );
  }
}

customElements.define("product-card", ProductCard);
