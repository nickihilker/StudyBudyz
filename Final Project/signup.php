<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    $username = htmlspecialchars($username);
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);

    
    $userData = "Username: $username\nEmail: $email\nPassword: $password\n\n";

    $file = fopen("user_data.txt", "a");
    fwrite($file, $userData);
    fclose($file);

    header("Location: thank_you.html");
    exit();
}
?>


<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

  
    if ($username === "example" && $password === "password") {
       
        $_SESSION["username"] = $username;

        header("Location: dashboard.php");
        exit();
    } else {
        // Redirect back to login with an error message
        header("Location: loginpage.html?error=1");
        exit();
    }
}
?>


<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION["username"])) {
    header("Location: loginpage.html");
    exit();
}

?>


<?php
session_start();

session_destroy();

header("Location: loginpage.html");
exit();
?>