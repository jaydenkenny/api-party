import React, { Component } from 'react'
import './Github.css'
import {Route} from 'react-router-dom'

class Github extends Component{
    state = {
        username:'',
    }
    handleChange =(ev)=>{
        const username = ev.currentTarget.value
        this.setState({ username })
    }
    handleSubmit=(ev)=>{
        ev.preventDefault()
        this.props.history.push(`/github/${this.state.username}`)
    }

    render(){
    return(
        <div className="github">
            <img className="github-logo"src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" alt="github logo"/>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" value={this.state.username} onChange={this.handleChange} placeholder="Enter a Github Username"/>
                </div>
                <div>
                    <button type="submit">Look up Github user</button>
                </div>
            </form>
            <Route exact path='/github' render={()=><h3>Pleaase enter a username to search github</h3>}/>
            <Route path='/github/:username' render={(props)=><h3>You searched for {props.match.params.username}</h3>} />
        </div>

    )
    }
}
export default Github