import './lista2.css';

function Lista2(props) {
    const teste = 'Frase armazenada dentro de uma variável';
    return (
        <li className='lista2'>Puxando uma propriedade chamada: {props.nome} <br /> por outra função, com teste de variável: <p className="paragrafo">{teste}</p></li>
    );
}

export default Lista2;
