import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import { Dialog, IconButton, Link, Typography, useTheme } from "@mui/material";
import Slide from "@mui/material/Slide";
import { forwardRef, useState } from "react";
import VK from "../../components/SvgIcon/VK.jsx";
import Title from "../../components/Title/index.jsx";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const Auth = ({ open, handleClose, singIn }) => {
  const theme = useTheme();
  const [isSingIn, setIsSingIn] = useState(singIn);

  const handleClick = () => {
    isSingIn ? setIsSingIn(false) : setIsSingIn(true);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      fullWidth={true}
      maxWidth="md"
      sx={{
        "& .MuiPaper-root	": {
          backgroundImage: "none",
        },
      }}
    >
      <div
        className={isSingIn ? "right-panel-active  container" : "container"}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form className="auth_form" action="#">
            <Title
              variant={{ xs: "h3", md: "h2" }}
              sx={{ color: "black", fontSize: "12px" }}
            >
              Создать Аккаунт
            </Title>
            <div className="social-container">
              <IconButton>
                <VK color={theme.palette.warning.main} />
              </IconButton>
              <IconButton color="warning">
                <FacebookOutlinedIcon />
              </IconButton>
              <IconButton color="warning">
                <GoogleIcon />
              </IconButton>
            </div>
            <Typography variant="body2">
              или зарегестрируйся с помощью почты
            </Typography>
            <input className="auth_input" type="text" placeholder="ФИО" />
            <input className="auth_input" type="email" placeholder="Почта" />
            <input
              className="auth_input"
              type="password"
              placeholder="Пароль"
            />
            <button className="auth_button">Зарегестрироваться</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="auth_form" action="#">
            <Title
              variant={{ xs: "h3", md: "h2" }}
              sx={{ color: "black", fontSize: "12px" }}
            >
              Войти
            </Title>
            <div className="social-container">
              <IconButton>
                <VK color={theme.palette.warning.main} />
              </IconButton>
              <IconButton color="warning">
                <FacebookOutlinedIcon />
              </IconButton>
              <IconButton color="warning">
                <GoogleIcon />
              </IconButton>
            </div>
            <Typography variant="body2" color="black">
              или используй свой аккаунт
            </Typography>
            <input className="auth_input" type="email" placeholder="Почта" />
            <input
              className="auth_input"
              type="password"
              placeholder="Пароль"
            />
            <Typography variant="body2">
              <Link href="#" color="black" underline="none">
                Забыли пароль?
              </Link>
            </Typography>
            <button className="auth_button">Войти</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <Title
                variant={{ xs: "h4", md: "h3" }}
                sx={{
                  fontWeight: 900,
                  color: "white",
                }}
              >
                С возвращением!
              </Title>
              <Typography
                padding="1.5rem"
                variant="body1"
                sx={{
                  fontWeight: 700,
                }}
              >
                Авторизуйся под своими персональными данными
              </Typography>
              <button
                className="auth_button ghost"
                id="signIn"
                onClick={handleClick}
              >
                Войти
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <Title sx={{ color: "white" }} variant={{ xs: "h3", md: "h2" }}>
                Привет!
              </Title>
              <Typography variant="body1" padding="1rem">
                Введи свои личные данные
              </Typography>
              <button
                className="auth_button ghost"
                id="signUp"
                onClick={handleClick}
              >
                Зарегестрироваться
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default Auth;
