<template>
    <div>
        <h1>{{ part.title }}</h1>
        <div>
            {{  part.description }}
        </div>
    </div>
</template>

<script>
import parts from '@/data/parts';

export default {
  name: 'PartInfo',
  props: {
    id: {
      type: Number,
      required: true,
      validator(value) {
        return Number.isInteger(value);
      },
    },
    partType: {
      type: String,
      required: true,
    },
  },
  computed: {
    part() {
      const { id, partType } = this;

      return parts[partType].find((part) => part.id === +id);
    },
  },
};
</script>
