const fieldWarning = document.querySelector("#fieldWarning")


const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      fieldWarning.textContent = "Incorrect email or password.";
    } else {
      document.location.replace(`/dashboard`);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
