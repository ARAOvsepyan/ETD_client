import { useContext, useState } from "react";
import useScrollPosition from "../../hooks/useScrollPosition";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LanguageIcon from "@mui/icons-material/Language";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
  AppBar,
  Container,
  IconButton,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ColorModeContext } from "../../theme";

import { NAVBAR_HEIGHT } from "../../constants";

import { navbarContent } from "../../utils/content";
import LaunchButton from "../Buttons/LaunchButton";
import Auth from "../Modals/Auth";
import { Link } from "react-router-dom";
import Title from "../Title";

const { Logo } = navbarContent;


const Navbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const scrollPosition = useScrollPosition();

  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AppBar
      elevation={0}
      sx={{
        py: 1,
        height: NAVBAR_HEIGHT,
        bgcolor: scrollPosition > 10 ? "rgba(7,7,16,.7)" : "transparent",
        backdropFilter: scrollPosition > 10 && "blur(60px)",
      }}
    >
      <Container
        sx={{
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1380px!important",
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Link
            to="/home"
          >
            <img src={Logo} style={{ height: "5rem", objectFit: "contain" }} />
          </Link>

          <Title
            variant={{ xs: "h4", sm: "h3", md: "h2" }}
            sx={{
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              marginLeft: '10rem'
            }}
          >
            База зананий
          </Title>


            <Stack direction="row" spacing={1} alignItems="center">
              <Button color="secondary" startIcon={<LanguageIcon />}>
                RU
              </Button>
              <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                  <DarkModeIcon />
                ) : (
                  <LightModeIcon color="secondary" />
                )}
              </IconButton>
              <LaunchButton
                sx={{ borderRadius: 3 }}
                onClick={handleClickOpen}
                name={"Войти"}
              />
            </Stack>
        </Stack>
      </Container>
      <Auth
        open={open}
        handleClose={handleClose}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        singIn={false}
      />
    </AppBar>
  );
};

export default Navbar;
