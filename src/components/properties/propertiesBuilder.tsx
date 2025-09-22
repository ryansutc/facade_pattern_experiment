import { PropertiesContext } from "@/providers/properties.context";
import type { ElementType } from "@/shared/types";
import { useContext } from "react";
import FillSection from "./sections/fillSection";
import PositionSection from "./sections/positionSection";
import SizeSection from "./sections/sizeSection";
import SectionWrapper from "./sectionWrapper";

import SourceSection from "./sections/sourceSection";
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
