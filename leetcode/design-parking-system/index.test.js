const { ParkingSystem } = require(".");

describe("771. Jewels and Stones", () => {
  test("1", () => {
    const parkingSystem = new ParkingSystem(1, 1, 0);

    expect(parkingSystem.addCar(1)).toBe(true);
    expect(parkingSystem.addCar(2)).toBe(true);
    expect(parkingSystem.addCar(3)).toBe(false);
    expect(parkingSystem.addCar(1)).toBe(false);
  });
  test("2", () => {
    const parkingSystem = new ParkingSystem(0, 0, 2);

    expect(parkingSystem.addCar(1)).toBe(false);
    expect(parkingSystem.addCar(2)).toBe(false);
    expect(parkingSystem.addCar(3)).toBe(true);
  });
});
