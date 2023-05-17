import {Component} from "react";

class Message extends Component {
    render(){
        // instead of this.props.Component we are going to destructure as to make it easier to write

        const {messageContent} = this.props
        return <h1> This is a class component {messageContent}</h1>
    }

}

export default Message;