package Cucumber.Cucumber001;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CucumberDefs {
  
  
   @Given("^launch browser$")
   public void print(){
       System.out.println("first case");
   }
   
   @When("^user enters credential details$")
   public void print2(){
       System.out.println("second case");
   }
   
   @Then("^login is successful$")
   public void print3(){
       System.out.println("third case");
   }
   
}
  