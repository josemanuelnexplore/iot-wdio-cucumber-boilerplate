Feature: Login into the website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should land on the Project Overview

    Examples:
      | username | password |
      | john | john |
