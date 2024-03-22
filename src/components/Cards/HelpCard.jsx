import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import Title from "../Title";

const HelpCard = ({ id, title, subtitle, tag }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/help/${id}`);
  };
  return (
    <Box
      onClick={handleClick}
      sx={{
        gap: 2,
        padding: "3rem",
        borderRadius: "5px",
        position: "relative",
        border: "1px solid rgba(128, 128, 128, 0.12)",
        textAlign: "center",
        transition: "all 0.3s",
        cursor: "pointer",
        height: "100%",
        width: "40%",
        minWidth: "500px",
        background: theme.palette.gradient.main,
        boxShadow: "0 7px 20px 5px #00000088",
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
        <Stack direction="row" justifyContent="end" width="100%" gap={2} mt={5}>
          {tag.map((item) => (
            <Typography variant="body2" color="secondary">
              #{item}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default HelpCard;
