Feature: Manage Invoice Items

  Background: open invoice's main page
    Given I open the main page

  Scenario: Add new item with success
    When I click on the button with label "Add Item"
    Then a new empty item is created
    And the total price should be "2"

  Scenario: Remove existing item with success
    And I have at least one item
    When I click on the button Delete Item
    Then the selected item is removed from the list
    And the total price should be "0"

  Scenario Outline: Manage item quantity
    Given there are "<quantity>" units of an item at "<value>" each
    When I change the item quantity to "<nextQuantity>"
    Then the total price should be "<total>"

    Examples:
      | quantity | value | nextQuantity | total |
      | 1        | 2     | 2            | 4     |
      | 10       | 2     | 8            | 16    |
      | 6        | 2     | 0            | 0     |
      | 0        | 2     | -1           | -2    |

  Scenario Outline: Manage item value
    Given there are "<quantity>" units of an item at "<value>" each
    When I change the item value to "<nextValue>"
    Then the total price should be "<total>"

    Examples:
      | quantity | value | nextValue | total |
      | 10       | 2     | 4         | 40    |
      | 10       | 8     | 0         | 0     |
      | 10       | -4    | 0         | 0     |
      | 10       | 2     | -5        | -50   |