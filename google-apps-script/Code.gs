/**
 * @OnlyCurrentDoc
 */

/**
 * The entry point for the add-on's homepage trigger.
 * This function is called when the add-on is opened.
 *
 * @param {Object} e The event object.
 * @returns {CardService.Card} The card to display as the homepage.
 */
function onHomepage(e) {
  console.log("onHomepage event fired. Immediately opening viewer sidebar.");
  // Immediately trigger the sidebar to open for a more direct user experience.
  onOpenViewer();
  
  // Return a simple placeholder card, as this is required by the homepageTrigger.
  // This card will be visible in the side panel while the main sidebar is open.
  return createPlaceholderCard();
}

/**
 * Creates a simple placeholder card to be shown in the main side panel
 * after the viewer sidebar has been opened.
 *
 * @returns {CardService.Card} The placeholder card.
 */
function createPlaceholderCard() {
  const section = CardService.newCardSection()
      .addWidget(CardService.newTextParagraph()
          .setText("The BIM viewer is open in the sidebar. You can close this panel if you wish."));

  const card = CardService.newCardBuilder()
      .setHeader(CardService.newCardHeader().setTitle('BIM Viewer'))
      .addSection(section)
      .build();

  return card;
}

/**
 * The function that opens the main viewer dialog.
 * It uses a template to show the `Sidebar.html` file in a larger dialog window.
 */
function onOpenViewer() {
  const template = HtmlService.createTemplateFromFile('Sidebar');
  const content = template.evaluate().getContent();
  const htmlOutput = HtmlService.createHtmlOutput(content)
      .setWidth(800)
      .setHeight(600);
  DocumentApp.getUi().showModelessDialog(htmlOutput, 'BIM Viewer');
}

/**
 * Includes the content of another HTML file in the current template.
 * This is a standard Apps Script templating utility function.
 * @param {string} filename The name of the file to include (e.g., 'main.js').
 * @return {string} The content of the included file.
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
} 