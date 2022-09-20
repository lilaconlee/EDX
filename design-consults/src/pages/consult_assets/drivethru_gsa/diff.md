```diff
 <!DOCTYPE html>
 <!-- saved from url=(0040)https://drivethru.gsa.gov/fmdtsys/dthome -->
 <html lang="en">

 <head>
 	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
 	<!-- 12013 - new jquery -->
 	<!-- changelog
  11856 - mitigate vulnarability ...     dxm
  12537 - replace Fleet News by new paragraph...    dxm  -->

 	<meta http-equiv="X-UA-Compatible" content="IE=edge">
 	<meta name="viewport" content="width=device-width, initial-scale=1">
 	<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

 	<title>Drive-thru Home Page (dtlogin)</title>

 	<!-- Bootstrap -->
 	<link href="../drivethru_gsa_files/bootstrap.css" rel="stylesheet">
 	<link href="../drivethru_gsa_files/dtStyles_v1.css" rel="stylesheet" type="text/css">
 	<link rel="shortcut icon" href="https://drivethru.gsa.gov/IMAGES/favicon.ico">
 	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
 	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
 	<!--[if lt IE 9]>
       <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
       <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
     <![endif]-->

 	<!-- <script async="" src="../drivethru_gsa_files/analytics.js"></script> -->
 	<script language="JavaScript">
 		var temphttp = "https://";
 		var temptcode = "DTLOGIN";

 		var msg = '';
 		var ddcAction = '$REPLACE="SC-DDC-ACTION"';
 		var courseLink = '';
 		var gsaInternal = 'N';
 	</script>

 	<!-- <script type="text/javascript" src="../drivethru_gsa_files/pagefooter.js"></script><script type="text/javascript" id="_fed_an_ua_tag" src="../drivethru_gsa_files/Universal-Federated-Analytics.js"></script> -->
 	<script type="text/javascript" src="../drivethru_gsa_files/drivethru.js"></script>
 	<script type="text/javascript" src="../drivethru_gsa_files/pageheadernologout.js"></script>
 	<script src="../drivethru_gsa_files/jquery.js"></script>
 	<!--<script type="text/javascript">
 $(document).ready(function(){
 	$("#myModal").modal('show');
 	$('.hide-modal').click(function(){
 		$('#myModal').modal('hide');
 	});
 });
 </script>

 <script type="text/javascript">
 $(document).ready(function(){
 	$(".tooltip-navigator a").tooltip({
 		placement : 'top'
 	});
 });
 </script>-->

 	<script type="text/javascript">

 		if (msg > "") {
 			alert(msg);
 			//	return false;
 		}

 		if (courseLink > "") {			// Defensive Driving Course
 			openWindow(courseLink);
 		}

 		if (ddcAction == "ddcLogin")
 			window.close();

 		function submitLogin() {
 			$('#myModalOKTA').modal('show');
 		}

 		function submitLogon() {
 			go('SUBMITLOGON');
 		}

 		function submitRegister() {
 			go('SUBMITREGISTER');
 		}

 		function submitCAMLogin() {
 			go('SUBMITCAMLOGIN');
 		}

 		function submitForgotPassword() {
 			go('SUBMITFORGOTPW');
 		}

 		function checkError() {
 			var errorCode = document.forms[0].scErrorCode.value;
 			if (errorCode != '') {
 				if (errorCode == "R")
 					document.getElementById('errorLabel').innerHTML = 'Please follow the link provided in your email used during registration to proceed with account setup.';
 				else
 					if (errorCode == "D")
 						document.getElementById('errorLabel').innerHTML = 'Your account has been deactivated. \nPlease contact your agency fleet representative for assistance.';
 					else
 						if (errorCode == "C")
 							document.getElementById('errorLabel').innerHTML = 'Customer record associated with your GSA Drive-thru account was not found. \nPlease contact your agency fleet representative for assistance.';
 						else
 							if (errorCode == "L")
 								document.getElementById('errorLabel').innerHTML = 'Your account has been locked. \nPlease contact an agency fleet manager or fleet service representative (master users) for assistance.';
 							else
 								if (errorCode == "X")
 									document.getElementById('errorLabel').innerHTML = 'ENT user not found. Please provide registered email and password to continue.';
 								else
 									document.getElementById('errorLabel').innerHTML = 'Invalid email or password entered. Please correct and try again.';

 		< !--$('#myModal1').modal('show'); -->
 					$('#myModalOKTA').modal('show');
 			}
 		}

 		function clickLogin() {
 			if ((gsaInternal == "Y") && (window.location.host == "drivethru.gsa.gov" || window.location.host == "drivethru-dr.fas.gsa.gov" || window.location.host == "drivethru-dr.gsa.gov")) {
 				go('SUBMITLOGON');
 			}
 			else {
 				$('#myModalOKTA').modal('show');
 				$("#gsaSSoLoginId").show();
 				//$('#myModalOKTA').on('shown.bs.modal', function () {$('#inputEmail').focus();})
 			}

 		}
 		function clickLoginUser() {
 			if ((gsaInternal == "Y") && (window.location.host == "drivethru.gsa.gov" || window.location.host == "drivethru-dr.fas.gsa.gov" || window.location.host == "drivethru-dr.gsa.gov")) {
 				go('SUBMITLOGON');
 			}
 			else {
 				/* $('#myModal1').modal('show');
 				$('#myModal1').on('shown.bs.modal', function () {$('#inputEmail').focus();})
 				*/

 				$('#myModalOKTA').modal('show');
 				$("#gsaSSoLoginId").show();
 			}

 		}
 	</script>

 	<!-- OKTA Code -->
 	<!-- Commented the 2.14.0 verions on 4/1/2020
 <script
   src="https://ok1static.oktacdn.com/assets/js/sdk/okta-signin-widget/2.14.0/js/okta-sign-in.min.js"
   type="text/javascript"></script>
 <link
   href="https://ok1static.oktacdn.com/assets/js/sdk/okta-signin-widget/2.14.0/css/okta-sign-in.min.css"
   type="text/css"
   rel="stylesheet"/>
 -->
 	<!-- Latest CDN production Javascript and CSS - added on 4/1/2020-->
 	<script src="../drivethru_gsa_files/okta-sign-in.min.js" type="text/javascript"></script>
 	<link href="../drivethru_gsa_files/okta-sign-in.min.css" type="text/css" rel="stylesheet">
 	<!-- end OKTA Code -->
 	<!-- <style>#okta-sign-in {margin: 0 auto !important;}</style> -->
 	<style>
 		#okta-sign-in {
 			width: 500px;
 			margin: 20px auto 8px;
 		}

 		#okta-sign-in .auth-header {
 			padding: 30px;
 			position: relative;
 			border-bottom: 0px solid #ddd;
 			z-index: 0;
 			-moz-transition: padding-bottom .4s;
 			-webkit-transition: padding-bottom .4s;
 			transition: padding-bottom .4s;
 		}

 		#okta-sign-in .button,
 		#okta-sign-in .button.link-button {
 			text-align: center;
 			color: #fff;
 			background-color: #3c80d2;
 			background: -o-linear-gradient(top, #fbfbfb 0, #f8f8f8 100%);
 			background: -ms-linear-gradient(top, #fbfbfb 0, #f8f8f8 100%);
 			background: -webkit-gradient(linear, left top, left bottom, from(#fbfbfb), to(#f8f8f8));
 			background: -webkit-linear-gradient(#fbfbfb, #f8f8f8);
 			background: linear-gradient(#3c80d2, #155ccf);
 			border-color: #3c80d2 #c3c3c3 #c3c3c3;
 			box-shadow: 0 1px 0 rgba(0, 0, 0, .05), inset 0 1px 0 0 hsla(0, 0%, 100%, .1);
 			width: 260px;

 		}

 		< !-- NEW CODE -->#okta-sign-in.auth-container .button {
 			text-align: center;
 			color: #2f3f4a;
 			background-color: #fbfbfb;
 			background: -o-linear-gradient(top, #fbfbfb 0, #f8f8f8 100%);
 			background: -ms-linear-gradient(top, #fbfbfb 0, #f8f8f8 100%);
 			background: -webkit-gradient(linear, left top, left bottom, from(#fbfbfb), to(#f8f8f8));
 			background: -webkit-linear-gradient(#fbfbfb, #f8f8f8);
 			background: linear-gradient(#1662dd, #155ccf);
 			border-color: #c3c3c3 #c3c3c3 #bbb;
 			box-shadow: 0 1px 0 rgba(0, 0, 0, .05), inset 0 1px 0 0 hsla(0, 0%, 100%, .1);
 		}

 		#okta-sign-in .enroll-factor-row .enroll-factor-button .button {
 			margin-top: 0;
 			height: 30px;
 			line-height: 28px;
 			padding: 0 10px;
 			color: #fbfbfb;
 		}

 		#okta-sign-in.auth-container .button:focus,
 		#okta-sign-in.auth-container .button:hover {
 			text-decoration: underline;
 			text-align: center;
 			color: #3c80d2;
 			background-color: #fbfbfb;
 			background: -o-linear-gradient(top, #fbfbfb 0, #f8f8f8 100%);
 			background: -ms-linear-gradient(top, #fbfbfb 0, #f8f8f8 100%);
 			background: -webkit-gradient(linear, left top, left bottom, from(#fbfbfb), to(#f8f8f8));
 			background: -webkit-linear-gradient(#fbfbfb, #f8f8f8);
 			background: linear-gradient(#1662dd, #155ccf);
 			border-color: #c3c3c3 #c3c3c3 #bbb;
 			box-shadow: 0 1px 0 rgba(0, 0, 0, .05), inset 0 1px 0 0 hsla(0, 0%, 100%, .1);
 		}

 		< !-- -->#okta-sign-in .mfa-verify-passcode .auth-passcode .o-form-input {
 			width: 100px;
 		}

 		#okta-sign-in .auth-content .auth-content-inner {
 			width: 380px;
 		}

 		#okta-sign-in.no-beacon .auth-header {
 			padding-bottom: 0px;
 		}

 		#okta-sign-in .dropdown .options li.option {
 			padding: 5px;
 			display: block;
 			border-bottom: 1px solid #eaeaea;
 			background: #fff;
 			position: relative;
 			min-height: 50px !important;
 			width: 100%;
 			white-space: nowrap;
 		}

 		#okta-sign-in.auth-container .okta-sign-in-header {
 			z-index: 1;
 		}

 		#okta-sign-in .beacon-container {
 			top: 95px;
 		}

 		#okta-sign-in .o-form-head {
 			margin-top: 25px;
 		}

 		#okta-login-container .mfa-okta-sms {
 			/* -- Factor Icons (large): SMS -- */
 			background-image: url("/images/sms_70x70.png");
 			background-color: lightblue;
 		}

 		#okta-login-container .mfa-google-auth {
 			/* -- Factor Icons (large): SMS -- */
 			background-image: url("/images/googleAuth_70x70.png");
 			background-color: lightblue;
 		}

 		#okta-login-container .mfa-okta-email {
 			/* -- Factor Icons (large): SMS -- */
 			background-image: url("/images/email_70x70.png");
 			background-color: lightblue;
 		}

 		< !-- #kta-sign-in.auth-container .button {
 			color: #2f3f4a;
 			background-color: ##d02424;
 			background: -o-linear-gradient(top, ##d02424 0, #f8f8f8 100%);
 			background: -ms-linear-gradient(top, ##d02424 0, #f8f8f8 100%);
 			background: -webkit-gradient(linear, left top, left bottom, from(##d02424), to(#f8f8f8));
 			background: -webkit-linear-gradient(##d02424, #f8f8f8);
 			background: linear-gradient(#d02424, #f8f8f8);
 			border-color: #c3c3c3 #c3c3c3 #bbb;
 			box-shadow: 0 1px 0 rgba(0, 0, 0, .05), inset 0 1px 0 0 hsla(0, 0%, 100%, .1)
 		}

 		-->
 	</style>

+	<link rel="stylesheet" href="../../../vendor/uswds/css/uswds.min.css" type="text/css" />
+	<script src="../../../vendor/uswds/js/uswds-init.min.js"></script>
+	<style>
+		.usa-footer__primary-content .usa-list {
+			display: flex;
+			flex-direction: column;
+			flex-wrap: wrap;
+		}
+
+		.usa-footer__primary-content .usa-list li {
+			padding-top: 0;
+			padding-bottom: 1rem;
+		}
+	</style>
+
+
 </head>

-<body onload="checkError();">
+<body onload="checkError();" style="background:#fff">
 	<form name="mainForm" action="https://drivethru.gsa.gov/fmdtsys/dthome" method="POST" autocomplete="off">

 		<input type="hidden" name="scParam" size="80" maxlength="80"
 			value="0AA8DE2BB119CE1736C12D13298327AB2022080312503181DTLOGIN          GSAC">
 		<input type="hidden" name="WEBPCMTRANSID" value="0879124,2773908">
 		<input type="hidden" name="scLogin" value="00">
 		<input type="hidden" name="scAction" value="">
 		<input type="hidden" name="scPgm" value="">
 		<input type="hidden" name="scUserid" value="">
 		<input type="hidden" name="scPassword" value="">
 		<input type="hidden" name="scErrorCode" value="">

-		<!--- remove background color from this DIV-->
-		<div class="container-fluid2 shadowedge">
-			<!-- <script type="text/javascript">homepageheaderdlogin();</script> -->
-			<div class="banner"><img src="../drivethru_gsa_files/DTbanner.jpg" width="465" height="63"
-					title="GSA logo for Fleet Drive-thru" id="gsaLogo">
-				<div title="Privacy and Security"><a href="https://drivethru.gsa.gov/fmdtsys/dthome#"
-						onclick="openWindow(&#39;/html/privacy.HTM&#39;);"
-						style="font-size:11px; color:#6d6d6d; float:right; margin-top:-55px;">Privacy and Security</a>
+		<a class="usa-skipnav" href="#main-content">Skip to main content</a>
+		<section class="usa-banner" aria-label="Official government website">
+			<div class="usa-accordion">
+				<header class="usa-banner__header">
+					<div class="usa-banner__inner">
+						<div class="grid-col-auto">
+							<img class="usa-banner__header-flag" src="../../../vendor/uswds/img/us_flag_small.png"
+								alt="U.S. flag" />
+						</div>
+						<div class="grid-col-fill tablet:grid-col-auto">
+							<p class="usa-banner__header-text">
+								An official website of the United States government
+							</p>
+							<p class="usa-banner__header-action" aria-hidden="true">
+								Here's how you know
+							</p>
+						</div>
+						<button class="usa-accordion__button usa-banner__button" aria-expanded="false"
+							aria-controls="gov-banner">
+							<span class="usa-banner__button-text">Here's how you know</span>
+						</button>
+					</div>
+				</header>
+				<div class="usa-banner__content usa-accordion__content" id="gov-banner">
+					<div class="grid-row grid-gap-lg">
+						<div class="usa-banner__guidance tablet:grid-col-6">
+							<img class="usa-banner__icon usa-media-block__img"
+								src="../../../vendor/uswds/img/icon-dot-gov.svg" role="img" alt="" aria-hidden="true" />
+							<div class="usa-media-block__body">
+								<p>
+									<strong> Official websites use .gov </strong>
+									<br />
+									A <strong>.gov</strong> website belongs to an official
+									government organization in the United States.
+								</p>
+							</div>
+						</div>
+						<div class="usa-banner__guidance tablet:grid-col-6">
+							<img class="usa-banner__icon usa-media-block__img"
+								src="../../../vendor/uswds/img/icon-https.svg" role="img" alt="" aria-hidden="true" />
+							<div class="usa-media-block__body">
+								<p>
+									<strong> Secure .gov websites use HTTPS </strong>
+									<br />
+									A <strong>lock</strong> (
+									<span class="icon-lock"><svg xmlns="http://www.w3.org/2000/svg" width="52"
+											height="64" viewBox="0 0 52 64" class="usa-banner__lock-image" role="img"
+											aria-labelledby="banner-lock-title banner-lock-description"
+											focusable="false">
+											<title id="banner-lock-title">Lock</title>
+											<desc id="banner-lock-description">A locked padlock</desc>
+											<path fill="#000000" fill-rule="evenodd"
+												d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z" />
+										</svg></span>
+									) or <strong>https://</strong> means you've safely connected
+									to the .gov website. Share sensitive information only on
+									official, secure websites.
+								</p>
+							</div>
+						</div>
+					</div>
 				</div>
 			</div>
+		</section>
+		<header class="usa-header usa-header--extended">
+			<div class="usa-navbar">
+				<div class="usa-logo" id="extended-logo">
+					<em class="usa-logo__text">
+						<a href="/">
+							GSA Fleet Drive-thru
+						</a>
+					</em>
+				</div>
+				<button class="usa-menu-btn">Menu</button>
+			</div>
+		</header>
+
+		<!--- remove background color from this DIV-->
+		<div class="grid-container">
+			<!-- <script type="text/javascript">homepageheaderdlogin();</script> -->
 			<div class="navbar navbar-default" style="cursor:pointer">
 				<div class="navbar-header" role="navigation"><button id="idnavbtn" type="button" title="Main Navigation"
 						class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span
 							class="icon-bar"></span><span class="icon-bar"></span><span
 							class="icon-bar"></span></button></div>
 				<div class="collapse navbar-collapse" onmousemove="$(&quot;ul li a&quot;).blur()">
 					<ul id="idnav" class="nav navbar-nav">
 						<li><a id="close" title="Close Window" href="javaScript: window.close();"
 								style="display: none;">CLOSE WINDOW</a></li>
 						<li><a id="findf" title="Find U.S. Alternative Fuel"
 								href="https://drivethru.gsa.gov/fmdtsys/dthome#"
 								onclick="openWindow(&quot;http://www.eere.energy.gov/afdc/stations/advanced.php&quot;)">Find
 								U.S. Alternative Fuel</a></li>
 						<li><a title="About Fleet" href="https://drivethru.gsa.gov/fmdtsys/dthome#"
 								onclick="openWindow(&quot;http://gsa.gov/portal/content/104624&quot;);">About Fleet</a>
 						</li>
 						<li><a id="conta" title="Contact Us" href="https://drivethru.gsa.gov/fmdtsys/dthome#"
 								onclick="openWindow(&quot;/html/DTCONTACTUS.htm&quot;)">Contact Us</a></li>
 						<li id="help"><a title="Help" href="https://drivethru.gsa.gov/fmdtsys/dthome#"
 								onclick="openWindow(&quot;/help/HELP_DTLOGIN.PDF&quot;)">Help</a></li>
 					</ul>
 					<ul class="nav navbar-nav navbar-right">
 						<li><a href="javascript:submitRegister();">New User? Register here</a></li>
 						<li><a data-toggle="modal" href="https://drivethru.gsa.gov/fmdtsys/dthome#"
 								onclick="clickLogin(); $(this).trigger(&quot;keypress&quot;, {which: 18});">Login</a>
 						</li>
 					</ul>
 				</div>
 			</div><span id="username" style="display:none"> </span>
 			<div class="container" style="padding:0px;">

 				<div class="row" style="margin-top:10px; margin-bottom: 15px;">
 					<!-- ledt column with images-->
 					<div class="col-md-8">
 						<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
 							<!-- Indicators -->
 							<ol class="carousel-indicators">
 								<li data-target="#carousel-example-generic" data-slide-to="0" class=""></li>
 								<li data-target="#carousel-example-generic" data-slide-to="1" class=""></li>
 								<li data-target="#carousel-example-generic" data-slide-to="2" class=""></li>
 								<li data-target="#carousel-example-generic" data-slide-to="3" class="active"></li>
 								<li data-target="#carousel-example-generic" data-slide-to="4" class=""></li>
 							</ol>

 							<!-- Wrapper for slides -->
 							<div class="carousel-inner" role="listbox">
 								<div class="item">
 									<img src="../drivethru_gsa_files/image1.png" alt="image1">
 								</div>
 								<div class="item">
 									<img src="../drivethru_gsa_files/image2.png" alt="image2">
 								</div>
 								<div class="item">
 									<img src="../drivethru_gsa_files/image3.png" alt="image3">
 								</div>
 								<div class="item active">
 									<img src="../drivethru_gsa_files/image4.png" alt="image4">
 								</div>
 								<div class="item">
 									<img src="../drivethru_gsa_files/image5.png" alt="image5">
 								</div>
 							</div>
 						</div>
 					</div>
 					<!-- end left column with images -->

 					<!--right column with icons -->
 					<div class="col-md-4">
 						<!-- 	<h4><a href="#" onClick="openWindow('/html/DTDRIVERSAFTY.htm'); return false;" title="Driver Safety"><span class="blueHead">Driver Safety</span></a></h4>   DXM-->
 						<h4><span class="blueHead">Driver Safety</span></h4>
 						<p><img src="../drivethru_gsa_files/safetyIcon.png" class="homeicon" width="54" height="54"
 								title="Driver Safety icon">Learn more about how GSA Fleet is working to reducing driver
 							risk while promoting an attitude of mutual understanding, courtesy, and safe driving. </p>
 						<div class="clearfix">&nbsp;</div>
 						<!--	<h4><a href="#" onClick="openWindow('/html/DTFLEETNEWS.htm'); return false;"  title="Fleet News - What's New"><span class="blueHead">Fleet News - What's New</span></a></h4> dxm -->
 						<!-- 	<h4><span class="blueHead">Fleet News - What's New</span></h4>
 	<p><img src="/images/newsIcon.png"     class="homeicon" width="56" height="56" title="Fleet News - What's New icon">Learn about GSA Fleet current offerings and updates. Information includes rate notices, customer letters, newsletters, fact sheets and other special announcements on the many services.</p>  12537 dxm -->
 						<p>Federal employees who drive GSA Fleet-leased vehicles are eligible to register for either GSA
 							Fleet's Defensive Driver Course or Professional Truck Driver Course.</p>
 						<p>If you have a GSA Fleet Drive-thru account, please log in, scroll over <i>Training</i> in the
 							upper navigation bar, and click on <i>Defensive Driver Course</i>.</p>
 						<p>If you do not have a GSA Fleet Drive-thru account, please contact your local fleet manager or
 							designated GSA Fleet Drive-thru account holder to begin the course registration process.</p>
 						<div class="clearfix">&nbsp;</div>
 						<!--	<h4><a href="#" onClick="openWindow('/html/DTTRAINING.htm'); return false;"  title="Training"><span class="blueHead">Training</span></a></h4>  DXM -->
 						<h4><span class="blueHead">Training</span></h4>
 						<p><img src="../drivethru_gsa_files/trainingIcon.png" class="homeicon" width="56" height="57"
 								title="Training Icon">Our robust Fleet Training course library contains a Sustainability
 							Series, Drive-thru training, prior year FedFleet training, and previously recorded Desktop
 							Workshops on a variety of fleet-related topics.</p>
 					</div>
 					<!-- end right column-->

 				</div>
 				<!-- end row div red -->

-				<!--Start Footer-->
-				<div style="padding-left:13px; padding-right:13px">
-					<script type="text/javascript">pagefooter();</script>
-					<div class="footer">
-						<div class="col-md-2">
-							<p>Related Sites</p>
-							<p><a title="GSA.gov"
-									href="javascript: openWindow(&quot;http://gsa.gov/portal/category/100000&quot;)">GSA</a><br><a
-									title="Auto Auctions"
-									href="javascript: openWindow(&quot;https://autoauctions.gsa.gov&quot;)">Auto
-									Auctions</a><br><a title="AutoChoice"
-									href="javascript: openWindow(&quot;https://autochoice.fas.gsa.gov&quot;)">AutoChoice</a><br><a
-									title="DRM or Vehicle Dispatch"
-									href="javascript: openWindow(&quot;https://vehicledispatch.fas.gsa.gov&quot;)"
-									id="drm">DRM</a><br><a title="Fastweb"
-									href="javascript: openWindow(&quot;https://fastweb.inl.gov&quot;)">F.A.S.T.</a><br>
-							</p>
-						</div>
-						<div class="col-md-2">
-							<p>&nbsp;</p>
-							<p><a title="Federal Vehicle Standards" href="javascript: openFedVehStd()">Federal Vehicle
-									Standards</a><br><a title="FedFMS"
-									href="javascript: openWindow(&quot;https://ffms.fas.gsa.gov&quot;)"
-									id="ffms">FedFMS</a><br><a title="STR"
-									href="javascript: openWindow(&quot;https://str.gsa.gov&quot;)"
-									id="str">STR</a><br><a title="VCSS"
-									href="javascript: openWindow(&quot;https://vcss.ocfo.gsa.gov&quot;)">VCSS</a><br><a
-									title="VFE or Vehicle Fleet Exchange"
-									href="javascript: openWindow(&quot;https://drivethru.gsa.gov/vfe.htm&quot;)">VFE</a>
-							</p>
-						</div>
-						<div class="col-md-2">
-							<p>Other Interest<br></p>
-							<p><a title="USA.gov"
-									href="javascript: openWindow(&quot;http://usa.gov&quot;)">USA.gov</a><br><a
-									title="Data.gov"
-									href="javascript: openWindow(&quot;http://data.gov&quot;)">Data.gov</a><br><a
-									title="Whitehouse.gov"
-									href="javascript: openWindow(&quot;http://whitehouse.gov&quot;)">Whitehouse.gov</a><br><a
-									title="Section508.gov"
-									href="javascript: openWindow(&quot;https://www.section508.gov/manage/laws-and-policies&quot;)">Section508.gov</a><br><a
-									title="GSA API Directory"
-									href="javascript: openWindow(&quot;https://open.gsa.gov/api/&quot;)">GSA API
-									Directory</a></p>
-							<p></p>
-						</div>
-						<div class="col-md-2">
-							<p>&nbsp;</p>
-						</div>
-						<div class="col-md-4 footerbkg">
-							<p style="color:#000">GSA/FAS Asset and Transportation Management Helpdesk</p>
-							<p>Hours of Operation<br>8:00 AM - 7:00 PM EST<br> Tel: 1-866-472-6711<br>Email:&nbsp;<a
-									href="mailto:gsadrivethruhelp@gsa.gov"
-									title="GSA Drive-thru Help Desk email address"
-									style="color:white">gsadrivethruhelp@gsa.gov</a></p>
-						</div>
-					</div>
-				</div>
-				<!--End Footer-->
 				<!-- /.container -->
 			</div>

 			<!-- Modal for login section-->
 			<div id="myModal1" class="modal fade" data-backdrop="static">
 				<div class="modal-dialog">
 					<div class="modal-content">
 						<div class="modal-header">
 							Login<button type="button" class="close" data-dismiss="modal" alt="Daria-hidden=" true"=""
 								title="Close Login Window">×</button>
 						</div>
 						<div class="modal-body">
 							<div class="form-group"><span id="errorLabe2" style="color:red">&nbsp;</span></div>
 							<div class="form-group">
 								<label for="inputEmail" class="control-label">Email Address:</label>
 								<input type="email" class="form-control" id="inputEmail" placeholder="Email Address"
 									name="scLoginEmail" value="" onblur="this.value = this.value.toUpperCase();">
 							</div>
 							<div class="form-group">
 								<label for="inputPassword3" class="control-label">Password:</label>
 								<input type="password" class="form-control" id="inputPassword3" placeholder="Password"
 									name="scLoginPassword" value="">
 							</div>
 							<div class="form-group">
 								<p><span class="text-danger"><strong>Note: Password is case sensitive. </strong></span>
 									<a href="https://drivethru.gsa.gov/fmdtsys/dthome#"
 										onclick="submitForgotPassword();">Reset/Forgot Password?</a>
 								</p>
 							</div>
 							<div class="form-group" style="text-align:center">
 								<button type="button" class="btn btn-dt" onclick="submitLogin();">LOG IN</button>
 							</div>
 						</div>
 					</div>
 				</div>
 			</div>

 			<!-- Modal for LID Selection section-->
 			<div id="myModal" class="modal fade" data-backdrop="static">
 				<div class="modal-dialog">
 					<div class="modal-content">
 						<div class="modal-header">LID Selection<button type="button" class="close" data-dismiss="modal"
 								alt="Daria-hidden=" true"="" title="Close LID Selection Window">×</button>
 						</div>
 						<div class="modal-body" style="text-align:center;">
 							<label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1"
 									value="option1"> LID1</label>
 							<label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio2"
 									value="option2"> LID2</label>
 							<label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio3"
 									value="option3"> LID3</label>
 							<label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio1"
 									value="option1"> LID4</label>
 							<label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio2"
 									value="option2"> LID5</label>
 							<label class="radio-inline"><input type="radio" name="inlineRadioOptions" id="inlineRadio3"
 									value="option3"> LID6</label>
 						</div>
 						<p style="text-align:center; font-weight:bold;"><span class="text-danger">Please select a LID to
 								login.</span></p>
 						<p>&nbsp;</p>
 						<div class="form-group" style="text-align:center"><button type="login" class="btn btn-dt"
 								onclick="submitLogin();">LOG IN</button></div>
 						<!--<div class="form-group" style="text-align:center">
 						<button type="previous" class="btn btn-dt">FY16 ACQUISITION CYCLE<br><span style="color:#FC0; font-weight:bold;">CAM Users Log In Here</span></button>
 					</div>-->
 						<!--<div class="form-group" style="text-align:center">
 						<button type="previous" class="btn btn-dt">
 							<span style="color:#FC0; font-weight:bold;">Register Here for the</span><br> New Drive-thru Modernization</button>
 					</div>-->
 					</div>
 				</div>
 			</div>

 			<!-- OKTA Code -->
 			<div id="myModalOKTA" class="modal fade" data-backdrop="static">
 				<div class="modal-dialog">
 					<div class="modal-content">
 						<div class="modal-header">GSA Multi-Factor Authentication(MFA)<button type="button"
 								class="close" data-dismiss="modal" alt="Daria-hidden=" true"=""
 								title="Close Login Window">×</button>
 						</div>
 						<div class="modal-body">
 							<!-- <h4 style="margin-top:0px"><div style="color:red;text-align:center">GSA Multi-Factor Authentication (MFA) is now live</div></h4>
 						<div style="font-weight:bold">If you did not receive your temporary password in your email or if you have forgotten your password, <a href="javascript:forgotPassword();" onClick="forgotPassword(); return false;" title="Click here"><strong>click here</strong></a> to reset your password.</div>
 					    --
 						<div style="font-weight:bold">*Note, if you are an active user of GSA Advantage, please use your current MFA credentials to log in.</div>
 						-->
 							<div style="font-weight:bold">*Note, now you can select any or all of the Multi-Factor
 								options to receive the OTP code. <br>
 								<!-- It is recommended that you should set up all factors since this setup option is only available once and is for all your MFA applications.
 						If you want to add additional factors at a later time then you will need to contact the help desk to reset MFA factors for your account. -->
 								Click <a title="Help" href="https://drivethru.gsa.gov/fmdtsys/dthome#"
 									onclick="openWindow(&#39;/help/MFA_Options.PDF&#39;)">here</a> for help.
 							</div>
 							<div class="form-group"><span id="errorLabel" style="color:red">&nbsp;</span></div>
 							<!-- Render the login widget here -->
 							<!-- commented on 4/1/2020
 					<div id="okta-login-container"></div>
 					-->
 							<div id="widget-container">
 								<div data-se="auth-container" id="okta-sign-in"
 									class="auth-container main-container no-beacon">
 									<div class="okta-sign-in-header auth-header"> <img
 											src="../drivethru_gsa_files/DTbanner.jpg" class="auth-org-logo" alt="">
 										<div data-type="beacon-container" class="beacon-container"></div>
 									</div>
 									<div class="auth-content">
 										<div class="auth-content-inner">
 											<div class="primary-auth">
 												<form novalidate="novalidate" method="POST"
 													action="https://drivethru.gsa.gov/fmdtsys/dthome" data-se="o-form"
 													slot="content" id="form1"
 													class="primary-auth-form o-form o-form-edit-mode">
 													<div data-se="o-form-content"
 														class="o-form-content o-form-theme clearfix">
 														<h2 data-se="o-form-head" class="okta-form-title o-form-head">
 															Enter your email and password to login</h2>
 														<div class="o-form-error-container"
 															data-se="o-form-error-container"></div>
 														<div class="o-form-fieldset-container"
 															data-se="o-form-fieldset-container">
 															<div data-se="o-form-fieldset"
 																class="o-form-fieldset o-form-label-top margin-btm-5">
 																<div data-se="o-form-label"
 																	class="okta-form-label o-form-label"><label
 																		for="okta-signin-username">Enter your email
 																		address&nbsp;</label></div>
 																<div data-se="o-form-input-container"
 																	class="o-form-input">
 																	<p class="o-form-explain"> </p><span
 																		data-se="o-form-input-username"
 																		class="o-form-input-name-username o-form-control okta-form-input-field input-fix">
 																		<input type="text" placeholder=""
 																			name="username" id="okta-signin-username"
 																			value="" aria-label="" autocomplete="off"
 																			required=""> </span>
 																</div>
 															</div>
 															<div data-se="o-form-fieldset"
 																class="o-form-fieldset o-form-label-top margin-btm-30">
 																<div data-se="o-form-label"
 																	class="okta-form-label o-form-label"><label
 																		for="okta-signin-password">Password&nbsp;</label>
 																</div>
 																<div data-se="o-form-input-container"
 																	class="o-form-input">
 																	<p class="o-form-explain"> </p><span
 																		data-se="o-form-input-password"
 																		class="o-form-input-name-password o-form-control okta-form-input-field input-fix">
 																		<input type="password" placeholder=""
 																			name="password" id="okta-signin-password"
 																			value="" aria-label="" autocomplete="off"
 																			required=""> </span>
 																</div>
 															</div>
 															<div data-se="o-form-fieldset"
 																class="o-form-fieldset o-form-label-top margin-btm-0">
 																<div data-se="o-form-input-container"
-																	class="o-form-input"><span
-																		data-se="o-form-input-remember"
+																	class="o-form-input">
+																	<span data-se="o-form-input-remember"
 																		class="o-form-input-name-remember">
 																		<div class="custom-checkbox"><input
 																				type="checkbox" name="remember"
 																				id="input7"><label for="input7"
 																				data-se-for-name="remember">Remember
 																				me</label></div>
-																	</span></div>
+																	</span>
+																</div>
 															</div>
 														</div>
 													</div>
 													<div class="o-form-button-bar"><input class="button button-primary"
 															type="submit" value="Login" id="okta-signin-submit"
 															data-type="save"></div>
 												</form>
 												<div class="auth-footer"> <a
 														href="https://drivethru.gsa.gov/fmdtsys/dthome#"
 														data-se="needhelp" aria-expanded="false"
 														aria-controls="help-links-container" class="link help js-help">
 														Need help signing in? </a>
 													<ul class="help-links js-help-links" id="help-links-container"
 														style="display: none;">
 														<li> <a href="https://drivethru.gsa.gov/fmdtsys/dthome#"
 																data-se="forgot-password"
-																class="link js-forgot-password"> Forgot password? </a>
+																class="link js-forgot-password">
+																Forgot password? </a>
 														</li>
 														<li> <a href="javascript:gsaSSOLogin();" class="link js-custom"
 																rel="noopener noreferrer">GSA User Login</a> </li>
 														<li> <a href="https://drivethru.gsa.gov/docs/MFA_FAQ.pdf"
 																data-se="help-link" class="link js-help-link"
 																rel="noopener noreferrer" target="_blank"> Help </a>
 														</li>
 													</ul>
 												</div>
 											</div>
 										</div>
 									</div>
 								</div>
 							</div>
 							<!-- Script to init the widget -->
 							<script>
 								if (window.location.host == "drivethrud.fas.gsa.gov") {
 									signInWidgetConfig = {
 										baseUrl: "https://dev-atm.oktapreview.com",
 						< !--logo: '/images/DTbanner.jpg', -->
 										redirectUri: "https://dev-atm.oktapreview.com/home/devatm_drivethrudev_1/0oal2picxq66p9a0E0h7/alnl2plm00Mf2QUyZ0h7",
 											language: 'en',
 												i18n: {
 										'en': {
 											'primaryauth.title': 'Enter your email and password to login',
 												'primaryauth.submit': 'Login',
 													'primaryauth.username.placeholder': 'Enter your email address',
 														'primaryauth.username.tooltip': ' ',
 															'primaryauth.password.tooltip': ' ',
 																'error.username.required': 'Please enter your email',
 																	'error.password.required': 'Please enter a password',
 																		'errors.E0000004': 'Sign in failed.  Invalid email address/password provided, or you may not be a registered user of this application.  Please check your credentials and try again, or register for an account!',
 																			'password.expired.title': 'Your password has expired',
 																				'error.auth.lockedOut': 'Your account has been locked for 30 minutes, please try later or contact customer service at 1-866-472-6711',
 																					'mfa.sendEmail': 'Send verification email',
 																						'password.oldPassword.placeholder': 'Old/Temporary password'
 										}
 									},
 									features: {
 										registration: false,                 // Enable self-service registration flow
 											rememberMe: true,                   // Setting to false will remove the checkbox to save username
 												multiOptionalFactorEnroll: true,  // Allow users to enroll in multiple optional factors before finishing the authentication flow.
 													//selfServiceUnlock: true,          // Will enable unlock in addition to forgotten password
 													//smsRecovery: true,                // Enable SMS-based account recovery
 													//callRecovery: true,               // Enable voice call-based account recovery
 													router: true,                       // Leave this set to true for the API demo
 							//autoPush: true, 					// Auto Push
 						},
 									helpLinks: {
 										forgotPassword: 'javascript:forgotPassword();',
 											help: '/docs/MFA_FAQ.pdf',
 												custom: [
 													{
 														text: 'GSA User Login',
 														href: 'javascript:gsaSSOLogin();',
 													},
 												]
 									},
 									authParams: {
 										issuer: "https://dev-atm.oktapreview.com/oauth2/default",
 											//responseType: ['token', 'id_token'],
 											responseType: ['code'],
 												display: 'page'
 									}
 								}
 				}
 				else if (window.location.host == "drivethrub.gsa.gov") {
 									signInWidgetConfig = {
 										baseUrl: "https://test-fas.oktapreview.com",
 										logo: '/images/DTbanner.jpg',
 										redirectUri: "https://test-fas.oktapreview.com/home/testfas_drivethrutest_1/0oanm3eb4qCnE7C0n0h7/alnnm3fgjsVwk3Zcj0h7",
 										language: 'en',
 										i18n: {
 											'en': {
 												'primaryauth.title': 'Enter your email and password to login',
 												'primaryauth.submit': 'Login',
 												'primaryauth.username.placeholder': 'Enter your email address',
 												'primaryauth.username.tooltip': ' ',
 												'primaryauth.password.tooltip': ' ',
 												'error.username.required': 'Please enter your email',
 												'error.password.required': 'Please enter a password',
 												'errors.E0000004': 'Sign in failed.  Invalid email address/password provided, or you may not be a registered user of this application.  Please check your credentials and try again, or register for an account!',
 												'password.expired.title': 'Your password has expired',
 												'error.auth.lockedOut': 'Your account has been locked for 30 minutes, please try later or contact customer service at 1-866-472-6711',
 												'mfa.sendEmail': 'Send verification email',
 												'password.oldPassword.placeholder': 'Old/Temporary password'
 											}
 										},
 										features: {
 											registration: false,                 // Enable self-service registration flow
 											rememberMe: true,                   // Setting to false will remove the checkbox to save username
 											multiOptionalFactorEnroll: true,  // Allow users to enroll in multiple optional factors before finishing the authentication flow.
 											//selfServiceUnlock: true,          // Will enable unlock in addition to forgotten password
 											//smsRecovery: true,                // Enable SMS-based account recovery
 											//callRecovery: true,               // Enable voice call-based account recovery
 											router: true,                       // Leave this set to true for the API demo
 											//autoPush: true, 					// Auto Push
 										},
 										helpLinks: {
 											forgotPassword: 'javascript:forgotPassword();',
 											help: '/docs/MFA_FAQ.pdf',
 											custom: [
 												{
 													text: 'GSA User Login',
 													href: 'javascript:gsaSSOLogin();',
 												},
 											]
 										},
 										authParams: {
 											issuer: "https://test-fas.oktapreview.com/oauth2/default",
 											//responseType: ['token', 'id_token'],
 											responseType: ['code'],
 											display: 'page'
 										}
 									}
 								}
 								else {
 									signInWidgetConfig = {
 										baseUrl: "https://gsa.okta.com",
 										logo: '/images/DTbanner.jpg',
 										redirectUri: "https://gsa.okta.com/home/generalservicesadministration_drivethru_1/0oa1qlm266rMdhNdX297/aln1qlmt606sPdEkB297",
 										language: 'en',
 										i18n: {
 											'en': {
 												'primaryauth.title': 'Enter your email and password to login',
 												'primaryauth.submit': 'Login',
 												'primaryauth.username.placeholder': 'Enter your email address',
 												'primaryauth.username.tooltip': ' ',
 												'primaryauth.password.tooltip': ' ',
 												'error.username.required': 'Please enter your email',
 												'error.password.required': 'Please enter a password',
 												'errors.E0000004': 'Sign in failed.  Invalid email address/password provided, or you may not be a registered user of this application.  Please check your credentials and try again, or register for an account!',
 												'password.expired.title': 'Your password has expired',
 												'error.auth.lockedOut': 'Your account has been locked for 30 minutes, please try later or contact customer service at 1-866-472-6711',
 												'mfa.sendEmail': 'Send verification email',
 												'password.oldPassword.placeholder': 'Old/Temporary password'
 											}
 										},
 										features: {
 											registration: false,                 // Enable self-service registration flow
 											rememberMe: true,                   // Setting to false will remove the checkbox to save username
 											multiOptionalFactorEnroll: true,  // Allow users to enroll in multiple optional factors before finishing the authentication flow.
 											//selfServiceUnlock: true,          // Will enable unlock in addition to forgotten password
 											//smsRecovery: true,                // Enable SMS-based account recovery
 											//callRecovery: true,               // Enable voice call-based account recovery
 											router: true,                       // Leave this set to true for the API demo
 											//autoPush: true, 					// Auto Push
 										},
 										helpLinks: {
 											forgotPassword: 'javascript:forgotPassword();',
 											help: '/docs/MFA_FAQ.pdf',
 											custom: [
 												{
 													text: 'GSA User Login',
 													href: 'javascript:gsaSSOLogin();',
 												},
 											]
 										},
 										authParams: {
 											issuer: "https://gsa.okta.com/oauth2/default",
 											//responseType: ['token', 'id_token'],
 											responseType: ['code'],
 											display: 'page'
 										}
 									}
 								}
 								signInWidget = new OktaSignIn(signInWidgetConfig);
 								signInWidget.renderEl({ el: '#widget-container' }, success, widgetErrorCallback);

 								function widgetSuccessCallback(res) {
 									var key = '';
 									if (res[0]) {
 										key = Object.keys(res[0])[0];
 										signInWidget.tokenManager.add(key, res[0]);
 									}
 									if (res[1]) {
 										key = Object.keys(res[1])[0];
 										signInWidget.tokenManager.add(key, res[1]);
 									}
 									if (res.status === 'SUCCESS') {
 										var token = signInWidget.tokenManager.get(key);
 										console.log("Logged in to Okta and issued token:");
 										console.log(token);
 										console.log("Reload this page to start over.");
 										alert("Logged in! Check your developer console for details");
 									}
 								}

 								function widgetErrorCallback(err) {
 									alert("error occured");
 								}

 								function success(res) {
 									// Nothing to do in this case, the widget will automatically redirect
 									// the user to Okta for authentication, then back to this page if successful
 									if (res.status === 'SUCCESS') {
 										//console.log('response status is success, ' + res[0]);
 										if (window.location.host == "drivethrud.fas.gsa.gov")
 											res.session.setCookieAndRedirect("https://dev-atm.oktapreview.com/home/devatm_drivethrudev_1/0oal2picxq66p9a0E0h7/alnl2plm00Mf2QUyZ0h7");
 										else
 											if (window.location.host == "drivethrub.gsa.gov")
 												res.session.setCookieAndRedirect("https://test-fas.oktapreview.com/home/testfas_drivethrutest_1/0oanm3eb4qCnE7C0n0h7/alnnm3fgjsVwk3Zcj0h7");
 											else
 												res.session.setCookieAndRedirect("https://gsa.okta.com/home/generalservicesadministration_drivethru_1/0oa1qlm266rMdhNdX297/aln1qlmt606sPdEkB297");

 									}
 								}

 							</script>
 							<div>&nbsp;</div>
 							<!--
 					<div class="form-group"><span id="gsaSSoLoginId">If you are a GSA user and can access Drive-thru from an outside GSA Network using your ENT user name and password please <a href="javascript:gsaSSOLogin()" style="font-weight:bold">click here.</a></span></div>
 					-->
 							<div>Trouble logging in? Click <a title="Help"
 									href="https://drivethru.gsa.gov/fmdtsys/dthome#"
 									onclick="openWindow(&#39;/help/MFA_INSTRUCTIONS.PDF&#39;)">here</a> for Instructions
 								or email: <a href="mailto:gsadrivethruhelp@gsa.gov"
 									style="font-weight:bold">gsadrivethruhelp@gsa.gov</a></div>
 						</div>
 					</div>
 				</div>
 			</div>
 			<!-- end OKTA Code -->


 			<!-- end Modal lid login section  -->
 		</div>
+		<!--Start Footer-->
+		<footer class="usa-footer usa-footer--big">
+			<div class="usa-footer__primary-section">
+				<div class="grid-container">
+					<div class="grid-row grid-gap">
+						<div class="tablet:grid-col-12">
+							<nav class="usa-footer__nav" aria-label="Footer navigation,,">
+								<div class="grid-row grid-gap-4">
+									<div class="mobile-lg:grid-col-6 desktop:grid-col-6">
+										<section class="
+				                    usa-footer__primary-content
+				                    usa-footer__primary-content--collapsible
+				                  ">
+											<h4 class="usa-footer__primary-link">Related Sites</h4>
+											<ul class="usa-list usa-list--unstyled height-card">
+												<li class="usa-footer__secondary-link">
+													<a href="https://autoauctions.gsa.gov">Auto
+														Auctions</a>
+												</li>
+												<li class="usa-footer__secondary-link">
+													<a href="https://autochoice.fas.gsa.gov">AutoChoice</a>
+												</li>
+												<li class="usa-footer__secondary-link">
+													<a href="https://vehicledispatch.fas.gsa.gov/FMVD/VDHOME/">
+														DRM</a>
+												</li>
+												<li class="usa-footer__secondary-link">
+													<a href="https://fastweb.inl.gov/">F.A.S.T</a>
+												</li>
+												<li class="usa-footer__secondary-link">
+													<a href="https://vehiclestd.fas.gsa.gov/">Federal
+														Vehicle Standards</a>
+												</li>
+												<li class="usa-footer__secondary-link"><a
+														href="https://ffms.fas.gsa.gov/ffms/fastart/">
+														FedFMS</a>
+												</li>
+												<li class="usa-footer__secondary-link"><a
+														href="https://str.gsa.gov/str/signon">STR</a>
+												</li>
+												<li class="usa-footer__secondary-link"><a
+														href="https://phdc-pub.gsa.gov/vcssregistration/">VCSS</a>
+												</li>
+												<li class="usa-footer__secondary-link"> <a
+														href="https://drivethru.gsa.gov/fmdtsys/dthome">VFE</a>
+												</li>
+											</ul>
+										</section>
+									</div>
+									<div class="mobile-lg:grid-col-6 desktop:grid-col-6">
+										<section class="
+				                    usa-footer__primary-content
+				                    usa-footer__primary-content--collapsible
+				                  ">
+											<h4 class="usa-footer__primary-link">Other Interests</h4>
+											<ul class="usa-list usa-list--unstyled height-card">
+												<li class="usa-footer__secondary-link">
+													<a href="https://USA.gov">USA.gov</a>
+												</li>
+												<li class="usa-footer__secondary-link">
+													<a href="https://data.gov">Data.gov</a>
+												</li>
+												<li class="usa-footer__secondary-link">
+													<a href="https://whitehouse.gov">Whitehouse.gov</a>
+												</li>
+												<li class="usa-footer__secondary-link">
+													<a href="https://section508.gov">Section508.gov</a>
+												</li>
+												<li class="usa-footer__secondary-link">
+													<a href="https://open.gsa.gov/api">GSA API Directory</a>
+												</li>
+											</ul>
+										</section>
+									</div>
+								</div>
+							</nav>
+						</div>
+					</div>
+				</div>
+			</div>
+			<div class="usa-footer__secondary-section">
+				<div class="grid-container">
+					<div class="grid-row grid-gap">
+						<div class="
+				            usa-footer__logo
+				            grid-row
+				            mobile-lg:grid-col-6 mobile-lg:grid-gap-2
+				          ">
+							<div class="mobile-lg:grid-col-auto">
+								<img class="usa-footer__logo-img" src="/assets/img/logo-img.png" alt="" />
+							</div>
+							<div class="mobile-lg:grid-col-auto">
+								<p class="usa-footer__logo-heading">Fleet Management</p>
+							</div>
+						</div>
+						<div class="usa-footer__contact-links mobile-lg:grid-col-6">
+							<p class="usa-footer__contact-heading">GSA/FAS Asset and Transportation Management
+								Helpdesk</p>
+							<p>Hours of operation: 8AM - 7PM EST</p>
+							<address class="usa-footer__address">
+								<div class="usa-footer__contact-info grid-row grid-gap">
+									<div class="grid-col-auto">
+									</div>
+									<div class="grid-col-auto">
+										<a href="tel:1-866-472-6711">(866) 472-6711</a>
+									</div>
+									<div class="grid-col-auto">
+										<a href="gsadrivethruhelp@gsa.gov">gsadrivethruhelp@gsa.gov</a>
+									</div>
+								</div>
+							</address>
+						</div>
+					</div>
+				</div>
+			</div>
+		</footer>
+		<!--End Footer-->
+		<div class="usa-identifier">
+			<section class="usa-identifier__section usa-identifier__section--masthead" aria-label="Agency identifier,">
+				<div class="usa-identifier__container">
+					<div class="usa-identifier__logos">
+						<a href="javascript:void(0);" class="usa-identifier__logo">
+							<img class="usa-identifier__logo-img" src="../../../assets/img/gsa_logo.png"
+								alt="US General Administration Services Starmark logo" role="img" />
+						</a>
+					</div>
+					<div class="usa-identifier__identity">
+						<p class="usa-identifier__identity-domain">
+							drivethru.gsa.gov
+						</p>
+						<p class="usa-identifier__identity-disclaimer">
+							An official website of the
+							<a href="javascript:void(0);">US General Services Administration</a>
+						</p>
+					</div>
+				</div>
+			</section>
+			<nav class="usa-identifier__section usa-identifier__section--required-links" aria-label="Important links,">
+				<div class="usa-identifier__container">
+					<ul class="usa-identifier__required-links-list">
+						<li class="usa-identifier__required-links-item">
+							<a href="https://www.gsa.gov/about-us" class="usa-identifier__required-link usa-link">About
+								GSA</a>
+						</li>
+						<li class="usa-identifier__required-links-item">
+							<a href="https://www.gsa.gov/website-information/accessibility-aids"
+								class="usa-identifier__required-link usa-link">Accessibility support</a>
+						</li>
+						<li class="usa-identifier__required-links-item">
+							<a href="https://www.gsa.gov/reference/freedom-of-information-act-foia"
+								class="usa-identifier__required-link usa-link">FOIA requests</a>
+						</li>
+						<li class="usa-identifier__required-links-item">
+							<a href="https://www.gsa.gov/website-information/website-policies#privacy"
+								class="usa-identifier__required-link usa-link">Privacy policy</a>
+						</li>
+					</ul>
+				</div>
+			</nav>
+			<section class="usa-identifier__section usa-identifier__section--usagov"
+				aria-label="U.S. government information and services,">
+				<div class="usa-identifier__container">
+					<div class="usa-identifier__usagov-description">
+						Looking for U.S. government information and services?
+					</div>
+					<a href="https://www.usa.gov/" class="usa-link">Visit USA.gov</a>
+				</div>
+			</section>
+		</div>
+		</div>

 		<script type="text/javascript">
 			function checkSubmit(e) {
 				if (browser == "MSIE") {
 					if (event.keyCode == '13')
 						submitLogin()
 				}
 				if (browser == "Firefox") {
 					if (e.which == 13)
 						submitLogin();
 				}
 				else
 					if (e.keyCode == 13) {
 						submitLogin();
 					}
 			}
 			document.onkeydown = checkSubmit;

 			function forgotPassword() {
 				//alert("username:" + document.forms[1].username.value);
 				document.forms[0].scLoginEmail.value = document.forms[1].username.value.toUpperCase();
 				submitForgotPassword();
 			}
 			function gsaSSOLogin() {
 				if (window.location.host == "drivethrub.gsa.gov") {
 					location.href = "https://secureauth.dev.gsa.gov/secureauth39/SecureAuth.aspx?ReturnURL=https://drivethrub.gsa.gov/fmdtsys/dthome?C=C&amp;Continue=SAContinue";
 				} else
 					if (window.location.host == "drivethrud.fas.gsa.gov") {
 						location.href = "https://secureauth.dev.gsa.gov/secureauth39/SecureAuth.aspx?ReturnURL=https://drivethrud.fas.gsa.gov/fmdtdsys/dthome?C=C&amp;Continue=SAContinue";
 					} else
 						if (window.location.host == "drivethru-dr.fas.gsa.gov") {
 							location.href = "https://secureauth.gsa.gov/secureauth68/SecureAuth.aspx?ReturnURL=https://drivethru-dr.fas.gsa.gov/fmdtsys/dthome?C=C&amp;Continue=SAContinue";
 						} else {
 							location.href = "https://secureauth.gsa.gov/secureauth68/SecureAuth.aspx?ReturnURL=https://drivethru.gsa.gov/fmdtsys/dthome?C=C&amp;Continue=SAContinue";
 						}
 			}
 		</script>
 		<!-- Bootstrap core JavaScript
 ================================================== -->
 		<!-- Placed at the end of the document so the pages load faster -->
 		<script src="../drivethru_gsa_files/bootstrap.min.js"></script>

 	</form>
-
+	<script src="../../../vendor/uswds/js/uswds.min.js"></script>

 </body>

 </html>
```