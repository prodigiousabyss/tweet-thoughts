import './App.css';
import { Heading } from './components/rest';
import {Tweet} from './components/tweet';

function App() {
  return (
    <div className="App">
       <div className="rest">
      <div className="tweet-box">
        <Heading />
        <Tweet/>
        <button className="oshin">Generate more content</button>
      </div>
      </div>
    </div>
  );
}

export default App;
