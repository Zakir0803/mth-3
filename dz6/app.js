const form = document.getElementById('authForm');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const modalMessage = document.getElementById('modalMessage');

form.addEventListener('submit', function(event) {
event.preventDefault();

const login = document.getElementById('login').value;
const password = document.getElementById('password').value;

if (login === 'terminator3000' && password === 'ARNOLD_123') {
    modalMessage.textContent = '✅ Успешная авторизация!';
    modalContent.className = 'modal-content success';
} else {
    modalMessage.textContent = '❌ Ошибка авторизации. Попробуйте снова.';
    modalContent.className = 'modal-content error';
}

modal.style.display = 'flex';
});

function closeModal() {
    modal.style.display = 'none';
}
