import {
  Box,
  TextField,
  Container,
  Stack,
  useTheme,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import Auth from "../../components/Modals/Auth";
import Title from "../../components/Title";
import { HelpSection1Content } from "../../utils/content";
import SearchIcon from "@mui/icons-material/Search";

const { Sec5BG, Sec5SupportImg, title } = HelpSection1Content;

const SearchBar = () => (
  <form>
    <TextField
      id="search-bar"
      className="text"
      // onInput={(e) => {
      //   setSearchQuery(e.target.value);
      // }}
      label="Поиск"
      variant="outlined"
      size="small"
      width="80%"
    />
    <IconButton aria-label="search" sx={{ ml: 2 }}>
      <SearchIcon color="secondary" />
    </IconButton>
  </form>
);

const HelpSection1 = () => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: "100%", height: "80%" }}>
      <Box>
        <img
          src={Sec5BG}
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

      <img
        src={Sec5SupportImg}
        style={{
          position: "absolute",
          top: "20%",
          right: "6%",
          width: "400px",
        }}
      />

      <Container
        sx={{
          height: "100vh",
        }}
      >
        <Stack sx={{ height: "100%", width: "50%" }} justifyContent="center">
          <Title
            variant={{ xs: "h5", sm: "h4", md: "h3" }}
            sx={{
              letterSpacing: "0.02em",
              mb: 4,
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            {title}
          </Title>
          <SearchBar />
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

export default HelpSection1;
