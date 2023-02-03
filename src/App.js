import LoginPage from "./Components/LoginPage";

import Navbar from "./Navbar";
import union from "./Images/Union.png";
import vector from "./Images/Vector.png";
import notification from "./Images/notifi.png";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Dashboard";
function App() {
  return (
    <div className="container">
      <Navbar logo={union} notification={notification} vector={vector} />
      <div className="cha">
        <Sidebar />
        <Dashboard />
      </div>
      {/* <LoginPage /> */}
    </div>
  );
}

export default App;
