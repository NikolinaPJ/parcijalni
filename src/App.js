import "./App.css";

import { InputElement } from "./components/InputElement";
import { GitHubApi } from "./components/GitHubApi";
import { GitHubFace } from "./components/GitHubFace";



  function App() {
    return (
      <form className="form">
        <div className="form-field">
          <InputElement label="GitHub username" type="text" placeholder="e.g. facebook"  />
        </div>
        <div className="form-field">
          <GitHubApi />
          <GitHubFace />
        </div>
      </form>
    );
  }


  export default App;