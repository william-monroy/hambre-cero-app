import React from "react";
import Back from "./Back";

const TopBar = ({
  link,
  logo = false,
  logoPosition = "left",
  back = false,
  backPosition = "left",
  avatar = true,
  avatarPosition = "right",
}) => {
  return (
    <div>
      <Back link={link} />
    </div>
  );
};

export default TopBar;
