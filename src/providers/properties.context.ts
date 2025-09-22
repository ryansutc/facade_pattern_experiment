import type { AllProperties, ElementType, SectionType } from "@/shared/types";
import React from "react";
import { initialProperties } from "./initialProperties";

type PropertiesContextType = {
  selectedElement: ElementType;
  setSelectedElement: React.Dispatch<React.SetStateAction<ElementType>>;
  setElement: (
    element: keyof typeof initialProperties,
    section: SectionType,
    properties: Record<string, number | string | null>
  ) => void;
  rectangle: Pick<AllProperties, "size" | "position" | "fill" | "stroke">;
  text: Pick<AllProperties, "size" | "position" | "fill">;
  image: Pick<AllProperties, "size" | "position" | "source">;
};
export const PropertiesContext = React.createContext({
  selectedElement: "rectangle" as const,
  ...initialProperties,
  setSelectedElement: () => {},
  setElement: () => {},
} as PropertiesContextType);
