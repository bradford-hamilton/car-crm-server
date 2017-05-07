import express from 'express';
import personsController from './persons.controller';

const router = express.Router();

router.post('/create-person', personsController.createPerson);
router.post('/login', personsController.login);
router.get('/get-person', personsController.getPerson);
router.get('/get-all', personsController.getAll);
router.put('/update-person', personsController.updatePerson);
router.delete('/delete-person', personsController.deletePerson);

export default router;
