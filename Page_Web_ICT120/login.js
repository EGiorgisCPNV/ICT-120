//fonction qui permet d'afficher le mot de passe
function SwitchPass() {
    var typeInput = document.getElementById('mdp');
    var txtHREF = document.getElementById('AffPass');

    if (typeInput.type == 'password') {
        typeInput.type = 'text';
        txtHREF.innerHTML = 'Cacher le mot de passe';
    } else {
        typeInput.type = 'password';
        txtHREF.innerHTML = 'Afficher mot de passe';
    }

}


//fonction pour enrgistrer l'email et le mdp dans un fichier experne [(mais elle ne marche pas)]
function Stockage(){
    a=document.getElementById("mdp");
    let rootDirEntry = fileEntry.filesystem.root;

    FileSystemDirectoryEntrySync.createReader(rootDirEntry);
}