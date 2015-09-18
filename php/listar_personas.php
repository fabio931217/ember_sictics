<?php
	 require_once("conexion.php");

	$s="SELECT p.identificacion, p.nombres, p.apellido1, p.apellido2, s.nombre as sexo, p.dereccion, p.avatar, r.nombre 
	    FROM persona p, sexo s, rol r 
	    WHERE p.sexo_id = s.id and p.rol_id = r.id";

	$r = mysql_query($s);
 	$i=0;

  while($rw = mysql_fetch_assoc($r))
    {
        $rwdata[$i] = $rw;
      	$i++;
    }
	echo json_encode($rwdata);

?>