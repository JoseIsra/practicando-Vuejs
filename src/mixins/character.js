const characterMixin = {
  // created() {
  //   this.chooseCharacter();
  // },
  methods: {
    chooseCharacter() {
      this.$store.commit('setCharacter', { name: this.name, status: this.status });
    },
  },
};
export default characterMixin;
