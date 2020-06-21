<template>
  <div>
    <div class="jumbotron">
      <h1>See Oscar Results</h1>
      <p>Search via actor name ,director name , movie name etc..</p>
      <div class="row">
        <div class="col-4">
          <input
            type="text"
            v-model="keyword"
            @keydown.enter="showSearch"
            placeholder="Search"
            class="form-control"
          />
        </div>
        <div class="col-4">
          <button type="button" class="btn btn-secondary" @click="showSearch">Search</button>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12">
        <select
          @change="FilterDataByYear"
          v-model="selectedYear"
          id="inputYear"
          class="form-control"
        >
          <option selected>Choose year</option>
          <option :key="index" v-for="(item,index) in YearList">{{item}}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      YearList: [],
      keyword: "",
      selectedYear: "2018"
    };
  },
  mounted() {
    let i;
    for (i = 1927; i < 2019; i++) {
      this.YearList.push(i);
    }
  },
  name: "Header",
  methods: {
    showSearch() {
      this.$router.push("/SearchOscars/" + this.keyword);
    },
    FilterDataByYear() {
      this.$router.push("/SearchByYear/" + this.selectedYear);
    }
  }
};
</script>

<style  scoped>
.jumbotron {
  position: relative;
  background: #000;
  color: white;
  background-image: url("../assets/oscar.jpg");
}
</style>