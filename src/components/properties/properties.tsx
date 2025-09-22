import { PropertiesContext } from "@/providers/properties.context";
import { Grid, Typography } from "@mui/material";
import { useContext } from "react";
import PropertiesBuilder from "./propertiesBuilder";

export default function Properties() {
  const { selectedElement } = useContext(PropertiesContext);
  return (
    <Grid
      container
      sx={{
        height: "calc(100vh - 164px)",
        marginTop: "80px",
        minWidth: "200px",
        border: "solid",
      }}
      id="properties-container"
    >
      <Typography>{`Properties: ${selectedElement}`}</Typography>
      <PropertiesBuilder />
    </Grid>
  );
}
