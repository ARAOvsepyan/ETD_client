import { Box, Stack, Typography, Divider, Avatar } from "@mui/material";
import React from "react";
import Title from "../Title";
import { useNavigate } from "react-router-dom";

import { useTheme } from "@mui/material";

const HelpCard = ({ id, title, subtitle, tag }) => {
  const theme = useTheme();
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(`/${id}`);
  // };

  return (
    <Box
      // onClick={handleClick}
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        flexDirection: "column",
        padding: "3rem",
        borderRadius: "5px",
        position: "relative",
        border: "1px solid rgba(128, 128, 128, 0.12)",
        backgroundClip: "padding-box",
        textAlign: "center",
        backdropFilter: "blur(50%)",
        transition: "all 0.3s",
        cursor: "pointer",
        height: "100%",
        width: "70%",
        ":hover": {
          transform: "scale(1.02)",
          boxShadow: "0px 0px 30px #ff8c1a",
        },
      }}
    >
      {/* <Title variant={{ xs: "h6", sm: "h5" }}>{`${price}/Месяц`}</Title> */}

      <Stack alignItems="inherit" width="100%" height="100%">
        <Stack
          direction="column"
          alignItems="center"
          divider={<Divider orientation="horizontal" flexItem />}
          spacing={2}
        >
          <Title variant={{ xs: "h5", sm: "h4" }}>{title}</Title>
          <Typography variant="body2" color="text.main">
            {subtitle}
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="end" width="100%" gap={2}>
          {tag.map((item) => (
            <Typography>{item}</Typography>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default HelpCard;
