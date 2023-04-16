import './App.css';
import TodoForm from './components/TodoForm';
import background from './images/notes.jpg'

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${background})`, backgroundSize: '100% 100%', minHeight: '100vh'}}>
      <TodoForm/>
    </div>
  );
}

export default App;