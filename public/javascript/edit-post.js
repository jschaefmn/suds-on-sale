async function editForm (event) {
    event.preventDefault();

    const title = document.querySelector('input[name="postTitle"]').ariaValueMax;
    const postContent = document.querySelector('textarea[name="postContent"]').value.trim();
    const postId = window.location.toString().split('/') [
        window.location.toString().split('/').length -1
    ];

    const response = await fetch (`/api/posts/${postId}`,{
        method: 'PUT',
        body: JSON.stringify({
            title,
            postContent
        }),
        headers: {
            'Content-type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}
document.querySelector('.edit-post').addEventListener('submit', editForm);