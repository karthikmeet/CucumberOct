Feature: datatablesampleFeature

  Scenario: Sample Scenario
    Given DTOpen fb and launch the application
      |A|Archana|
      |B|Barath|
      |C|Deepthi|
    When DTEnter username and password
      |Username|Password|
      |John|@xxx|
      |Karthik|@xxx|
      |Ganesh|@xxx|
    Then DTClose the browser
