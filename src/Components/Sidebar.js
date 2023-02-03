import React from "react";
import switchOrg from "../Icons/organisation.png";
import dash from "../Icons/dashboard.png";
import users from "..//Icons/users.png";
import Gurantor from "../Icons/guarantors.png";
import loans from "../Icons/loans.png";
import decisionModel from "../Icons/decision model.png";
import saving from "../Icons/savings.png";
import loanReq from "../Icons/loan request.png";
import whitelist from "../Icons/whitelist.png";
import karma from "../Icons/karma.png";
import loanProd from "../Icons/loan product.png";
import savingprod from "../Icons/savings product.png";
import fees from "../Icons/fees.png";
import transaction from "../Icons/Transactions.png";
import services from "../Icons/services.png";
import serviceAcct from "../Icons/service acct.png";
import settlement from "../Icons/settlemtent.png";
import report from "../Icons/reports.png";
import preference from "../Icons/preference.png";
import audit from "../Icons/audit.png";
function Sidebar() {
  return (
    <div className="sidebar">
      <h4>
        <img src={switchOrg} />
        Switch Organisation
      </h4>
      <p>
        <img src={dash} />
        Dashboard
      </p>
      <p>CUSTOMERS</p>
      <p>
        <img src={users} />
        Users
      </p>
      <p>
        <img src={Gurantor} />
        Gurantors
      </p>
      <p>
        <img src={loans} />
        Loans
      </p>
      <p>
        <img src={decisionModel} />
        Decision Models
      </p>
      <p>
        <img src={saving} />
        Saving
      </p>
      <p>
        <img src={loanReq} />
        Loan Request
      </p>
      <p>
        <img src={whitelist} />
        Whitelist
      </p>
      <p>
        <img src={karma} />
        Karma
      </p>
      <p>BUSINESS</p>
      <p>
        <img src={switchOrg} />
        Organisation
      </p>
      <p>
        <img src={loanProd} />
        Loan Products
      </p>
      <p>
        <img src={savingprod} />
        Saving Products
      </p>
      <p>
        <img src={fees} />
        Fees and Charges
      </p>
      <p>
        <img src={transaction} />
        Transactions
      </p>
      <p>
        <img src={services} />
        Services
      </p>
      <p>
        <img src={serviceAcct} />
        Service Account
      </p>
      <p>
        <img src={settlement} />
        Settlements
      </p>
      <p>
        <img src={report} />
        Reports
      </p>
      <p>SETTINGS</p>
      <p>
        <img src={preference} />
        Prefrences
      </p>
      <p>
        <img src={fees} />
        Fees And Pricing
      </p>
      <p>
        <img src={audit} />
        Audit log
      </p>
    </div>
  );
}

export default Sidebar;
