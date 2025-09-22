import { Box } from "@mui/material";

/**
 * A generic Section component, within the properties panel, that can be expanded or collapsed to show/hide its content.
 * @returns
 */
export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {children}
      </Box>
    </Box>
  );
}
