class UploadMenuBtn extends HTMLElement {
  constructor() {
    // Always call super
    super();
    // HTML functionality
    this.innerHTML = `<div class= "upload-button-container">
    <label class="upload-menu">
    <i class="fas fa-upload"></i>
    <input type="file"/>
    Upload a menu
    </label>
       </div>
        `;
  }
}
customElements.define("upload-menu", UploadMenuBtn);