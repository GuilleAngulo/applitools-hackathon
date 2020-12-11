const url = "https://demo.applitools.com/tlcHackathonMasterV2.html"

const browserCombo = [
  { width: 1200, height: 800, name: "chrome" },
  { width: 1200, height: 800, name: "firefox" },
  { width: 1200, height: 800, name: "edge" },
  { width: 1200, height: 800, name: "safari" },
  {
    deviceName: "iPhone X"
  }
]

describe(`Part 1`, () => {

    beforeEach(() => {
      cy.visit(url);
    });

    afterEach(() => {
      cy.eyesClose();
    });

    it('Test 1', function () {

        cy.eyesOpen({ browser: browserCombo, testName: this.test.title })
        
        cy.eyesCheckWindow({
            tag: "main page",
            target: 'window',
            fully: true
        });

    });

    it('Test 2', function () {

        cy.eyesOpen({  browser: browserCombo, testName: this.test.title })

        cy.get('#filter_1').find('li').contains('Black').click();
        cy.get('#filterBtn').click();

        cy.eyesCheckWindow({
            target: 'region',
            selector: '#product_grid',
            tag: "filter by color",
          });

        cy.get('#product_grid').children().should('have.length', 2)

    });

    it(`Test 3`, function () {

      cy.eyesOpen({  browser: browserCombo, testName: this.test.title })

      cy.get('h3').contains('Appli Air x Night').click();
      
      cy.eyesCheckWindow({
        tag: "product details",
        target: 'window',
        fully: true
      });

    });

});