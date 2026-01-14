<template>
  <div class="bg-slate-800 rounded-lg p-4 border border-slate-700">
    <div class="size-20 sm:size-16 aspect-square mx-auto relative">
      <i :class="['icon', icon]"/>
    </div>
    <h3 class="text-lg font-semibold text-slate-100 mt-3">{{ name }}</h3>
    <p class="text-sm text-slate-400 mt-1">Количество: {{ count }} / {{ maxCount }}</p>
    <div class="flex items-center gap-2 mt-3 text-lg w-full">
      <button class="px-3 py-1 rounded-md bg-slate-700 text-slate-100 border border-slate-600 hover:bg-slate-600 active:bg-slate-700 cursor-pointer w-full duration-200 ease-in" @click="$emit('increment')">+</button>
      <button class="px-3 py-1 rounded-md bg-slate-700 text-slate-100 border border-slate-600 hover:bg-slate-600 active:bg-slate-700 cursor-pointer w-full duration-200 ease-in" @click="$emit('decrement')">-</button>
    </div>
    <button class="mt-3 w-full px-3 py-2 rounded-md bg-rose-700 text-white border border-rose-600 hover:bg-rose-600 active:bg-rose-800 cursor-pointer duration-200 ease-in" @click="$emit('delete')">Удалить</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  count: number;
  maxCount: number;
  icon: string;
}>();

defineEmits<{
  (e: 'increment'): void;
  (e: 'decrement'): void;
  (e: 'delete'): void;
}>();
</script>
