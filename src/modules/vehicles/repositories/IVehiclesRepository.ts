import { Vehicle } from "../entities/Vehicle";
import { ICreateVehicleDTO } from "../interfaces/ICreateVehicleDTO";

interface IVehiclesReppository {
  create({brand, color, model, year}: ICreateVehicleDTO): Promise<Vehicle | undefined>;
  list(): Promise<Vehicle[] | undefined>;
}

export { IVehiclesReppository };