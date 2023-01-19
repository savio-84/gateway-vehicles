import { Vehicle } from "../entities/Vehicle";
import { IVehiclesReppository } from "../repositories/IVehiclesRepository";


class ListVehiclesService {
  constructor(
    private vehiclesRepository: IVehiclesReppository,
  ) {}

  public async execute(): Promise<Vehicle[] | undefined> {
    return this.vehiclesRepository.list();
  }
}

export { ListVehiclesService };