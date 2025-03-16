function NavBar({ setPage }) {
    // Inicialmente, o menu havia sido feito com a tag <nav> e links (<a>). 
    // Mas o console do VSCode ficava mostrando um erro, dizendo que eu tinha que informar um "href" para o <a>.
    // Por fim, segui o conselho do VSCode e converti todo o menu para botões, embora reconheça que, com isso, 
    // perdi um pouco da legibilidade da página por softwares de acessibilidade ou outros, que podem buscar o <nav>
    // para facilitar a navegação.
    // O setPage aqui apenas recebe o evento do clique. 
    return (
        <>
            <div className="d-flex justify-content-end mt-2">
                <button className="btn btn-outline-light mx-1" onClick={() => setPage("Home")}>Home</button>
                <button className="btn btn-outline-light mx-1" onClick={() => setPage("Sobre")}>Sobre</button>
                <button className="btn btn-outline-light mx-1" onClick={() => setPage("Lista de Livros")}>Lista de Livros</button>
                <button className="btn btn-outline-light mx-1" onClick={() => setPage("Cadastrar")}>Cadastrar</button>
            </div>
        </>
    );
}
export default NavBar;
