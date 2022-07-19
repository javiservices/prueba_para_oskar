class Submit {

  /**
   * @param {string} Attribute El selector del elemento
   * @param {number} Index El indice del elemento,
   *   si el elemento se repite indicar en cual se quiere
   *   ejecutar.
   */
  buttonClick(Attribute, Index = 0) {
    cy.get(Attribute).eq(Index).click();
  }
}

export { Submit }
