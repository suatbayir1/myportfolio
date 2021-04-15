import './App.css';
import HomePageContainer from "./home/containers/HomePageContainer";
import BlogPageContainer from "./blog/containers/BlogPageContainer";
import { Router, Route, Switch, HashRouter } from "react-router-dom";
import { history } from "./history";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/blog-detail/:id" component={BlogPageContainer} />
          <Route exact path="/" component={HomePageContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
