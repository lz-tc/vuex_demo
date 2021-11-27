/*
 * @version: 1.0
 * @Author: Lee
 * @Date: 2021-11-26 20:50:16
 * @LastEditTime: 2021-11-27 16:13:20
 */
import { createStore } from 'vuex'

export default createStore({
  state: {
    Counter: 0
  },
  //对state进行筛选等处理
  getters:{

  },
  //1、更改state的唯一方法,不可在其他地方更改,在局部组件访问state是只读属性
  //2、Mutation 必须是同步函数，不能在mutation中执行异步函数
  //执行--提交，this.$store.commit
  mutations: {
    addNumber(state,number){
      state.Counter += number;
    },
    minusNumber(state,number){
      state.Counter -= number;
    }
  },
  //类似于 mutation，不同在于：
    // 1、Action 提交的是 mutation，而不是直接变更状态。
    // 2、Action 可以包含任意异步操作。
  //执行--也叫分发，this.$store.dispatch
  actions: {
    addNumberAsync({commit}){
      setTimeout(()=>{
        commit("addNumber",10)
      },1000)
    },
    //----async和await嵌套使用
    // async actionA ({ commit }) {
    //   commit('gotData', await getData())
    // },
    // async actionB ({ dispatch, commit }) {
    //   await dispatch('actionA') // 等待 actionA 完成
    //   commit('gotOtherData', await getOtherData())
    // }
  },
  //Vuex 允许我们将 store 分割成模块（module）。
  //每个模块拥有自己的 state、mutation、action、getter
  //甚至是嵌套子模块——从上至下进行同样方式的分割
  modules: {
    foo: {
      namespaced: true,
      mutations:{

      },
      actions: {
        // someAction: {
        //   root: true,
        //   handler (namespacedContext, payload) { } // -> 'someAction'
        // }
      }
    }
  }
})


//Vuex 并不限制你的代码结构。但是，它规定了一些需要遵守的规则：

//1 应用层级的状态应该集中到单个 store 对象中。

//2 提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。

//3 异步逻辑都应该封装到 action 里面。

//4 如果你的 store 文件太大，只需将 action、mutation 和 getter 分割到单独的文件。