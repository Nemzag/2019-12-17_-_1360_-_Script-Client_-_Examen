/*
 * Created by PhpStorm.
 * User: Nemzag aka Gaz‑mên Arifi (Shkypi, 1979-09-30).
 * Date: 2019-12-17
 * Time: 09h07
 * Updated:
*/

"use strict";
//----------------------------------------------------------------------------------------
// init constantes…
//----------------------------------------------------------------------------------------

// Phase 1 : création des constantes.
const DIV_COMMANDE_COMPLETE_2019_EXAMEN = document.getElementById("divCommandeComplete_2019_examen");

const DIV_ENTREES_2019_EXAMEN = document.getElementById("divEntree_2019_examen");

const DIV_PLATS_ET_ACCOMPAGNEMENTS_2019_EXAMEN = document.getElementById("divPlatsAccompagnements_2019_examen");

const DIV_PLATS_2019_EXAMEN = document.getElementById("divPlats_2019_examen");

const DIV_ACCOMPAGNEMENTS_2019_EXAMEN = document.getElementById("divAccompagnements_2019_examen");

const DIV_DESSERTS_2019_EXAMEN = document.getElementById("divDesserts_2019_examen");

const BOUTON_COMMANDER_2019_EXAMEN = document.getElementById("boutonCommander_2019_examen");

const DIV_AFFICHAGE_COMMANDE = document.getElementById("divAffichageCommande");
//----------------------------------------------------------------------------------------
// init évènements…
//----------------------------------------------------------------------------------------

// Phase 2 : évènement.
BOUTON_COMMANDER_2019_EXAMEN.addEventListener("click", commander_2019_examen);
//----------------------------------------------------------------------------------------
// Outils.
//----------------------------------------------------------------------------------------
menuGeneration_2019_examen();

//----------------------------------------------------------------------------------------
// Génération du menu.
//----------------------------------------------------------------------------------------

function menuGeneration_2019_examen() {

    divEntrees_2019_examen();

    function divEntrees_2019_examen() {

        fetch("./php/csv_to_json.php?csv_file=../csv/repas.csv")
            .then($reponse => $reponse.json())

            .then($menu_2019_examen => {

                let $titreEntrees_examen_2019 = document.createElement("h4");

                let $titreEntreesNoms_examen_2019 = document.createElement("span");
                $titreEntreesNoms_examen_2019.innerHTML = " " + "Entrées";

                DIV_ENTREES_2019_EXAMEN.append($titreEntrees_examen_2019);
                $titreEntrees_examen_2019.appendChild($titreEntreesNoms_examen_2019);

                for (const MENUS_ENTREES_2019_EXAMEN of $menu_2019_examen.filter($p => $p.categorie == "Entree")) {

                    // OF pash IN.
                    // FOR "IN" ARRAY, FOR "OF" OBJECT.
                    // Transformation de objet ...lst ⇒ [...lst]

                    let $inputEntrees_examen_2019 = document.createElement("input");
                    $inputEntrees_examen_2019.type = "radio";
                    $inputEntrees_examen_2019.value = MENUS_ENTREES_2019_EXAMEN.nom; // Ajout de une classe.
                    $inputEntrees_examen_2019.name = "radio_entrees";
                    $inputEntrees_examen_2019.className = "radio-entrees";
                    $inputEntrees_examen_2019.setAttribute("title", MENUS_ENTREES_2019_EXAMEN.nom);

                    let $inputEntreesNoms_examen_2019 = document.createElement("span");
                    $inputEntreesNoms_examen_2019.innerHTML = " " + MENUS_ENTREES_2019_EXAMEN.nom + " (" + MENUS_ENTREES_2019_EXAMEN.prix + "€)";

                    let $brEntrees_examen_2019 = document.createElement("br");

                    DIV_ENTREES_2019_EXAMEN.appendChild($inputEntrees_examen_2019);

                    DIV_ENTREES_2019_EXAMEN.append($inputEntreesNoms_examen_2019);
                    DIV_ENTREES_2019_EXAMEN.append($brEntrees_examen_2019);

                }
            });
    }

    divPlats_2019_examen();

    function divPlats_2019_examen() {

        fetch("./php/csv_to_json.php?csv_file=../csv/repas.csv")
            .then($reponse => $reponse.json())

            .then($menu_2019_examen => {

                let $titrePlats_examen_2019 = document.createElement("h4");

                let $titrePlatsNoms_examen_2019 = document.createElement("span");
                $titrePlatsNoms_examen_2019.innerHTML = " " + "Plats :";

                DIV_PLATS_2019_EXAMEN.append($titrePlats_examen_2019);
                $titrePlats_examen_2019.appendChild($titrePlatsNoms_examen_2019);

                for (const MENUS_PLATS_2019_EXAMEN of $menu_2019_examen.filter($p => $p.categorie == "Principal")) {

                    let $inputPlats_examen_2019 = document.createElement("input");
                    $inputPlats_examen_2019.type = "radio";
                    $inputPlats_examen_2019.value = MENUS_PLATS_2019_EXAMEN.nom; // Ajout de une classe.
                    $inputPlats_examen_2019.name = "radio_plats";
                    $inputPlats_examen_2019.className = "radio-plats";
                    $inputPlats_examen_2019.setAttribute("title", MENUS_PLATS_2019_EXAMEN.nom);

                    let $inputPlatsNoms_examen_2019 = document.createElement("span");
                    $inputPlatsNoms_examen_2019.innerHTML = " " + MENUS_PLATS_2019_EXAMEN.nom + " (" + MENUS_PLATS_2019_EXAMEN.prix + "€)";

                    let $brPlats_examen_2019 = document.createElement("br");

                    DIV_PLATS_2019_EXAMEN.appendChild($inputPlats_examen_2019);

                    DIV_PLATS_2019_EXAMEN.append($inputPlatsNoms_examen_2019);
                    DIV_PLATS_2019_EXAMEN.append($brPlats_examen_2019);

                }
            });
    }

}

