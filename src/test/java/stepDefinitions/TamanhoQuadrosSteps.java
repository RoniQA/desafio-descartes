package stepDefinitions;

import baseClass.BaseSteps;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import org.junit.Assert;
import pageObjects.iframeQuadroVerdePage;
import org.openqa.selenium.Dimension;

public class TamanhoQuadrosSteps extends BaseSteps {

    iframeQuadroVerdePage paginaQuadradoVerde = new iframeQuadroVerdePage(BaseSteps.browser);

    @Dado("^que estou na pagina codepen.io$")
    public void que_estou_na_pagina_codepen_io() throws Throwable {
        paginaQuadradoVerde.openPage();
        BaseSteps.screenShotNow();
    }

    @Quando("^der um longclick no quadro verde$")
    public void der_um_longclick_no_quadro_verde() throws InterruptedException {
        paginaQuadradoVerde.longClickSquare();
    }

    @Entao("^o quadro devera expandir para escala (\\d+) x (\\d+) em pixels$")
    public void o_quadro_devera_expandir_para_escala_x_em_pixels(int arg1, int arg2) throws Throwable {
        Dimension tamanhoEsperado = new Dimension(arg1, arg2);
        Dimension tamanhoNaTela = paginaQuadradoVerde.getSizeSquare();
        Assert.assertEquals(tamanhoEsperado, tamanhoNaTela);
        BaseSteps.screenShotNow();
    }
}
