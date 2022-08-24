import './App.css';
import React from 'react';

class AffiliationsList extends React.Component {
  render() {
    return(
      <li>
        {this.props.affil}
      </li>
    )
  }
}

class StarWars extends React.Component {

  constructor() {
    super()
    this.state = {
      image: null,
      name: null,
      height: null,
      homeworld: null,
      affiliations: [],
    }
  }

  getNewCharacter() {
    const randNumber = Math.ceil(Math.random() * 88)
    const url = `https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${randNumber}.json`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          image: data.image,
          name: data.name,
          hieght: data.height,
          homeworld: data.homeworld,
          affiliations: data.affiliations,
        })
        
      })
  }

  render() {

    const affiliation = this.state.affiliations.map((affil, i) => {
      return <AffiliationsList key={i} affil={affil} />
    })

    return(
      <div>
        <img src={this.state.image} alt={`${this.state.name}'s image`} width={"400px"} height={"400px"}/>
        <h1>{this.state.name}</h1>
        <p>Height: {this.state.height}</p>
        <p>HomeWorld: {this.state.homeworld}</p>
        <p className="affili">Affiliations -</p>
        <ul>
          <li>
            {affiliation}
          </li>
        </ul>
        <button 
          type="button" 
          className="btn" 
          onClick={() => this.getNewCharacter()}
        >
          Randomize character
        </button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
