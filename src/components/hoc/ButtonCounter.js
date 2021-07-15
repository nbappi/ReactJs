import React from  "react";
import UpdateComponent from './ReuseComponent';

class ButtonCounter extends React.Component{

    render(){
        const { count , increment } = this.props;
        return <button onClick={increment} > Button Click  Count = { count }</button>
    }
} 

export default UpdateComponent(ButtonCounter);