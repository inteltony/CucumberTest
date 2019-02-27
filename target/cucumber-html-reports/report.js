$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("sampleFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Sample Feature",
  "description": "",
  "id": "sample-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Sample Scenario",
  "description": "",
  "id": "sample-feature;sample-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sampleTag"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "sample given statement",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "sample when statement",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "sample then statement",
  "keyword": "Then "
});
formatter.match({
  "location": "sampleSteps.sample_given_statement()"
});
formatter.result({
  "duration": 85180278,
  "status": "passed"
});
formatter.match({
  "location": "sampleSteps.sample_when_statement()"
});
formatter.result({
  "duration": 275911,
  "error_message": "java.lang.AssertionError: Test2 expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat stepDefinition.sampleSteps.sample_when_statement(sampleSteps.java:20)\r\n\tat ✽.When sample when statement(sampleFeature.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "sampleSteps.sample_then_statement()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Sample Scenario2",
  "description": "",
  "id": "sample-feature;sample-scenario2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@sampleTag"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "sample given statement",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "sample when statement",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "sample then statement",
  "keyword": "Then "
});
formatter.match({
  "location": "sampleSteps.sample_given_statement()"
});
formatter.result({
  "duration": 42097,
  "status": "passed"
});
formatter.match({
  "location": "sampleSteps.sample_when_statement()"
});
formatter.result({
  "duration": 126293,
  "error_message": "java.lang.AssertionError: Test2 expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat stepDefinition.sampleSteps.sample_when_statement(sampleSteps.java:20)\r\n\tat ✽.When sample when statement(sampleFeature.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "sampleSteps.sample_then_statement()"
});
formatter.result({
  "status": "skipped"
});
});