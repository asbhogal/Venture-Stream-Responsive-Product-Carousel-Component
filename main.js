import "./src/css/style.css";

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

    this.querySelector(".product-title").textContent =
      this.getAttribute("title");
    this.querySelector(".product-image").src = this.getAttribute("src");
    this.querySelector(".product-image").alt = this.getAttribute("alt");
    this.querySelector(".product-link").href = this.getAttribute("href");
    this.querySelector(".product-link").classList.add(
      "flex",
      "flex-col",
      "gap-[20px]",
      "no-underline",
      "hover:scale-105",
      "transition"
    );
    this.querySelector(".product-title").classList.add(
      "font-medium",
      "text-lg"
    );
    this.querySelector(".product-image").classList.add(
      "max-w-none",
      "w-[287px]",
      "sm:w-[396px]"
    );
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
      "bottom-[74.25px]",
      "group-hover:flex"
    );
    this.querySelector(".product-arrow").classList.add(
      "flex",
      "h-[8.73px]",
      "w-[9.23px]"
    );
  }
}

customElements.define("product-card", ProductCard);
