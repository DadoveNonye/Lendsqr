import React, { useEffect, useState } from "react";
import User from "./Components/User";
import userGroup from "./Icons/userGroup.png";
import userWithLoan from "./Icons/userWithLoan.png";
import userWithSaving from "./Icons/userWithSaving.png";
import Activeuser from "./Icons/acctiveUser.png";
import DetailRender from "./DetailRender";

function Dashboard() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    ApiData();
  }, []);

  const ApiData = () => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        console.log(data);
      });
  };

  return (
    <div className="Dash-group-div">
      <h3>USERS</h3>
      <div className="usergroup">
        <User icon={Activeuser} name="USER" number="123" />
        <User icon={userGroup} name="ACTIVE USER" number="123" />
        <User icon={userWithLoan} name="USER WITH LOANS" number="123" />
        <User icon={userWithSaving} name="USER WITH SAVINGS" number="123" />
      </div>

      <div>
        <ul>
          {details.map((item) => (
            <DetailRender
              org={item.orgName}
              username={item.userName}
              email={item.email}
              phone={item.phoneNumber}
              key={item.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
