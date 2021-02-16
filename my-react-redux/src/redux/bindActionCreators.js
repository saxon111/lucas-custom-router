
function bindActionCreator(actionCreator, dispatch) {
    return function (...args){
        console.log(this,args)
        return dispatch(actionCreator.apply(this, args))
    }
}

function bindActionCreators (actionsCreators, dispatch) {
    const boundActionCreators = {}
    for (const key in actionsCreators) {
        const actionCreator = actionsCreators[key]
        boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
    }
    return boundActionCreators
}

export default bindActionCreators