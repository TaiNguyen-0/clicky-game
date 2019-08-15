import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

// function App() {
class App extends React.Component{
state = {
  friends
};

deleteFriend = id => this.setState({ friends: this.state.friends.filter(friend => friend.id !== id) })

  render(){
  return (
    <Wrapper>
      <h1 className="title">Clicking Game</h1>

{/* // {friends.map(friend => ( */}
{this.state.friends.map(friend => (
  <FriendCard 
  key = {friend.id}
  deleteFriend = {this.deleteFriend}
  {...friend} />
))}

    </Wrapper>
  )
}
}

export default App;
