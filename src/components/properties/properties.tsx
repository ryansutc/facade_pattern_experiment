import { useProperties } from "@/providers/Properties.provider";
import { Grid, Typography } from "@mui/material";
import PropertiesBuilder from "./propertiesBuilder";

export default function Properties() {
  const { selectedElement } = useProperties();
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
