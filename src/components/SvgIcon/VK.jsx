import SvgIcon from "@mui/material/SvgIcon";

const VK = ({ color }) => {
  return (
    <SvgIcon>
      <svg viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23.937 1.041C23.983 0.89 24.005 0.75 23.999 0.625C23.984 0.263 23.735 0 23.149 0H20.531C19.87 0 19.565 0.400001 19.387 0.801001C19.387 0.801001 17.755 4.16 15.874 6.375C15.264 7.016 14.954 7 14.624 7C14.447 7 14 6.786 14 6.199V1.014C14 0.32 13.827 0 13.268 0H8.619C8.212 0 8 0.320001 8 0.641001C8 1.308 8.898 1.468 9 3.337V6.96C9 7.84 8.847 8 8.517 8C7.627 8 5.875 5 4.702 1.068C4.448 0.294001 4.194 0 3.533 0H0.89C0.127 0 0 0.374 0 0.774C0 1.495 0.6 5.393 3.875 9.875C6.25 13.125 9.379 15 12.149 15C13.827 15 13.999 14.573 13.999 13.906V10.934C14 10.133 14.183 10 14.717 10C15.098 10 15.875 10.25 17.375 12C19.105 14.018 19.419 15 20.411 15H23.029C23.637 15 23.986 14.745 24 14.25C24.003 14.124 23.985 13.983 23.944 13.826C23.75 13.25 22.86 11.842 21.75 10.5C21.135 9.757 20.528 9.021 20.249 8.621C20.062 8.36 19.991 8.176 20 8C20.009 7.815 20.105 7.639 20.249 7.393C20.223 7.393 23.607 2.642 23.937 1.041Z"
          fill={color || "secondary"}
        />
      </svg>
    </SvgIcon>
  );
};

export default VK;