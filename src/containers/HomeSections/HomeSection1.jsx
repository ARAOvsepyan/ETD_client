import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import LaunchButton from "../../components/Buttons/LaunchButton";
import Auth from "../../components/Modals/Auth";
import Title from "../../components/Title";
import { HomeSection1Content } from "../../utils/content";

const { Laoptop, BG, Line, title, ShootingStarImage } = HomeSection1Content;

const CustomButton = ({ children, ...props }) => (
  <Button
    variant="outlined"
    sx={{
      borderRadius: 4,
      color: "secondary",
      borderColor: "secondary",
      height: 58,
      px: 2,
    }}
    {...props}
  >
    {children}
  </Button>
);

const HomeSection1 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box id="home" sx={{ width: "100%" }}>
      <Box
        sx={{
          position: "fixed",
          zIndex: -1,
          top: 0,
          left: 0,
          right: 0,
          flexDirection: "row",
        }}
      >
        <img
          src={BG}
          alt="background"
          className="bg"
          style={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            backgroundColor: `${theme.palette.background.default}`,
          }}
        />
      </Box>

      <Box sx={{ position: "absolute", bottom: -8 }}>
        <img src={Line} style={{ width: "100%" }} />
      </Box>

      <img
        src={ShootingStarImage}
        style={{
          position: "absolute",
          top: "30px",
          right: "15%",
          width: "500px",
        }}
      />

      <Container
        sx={{
          height: "100vh",
        }}
      >
        <Stack
          sx={{ height: "100%" }}
          justifyContent="space-between"
          textAlign="center"
          alignItems="center"
        >
          <Title
            variant={{ xs: "h3", sm: "h2", md: "h1" }}
            sx={{
              letterSpacing: "0.02em",
              mb: 1,
              textTransform: "uppercase",
              marginTop: "7rem",
            }}
          >
            {title}
          </Title>

          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            spacing={4}
            marginTop="4rem"
          >
            <LaunchButton
              name={"Попробовать"}
              fullWidth={isSmallScreen}
              sx={{ height: 58, px: 3 }}
              onClick={handleClickOpen}
            />

            <CustomButton disabled fullWidth={isSmallScreen}>
              <AppleIcon sx={{ fontSize: 36, ml: -1 }} />

              <Stack sx={{ textAlign: "left", ml: 1 }}>
                <Typography variant="caption" sx={{ lineHeight: 1 }}>
                  Download on the
                </Typography>
                <Typography variant="h5">App Store</Typography>
              </Stack>
            </CustomButton>

            <CustomButton disabled fullWidth={isSmallScreen}>
              <GoogleIcon sx={{ fontSize: 36, ml: -1 }} />

              <Stack sx={{ textAlign: "left", ml: 1 }}>
                <Typography variant="caption" sx={{ lineHeight: 1 }}>
                  Get in on
                </Typography>
                <Typography variant="h5">Google Play</Typography>
              </Stack>
            </CustomButton>
          </Stack>
          <Box>
            <img src={Laoptop} style={{ width: "60%" }} />
          </Box>
        </Stack>
      </Container>
      <Auth
        open={open}
        handleClose={handleClose}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        singIn={true}
      />
    </Box>
  );
};

export default HomeSection1;
