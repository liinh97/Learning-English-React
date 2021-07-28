import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import Login from './Authentication/form-login';
import Register from './Authentication/form-register';
import SelectArea from './AddNew/select-area';
import CollectionArea from './ShowData/collection-area';
import CollectionItem from './ShowData/collection-item';
import NotFound from './NotFound/not-found';

function App() {

    // const checkLogin = localStorage.getItem("isLogin");

    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    {/* {
                        !checkLogin ? <Redirect to="/Learning-English-React/login" /> : <Redirect to="/Learning-English-React" />
                    } */}
                    <Route path="/Learning-English-React/login" component={Login}></Route>
                    <Route path="/Learning-English-React/register" component={Register}></Route>
                    <Route path="/Learning-English-React/area" component={SelectArea}></Route>
                    <Route path="/Learning-English-React/collection-area" exact component={CollectionArea}></Route>
                    <Route path="/Learning-English-React/collection-area/:name" component={CollectionItem}></Route>
                    <Route path="*" component={NotFound}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
