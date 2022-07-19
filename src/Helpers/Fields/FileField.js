class FileField {

  /**
   * Upload files to Filefields.
   *
   * @param {string} fileSelector
   * @param {string} fileName
   * @param {string} url
   * @param {string} altSelector
   * @param {string} altDescription
   */
  upload(fileSelector, fileName, url, altSelector, altDescription) {
    cy.get(fileSelector).attachFile(fileName);

    cy.intercept({
      method: "POST",
      url: url
    }).as("load");

    cy.wait("@load");

    // Check if the image alt description is ready
    cy.get(altSelector).type(
      altDescription
    );
  }
}

export { FileField };

