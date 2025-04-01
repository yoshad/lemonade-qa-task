Feature: Lemonade Website Smoke Test

  Scenario: User lands on the homepage and navigates to Renters Insurance
    Given I open the Lemonade homepage
    When I click on the "Renters" link in the header
    Then I should be redirected to the Renters Insurance page
