import React from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import "./App.css";

// friends = cards, deleteFriend/clickPicture = randomCard, 
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

clickCount = id => {
  this.state.cards.find((thing, i) => {
    if (thing.id === id) {
      if(cards[i].count === 0){
        cards[i].count = cards[i].count + 1;
        this.setState({score : this.state.score + 1}, function(){
          console.log(this.state.score);
        });
        this.state.cards.sort(() => Math.random() - 1)
        return true; 
      } else {
        this.scoreCheck();
      }
    }
  });
}

// deleteFriend = randomCard
randomCard = id => this.setState({ cards: this.state.cards.filter(friend => friend.id !== id) })

  render(){
  return (
    <Wrapper>
      <h1 className="title">Animal Clicking Game <p><div>Score: {this.state.score}  <div>Total Score: {this.state.totalScore}</div></div></p></h1>
      <div></div>
      
      {/* This pulls and displays all the cards. */}
{/* // {cards.map(friend => ( */}
{this.state.cards.map(friend => (
  <Cards 
  key = {friend.id}
  randomCard = {this.randomCard}
  clicks = {this.clickCount}
  {...friend} />
))}

    </Wrapper>
  )
}
}

export default App;
