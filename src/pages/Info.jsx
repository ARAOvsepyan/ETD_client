import { useParams } from "react-router-dom";
import Navbar from "../components/Navbars/HelpNavbar";

import {
  Box,
  Typography,
  useTheme,
  Paper,
  useMediaQuery,
  CardMedia,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useState } from "react";
import Auth from "../components/Modals/Auth";
import { infoContent, HelpSection2Content } from "../utils/content";

const { InfoBG } = infoContent;
const { rows } = HelpSection2Content;

const Item = styled(Paper)(({ theme }) => ({
  background: theme.palette.gradient.main,
  boxShadow: "0 7px 20px 5px #00000088",
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "0px",
}));

const Info = () => {
  const theme = useTheme();
  const { id } = useParams();

  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar title={rows[id - 1].title} />
      <Box sx={{ width: "100%", height: "80%" }}>
        <Box>
          <img
            src={InfoBG}
            alt="background"
            className="bg"
            style={{
              zIndex: -1,
              position: "absolute",
              width: "100%",
              height: "100vh",
              backgroundColor: `${theme.palette.background.default}`,
            }}
          />
        </Box>

        <Grid container sx={{ pt: 25, pl: 10, pr: 10 }}>
          <Grid xs={6}>
            <CardMedia
              component="video"
              src="https://placehold.co/800x700.mp4"
            />
          </Grid>
          <Grid xs={6}>
            <Item
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                p: 5,
                gap: 5,
              }}
            >
              <Typography variant="h3" fontWeight="bold" color="secondary">
                {rows[id - 1].title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                }}
                color="secondary"
                component="div"
              >
                {rows[id - 1].info}
              </Typography>
            </Item>
          </Grid>
        </Grid>
        <Auth
          open={open}
          handleClose={handleClose}
          keepMounted
          aria-describedby="alert-dialog-slide-description"
          singIn={true}
        />
      </Box>
    </>
  );
};

export default Info;
