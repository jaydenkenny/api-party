import React, { Component } from 'react'
import './Github.css'
import {Route} from 'react-router-dom'

class Github extends Component{
    state = {
        username:'',
    }
    handleChange =(ev)=>{
        const username = ev.currentTarget.valuethis.setState({ username })
    }

    render(){
    return(
        <div className="github">
            <img className="github-logo"src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" alt="github logo"/>
            <form>
                <div>
                    <input type="text" value={this.state.username} onChange={this.handleChange} placeholder="Enter a Github Username"/>
                </div>
                <div>
                    <button type="submit">Look up Github user</button>
                </div>
            </form>
            <Route exact path='/github' render={()=><h3>Pleaase enter a username to search github</h3>}/>
        </div>

    )
    }
}
export default Github