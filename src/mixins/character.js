const characterMixin = {
  created() {
    this.chooseCharacter();
  },
  methods: {
    chooseCharacter() {
      this.$emit('go-there', { name: this.name, id: this.id });
      this.$bus.$emit('set-character', { name: this.name, id: this.id, status: this.status });
    },
  },
};
export default characterMixin;
