class Property {

  constructor(){
    this.property = Cypress.env('Property');
  }
  /**
   * Build default drupal property
   *
   * @param {string} value
   * @param {string} html html tag to build selector
   * @returns
   *   Returns a string with the html property build
   */
  set(value, html = 'input') {
    return  html + "[" + this.property + "='" + value + "']";
  }
}

export { Property };
