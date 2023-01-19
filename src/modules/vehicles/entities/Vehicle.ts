import { v4 as uuid } from "uuid";

interface IVehicleContructor {
  model: string;
  year: string;
  color: string;
  brand: string;
}

class Vehicle {
  private id: string;
  private model: string;
  private year: string;
  private color: string;
  private brand: string;

  constructor({
    brand,
    color,
    model,
    year
  }: IVehicleContructor) {
    this.id = uuid();
    this.brand = brand;
    this.color = color;
    this.model = model;
    this.year = year;
  }

  getId(): string {
    return this.id;
  }
}

export { Vehicle };