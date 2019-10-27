export default (state, action) => {
    switch (action.type) {
      case "setPrefixes":
        return { ...state, armorBaseType: action.baseType };
      default:
        return state;
    }
  }
