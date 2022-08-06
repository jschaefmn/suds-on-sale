async function newFormHandler(event) {
    event.preventDefault();

    const postTitle = document.querySelector('input[name="postTitle"]').value;
    const postContent = document.querySelector('textarea[name="postContent"]').value.trim();

    const response = await fetch (`/api/posts`, {
        method:'POST',
        body: JSON.stringify({
            postTitle,
            postContent
        }),
        headers: {
            'content-type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/home');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);