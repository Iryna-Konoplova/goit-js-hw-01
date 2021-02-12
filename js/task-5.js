let cost;
const country = prompt('Укажите страну');

switch (country) {
  case 'Китай':
    cost = 100;
    break;

  case 'Чили':
    cost = 250;
    break;

  case 'Австралия':
    cost = 170;
    break;
    
  case 'Индия':
    cost = 80;
    break;
    
  case 'Ямайка':
    cost = 120;
    break;

  default:
    alert('В вашей стране доставка не доступна');
}

console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);