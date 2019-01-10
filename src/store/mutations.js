const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const CLEAR_TIME = 'CLEAR_TIME'
const INITIALIZE_DETA = 'INITIALIZE_DETA'

export default {
	// 点击进入下一题
	[ADD_ITEMNUM](state, num) {
		state.itemNum += num
	},
	// 记录答案
	[REMBER_ANSWER](state, id) {
		state.answerid.push(id);
	},
	/**
	 * 记录做题时间
	 */
	[REMBER_TIME](state) {
		state.timer = setInterval(() => {
			console.log('111')
			state.allTime++;
		}, 1000)
	},
	/**
	 * 清除做题时间
	 */
	[CLEAR_TIME](state) {
		window.clearInterval(state.timer)
	},
	/**
	 * 初始化信息
	 */
	[INITIALIZE_DETA](state) {
		state.itemNum = 1;
		state.allTime = 0;
		state.answerid = [];
	}
}
