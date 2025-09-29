/* eslint-disable react-refresh/only-export-components */
import type { AllPropertyKeys, ElementType, SectionType } from "@/shared/types";
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type FC,
} from "react";
import { initialProperties } from "./initialProperties";

import type { AllProperties } from "@/shared/types";

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

const PropertiesContext = createContext({
  selectedElement: "rectangle" as const,
  ...initialProperties,
  setSelectedElement: () => {},
  setElement: () => {},
} as PropertiesContextType);

export const PropertiesProvider: FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [selectedElement, setSelectedElement] =
    useState<ElementType>("rectangle");

  const [elements, setElements] = useState(initialProperties);

  const setElement = useCallback(
    (
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
    },
    []
  );

  const contextValue = useMemo(
    () => ({ selectedElement, setSelectedElement, setElement, ...elements }),
    [selectedElement, setSelectedElement, setElement, elements]
  );

  return (
    <PropertiesContext.Provider value={contextValue}>
      {children}
    </PropertiesContext.Provider>
  );
};

export const useProperties = () => {
  const context = useContext(PropertiesContext);
  if (!context) {
    throw new Error("useProperties must be used within a PropertiesProvider");
  }
  return context;
};
