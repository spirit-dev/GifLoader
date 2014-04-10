GifLoader
=========

Simple JS script launching gif loader on demand into html5 page
This script fits all sizes of div (or other) on which you want to apply Gif.
GifLoader is also able to update himself in case of div size change

1) Starting whith this script
-----------------------------

Before importing GifLoader script, make you have JQuery.

Once Jquery is imported, do like following to include GifLoader :
You need to import GifLoader script in your HTML Document :

	<!-- JS -->
	<script src="../src/js/gif_loader.js" type="text/javascript" charset="utf-8" async defer></script>

Once Javascript Script is imported, do the same for the CSS Script which will help GifLoader.	

	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="../src/css/gif-loader.css">
	
That's all. Your are now ready to use GifLoader

2) Client side (GifLoader managment)
------------------------------------

For the client side, about managing GifLoader, here is a simple sample code for GifLoader execution.

	// Initialise GifLoader
	var al = new gifLoader(".ajaxLoader");
			
	// Update GifLoader placement in case of Div size change
	al.update_size();
	
	// Remove GifLoader when finished
	al.remove();

3) Want to change Gif Image ?
-----------------------------

If you want to change the Gif Image, you may Override CSS script default GifLoader Image definition.
Create another script where you will define another Gif Image like the following:

	.gif_loader {
		background: url("img/another-gif-loader.gif") no-repeat center center transparent !important;
		/* Don't forget the !important at the end! */
	}

	
### Enjoy !

### Author
Jean Bordat
bordat.jean@gmail.com
http://jean.bordat.me