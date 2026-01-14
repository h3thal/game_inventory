<template>
  <div class="col-span-full flex justify-end sticky bottom-0 md:bottom-4">
    <div
      class="
        w-full
        md:w-auto
        md:min-w-[220px]
        bg-slate-800/70
        text-slate-100
        border
        border-slate-700/60
        rounded-2xl
        shadow-lg
        px-4
        py-3
        text-center
        font-semibold
        backdrop-blur
      "
    >
      {{ totalWeight }}
    </div>
  </div>
</template>


<script setup lang="ts">
import { computed } from 'vue';
import { useItemsStore } from '../store/items';
import { storeToRefs } from 'pinia';

const itemsStore = useItemsStore();
const { items } = storeToRefs(itemsStore);

const totalWeight = computed(() => {
  if (!items.value.length) return '0 г';
  const weight = items.value.reduce((acc, item) => acc + item.weight * item.count, 0);

  if (weight < 1500) {
    return weight + ' г';
  } else {
    return (weight / 1000).toFixed(2) + ' кг';
  }
});
</script>
