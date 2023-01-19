import { Request, Response } from "express";
import { vehiclesRepository } from "../infra/repositories/VehiclesRepository";
import { CreateVehicleService } from "../services/CreateVehicleService";


class CreateVehicleController {
  public async handle(request:Request, response: Response): Promise<Response> {
    const { brand, color, model, year } = request.body;
    const createVehiclesService = new CreateVehicleService(vehiclesRepository);
    const vehicle = await createVehiclesService.execute({
      brand,
      color,
      model,
      year
    });
    return response.status(200).json(vehicle);
  }
}

export { CreateVehicleController };