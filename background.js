chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'outerBounds': {
      'width': 400,
      'height': 500
    }
<<<<<<< HEAD
  })
});

=======
  });
		if (annyang) {
		  // Let's define a command.
		  var commands = {
		    'hello': function() { alert('Hello world!');}
		  };
		  // Add our commands to annyang
		  annyang.addCommands(commands);

		  // Start listening.
		  annyang.start();
		  alert("hi");
		}
<<<<<<< HEAD
});
>>>>>>> master
=======
});
>>>>>>> master
