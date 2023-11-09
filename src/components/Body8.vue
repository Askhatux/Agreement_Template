<template>
  <div>
    <div class="title"> <b> 9.АДРЕСА И РЕКВИЗИТЫ СТОРОН.</b> </div>
    <div>
    <table class="table">
      <thead>
        <tr>
          <th><center>ПРОДАВЕЦ:</center></th>
          <th><center>ПОКУПАТЕЛЬ:</center></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>TOO "Test"</td>
          <td>наименование  ФИО: <span style="color:blue">{{fio}} </span></td>
        </tr>
        <tr>
          <td>Юр. адрес: г. Алматы, ул. Дундича д. 245</td>
          <td>Регистрация: <span style="color:blue">{{registration}} </span><br/>Место жительство: <span style="color:blue">{{living}} </span><br/>Телефон: <span style="color:blue">{{telnumber}} </span></td>
        </tr>
        <tr>
          <td>Почтовый адрес:00000</td>
          <td>Почтовый адрес: <span style="color:blue">{{mail}} </span></td>
        </tr>
        <tr>
          <td>БИН: 1111111111</td>
          <td>ИИН: <span style="color:blue">{{iin}} </span></td>
        </tr>
        <tr>
          <td>АО «KaspiBank» <br/>p/c: 11111111111 <br/>БИК: CASPKZKA</td>
          <td>Удост. личности №: <span style="color:blue">{{number1}} </span><br/>Выдано когда: <span style="color:blue">{{kogda}} </span>  . Кем: <span style="color:blue">{{kem1}} </span></td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    fio: String,
    registration: String,
    living: String,
    telnumber: String,
    mail: String,
    iin: String,
    number1: String,
    kogda: String,
    kem1: String
  }
};
</script>

<style scoped>
.title{
    text-align: center;
    width: 850px;
}
.table {
  width: 850px;
  border-collapse: collapse;
}

.table th,
.table td {
  border: 2px solid black;
  padding: 2px;
  text-align: left;
}

</style>
