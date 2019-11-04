<?php

//Declaration des variables
$nom=$_POST["Nom"];
$adresse=$_POST["Adresse"];
$date=$_POST["Date"];
$prix=$_POST["Prix"];
$lu=$_POST["LU"];
$lieu=$_POST["Lieu"];




//reprend les données...
//$takeContentBack = file_get_contents('tsconfig.json');
//$tempArray=json_decode($takeContentBack, true);


//tableau qui enrgistre les différent élément indiqué
$dataArray= array('nom' => $nom,
    'adresse' => $adresse,
    'date' => $date,
    'prix' => $prix,
    'lu' => $lu,
    'lieu' => $lieu);


$dataArray=json_encode($dataArray, true);

//inscrit dans le fichier json le tableau
file_put_contents('tsconfig.json', $dataArray);

header ("location:http://localhost:63342/Page_Web_ICT120/page_activit%C3%A9_avec_login.html");
exit();


