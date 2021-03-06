const Sequelize = require("sequelize");
const db = new Sequelize("postgres://Alan@localhost:5432/wikistack", {
  logging: false,
});

const Page = db.define("page", {
  title: { type: Sequelize.STRING },
  slug: { type: Sequelize.STRING, allowNull: false },
  content: { type: Sequelize.TEXT, allowNull: false },
  status: {
    type: Sequelize.ENUM("open", "closed"),
    allowNull: false,
  },
});

const User = db.define("user", {
  name: { type: Sequelize.STRING, allowNull: false },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
});

module.exports = { db, Page, User };
