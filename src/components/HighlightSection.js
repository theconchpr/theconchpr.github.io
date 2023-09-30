import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import styles from "./HighlightSection.module.css";

const HighlightSection = (props) => {
  return (
    <section>
      <Box className={styles["section"]}>
        <Box
          className={styles["section"]}
          sx={{ background: props.background }}
        >
          <Typography variant="h2" fontWeight={600}>
            {props.title}
          </Typography>{" "}
          {props.children}
        </Box>{" "}
      </Box>
      <Divider />
    </section>
  );
};

export default HighlightSection;
