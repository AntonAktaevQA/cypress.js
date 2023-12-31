describe('Тестирование формы Логина', function () {
    it('Ввод верного логина и пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#loginButton').should('be.disabled')
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#loginButton').should('be.disabled')
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').should('be.enabled')
         cy.get('#loginButton').click();
         cy.wait(1000);
         cy.contains('Авторизация прошла успешно').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
 })
 

 describe('Тестирование формы Логина', function () {
    it('Ввод не верного логина и верного пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#loginButton').should('be.disabled')
         cy.get('#mail').type('german1@dolnikov.ru');
         cy.get('#loginButton').should('be.disabled')
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').should('be.enabled')
         cy.get('#loginButton').click();
         cy.wait(1000);
         cy.contains('Такого логина или пароля нет').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
 })

 describe('Тестирование формы Логина', function () {
    it('Ввод верного логина и неверного пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#loginButton').should('be.disabled')
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#loginButton').should('be.disabled')
         cy.get('#pass').type('iLoveqastudio');
         cy.get('#loginButton').should('be.enabled')
         cy.get('#loginButton').click();
         cy.wait(1000);
         cy.contains('Такого логина или пароля нет').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
 })


 describe('Тестирование формы Логина', function () {
    it('Ввод логина без @, при правильном пароле', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#loginButton').should('be.disabled')
         cy.get('#mail').type('germandolnikov.ru');
         cy.get('#loginButton').should('be.disabled')
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').should('be.enabled')
         cy.get('#loginButton').click();
         cy.wait(1000);
         cy.contains('Нужно исправить проблему валидации').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
 })


 describe('Тестирование формы Логина', function () {
    it('Забыли пароль?', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click();
         cy.contains('Восстановите пароль').should('be.visible');
         cy.get('#exitRestoreButton > .exitIcon').should('be.visible');
         cy.get('#mailForgot').type('german@dolnikov.ru')
         cy.get('#restoreEmailButton').click();
         cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').click();
         cy.wait(1000);
         cy.contains('Форма логина').should('be.visible');
     })
 })


 describe('Тестирование формы Логина', function () {
    it('Приведение к строчным буквам в логине, при верном пароле', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#loginButton').should('be.disabled')
         cy.get('#mail').type('GerMan@Dolnikov.ru');
         cy.get('#loginButton').should('be.disabled')
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').should('be.enabled')
         cy.get('#loginButton').click();
         cy.contains('Такого логина или пароля нет').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').click();
         cy.wait(1000);
         cy.contains('Форма логина').should('be.visible');
     })
 })
