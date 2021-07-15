import React from "react";
import UpCOm from './ReuseComponent'

class HoverCounter extends React.Component{

    render(){
        const { count, increment } = this.props;
        return <span onMouseOver={increment} > Hover Count { count }</span>
    }
}

export default UpCOm(HoverCounter);