import './App.css';
import './assets/query/app.query.css'
import Logo from "./components/logo/logoComponent.jsx"
import Title from './components/title/title.jsx'
import Footer from './components/Footer/footer.jsx'
import Main from './components/main/main.jsx'
import Header from './components/header/header.jsx'
import aks from "./assets/images/photo_2021-04-13_18-21-12.jpg";

function App() {
  return (

    <div className="container">

      <Logo srcImg={aks} />
      <Header />
      <Title />
      <Main />
      <Footer />
      
    </div>

  );
}

export default App;
