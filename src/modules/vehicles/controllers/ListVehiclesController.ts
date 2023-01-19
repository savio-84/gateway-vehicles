import { Request, Response } from "express";
import { vehiclesRepository } from "../infra/repositories/VehiclesRepository";
import { ListVehiclesService } from "../services/ListVehiclesService";


class ListVehiclesController {
  public async handle(request:Request, response: Response): Promise<Response> {
    const listVehiclesService = new ListVehiclesService(vehiclesRepository);
    const vehicles = await listVehiclesService.execute();
    return response.status(200).json(vehicles);
  }
}

export { ListVehiclesController };