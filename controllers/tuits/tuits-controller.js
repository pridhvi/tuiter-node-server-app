import * as tuitsDao from './tuits-dao.js'

const newTuitTemplate = {
    likes: 0,
    dislikes: 0,
    liked: false,
    disliked: false,
    userName: "Pridhvi Muthuraju",
    handle: "@pridhvi",
    profilePicture: "/images/owner.jpg",
}

const createTuit = async (req, res) => {
    let newTuit = req.body;
    newTuit = {
        ...newTuit,
        ...newTuitTemplate
    }

    newTuit.time = (new Date()).getTime();
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits)
}

const updateTuit = async (req, res) => {
    // tuits[tuitIndex] = { ...tuits[tuitIndex], ...updates };
    const status = await tuitsDao.updateTuit(req.params.tid, req.body)
    res.json(status);
}


const deleteTuit = async (req, res) => {
    const status = await tuitsDao.deleteTuit(req.params.tid);
    console.log(status)
    res.json(status)
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
