import React,{useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import './chatscreen.css';
function ChatScreen() {
    const [input,setInput] =useState('')
   const [messages, setMessages] = useState([
       {
           name:'Selena',
           image:'https://static.billboard.com/files/media/selena-gomez-jan-11-2020-billboard-1548-1024x677.jpg',
           message: 'Hello Kartik'
       },
       {
            name:'Selena',
           image:'https://static.billboard.com/files/media/selena-gomez-jan-11-2020-billboard-1548-1024x677.jpg',
           message: 'Whats up'
       },
       {
           message:"hello Selena"
       }
   ]);
   const handleSend=(event)=>{
    event.preventDefault();
    setMessages([...messages, {message:input}])
    setInput('')
   }
    return (
        <div className="chatScreen">
            
            <p>You matched with Selena on 27th march</p>
            {
                messages.map(message =>(
                   message.name ?  (<div className="chatScreen__messages">
                    <Avatar
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                     />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>)
                    :
                    (<div className="chatScreen__messages">
                     <p className="chatScreen__textUser">{message.message}</p>
                    </div>)
                    
                ))
            }
            
                <form className="chatScreen__input">
                    <input value={input} onChange={(event)=>{
                        setInput(event.target.value);
                    }} className="chatScreen__inputField" type="text" placeholder="type a message..." />
                    <button onClick={handleSend} className="chatScreen__button">SEND</button>
                </form>
            
        </div>
    )
}

export default ChatScreen
