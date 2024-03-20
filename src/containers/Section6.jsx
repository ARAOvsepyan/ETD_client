import { Box, Container, Stack,useTheme } from "@mui/material";
import HelpCard from "../components/Cards/HelpCard";

import { section6Content } from "../utils/content";

const { rows } = section6Content;

const Section6 = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: '100vh',
        marginTop: "-10rem",
        backgroundColor: `${theme.palette.background.default}`,
      }}
    >
      <Stack flexDirection='column' justifyContent='center' alignItems='center' gap={5}>
        {rows.map((item) => (
          <HelpCard key={item.id} {...item} />
        ))}
      </Stack>
    </Box>
  );
};

export default Section6;
