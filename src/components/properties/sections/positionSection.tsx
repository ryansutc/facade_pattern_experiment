import { useProperties } from "@/providers/Properties.provider";
import type { ElementType, PositionProperties } from "@/shared/types";
import { Grid, InputAdornment, TextField, Typography } from "@mui/material";

export default function PositionSection({
  value,
  element = "rectangle",
}: {
  value: PositionProperties;
  element?: ElementType;
}) {
  const { left, top } = value;
  const { setElement } = useProperties();

  const handleUpdateProperty = (
    property: keyof PositionProperties,
    newValue: number
  ) => {
    setElement(element, "position", { [property]: newValue });
  };
  return (
    <Grid container>
      <Typography>Position Section</Typography>
      <Grid size={12}>
        <Typography>Left</Typography>
        <TextField
          fullWidth
          size="small"
          type="number"
          value={left}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">px</InputAdornment>
              ),
            },
          }}
          onChange={(e) => handleUpdateProperty("left", Number(e.target.value))}
        />
      </Grid>
      <Grid size={12}>
        <Typography>Top</Typography>
        <TextField
          fullWidth
          size="small"
          type="number"
          value={top}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">px</InputAdornment>
              ),
            },
          }}
          onChange={(e) => handleUpdateProperty("top", Number(e.target.value))}
        />
      </Grid>
    </Grid>
  );
}
