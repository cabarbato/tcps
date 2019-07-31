<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $credentialsFile = fopen(".credentials", "r");
    $myEmail = fgets($credentialsFile);

    $firstName = strip_tags(trim($_POST["inputFirstName"]));
    $firstName = str_replace(array("\r", "\n"), array(" ", " "), $firstName);
    $lastName = strip_tags(trim($_POST["inputLastName"]));
    $lastName = str_replace(array("\r", "\n"), array(" ", " "), $lastName);
    $email = filter_var(trim($_POST["inputEmail"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["inputMessage"]);


    if (empty($name) or empty($message) or !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Oops! There was a problem with your submission. Please complete the form and try again.";
        exit;
    }

    $recipient = "$myEmail";

    $subject = "New contact from $name";

    $email_content = "Name: $firstName $lastName\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Subject: New contact\n\n";
    $email_content .= "Message:\n$message\n\n";


    $email_headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        echo "Thank You! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong and we couldn\"t send your message.";
    }
} else {
    echo "There was a problem with your submission, please try again.";
}
