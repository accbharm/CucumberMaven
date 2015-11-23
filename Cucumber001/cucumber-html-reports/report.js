$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber.feature");
formatter.feature({
  "id": "my-first-regression-script",
  "description": "",
  "name": "My first regression script",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "my-first-regression-script;login-page",
  "description": "",
  "name": "Login page",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "launch browser",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "user enters credential details",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "login is successful",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "location": "CucumberDefs.print()"
});
formatter.result({
  "duration": 310431353,
  "status": "passed"
});
formatter.match({
  "location": "CucumberDefs.print2()"
});
formatter.result({
  "duration": 60342,
  "status": "passed"
});
formatter.match({
  "location": "CucumberDefs.print3()"
});
formatter.result({
  "duration": 56711,
  "status": "passed"
});
});