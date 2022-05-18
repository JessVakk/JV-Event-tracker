const actiontypes = () => {
    return {
        auth: {},
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
        }
    }
}

export default actiontypes;