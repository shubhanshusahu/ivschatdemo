
import React from 'react';
import { useChatMessagesContext } from './chat/ChatMessagesContext';
import MessageRow from 'amazon-ivs-chat-messaging'

const App = () => {
  const messages = useChatMessagesContext();

  return (
    <React.Fragment>
      {messages.map(message =>{
        return <li>{JSON.stringify(message)}</li>
      })}
    </React.Fragment>
  );
};





// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import IVSChat from './IVSChat';

// function App() {
//   const channelArn = 'arn:aws:ivs:ap-south-1:627675610660:channel/TcfnnWQEjqZv';
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <IVSChat channelArn={channelArn} />
//     </div>
//   );
// }

export default App;
