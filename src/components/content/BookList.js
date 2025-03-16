function BookList({ listaLivros }) {
    // Recebe a lista do App.js e passa para a condicional abaixo
    return (
        <div className="container mt-4">
            <h2>Livros Lidos</h2>
            <p>Abaixo estão os livros cadastrados como lidos:</p>

            {listaLivros.length === 0 ? (
                <p>Nenhum livro cadastrado.</p>
            ) : (
                <ol className="list-group list-group-numbered">
                    {listaLivros.map((livro) => (
                        <li key={livro.id} className="list-group-item">
                            <strong>{livro.titulo}</strong> - {livro.autor} <br />
                            <em>Gênero:</em> {livro.genero} | <em>Lido em:</em> {livro.data}
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
}

export default BookList;
