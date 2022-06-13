Feature: Cache invoices data

  Background: open invoice's main page
    Given I open the main page

  Scenario: Caching filled inputs
    When I fill bill "to" fields with name: "John", email: "john@mail.com", address: "Street something"
    When I fill bill "from" fields with name: "Sami", email: "sami@mail.com", address: "Street something"
    When I refresh the page
    Then The "to" field is filled with name: "John"
    Then The "from" field is filled with name: "Sami"