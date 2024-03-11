import { useTheme } from "@mui/material";
import SvgIcons from "@mui/material/SvgIcon";

const Plus = ({ className, color }) => {
  return (
    <SvgIcons color={color} className={className}>
      <svg viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-345.000000, -206.000000)" fill="currentColor">
          <g transform="translate(56.000000, 160.000000)">
            <polygon points="298 49 298 51 294.625 51 294.625 54 292.375 54 292.375 51 289 51 289 49 292.375 49 292.375 46 294.625 46 294.625 49"></polygon>
          </g>
        </g>
      </svg>
    </SvgIcons>
  );
};

export default Plus;
