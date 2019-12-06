import { Router } from "express";
const router = Router();

//Database Connection
import { connect } from "../database";
import { ObjectID } from "mongodb";

router.get('/getAllTasks', async (req, res) =>{
    const db = await connect();
    const result = await db.collection('tasks').find({}).toArray(); //Coleccion llamada tareas
    console.log(result);
    res.json(result);
});

router.post('/insOneTask', async (req, res)=>{
    const db = await connect();
    //console.log(req.body);
    const task = {
        title: req.body.title,
        description : req.body.description
    };
    const result = await db.collection('tasks').insert(task);
    res.json(result.ops[0]);
});

router.get('/getOneTask/:id', async(req, res)=>{
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('tasks').findOne({_id: ObjectID(id)});
    //console.log(id);
    res.json(result);
});

router.delete('/delOneTask/:id', async (req, res)=>{
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('tasks').deleteOne({_id: ObjectID(id)});

    res.json({
        message: `Task ${id} deleted`,
        result
    })
});

router.put('/upOneTask/:id', async (req, res)=>{
    const {id} = req.params;
    const updateTask = {
        title: req.body.title,
        description: req.body.description
    };

    const db = await connect();
    await db.collection('tasks').updateOne({_id: ObjectID(id)}, {
    $set: updateTask});
    res.json({
        message: `Task ${id} Updated`
    });

});

export default router;