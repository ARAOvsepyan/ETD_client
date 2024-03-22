import { useState, useRef, useMemo, useEffect } from "react";
import { Container } from "@mui/material";
import React from "react";
import Title from "../../components/Title";
import { section2Content } from "../../utils/content";

const { title, Excel, Word, GoogleDrive, GoogleForms, Tutor, Plus, Even } =
  section2Content;

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [count, setCount] = useState(0);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      }),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  if (isIntersecting && count < 2) setCount((prev) => prev + 1);

  return { isIntersecting, count };
}

const HomeSection2 = () => {
  const [entering, setEntering] = useState(false);

  const ref = useRef(null);

  const isInViewport = useIsInViewport(ref);

  if (isInViewport.count == 1 && isInViewport.isIntersecting) {
    setEntering(true);
  }

  return (
    <Container id="ability" sx={{ paddingTop: "5rem" }}>
      <Container maxWidth="md">
        <Title variant={{ xs: "h3", md: "h2" }} sx={{ textAlign: "center" }}>
          {title}
        </Title>
      </Container>

      <Container
        sx={{
          paddingTop: "5rem",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img ref={ref} src={Word} className="card Word" />
        <img
          src={Excel}
          className={entering ? `card Excel Excel__entering` : `card Excel`}
        />
        <Plus
          color="secondary"
          className={entering ? `card plus first__entering` : `card plus`}
        />
        <img
          src={GoogleDrive}
          className={
            entering
              ? `card GoogleDrive GoogleDrive__entering`
              : `card GoogleDrive`
          }
        />
        <Plus
          color="secondary"
          className={entering ? `card plus second__entering` : `card plus`}
        />
        <img
          src={GoogleForms}
          className={
            entering
              ? `card GoogleForms GoogleForms__entering`
              : `card GoogleForms`
          }
        />
        <Plus
          color="secondary"
          className={entering ? `card plus third__entering` : `card plus`}
        />
        <img
          src={Tutor}
          className={entering ? `card Tutor Tutor__entering` : `card Tutor`}
        />
        <Even
          color="secondary"
          className={entering ? `card even even__entering` : `card even`}
        />
      </Container>
    </Container>
  );
};

export default HomeSection2;
