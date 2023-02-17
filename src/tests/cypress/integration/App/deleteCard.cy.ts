import axios from 'axios';

describe('카드 삭제 테스트', () => {
  it('1. 보드페이지 접속', () => {
    cy.visit('/board/1');
    cy.wait(2000);
    cy.get('div').contains('ADD').click();
  });
  it('2. 삭제 버튼 클릭 및 삭제 확인', () => {
    cy.get('.column')
      .get('div[data-testid="created-card"]')
      .get('[test-id="menu-btn"]:first')
      .click();
    cy.wait(2000);

    cy.get('ul li:first').click();
  });
});
