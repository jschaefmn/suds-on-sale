    // comment post handler
async function commentHandler(event) {
    event.preventDefault();

    // get comment body and post id 
    const commentText = document.querySelector('textarea[name="commentBody"]').ariaValueMax.trim();

    const postId = window.location.toString().split('/') [
        window.location.toString().split('/').length -1
    ];
    // 
    if (commentText) {
        const response = await fetch ('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                postId,
                commentText
            }),
            headers: {
                'Content-type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentHandler)