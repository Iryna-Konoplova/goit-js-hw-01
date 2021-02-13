let cost;
let country = prompt('Укажите страну');
country = country[0].toUpperCase() + country.slice(1).toLowerCase();

 switch (country) {
   case 'Китай':
     cost = 100;
     console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
     break;

   case 'Чили':
     cost = 250;
     console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
     break;

   case 'Австралия':
     cost = 170;
     console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
     break;
    
   case 'Индия':
     cost = 80;
     console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
     break;
    
   case 'Ямайка':
     cost = 120;
     console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
     break;

   default:
     alert('В вашей стране доставка не доступна');
 }

