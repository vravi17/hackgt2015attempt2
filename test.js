function myFunction() {
	
		if (annyang) {
		  // Let's define a command.
		  var commands = {
		    'hello': function() { alert('Hello world!');}
		    'home': function() { window.location.href = "http://yahoo.com";;}
		  };

		  var google= {
		  	'google': function() {
		  		window.location.href = "http://google.com";
		  	}
		  };

		  var yahoo= {
		  	'yahoo': function() {
		  		alert('yahoo');
		  	}
		  };
		  // Add our commands to annyang
		  annyang.addCommands(commands);
		  annyang.addCommands(yahoo);
		  annyang.addCommands(google);


		  // Start listening.
		  annyang.start();
		}
	}
