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

scoreCheck = () => {
  if (this.state.score > this.state.totalScore) {
    this.setState({totalScore: this.state.score}, function() {
      console.log(this.state.totalScore);
    });
  }
  this.state.cards.forEach(card => {
    card.count = 0;
  });
  alert(`Nice try.\nScore: ${this.state.score}`);
  this.setState({score: 0});
  return true;
}

// deleteFriend = randomCard
randomCard = id => this.setState({ cards: this.state.cards.filter(friend => friend.id !== id) })

  render(){
  return (
    <Wrapper>
      <h1 className="title">Animal Clicking Game <p><div>Score: {this.score}  <div>Total Score: {this.totalScore}</div></div></p></h1>
      <div></div>
      
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
