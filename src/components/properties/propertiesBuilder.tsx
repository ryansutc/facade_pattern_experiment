import type { ElementType } from "@/shared/types";
import FillSection from "./sections/fillSection";
import PositionSection from "./sections/positionSection";
import SizeSection from "./sections/sizeSection";
import SectionWrapper from "./sectionWrapper";

import { useProperties } from "@/providers/Properties.provider";
import SourceSection from "./sections/sourceSection";
export default function PropertiesBuilder() {
  const { selectedElement, rectangle, text, image } = useProperties();

  const renderSection = (section: ElementType) => {
    switch (section) {
      case "rectangle" as ElementType:
        return (
          <>
            <SectionWrapper>
              <SizeSection value={rectangle.size} element="rectangle" />
            </SectionWrapper>
            <SectionWrapper>
              <PositionSection value={rectangle.position} element="rectangle" />
            </SectionWrapper>
            <SectionWrapper>
              <FillSection value={rectangle.fill} element="rectangle" />
            </SectionWrapper>
          </>
        );
      case "text" as ElementType:
        return (
          <>
            <SectionWrapper>
              <SizeSection value={text.size} element="text" />
            </SectionWrapper>
            <SectionWrapper>
              <PositionSection value={text.position} element="text" />
            </SectionWrapper>
            <SectionWrapper>
              <FillSection value={text.fill} element="text" />
            </SectionWrapper>
          </>
        );
      case "image" as ElementType:
        return (
          <>
            <SectionWrapper>
              <SizeSection value={image.size} element="image" />
            </SectionWrapper>
            <SectionWrapper>
              <PositionSection value={image.position} element="image" />
            </SectionWrapper>
            <SectionWrapper>
              <SourceSection value={image.source} element="image" />
            </SectionWrapper>
          </>
        );
      default:
        return null;
    }
  };

  return <div>{renderSection(selectedElement as ElementType)}</div>;
}
