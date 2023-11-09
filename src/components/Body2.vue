<template>
  <div class="header">
    <div class="title"> <b> 3. ПОРЯДОК РАСЧЕТОВ И СУММА ДОГОВОРА </b> </div>
    <div class="text31">3.1. Цена Товара и дополнительных услуг определяется в момент заключения Основного Договора:</div>
    <div class="text311">3.1.1. в момент заключения Договора предоплаты Покупатель вносит предоплату на счет Продавца в размере <span style="color:blue">{{tenge}} </span> тенге;</div>
    <div class="text312">3.1.2. оставшуюся сумму Покупатель оплачивает в момент заключения Основного Договора.</div>
  </div>
</template>

<script>
export default {
  props: {
    tenge: Number,
  }
};
</script>

<style scoped>
.title{
    text-align: center;
}

.text31, .text311, .text312{
      text-indent: 50px;
      text-align: justify;

}
</style>
