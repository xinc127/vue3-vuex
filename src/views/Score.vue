<template>
	<div class="main_container">
		<div class="your_scores_container">
			<header class="your_scores">
				<span class="score_num">{{ score }}</span>
				<span class="score_name">分!</span>
			</header>
			<div class="result_tip">{{ scoreTips }}</div>
		</div>
		<div class="share_button" @click="showCover = !showCover"></div>
		<div class="share_cover" @click="showCover = !showCover" v-if="showCover">
			<img class="share_img" src="@/assets/5-2.png" alt="">
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	name: 'score',
	data() {
		return {
			showCover: false,
			score: 0, // 分数
			scoreTips: '', // 分数提示
			rightAnswer: [2, 7, 12, 13, 18], // 正确答案
			scoreTipsArr: ['你说,是不是把知识都还给小学老师来了?', '还不错,但还需要继续加油哦!', '不要嘚瑟还有进步的空间!', '智商离爆表只差一步了!', '你怎么这么聪明呢!']
		}
	},
	computed: {
		...mapState([
			'answerid'
		])
	},
	mounted() {
		this.computedScore()
		this.getScoreTip()
	},
	methods: {
		// 计算分数
		computedScore() {
			this.answerid.forEach((item, index) => {
				if (item == this.rightAnswer[index]) {
					this.score += 20;
				}
			})
		},
		getScoreTip() {
			let index = Math.ceil(this.score/20)-1;
			this.scoreTips = this.scoreTipsArr[index]
		}
	}
}
</script>


<style lang="scss">
.main_container {
	background-image: url(../assets/4-1.jpg);
	padding-top: 3.7rem;
	height: 100vh;
}
.your_scores_container {
	width: 9.7rem;
	height: 9.1rem;
	background: url(../assets/4-2.png) no-repeat;
	background-size: 100% 100%;
	margin: 0 auto 0;
	position: relative;
	.your_scores {
		position: absolute;
		top: 4.7rem;
		left: 3.3rem;
		font-size: 1.4rem;
		font-weight: 900;
		-webkit-text-stroke: 0.05rem #412318;
		font-family: 'Microsoft YaHei';
		span {
			color: #a51d31;
		}
		span.score_num {
			font-family: Tahoma, Helvetica, Arial;
		}
	}
	.result_tip {
		position: absolute;
		top: 7rem;
		left: 0.6rem;
		width: 9rem;
		color: #3e2415;
		font-size: 0.65rem;
		text-align: center;
	}
}
.share_button {
	width: 6.025rem;
	height: 2.4rem;
	margin: 0.8rem auto 0;
	background: url(../assets/4-3.png) no-repeat 0.4rem 0;
	background-size: 100% 100%;
}
.share_cover {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 10;
	background: url(../assets/5-1.png) no-repeat;
	.share_img {
		width: 11.95rem;
		height: 10.975rem;
		position: fixed;
		top: 0.5rem;
		left: 50%;
		transform: translate(-50%);
	}
}
</style>

