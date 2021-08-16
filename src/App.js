import {Route,Switch} from 'react-router-dom';


import Navigation from './layout/MainNavigation/Navigation';
import Addmessage from './layout/pages/Addmessage/Addmessage';
import AllMessages from './layout/pages/Allmessages/Allmessages';
import Registration from './layout/registration/Registration';

function App() {

  return (
    <div>
           
      <Switch>
        <Route path='/' exact>
          <Registration />
        </Route>
        </Switch>
       
     <Switch>
    <Route path='/addmessage'>
        <Navigation /> 
          <Addmessage />
        </Route>

        <Route path='/allMessages'>
        <Navigation /> 
          <AllMessages />
        </Route>
        </Switch>
    </div>
  );
}

export default App;
