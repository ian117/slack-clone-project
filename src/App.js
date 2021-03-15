import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from "styled-components"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import database from './firebase';
import { auth, provider } from './firebase';

function App() {

  const [ channels, setChannels] = useState([])
  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('user')))


const getChannels = () => {
  database.collection('Rooms').onSnapshot((snapshot) => setChannels(snapshot.docs.map(doc => {return {id: doc.id, name: doc.data().name}})))
}

const signOut = () => {
  auth.signOut()
  .then(() => {
    localStorage.removeItem('user')
    setUser(null)
  })
}

useEffect(() => {
    getChannels();

}, [])

  return (
    <div className="App">
      <Router>
            { !user ? 
            <Login setUser={setUser}/>  : 
            <Container>
            <Header signOut={signOut} user={user}/>
            <Main>
              <Sidebar channels={channels}/>

              <Switch>

                <Route path="/room/:channelID"><Chat user={user}/></Route>
                <Route path="/" exact>Select or Create Channel</Route>
              </Switch>

            </Main>

        </Container>
            }
        
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 40px minmax(0, 1fr);
`

const Main = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: 260px auto;
`