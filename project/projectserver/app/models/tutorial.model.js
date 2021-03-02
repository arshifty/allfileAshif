module.exports = (sequelize, Sequelize) => {
  const BlooReg = sequelize.define("bloodreg", {
    username: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }


  });

  return BlooReg;
};
