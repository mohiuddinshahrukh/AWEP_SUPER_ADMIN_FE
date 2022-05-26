import axios from "axios";
import React, { useEffect, useState } from "react";

const Statsbar = () => {
  return (
    <div className="statsbar-stats">
      <div className="statsbar-stat-box">
        <div className="statsbar-stat-box-text">
          <h3>Total Revenue</h3>
          <h3>1200000</h3>
          <img
            className="statsbar-stats-box-img1"
            src={require("./images/screens-stat-box.png")}
          />
          <img
            className="statsbar-stats-box-img2"
            src={require("./images/screens-stat-box1.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default Statsbar;
//   const [getData, setData] = useState({
//     totalBookings: 10,
//     totalBookingsCompleted: 10,
//     totalBookingsPending: 10,
//     totalBookingsCancelled: 10,
//     totalBookingsProfit: 10,
//     vendor: null,
//     vendorGraph1:
//       "define label for graph and the data needed in trello. will be hardcoded for now",
//     vendorGraph2:
//       "define label for graph and the data needed in trello. will be hardcoded for now",
//     vendorGraph3:
//       "define label for graph and the data needed in trello. will be hardcoded for now",
//   });
//   const fetch = () => {
//     const data = axios
//       .get("http://a-wep.herokuapp.com/vendor/getVendorDashboard")
//       .then((res) => {
//         console.log("we are here in api call");
//         console.log(res.data);

//         if (res.data.status === "success") {
//           console.log(res.data.data);
//           setData(res.data.data);
//         } else {
//           alert("Error");
//         }
//       });
//     console.log(data);
//   };
//   useEffect(() => fetch(), [getData]);
