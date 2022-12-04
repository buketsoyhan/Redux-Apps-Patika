import './App.css';
import WordList from './components/Word/WordList';
import FormComponent from "./components/Form/Form"
import Footer from './components/Footer/Footer';
import styled, { createGlobalStyle } from "styled-components";
import ResultModal from './components/Modal/Modal';
const AppContainer = styled.div`
width:100%;
max-width: 900px;
background-color: #F5EBE0;
border-radius: 10px;
margin:10px auto 0 auto;
padding: 10px;
`

function App() {
  return (
    <div classname="container">
      <AppContainer>
        <WordList />
        <FormComponent />
        <Footer />
      </AppContainer>
      <ResultModal/>
    </div>
  );
}

export default App;
