const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		increment: state => state.count++,
		decrement: state => state.count--
	},
	// ACTIONS
	actions: {
		checkout ({ commit, state }, products) {
			// 把当前购物车的物品备份起来
			const savedCartItems = [...state.cart.added]
			// 发出结账请求,然后乐观的清空购物车
			commit(types.CHECKOUT_REQUEST)
			// 购物API接受一个成功回调和一个失败回调
			shop.buyProducts(
				products,
				// 成功操作
				() => commit(types.CHECKOUT_SUCCESS),
				// 失败操作
				() => commit(types.CHECKOUT_FAILURE, savedCartItems)
			)
		}
	}
})

new Vue({
	el: '#app',
	computed: {
		count () {
			return store.state.count
		}
	},
	methods: {
		increment () {
			store.commit('increment')
		},
		decrement () {
			store.commit('decrement')
		}
	},
})