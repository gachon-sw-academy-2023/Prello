export {};

describe('워크스페이스 수정 테스트', () => {
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
  it('4. 워크스페이스 정보 입력', () => {
    cy.get('input[data-testid="update-workspace-name"]')
      .clear()
      .type('워크스페이스 수정');
    cy.get('input[data-testid="update-workspace-summary"]')
      .clear()
      .type('워크스페이스 수정');
  });
  it('5. 워크스페이스 수정', () => {
    cy.get('button').contains('변경 사항 저장').click();
  });
  it('6. 워크스페이스 페이지 이동', () => {
    cy.visit('/workspace');
  });
});
