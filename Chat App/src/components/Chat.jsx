import { useState } from "react";

export const Chat = () => {

const [newMessage, setNewMessage] = useState("");

 const handleSubmit = () => {
    e.preventDefault();
    if(newMessage === "") return;
    console.log(newMessage);
 };

    return <div className="chat-app">
        <form className="new-message-form" onSubmit={handleSubmit}>
    <input 
    className="new-message-input" 
    placeholder="Type your message here..." 
    />
    <button type="submit" className="send-button">
        Send
    </button>
        </form> 
        </div>;
}