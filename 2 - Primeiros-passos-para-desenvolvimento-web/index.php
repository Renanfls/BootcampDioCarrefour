<html>

    <head>
        <title>Meu primeiro site em PHP!</title>

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

        <!-- CSS -->
        <style type="text/css">
            .linha {
                font-weight: bold;
                color: green;
                padding-left: 10px;
                line-height: 50px;
            }
        </style>

    </head>

    <body>
        
        <?php
            for ($i = 0 ; $i < 10 ; $i++) {
                print("<span class=\"linha\">Linha número " . $i . "</span><br>");
            }
        ?>

    </body>

    <!-- JavaScript -->
    <script type="text/javascript">
        /* Pop-up */
        $(document).ready(function() {
            alert("Olá Mundo!");
        });
    </script>
</html>