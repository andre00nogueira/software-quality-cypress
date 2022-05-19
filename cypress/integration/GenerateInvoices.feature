Feature: Generate Invoices

  Background: open invoice's main page
    Given I open the main page
    And I have no downloaded files

  Scenario: Create single invoice
    When I select the date "2022-03-02" on calendar
    When I fill bill "to" fields with name: "John", email: "john@mail.com", address: "Street something"
    When I fill bill "from" fields with name: "Sami", email: "sami@mail.com", address: "Street something"
    When I fill the item fields with name: "Hammer" and description: "Hello World"
    When I click on "Review Invoice" button
    When I click on "Download Copy" button
    Then A PDF with invoice is downloaded

  Scenario: Generate multiple invoices
    When I select the date "2022-03-02" on calendar
    When I fill bill "to" fields with name: "John", email: "john@mail.com", address: "Street something"
    When I fill bill "from" fields with name: "Sami", email: "sami@mail.com", address: "Street something"
    When I fill the item fields with name: "Hammer" and description: "Hello World"
    When I click on "Add Item" button
    When I fill the item fields with name: "Testing" and description: "Hello World sadfasfa"
    When I click on "Review Invoice" button
    When I click on "Download Copy" button
    Then A PDF with invoice is downloaded


  Scenario Outline: Trying to generate with missing input parameters
    When I select the date "<date>" on calendar
    When I fill bill "to" fields with name: "<name>", email: "<email>", address: "<address>"
    When I fill bill "from" fields with name: "<name>", email: "<email>", address: "<address>"
    When I fill the item fields with name: "<itemName>" and description: "<itemDescription>"
    When I click on "Review Invoice" button
    Then There are "<invalid>" missing or invalid parameters
    Examples:
      | date       | name      | email          | address          | itemName | itemDescription  | invalid |
      | 2022-09-19 | Joao      | asd@ci.com     | Street           | Joe      |                  | 1       |
      |            |           | asda@asd.cmn   | Street Something | Mama     | some description | 3       |
      | 2016-11-19 | Rui       |                | 0                |          |                  | 4       |
      | 2012-02-11 | Andre     | asd@da         | -2               | AD       |                  | 1       |
      | 2012-02-03 | Alexandre | sadas.c        | Valid address    | hello    | description      | 2       |
      |            |           | valid@mail.com |                  |          |                  | 7       |
      |            |           |                |                  |          |                  | 9       |
      | 2017-02-01 |           |                |                  | testing  | nice description | 6       |