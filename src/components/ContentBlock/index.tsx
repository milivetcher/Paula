import LeftContentBlock from "./LeftContentBlock";
import ProjectsContentBlock from "./ProjectsContentBlock";
import RightContentBlock from "./RightContentBlock";
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "projects") return <ProjectsContentBlock {...props} />;
  return null;
};

export default ContentBlock;
