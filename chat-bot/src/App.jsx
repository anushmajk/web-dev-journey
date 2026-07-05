import { useState } from 'react';
import  ChatMessages  from './Components/ChatMessages';
import {ChatInput} from './Components/ChatInput';
import './App.css'


function App() {
        const [chatMessages, setChatMessages] = useState([
          {
            message: '',
            sender: '',
            id: ''
          }
        ]);
        // const [chatMessages, setChatMessages] = array;
        // const chatMessages = array[0];
        // const setChatMessages = array[1];

        return (
          <div className="app-container">
            <ChatMessages
              chatMessages={chatMessages}
            />
            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }

export default App
