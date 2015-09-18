

<?php
	 require_once("conexion.php");

	$s="select * from empresa where tipo_id = 2";

	$r = mysql_query($s);
 	$i=0;

  while($rw = mysql_fetch_assoc($r))
    {
        $rwdata[$i] = $rw;
      	$i++;
    }
	echo json_encode($rwdata);

?>