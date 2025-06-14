import PropTypes from "prop-types";
import SimpleBarReact from "simplebar-react";
import { alpha, styled } from "@mui/material/styles";
import { Box } from "@mui/material";

// ------------------ Root Wrapper -------------------
const RootStyle = styled("div")(() => ({
  flexGrow: 1,
  height: "100%",
  overflow: "hidden",
}));

// ------------------ Styling Wrapper -------------------
const SimpleBarWrapper = styled("div")(({ theme }) => ({
  "& .simplebar-scrollbar:before": {
    backgroundColor: alpha(theme.palette.grey[600], 0.48),
  },
  "& .simplebar-scrollbar.simplebar-visible:before": {
    opacity: 1,
  },
  "& .simplebar-track.simplebar-vertical": {
    width: 10,
  },
  "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
    height: 6,
  },
  "& .simplebar-mask": {
    zIndex: "inherit",
  },
  "& .simplebar-placeholder": {
    height: "0 !important",
  },
}));

// ------------------ Main Component -------------------
export default function Scrollbar({ children, sx, ...other }) {
  const userAgent =
    typeof navigator === "undefined" ? "SSR" : navigator.userAgent;

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );

  if (isMobile) {
    return (
      <Box sx={{ overflowX: "auto", ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <RootStyle>
      <SimpleBarWrapper sx={sx}>
        <SimpleBarReact
          timeout={5} // <--- key change here
          autoHide={true} // <--- enable autohide
          clickOnTrack={false}
          {...other}
        >
          {children}
        </SimpleBarReact>
      </SimpleBarWrapper>
    </RootStyle>
  );
}

// ------------------ Prop Types -------------------
Scrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

// ------------------ Export Styled Version (Optional) -------------------
export { SimpleBarWrapper as SimpleBarStyle };
