import "./db";
import "./models/Video";
import "./models/User";
import app from "./index"

const PORT = 4000;

const handleListening = () =>
    console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);