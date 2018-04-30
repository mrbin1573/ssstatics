import ConfirmComponent from '../../src/components/common/confirm.vue'

const Confirm = {};
// 注册toast
Confirm.install = function(Vue){
	// 生成一个VUE的子类
	// 同时这个子类也就是组建
	const ConfirmConstructor = Vue.extend(ConfirmComponent)
	const instance = new ConfirmConstructor();
	instance.$mount(document.createElement('div'))
	document.body.appendChild(instance.$el)
	Vue.prototype.$confirm = (msg, cancel, sure) => {
		instance.message = msg;
		instance.visible = true;
		instance.cancel = cancel;
		instance.sure = sure;
	  }
}
export default Confirm;