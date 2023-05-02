//select new container
const container = document.getElementById("container");
console.log(container);



//creazione del ciclo e output
for (let i = 1; i <= 100; i++) {
    
    if(i % 15 === 0) { //se il numero e' un multiplo di 5
        container.innerHTML += `<div class="box box-15">FizzBuzz</div>`;
        console.log("Fizz Buzz");
    }

    else if(i % 5 === 0) { //se il numero e' un multiplo di 5
        container.innerHTML += `<div class="box box-5">FizzBuzz</div>`;
        console.log("Buzz");
    }
    
    else if(i % 3 === 0) { //se il numero e' un multiplo di 3
        container.innerHTML += `<div class="box box-3">FizzBuzz</div>`;
        console.log("Fizz");
    }

    else{
        console.log(i)
        contenitore.innerHTML += `<div class="box">${i}</div>`;
    }

}



