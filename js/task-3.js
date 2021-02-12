const ADMIN_PASSWORD = prompt('Введите пароль');
let message;

if (ADMIN_PASSWORD === null) {
  message = 'Отменено пользователем!';
} else if (ADMIN_PASSWORD === 'jqueryismyjam') {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

console.log(message);