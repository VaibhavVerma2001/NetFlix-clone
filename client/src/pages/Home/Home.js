import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.scss';
import Navbar from '../../components/Navbar/Navbar';
import Featured from '../Featured/Featured';
import List from '../../components/List/List';

function Home(props) {
  const type = props.type;
  const [lists, setLists] = useState([]);
  // eslint-disable-next-line
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/lists/find${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);



  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} setGenre={setGenre} />

      {lists.map(list => (
        <div key={list._id}>
          <List list={list} />
        </div>
      ))}

    </div>
  )
}

export default Home;
