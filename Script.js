
	document.getElementById('registrationForm').addEventListener('submit', function(event) {
		event.preventDefault();
		
		var name = document.getElementById('name').value;
		var email = document.getElementById('email').value;
		var message = document.getElementById('message').value;
		var ermessage = document.getElementById('ermessage');

		// Regular expressions for validation
		var namePattern = /^[A-Za-z\s]+$/;
		var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		// Validate name
		if (!namePattern.test(name)) {
			ermessage.textContent = 'Name must contain only alphabets.';
			return;
		}

		// Validate email
		if (!emailPattern.test(email)) {
			ermessage.textContent = 'Email must be a valid format containing "@" and ".".';
			return;
		}

		// Ensure all fields are filled
		if (!name || !email || !message) {
			ermessage.textContent = 'All fields must be filled.';
			return;
		}

		// If all validations pass
		window.alert('Form submitted successfully!');
		event.target.submit();
		// Here you can add the code to actually submit the form
	});

	document.getElementById("download-button").addEventListener('click', function(){
	  const pdfURL = "Portfolio-2/web/images/hari.pdf"
	  const a = document.createElement('a')
	  a.href = pdfURL
	  a.download = 'Harikrishnan_Resume.pdf'
	  document.body.appendChild(a)
	  a.click()
	  document.body.removeChild(a)
    })

