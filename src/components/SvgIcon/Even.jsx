import { useTheme } from "@mui/material";
import SvhIcons from "@mui/material/SvgIcon";

const Even = ({ className, color }) => {
  return (
    <SvhIcons color={color} className={className}>
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        enable-background="new 0 0 512 512"
      >
        <path d="M0,144v85.3h512V144H0z M0,400h512v-85.3H0V400z" />
      </svg>
    </SvhIcons>
  );
};

export default Even;
