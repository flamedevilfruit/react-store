import './assets/styles/index.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PlantCard from './components/PlantCard';

function App() {
  return (
    <div className="header">
      <Header />
      <PlantCard />
      <Footer />
    </div>
  );
}

export default App;
