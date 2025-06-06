require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'https://agendamento-online-front.vercel.app' // sem barra no final
}));
app.use(express.json());

// Conexão com MongoDB Atlas
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Conectado ao MongoDB Atlas"))
  .catch((err) => console.error("❌ Erro ao conectar ao MongoDB:", err));

// Rotas
const appointmentRoutes = require("./routes/appointments");
app.use("/api/appointments", appointmentRoutes);

// Rota raiz (opcional)
app.get("/", (req, res) => {
  res.send("🚀 API de Agendamento Online Rodando!");
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`🟢 Servidor backend rodando na porta ${PORT}`);
});
