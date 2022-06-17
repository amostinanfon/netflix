import './home.scss';
import Navbar from '../components/navbar/Navbar';
import Featured from '../components/featured/featured';
import List from '../components/list/List';


function Home() {
  return (
    <div className="home">
      <Navbar/>
      <Featured type="movie"/>
      <List />
      <List />
      <List />
      <List />
    </div>
  )
}


export default Home