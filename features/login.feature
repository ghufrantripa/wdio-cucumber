Feature: Login Test

Background:
    Given user is on Login page

Scenario: Success Login
    When user login using "standard_user" as username and "secret_sauce" as password
    Then user should be redirected to homepage

Scenario: Login with wrong password
    When user login using "standard_user" as username and "wrong_password" as password
    Then user should see error message "Epic sadface: Username and password do not match any user in this service"

Scenario: Add and Remove Item from Cart
    Given user is logged in
    When user adds "Sauce Labs Backpack" to the cart
    And user removes "Sauce Labs Backpack" from the cart
    Then the cart should be empty

Scenario: Multiple Items in Cart
    Given user has added "Sauce Labs Backpack" and "Sauce Labs Bike Light" to the cart
    When user views the cart
    Then the cart should have 2 items
