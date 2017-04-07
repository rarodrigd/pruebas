<meta charset="utf-8"/>
<?php //Datos

$pais[0]="spain";
$pais[1]="mexico";
$pais[2]="argentina";
$pais[3]="colombia";

$ciudades[0][0]="Madrid";
$ciudades[0][1]="Barcelona";
$ciudades[0][2]="Valencia";
$ciudades[0][3]="Sevilla";
$ciudades[0][4]="Zaragoza";
$ciudades[0][5]="Málaga";
$ciudades[0][6]="Murcia";

$ciudades[1][0]="México D.F";
$ciudades[1][1]="Ecatepec";
$ciudades[1][2]="Guadalajara";
$ciudades[1][3]="Puebla";
$ciudades[1][4]="Juárez";
$ciudades[1][5]="Tijuana";
$ciudades[1][6]="León";
$ciudades[1][7]="Zapopan";

$ciudades[2][0]="Buenos Aires";
$ciudades[2][1]="Córdoba";
$ciudades[2][2]="Rosario";
$ciudades[2][3]="La Plata";
$ciudades[2][4]="Mar de Plata";
$ciudades[2][5]="San Miguel de Tucumán";
$ciudades[2][6]="Ciudad de Salta";

$ciudades[3][0]="Bogotá";
$ciudades[3][1]="Medellín";
$ciudades[3][2]="Cali";
$ciudades[3][3]="Barranquilla";
$ciudades[3][4]="Cartagena";
$ciudades[3][5]="Cúcuta";
$ciudades[3][6]="Soledad";
$ciudades[3][7]="Ibague";

//Rescatamos el parámetro país que nos llega mediante la url que invoca xmlhttp
$paisRecibido=$_REQUEST["pais"];
$ciudadesRespuesta = "";
$existePais=false;

for ($i=0; $i<count($pais); $i++) {
    if ($paisRecibido == $pais[$i]) {
        $indicePais = $i;
        $existePais=true;
     }
 }

$msg = 'El país recibido por get en segundo plano es '.$paisRecibido;
if ($existePais) {
    $msg = $msg.' y tiene índice '.$indicePais;
 }
$ciudadesRespuesta = "";

//Creamos el array a devolver
for ($i=$indicePais; $i<count($ciudades[$indicePais]); $i++) {
    $ciudadesRespuesta.=",".$ciudades[$indicePais][$i];
 }

echo $msg.$ciudadesRespuesta;
?>
