
const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// Rota para criar um novo agendamento
router.post("/", async (req, res) => {
  const { nomeCompleto, telefone, dataExame, horarioExame } = req.body;

  // Validação básica (pode ser mais robusta)
  if (!nomeCompleto || !telefone || !dataExame || !horarioExame) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios." });
  }

  try {
    const newAppointment = new Appointment({
      nomeCompleto,
      telefone, // Salvar no formato recebido (Ex: (11) 9 2365-5866)
      dataExame,
      horarioExame,
    });

    const savedAppointment = await newAppointment.save();
    res.status(201).json({ message: "Agendamento criado com sucesso!", appointment: savedAppointment });
  } catch (error) {
    console.error("Erro ao criar agendamento:", error);
    res.status(500).json({ message: "Erro interno do servidor ao criar agendamento." });
  }
});

module.exports = router;

