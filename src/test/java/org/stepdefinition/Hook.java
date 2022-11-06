package org.stepdefinition;

import org.junit.After;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Hook {

	public static WebDriver driver;

	@Before
	public static WebDriver browserlaunch() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		return driver;
	}

	public static void type(WebElement element, String data)
	{
		element.sendKeys(data);
	}
		
	@After
	public static void close() {
		// driver.close();
	}
}
