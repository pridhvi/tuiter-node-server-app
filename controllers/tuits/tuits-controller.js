import posts from "./tuits.js";
let tuits = posts;

const newTuitTemplate = {
    likes: 0,
    dislikes: 0,
    liked: false,
    disliked: false,
    userName: "Pridhvi Muthuraju",
    handle: "@pridhvi",
    profilePicture: "/images/owner.jpg",
}

const createTuit = (req, res) => {
    let newTuit = req.body;
    newTuit = {
        ...newTuit,
        ...newTuitTemplate
    }
    newTuit._id = (new Date()).getTime() + '';

    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuits = (req, res) => {
    res.json(tuits)
}

const updateTuit = (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id === tuitIdToUpdate)
    tuits[tuitIndex] =
        { ...tuits[tuitIndex], ...updates };
    res.sendStatus(200);
}


const deleteTuit = (req, res) => {
    const tuitIdToDelete = req.params.tid
    tuits = tuits.filter((t) => t._id !== tuitIdToDelete)
    res.sendStatus(200)
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
