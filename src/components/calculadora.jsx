import "../style/calculadora.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const Calculadora = () => {



    let operandoa = 0;
    let operacion = "";
    let operandob = 0;


    var resultado = document.getElementById('resultado');
    var igual = document.getElementById('igual');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicar = document.getElementById('multiplicar');
    var division = document.getElementById('division');
    var cero = document.getElementById('cero');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var coma = document.getElementById('coma');
    var masomenos = document.getElementById('masomenos');
    var borrar = document.getElementById('borrar');
    var porcentaje = document.getElementById('porcentaje');
    var limpiar = document.getElementById('limpiar');



    function pressCero (e){
        resultado.textContent = resultado.textContent + "0";
    };

    function pressUno (e){
        resultado.textContent = resultado.textContent + "1";
    };

    function pressDos (e){
        resultado.textContent = resultado.textContent + "2";
    };

    function pressTres (e){
        resultado.textContent = resultado.textContent + "3";
    };

    function pressCuatro (e){
        resultado.textContent = resultado.textContent + "4";
    };

    function pressCinco (e){
        resultado.textContent = resultado.textContent + "5";
    };

    function pressSeis (e){
        resultado.textContent = resultado.textContent + "6";
    };

    function pressSiete (e){
        resultado.textContent = resultado.textContent + "7";
    };

    function pressOcho (e){
        resultado.textContent = resultado.textContent + "8";
    };

    function pressNueve (e){
        resultado.textContent = resultado.textContent + "9";
    };

    function pressComa (e){
        resultado.textContent = resultado.textContent + ",";
    };

    function multiplicar (e){
        console.log("prueba");
    };

    function suma (e){
        operandoa = resultado.textContent;
        resultado.textContent = resultado.textContent + "+";
        operacion = "+";

    };

    function resta (e){
        console.log("prueba");
    };

    function division (e){
        console.log("prueba");
    };

    function masomenos (e){
        console.log("prueba");
    };

    function igual (e){
        console.log("prueba");
    };





































    function limpiar(){
        resultado.textContent = "";
      };

    function resetear(){
        resultado.textContent = "";
        operandoa = 0;
        operandob = 0;
        operacion = "";
      };

    function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
        case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    resultado.textContent = res;
    }








    return(

        <div className="forma">
            <label className="titulo">Calculadora</label>
            <div className="pantalla"><span id="resultado"></span></div>
            <div className="teclado">
                <ul className="list-group list-group-horizontal">
                    <button type="button" className="btn btn-dark" id="porcentaje">%</button>
                    <button type="button" className="btn btn-dark" id="limpiar">CE</button>
                    <button type="button" className="btn btn-dark">C</button>
                    <button type="button" className="btn btn-dark" id="borrar">borrar</button>
                </ul>
                <ul className="list-group list-group-horizontal-sm">
                    <button type="button" className="btn btn-dark">1/X</button>
                    <button type="button" className="btn btn-dark">X^2</button>
                    <button type="button" className="btn btn-dark">XX</button>
                    <button type="button" className="btn btn-dark" id="division" onClick={division}>/</button>
                </ul>
                <ul className="list-group list-group-horizontal-md">
                    <button type="button" className="btn btn-dark" id="siete" onClick={pressSiete}>7</button>
                    <button type="button" className="btn btn-dark" id="ocho" onClick={pressOcho}>8</button>
                    <button type="button" className="btn btn-dark" id="nueve" onClick={pressNueve}>9</button>
                    <button type="button" className="btn btn-dark" id="multiplicar" onClick={multiplicar}>X</button>
                </ul>
                <ul className="list-group list-group-horizontal-lg">
                    <button type="button" className="btn btn-dark" id="cuatro" onClick={pressCuatro}>4</button>
                    <button type="button" className="btn btn-dark" id="cinco" onClick={pressCinco}>5</button>
                    <button type="button" className="btn btn-dark" id="seis" onClick={pressSeis}>6</button>
                    <button type="button" className="btn btn-dark" id="resta" onClick={resta}>-</button>

                </ul>
                <ul className="list-group list-group-horizontal-xl">
                    <button type="button" className="btn btn-dark" id="uno" onClick={pressUno}>1</button>
                    <button type="button" className="btn btn-dark" id="dos" onClick={pressDos}>2</button>
                    <button type="button" className="btn btn-dark" id="tres" onClick={pressTres}>3</button>
                    <button type="button" className="btn btn-dark" id="suma" onClick={suma}>+</button>
                </ul>
                <ul className="list-group list-group-horizontal-xl">
                    <button type="button" className="btn btn-dark" id="masomenos" onClick={masomenos}>+/-</button>
                    <button type="button" className="btn btn-dark" id="cero" onClick={pressCero}>0</button>
                    <button type="button" className="btn btn-dark" id="coma" onClick={pressComa}>,</button>
                    <button type="button" className="btn btn-dark" id="igual" onClick={igual}>=</button>
                </ul>

            </div>
        </div>
    );

    

    


    };



export default Calculadora;
