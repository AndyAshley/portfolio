import "./styles/global.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Typography } from "@mui/material";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <img src="/aa_web_logo.png" alt="Profile picture" className="avatar" />
      <h1 className="font-main dev-cursor">ANDYASHLEY.DEV_</h1>
      <p>Software Engineer</p>
      <Typography variant="body1" sx={{ mt: 8, mb: 2 }}>
        This portfolio website is currently under construction, in the meantime
        you can connect with me on LinkedIn
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
