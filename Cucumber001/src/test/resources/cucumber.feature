Feature: My first regression script

  Scenario: Login page
    Given launch browser
    When user enters credential details
    Then login is successful
