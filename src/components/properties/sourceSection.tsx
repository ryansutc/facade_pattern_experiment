import { PropertiesContext } from "@/providers/properties.context";
import { IMAGES } from "@/shared/constants";
import type { ElementType, SourceProperties } from "@/shared/types";
import { Grid, MenuItem, TextField, Typography } from "@mui/material";
import { useContext } from "react";

export default function SizeSection({
  value,
  element = "rectangle",
}: {
  value: SourceProperties;
  element: ElementType;
}) {
  const { url } = value;
  const { setElement } = useContext(PropertiesContext);

  const handleUpdateProperty = (
    property: keyof SourceProperties,
    newValue: string
  ) => {
    setElement(element, "source", { [property]: newValue });
  };
  return (
    <Grid container>
      <Typography>Source Section</Typography>
      <Grid size={12}>
        <Typography>Source Image</Typography>
        <TextField
          fullWidth
          size="small"
          value={url}
          onChange={(e) => handleUpdateProperty("url", e.target.value)}
          select
        >
          {Object.entries(IMAGES).map(([key, value]) => (
            <MenuItem key={key} value={value} selected={url === value}>
              {value}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
}
