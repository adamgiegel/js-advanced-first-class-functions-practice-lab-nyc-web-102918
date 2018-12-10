// Code your solution in this file!
const logDriverNames = (drivers) => {
  return drivers.forEach(driver => {
    console.log(driver.name)
  });
}

const logDriversByHometown = (drivers, location) => {
  return drivers.forEach(driver => {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

const driversByRevenue = (driver) => {
  return driver.slice().sort(function (a, b){
    return a.revenue - b.revenue
  })
}

const driversByName = (driver) => {
  return driver.slice().sort(function (a, b){
    return a.name.localeCompare(b.name);
  })
}

const totalRevenue = (driver) => {
  return driver.reduce(function(total, currentDriver){
    return currentDriver.revenue + total
  },0)
}

const averageRevenue = (driver) => {
  return totalRevenue(driver)/driver.length
}
