import logo from '../../logo.svg';
import NavBar from './navbar/NavBar';

function Header({ setPage }) {
    // O setPage aqui só recebe os Eventos (cliques) que vierem do Menu, através do NavBar.js.
    const logotipo = <img src={logo} alt="Logo MyBook" width="70px" />;

    return (
        <div className="row m-3">
            <div className="col"> 
                <h1 className="fs-1 fw-bold mytitle">{logotipo} MyBook</h1>
            </div>
            <div className="col">
                <NavBar setPage={setPage} />
            </div>
        </div>
    );
}
export default Header;