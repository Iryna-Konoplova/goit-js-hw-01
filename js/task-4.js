const credits = 23580;
const pricePerDroid = 3000;
const quantityDroid = prompt('Сколько дроидов вы хотите купить?');
let message;

const totalPrice = quantityDroid === null ? 'Отменено пользователем!' : Number(quantityDroid)*pricePerDroid;

if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
}  else {
  message = `Вы купили ${quantityDroid} дроидов, на счету осталось ${credits-totalPrice} кредитов.`;
}

console.log(message);