import { Vehicle } from "../../entities/Vehicle";
import { ICreateVehicleDTO } from "../../interfaces/ICreateVehicleDTO";
import { IVehiclesReppository } from "../IVehiclesRepository";


class VehicleRepositoryInMemory implements IVehiclesReppository {
  private repository: Vehicle[];

  constructor() {this.repository = []}
  
  async create({brand, color, model, year}: ICreateVehicleDTO): Promise<Vehicle | undefined> {
    const vehicle = new Vehicle({
      brand,
      color,
      model,
      year,
    });

    this.repository.push(vehicle);
    return vehicle;
  }
  
  async list(): Promise<Vehicle[] | undefined> {
    return this.repository;
  }
}

export { VehicleRepositoryInMemory };