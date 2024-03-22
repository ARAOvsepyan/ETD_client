import { Box, Stack, Typography, Divider, Avatar } from "@mui/material";
import React from "react";
import Title from "../Title";

import { useTheme } from "@mui/material";

const ServiceCard = ({  title, subtitle, image, price }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        flexDirection: "column",
        padding: "3rem",
        maxWidth: "500px",
        borderRadius: "16px",
        position: "relative",
        border: "1px solid rgba(128, 128, 128, 0.12)",
        backgroundClip: "padding-box",
        textAlign: "center",
        backdropFilter: "blur(50%)",
        transition: "all 0.3s",
        cursor: "pointer",
        boxShadow: `0px 0px 10px ${theme.palette.secondary.main}`,
        ":hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 0px 30px #ff8c1a",
        },
      }}
    >
      <Title variant={{ xs: "h5", sm: "h4" }}>{title}</Title>

      <Box overflow="hidden" width="200px" height="200px" position="relative">
        <img
          src={image}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
          }}
        />
      </Box>

      <Title variant={{ xs: "h6", sm: "h5" }}>{`${price}/Месяц`}</Title>

      <Stack
        direction="column"
        marginTop="2rem"
        alignItems="center"
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={2}
      >
        <Typography variant="body2" color="text.main">
          {subtitle[0]}
        </Typography>
        <Typography variant="body2" color="text.main">
          {subtitle[1]}
        </Typography>
        <Typography variant="body2" color="text.main">
          {subtitle[2]}
        </Typography>
      </Stack>
    </Box>
  );
};

export default ServiceCard;
