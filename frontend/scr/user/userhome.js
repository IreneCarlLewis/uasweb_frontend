document.getElementById('profileIcon').addEventListener('click', () => {
    const user = localStorage.getItem('user');
    if (user) {
        window.location.href = 'profile.html';
    } else {
        window.location.href = 'login.html';
    }
});
