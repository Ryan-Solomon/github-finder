



const alertReducer = (state, action) {
    switch (action.type) {
        case "SET_ALERT":
            return {
                alert: true
            }
        throw new Error('Unsupported type')
    }
}