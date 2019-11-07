//fonction qui permet d'afficher le mot de passe (FONCTIONNEL)
function SwitchPass() {
    var typeInput = document.getElementById('mdp');
    var txtHREF = document.getElementById('oeil');

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

        alert('Error message: ' + "L'email ou le mot de passe est incorrect");
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


    cell1.innerHTML = valeurIndex0;
    cell2.innerHTML = valeurIndex1;
    cell3.innerHTML = valeurIndex2;
    cell4.innerHTML = valeurIndex3;
    cell5.innerHTML = valeurIndex4;
    cell6.innerHTML = valeurIndex5;
    cell7.innerHTML = valeurIndex6;

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

     var tableau=[valeurIndex0.value,valeurIndex1.value,valeurIndex2.value,valeurIndex3.value,valeurIndex4.value,valeurIndex5.value,valeurIndex6.value];



    window.localStorage.setItem("TableauStocker", tableau[1]);
    var a=localStorage.getItem("TableauStocker");

    for(var i=0;i<50;i++){

        alert(a[i]);
    }

}


//fonction pour le prix total (NON FONCTIONNEL)
function prixTotal() {


}


//fonction qui supprimme une ligne du dessus (FONCTIONNEL)
function Delete() {
    for (var i = 0; i < 1; i++) {
        document.getElementById('myTable').deleteRow(i);
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


