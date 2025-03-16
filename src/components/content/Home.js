function Home({ setPage }) {
    // O setPage carrega os estados alterados pelos botões nessa página.
    return (
        <div className="container mt-4">
            <h2>Bem-vindo ao MyBook</h2>
            <p>Escolha uma opção para navegar pelo sistema:</p>

            <div className="row">
                {/* Card Sobre */}
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Sobre</h5>
                            <p className="card-text">Saiba mais sobre este projeto e seu propósito no estudo de Frontend.</p>
                            <button className="btn btn-primary" onClick={() => setPage("Sobre")}>
                                Acessar
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card Lista de Livros */}
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Lista de Livros</h5>
                            <p className="card-text">Confira os livros que á foram lidos e explore os títulos cadastrados.</p>
                            <button className="btn btn-primary" onClick={() => setPage("Lista de Livros")}>
                                Acessar
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card Cadastrar */}
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Cadastrar</h5>
                            <p className="card-text">Cadastre, edite ou exclua os livros que já foram lidos na Listas de Livros.</p>
                            <button className="btn btn-primary" onClick={() => setPage("Cadastrar")}>
                                Acessar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
