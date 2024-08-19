Feature: Direct Ferries homepage

    Scenario: Popular operators appear
        Given I am on the homepage
        Then I see popular operators

    Scenario: Top destinations appear
        Given I am on the homepage
        Then I see top destinations
    
    Scenario: Latest offers appear
        Given I am on the homepage
        Then I see latest offers

    Scenario: Tips and information appear
        Given I am on the homepage
        Then I see tips and information

    Scenario: Popular routes appear
        Given I am on the homepage
        Then I can see popular routes