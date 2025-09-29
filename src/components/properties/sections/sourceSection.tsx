import { useProperties } from "@/providers/Properties.provider";
import { IMAGES } from "@/shared/constants";
import type { ElementType, SourceProperties } from "@/shared/types";
import { Grid, MenuItem, TextField, Typography } from "@mui/material";

export default function SizeSection({
  value,
  element = "rectangle",
}: {
  value: SourceProperties;
  element: ElementType;
}) {
  const { url } = value;
  const { setElement } = useProperties();

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
