$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/homepageoct.feature");
formatter.feature({
  "name": "HomePageFeature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@testing"
    }
  ]
});
formatter.background({
  "name": "Sample Background",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "background given statement",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDef.background_given_statement()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "background when statement",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepDef.background_when_statement()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "background then statement",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.background_then_statement()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sample Scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@testing"
    }
  ]
});
formatter.step({
  "name": "Open fb and launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDef.open_fb_and_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepDef.enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Features/secondpage.feature");
formatter.feature({
  "name": "SecondPageFeature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Second Page Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "SOOpen fb and launch the application",
  "keyword": "Given "
});
formatter.step({
  "name": "SOEnter username as \"\u003carg1\u003e\" and password as \"\u003carg2\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "SOClose the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "arg1",
        "arg2"
      ]
    },
    {
      "cells": [
        "Vignesh",
        "B"
      ]
    },
    {
      "cells": [
        "Archana",
        "C"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Second Page Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "SOOpen fb and launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "SecondPageStepDef.open_fb_and_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "SOEnter username as \"Vignesh\" and password as \"B\"",
  "keyword": "When "
});
formatter.match({
  "location": "SecondPageStepDef.enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "SOClose the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SecondPageStepDef.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Second Page Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "SOOpen fb and launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "SecondPageStepDef.open_fb_and_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "SOEnter username as \"Archana\" and password as \"C\"",
  "keyword": "When "
});
formatter.match({
  "location": "SecondPageStepDef.enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "SOClose the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SecondPageStepDef.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});