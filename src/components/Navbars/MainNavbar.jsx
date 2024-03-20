import { useContext, useState } from "react";
import { Link } from "react-scroll";
import useScrollPosition from "../../hooks/useScrollPosition";

import LinkButton from "../Buttons/LinkButton";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LanguageIcon from "@mui/icons-material/Language";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Container,
  IconButton,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ColorModeContext } from "../../theme";

import { NAVBAR_HEIGHT } from "../../constants";

import { navbarContent } from "../../utils/content";
import LaunchButton from "../Buttons/LaunchButton";
import Auth from "../Modals/Auth";

const { Logo } = navbarContent;

const MainNavbar = () => {
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
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            style={{
              cursor: "pointer",
            }}
          >
            <img src={Logo} style={{ height: "5rem", objectFit: "contain" }} />
          </Link>

          {/* Links */}
          {!isMobile && (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={6}
              sx={{ flex: 1 }}
              flexWrap="wrap"
            >
              <LinkButton>
                <Typography
                  fontWeight="bold"
                  textTransform="uppercase"
                  color="secondary"
                  variant="body2"
                >
                  <Link to={"ability"} smooth={true} duration={500}>
                    Возможности
                  </Link>
                </Typography>
              </LinkButton>

              <LinkButton>
                <Typography
                  fontWeight="bold"
                  textTransform="uppercase"
                  color="secondary"
                  variant="body2"
                >
                  <Link
                    to={"tarifs"}
                    smooth={true}
                    duration={500}
                    className="cursor"
                  >
                    Тарифы
                  </Link>
                </Typography>
              </LinkButton>

              <LinkButton>
                <Typography
                  fontWeight="bold"
                  textTransform="uppercase"
                  color="secondary"
                  variant="body2"
                >
                  <Link
                    to={"contacts"}
                    smooth={true}
                    duration={500}
                    className="cursor"
                  >
                    Контакты
                  </Link>
                </Typography>
              </LinkButton>
            </Stack>
          )}

          {/* Action Buttons */}
          {isMobile ? (
            <IconButton>
              <MenuIcon />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={5} alignItems="center">
              {/* <LinkButton spacing={1}>
                <LanguageIcon fontSize="small" color="secondary" />
                <Typography textTransform="uppercase" color="secondary">
                  RU
                </Typography>
              </LinkButton> */}
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
          )}
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

export default MainNavbar;
