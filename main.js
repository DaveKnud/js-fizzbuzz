//select new container
const contenitore = document.getElementById("container");
console.log(container);


//creazione del ciclo e output
for (let i =1; i <= 100; i++) {
    if(i % 3 === 0) { //se il numero e' un multiplo di 3
        console.log("Fizz");
    }

    else if(i % 5 === 0) { //se il numero e' un multiplo di 5
        console.log("Buzz");
    }
    
    //creazione nuovo elemento
    const quadrato = document.createElement('span');
       
    //inserimento valore nell'elemento
    quadrato.append(i);

    //inserimento elemento al contenitore
    container.append(quadrato);
}


