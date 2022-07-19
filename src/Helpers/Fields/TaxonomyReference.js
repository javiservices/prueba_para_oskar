class TaxonomyReference {

  /**
   *
   * @param {string || array} value el/los valores a asociar.
   * @param {string || array} selector el/los selectores del field.
   * @param {object} options Objeto con el atributo de widget definido para instanciar dinámicamente los métodos.
   */
  set(value, selector, options) {
    this[options.widget](value, selector);
  }

  /**
   *
   * @param {string} value
   * @param {string} selector
   */
  select(value, selector) {
    cy.get(selector).select(value);
  }

  /**
   *
   * @param {string} value
   * @param {string} selector
   */
  radioButton(value, selector) {
    cy.get(selector).check(value);
  }

  /**
   *
   * @param {array} values
   * @param {array} selector
   */
  checkBoxes(values, selector) {

    var values_map = [];

    values.hashes().forEach(element => {
      values_map.push(element);
    });

    for (var index = 0; index < values_map.length; index++) {
      cy.get(selector[index]).check(values_map[index]);
    }
  }

  /**
   *
   * @param {string} value
   * @param {string} selector
   */
  autocomplete(value, selector) {
    cy.get(selector).type(value);
  }
}

export { TaxonomyReference };
