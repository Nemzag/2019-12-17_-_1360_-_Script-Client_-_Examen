/*
 * Created by PhpStorm.
 * User: Nemzag aka Gaz‑mên Arifi (Shkypi, 1979-09-30).
 * Date: 2019-12-17
 * Time: 12h34
 * Updated:
*/

"use strict";
//----------------------------------------------------------------------------------------
// init constantes…
//----------------------------------------------------------------------------------------

// Phase 1 : création des constantes.
const DIV_FEU_ROUGE_VOITURE = document.getElementById("feuRougeVoiture");

const DIV_FEU_ORANGE_VOITURE = document.getElementById("feuOrangeVoiture");

const DIV_FEU_VERT_VOITURE = document.getElementById("feuVertVoiture");

const DIV_FEU_ROUGE_PIETON = document.getElementById("feuRougePietons");
const DIV_FEU_VERT_PIETON = document.getElementById("feuVertPietons");

const BUTTON_INTERRUPTER = document.getElementById("boutonInterrupter");


//----------------------------------------------------------------------------------------
// init évènements…
//----------------------------------------------------------------------------------------

// Phase 2 : évènement.
BUTTON_INTERRUPTER.addEventListener("click", activationInterrupter);

//----------------------------------------------------------------------------------------
// Outils.
//----------------------------------------------------------------------------------------

/*function loop() {

    activationInterrupter();*/

function activationInterrupter() {

    BUTTON_INTERRUPTER.disabled = true;

    DIV_FEU_ROUGE_VOITURE.style.backgroundColor = "dimgrey";
    DIV_FEU_ORANGE_VOITURE.style.backgroundColor = "dimgrey";
    DIV_FEU_VERT_VOITURE.style.backgroundColor = "green";

    DIV_FEU_ROUGE_PIETON.style.backgroundColor = "red";
    DIV_FEU_VERT_PIETON.style.backgroundColor = "dimgrey";


    let $temps = null;

    DIV_FEU_VERT_VOITURE.style.backgroundColor = "dimgrey";
    DIV_FEU_ORANGE_VOITURE.style.backgroundColor = "orange";

    setTimeout(passageOrangeVoiture, 2000);

    console.log("2 secondes de transition orange");

    function passageOrangeVoiture() {

        DIV_FEU_ROUGE_VOITURE.style.backgroundColor = "red";
        DIV_FEU_ORANGE_VOITURE.style.backgroundColor = "dimgrey";

        DIV_FEU_ROUGE_PIETON.style.backgroundColor = "dimgrey";
        DIV_FEU_VERT_PIETON.style.backgroundColor = "green";
    }

    setTimeout(RougeVoitureVertPieton, 7000); // 15 sec pour test


    function RougeVoitureVertPieton() {

        console.log("15 secondes de rouge voiture & vert piéton.");

        DIV_FEU_ROUGE_VOITURE.style.backgroundColor = "red";
        DIV_FEU_ORANGE_VOITURE.style.backgroundColor = "dimgrey";
        DIV_FEU_VERT_VOITURE.style.backgroundColor = "dimgrey";

        DIV_FEU_ROUGE_PIETON.style.backgroundColor = "red";
        DIV_FEU_VERT_PIETON.style.backgroundColor = "dimgrey";
    }

    setTimeout(OrangeVoitureRougePieton, 8000); // 1 sec pour test

    function OrangeVoitureRougePieton() {

        console.log("1 secondes de rouge integrale.");

        DIV_FEU_ROUGE_VOITURE.style.backgroundColor = "dimgrey";
        DIV_FEU_ORANGE_VOITURE.style.backgroundColor = "orange";
        DIV_FEU_VERT_VOITURE.style.backgroundColor = "dimgrey";

        DIV_FEU_ROUGE_PIETON.style.backgroundColor = "red";
        DIV_FEU_VERT_PIETON.style.backgroundColor = "dimgrey";
    }

    setTimeout(VertVoitureRougePieton, 10000); // 1 sec pour test

    function VertVoitureRougePieton() {

        DIV_FEU_ROUGE_VOITURE.style.backgroundColor = "dimgrey";
        DIV_FEU_ORANGE_VOITURE.style.backgroundColor = "dimgrey";
        DIV_FEU_VERT_VOITURE.style.backgroundColor = "green";

        DIV_FEU_ROUGE_PIETON.style.backgroundColor = "red";
        DIV_FEU_VERT_PIETON.style.backgroundColor = "dimgrey";

        BUTTON_INTERRUPTER.disabled = false;
    }

}

/*
Pash de repetition
setInterval(activationInterrupter, 15000); // 5 sec pour test
activationInterrupter();
console.log("loop");
}
*/



