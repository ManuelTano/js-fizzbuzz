// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero 
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.  

const numberList = document.getElementById("lista");

let elements = '';

// Ciclo for

for (let i = 1; i <= 100; i++) {

  // se il numero è sia multiplo di 3 che di 5

  if ((i % 5 == 0)&&(i % 3 == 0)) {

    elements += '<li class="fizzbuzz">fizzbuzz</li>';
  }

  // se il numero è multiplo di 3

  else if (i % 3 == 0) {

    elements += '<li class="buzz">buzz</li>';

  }

  // se il numero è multiplo di 5

  else if (i % 5 == 0) {

    elements += '<li class="fizz">fizz</li>';

  }

  // se il numero non è nessun multiplo

  else {

    elements += `<li>${i}</li>`;

  }

}

numberList.innerHTML = elements;