export {};
describe('로그인 테스트', () => {
  it('1. 메인화면 접속', () => {
    cy.visit('/');
  });
  it('2. 로그인 메뉴 클릭', () => {
    cy.wait(1000);
    cy.get('button').contains('Sign Up').click();
  });
  it('3. 이메일 입력', () => {
    cy.get("input[data-testid='email']").type('test@gmail.com');
  });
  it('4. 비밀번호 입력', () => {
    cy.get("input[data-testid='password']").type('Test1234');
  });
  it('5. 비밀번호 확인 입력', () => {
    cy.get("input[data-testid='passwordConfirm']").type('Test1234');
  });
  it('6. 닉네임 입력', () => {
    cy.get("input[data-testid='nickname']").type('test');
  });
  it('7. 회원가입 버튼 클릭', () => {
    cy.get('button').contains('Done').click();
  });
});
