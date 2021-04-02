import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './component/Home';
import CreateQuiz from './component/CreateQuiz';
import BuddyQuiz from './component/BuddyQuiz';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/create" exact component={CreateQuiz}/>
        <Route path="/buddy-quiz/:id" exact component={BuddyQuiz}/>
      </Router>
    </div>
  );
}

export default App;
