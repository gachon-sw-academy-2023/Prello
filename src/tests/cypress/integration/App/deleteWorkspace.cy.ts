export {};

describe('워크스페이스 삭제 테스트', () => {
  it('1. 워크스페이스 페이지 접속', () => {
    cy.visit('/workspace');
  });
  it('2. 특정 워크스페이스 접속', () => {
    cy.wait(3000);
    cy.get('div').contains('워크스페이스 생성').click();
  });
  it('3. 세팅 메뉴 접속', () => {
    cy.get('button').contains('Setting').click({ force: true });
  });
  it('4. 워크스페이스 버튼 삭제 선택', () => {
    cy.get('button').contains('워크스페이스 삭제').click();
  });
  it('4. 워크스페이스 정보 입력', () => {
    cy.get('input[data-testid="delete-workspace-name"]').type(
      '워크스페이스 생성',
    );
    cy.wait(500);
  });
  it('5. 워크스페이스 삭제', () => {
    cy.get('button').contains('삭제하기').click();
  });
});
