
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('./login.json')
        .then(response => response.json())
        .then(data => {
            const user = data.users.find(user => user.username === username && user.password === password);

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            
            if (user.password === 'admin') {
                window.location.assign('dashboard.html');
            } else if (user.password === 'user') {
                window.location.assign('index.html');
            } else {
                alert('Invalid credentials. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            alert('Error fetching user data. Please try again later.');
        });
});
