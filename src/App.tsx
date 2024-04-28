import "./App.css";
import { MuiTypography } from "./components/MuiTypography";
import { MuiButton } from "./components/MuiButton";
import { MuiTextField } from "./components/MuiTextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  spacing: 8,
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <div style={{ padding: "20px" }}>
      <MuiTypography />
      <div style={{ marginTop: "20px" }} />
      <MuiButton />
      <div style={{ marginTop: "20px" }} />
      <MuiTextField />
    </div>
    </ThemeProvider>
    </div>
  );
}

export default App;
