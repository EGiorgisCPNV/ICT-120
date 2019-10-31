
//fonction qui permet d'afficher le mot de passe
function SwitchPass() {
    var typeInput = document.getElementById('mdp');
    var txtHREF = document.getElementById('oeil');

    if (typeInput.type == 'password') {
        typeInput.type = 'text';
        document.getElementById("oeil").className = "glyphicon glyphicon-eye-close";
    } else {
        typeInput.type = 'password';
        document.getElementById("oeil").className = "glyphicon glyphicon-eye-open";
    }

}


//fonction pour enrgistrer l'email et le mdp dans un fichier externe (mais elle ne marche pas)
function Stockage(){

    var emailAStocker=document.getElementById("email").value;

    var mdpAStocker=document.getElementById("mdp").value;

    // Sauvegarder les informations dans l’espace local courant
    localStorage.setItem("login", emailAStocker);

    // Sauvegarder les informations dans l’espace local courant
    localStorage.setItem("motDePasse", mdpAStocker);

    // Accéder à des données enregistrées
    //alert("login = " + localStorage.getItem("login") + "\n" + "mot de passe = "+ localStorage.getItem("motDePasse"));

    window.location.replace("page_activité_avec_login.html");

}



//fonction qui verifie si l'email et le mdp si il correspond au compte register
function Verification(){

    var verificationLogin = localStorage.getItem("login");
    var verificationMdp = localStorage.getItem("motDePasse");

    var recupEmail= document.getElementById("email").value;
    var recupMdp = document.getElementById("mdp").value;

   if(verificationLogin == recupEmail && verificationMdp == recupMdp){
       window.location.replace("page_activité_avec_login.html");
   }
   else {

       alert('Error message: ' + "L'email ou le mot de passe est incorrect");
       window.location.replace("login.html");
   }

}

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}