Feature: Validate login functionality of application

    Scenario Outline: Verify login functionality of application
       Given I am on the home page
          When I click on open menu icon
            And I click on login button
          Then Application should recirect to login page
            And username field should be visible
            And Password field should be visible
            And Login button should be visible
          When I type valid "<userName>" and "<password>"
            And I click on Login button
          Then I <Validation>

    Examples: 
    | userName           | password | Validation                                     |
    | bob@example.com    | 10203040 | verify successful login                        |
    | alice@example.com  | 10203040 | validate the erorr message is visible          |
    | 1@2.com            | f-o-o    | validate the erorr message is visible          |
    |                    |          | validate the username error message is visible |
    | bob@example.com    |          | validate the password error message is visible |

