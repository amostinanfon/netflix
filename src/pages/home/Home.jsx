import './home.scss';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
//import Watch from '../watch/Watch'
import List from '../../components/list/List';
import axios from 'axios';
import { useEffect, useState } from 'react';


function Home({type}) {

  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const getRandomLists = async() => {
      try {
        const res = await axios.get(
          `lists?${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
          {
            headers:{
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjQxNDBiM2U5NTk3MGMwMDgwZWFjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTk5Mzc1NiwiZXhwIjoyNTE5OTkzNzU2fQ.6AMdUux3LDgvMDUNOgcFdYHV3KxcCr_ro2mf3fYZo78"
            }
          }
        );
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    getRandomLists();
  },[type,genre])

  return (
    <div className="home">
      <Navbar/>
      <Featured type={type}/>
      {lists.map((list, index) => (
          <List key={index} list={list} />
        ))
      }
    </div>
  )
}


export default Home