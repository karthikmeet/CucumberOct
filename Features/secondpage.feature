Feature: SecondPageFeature

  Scenario Outline: Second Page Scenario
    Given SOOpen fb and launch the application
    When SOEnter username as "<arg1>" and password as "<arg2>"
    Then SOClose the browser

    Examples: 
      | arg1    | arg2 |
      | Vignesh | B    |
      | Archana | C    |
