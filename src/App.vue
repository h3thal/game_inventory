<template>
  <div class="min-h-screen flex flex-col p-2 md:p-4 container mx-auto">
    <div class="bg-slate-900 text-slate-100 rounded-xl border border-slate-800">
      <h1 class="text-2xl font-bold px-4 py-3 text-center">Game Inventory</h1>
    </div>
    <div class="flex flex-col flex-1 gap-4 mt-4">
      <Inventory />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Inventory from './components/Inventory.vue';
import { useItemsStore } from './store/items';

const itemsStore = useItemsStore();

onMounted(() => {
  itemsStore.init();
});
</script>
