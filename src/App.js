import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from "styled-components"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import database from './firebase';


function App() {

  const [ channels, setChannels] = useState([])

const getChannels = () => {
  database.collection('Rooms').onSnapshot((snapshot) => setChannels(snapshot.docs.map(doc => {return {id: doc.id, name: doc.data().name}})))
}

useEffect(() => {
    getChannels();
}, [])

  return (
    <div className="App">
      <Router>
        <Container>

            <Header/>
            <Main>
              <Sidebar channels={channels}/>

              <Switch>

                <Route path="/room"><Chat/></Route>
                <Route path="/"><Login/></Route>
              
              </Switch>

            </Main>

        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 40px auto;
`

const Main = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: 260px auto;
`