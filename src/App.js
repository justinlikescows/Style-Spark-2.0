import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Chats from './components/Chats';
import ChatScreen from './components/ChatScreen';
import Header from './components/Header';
import SwipeButtons from './components/SwipeButtons';
import TinderCards from './components/TinderCards';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Instagram from './components/InstagramScroll';
import Quiz from './components/Quiz';
import Payment from './components/Payment';
import Onboarding from './components/Onboarding';
import Generate from './components/Generate';
import UploadImage from './components/UploadImage';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/chat/:person'>
            <Header backButton='/chat' />
            <ChatScreen />
          </Route>
          <Route path='/chat'>
            <Header backButton='/' />
            <Chats />
          </Route>
          <Route path='/home'>
            <Header />
            <TinderCards />
            <SwipeButtons />
            <Navbar />
          </Route>
          <Route path='/instagram'>
            <Instagram />
          </Route>
          <Route path='/generate'>
            <Generate />
          </Route>
          <Route path='/upload'>
            <UploadImage />
          </Route>
          <Route path='/payment'>
            <Payment />
          </Route>
          <Route path='/quiz'>
            <Quiz />
          </Route>
          <Route path='/onboarding'>
            <Onboarding />
          </Route>
          <Route path='/profile'>
            <ProfilePage />
          </Route>


          <Route path='/'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;