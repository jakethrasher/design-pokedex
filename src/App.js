import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import SearchPage from './SearchPage.js'
import './App.css';
import Header from './Header.js'
import HomePage from './HomePage'
import DetailPage from './DetailPage.js';
function App() {
  return (
    <div className="App">
         <Router>
           <Header/>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/search" 
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} />} 
                        />
                        <Route 
                            path="/search/:pokemonName"
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
    </div>
  );
}

export default App;
