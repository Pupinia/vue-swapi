<template>
  <div>
    <div>{{ person.name }}</div>
    <div>{{ person.height }}</div>
  </div>
</template>

<script>
export default {
  name: "Person",
  props: {
    person: {
      type: Object,
      required: true
    }
  }
};
</script>