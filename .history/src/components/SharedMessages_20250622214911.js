import {
  Box,
  Stack,
  useTheme,
  Typography,
  Avatar,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Chip,
  Tab,
  Tabs,
} from "@mui/material";
import {
  X,
  Image,
  FileText,
  Link,
  Download,
  Calendar,
  PlayCircle,
} from "phosphor-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/slices/appSlice";
import { faker } from "@faker-js/faker";

function SharedMessages() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);

  // Generate fake shared content data
  const sharedContent = {
    media: Array.from({ length: 12 }, (_, index) => ({
      id: index + 1,
      type: faker.helpers.arrayElement(["image", "video"]),
      src: `https://picsum.photos/100/100?random=${index}`,
      name: `${faker.system.fileName()}.${faker.helpers.arrayElement([
        "jpg",
        "png",
        "mp4",
      ])}`,
      sender: faker.name.firstName(),
      timestamp: faker.date.recent().toLocaleDateString(),
      size: `${faker.datatype.number({ min: 100, max: 9999 })} KB`,
    })),
    documents: Array.from({ length: 8 }, (_, index) => ({
      id: index + 1,
      name: `${faker.system.fileName()}.${faker.helpers.arrayElement([
        "pdf",
        "doc",
        "xlsx",
        "ppt",
      ])}`,
      sender: faker.name.firstName(),
      timestamp: faker.date.recent().toLocaleDateString(),
      size: `${faker.datatype.number({ min: 500, max: 5000 })} KB`,
      type: faker.helpers.arrayElement(["pdf", "doc", "xlsx", "ppt"]),
    })),
    links: Array.from({ length: 6 }, (_, index) => ({
      id: index + 1,
      url: faker.internet.url(),
      title: faker.lorem.words(3),
      description: faker.lorem.sentence(),
      sender: faker.name.firstName(),
      timestamp: faker.date.recent().toLocaleDateString(),
      domain: faker.internet.domainName(),
    })),
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FileText size={24} color="#FF4444" />;
      case "doc":
        return <FileText size={24} color="#4285F4" />;
      case "xlsx":
        return <FileText size={24} color="#0F9D58" />;
      case "ppt":
        return <FileText size={24} color="#FF6D01" />;
      default:
        return <FileText size={24} color={isDark ? "#fff" : "#000"} />;
    }
  };

  const renderMediaTab = () => (
    <Stack spacing={2}>
      <Typography variant="body2" color="text.secondary" sx={{ px: 2 }}>
        {sharedContent.media.length} items
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          px: 2,
        }}
      >
        {sharedContent.media.map((item) => (
          <Box
            key={item.id}
            sx={{
              position: "relative",
              aspectRatio: "1",
              backgroundColor: isDark ? "#333" : "#F0F4FA",
              borderRadius: 1,
              overflow: "hidden",
              cursor: "pointer",
              "&:hover": {
                opacity: 0.8,
              },
            }}
          >
            <img
              src={item.src}
              alt={item.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            {item.type === "video" && (
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <PlayCircle size={24} color="white" weight="fill" />
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Stack>
  );

  const renderDocumentsTab = () => (
    <List sx={{ p: 0 }}>
      {sharedContent.documents.map((item) => (
        <React.Fragment key={item.id}>
          <ListItem
            sx={{
              px: 2,
              py: 1.5,
              cursor: "pointer",
              "&:hover": {
                backgroundColor: isDark ? "#1A1A1A" : "#F5F5F5",
              },
            }}
          >
            <ListItemAvatar>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 1,
                  backgroundColor: isDark ? "#333" : "#F0F4FA",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {getFileIcon(item.type)}
              </Box>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="body2" fontWeight={500} noWrap>
                  {item.name}
                </Typography>
              }
              secondary={
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{ mt: 0.5 }}
                >
                  <Typography variant="caption" color="text.secondary">
                    {item.sender}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    •
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.size}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    •
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.timestamp}
                  </Typography>
                </Stack>
              }
            />
            <IconButton size="small">
              <Download size={16} color={isDark ? "#aaa" : "#666"} />
            </IconButton>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );

  const renderLinksTab = () => (
    <List sx={{ p: 0 }}>
      {sharedContent.links.map((item) => (
        <React.Fragment key={item.id}>
          <ListItem
            sx={{
              px: 2,
              py: 1.5,
              cursor: "pointer",
              "&:hover": {
                backgroundColor: isDark ? "#1A1A1A" : "#F5F5F5",
              },
            }}
          >
            <ListItemAvatar>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 1,
                  backgroundColor: isDark ? "#333" : "#F0F4FA",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link size={20} color={theme.palette.primary.main} />
              </Box>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="body2" fontWeight={500} noWrap>
                  {item.title}
                </Typography>
              }
              secondary={
                <Stack spacing={0.5}>
                  <Typography variant="caption" color="text.secondary" noWrap>
                    {item.description}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="caption" color="text.secondary">
                      {item.domain}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      •
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.sender}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      •
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.timestamp}
                    </Typography>
                  </Stack>
                </Stack>
              }
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return renderMediaTab();
      case 1:
        return renderDocumentsTab();
      case 2:
        return renderLinksTab();
      default:
        return renderMediaTab();
    }
  };

  return (
    <Box
      sx={{
        width: 320,
        height: "100vh",
        backgroundColor: isDark ? "#0F111A" : "#F8FAFF",
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          backgroundColor: isDark ? "#1E1E1E" : "#FBFAFF",
          borderBottom: `1px solid ${isDark ? "#2A2A2A" : "#E0E0E0"}`,
          p: 2,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box
            sx={{
              backgroundColor: theme.palette.info.main,
              borderRadius: 1,
              p: 0.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image size={16} color="white" />
          </Box>
          <Typography variant="body2" color="text.secondary">
            Shared Content
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton size="small" onClick={() => dispatch(toggleSidebar())}>
            <X size={20} color={isDark ? "#fff" : "#000"} />
          </IconButton>
        </Stack>
      </Box>

      {/* Tabs */}
      <Box
        sx={{
          backgroundColor: isDark ? "#1E1E1E" : "#FBFAFF",
          borderBottom: `1px solid ${isDark ? "#2A2A2A" : "#E0E0E0"}`,
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{
            minHeight: 48,
            "& .MuiTab-root": {
              minHeight: 48,
              fontSize: "0.75rem",
              textTransform: "none",
            },
          }}
        >
          <Tab label={`Media (${sharedContent.media.length})`} />
          <Tab label={`Docs (${sharedContent.documents.length})`} />
          <Tab label={`Links (${sharedContent.links.length})`} />
        </Tabs>
      </Box>

      {/* Scrollable Content */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: isDark ? "#333" : "#ccc",
            borderRadius: "4px",
          },
        }}
      >
        <Box sx={{ py: 2 }}>{renderTabContent()}</Box>
      </Box>
    </Box>
  );
}

export default SharedMessages;
