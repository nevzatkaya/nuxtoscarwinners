<template>
  <div>
    <div :key="index" v-for="(item,index)  in categories">
      <h6 class="text-success">{{item}}</h6>
      <table class="table table-bordered table-hover">
        <tr :key="i" v-for="(nominee,i) in entitylist.filter(a=>a.category==item)">
          <td :class="{'text-info font-weight-bold':nominee.winner,'text-white':nominee.winner}">
            <span v-if="nominee.winner">Oscar goes to</span>
            <button
              type="button"
              @click="goGoogle(nominee.entity,nominee.year)"
              class="btn btn-link text-dark"
            >{{nominee.entity}}</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import firebaseDb from "./firebaseInit";
export default {
  data() {
    return {
      YearList: [],
      selectedYear: "2018"
    };
  },
  head() {
    return {
      title: "Oscar Winners home page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "List oscars for an actor,director etc."
        }
      ]
    };
  },

  methods: {
    goGoogle(entity, year) {
      window.open(
        "http://google.com/search?q=" + entity + " oscar in " + year,
        "_blank"
      );
    }
  },
  async asyncData() {
    let vm = this;
    let refDb = firebaseDb.collection("OscarsWinner").where("year", "==", 2018);
    let categories = [];
    let entitylist = [];
    await refDb.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        if (!categories.includes(doc.data().category)) {
          categories.push(doc.data().category);
        }
        entitylist.push(doc.data());
      });
    });
    return {
      categories: categories,
      entitylist: entitylist
    };
  }
};
</script>

<style>
</style>
