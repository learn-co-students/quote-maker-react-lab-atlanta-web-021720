export default (state = [], action) => {
  let i, newState;
  switch(action.type) {
    case "ADD_QUOTE":
      return [
        ...state,
        action.quote

      ];
    case "REMOVE_QUOTE":
      i = state.findIndex(quote => quote.id === action.quoteId)
      return [
        ...state.slice(0, i), ...state.slice(i + 1)
      ];
    case "UPVOTE_QUOTE":
      i = state.findIndex(quote => quote.id === action.quoteId)
      newState = [...state]
      newState[i].votes += 1
      return newState;
    case "DOWNVOTE_QUOTE":
      i = state.findIndex(quote => quote.id === action.quoteId)
      newState = [...state]
      if (newState[i].votes > 0) {
        newState[i].votes -= 1
      }
      return newState;
    default:
      return state
  }

}
