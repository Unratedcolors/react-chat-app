import React from 'react';
import TopicForm from './Components/TopicForm/Topicform'
import MessageList from './Components/MessageList/MessageList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Chat App 
        </p>
      </header>
      <main>
        <TopicForm />
        <MessageList/>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
