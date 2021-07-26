import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import Login from './Authentication/form-login';
import Register from './Authentication/form-register';
import SelectArea from './AddNew/select-area';
import CollectionArea from './ShowData/collection-area';
import CollectionItem from './ShowData/collection-item';
import NotFound from './NotFound/not-found';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/area" component={SelectArea}></Route>
                <Route path="*" component={NotFound}></Route>
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
