const app = new Vue({
    el: "#app",
    data: {
        numero: 0,
        numeroRandom: 0,
        numIntentos: 0
    },
    methods: {
        evaluar(e) {
            var value=window.event ? window.event.keyCode:e.which;
            // console.log(value);
            
            let valorIngresado = e.target.value;
            
            if (this.soloNumeros(value)) {
                
                //se evalúa el número ingresado con el numero al azar
                if (parseInt(valorIngresado) === parseInt(this.numeroRandom)) {
                    // console.log("Iguales");
                    document.getElementById('mensaje').innerHTML = "Iguales";
                    document.getElementById('numeroRandom').innerHTML = this.numeroRandom;

                    this.numIntentos++;
                } else {
                    // console.log("Diferentes");
                    if (parseInt(valorIngresado) < parseInt(this.numeroRandom)) {
                        document.getElementById('mensaje').innerHTML = "Tu número es menor";
                    } else {
                        document.getElementById('mensaje').innerHTML = "Tu número es mayor";
                    }
                    // document.getElementById('mensaje').innerHTML = "Diferentes";
                    document.getElementById('number').value = '';    
                    this.numIntentos++;
                }
            } else {
                document.getElementById('number').value = '';
            }

        },
        autoFocus() {
            document.getElementById('number').focus();
        },
        //Solo números o el enter
        soloNumeros(value) {
            if (    ( value >= 48 && value <= 57 ) || 
                    ( value >= 96 && value <= 105) || 
                    ( value == 38 || value == 40 ) || 
                    ( value == 13 ) ) {
                // console.log("válido");
                return true;
            } else {
                // console.log("no válido");
                return false;
            }
        },
        generaNumeroRandom(){
            let numRandom = Math.random() * (+100 - +1) + +1;
            this.numeroRandom = Math.round(numRandom);
        }
    },
    mounted: function () {
        this.autoFocus();
        this.generaNumeroRandom();
    }
});