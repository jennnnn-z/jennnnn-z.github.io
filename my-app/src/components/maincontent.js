import React, {Component} from "react";
import PropTypes from 'prop-types';

class MainContent extends Component{
    constructor (props){
        super(props);
        this.state = {
            title:this.props.pageTitle,
            count: this.props.numTopics 
        }
    }
    onClick=()=>{
        this.setState({count: this.state.count+1})
    }
    render(){
        return (
            <maincontent> 
                This is the main content 
                <h2>{this.state.title}</h2>
                <p>This is the number of topics {this.state.count}</p>
                <button onClick={this.onClick}> 
                    Increase number of topics
                </button>
            </maincontent>
        )  
    }
         
}
MainContent.propTypes = {
    pageTitle: PropTypes.string
}

export default MainContent