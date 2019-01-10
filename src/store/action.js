
export default {
	addNum({ commit, state }, id) {
		// 点击下一题,记录答案id,判断是否是最后一题,如果不是则跳转下一题
		commit('REMBER_ANSWER', id);
		if (state.itemNum < state.itemDetail.length) {
			commit('ADD_ITEMNUM', 1);
		}
	},
	// 初始化信息
	initializeData({ commit }) {
		commit('INITIALIZE_DATA');
	},
	// 点击开始记录时间
	remberTime({ commit }) {
		commit('REMBER_TIME');
	},
	// 点击提交结束记录
	clearTime({ commit }) {
		commit('CLEAR_TIME');
	}
}