import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";


function App() {

  const [listOfUsers, setListOfUsers] = useState([])

  useEffect(() => {

    Axios.get("http://localhost:3001/getUsers").then((response) =>{
      setListOfUsers(response.data);
    })

  }, [])


  return (
    <div className="App">
        <div className='usersDisplay'>
        {listOfUsers.map((user) =>{
          return (
            <div>
              <h1>Name: {user.username}</h1>
              <h2>Country: {user.country}</h2>
              <h2>Credit: {user.credit}</h2>
            </div>
          )
        })}
        </div>
    </div>
  );
}

export default App;
