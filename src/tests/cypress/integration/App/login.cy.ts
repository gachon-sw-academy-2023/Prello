describe('로그인 테스트', () => {
  it('1. 메인화면 접속', () => {
    cy.visit('/');
  });
  it('2. 로그인 메뉴 클릭', () => {
    cy.wait(1000);
    cy.get('button').contains('Log In').click();
  });
  it('3. 이메일 입력', () => {
    cy.get("input[data-testid='email']").type('test@gmail.com');
  });
  it('4. 비밀번호 입력', () => {
    cy.get("input[data-testid='password']").type('Test1234');
  });
  it('5. 로그인 버튼 클릭', () => {
    cy.get('button').contains('Login').click();
  });
  it('6. 로그인 확인', () => {
    cy.wait(2000);
    cy.get('span').contains('Welcome');
  });
});
