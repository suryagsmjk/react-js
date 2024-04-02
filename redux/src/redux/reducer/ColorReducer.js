let initailValue = {
    textColor: "white",
    bgcolor: { red: 0, green: 0, blue: 0 }
}

export function colorReducer(state = initailValue, action) {
    switch (action.type) {
        case "text":
            return { ...state, textColor: action.payload }
        case "bg":
            return { ...state, bgcolor: action.payload }
        default:
            return state;
    }
}