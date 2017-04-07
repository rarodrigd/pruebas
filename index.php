<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Página para pruebas</title>
    <style>

        *{
        	margin:0;
        	padding:0;
        	list-style:none;
        	}

        header{
        	position:relative;
        	margin:auto;
        	width:1000px;
        	height:80px;
        	}

        #logo{
        	position:absolute;
        	top:10px;
        	left:30px;
        	width:200px;
        	height:60px;
        	background:#ccc;
        	}

        .redes{
        	position:absolute;
        	width:42px;
        	height:42px;
        	background:#ccc;
        	border-radius:100%;
        	}

        #icono1{
        	top:22px;
        	right:120px;
        	}

        #icono2{
        	top:22px;
        	right:71px;
        	}

        #icono3{
        	top:22px;
        	right:19px;
        	}

        section{
        	position:relative;
        	margin:auto;
        	width:1000px;
        	}

        article{
        	position:absolute;
        	left:0;
        	top:0;
        	width:800px;
          /*height:453px;*/
        	}

        aside#der{
        	position:absolute;
        	right:0;
        	top:0;
        	width:200px;
        	}

        div#loadList{
          position: fixed;
          top: 80px;
        }

        h1 {
          font-size: 40px;
          color: blue;
        }

    </style>
    <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>

    <!--  ************************************************************
      **  Se tienen que agregar las siguientes dos lineas para incluir
      ** los estilos y funciones
      ************************************************************ -->
    <link href='css/txtProgress.css' rel='stylesheet' type='text/css'>
    <script src="js/txtProgress.js"></script>
    <!-- ********************************************************* -->

  </head>

  <body>
    <header>

      <div id="logo">bOrionis</div>

      <div id="icono1" class="redes"></div>
      <div id="icono2" class="redes"></div>
      <div id="icono3" class="redes"></div>

    </header>

    <section>

        <article>

          <?php
          if (isset($_GET["cat"])) 
            echo "Parámetro cat = " . $_GET["cat"] . "<br>";
          else
            echo "No hay parámetro cat<br>";

          if (isset($_GET["sub"]))
            echo "Parámetro sub = " . $_GET["sub"] . "<br>";
          else
            echo "No hay parámetros sub<br>";

          if (isset($_GET["prod"])) {
            $producto = explode("-",$_GET["prod"]);
            if (count($producto) > 3) {
              for ($i=1;$i<count($producto)-1;$i++) {
                if ($i > 1) $modelo .= " ";
                $modelo .= $producto[$i];
              }
              $id = $producto[count($producto)-1];
            }
            else {
              $modelo = $producto[1];
              $id = $producto[2];
            }

            echo " - Marca: " . $producto[0] . "<br>";
            echo " - Modelo: " . $modelo . "<br>";
            echo " - Id: " . $id . "<br>";
          }
          else
            echo "No hay parámetros prod<br>";
          ?>

          <!-- Se agrega la siguiente línea donde se llama al plugin que carga las páginas de
               manera progresiva. Dentro de la función loadFirstPage se deberá poner el nombre
                de la página php que regresará las cinco páginas a mostrar-->
          <span id="loadDocs"><script>loadFirstPage("regresa-paginas.php");</script></span>
          <!-- *************************************************************************** -->

        </article>

        <aside id="der">

          <!-- Se agrega la siguiene etiqueta, que es la que se llenará
                automáticamente con el listado de páginas a cargar-->
          <div id="loadList"><div id="listTabla"></div></script></div>
          <!-- **************************************************** -->

        </aside>

    </section>

  </body>
</html>
