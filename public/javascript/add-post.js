//  new post form
async function newPostForm(event) {
    event.preventDefault();

    // get post and post text
    const postTitle = document.querySelector('input[name="postTitle"]').value;
    const postContent = document.querySelector('textarea[name="postContent"]').value.trim();

    // add new post w/ POST route
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
    // if post meets requirements, reload page with the updated post
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

    // event listener for new post submit button
document.querySelector('.new-post-form').addEventListener('submit', newPostForm);