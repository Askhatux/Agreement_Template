<template>
  <div class="sidebar">
    <input v-model="datetime" placeholder="Заполните дату (1)" title="Дата"/>
    <input v-model="individual" placeholder="Ваше ФИО (2)" />
    <input v-model="number" placeholder="Номер документа (3)" />
    <input v-model="kem" placeholder="Орган выдачи (4)" />
    <input v-model="address" placeholder="Адрес проживания (5)" />
    <input v-model="tenge" placeholder="Сумма в тенге (6)" />
    <input v-model="fio" placeholder="Ваше ФИО (7)" />
    <input v-model="registration" placeholder="Регистрация (8)" />
    <input v-model="living" placeholder="Место жительства (9)" />
    <input v-model="telnumber" placeholder="Номер телефона (10)" />
    <input v-model="mail" placeholder="Почтовый адрес (11)" />
    <input v-model="iin" placeholder="ИИН (12)" />
    <input v-model="number1" placeholder="Номер документа (13)" />
    <input v-model="kogda" placeholder="Срок выдачи удос-я (14)" />
    <input v-model="kem1" placeholder="Орган выдачи документа (15)" />
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
