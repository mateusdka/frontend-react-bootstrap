import { useState } from "react";

function BookForm({ listaLivros, setListaLivros }) {
    // Recebe a lista de livros já cadastrados e acessa o setter para poder editar a lista no App.js
    // Estado para armazenar o livro que está sendo editado
    const [livroAtual, setLivroAtual] = useState(null);

    // Estado para armazenar os dados do formulário
    const [novoLivro, setNovoLivro] = useState({ titulo: "", autor: "", genero: "", data: "" });

    // Handle para lidar com as mudanças nos campos do formulário
    const handleChange = (e) => {
        setNovoLivro({ ...novoLivro, [e.target.name]: e.target.value });
    };

    // Função para adicionar ou editar um livro (inspirado no gestor de Tarefas apresentado em aula)
    const handleSubmit = (e) => {
        e.preventDefault();

        if (livroAtual !== null) {
            // Atualiza o livro existente
            const listaAtualizada = listaLivros.map((livro) =>
                livro.id === livroAtual ? { ...novoLivro, id: livroAtual } : livro
            );
            setListaLivros(listaAtualizada);
            setLivroAtual(null); // Reseta o estado da edição
        } else {
            // Cria um novo livro
            const novoLivroComId = { ...novoLivro, id: listaLivros.length };
            setListaLivros([...listaLivros, novoLivroComId]);
        }

        // Limpar o formulário ao final
        setNovoLivro({ titulo: "", autor: "", genero: "", data: "" });
    };

    // Função para preencher o formulário ao clicar em "Editar"
    const handleEdit = (livro) => {
        setNovoLivro(livro);
        setLivroAtual(livro.id);
    };

    // Função para excluir um livro da lista
    const handleDelete = (id) => {
        setListaLivros(listaLivros.filter((livro) => livro.id !== id));
    };

    return (
        <div className="container mt-4">
            <div className="row">
                {/* Formulário */}
                <div className="col">
                    <h2>{livroAtual !== null ? "Editar Livro" : "Cadastrar Livros Lidos"}</h2>
                    <p>Preencha os campos abaixo para adicionar ou editar um livro:</p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Título:</label>
                            <input type="text" className="form-control" name="titulo" value={novoLivro.titulo} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Autor:</label>
                            <input type="text" className="form-control" name="autor" value={novoLivro.autor} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Gênero:</label>
                            <input type="text" className="form-control" name="genero" value={novoLivro.genero} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Data da Leitura:</label>
                            <input type="date" className="form-control" name="data" value={novoLivro.data} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            {/*Condicional para trocar o valor do botão do formulário conforme a ação escolhida */}
                            {livroAtual !== null ? "Salvar Edição" : "Adicionar Livro"} 
                        </button>
                    </form>
                </div>

                {/* Lista de Livros */}
                <div className="col">
                    <h2>Livros Cadastrados</h2>
                    <p>Abaixo estão os livros cadastrados como lidos:</p>

                    {listaLivros.length === 0 ? (
                        <p>Nenhum livro cadastrado.</p>
                    ) : (
                        <ol className="list-group list-group-numbered">
                            {/* Tive mais dificuldades em organizar as colunas nessa seção, mas ficou do jeito que eu gostaria.
                            Exceto no formato mobile, que bagunçõu um pouco. Vou continuar estudando o Bootstrap para entender melhor. */}
                            {listaLivros.map((livro) => (
                                <li key={livro.id} className="list-group-item d-flex justify-content-between align-items-top">
                                    <div className="w-100 ms-2">
                                        <strong>{livro.titulo}</strong><br />
                                        {livro.autor}<br />
                                        <em>Lido em:</em> {livro.data}
                                    </div>
                                    <div className="d-flex flex-column align-items-end">
                                        <button className="btn btn-outline-secondary btn-sm mb-1 w-100" style={{ minWidth: "80px" }} onClick={() => handleEdit(livro)}>
                                            Editar
                                        </button>
                                        <button className="btn btn-outline-danger btn-sm w-100" style={{ minWidth: "80px" }} onClick={() => handleDelete(livro.id)}>
                                            Excluir
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BookForm;
