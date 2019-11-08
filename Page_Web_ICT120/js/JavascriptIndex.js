//Auteur:Esteban Giorgis
//Titre:Page d'activité en étant login de mon site web
//date:15.10.2019
//Version:1.0

//fonction qui permet d'afficher le mot de passe (FONCTIONNEL)
function SwitchPass() {
    var typeInput = document.getElementById('mdp');

    if (typeInput.type === 'password') {
        typeInput.type = 'text';
        document.getElementById("oeil").className = "glyphicon glyphicon-eye-close";
    } else {
        typeInput.type = 'password';
        document.getElementById("oeil").className = "glyphicon glyphicon-eye-open";
    }

}


//fonction pour enrgistrer l'email et le mdp dans un fichier externe (FONCTIONNEL)
function Stockage() {

    var emailAStocker = document.getElementById("email").value;

    var mdpAStocker = document.getElementById("mdp").value;

    // Sauvegarder les informations dans l’espace local courant
    localStorage.setItem("login", emailAStocker);

    // Sauvegarder les informations dans l’espace local courant
    localStorage.setItem("motDePasse", mdpAStocker);

    // Accéder à des données enregistrées
    //alert("login = " + localStorage.getItem("login") + "\n" + "mot de passe = "+ localStorage.getItem("motDePasse"));

    alert("La création de votre compte a été faite avec succès");
    window.location.replace("page_activité_avec_login.html");

}


//fonction qui verifie si l'email et le mdp si il correspond au compte register(FONCTIONNEL)
function Verification() {

    var verificationLogin = localStorage.getItem("login");
    var verificationMdp = localStorage.getItem("motDePasse");

    var recupEmail = document.getElementById("email").value;
    var recupMdp = document.getElementById("mdp").value;

    if (verificationLogin === recupEmail && verificationMdp === recupMdp) {

        window.location.replace("page_activité_avec_login.html");
    } else {

        window.alert('Error message: ' + "L'email ou le mot de passe est incorrect");
        window.location.replace("login.html");
    }

}


//fonction qui crée une a chaque fois que l'on clique sur ajouter (FONCTIONNEL)
function Ajouter() {

    var table = document.getElementById("myTable");

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);


    var valeurIndex0 = document.getElementById("index0").value;
    var valeurIndex1 = document.getElementById("index1").value;
    var valeurIndex2 = document.getElementById("index2").value;
    var valeurIndex3 = document.getElementById("index3").value;
    var valeurIndex4 = document.getElementById("index4").value;
    var valeurIndex5 = document.getElementById("index5").value;
    var valeurIndex6 = document.getElementById("index6").value;

if(valeurIndex0.value===null || valeurIndex1.value===null || valeurIndex2.value===null || valeurIndex3.value===null || valeurIndex4.value===null || valeurIndex5.value===null || valeurIndex6.value===null){
    alert("vous avez oublier de remplire une ou plusieurs cases");
}
else{
    cell1.innerHTML = valeurIndex0;
    cell2.innerHTML = valeurIndex1;
    cell3.innerHTML = valeurIndex2;
    cell4.innerHTML = valeurIndex3;
    cell5.innerHTML = valeurIndex4;
    cell6.innerHTML = valeurIndex5;
    cell7.innerHTML = valeurIndex6;
}


}


//fonction pour restaurer les valeur qui'il y a dans un localstorage (NON FONCTIONNEL)
function abc() {
    var valeurIndex0 = document.getElementById("index0").value;
    var valeurIndex1 = document.getElementById("index1").value;
    var valeurIndex2 = document.getElementById("index2").value;
    var valeurIndex3 = document.getElementById("index3").value;
    var valeurIndex4 = document.getElementById("index4").value;
    var valeurIndex5 = document.getElementById("index5").value;
    var valeurIndex6 = document.getElementById("index6").value;

    var tableau = [valeurIndex0.value, valeurIndex1.value, valeurIndex2.value, valeurIndex3.value, valeurIndex4.value, valeurIndex5.value, valeurIndex6.value];


    for (var i = 0; i < 7; i++) {
        window.localStorage.setItem("TableauStocker", tableau[i]);
        var j = localStorage.getItem("TableauStocker");
        j = document.createElement("input").innerText;
        document.write(j);
    }

}


//fonction pour le prix total (NON FONCTIONNEL)
function prixTotal() {

    var a = document.getElementById()

}


//fonction qui supprimme une ligne du dessus (FONCTIONNEL [mais peut aussi suprimmer la ligne de base])
function Delete() {

    for (var i = 0; i < 1; i++) {
        document.getElementById('myTable').deleteRow(i);

        /*cette condition ne marche pas
        if(i===2){
            alert('vous ne pouvez pas supprimer la ligne de base');
        }
        */
    }


}


//fonction qui va ouvrir le menu (FONCTIONNEL)
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

//fonction qui va fermer le menu(FONCTIONNEL)
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


//fonction pour rechercher par type (FONCTIONNEL)
function filtreType() {

    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("barreRechercheType");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

//boucle qui vérifie chaque row
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }

    }
}


//fonction qui change les couleurs du bando, fil d'arianne etc... (FONCTIONNEL)
function changerCouleurBlanc() {

    var element = document.getElementById("bandoVE");
    var element1 = document.getElementById("filDarianne");
    var element2 = document.getElementById("titreActivite");


    element.style.backgroundColor = "#FFFFFF";
    element1.style.backgroundColor = "#FFFFFF";
    element2.style.backgroundColor = "#FFFFFF";
}


//fonction qui change les couleurs du bando, fil d'arianne etc... (FONCTIONNEL)
function changerCouleurTurquoise() {

    var element = document.getElementById("bandoVE");
    var element1 = document.getElementById("filDarianne");
    var element2 = document.getElementById("titreActivite");


    element.style.backgroundColor = "turquoise";
    element1.style.backgroundColor = "turquoise";
    element2.style.backgroundColor = "turquoise";
}



//fonction modifier une ou plusieurs lignes(FONCTIONNEL)
function midifier() {

    table = ligneAjoutee.children;

    for (nbline = 0; nbline < ligneAjoutee.children.length; nbline++) {

        row = ligneAjoutee.children[nbline];
        for (nbcol = 0; nbcol < row.children.length; nbcol++) {

            cell = row.children[nbcol];
            inp = document.createElement('input');
            inp.type = 'text';
            inp.value = cell.innerHTML;
            cell.innerHTML = '';
           cell.style.color='#000000';
            cell.appendChild(inp)
        }
    }

    btnModifier.classList.add('d-none');
    btnEnrgistrer.classList.remove('d-none');
}




//fonction pour enrgistrer les modifications (FONCTIONNEL)
function enrgistrer() {
    table = ligneAjoutee.children;

    for (nbline = 0; nbline < ligneAjoutee.children.length; nbline++) {

        row = ligneAjoutee.children[nbline];
        for (nbcol = 0; nbcol < row.children.length; nbcol++) {

            cell = row.children[nbcol];
            cell.innerHTML = cell.firstChild.value;
            cell.style.color='#ffffff';

        }
        btnModifier.classList.remove('d-none');
        btnEnrgistrer.classList.add('d-none');
    }
}
