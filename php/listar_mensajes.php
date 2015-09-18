<?php

	require_once("conexion.php");

	$s="SELECT m.email, m.mensaje, m.fecha, p.nombres, p.apellido1, p.apellido2, p.avatar 
	FROM mensajes m, persona p 
	WHERE m.persona_id = p.id ORDER BY m.id DESC";

	$r = mysql_query($s);
 	$i=0;

  	while($rw = mysql_fetch_assoc($r))
    {
        $rwdata[$i] = $rw;
      	$i++;
    }
	echo json_encode($rwdata);
	

?>