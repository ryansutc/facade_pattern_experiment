import { PropertiesContext } from "@/providers/properties.context";
import type { ElementType, SizeProperties } from "@/shared/types";
import { Grid, InputAdornment, TextField, Typography } from "@mui/material";
import { useContext } from "react";

export default function SizeSection({
  value,
  element = "rectangle",
}: {
  value: SizeProperties;
  element: ElementType;
}) {
  const { width, height } = value;
  const { setElement } = useContext(PropertiesContext);

  const handleUpdateProperty = (
    property: keyof SizeProperties,
    newValue: number
  ) => {
    setElement(element, "size", { [property]: newValue });
  };
  return (
    <Grid container>
      <Typography>Size Section</Typography>
      <Grid size={12}>
        <Typography>Width</Typography>
        <TextField
          fullWidth
          size="small"
          type="number"
          value={width}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">px</InputAdornment>
              ),
            },
          }}
          onChange={(e) =>
            handleUpdateProperty("width", Number(e.target.value))
          }
        />
      </Grid>
      <Grid size={12}>
        <Typography>Height</Typography>
        <TextField
          fullWidth
          size="small"
          type="number"
          value={height}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">px</InputAdornment>
              ),
            },
          }}
          onChange={(e) =>
            handleUpdateProperty("height", Number(e.target.value))
          }
        />
      </Grid>
    </Grid>
  );
}
