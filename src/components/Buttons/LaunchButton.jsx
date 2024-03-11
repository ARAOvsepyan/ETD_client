import { Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const LaunchButton = ({ sx = {}, onClick, name, ...props }) => {
  return (
    <Button
      variant="contained"
      sx={{ borderRadius: 4, ...sx }}
      {...props}
      onClick={onClick}
    >
      {name}
      <KeyboardArrowRightIcon />
    </Button>
  );
};

export default LaunchButton;
