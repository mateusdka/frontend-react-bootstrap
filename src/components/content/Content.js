import Home from "./Home";
import Sobre from "./Sobre";
import BookList from "./BookList";
import BookForm from "./BookForm";

function Content({page, setPage, listaLivros, setListaLivros}) {
    // Recebe os Estados de Páginas do Menu (Header) e a lista de livros.
    // Quis compor a página dessa forma, para que apenas a seção Content sofresse atualização.
    const pages = {    
        "Home": <Home setPage={setPage}/>,
        "Sobre": <Sobre />,
        "Lista de Livros": <BookList listaLivros={listaLivros} />,
        "Cadastrar": <BookForm listaLivros={listaLivros} setListaLivros={setListaLivros} />
    };

    return (
        <div className="row m-3">
            {pages[page] || <p>Página não encontrada.</p>}
        </div>
    );
};

export default Content;