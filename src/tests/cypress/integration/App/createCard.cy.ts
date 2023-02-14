import axios from 'axios';

describe('카드 생성 테스트', () => {
  it('1. 보드페이지 접속', () => {
    cy.visit('/board/1');
  });
  it('2. 카드 생성 버튼 클릭', () => {
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
