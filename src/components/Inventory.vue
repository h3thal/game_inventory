<template>
  <div class="
    w-full
    bg-slate-900
    rounded-xl
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    2xl:grid-cols-5
    gap-4
    border
    border-slate-800
    items-start
    auto-rows-min
    p-4
    relative
  ">
    <Item
      v-for="(item, index) in items" :key="item.key"
      :name="item.name"
      :icon="item.icon"
      :count="item.count"
      :maxCount="item.maxStack"
      @increment="itemsStore.incrementItemCount(index)"
      @decrement="itemsStore.decrementItemCount(index)"
      @delete="itemsStore.deleteItem(index)"
    />
    <WeightSummary />
  </div>
</template>

<script setup lang="ts">
import Item from './Item.vue';
import WeightSummary from './WeightSummary.vue';
import { useItemsStore } from '../store/items';
import { storeToRefs } from 'pinia';

const itemsStore = useItemsStore();

const {items} = storeToRefs(itemsStore);



</script>
