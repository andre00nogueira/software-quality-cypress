Feature: Cache invoices data

  Background: open invoice's main page
    Given I open the main page

  Scenario: Empty inputs nothing cached
    When I fill no inputs
    When I close the page
    And I open the page again
    Then Inputs are still bank

  Scenario: Caching filled inputs
    When I fill all inputs
    When I close the page
    And I open the page again
    Then All previous inputs are loaded