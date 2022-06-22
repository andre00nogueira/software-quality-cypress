Feature: Cache invoices data

  Background: open invoice's main page
    Given I open the main page

  Scenario: Caching filled inputs
    When I select the date "2022-03-02" on calendar
    When I fill bill "to" fields with name: "John", email: "john@mail.com", address: "Very nice street"
    When I fill bill "from" fields with name: "Sami", email: "sami@mail.com", address: "Not so nice street"
    When I fill the tax rate field with value: "23", and the discount rate field with the value: "5"
    When I fill the invoice number with value: "3"
    When I fill the notes with value: "This is a very nice node"
    When I fill the item fields with name: "Hammer", description: "Hello World", quantity : "3" and Price: "4.50"
    When I select the currency "JPY (Japanese Yen)"
    When I refresh the page
    Then The date field is filled with the date "2022-03-02"
    Then The "To" field is filled with name: "John", email: "john@mail.com", address: "Very nice street"
    Then The "From" field is filled with name: "Sami", email: "sami@mail.com", address: "Not so nice street"
    Then The the tax rate is filled with value: "23", and the discount rate is filled with value: "5"
    Then The invoice number is filled with the value "3"
    Then The notes is filled with the value "This is a very nice node"
    Then The item "1" fields  are filled with name: "Hammer", description: "Hello World", quantity : "3" and Price: "4.50"
    Then The selected currency is "¥" and the shown label is "JPY (Japanese Yen)"

  Scenario: No inputs filled
    When No fields are filled
    When I refresh the page
    Then No fields are filled

  Scenario: Caching filled inputs with multiple items
    When I select the date "2022-03-02" on calendar
    When I fill bill "to" fields with name: "John", email: "john@mail.com", address: "Very nice street"
    When I fill bill "from" fields with name: "Sami", email: "sami@mail.com", address: "Not so nice street"
    When I fill the tax rate field with value: "23", and the discount rate field with the value: "5"
    When I fill the invoice number with value: "3"
    When I fill the notes with value: "This is a very nice node"
    When I fill the item fields with name: "Hammer", description: "Hello World", quantity : "3" and Price: "4.50"
    When I click on the button with label "Add Item"
    When I fill the item fields with name: "VeRy Nice Item", description: "this is not a nice description", quantity : "43" and Price: "24.5"
    When I select the currency "AUD (Australian Dollar)"
    When I refresh the page
    Then The date field is filled with the date "2022-03-02"
    Then The "To" field is filled with name: "John", email: "john@mail.com", address: "Very nice street"
    Then The "From" field is filled with name: "Sami", email: "sami@mail.com", address: "Not so nice street"
    Then The the tax rate is filled with value: "23", and the discount rate is filled with value: "5"
    Then The invoice number is filled with the value "3"
    Then The notes is filled with the value "This is a very nice node"
    Then The item "1" fields  are filled with name: "Hammer", description: "Hello World", quantity : "3" and Price: "4.50"
    Then The item "2" fields  are filled with name: "VeRy Nice Item", description: "this is not a nice description", quantity : "43" and Price: "24.5"
    Then The selected currency is "$ aud" and the shown label is "AUD (Australian Dollar)"

  Scenario: Caching filled inputs with a item deletion
    When I select the date "2022-03-02" on calendar
    When I fill bill "to" fields with name: "John", email: "john@mail.com", address: "Very nice street"
    When I fill bill "from" fields with name: "Sami", email: "sami@mail.com", address: "Not so nice street"
    When I fill the tax rate field with value: "23", and the discount rate field with the value: "5"
    When I fill the invoice number with value: "3"
    When I fill the notes with value: "This is a very nice node"
    When I select the currency "BTC (Bitcoin)"
    When I fill the item fields with name: "Hammer", description: "Hello World", quantity : "3" and Price: "4.50"
    When I click on the button with label "Add Item"
    When I fill the item fields with name: "VeRy Nice Item", description: "this is not a nice description", quantity : "43" and Price: "24.5"
    When I click on the button Delete Item
    When I refresh the page
    Then The date field is filled with the date "2022-03-02"
    Then The "To" field is filled with name: "John", email: "john@mail.com", address: "Very nice street"
    Then The "From" field is filled with name: "Sami", email: "sami@mail.com", address: "Not so nice street"
    Then The the tax rate is filled with value: "23", and the discount rate is filled with value: "5"
    Then The invoice number is filled with the value "3"
    Then The notes is filled with the value "This is a very nice node"
    Then The item "1" fields  are filled with name: "VeRy Nice Item", description: "this is not a nice description", quantity : "43" and Price: "24.5"
    Then The selected currency is "₿" and the shown label is "BTC (Bitcoin)"

  Scenario: Caching filled inputs with shipping address
    When I select the date "2022-03-02" on calendar
    When I fill bill "to" fields with name: "John", email: "john@mail.com", address: "Very nice street"
    When I fill bill "from" fields with name: "Sami", email: "sami@mail.com", address: "Not so nice street"
    When I fill the tax rate field with value: "23", and the discount rate field with the value: "5"
    When I fill the invoice number with value: "3"
    When I fill the notes with value: "This is a very nice node"
    When I select the currency "GBP (British Pound Sterling)"
    When I fill the item fields with name: "Hammer", description: "Hello World", quantity : "3" and Price: "4.50"
    When I write "Great street" in the field "shipToAddress"
    When I set the "Same as Shipping" button to be checked
    When I refresh the page
    Then The date field is filled with the date "2022-03-02"
    Then The "To" field is filled with name: "John", email: "john@mail.com", address: "Great street"
    Then The "From" field is filled with name: "Sami", email: "sami@mail.com", address: "Not so nice street"
    Then The the tax rate is filled with value: "23", and the discount rate is filled with value: "5"
    Then The invoice number is filled with the value "3"
    Then The notes is filled with the value "This is a very nice node"
    Then The selected currency is "£" and the shown label is "GBP (British Pound Sterling)"
    Then The item "1" fields  are filled with name: "Hammer", description: "Hello World", quantity : "3" and Price: "4.50"
    Then I see the field "billToAddress" is equal to "Great street"