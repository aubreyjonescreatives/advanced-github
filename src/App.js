import React from 'react'
import './App.css';
import AdvancedGit from './AdvancedGit'
import TopNavigation from './TopNavigation'
import BottomNavigation from './BottomNavigation'
import Header from './Header'


function App() {
  return (
    <div className="App">
    <Header/>
    <TopNavigation/>
    <AdvancedGit/>
    <BottomNavigation/>
    </div>
  );
}

export default App;
