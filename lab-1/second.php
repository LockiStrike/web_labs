<?php
    if(isset($_GET['program_name'])){
        $file_extension = explode(".", $_GET['file_input']);
        if(($_GET['user_name'] == "root") && ($_GET['user_password'] == "root")){
            echo "Greetings, " . $_GET['user_name'] . ". Type of user admin<br>";
        }
        else{
            echo "Greetings, " . $_GET['user_name'] . " type of user common<br>";
        }
        echo "Program for running: " . $_GET['program_name'] . " was sent by get method,"
            . " extension of sent file - " . $file_extension[1];

    }
    if(isset($_POST['program_name'])){
        $file_extension = explode(".", $_POST['file_input']);
        if(($_POST['user_name'] == "root") && ($_POST['user_password'] == "root")){
            echo "Greetings, " . $_POST['user_name'] . " type of user admin<br>";
        }
        else{
            echo "Greetings, " . $_POST['user_name'] . " type of user common<br>";
        }
        echo "Program for running: " . $_POST['program_name'] . " was sent by post method,"
            . " extension of sent file - " . $file_extension[1];
    }

?>
