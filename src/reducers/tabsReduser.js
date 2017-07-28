import changeTab from "../actions/changeTab"

export default function reducer(state = {
  selected: 0
}, action)
{
  switch (action.type) {
    case "CHANGE_TAB":
      return { selected: action.selected }
    default:
      return state;
  }
}
