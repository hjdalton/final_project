var faker = require('faker');

describe('New game', function() {
  it('can enter details to list a new game and displays them', function() {
    cy.visit('/newgame');
    var hostname = faker.name.findName();
    var randomGame = faker.lorem.word();
    var randomDesc = faker.lorem.words();
    var randomDate = '2025-05-05'
    var randomTime = '18:00'
    var randomAddress = faker.lorem.words();

    cy.get('.new-game').find('[id="hostname"]').type(hostname);
    cy.get('.new-game').find('[id="gametype"]').type(randomGame);
    cy.get('.new-game').find('[id="description"]').type(randomDesc);
    cy.get('.new-game').find('[id="date"]').type(randomDate);
    cy.get('.new-game').find('[id="time"]').type(randomTime);
    cy.get('.new-game').find('[id="address"]').type(randomAddress);
    cy.get('.new-game').submit();

    cy.get('.games').should('contain', hostname);
    cy.get('.games').should('contain', randomGame);
    cy.get('.games').should('contain', randomDesc);
    cy.get('.games').should('contain', 'Mon May 05 2025 01:00:00 GMT+0100 (British Summer Time)');
    cy.get('.games').should('contain', randomTime);
    cy.get('.games').should('contain', randomAddress);

  })
})