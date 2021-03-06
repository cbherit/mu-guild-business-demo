import order_history_api from '@/api/order_history'
import Vue from 'vue'

const state = {
  my_mu_server_order_history: [],
}

const actions = {
  fetchMyMUServerOrderHistoryByMuServerIdAndUserAccountLoggedIn({ commit }, { mu_server_id, user_account_nickname }) {
    commit('receive_my_mu_server_order_history', order_history_api.getAllByMUServerIdAndUserAccountNickname(mu_server_id, user_account_nickname))
  },
  finishOrder({ getters }, orderHistoryItem) {
    orderHistoryItem.order = getters['getCurrentOrder']
    order_history_api.save(orderHistoryItem)
    this.dispatch('refreshMyMUServerOrderHistory')
    Vue.noty.success("Your order was finished!")
  },
}

const mutations = {
  receive_my_mu_server_order_history(state, my_mu_server_order_history) {
    state.my_mu_server_order_history = my_mu_server_order_history
  },

}

const getters = {
  getMyMUServerOrderHistory(state) {
    return state.my_mu_server_order_history
  },
}

export default {
  state,
  actions,
  mutations,
  getters
}
