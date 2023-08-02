describe('тестирование huntingpony.com', function () {
    it('Добавляю товар в корзину, и оформляю заказ', function () {
         cy.visit('https://huntingpony.com/');
         cy.get('.header__search-form > .form-control').type('Ошейники').type('{enter}');
         cy.get('[data-product-id="338937349"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > picture > .loaded').click();
         cy.wait(3000);
         cy.get('.add-cart-counter__btn-label').click();
         cy.get('.header__cart > .icon').click();
         cy.wait(3000);
         cy.get('.is-count-up').click();
         cy.get('.cart-controls > .button').click();
         cy.contains('Оформление заказа').should('be.visible');
         cy.get('#client_surname').type('Актаев');
         cy.get('#client_contact_name').type('Антон');
         cy.get('#client_phone').type('8800553535');
         cy.get('#client_email').type('Hahahah@mail.ru');
         cy.get('[for="order_delivery_variant_id_5909897"] > .radio > span').click();
         cy.get('#shipping_address_street').type('Закаулочная');
         cy.get('#shipping_address_house').type('9888');
         cy.get('#shipping_address_flat').type('2')
         cy.get('#order_comment').type('Сделать надпись имени моего питомца на ошейники. Зовут БАРЯ');
         cy.get('[for="order_payment_gateway_id_3184571"] > .co-payment_method-input > span').click();
         cy.get('#checkout_buyer_fields > .co-input--required > .co-input-select > .co-input-field').select('Мальчик');
         cy.get('#order_field_24333471').type('Хаски');
         cy.get('#order_field_24333473').type('23.11.2015');
         cy.get('#order_field_24333473').click();
         cy.get('#create_order').click();
         cy.contains('Спасибо за заказ').should('be.visible');
        })
    })