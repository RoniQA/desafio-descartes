package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import baseClass.BasePage;

public class iframeQuadroVerdePage extends BasePage {
    public iframeQuadroVerdePage(WebDriver _browser) {
        super(_browser);
    }

    private String url = "https://codepen.io/choskim/pen/RLYebL";
    private By square = By.className("square");

    public void openPage() {
        browser.get(url);
        browser.switchTo().frame(0);
        waitForPageLoad(3);
    }

    public void longClickSquare() throws InterruptedException {
        waitElementVisible(square, 3);
        WebElement element = browser.findElement(square);
        actions.clickAndHold(element).build().perform();
        Thread.sleep(2000);
        actions.moveToElement(element).release();
    }

    public Dimension getSizeSquare() {
        return browser.findElement(square).getSize();
    }
}
