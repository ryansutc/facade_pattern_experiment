export type ElementType = "rectangle" | "text" | "image";

export type SectionType = "size" | "position" | "fill" | "stroke" | "source";

export type SizeProperties = {
  width: number;
  height: number;
};

export type PositionProperties = {
  left: number;
  top: number;
};

export type FillProperties = {
  color: string;
};

export type StrokeProperties = {
  color: string;
  width: number;
};

export type SourceProperties = {
  url: string;
};

export type AllProperties = {
  size: SizeProperties;
  position: PositionProperties;
  fill: FillProperties;
  stroke: StrokeProperties;
  source: SourceProperties;
};

export type AllPropertyKeys =
  | keyof SizeProperties
  | keyof PositionProperties
  | keyof FillProperties
  | keyof StrokeProperties
  | keyof SourceProperties;
// Result: "width" | "height" | "left" | "top" | "color" | "url"
