import { Stack } from "@mui/material";

const LinkButton = ({ children, ...props }) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={0.2}
    sx={{
      cursor: "pointer",
      color: "secondary",
      transition: "all 200ms linear",
      background:
        "linear-gradient(currentColor 0 0) bottom /var(--d, 0) 3px no-repeat",
      ":hover": { "--d": "100%" },
    }}
    {...props}
  >
    {children}
  </Stack>
);

export default LinkButton;