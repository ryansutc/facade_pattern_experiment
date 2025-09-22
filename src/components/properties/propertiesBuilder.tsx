import { PropertiesContext } from "@/providers/properties.context";
import type { ElementType } from "@/shared/types";
import { useContext } from "react";
import FillSection from "./fillSection";
import PositionSection from "./positionSection";
import SectionWrapper from "./sectionWrapper";
import SizeSection from "./sizeSection";

import SourceSection from "./sourceSection";
export default function PropertiesBuilder() {
  const properties = useContext(PropertiesContext);
  const { selectedElement } = properties;

  const renderSection = (section: ElementType) => {
    switch (section) {
      case "rectangle" as ElementType:
        return (
          <>
            <SectionWrapper>
              <SizeSection
                value={properties.rectangle.size}
                element="rectangle"
              />
            </SectionWrapper>
            <SectionWrapper>
              <PositionSection
                value={properties.rectangle.position}
                element="rectangle"
              />
            </SectionWrapper>
            <SectionWrapper>
              <FillSection
                value={properties.rectangle.fill}
                element="rectangle"
              />
            </SectionWrapper>
          </>
        );
      case "text" as ElementType:
        return (
          <>
            <SectionWrapper>
              <SizeSection value={properties.text.size} element="text" />
            </SectionWrapper>
            <SectionWrapper>
              <PositionSection
                value={properties.text.position}
                element="text"
              />
            </SectionWrapper>
            <SectionWrapper>
              <FillSection value={properties.text.fill} element="text" />
            </SectionWrapper>
          </>
        );
      case "image" as ElementType:
        return (
          <>
            <SectionWrapper>
              <SizeSection value={properties.image.size} element="image" />
            </SectionWrapper>
            <SectionWrapper>
              <PositionSection
                value={properties.image.position}
                element="image"
              />
            </SectionWrapper>
            <SectionWrapper>
              <SourceSection value={properties.image.source} element="image" />
            </SectionWrapper>
          </>
        );
      default:
        return null;
    }
  };

  return <div>{renderSection(selectedElement as ElementType)}</div>;
}
