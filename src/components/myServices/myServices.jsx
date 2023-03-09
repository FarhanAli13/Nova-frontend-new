import React, { useState } from "react";
import CanceledService from "../canceledService/canceledService";
import CancelServiceModal from "../cancelServiceModal/cancelServiceModal";
import PosstService from "../postService/posstService";
import UpcomingServices from "../upcomingService/upcomingServices";
import "./myServices.css";

const serviceArr = [
  {
    id: 1,
    text: "Past Services",
  },
  {
    id: 2,
    text: "Cancelled Services",
  },
  {
    id: 3,
    text: "Upcoming Services",
  },
];

const MyServices = () => {
  const [select, setselect] = useState({
    id: 1,
    text: "Past Services",
  });
  return (
    <div className="nove-my_profile-my_rewards-main_container">
      <div className="nova-my_profile-my_reward-select-container">
        {serviceArr.map((item) => (
          <div
            onClick={() => setselect(item)}
            className="nova-my_profile-my_reward-select-view"
          >
            <p style={{ color: select.id == item.id ? "#EE509C" : "#000" }}>
              {item.text}
            </p>
            <div
              style={{ display: select.id == item.id ? "flex" : "none" }}
              className="nova-my_profile-my_reward-select-border"
            ></div>
          </div>
        ))}
      </div>
      {select.id == 1 ? (
        <PosstService />
      ) : select.id == 2 ? (
        <CanceledService />
      ) : (
        <UpcomingServices />
      )}
    </div>
  );
};

export default MyServices;
