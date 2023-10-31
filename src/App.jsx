import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent.jsx';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer.jsx';

function App() {


  return (
    <div>
     <NavBarComponent/>
      <ItemsListContainer title="TechTrendz: Your Gateway to Luxury Technology"/>
     </div>
  )
}

export default App
