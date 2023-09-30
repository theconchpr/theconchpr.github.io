import React from "react";
import styles from "./ImageSquare.module.css";
import { Box } from "@mui/material";

/* props map
src={LOGO_IMAGE}
alt="logo_image"
*/

const ImageSquare = (props) => {
  return (
    <>
      <Box padding={"24px"}>
        <img src={props.src} className={styles["image"]} alt={props.alt} />
      </Box>
    </>
  );
};

export default ImageSquare;
