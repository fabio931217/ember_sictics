

<?php
header ("content-type:text/html;charset-UTF-8");
date_default_timezone_set("America/Bogota");  //Zona Horaria de colombia
setlocale(LC_ALL,"es_CO.utf8");       //Configiracion regional a español
$conn= mysql_connect("sql208.wirez.com.ar","wirez_16103353","yonnier") or die (mysql_error()); // Coneccion al servidor
mysql_select_db('wirez_16103353_kl');  //Seleccion de la BD
mysql_set_charset("utf8"); //Caracteres español
?>



