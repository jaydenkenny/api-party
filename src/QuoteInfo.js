import React, { Component } from 'react'

class QuoteInfo extends Component{
    // state = {
    //     quote: {
    //         quote:'',
    //     }
    // }

    constructor(props){
        super(props)

        this.fetchQuoteData(this.props)
    }
    componentWillMount=()=>{
        this.fetchMemeData(this.props)
    }

    componentWillReceiveProps=(nextProps)=>{
        const locationChanged =  nextProps.location != this.props.location
        if(locationChanged){
            this.fetchMemeData(nextProps)
        }
    }

    fetchQuoteData(props){
        fetch(`http://ron-swanson-quotes.herokuapp.com/v2/quotes`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        //     const quote = {
                
        //     }
        // this.setState({ quote })
        })
    }

    render(){
        const { quote } = this.state
        return(
            <div className="meme-info">
                <h3>Ron Swanson once said: {}</h3>
            </div>
        )
    }
}

export default QuoteInfo