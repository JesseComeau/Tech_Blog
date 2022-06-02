const editPostScript = async (event) => {
    console.log("clicked")
    event.preventDefault();
    console.log(this)
    const fieldWarning = document.querySelector("#fieldWarning")

    const post_title = document.querySelector("#editPostTitle").value.trim();
    const post_message = document.querySelector("#editPostBody").value.trim();
    const id = document.querySelector("#postId").innerText;
    console.log(id)

    if (!post_title || !post_message) {
        fieldWarning.textContent = "Please include an updated title and/or body for your post.";
        return;
    }

    const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({ post_title, post_message }),
        headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
        fieldWarning.textContent = "Please include an updated title and/or body for your post.";
    } else {
        location.reload();
    }
};

document
    .querySelector("#saveEditPost")
    .addEventListener("click", editPostScript);
