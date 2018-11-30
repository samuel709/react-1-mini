import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      friends: [],
      picture: "",
      name: ""
    }
  }

  updatePicture(value){
    this.setState({
      picture: value
    })
  }

  updateName(value){
    this.setState({
      name: value
    })
  }

  addFriend(){
    let friendsCopy = this.state.friends.slice()

    //ALL OF THESE METHODS ARE DIFFERENT WAYS OF DOING THE SAME THING
    //I CHOSE METHOD 3 BECAUSE THAT WAS THE FIRST WAY I THOUGHT OF DOING IT
    //I couldn't get it to work at first because I was trying push({this.state.picture, this.state.name})
    //That doesn't work because you're trying to push an object (as indicated by curly braces) that only has values and no keys
    //That's why it's necessary to put PICTURE: this.state.picture and NAME: this.state.Name
    //Picture and name become the properties in the friend object we're creating
    //I used the property names picture and name because that makes sense, but they could be called anything


    //METHOD 1
    // let friendObj = {
    //   picture: this.state.picture,
    //   name: this.state.name
    // }
    // friendsCopy.push(friendObj)

    //METHOD 2
    // const {picture, name} = this.state
    // friendsCopy.push({picture, name})

    //METHOD 3
    friendsCopy.push({picture: this.state.picture, name: this.state.name})
    this.setState({
      friends: friendsCopy,
      picture: "",
      name: ""
    })
  }

  render() {

    const friends = this.state.friends.map((value, index) => {
      return <div key = {index}>
      <img width = "100 px"
           height = "100 px"
           src = {value.picture}
           alt =  ""
      />
      <span>{value.name}</span>
      </div>
    })
    return (
      <div>
        <label>URL to picture</label>
        <input
        onChange = {(e) => this.updatePicture(e.target.value)}
        value = {this.state.picture}
        />
        <label>Friend's Name</label>
        <input
        onChange = {(e) => this.updateName(e.target.value)}
        value = {this.state.name}
        />
        <button
        onClick = {() => this.addFriend()}>
        Add Friend
        </button>
        {friends}
      </div>
    );
  }
}



export default App;
