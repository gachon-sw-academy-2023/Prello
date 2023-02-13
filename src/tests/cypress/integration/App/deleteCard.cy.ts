import axios from 'axios';

describe('카드 삭제 테스트', () => {
  it('1. 메인화면 접속', () => {
    cy.visit('/board');
    cy.wait(1000);
  });
  it('2. 메뉴 버튼 클릭', async () => {
    cy.get('.column')
      .get('div[data-testid="created-card"]')
      .get('[test-id="menu-btn"]')
      .click();
  });

  it('3. 메뉴 버튼 클릭', async () => {
    cy.get('.column')
      .get('div[data-testid="created-card"]')
      .get('[test-id="menu-btn"]');
  });
});
