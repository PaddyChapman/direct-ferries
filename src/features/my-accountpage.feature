Feature: Direct Ferries My Account page

    Scenario: Try to login with incorrect details
        Given I am on the homepage
        When I navigate to my account page
        And I enter incorrect details
        And I click manage my booking
        Then I should see an error message
        