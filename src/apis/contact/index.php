<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $credentialsFile = fopen(".credentials", "r");
    $myEmail = fgets($credentialsFile);
    $fname = strip_tags(trim($_POST["firstName"]));
    $lname = str_replace(array("\r", "\n"), array(" ", " "), $fname);
    $lname = strip_tags(trim($_POST["lastName"]));
    $fname = str_replace(array("\r", "\n"), array(" ", " "), $lname);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);
    if (empty($fname) or empty($message) or !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Oops! There was a problem with your submission. Please complete the form and try again.";
        exit;
    }
    $recipient = "$myEmail";
    $subject = "New contact from $fname $lname";
    $email_content = "Name: $fname $lname\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Subject: Message from website visitor\n\n";
    $email_content .= "Message:\n$message\n\n";

    $email_headers = "From: $fname $lname <$email>";
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        echo "Thank You! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong and we couldn\"t send your message.";
    }
} else {
    echo "There was a problem with your submission, please try again.";
}
