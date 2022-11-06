package org.stepdefinition;

import java.util.List;
import java.util.Map;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class DataTableStepDef {

	@Given("DTOpen fb and launch the application")
	public void DTOpen_fb_and_launch_the_application(DataTable table) {
		Map<String, String> asMap = table.asMap(String.class, String.class);
//		System.out.println(asMap.get("A"));
//		System.out.println(asMap.get("B"));
//		System.out.println(asMap.get("C"));	
	}

	@When("DTEnter username and password")
	public void dtenter_username_and_password(DataTable table3) {
		List<Map<String, String>> asMaps = table3.asMaps();
		System.out.println(asMaps.get(0).get("Username"));
		System.out.println(asMaps.get(1));
		System.out.println(asMaps.get(2).get("Password"));	
	}

	@Then("DTClose the browser")
	public void dtclose_the_browser() {

	}

}
