import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Body from "./components/Body";
import Body from "./components/Body";
// import Login from "./components/Login";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import AppStore from "./utills/AppStore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";


function App() {
  return (
    <>
      <Provider store={AppStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connection" element={<Connections />} />
              <Route path="/Requests" element={<Requests />} />
             
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
