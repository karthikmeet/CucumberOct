package org.stepdefinition;

import org.repository.HomePageRepo;

import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SecondPageStepDef {
	HomePageRepo repo = new HomePageRepo();
	
	@Given("SOOpen fb and launch the application")
	public void open_fb_and_launch_the_application() {
	    Hook.driver.get("https://www.facebook.com/");
	}

	@When("SOEnter username as {string} and password as {string}")
	public void enter_username_and_password(String username, String password) {
	    Hook.type(repo.getUsername(), username);
	    Hook.type(repo.getPassword(), password);
	}
		
	@Then("SOClose the browser")
	public void close_the_browser() {
	    Hook.driver.close();
	}

}
