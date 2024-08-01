<?php
// Load the JSON data
$getpath = file_get_contents('siteplan/website.json');
$arr = json_decode($getpath, true);

// Set default values
$currentpage = "index";
$title = "Home";
$content = "Welcome to our website!";
$found = false;

// Check if a page is requested
if (isset($_GET['page'])) {
    $currentpage = $_GET['page'];
}

// Find the page in the JSON data
foreach ($arr as $page) {
    if ($page["page"] == $currentpage) {
        $title = $page["title"];
        $content = file_get_contents("greatpages/{$currentpage}.html");
        $found = true;
        break;
    }
}

// If page not found, show 404 content
if (!$found) {
    $title = "Page Not Found";
    $content = file_get_contents("greatpages/404.html");
}

// Include the header
require 'header.php';
?>

<!-- Page content -->
    <?php echo $content; ?>


<?php
// Include the footer
require 'footer.php';
?>