import Sidebar from "../../components/layout/Sidebar"; // Adjust path accordingly

const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar selected={selected} setSelected={setSelected} />

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          height: "100%",
          overflowY: "auto",
          bgcolor: theme.palette.mode === "light" ? "#F0F4FA" : "default",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
