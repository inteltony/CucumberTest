package runnerpackage;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;;

@RunWith(Cucumber.class)
@CucumberOptions(
 plugin = { "html:target/cucumber-html-reports", "json:target/cucumber-html-reports/cucumber.json"},
 features = "src/test/resources/features"
 ,glue={"stepDefinition"}
 )
public class runnerFile {
	

}
