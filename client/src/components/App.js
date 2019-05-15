import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import LandingView from "../pages/LandingView";
import Header from "./Header";
// import BeginDayView from "../pages/BeginDayView";
import CreateRestaurantView from "../pages/CreateRestaurantView";
import NoMatch from "../pages/NoMatch";
import history from "../history";

class App extends React.Component {
  state = {
    isSignedIn: false
  };

  render() {
    // if (this.state.isSignedIn === false){
    //   return(<LandingView />)
    // }
    //else if the user has not created a restaurant yet, go to Create Restaurant view
    //else if (!restaurantCreated){
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={LandingView} />
              <Route exact path="/create" component={CreateRestaurantView} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
    // }
    // else{
    // return (<BeginDayView />)
    // }
  }
}

export default App;
