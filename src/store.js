const { define, types, validations } = require("local_orm");

const Store = define({
  name: "messenger",
  schema: {
    messages: {
      body: {
        type: types.string,
        validations: [validations.present, validations.maxLength(1000)],
      },
      timestamp: {
        type: types.integer,
        validations: [validations.present],
        defaultVal: () => Date.now(),
      },
    },
    users: {
      name: {
        type: types.string,
        validations: [validations.present, validations.maxLength(64)],
      },
      timestamp: {
        type: types.integer,
        validations: [validations.present],
        defaultVal: () => Date.now(),
      },
    },
  },
});

export default Store;
