<template>
  <div class="sidebar">
    <input v-model="datetime" placeholder="1" />
    <input v-model="individual" placeholder="2" />
    <input v-model="number" placeholder="3" />
    <input v-model="kem" placeholder="4" />
    <input v-model="address" placeholder="5" />
    <input v-model="tenge" placeholder="6" />
    <input v-model="fio" placeholder="7" />
    <input v-model="registration" placeholder="8" />
    <input v-model="living" placeholder="9" />
    <input v-model="telnumber" placeholder="10" />
    <input v-model="mail" placeholder="11" />
    <input v-model="iin" placeholder="12" />
    <input v-model="number1" placeholder="13" />
    <input v-model="kogda" placeholder="14" />
    <input v-model="kem1" placeholder="15" />
    <button @click="updateAgreement">Update Agreement</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      datetime: '',
      individual: '',
      number: '',
      kem: '',
      address: '',
      tenge: '',
      fio: '',
      registration: '',
      living: '',
      telnumber: '',
      mail: '',
      iin: '',
      number1: '',
      kogda: '',
      kem1: ''
    };
  },
  methods: {
    ...mapActions(['update']),
    updateAgreement() {
      this.update({ datetime: this.datetime, individual: this.individual, 
      number: this.number, kem: this.kem, address: this.address, tenge: this.tenge, fio: this.fio,
      registration: this.registration, living: this.living, telnumber: this.telnumber, mail: this.mail, iin: this.iin,
      number1: this.number1, kogda: this.kogda, kem1: this.kem1, });
    }
  }
};
</script>

<style>
.sidebar {
  width: 200px;
  padding: 20px;
  background: #b8b6b6;
  font-family: 'Times New Roman', serif;
}

.sidebar input{
  padding:10px;
}
</style>
