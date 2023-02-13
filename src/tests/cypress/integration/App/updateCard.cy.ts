import axios from 'axios';

describe('카드 수정 테스트', () => {
  it('1. 보드페이지 접속', () => {
    cy.visit('/board');
    cy.wait(2000);
  });
  it('2. 타이틀 수정 및 아이템 추가', async () => {
    cy.get('.column')
      .get('div[data-testid="created-card"]:first input')
      .type('new title');

    cy.contains('Add a card').click();
    cy.get('input[data-testid="input_item"]').should('be.visible');
  });
});
