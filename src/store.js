const { define, types, validations } = require("local_orm");

const blankValidation = (val) =>
  val ? [null, true] : ["can't be blank", false];
const Store = define({
  name: "messenger",
  schema: {
    messages: {
      body: {
        type: types.string,
        validations: [blankValidation],
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
        validations: [blankValidation],
      },
      timestamp: {
        type: types.integer,
        validations: [validations.present],
        defaultVal: () => Date.now(),
      },
    },
    currentUsers: {
      userId: {
        type: types.string,
        validations: [blankValidation],
      },
    },
  },
});

export default Store;
