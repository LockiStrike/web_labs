<html>
<head>
    <meta charset="utf-8">
    <title>Lab1</title>
    <link rel="stylesheet" type="text/css" href="style.css"/>
    <script type="text/javascript" src="jquery-3.1.1.js"></script>
    <script type="text/javascript" src="script.js"></script>


</head>
<body>

<button id="start_button"> Let's start</button>
<h1 id="head_text"> Registration form</h1>
<div id="form_div">
    <form id="main_form" method="get" action="second.php">
        <div class="wrap-inner">



            <label for="user_name_input">Name:</label>
            <input id="user_name_input" type="text" required="required" name="user_name" />

            <label for="user_password_input">Password:</label>
            <input id="user_password_input" type="password" required="required" name="user_password" />

            <label for="program_name_input">Program name:</label>
            <input id="program_name_input" type="text" name="program_name" />
            <div id="select_div">
                <select id="select_method_select" onchange="set_method()" name="select_method_select">

                    <option> GET </option>
                    <option> POST </option>

                </select>
            </div>

            <input id="file_input" type="file" name="file_input" />

            <button id="submit_button" type="submit"  name="submit_button"> Send </button>
        </div>
    </form>
</div>
</body>
</html>