import { useProperties } from "@/providers/Properties.provider";
import { Grid } from "@mui/material";

export default function Canvas() {
  const properties = useProperties();
  const { selectedElement } = properties;

  const drawElement = () => {
    switch (selectedElement) {
      case "rectangle": {
        const rectangle = properties.rectangle;
        return (
          <div
            style={{
              position: "relative",
              left: rectangle.position.left,
              top: rectangle.position.top,
              width: rectangle.size.width,
              height: rectangle.size.height,
              backgroundColor:
                rectangle.fill && rectangle.fill.color
                  ? rectangle.fill.color
                  : "grey",
            }}
          ></div>
        );
      }
      case "text": {
        const text = properties.text;
        return (
          <div
            style={{
              position: "relative",
              left: text.position.left,
              top: text.position.top,
              fontSize: "24px",
              color: text.fill.color,
            }}
          >
            Hell Yeah!!
          </div>
        );
      }
      case "image": {
        const image = properties.image;
        return (
          <img
            src={image.source.url}
            alt="Sample"
            style={{
              position: "relative",
              left: image.position.left,
              top: image.position.top,
              width: image.size.width,
              height: image.size.height,
            }}
          />
        );
      }
      default:
        return null;
    }
  };
  return (
    <Grid container alignItems={"start"} justifyContent={"start"}>
      {drawElement()}
    </Grid>
  );
}
