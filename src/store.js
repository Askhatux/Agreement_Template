import { createStore } from 'vuex';

export default createStore({
  state: {
    datetime: '"__"_____1______',
    individual: '_________2__________',
    number: '____3____',
    kem: '____4____',
    address: '________________5________________________',
    tenge: '_____6______ ',
    fio:'_7_',
    registration:'_8_',
    living:'_9_',
    telnumber:'_10_',
    mail:'_11_',
    iin:'_12_',
    number1:'_13_',
    kogda: '_14_',
    kem1: '_15_'

  },
  mutations: {
    SET_PARAMETERS(state, { datetime, individual, number, kem, address, tenge, fio, registration, living, telnumber, mail, number1, kogda, kem1, iin}) {
      state.datetime = datetime;
      state.individual = individual;
      state.number = number;
      state.kem = kem;
      state.address = address;
      state.tenge = tenge;
      state.fio = fio;
      state.registration = registration;
      state.living = living;
      state.telnumber = telnumber;
      state.mail = mail;
      state.number1 = number1;
      state.kogda = kogda;
      state.kem1 = kem1;
      state.iin = iin;
    }
  },
  actions: {
    update({ commit }, { datetime, individual, number, kem, address, tenge, fio, registration, living, telnumber, mail, number1, kogda, kem1, iin }) {
      commit('SET_PARAMETERS', { datetime, individual, number, kem, address, tenge, fio, registration, living, telnumber, mail, number1, kogda, kem1, iin});
    }
  },
  modules: {}
});
