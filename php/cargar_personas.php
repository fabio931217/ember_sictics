<?php

	require_once("conexion.php");

	$s="SELECT *
	FROM persona 
   ORDER BY id ASC";

	$r = mysql_query($s);
 	$i=0;

  	while($rw = mysql_fetch_assoc($r))
    {
        $rwdata[$i] = $rw;
      	$i++;
    }
	echo json_encode($rwdata);

?>