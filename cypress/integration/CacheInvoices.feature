Feature: Cache invoices data

  Background: open invoice's main page
    Given I open the main page

  Scenario: Caching filled inputs
    When I fill bill "to" fields with name: "John", email: "john@mail.com", address: "Very nice street"
    When I fill bill "from" fields with name: "Sami", email: "sami@mail.com", address: "Not so nice street"
    When I refresh the page
    Then The "To" field is filled with name: "John", email: "john@mail.com", address: "Very nice street"
    Then The "From" field is filled with name: "Sami", email: "sami@mail.com", address: "Not so nice street"