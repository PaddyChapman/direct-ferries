Feature: Route checks on the German site

    Scenario: 1 - German site - I search for a route and get taken to the right quote page 
        Given I am on the homepage
        And I have selected route 'Amalfi - Neapel'
        And I click the route from 'Amalfi' to 'Neapel'
        And I click the outbound vehicle option
        And I submit the form
        And I wait for quotes to load
        Then I am viewing route from 'Amalfi' to 'Neapel'

    Scenario: 2 - German site - I search for a route and get taken to the right quote page 
        Given I am on the homepage
        And I have selected route 'Neapel - Sorrent'
        And I click the route from 'Neapel' to 'Sorrent'
        And I click the outbound vehicle option
        And I submit the form
        And I wait for quotes to load
        Then I am viewing route from 'Neapel' to 'Sorrent'

    Scenario: 3 - German site - I search for a split route and get taken to the right quote page 
        Given I am on the homepage
        And I have selected route 'Sorrent - Ischia'
        And I click the route from 'Sorrent' to 'Ischia'
        And I click different details for return trip
        And I have selected return route 'Amalfi - Neapel'
        And I click the route from 'Amalfi' to 'Neapel'
        And I click the outbound vehicle option
        And I click the return vehicle option
        And I submit the form
        And I wait for quotes to load
        Then I am viewing route from 'Sorrent' to 'Ischia'
        And I am viewing route from 'Amalfi' to 'Neapel'
