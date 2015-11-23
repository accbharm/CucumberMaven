package Cucumber.Cucumber001;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)   // use Control Shift o to import class
@CucumberOptions(
                tags = {},
				format = { "pretty","html: cucumber-html-reports",
                "json: cucumber-html-reports/cucumber.json" },
				features = "src/test/resources/")


public class RunCukesTest {
 }