@projectOverview @Regression
Feature: Select a project from the Project Overview

Background:

    * I am on the login page
    * I login with john and john
    * I should land on the Project Overview
Scenario Outline: As a user, I can select a project from the Project Overview

    Given I confirm the Project Overview
    # When I select the project <selection>
    # Then I should land on the Dashboard of the project
  
  #   Examples:
  #     | selection |
  #     | DE365     |
  #     | DE145     |
  #     | DE445     |
  #     | BE6131    |
  #     | SB111     |
  #     | CE1560    |
  #     | TO789     |