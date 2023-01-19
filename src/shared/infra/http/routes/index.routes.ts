import { Router } from "express";
const routes = Router();

import { CreateVehicleController } from "../../../../modules/vehicles/controllers/CreateVehicleController";
import { ListVehiclesController } from "../../../../modules/vehicles/controllers/ListVehiclesController";
const createVehicleController = new CreateVehicleController();
const listVehiclesController = new ListVehiclesController();

routes.post('/', createVehicleController.handle);
routes.get('/', listVehiclesController.handle);

export { routes };