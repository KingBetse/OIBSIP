const ajvInstance = require("./ajv-instance");
const schema = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      uniqueitem: true,
    },
    email: {
      type: "string",
      format: "email",
      uniqueitem: true,
    },
    password: {
      type: "string",
    },
  },
  required: ["email", "password"],
};
module.exports = ajvInstance.compile(schema);
