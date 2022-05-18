const fieldWarning = document.querySelector("#fieldWarning")

const signupFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    if (!email || !password) {
        fieldWarning.textContent = "All fields must be filled out.";
        return;
    }


    else if (password.length < 8) {
        fieldWarning.textContent =
            "Password must be at least 8 characters long";
    }

    console.log(password.length)

    const response = await fetch("api/users", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
        fieldWarning.textContent = "Email address already in use.";
    } else {
        document.location.replace(`/dashboard`);
    }
};

document
    .querySelector("#signupButton")
    .addEventListener("click", signupFormHandler);