divAccompagnements_2019_examen();

function divAccompagnements_2019_examen() {

    fetch("./php/csv_to_json.php?csv_file=../csv/repas.csv")
        .then($reponse => $reponse.json())

        .then($menu_2019_examen => {

            let $titreAccompagnements_examen_2019 = document.createElement("h4");

            let $titreAccompagnementsNoms_examen_2019 = document.createElement("span");
            $titreAccompagnementsNoms_examen_2019.innerHTML = " " + "Accompagnements :";

            DIV_ACCOMPAGNEMENTS_2019_EXAMEN.append($titreAccompagnements_examen_2019);
            $titreAccompagnements_examen_2019.appendChild($titreAccompagnementsNoms_examen_2019);

            for (const MENUS_ACCOMPAGNEMENTS_2019_EXAMEN of $menu_2019_examen.filter($p => $p.categorie == "Accompagnement")) {

                let $inputAccompagnements_examen_2019 = document.createElement("input");
                $inputAccompagnements_examen_2019.type = "radio";
                $inputAccompagnements_examen_2019.value = MENUS_ACCOMPAGNEMENTS_2019_EXAMEN.nom; // Ajout de une classe.
                $inputAccompagnements_examen_2019.name = "radio_accompagnements";
                $inputAccompagnements_examen_2019.className = "radio-accompagnements";
                $inputAccompagnements_examen_2019.setAttribute("title", MENUS_ACCOMPAGNEMENTS_2019_EXAMEN.nom);
                $inputAccompagnements_examen_2019.setAttribute("title", MENUS_ACCOMPAGNEMENTS_2019_EXAMEN.nom);

                let $inputAccompagnementsNoms_examen_2019 = document.createElement("span");
                $inputAccompagnementsNoms_examen_2019.innerHTML = " " + MENUS_ACCOMPAGNEMENTS_2019_EXAMEN.nom + " (" + MENUS_ACCOMPAGNEMENTS_2019_EXAMEN.prix + "€)";

                let $brAccompagnements_examen_2019 = document.createElement("br");

                DIV_ACCOMPAGNEMENTS_2019_EXAMEN.appendChild($inputAccompagnements_examen_2019);

                DIV_ACCOMPAGNEMENTS_2019_EXAMEN.append($inputAccompagnementsNoms_examen_2019);
                DIV_ACCOMPAGNEMENTS_2019_EXAMEN.append($brAccompagnements_examen_2019);

            }
        });
}

divDesserts_2019_examen();

