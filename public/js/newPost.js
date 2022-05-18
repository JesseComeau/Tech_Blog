const fieldWarning = document.querySelector("#fieldWarning")

const newPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#postTitle").value.trim();
    const body = document.querySelector("#postBody").value.trim();

    if (!title || !body) {
        fieldWarning.textContent = "Please include a title and body for your post.";
        return;
    }

    const response = await fetch("api/posts", {
        method: "POST",
        body: JSON.stringify({ title, body }),
        headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
        fieldWarning.textContent = "Email address already in use.";
    } else {
        document.location.replace(`/dashboard`);
    }
};

document
    .querySelector("#saveNewPost")
    .addEventListener("click", newPost);
