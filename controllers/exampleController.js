import connection from "../connection.js";
import CustomError from "../classes/CustomError.js";

function index(req, res) {
  const sql = "SELECT * FROM `examples`";
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });

    let data = results;
    const response = {
      totalCount: results.length,
      data,
    };
    res.json(response);
  })
}

function show(req, res) {
  const id = parseInt(req.params.id);
  const sql = "SELECT * FROM `examples` WHERE `id` = ?";
  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    const item = results[0];
    if (!item) {
      return res.status(404).json({ error: "L'elemento non esiste" });

    }
  });
}

function store(req, res) {
  let newId = 0;
  for (let i = 0; i < examples.length; i++) {
    if (examples[i].id > newId) {
      newId = examples[i].id;
    }
  }
  newId += 1;
  console.log(req.body);

  const newItem = {
    id: newId,
    ...req.body,
  };

  examples.push(newItem);
  res.status(201).json(newItem);
}

function update(req, res) {
  const id = parseInt(req.params.id);
  const item = examples.find((item) => item.id === id);
  if (!item) {
    throw new CustomError("L'elemento non esiste", 404);
  }


  for (key in item) {
    if (key !== "id") {
      item[key] = req.body[key];
    }
  }


  res.json(item);
}
function destroy(req, res) {
  const id = parseInt(req.params.id);
  const sql = "DELETE FROM `examples` WHERE `id` = ?";
  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    res.sendStatus(204);
  });
}

export { index, show, store, update, destroy };
