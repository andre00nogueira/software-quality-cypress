Feature: Manage Invoice Items

  Background:
    Given I open the main page

  Scenario: Add new item with success
    When I click on the button with label "Add Item"
    Then a new empty item is created

  Scenario: Remove existing item with success
    And I have at least one item
    When I click on the button Delete Item
    Then the selected item is removed from the list

  Scenario Outline: Increase item value
    Given there are <quantity> units of an item at <value> each
    When I increase <times> times the item quantity
    Then the total price should be <total>

    Examples:
      | quantity | value | times | total |
      | 1        | 1     | 2     | 2     |
      | 10       | 6     | 5     | 90    |
      | 1        | -10   | 2     | -20   |
