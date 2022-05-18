const actiontypes = () => {
    return {
       
        events: {
            setEvents: 'SET_EVENTS',
            loading: 'LOADING',
            failure: 'EVENT_FAILURE',
            addNewItem: 'ADD_NEW_ITEM'
        },
        event: {
            loadEvent: 'LOAD_EVENT',
            loadEventSuccess: 'LOAD_EVENT_SUCCESS',
            loadEventFailure: 'LOAD_EVENT_FAILURE',
            clearEvent: 'CLEAR_POST'
        },
        auth: {
            loading: 'AUTH_LOADING',
            authFailure: 'AUTH_FAILURE',
            authSuccess: 'AUTH_SUCCESS',
            logout: 'LOGOUT'
        }
    }
}

export default actiontypes;