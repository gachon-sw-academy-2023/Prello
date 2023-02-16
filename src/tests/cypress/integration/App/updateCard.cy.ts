import axios from 'axios';

describe('카드 수정 테스트', () => {
  it('1. 보드페이지 접속', () => {
    cy.visit('/board/1');
    cy.wait(2000);
    cy.get('div').contains('ADD').click();
  });
  it('2. 타이틀 수정 및 아이템 추가', () => {
    cy.get('.column')
      .get('div[data-testid="created-card"]:first input')
      .type('new title');

    cy.contains('Add a card').click();
    cy.get('input[data-testid="input_item"]').should('be.visible');
    cy.get('input[data-testid="input_item"]').type('hihi');
    cy.get('button').contains('Add Item').click();

    cy.wait(2000);
    cy.contains('hihi').click();

    cy.contains('Save').click();
  });

  it('3. 아이템 전체 삭제', () => {
    cy.get('.column')
      .get('div[data-testid="created-card"]')
      .get('[test-id="menu-btn"]:first')
      .click();
    cy.wait(2000);

    cy.get('ul li:last').click();
    cy.wait(2000);
  });
});
