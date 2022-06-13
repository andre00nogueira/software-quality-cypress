Feature: Manage Shipping Address

  Background: open invoice's main page
    Given I open the main page

  Scenario: Page Loaded, Default State
    When The page is loaded
    Then I see the "Same as Shipping" button is not checked
    And all the fields of the billing address are not readonly