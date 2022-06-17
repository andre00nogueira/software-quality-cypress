Feature: Cache invoices data

  Background: open invoice's main page
    Given I open the main page

  Scenario: Caching filled inputs
    When I select the date "2022-03-02" on calendar
    When I fill bill "to" fields with name: "John", email: "john@mail.com", address: "Very nice street"
    When I fill bill "from" fields with name: "Sami", email: "sami@mail.com", address: "Not so nice street"
    When I fill the tax rate field with value: "23", and the discount rate field with the value: "5"
    When I refresh the page
    Then The date field is filled with the date "2022-03-02"
    Then The "To" field is filled with name: "John", email: "john@mail.com", address: "Very nice street"
    Then The "From" field is filled with name: "Sami", email: "sami@mail.com", address: "Not so nice street"
    Then The the tax rate is filled with value: "23", and the discount rate is filled with value: "5"