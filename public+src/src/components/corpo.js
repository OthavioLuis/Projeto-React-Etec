import './corpo.css';
import Lista from './lista';
import Lista2 from './lista2';

function Header() {
    const name = 'Bananinha'
    return (
        <div className="cx-ul">
            <ul>
                <p>Opaa {name}, quero meu <strong>MB</strong>!</p>
                <Lista />
                <Lista2
                    nome= "Guilherme"
                />
            </ul>
        </div>
    );
}

export default Header;
