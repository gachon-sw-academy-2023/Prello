export {};

describe('보드 수정 테스트', () => {
  it('1. 워크스페이스 페이지 접속', () => {
    cy.visit('/workspace');
  });
  it('2. 특정 워크스페이스 접속', () => {
    cy.wait(3000);
    cy.get('div').contains('워크스페이스 생성').click();
  });
  it('3. 특정 보드 이름 수정', () => {
    cy.wait(1000);
    cy.get('div[data-testid="update-board"]').click();
    cy.get('div').contains('보드 이름 변경').click();

    cy.get('input[data-testid="update-board-name"]').clear().type('보드 수정');
    cy.get('div').contains('확인').click();
  });
});
