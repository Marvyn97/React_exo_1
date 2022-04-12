import ListeDragon from "./Components/Liste/ListeDragon"
import ListeChevalier from "./Components/Liste/ListeChevalier";
import React from "react";

class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let rand = Math.random();
    return (
        <div className="App">
						
          {
            rand < 0.5 ? <ListeDragon /> : <ListeChevalier />
          }
				
				</div>
    )
  }

}

export default App;
