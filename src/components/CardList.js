import {
  Box,
  Card,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Stack,
} from "@mui/material";
import React from "react";
import CARD_IMAGE from "../images/logo_2023_150ppi.png";

const CardList = ({ cardListInfo }) => {
  console.log(typeof cardListInfo);
  const Cards = cardListInfo?.map((info) => {
    return (
      <Card sx={{ width: "100%" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={CARD_IMAGE}
          title="procomp logo"
        />
        <CardContent>
          <Box display={"flex"}>
            <Typography gutterBottom variant="h5">
              {info.title}
            </Typography>
          </Box>
          <Box display={"flex"}>
            <Box justifyContent={"flex-start"}>
              <Typography variant="body2" color="text.secondary">
                {info.description}
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  });

  return (
    <Box sx={{ flexGrow: 1, margin: "24px" }}>
      <Stack
        container
        direction={"row"}
        spacing={4}
        justifyContent={"space-evenly"}
      >
        {Cards}
      </Stack>
    </Box>
  );
};

export default CardList;
