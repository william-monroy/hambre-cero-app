import React from "react";
import { Button } from "@material-ui/core";
import { useButtonStyles } from "./styles.jsx";

const SIZE = {
  TINY: { width: 150 },
  SMALL: { width: 200 },
  MEDIUM: { width: 300 },
  LARGE: { width: 400 },
};

const THEME = {
  default: "default",
  rounded: "rounded",
};

const TYPES_BUTTON = {
  upload: { background: "#0062FF", color: "white" },
  signin: { background: "#40DF9F", color: "white" },
  signup: { background: "#286053", color: "#3DD59" },
};

const AppButton = ({
  className,
  type,
  text,
  color,
  theme = "default",
  mode = "signin",
  size = "MEDIUM",
  disabled = false,
  onClick = null,
  ...rest
}) => {
  const selectedTheme = THEME[theme];
  const typeBtn = TYPES_BUTTON[mode];
  const classes = useButtonStyles({
    size: SIZE[size],
    ...typeBtn,
  });
  return (
    <Button
      {...rest}
      className={classes[selectedTheme]}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default AppButton;
