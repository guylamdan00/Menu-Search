class BackToTopBtn extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // write element functionality in here
    this.innerHTML = `<a rel="noreferrer" href="#top" class="back-to-top">
      <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
    </a>`;
  }
}
customElements.define("back-to-top", BackToTopBtn);
