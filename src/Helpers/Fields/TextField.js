class TextField {
  /**
   *
   * @param {string} value
   * @param {string} selector
   * @param {object} options
   */
  type(value, selector, options) {
    console.log(options.widget);
    if (typeof this[options.widget] === 'function') {
      console.log("la funcion existe");
      this[options.widget](value, selector);
    }
  }

  /**
   *
   * @param {string} value
   * @param {string} selector
   */
  ckeditor(value, selector) {
    // return { value: value, selector: selector }
    console.log(value);
    // cy.ckeditor(value, selector)
  }

  noCkeditor(value, selector) {
    return "Dont do anything with ckeditor"
    // cy.get(selector).type(value);
  }
}

module.exports = {
  TextField
}
