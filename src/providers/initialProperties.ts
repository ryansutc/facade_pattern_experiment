import { IMAGES } from "@/shared/constants";

export const initialProperties = {
  rectangle: {
    size: { width: 100, height: 100 },
    position: { left: 0, top: 0 },
    fill: { color: "#ff0000" },
    stroke: { color: "#000000", width: 1 },
  },
  text: {
    size: { width: 200, height: 50 },
    position: { left: 0, top: 0 },
    fill: { color: "#000000" },
  },
  image: {
    size: { width: 300, height: 200 },
    position: { left: 0, top: 0 },
    source: { url: IMAGES.sun },
  },
};
