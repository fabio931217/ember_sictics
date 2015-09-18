<?php
	 require_once("conexion.php");

	$s="SELECT n.imagen, n.titulo, n.contenido, n.fecha, p.nombres, p.apellido1, p.apellido2, p.avatar
	 FROM noticias n, persona p 
	 WHERE p.id = n.persona_id";

	$r = mysql_query($s);
 	$i=0;

  while($rw = mysql_fetch_assoc($r))
    {
        $rwdata[$i] = $rw;
      	$i++;
    }
	echo json_encode($rwdata);

?>