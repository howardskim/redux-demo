import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setTheme} from '../actions'

class SetTheme extends Component{
    componentDidMount(){
        this.props.setTheme('light');
    }
    render(){
        console.log('theme', this.props.theme)
        const nextTheme = this.props.theme === 'light' ? 'dark' : 'light';
        return (
            <button onClick={()=> this.props.setTheme(nextTheme)} className="btn white black-text">{nextTheme} Theme</button>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return {
        theme: state.theme.themeName
    }
}
export default connect(mapStateToProps, {setTheme: setTheme})(SetTheme);