import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8080;
const root = path.resolve();

app.use(express.static(path.join(root, "public")));
app.use(express.static(root));
app.use(express.static(path.join(root, "dist")));

app.listen(PORT, () => {
  console.log(`Servidor PAI corriendo en: http://localhost:${PORT}`);
});