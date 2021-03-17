import React, { Component } from 'react'
import './App.css';

class App extends Component {
  state = {
    myGeld: 0
  }

  einzahlung = () => {
    let myNewGeld = this.state.myGeld + Number(document.getElementById('betrag').value)
    this.setState({ myGeld: myNewGeld });
  }
  auszahlung = () => {
    let myNewGeld = this.state.myGeld - Number(document.getElementById('betrag').value)
    this.setState({ myGeld: myNewGeld });
  }
  render() {
    return (
      <div className="App">
        <section>
          <div id="totalGeld" style={this.state.myGeld >= 0 ? { color: "limegreen" } : { color: 'red' }}>{this.state.myGeld}€
          </div>
          <div>
            <input type="number" name="betrag" id="betrag" />
            <div id="buttons">
              <button onClick={this.einzahlung}>Einzahlen</button>
              <button onClick={this.auszahlung}>Auszahlen</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
