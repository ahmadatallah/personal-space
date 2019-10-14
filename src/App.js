import React, { lazy, Suspense } from "react";
import { ThemeProvider, ColorMode } from "theme-ui";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "./theme";
import { H2, Div } from "./elements";
import GlobalStyles from "./global-styles";
import Loading from "./components/Loading";
import Flex from "./components/Flex";

import About from "./pages/About";
import Frames from "./pages/Frames";
import Home from "./pages/Home";
import HomeAR from "./pages/HomeAR";
import NotFound from "./pages/NotFound";
import Readings from "./pages/Readings";
import Writings from "./pages/Writings";
import Bio from "./pages/ar/Bio";
import BornRich from "./pages/ar/BornRich";
import MidnightStory from "./pages/ar/MidnightStory";
import CreateReactAppEnvVars from "./pages/writings/CreateReactAppEnvVars";
import PascalTypeScript from "./pages/writings/PascalTypeScript";
import Society from "./pages/ar/Society";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorMode />
      <GlobalStyles />
      <Div fontFamily={theme.typefaces.sansSerif}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/ar" component={HomeAR} />
            <Route
              path={`/ar/school-of-biomedical-engineering`}
              component={Bio}
            />
            <Route
              path={`/ar/sorry-being-born-rich-still-leads-to-success`}
              component={BornRich}
            />
            <Route path={`/ar/happy-society`} component={Society} />
            <Route path={`/ar/midnight-story`} component={MidnightStory} />
            <Route path="/writings" exact={true} component={Writings} />
            <Route
              path={`/writings/create-react-app-run-build-envs`}
              component={CreateReactAppEnvVars}
            />{" "}
            <Route
              path={`/writings/pascal-typescript-example`}
              component={PascalTypeScript}
            ></Route>
            <Route path="/about" exact={true} component={About} />
            <Route path="/writings" component={Home} />
            <Route path="/readings" exact={true} component={Readings} />
            <Route path="/frames" exact={true} component={Frames} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Div>
    </ThemeProvider>
  );
}

export default App;
