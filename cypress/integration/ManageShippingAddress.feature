Feature: Manage Shipping Address

  Background: open invoice's main page
    Given I open the main page

  Scenario: Page Loaded, Default State
    When I navigate to the "Same as Shipping" button
    Then I see the button is not checked
    And all the fields of the billing address are not readonly

  Scenario: Mark Billing Address same as Shipping
    When I click on the button "Same as Shipping"
    Then all the fields of the billing address are equal to shipping address's fields
    And all the fields of the billing address are readonly
    And the "Same as Shipping" button is checked

  Scenario: Mark Billing Address different of Shipping
    And the billing address is marked same as shipping
    When I click on the button "Same as Shipping"
    Then all the fields of the billing address are empty
    And all the fields of the billing address are not readonly
    And the "Same as Shipping" button is unchecked