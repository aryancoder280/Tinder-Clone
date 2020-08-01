import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';
import './chat.css';
function Chat(props) {
    return (
        <Link to={`/chat/${props.name}`}>
        <div className="chat">
        <Avatar className="chat__image" alt={props.name} src={props.profilePic} />            
            <div className="chat__info">
                <h2>{props.name}</h2>
                <p>{props.message}</p>
            </div>
            <div className="chat__timestamp">
            <p>{props.timeStamp}</p>
            </div>
        </div>
        </Link>
    )
}
export default Chat
