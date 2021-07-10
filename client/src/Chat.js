import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { useChatMessages } from './hooks';

const Chat = ({user}) => {
    const {messages, addMessage} = useChatMessages();
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Chatting as {user}</h1>
          <MessageList user={user} messages={messages} />
          <MessageInput onSend={addMessage} />
        </div>
      </section>
    );
}

export default Chat;