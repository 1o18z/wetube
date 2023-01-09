import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

const PORT = 4001;

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);