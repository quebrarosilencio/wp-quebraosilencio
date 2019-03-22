<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<!-- Define prod or homolog URI -->
	<?php
		global $site_url;
	?>

	<?php
		$home = get_template_directory_uri();
	?>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<meta name="theme-color" content="#ffffff">

	<!-- Favicon -->
	<!-- <link rel="apple-touch-icon" sizes="57x57" href="<?= $home; ?>/img/favicon/apple-icon-57x57.png?v=3">
	<link rel="apple-touch-icon" sizes="60x60" href="<?= $home; ?>/img/favicon/apple-icon-60x60.png?v=3">
	<link rel="apple-touch-icon" sizes="72x72" href="<?= $home; ?>/img/favicon/apple-icon-72x72.png?v=3">
	<link rel="apple-touch-icon" sizes="76x76" href="<?= $home; ?>/img/favicon/apple-icon-76x76.png?v=3">
	<link rel="apple-touch-icon" sizes="114x114" href="<?= $home; ?>/img/favicon/apple-icon-114x114.png?v=3">
	<link rel="apple-touch-icon" sizes="120x120" href="<?= $home; ?>/img/favicon/apple-icon-120x120.png?v=3">
	<link rel="apple-touch-icon" sizes="144x144" href="<?= $home; ?>/img/favicon/apple-icon-144x144.png?v=3">
	<link rel="apple-touch-icon" sizes="152x152" href="<?= $home; ?>/img/favicon/apple-icon-152x152.png?v=3">
	<link rel="apple-touch-icon" sizes="180x180" href="<?= $home; ?>/img/favicon/apple-icon-180x180.png?v=3">
	<link rel="icon" type="image/png" sizes="192x192"  href="<?= $home; ?>/img/favicon/android-icon-192x192.png?v=3">
	<link rel="icon" type="image/png" sizes="32x32" href="<?= $home; ?>/img/favicon/favicon-32x32.png?v=3">
	<link rel="icon" type="image/png" sizes="96x96" href="<?= $home; ?>/img/favicon/favicon-96x96.png?v=3">
	<link rel="icon" type="image/png" sizes="16x16" href="<?= $home; ?>/img/favicon/favicon-16x16.png?v=3"> -->

	<title><?php wp_title(); ?></title>

	<!-- Font -->
	<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">

	<!-- Custom CSS -->
	<link rel="stylesheet" href="<?= $home . '/css/main.css' ?>">

	<?php wp_head(); ?>
</head>
<body >