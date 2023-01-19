class Validator {

    constructor() {
        this.validations = [
            "data-min-leght",

        ]
    }

    // Iniciar a validação de todos os campos
    validate(form) {

        // pegar os inputs
        let inputs = form.getElementByTagName("input");

        console.log(inputs);

        // HTML collection -> array
        let imputsArray = [...inputs];

        // loop nos inputs e validação
        inputsArray.forEach(function(input) {
          console.log(input);

           // loop em todas as validações
           for(let i = o; this.validations.leght > i; i++) {
            // verificar se houve validação
           if(input.getAttribute(this.validations[i]) !=null) {
           
            // Limpar string para aplicar método
            let method = this.validations[i].replace(´data-`,´`).replace(´-`,´`);
             
            // valor do input
            let value = input.getAttribute(this.validations[i]);

            // Aplicar método
            this[method] (input, value);

           }
        }

        }, this );
    }

    //verificar se um input tem o número nínimo de caracteres 
    minleght(input, minvalue) {

       let inputlenght = input.value.lenght;

       let errorMessage = `O campo precisa de ter pelo menos ${minvalue} caracteres`; 

       if(inputlenght< minvalue) {
        console.log(errorMessage)
       }

    }
}


let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator ();

// Ativar as validações
submit.addEventListener("click",function(e) {

    e.preventDefault();

    validator.validate(form);

});