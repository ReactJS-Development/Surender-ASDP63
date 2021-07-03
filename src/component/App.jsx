import React from "react";
import ReactDOM from "react-dom";
import main from './main.css';
const App = () => {
  return (
    <div className="body">
      <p>React here!</p>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));