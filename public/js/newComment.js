const fieldWarning = document.querySelector("#fieldWarning");

const newComment = async (event) => {
    event.preventDefault();

    const comment = document.querySelector("#commentBody").value.trim();
    const postID = document.querySelector("#postID").innerText;

    if (!comment) {
        fieldWarning.textContent = "Please include a title and body for your post.";
        return;
    }


    const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ comment, postID }),
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        location.reload();
        console.log("okay")

    } else {
        console.log(response)
    }
};

document
    .querySelector("#saveNewcomment")
    .addEventListener("click", newComment);
