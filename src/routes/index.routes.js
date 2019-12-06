import { Router } from "express";
const router = Router();

router.get('/', (req, res)=>{
    res.send('Welcome to the API of Carlot');
});

export default router;