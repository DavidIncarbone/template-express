function notFound(req, res, next) {
<<<<<<< HEAD
    res.status(404).json({ error: "Not found", message: "Risorsa non trovata" })
};

module.exports = notFound;
=======
  res.status(404);
  res.json({ error: "Not Found", message: "Risorsa non trovata" });
}

module.exports = notFound;
>>>>>>> 844718134f9db32808982099456f5e2217b00bab
