import { useProperties } from "@/providers/Properties.provider";
import type { ElementType, FillProperties } from "@/shared/types";
import {
  Box,
  ClickAwayListener,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Sketch } from "@uiw/react-color";
import { memo, useState } from "react";

function FillSection({
  value,
  element = "rectangle",
}: {
  value: FillProperties;
  element?: ElementType;
}) {
  const { color } = value;
  const [showSketchPopup, setShowSketchPopup] = useState(false);
  const { setElement } = useProperties();

  const handleUpdateProperty = (
    property: keyof FillProperties,
    newValue: string
  ) => {
    setElement(element, "fill", { [property]: newValue });
  };

  return (
    <Grid container>
      <Typography>Fill Section</Typography>
      <Grid size={12}>
        <Typography>Color</Typography>
        <TextField
          fullWidth
          size="small"
          type="text"
          value={color}
          label={`#${color}`}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Box
                    sx={{
                      width: "8px",
                      height: "100%",
                      backgroundColor: color,
                      border: "solid",
                      borderRadius: 2,
                    }}
                  ></Box>
                </InputAdornment>
              ),
            },
          }}
          onClick={() => setShowSketchPopup(!showSketchPopup)}
        />
        {showSketchPopup && (
          <ClickAwayListener onClickAway={() => setShowSketchPopup(false)}>
            <Sketch
              color={color}
              onChange={(newColor) =>
                handleUpdateProperty("color", newColor.hex)
              }
            />
          </ClickAwayListener>
        )}
      </Grid>
    </Grid>
  );
}

export default memo(FillSection);
