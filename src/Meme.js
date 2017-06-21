import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import './Meme.css'
import MemeInfo from './MemeInfo'
class Meme extends Component{
    state={
        meme:'',
    }
    render(){
        return(
            <div className="meme">
                <img className="meme-logo" src="http://i.ebayimg.com/images/g/dBMAAMXQaOVRjRim/s-l300.jpg" alt="meme logo"/>
                
                <h2>What is this? 2015???</h2>
                <form>
                    <div>
                        <input type="text" value={this.state.meme}/>
                    </div>
                    <div>
                        <button type="submit">Find Meme</button>
                    </div>
                </form>
                <Route exact path='/meme' render={()=>(
                    <img src="https://i.ytimg.com/vi/Fr8itGELygc/hqdefault.jpg" alt="meme logo"/>)}/>

                    <Route path={`${this.props.match.url}/:meme`} component={MemeInfo}/>
            </div>
        )
    }
}

export default Meme