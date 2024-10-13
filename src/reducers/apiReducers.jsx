// initial state, just like initial state we pass inside useState
export const initialProductState = {
  count: 1,
  discount: 0,
  name: "Banana",
  price: 2.99,
  sumTotal: 0,
  list: [],
};

export const productReducer = (state, actionObj) => {
  //update state  based on action object

  switch (actionObj.type) {
    case "PLUS_COUNT": {
      //make a copy of the state
      const newState = { ...state };
      //inrement the count
      newState.count = newState.count + 1;
      //apply discount if count >= 5
      if (newState.count >= 5) {
        newState.discount = 20;
      }
      //return new state to be updated}
      return newState;
    }

    case "MINUS_COUNT": {
      //make a copy of the state
      const newState = { ...state };
      //inrement the count
      //apply discount if count >= 5
      if (newState.count > 0) {
        newState.count = newState.count - 1;
      }
      if (newState.count < 5) {
        newState.discount = 0;
      }
      //return new state to be updated}
      return newState;
    }

    case "SET_NAME": {
      //make a copy of the state
      const newState = { ...state };
      //set newstate to payload
      newState.name = actionObj.payload;
      //return new state to be updated}
      return newState;
    }

    case "CHANGE_PRICE": {
      //make a copy of the state
      const newState = { ...state };
      //set newstate to payload
      newState.price = actionObj.payload;
      //return new state to be updated}
      return newState;
    }

    case "ADD_PRODUCT": {
      //make a copy of the state
      const newItem = {
        name: state.name,
        quantity: state.count,
        price: state.price,
        discount: state.discount,
        total: (state.count * state.price * (100 - state.discount)) / 100,
      };
      //set newstate
      const newList = [...state.list, newItem];
      const newSumTotal = state.sumTotal + newItem.total;
      //return new state to be updated
      return {
        ...state,
        list: newList,
        sumTotal: newSumTotal,
      };
    }

    default:
      throw new Error("productReducer - unknown action: ", actionObj.type);
  }
};
