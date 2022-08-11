async function createPost (event) {
    event.preventDefault();

    document.location.replace('/create/new')
}
document.querySelector('#create-new-post').addEventListener('click', createPost);