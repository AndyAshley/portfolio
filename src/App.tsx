import "./styles/global.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Typography } from "@mui/material";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <img src="/aa2023small.png" alt="Profile picture" className="avatar" />
      <h1 className="font-main">ANDYASHLEY.DEV</h1>
      <p>Software Engineer Portfolio Website</p>
      <Typography variant="body1" sx={{ mt: 8, mb: 2 }}>
        This website is currently under construction, in the meantime you can
        connect with me on LinkedIn
      </Typography>
      <a
        href="https://www.linkedin.com/in/andy-ashley-b70539204/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon sx={{ fontSize: 60 }} className="linkedIn" />
      </a>
    </div>
  );
}

export default App;
