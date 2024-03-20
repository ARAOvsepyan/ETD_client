import { Button } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

const OutlinedButton = ({ sx = {}, endPoint, arrow, children, fit, ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(endPoint);
    navigate(`/${endPoint}`);
  };

  return (
    <Button
      variant="outlined"
      sx={{
        borderRadius: 2,
        color: "text.main",
        borderColor: "text.main",
        width: fit ? "fit-content" : "100%",
        ...sx,
      }}
      onClick={handleClick}
      {...props}
    >
      {children}
      {arrow && <KeyboardArrowRightIcon fontSize="small" sx={{ ml: 0.5 }} />}
    </Button>
  );
};

export default OutlinedButton;
