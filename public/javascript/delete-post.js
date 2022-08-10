async function deleteForm (event) {
    event.preventDefault();

    const postId = window.location.toString().split('/') [
        window.location.toString().split('/').length -1
    ];
    const response = await fetch (`/api/posts/${postId}`, {
        method:'DELETE'
    });

    if(response.ok) {
        document.location.replace('/');
    }
}