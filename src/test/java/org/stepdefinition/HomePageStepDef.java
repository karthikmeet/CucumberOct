package org.stepdefinition;

import org.junit.Assert;
import org.repository.HomePageRepo;

import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomePageStepDef {
	HomePageRepo repo = new HomePageRepo();

	@Given("background given statement")
	public void background_given_statement() {
		System.out.println("background given statement");
	}

	@When("background when statement")
	public void background_when_statement() {
		System.out.println("background when statement");
	}

	@Then("background then statement")
	public void background_then_statement() {
		System.out.println("background then statement");
	}

	@Given("Open fb and launch the application")
	public void open_fb_and_launch_the_application() {
		Hook.driver.get("https://www.facebook.com/");
	}

	@When("Enter username and password")
	public void enter_username_and_password() {
		Hook.type(repo.getUsername(), "Barath");
		Hook.type(repo.getPassword(), "pwd");
	}

	@Then("Close the browser")
	public void close_the_browser() {
		Hook.driver.close();
		Assert.assertTrue(false);
	}
}