function divDesserts_2019_examen() {

    fetch("./php/csv_to_json.php?csv_file=../csv/repas.csv")
        .then($reponse => $reponse.json())

        .then($menu_2019_examen => {

            let $titreDesserts_examen_2019 = document.createElement("h4");

            let $titreDessertsNoms_examen_2019 = document.createElement("span");
            $titreDessertsNoms_examen_2019.innerHTML = " " + "Desserts :";

            DIV_DESSERTS_2019_EXAMEN.append($titreDesserts_examen_2019);
            $titreDesserts_examen_2019.appendChild($titreDessertsNoms_examen_2019);

            for (const MENUS_DESSERTS_2019_EXAMEN of $menu_2019_examen.filter($p => $p.categorie == "Dessert")) {

                let $inputDesserts_examen_2019 = document.createElement("input");
                $inputDesserts_examen_2019.type = "radio";
                $inputDesserts_examen_2019.value = MENUS_DESSERTS_2019_EXAMEN.nom; // Ajout de une classe.
                $inputDesserts_examen_2019.name = "radio_desserts";
                $inputDesserts_examen_2019.className = "radio-desserts";
                $inputDesserts_examen_2019.setAttribute("title", MENUS_DESSERTS_2019_EXAMEN.nom);

                let $inputDessertsNoms_examen_2019 = document.createElement("span");
                $inputDessertsNoms_examen_2019.innerHTML = " " + MENUS_DESSERTS_2019_EXAMEN.nom + " (" + MENUS_DESSERTS_2019_EXAMEN.prix + "€)";

                let $brDesserts_examen_2019 = document.createElement("br");

                DIV_DESSERTS_2019_EXAMEN.appendChild($inputDesserts_examen_2019);

                DIV_DESSERTS_2019_EXAMEN.append($inputDessertsNoms_examen_2019);
                DIV_DESSERTS_2019_EXAMEN.append($brDesserts_examen_2019);

            }
        });
}

function commander_2019_examen() {

    DIV_AFFICHAGE_COMMANDE.innerHTML = null;

    // window.alert(DIV_ENTREES_2019_EXAMEN);

    let $commandeParagraph1 = document.createElement("p");
    let $commandeParagraph2 = document.createElement("p");
    let $commandeParagraph3 = document.createElement("p");
    let $commandeParagraph4 = document.createElement("p");

    let $commandeSpanEntrees = document.createElement("span");
    let $commandeSpanPlats = document.createElement("span");
    let $commandeSpanAccompagnements = document.createElement("span");
    let $commandeSpanDesserts = document.createElement("span");

    DIV_AFFICHAGE_COMMANDE.appendChild($commandeParagraph1);
    $commandeParagraph1.appendChild($commandeSpanEntrees);
    $commandeParagraph1.appendChild($commandeParagraph2);
    $commandeParagraph2.appendChild($commandeSpanPlats);

    /* Commande entrée */
    let $commandeEntrees = document.getElementsByName("radio_entrees");

    for (const COMMANDE_ENTREES of $commandeEntrees) {
        if (COMMANDE_ENTREES.checked) {
            return $commandeSpanEntrees.innerHTML = COMMANDE_ENTREES.value;
        }
    }

    /* Commande plats */
    let $commandePlats = document.getElementsByName("radio_plats");

    for (const COMMANDE_PLATS of $commandePlats) {
        if (COMMANDE_PLATS.checked) {
            return $commandeSpanPlats.innerHTML = COMMANDE_PLATS.value;
        }
    }

    /* Commande accompagnements */
    let $commandeAccompagnements = document.getElementsByName("radio_accompagnements");

    for (const COMMANDE_ACCOMPAGNEMENTS of $commandeAccompagnements) {
        if (COMMANDE_ACCOMPAGNEMENTS.checked) {
            return $commandeSpanAccompagnements.innerText = COMMANDE_ACCOMPAGNEMENTS.value;
        }
    }

    /* Commande desserts */
    let $commandeDesserts = document.getElementsByName("radio_desserts");

    for (const COMMANDE_DESSERTS of $commandeDesserts) {
        if (COMMANDE_DESSERTS.checked) {
            return $commandeSpanDesserts.innerText = COMMANDE_DESSERTS.value;
        }
    }
}