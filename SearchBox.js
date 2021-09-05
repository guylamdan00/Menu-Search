class SearchBox extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `<div class="search-box-container">
        <div class="search-box">
          <input
            class="search-txt"
            type="text"
            name=""
            placeholder="Search for menus"
          />
          <a class="search-btn" href="#">
            <i class="fas fa-search"></i>
          </a>
        </div>
      </div>`;
  }
}
customElements.define("search-box-container", SearchBox);
