Feature: Manage Shipping Address

  Background: open invoice's main page
    Given I open the main page

  Scenario: Page Loaded, Default State
    When The page is loaded
    Then I see the "Same as Shipping" button is not checked
    And all the fields of the billing address are not readonly

  Scenario: Mark Billing Address same as Shipping
    When I write "Rua Teste" in the field "shipToAddress"
    And I click on the button "Same as Shipping"
    Then I see the field "billToAddress" is equal to "Rua Teste"
    And I see the field "shipToAddress" is equal to "Rua Teste"
    And I see the field "billToAddress" is readonly
    And I see the "Same as Shipping" button is checked