import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import RenderUsers from './components/RenderUsers';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RenderUsers />
      </div>
    </Provider>
  );
}

export default App;
