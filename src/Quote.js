import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import './Quote.css'
import QuoteInfo from './QuoteInfo'

class Quote extends Component{
    state={
        quote:'',
    }

    handleClick = (ev) => {
        
        this.fetchQuote()
    }

    fetchQuote(){
        fetch(`http://ron-swanson-quotes.herokuapp.com/v2/quotes`)
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            const quote = data[0]
            this.setState({ quote })
        })
    }
    render(){
        return(
            <div className="quote">
                <img className="quote-logo" src="https://static1.squarespace.com/static/5337ddcde4b02a5017cff49e/534d4da6e4b0b5fb9ede1ccc/534d4dbfe4b05838eca29068/1397575103975/ron_swanson_folder+icon.png?format=300w" alt="quote logo"/>
                
                <h2>Who doesn't want a Ron Swanson quote?</h2>
                    <div>
                        <button onClick={this.handleClick}>Bless Yourself</button>
                    </div>
                {this.state.quote ? <RonQuote quote={this.state.quote}/>: null}
            </div>
        )
    }
}


function RonQuote(props) {
    return(
        <div>
            <img src="https://media.giphy.com/media/ozfOKtKOh9e5a/giphy.gif" alt="quote logo"/>
            <h3>"{props.quote}"</h3>
        </div>
    )
}
export default Quote