import React from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import "./App.css";

// friends = cards, deleteFriend = randomCard,
// function App() {
class App extends React.Component{
state = {
  cards,
  score: 0,
  totalScore: 0,
};

// deleteFriend = randomCard
randomCard = id => this.setState({ cards: this.state.cards.filter(friend => friend.id !== id) })

  render(){
  return (
    <Wrapper>
      <h1 className="title">Clicking Game</h1>

{/* // {cards.map(friend => ( */}
{this.state.cards.map(friend => (
  <Cards 
  key = {friend.id}
  randomCard = {this.randomCard}
  {...friend} />
))}

    </Wrapper>
  )
}
}

export default App;
