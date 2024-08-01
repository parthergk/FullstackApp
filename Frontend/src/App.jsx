
import { Outlet } from "react-router-dom";
import Nav  from "./component/Nav";
function App() {
  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  )
}

export default App