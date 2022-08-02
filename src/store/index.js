// import context from 'react-bootstrap/esm/AccordionContext'
import axios from 'axios'
import { createStore } from 'vuex'

const url = 'http://localhost:8080'

export default createStore({
  state: { // 전체 저장소 느낌
    titles: ['번호', '아이디', '이름', '이메일', '전화번호'],
    info1: [],
    info2: [],
    info3: [],
    name: 'chichi',
    isLogin: false,
    isLoginError: false,
    userInfo: null
  },
  getters: { // 데이터를 반복해서 가져올 경우 간편하게 접근하는 방법
    allUsersCount: function (state) {
      return state.titles.length
    },
    POSTDATA (state) {
      return state.info1
    }
  },
  mutations: { // state를 변화시키는 것
    addTitles: (state, payload) => {
      state.titles.push(payload)
    },
    // 로그인 성공시
    loginSuccess (state, payload) {
      state.isLogin = true
      state.isLoginError = false
      state.userInfo = payload
    },
    loginError (state) {
      state.isLogin = false
      state.isLoginError = true
    },
    logout (state) {
      state.isLogin = false
      state.isLoginError = false
      state.userInfo = null
    }
  },
  actions: { // state를 변화시키기위한 하나의 로직을 담는 것
    // addTitles: ({ commit }, payload) => {
    //   commit('addTitles', payload)
    // },
    login ({ commit }, loginObj) {
      axios
        .post(url + '/api/v1/user/login', loginObj)
        .then(res => {
          const token = res.data.data.accessToken
          const config = {
            headers: {
              accessToken: token
            }
          }
          axios
            .get(url + '/api/v1/user/7', config)
            .then(response => {
              console.log(response)
              const userInfo = {
                email: response.data.data.email,
                phone: response.data.data.phone,
                userId: response.data.data.userId,
                username: response.data.data.username,
                userNo: response.data.data.userNo
              }
              commit('loginSuccess', userInfo)
            })
            .catch(() => {
              alert('에러남')
            })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
)
