export default (state = {number: 1}, action) => {
	if(action.type == 'INCREASE') {
		return {
			number: state.number + action.mount
		}
	}
	
	if(action.type == 'DECREASE') {
		return {
			number: state.number - action.mount
		}
	}
	
	return state
}