//  new post form
async function newPostForm(event) {
    event.preventDefault();

    // get post and post text
    const title = document.querySelector('#post-title').value;
    const post_url = document.querySelector('#post-url').value;
    const post_body = document.querySelector('#post-body').value;
    const price = document.querySelector('#price').value;
    const category_id = document.querySelector('#category-id').value;
    const tag_id = document.querySelector('#tag-id').value;

    // add new post w/ POST route
    const response = await fetch(`/api/post/new`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_url,
            post_body,
            price,
            category_id,
            tag_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // if post meets requirements, reload page with the updated post
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

// event listener for new post submit button
document.querySelector('.new-post-form').addEventListener('submit', newPostForm);