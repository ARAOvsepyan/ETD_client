import { Box, Stack, Pagination, useTheme } from "@mui/material";
import HelpCard from "../../components/Cards/HelpCard";

import { HelpSection2Content } from "../../utils/content";

const { rows, Sec6LayerBG } = HelpSection2Content;

const HelpSection2 = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        marginTop: "-10rem",
        // height: "100vh",
        backgroundColor: `${theme.palette.background.default}`,
        paddingBottom: "5rem",
      }}
    >
      <img
        src={Sec6LayerBG}
        alt="background"
        className="bg"
        style={{
          // zIndex: -1,
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: `${theme.palette.background.default}`,
        }}
      />
      {/* </Box> */}
      <Stack
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={5}
      >
        {rows.map((item) => (
          <HelpCard key={item.id} {...item} />
        ))}
      </Stack>
      <Box marginTop={10} display="flex" justifyContent="center">
        <Pagination count={10} shape="rounded" size="large" />
      </Box>
    </Box>
  );
};

export default HelpSection2;
