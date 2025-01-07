const examples = require("../models/examples");
<<<<<<< HEAD
const CustomError = require(`../classes/CustomError`);

function index(req, res) {

    const exam = req.query.titolo;

    let piatti = {

        counter: 5,
        data: [...iMieiPiatti],
    }

    if (nomePiatto) {

        piatti.data = iMieiPiatti.filter((piatto) => piatto.titolo.toLowerCase().includes(nomePiatto.toLowerCase()))
        piatti.counter = piatti.data.length
    }

    if (tagsPiatto) {

        piatti.data = iMieiPiatti.filter((piatto) => piatto.tags.join(",").toLowerCase().includes(tagsPiatto.toLowerCase()))
    }



    if (piatti.data.length < 1) {
        throw new CustomError("Questo item non esiste", 404);
        res.status(404);
        piatti = {

            counter: 0,
            error: 404,
            message: "Non ci sono piatti per la tua ricerca",
        }

    }
    res.json(piatti)
}

function show(req, res) {

    const id = +(req.params.id);
    const piattoScelto = iMieiPiatti.find((piatto) => piatto.id === id)

    const itemComments = comments.filter((comment) => comment.pizza_id === id)


    if (piattoScelto) {
        res.json({
            success: true,
            piattoScelto,
        });
    } else {
        throw new CustomError("Questo item non esiste", 404);
        res.status(404);
        res.json({
            success: false,
            message: "Il piatto non esiste",
        });
    }

}

function store(req, res) {
    console.log(req.body)


    let newID = 0;
    for (let i = 0; i < iMieiPiatti.length; i++) {

        if (iMieiPiatti[i].id > newID) {
            newID = iMieiPiatti[i].id;

        }
    }
    newID += 1;

    const nuovoPiatto = {
        id: newID,
        titolo: req.body.titolo,
        img: req.body.img,
        tags: req.body.tags
    };

    iMieiPiatti.push(nuovoPiatto);
    res.json(nuovoPiatto)
}

function update(req, res) {

    const id = +(req.params.id)
    const piattoScelto = iMieiPiatti.find((piatto) => piatto.id === id)
    if (!piattoScelto) {
        throw new CustomError("Questo item non esiste", 404);
        res.status(404);
        res.json({
            success: false,
            message: "Il piatto non esiste",
        });
        return;
    }
    console.log(req.body);
    piattoScelto.titolo = req.body.titolo;
    piattoScelto.contenuto = req.body.contenuto;
    piattoScelto.img = req.body.img;
    piattoScelto.tags = req.body.tags;

    console.log(piattoScelto);
    res.json(piattoScelto);

}

function modify(req, res) {
    res.send("Modifica parziale del piatto");
}

function destroy(req, res) {

    const id = +(req.params.id);
    const index = iMieiPiatti.findIndex(piatto => piatto.id === id);
    if (index !== -1) {
        iMieiPiatti.splice(index, 1);
        res.sendStatus(204);
    } else {
        throw new CustomError("Questo item non esiste", 404);

        res.status(404);
        res.json({
            error: "404",
            message: "Piatto non trovato"
        })
    }
    console.log(iMieiPiatti);
}



module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}
=======
const CustomError = require("../classes/CustomError");

function index(req, res) {
  const response = {
    totalCount: examples.length,
    data: [...examples],
  };
  res.json(response);
}

function show(req, res) {
  const id = parseInt(req.params.id);
  const item = examples.find((item) => item.id === id);
  if (!item) {
    throw new CustomError("L'elemento non esiste", 404);
  }
  res.json({ success: true, item });
}

function store(req, res) {
  let newId = 0;
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].id > newId) {
      newId = menu[i].id;
    }
  }
  newId += 1;

  // new data is in req.body
  const newItem = {
    id: newId,
    title: req.body.title,
  };

  examples.push(newItem);
  res.status(201).json(newItem);
}

function update(req, res) {
  const id = parseInt(req.params.id);
  const item = exmples.find((item) => item.id === id);
  if (!item) {
    throw new CustomError("L'elemento non esiste", 404);
  }

  //console.log(req.body);
  for (key in item) {
    if (key !== "id") {
      item[key] = req.body[key];
    }
  }

  //console.log(examples);
  res.json(item);
}
function destroy(req, res) {
  const id = parseInt(req.params.id);
  const index = example.findIndex((item) => item.id === id);
  if (index !== -1) {
    menu.splice(index, 1);
    res.sendStatus(204);
  } else {
    throw new CustomError("L'elemento non esiste", 404);
  }
}

module.exports = { index, show, store, update, destroy };
>>>>>>> 844718134f9db32808982099456f5e2217b00bab
