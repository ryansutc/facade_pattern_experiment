import { PropertiesContext } from "@/providers/properties.context";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useContext } from "react";

export default function CanvasWrapper() {
  const { selectedElement, setSelectedElement } = useContext(PropertiesContext);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = event.target.value as "rectangle" | "text" | "image";
    setSelectedElement(newVal);
  };

  return (
    <Grid
      container
      columnSpacing={1}
      sx={{ height: "calc(100vh - 164px)", marginTop: "80px", border: "solid" }}
      alignItems={"flex-start"}
      id="dashboard-container"
    >
      <Grid size={12} sx={{ padding: 2 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Select Shape Type</FormLabel>
          <RadioGroup
            aria-label="shape-type"
            name="shape-type"
            value={selectedElement}
            onChange={handleOptionChange}
            row
          >
            <FormControlLabel
              value="rectangle"
              control={<Radio />}
              label="Rectangle"
            />
            <FormControlLabel value="text" control={<Radio />} label="Text" />
            <FormControlLabel value="image" control={<Radio />} label="Image" />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
}
