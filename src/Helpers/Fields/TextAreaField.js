class TextAreaField {

  /**
   * Función que carga de forma dinámica el widget definido en options.widget
   * @param {string} value el valor a añadir al campo
   * @param {string} selector el selectores del campo..
   * Para que funcione bien la carga de texto en un textare se usa el id
   * del textarea, no se puede usar el atributo data-drupal-selector.
  * @param {object} options objeto con el atributo de widget definido para instanciar dinámicamente los métodos.
   */
  type(value, selector, options) {
    this[options.widget](value,selector)
  }

  /**
   *
   * @param {string} value
   * @param {string} selector
   */
  ckeditor(value, selector){
    cy.ckeditor(value, selector);
  }

  /**
   *
   * @param {string} value
   * @param {string} selector
   */
  noCkeditor(value, selector){
    cy.get(selector).type(value);
  }
}

export {TextAreaField};
