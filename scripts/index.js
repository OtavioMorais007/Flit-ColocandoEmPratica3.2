const saveCar = () => {
  const brand = document.getElementById("brand").value;
  const model = document.getElementById("model").value;
  const value = document.getElementById("value").value;
  const color = document.getElementById("color").value;
  const automatic = document.getElementById("automatic").value === "true";

  const newCar = {
    brand,
    model,
    value,
    color,
    automatic,
  };

  const cars = JSON.parse(localStorage.getItem("cars")) || [];
  cars.push(newCar);
  localStorage.setItem("cars", JSON.stringify(cars));
};

window.onload = () => {
  const cars = JSON.parse(localStorage.getItem("cars")) || [];
  console.log(cars);
};

const searchCarsByBrand = (cars, brand) => {
  const filteredCars = cars.filter((car) => {
    return car.brand === brand;
  });
  return filteredCars;
};

const searchBrandsAvailables = (cars) => {
  const brands = {};

  cars.forEach((car) => {
    brands[car.brand] = true;
  });

  return Object.keys(brands);
};

const showProperties = (cars, properties) => {
  const carsWithSelectecProperties = [];

  cars.forEach((car) => {
    const carWithProperties = {};

    properties.forEach((property) => {
      if (car.hasOwnProperty(property)) {
        carWithProperties[property] = car[property];
      }
    });

    carsWithSelectecProperties.push(carWithProperties);
  });

  return carsWithSelectecProperties;
};
