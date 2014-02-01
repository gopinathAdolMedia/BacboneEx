<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		
		<title>Sample Backbone Usage</title>
		
		<link rel="stylesheet" href="css/base.css">		

	</head>

	<body>
		<section id="MainHomePage">
			<header id="MainHeaderPage">
				<center><h3>My Simple Backbone Application</h3></center>
			</header>
			
			<section id="MainContentPage">
				<center>
					<input type="text" name="InlineText_1" id="InlineText_1" placeholder="Some Text Here" />
					<input type="button" name="TemplateButton_1" id="TemplateButton_1" value="Display" />
				</center>
				<div id="ManipulationSection">
					<script type="text/template" id="Main_Template">
						<div class="SimpleView" id="TemplatePart_1">
							<span id="DisplayText_1"><%= textMsg %></span>
						</div>
					</script>
				</div>
				
			</section>
			
			<footer id="MainFooterPage">
				<center>
					<p>Written by <a href="http://localhost/simPHP/BackboneEx/index.php">Gopinath R</a><br/>Part of <a href="http://localhost/simPHP/BackboneEx/index.php">SampleConnect</a></p>
					<p>AlignGrid Inspo<br/>Copyright &copy; 2013 <br/>All Rights Reserved</p>
				</center>
			</footer>
		</section>
		
						<!--	Library Files	-->
		<script src="js/lib/jquery-1.9.1.js"></script>
		<script src="js/lib/underscore.1.4.4.js"></script>
		<script src="js/lib/lodash.1.3.1.js"></script>
		<script src="js/lib/backbone.1.0.0.js"></script>
		<script src="js/lib/backbone.localStorage.js"></script>

		<!--	App Files	-->
		<script src="js/app/sampleModel.js"></script>
		<script src="js/app/sampleCollection.js"></script>
		<script src="js/app/sampleAppView.js"></script>
		<script src="js/app/sampleApp.js"></script>
		<!-- <script src="js/app/sampleRouter.js"></script>
		<script src="js/app/sampleItemView.js"></script>  -->
		
	</body>
</html>