package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class sampleSteps {
	
	@Given("^sample given statement$")
	public void sample_given_statement() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
//	    throw new PendingException();
		Assert.assertEquals("Test1",true,true);
	}

	@When("^sample when statement$")
	public void sample_when_statement() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertEquals("Test2",true,false);
//	    throw new PendingException();
	}

	@Then("^sample then statement$")
	public void sample_then_statement() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
//	    throw new PendingException();
	}
}
