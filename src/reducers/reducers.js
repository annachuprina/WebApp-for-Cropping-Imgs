  const imgs = (state = [], action) => {
    switch (action.type) {
      case 'ADD_IMG':
        return [
          ...state,
          {
            src: action.src,
            completed: false
          }
        ]
      default:
        return state
    }
  }

  export default imgs