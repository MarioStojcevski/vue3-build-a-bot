<template>
    <div>
        <div class="header">
            <span v-if="open" >
                <button @click="toggle">Collapse</button>
            </span>
            <span v-else>
                <button @click="toggle">Expand</button>
            </span>
        </div>
    <slot v-if="open"></slot>
    </div>
</template>

<script>
export default {
  name: 'CollapsibleSection',
  data() {
    return {
      open: true,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style scoped>
.header {
    background-color: gray;
    padding: 3px;
    cursor: pointer;
    margin-left: auto;
    width: 205px;
}
</style>
