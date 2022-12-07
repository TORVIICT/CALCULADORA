import "../style/calculadora.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const Calculadora = () => {

    return(

        <div className="forma">
            <label>Calculadora</label>
            <div className="pantalla">pantalla</div>
            <div className="teclado">
                <ul class="list-group list-group-horizontal">
                    <button type="button" class="btn btn-dark">%</button>
                    <button type="button" class="btn btn-dark">CE</button>
                    <button type="button" class="btn btn-dark">C</button>
                    <button type="button" class="btn btn-dark">borrar</button>
                </ul>
                <ul class="list-group list-group-horizontal-sm">
                    <button type="button" class="btn btn-dark">1/X</button>
                    <button type="button" class="btn btn-dark">X^2</button>
                    <button type="button" class="btn btn-dark">XX</button>
                    <button type="button" class="btn btn-dark">/</button>
                </ul>
                <ul class="list-group list-group-horizontal-md">
                    <button type="button" class="btn btn-dark">7</button>
                    <button type="button" class="btn btn-dark">8</button>
                    <button type="button" class="btn btn-dark">9</button>
                    <button type="button" class="btn btn-dark">X</button>
                </ul>
                <ul class="list-group list-group-horizontal-lg">
                    <button type="button" class="btn btn-dark">4</button>
                    <button type="button" class="btn btn-dark">5</button>
                    <button type="button" class="btn btn-dark">6</button>
                    <button type="button" class="btn btn-dark">-</button>

                </ul>
                <ul class="list-group list-group-horizontal-xl">
                    <button type="button" class="btn btn-dark">1</button>
                    <button type="button" class="btn btn-dark">2</button>
                    <button type="button" class="btn btn-dark">3</button>
                    <button type="button" class="btn btn-dark">+</button>
                </ul>
                <ul class="list-group list-group-horizontal-xxl">
                    <button type="button" class="btn btn-dark">+/-</button>
                    <button type="button" class="btn btn-dark">0</button>
                    <button type="button" class="btn btn-dark">,</button>
                    <button type="button" class="btn btn-dark">=</button>
                </ul>
            </div>
        </div>
    );



    };



export default Calculadora;
