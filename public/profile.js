const handleFormSubmission = async (event, method) => {
    event.preventDefault();

    const title = document.querySelector("#title").value.trim();
    const content = document.querySelector("#post_content").value.trim();
    const user_id = document.querySelector("#user_id").value.trim();

    if (title && content && user_id) {
        const response = await fetch("/api/posts", {
            method,
            body: JSON.stringify({ title, content, user_id }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert(`Failed to ${method} post.`);
        }
    }
};

const formHandlerLogin = (event) => handleFormSubmission(event, "POST");
const formHandlerEdit = (event) => handleFormSubmission(event, "PUT");
const formHandlerDelete = (event) => handleFormSubmission(event, "DELETE");

document.querySelector(".new-post-form").addEventListener("submit", formHandlerLogin);
document.querySelector(".edit-post-form").addEventListener("submit", formHandlerEdit);
document.querySelector(".delete-post-form").addEventListener("submit", formHandlerDelete);
