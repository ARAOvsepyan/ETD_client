import { Container, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import OutlinedButton from "../components/Buttons/OutlinedButton";
import Title from "../components/Title";
import { section4Content } from "../utils/content";
import ServiceCard from "../components/Cards/ServiceCard";

const { title, subtitle, TABS } = section4Content;

const Section4 = () => {
  return (
    <Container
      id="tarifs"
      sx={{ mt: { xs: 15, md: 20, lg: 25 }, mb: { xs: 15, md: 20, lg: 25 } }}
    >
      <Stack spacing={4}>
        <Stack spacing={2} alignItems="center">
          <Title variant={{ xs: "h3", md: "h2" }}>{title}</Title>
          <Typography variant="body2" color="text.main">
            {subtitle}
          </Typography>
        </Stack>

        <Stack justifyContent="space-between" flexDirection="row" gap={3}>
          <ServiceCard color='secondary' {...TABS[0]} />
          <ServiceCard color='secondary' {...TABS[1]} />
          <ServiceCard color='secondary' {...TABS[2]} />
        </Stack>
      </Stack>
      {/* <Grid
        container
        spacing={10}
        flexWrap="wrap-reverse"
        alignItems="center"
        sx={{ mt: { xs: 10, md: 15 } }}
      >

        <Grid item xs={12} md={6}>
          <Stack spacing={2} sx={{ maxWidth: 800 }}>
            <Title variant={{ xs: "h3", md: "h2" }}>{title}</Title>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: { xs: 5, md: 8 } }}
            >
              {subtitle}
            </Typography>
            <Tabs
              value={tabValue}
              onChange={(e, v) => setTabValue(v)}
              variant="scrollable"
              scrollButtons="auto"
              orientation="vertical"
            >
              {TABS.map(({ title }) => (
                <Tab
                  label={title}
                  key={title}
                  sx={{
                    minWidth: 80,
                    "&.Mui-selected": { color: "text.primary" },
                  }}
                />
              ))}
            </Tabs>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ pb: 2, minHeight: 100 }}
            >
              {TABS[tabValue].subtitle}
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <ServiceCard {...TABS[tabValue].info} endPoint='tarifs'/>
        </Grid>
      </Grid> */}
    </Container>
  );
};

export default Section4;
