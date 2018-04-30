import ToastComponent from '../../src/components/common/toast.vue'

const Toast = {};
// 注册toast
Toast.install = function(Vue){
	// 生成一个VUE的子类
	// 同时这个子类也就是组建
	const toastConstructor = Vue.extend(ToastComponent)
	const instance = new toastConstructor();
	instance.$mount(document.createElement('div'))
	document.body.appendChild(instance.$el)
	Vue.prototype.$toast = (msg, duration = 1000) => {
		instance.message = msg;
		instance.visible = true;
		setTimeout(() => {
		  instance.visible = false;
		}, duration);
	  }
}
export default Toast;