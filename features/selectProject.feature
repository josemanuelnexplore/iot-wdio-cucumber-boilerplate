
Feature: After login, pick a project from the Project Overview

  Background: As a user, I can log into the secure area

    * I am on the login page
    * I login with john and john
    * I should land on the Project Overview

  Scenario: As a logged user, I can select a project from the Project Overview

  Given I Project
    # When I choose a project from the <selection>
    # Then I should land on the Dashboard

    # Examples:
    #   | selection |
    #   | DE365     |
    #   | DE145     |
    #   | DE445     |
    #   | BE6131    |
    #   | SB111     |
    #   | CE1560    |
    #   | TO789     |