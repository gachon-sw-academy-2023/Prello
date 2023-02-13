import axios from 'axios';

describe('카드 삭제 테스트', () => {
  it('1. 보드페이지 접속', () => {
    cy.visit('/board');
    cy.wait(2000);
  });
  it('2. 삭제 버튼 클릭 및 삭제 확인', async () => {
    cy.get('.column')
      .get('div[data-testid="created-card"]')
      .get('[test-id="menu-btn"]:first')
      .click();
    cy.wait(2000);
    cy.get('ul li:first').click();

    cy.wait(2000);
    let card_len;
    const card = await axios.get('/card').then((res) => {
      card_len = res.data.length;
    });
    cy.get('.column')
      .get('div[data-testid="created-card"]')
      .should('have.length', card_len);
  });
});
