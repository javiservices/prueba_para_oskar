class MediaField {

  constructor(){
    this.MediaFieldSelector = Cypress.env('MediaFieldSelector');
  }
  /**
   *
   * @param {string} addMedia Es el selector del botón Add media.
   * @param {string} fileSelector Es el selector del botón Browse.
   * @param {string} fileName el nombre del archivo
   * @param {string} altSelector Es el selector del campo Alternative text.
   * @param {string} altDescription Es la descripción de la imagen.
   * @param {string} save Es el selector (parcial) del botón Save.
   * @param {string} addChoosen es el selector (parcial) del botón Insert selected.
   * @param {string} url es la ruta que hace la petición para asociar el media a la entidad.
   */
  mediaLibrary(addMedia, fielSelector, fileName, altSelector, altDescription, save, addChoosen, url) {    // Ejemplo de selectores:

    // input[data-drupal-selector='edit-field-media-picture-open-button']
    cy.get(addMedia).click();

    // 'input[name="files[upload]"]'
    cy.get(fielSelector).attachFile(fileName);

    // input[data-drupal-selector='edit-media-0-fields-field-media-image-0-alt']
    cy.get(altSelector).type(altDescription);

    // .toolbar-tray-open > .ui-dialog > .ui-dialog-buttonpane > .ui-dialog-buttonset > .button
    cy.get(this.MediaFieldSelector + save).click();

    // .toolbar-tray-open > .ui-dialog > .ui-dialog-buttonpane > .ui-dialog-buttonset > .media-library-select
    cy.get(this.MediaFieldSelector + addChoosen).click();

    cy.intercept({
      method: "POST",
      // Ojo con los negociadores de idiomas.
      url: url
    }).as("addChoosen");

    cy.wait("@addChoosen");
  }

 }

export { MediaField }
