<template>
  <div class="header">
    <div class="title">Договор предоплаты купли-продажи набора кухонной мебели</div>
    <div class="mini">
      <div class="city">
        <div>г.Алматы</div>
        <div><span style="color:blue">{{datetime}} </span> 2023 г.</div>
      </div>
      <p class="udos"><b>ТОО «Test» </b> в лице директора Иванов Иван, действующего на основании Устава, именуемое в дальнейшем «Продавец», с одной стороны, и гр. <span style="color:blue">{{individual}} </span> уд.личности: № <span style="color:blue">{{number}} </span>, выданный <span style="color:blue">{{kem}} </span>, проживающий по адресу: <span style="color:blue">{{address}} </span>, именуемый в дальнейшем «Покупатель», с другой стороны, заключили настоящий Договор предоплаты о нижеследующем:
</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datetime: String,
    individual: String,
    kem: String,
    number: String,
    address: String,
  }
};
</script>

<style>
.header {
  margin-bottom: 20px;
  font-family: 'Times New Roman', serif;
  font-size: 10;
  display: flex;
  flex-direction: column;
  width: 850px;
}

.title {
  font-weight: bold;
  text-align: center;
}

.city {
  display: inline-flex;
  justify-content: space-between;
  padding-right: 50px;
  margin-top: 20px;
}

.mini {
  display: flex;
  flex-direction: column;
}

.udos {
  margin-top: 20px;
  text-indent: 70px;
  text-align: justify;
}
</style>
