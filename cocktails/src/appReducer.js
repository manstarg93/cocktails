export const actionTypes = {
  searchText: 'SEARCH_TEXT',
};

const appReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.searchText:
      return {
        ...state,
        searchText: payload,
      };

    default:
      return state;
  }
};

export default appReducer;
