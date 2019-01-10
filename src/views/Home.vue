<template>
	<div>
		<itemcontainer father-component="home"></itemcontainer>
	</div>
</template>

<script>
import itemcontainer from '../components/itemcontainer'
import { mapActions } from 'vuex'

export default {
	name: 'home',
	components: {
		itemcontainer
	},
	mounted() {
		this.initializeData()
	},
	methods: {
		...mapActions([
			'initializeData'
		])
	}
}
</script>
