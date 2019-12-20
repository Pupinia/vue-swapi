<template>
  <el-row>
    <person v-for="person in people" :key="person.id" :person="person" />
  </el-row>
</template>

<script>
import axios from "axios";

import Person from "@/components/Person";
export default {
  name: "PersonList",
  components: {
    Person
  },
  data() {
    return {
      people: null
    };
  },
  created() {
    axios
      .get("https://www.swapi.co/api/people")
      .then(res => (this.people = res.data.results));
  }
};
</script>
