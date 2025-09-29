import { useProperties } from "@/providers/Properties.provider";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import Canvas from "./canvas";

export default function CanvasWrapper() {
  const { selectedElement, setSelectedElement } = useProperties();

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = event.target.value as "rectangle" | "text" | "image";
    setSelectedElement(newVal);
  };

  return (
    <Grid
      container
      columnSpacing={1}
      sx={{ marginTop: "80px", border: "solid", minHeight: "500px" }}
      justifyContent={"flex-start"}
      alignContent={"flex-start"}
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
      <Canvas />
    </Grid>
  );
}
