import { useState } from 'react'
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

function App() {
  // Constante para tratar qual página vai ser carregada no Content.js
  const [page, setPage] = useState("Home");

  // Constante para criar a Lista de Livros.
  const [listaLivros, setListaLivros] = useState([
    { id: 0, titulo: "Learning React", autor: "Alex Banks & Eve Porcello", genero: "Desenvolvimento Web", data: "10/01/2024" },
    { id: 1, titulo: "React Up and Running", autor: "Stoyan Stefanov", genero: "Programação", data: "25/02/2024" },
    { id: 2, titulo: "The Road to React", autor: "Robin Wieruch", genero: "Frontend Moderno", data: "15/04/2024" },
    { id: 3, titulo: "Fullstack React", autor: "Anthony Accomazzo et al.", genero: "Desenvolvimento Fullstack", data: "30/06/2024" },
    { id: 4, titulo: "React and React Native", autor: "Adam Boduch", genero: "Aplicações Mobile", data: "12/09/2024" },
    { id: 5, titulo: "Pro React 16", autor: "Adam Freeman", genero: "Avançado", data: "20/11/2024" }
]);

  return (
    <div className="container">
      {/* Novamente, o setPage aqui só recebe o que veio do NavBar.js via Header.js */}
      <Header setPage={setPage} />

      {/* Como o Content.js trata as páginas e a Lista de Livros, foi incluído tudo aqui. */}
      <Content
        page={page} 
        setPage={setPage} 
        listaLivros={listaLivros}
        setListaLivros={setListaLivros}/>
      
      <Footer />
    </div>
    );
}

export default App;
