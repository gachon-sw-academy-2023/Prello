export {};

describe('워크스페이스 생성 테스트', () => {
  it('1. 워크스페이스 페이지 접속', () => {
    cy.visit('/workspace');
  });
  it('2. 워크스페이스 생성 버튼 클릭', () => {
    cy.wait(3000);
    cy.get('img').click();

    cy.wait(2000);
    cy.get('ul li:last').click();

    cy.wait(2000);
  });
});
