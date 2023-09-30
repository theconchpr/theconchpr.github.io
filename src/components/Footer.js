import { Grid, Stack, Typography, Box } from "@mui/material";
import styles from "./Footer.module.css";
import React from "react";
import config from "../config";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section>
      <Box className={`${styles["section"]} `}>
        <Grid container spacing={3} direction={"row"}>
          <Grid item xs={6}>
            <Stack direction={"column"} spacing={2}>
              <Box>{/*logo*/}</Box>
              <Box>
                <img
                  src={config.logoImage}
                  className={styles["logo-image"]}
                  alt="logo_image"
                />
              </Box>
              <Typography variant="body1">
                {config.footerDescription}
              </Typography>
              <Stack direction={"row"}>
                <a
                  href="https://www.linkedin.com/company/procomp-stainless/"
                  target="_blank"
                >
                  <LinkedInIcon color="black" sx={{ fontSize: 48 }} />
                </a>
                <a
                  href="https://www.facebook.com/procompstainless"
                  target="_blank"
                >
                  <FacebookIcon color="black" sx={{ fontSize: 48 }} />
                </a>
              </Stack>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Call us at{" "}
                <a href="tel:(732) 786-1500" target="_blank">
                  {config.phoneNumber}
                </a>{" "}
                to learn more!
              </Typography>
              {/*copyright symbol and phrase + privacy notice and terms of service*/}
              <Typography variant="body2">
                Copyright and terms of service
              </Typography>
            </Stack>
          </Grid>
          {/* <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <Stack direction={"column"} spacing={2}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Services
              </Typography>
              <Link to="/utility-panels">Custom Fabrication</Link>
              <Link to="/engineering-design">Engineering Design</Link>
              <Link to="/orbital-welding">Orbital Welding</Link>
              <Link to="/oxygen-cleaning">Oxygen Cleaning</Link>
              <Link to="/quality-control">Quality Control</Link>
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <Stack direction={"column"} spacing={2}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Products
              </Typography>
              <Link to="/utility-panels">Utility Panels</Link>
              <Link to="/pipe-tube">Piping and Tubing</Link>
              <Link to="/fittings">Fittings</Link>
              <Link to="/instrumentation">Instrumentation</Link>
            </Stack>
          </Grid>
          <Grid item xs={1}></Grid> */}
        </Grid>
      </Box>
    </section>
  );
};

export default Footer;

// include the following:
// logo
// summary of our mission as a company
// social media links with logos
// copyright

// privacy note link
// terms of service link

// list of links to view (New to Procore / About Procore / Downloads ... don't need this one.)
