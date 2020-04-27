package firstapp.cucumber.pom.botwritten.factories;

import firstapp.cucumber.pom.botwritten.page.*;
import firstapp.cucumber.pom.botwritten.page.crudlist.*;
import com.google.inject.Inject;
import cucumber.runtime.java.guice.ScenarioScoped;
import java.util.Properties;
import lombok.*;
import org.openqa.selenium.WebDriver;

@ScenarioScoped
public class AdminPageFactory {

	@Inject
	protected WebDriver webDriver;

	@Inject
	protected Properties properties;

	@Inject
	EntitiesFishListPage entitiesFishListPage;
	@Inject
	EntitiesSpeciesListPage entitiesSpeciesListPage;
	@Inject
	EntitiesTankListPage entitiesTankListPage;
	@Inject
	UsersAdminListPage usersAdminListPage;
	@Inject
	UsersFishnaticListPage usersFishnaticListPage;


	public CrudListPage createCrudPage(String name) throws Exception {
		switch (name) {

			case "Fish":
				return entitiesFishListPage;
			case "Species":
				return entitiesSpeciesListPage;
			case "Tank":
				return entitiesTankListPage;
			case "Admin":
				return usersAdminListPage;
			case "Fishnatic":
				return usersFishnaticListPage;
			default :
				throw new Exception(String.format("Unexpected Crud list Page: %s", name));
		}
	}
}
