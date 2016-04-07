<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>OOMDO</title>
	<link href='http://fonts.googleapis.com/css?family=Roboto+Condensed:400,300' rel='stylesheet' type='text/css'>
	<link charset="utf-8" href="css/style.css" media="screen" rel="stylesheet" title="no title">
  <link rel="icon" type="image/png" href="assets/OOMDO-O.png" />
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet">
	<link crossorigin="anonymous" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" rel="stylesheet">
</head>
<body>

	<!-- menubar/menuicons -->
	<?php include 'header.php'; ?>
	<!-- full site wrap -->
	<div class="site_wrap">

		<!-- transmission/mobile navigation menus -->
		<?php include 'navigation.php'; ?>

		<!-- home page wrap -->
		<div id="main_wrap" class="main_wrap">

			<!-- desktop home -->
			<?php include 'home.php'; ?>

			<!-- mobile home -->
			<?php include 'mobile_home.php' ?>

			<!-- home footer -->
			<footer>
					<div class="row">
						<?php include 'footer.php';?>
					</div>
			</footer>
		</div>

		<!-- home page background video -->
		<div class="back_video">
			<video autoplay="" controls="0" height="100%">
				<source src="assets/laptop.mov" type="video/mp4">
			</video>
		</div>

		<!-- who we are (page 1) -->
		<?php include 'oom_page_1.php';?>

		<!-- who we are (page 2) -->
		<?php include 'oom_page_2.php';?>

		<!-- who we are (page 3) -->
		<?php include 'oom_page_3.php';?>

		<!-- who we are (page 4) -->
		<?php include 'oom_page_4.php';?>

		<!-- who we are (page 5) -->
		<?php include 'oom_page_5.php';?>

		<!-- who we are (page 6) -->
		<?php include 'oom_page_6.php';?>

		<!-- space seen when navigating the pages - between pages  -->
		<?php include 'nav_space.php'; ?>

	</div>
	<!-- End of site wrapper -->

	<!-- contact page and contact warp speed button -->
	<?php include 'contact.php'; ?>

	<!-- scripts -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js">
	</script>
	<script src="js/main.js" type="text/javascript">
	</script>
	<script src="js/transmission-nav.js" type="text/javascript">
	</script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js">
	</script>
	<script src="http://www.youtube.com/player_api">
	</script>
</body>
</html>
