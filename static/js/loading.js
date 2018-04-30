import LoadingComponent from '../../src/components/common/loading.vue'

const Loading = {};
// 注册toast
Loading.install = function(Vue){
	// 生成一个VUE的子类
	// 同时这个子类也就是组建
	const LoadingConstructor = Vue.extend(LoadingComponent)
	const instance = new LoadingConstructor();
	instance.$mount(document.createElement('div'))
	document.body.appendChild(instance.$el)
	Vue.prototype.$loading = (callback) => {
		instance.visible = true;
		instance.callback = callback;
	  }
}
export default Loading;