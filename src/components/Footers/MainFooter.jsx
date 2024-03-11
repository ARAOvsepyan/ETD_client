import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { Stack } from "@mui/system";
import { footerContent } from "../../utils/content";
import OutlinedButton from "../Buttons/OutlinedButton";
import Title from "../Title";
import VK from "../../components/SvgIcon/VK";

const { help, faq, anower, subscribe, copyright, socials } = footerContent;

const LinkSection = ({ title, links }) => (
  <Stack spacing={2.5}>
    <Title>{title}</Title>

    {links.map(({ title }) => (
      <Typography
        key={title}
        variant="body2"
        color="text.secondary"
        sx={{
          cursor: "pointer",
          "&:hover": {
            color: "text.primary",
          },
        }}
      >
        {title}
      </Typography>
    ))}
  </Stack>
);

const Footer = () => {
  const theme = useTheme();
  console.log(theme.palette.secondary);
  return (
    <Box id="contacts">
      <Divider sx={{ mb: 10 }} />

      <Container>
        <Grid container spacing={8} flexWrap="wrap-reverse">
          <Grid item xs={12} md={6} lg={7} xl={8}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <LinkSection {...help} />
              </Grid>
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <LinkSection {...faq} />
              </Grid>
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <LinkSection {...anower} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} lg={5} xl={4}>
            <Stack>
              <Title sx={{ mb: 1 }}>{subscribe.title}</Title>

              <Typography variant="body2" color="text.secondary">
                {subscribe.subtitle}
              </Typography>

              <OutlinedButton arrow sx={{ height: 60, my: 3 }}>
                Подписаться
              </OutlinedButton>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <IconButton>
                  <VK color={theme.palette.secondary.main} />
                </IconButton>
                {socials.map((item, i) => (
                  <IconButton key={i}>
                    <item.icon color="secondary" />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 6, mb: 5 }} />

        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
          sx={{ pb: 6 }}
        >
          <Typography variant="body2" color="text.secondary">
            {copyright.left}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
