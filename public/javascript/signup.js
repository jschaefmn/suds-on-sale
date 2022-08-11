async function signupForm(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();

    if (username && password && email) {
        const response = await fetch ('api/users', {
            method:'post',
            body: JSON.stringify({
                username,
                password,
                email
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}
document.querySelector('.signup-form').addEventListener('submit', signupForm);