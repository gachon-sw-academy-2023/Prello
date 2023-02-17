export {};

describe('보드 수정 테스트', () => {
  it('1. 워크스페이스 페이지 접속', () => {
    cy.visit('/workspace');
  });
  it('2. 특정 워크스페이스 접속', () => {
    cy.wait(3000);
    cy.get('div').contains('워크스페이스 생성').click();
  });
  it('3. 보드 생성 버튼 클릭', () => {
    cy.wait(1000);
    cy.get('div[data-testid="create-board"]').click();

    cy.wait(500);
    cy.get('input[data-testid="create-board-name"]').type('보드 생성');
    cy.get('div').contains('확인').click();
  });
  it('4. 특정 보드 이름 수정', () => {
    cy.wait(1000);
    cy.get('div[data-testid="update-board"]').click();
    cy.get('div').contains('보드 이름 변경').click();

    cy.get('input[data-testid="update-board-name"]').clear().type('보드 수정');
    cy.get('div').contains('확인').click();
  });
});
