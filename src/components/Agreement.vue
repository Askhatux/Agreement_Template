<template>
  <div class="agreement">
    <Header :datetime="datetime" :individual="individual" :number="number" 
    :kem="kem" :address="address" />
    <Body />
    <Body1 />
    <Body2 :tenge="tenge"/>
    <Body3 />
    <Body4 />
    <Body5 />
    <Body6 />
    <Body7 />
    <Body8 :fio="fio" :registration="registration" :living="living" :mail="mail" :iin="iin" :number1="number1" :kogda="kogda" :kem1="kem1" :telnumber="telnumber"/>
  </div>
</template>

<script>
import Header from './Header.vue';
import Body from './Body.vue'
import Body1 from './Body1.vue'
import Body2 from './Body2.vue'
import Body3 from './Body3.vue'
import Body4 from './Body4.vue'
import Body5 from './Body5.vue'
import Body6 from './Body6.vue'
import Body7 from './Body7.vue'
import Body8 from './Body8.vue'
import { mapState } from 'vuex';

export default {
  components: {
    Header,
    Body,
    Body1,
    Body2,
    Body3,
    Body4,
    Body5,
    Body6,
    Body7,
    Body8
  },
  computed: {
    ...mapState(['datetime', 'individual', 'number', 'kem', 'address', 'tenge', 'fio',
    'registration', 'living', 'mail', 'iin', 'number1', 'kogda', 'kem1', 'telnumber'])
  }
};
</script>

<style>
.agreement {
  padding: 20px;
  width: 70%;
  font-family: 'Times New Roman', serif;
}
</style>
