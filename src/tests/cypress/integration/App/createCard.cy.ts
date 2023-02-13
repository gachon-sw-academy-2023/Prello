import axios from 'axios';

describe('카드 생성 테스트', () => {
  it('1. 메인화면 접속', () => {
    cy.visit('/board');
  });
  it('2. 로그인 메뉴 클릭', () => {
    cy.wait(1000);
    cy.get('div').contains('ADD').click();
  });
  it('3. 카드 생성 확인', async () => {
    let card_len;
    const card = await axios.get('/card').then((res) => {
      card_len = res.data.length;
    });
    cy.get('.column')
      .get('div[data-testid="created-card"]')
      .should('have.length', card_len);
  });
});
