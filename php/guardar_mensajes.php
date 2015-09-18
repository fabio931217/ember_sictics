<?php

	require_once("conexion.php");
	$datos = json_decode(file_get_contents("php://input"));
	$id = $datos -> id;
	$email = $datos -> email;
	$mensaje = $datos -> mensaje;

	$s="INSERT INTO mensajes (persona_id, email, mensaje) 
	values ('$id','$email','$mensaje')";

	mysql_query($s);

	echo("Mensaje Enviado Con Exito");

?>