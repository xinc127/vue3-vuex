<template>
	<section>
		<header class="top_tips">
			<span class="num_tip" v-if="fatherComponent === 'home'">{{ level }}</span>
			<span class="num_tip" v-if="fatherComponent === 'item'">题目{{ itemNum }}</span>
			<span class="timer" v-if="fatherComponent === 'item'">{{ allTime }}</span>
		</header>
		<div v-if="fatherComponent === 'home'">
			<div class="home_logo item_container_style"></div>
			<div class="start button_style" @click="beginItem"></div>
		</div>
		<div v-if="fatherComponent === 'item'">
			<div class="item_back item_container_style">
				<div class="item_list_container">
					<header class="item_title">{{ itemDetail[itemNum - 1].topic_name }}</header>
					<ul>
						<li 
              class="item_list" 
							v-for="(item, index) in itemDetail[itemNum - 1].topic_answer"
							:key="index"
							@click="choosed(index, item.topic_answer_id)">
							<span class="option_style" :class="{ 'has_choosed' : choosedNum == index }">{{ chooseType(index) }}</span>
							<span class="option_detail">{{ item.answer_name }}</span>
						</li>
					</ul>
				</div>
			</div>
			<span class="next_item button_style" @click="nextItem" v-if="itemNum < itemDetail.length"></span>
			<span class="submit_item button_style" v-else @click="submitAnswer"></span>
		</div>
	</section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
	name: 'itemcontainer',
	data() {
		return {
			itemId: null, // 题目ID
			choosedNum: null, // 选中答案索引
			choosedId: null, // 选中答案id
		}
	},
	props: ['fatherComponent'],
	computed: {
		...mapState([
			'itemNum', // 第几题
			'level', // 第几周
			'itemDetail', // 题目详情
			'timer', // 计时器
			'allTime', // 总用时
		])
	},
	methods: {
		...mapActions([
			'addNum',
			'initializeData',
			'remberTime',
			'clearTime'
		]),
		// 点击开始
		beginItem() {
			this.$router.push({ name: 'item' })
			this.remberTime()
		},
		// 点击下一题
		nextItem() {
			if (this.choosedNum !== null) {
				this.choosedNum = null;
				// 保存答案,题目索引加一,调到下一题
				this.addNum(this.choosedId)
			} else {
				alert('您还没有选择答案哦')
			}
		},
		// 索引0-3对应答案A-D
		chooseType: type => {
			switch(type) {
				case 0: return 'A';
				case 1: return 'B';
				case 2: return 'C';
				case 3: return 'D';
			}
		},
		// 选中的答案信息
		choosed(type, id) {
			this.choosedNum = type;
			this.choosedId = id
		},
		// 提交答案
		submitAnswer() {
			if (this.choosedNum !== null) {
				this.addNum(this.choosedId)
				this.$router.push({ name: 'score' })
				this.clearTime()
			} else {
				alert('您还没有选择答案哦!')
			}
		}
	}
}
</script>


<style lang="scss" scoped>
.top_tips {
	position: absolute;
	width: 3.25rem;
	height: 7.35rem;
	top: -1.3rem;
	right: 1.6rem;
	background: url(../assets/WechatIMG2.png) no-repeat;
	background-size: 100% 100%;
	z-index: 10;
	.num_tip {
		position: absolute;
		left: 0.48rem;
		bottom: 1.1rem;
		width: 2.5rem;
		height: 0.7rem;
		font-size: 0.6rem;
		font-family: '黑体';
		font-weight: 600;
		color: #a57c50;
		text-align: center;
	}
	.timer {
		position: absolute;
		right: -1rem;
		top: 1.8rem;
		font-size: 0.8rem;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		background-color: pink;
		text-align: center;
		line-height: 1.5rem;
	}
}
.item_container_style {
	width: 13.15rem;
	height: 11.625rem;
	position: absolute;
	top: 4.1rem;
	left: 1rem;
	background-repeat: no-repeat;
}
	.home_logo {
		background-image: url(../assets/1-2.png);
		background-size: 13.142rem 100%;
		background-position: right center;
	}
	.item_back {
		background-image: url(../assets/2-1.png);
		background-size: 100% 100%;
	}
.button_style {
	display: block;
	width: 4.35rem;
	height: 2.1rem;
	background-size: 100% 100%;
	position: absolute;
	top: 16.5rem;
	left: 50%;
	margin-left: -2.4rem;
	background-repeat: no-repeat;
}
	.start {
		background-image: url(../assets/1-4.png);
	}
	.next_item {
		background-image: url(../assets/2-2.png);
	}
	.submit_item {
		background-image: url(../assets/3-1.png);	
	}
	.item_list_container {
		width: 8rem;
		height: 7rem;
		position: absolute;
		top: 2.4rem;
		left: 3rem;
		.item_title {
			font-size: 0.65rem;
			color: pink;
			line-height: 0.7rem;
		}
		.item_list {
			margin-top: 0.4rem;
			font-size: 0;
			span {
				display: inline-block;
				font-size: 0.6rem;
				color: pink;
				vertical-align: middle;
			}
			.option_style {
				border: 1px solid #fff;
				border-radius: 50%;
				width: 0.725rem;
				height: 0.725rem;
				line-height: 0.725rem;
				text-align: center;
				margin-right: 0.3rem; 
				font-size: 'Arial';
			}
			.has_choosed {
				background-color: #ffd400;
				color: #575757;
				border-color: #ffd400;
			}

		}
	}
</style>

