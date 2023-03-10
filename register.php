<?php
// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "manfacDB";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the data from the form
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$sex = $_POST['sex'];
$dob = $_POST['dob'];
$phoneNumber = $_POST['phoneNumber'];
$email = $_POST['email'];
$u_Password = $_POST['u_Password'];
$profilePicture = addslashes(file_get_contents($_FILES['profilePicture']['tmp_name']));


// Insert the data into the database
$sql = "INSERT INTO userregister (firstName, lastName, sex, dob, phoneNumber, email, u_Password, profilePicture)
VALUES ('$firstName', '$lastName', '$sex', '$dob', '$phoneNumber', '$email', '$u_Password', '$profilePicture')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
