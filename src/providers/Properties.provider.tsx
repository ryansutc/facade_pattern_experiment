import type { AllPropertyKeys, ElementType, SectionType } from "@/shared/types";
import React, { useState } from "react";
import { initialProperties } from "./initialProperties";
import { PropertiesContext } from "./properties.context";

export const PropertiesProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [selectedElement, setSelectedElement] =
    useState<ElementType>("rectangle");

  const [elements, setElements] = useState(initialProperties);

  const setElement = (
    element: keyof typeof initialProperties,
    section: SectionType,
    properties: Record<string, number | string | null>
  ) => {
    setElements((prev) => {
      return {
        ...prev,
        [element]: {
          ...prev[element],
          [section]: {
            ...(
              prev[element] as Record<
                SectionType,
                Record<AllPropertyKeys, string | number | null>
              >
            )[section],
            ...properties,
          },
        },
      };
    });
  };

  return (
    <PropertiesContext.Provider
      value={{ selectedElement, setSelectedElement, setElement, ...elements }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};
