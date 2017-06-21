import React, { Component } from 'react'

class MemeInfo extends Component{
    state = {
        meme: {
            bottom:'',
            font:'',
            font_size:'',
            meme:'',
            top:'',
        }
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

    fetchMemeData(props){
        fetch(`https://ronreiter-meme-generator.p.mashape.com/meme${props.match.params.rover}`)
        .then(res => res.json())
        .then(data => {
            const meme = {
                bottom:'',
                font:'',
                font_size:'',
                meme:'',
                top:'',
            }
        this.setState({ meme })
        })
    }

    render(){
        return(
            <div className="meme-info">

            </div>
        )
    }
}

export default MemeInfo