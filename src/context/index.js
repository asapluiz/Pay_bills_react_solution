import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        stage: 1,
        players: [],
        result: '',
        newPlayers: []
    }

    addPlayerHandler = (event) => {
        
        this.setState((prevState)=>({
            players:[
                ...prevState.players, event
            ]
        }))
    }

    removePlayer = (index)=>{
        let newList = this.state.players;
        newList.splice(index, 1);  
        this.setState({players:newList});
 
    }

    nextHandler = ()=>{

        if(this.state.players.length < 2){
            
            toast.error("must be atleast 2 players");
        }else{
            this.setState({stage : 2}, ()=>{
                setTimeout(() => {
                    this.getLooser()
                }, 200);
            })
            console.log("good one")
        }
    }

    getLooser = ()=>{
    this.setState({result: this.state.players[Math.floor(Math.random() * this.state.players.length)]})
   }
   startOver = ()=>{
       this.setState({
        stage: 1,
        players: [],
        result: '',
        newPlayers: []
    })
   }
  
    render() {
        return (
            <>
                <MyContext.Provider value={{
                    state: this.state,
                    addPlayer: this.addPlayerHandler,
                    removePlayer:this.removePlayer,
                    nextHandler:this.nextHandler,
                    getNewLoser:this.getLooser,
                    startOver:this.startOver
                }}>
                    {this.props.children}
                </MyContext.Provider>
                <ToastContainer />
            </>
        )
    }
}
export {
    MyContext,
    MyProvider
}