import { Vehicle } from "../entities/Vehicle";
import { ICreateVehicleDTO } from "../interfaces/ICreateVehicleDTO";
import { IVehiclesReppository } from "../repositories/IVehiclesRepository";


class CreateVehicleService {
  constructor(
    private vehiclesRepository: IVehiclesReppository,
  ) {}

  public async execute({brand, color, model, year}: ICreateVehicleDTO): Promise<Vehicle | undefined> {
    const vehicle = await this.vehiclesRepository.create({
      brand,
      color,
      model,
      year
    });

    return vehicle;
  }
}

export { CreateVehicleService };