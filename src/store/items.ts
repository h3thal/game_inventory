import {ref, useId} from "vue";
import { defineStore } from "pinia";
import type { Item } from "../types/item";
import initState from './initialState.json';

export const useItemsStore = defineStore("items", () => {
const items = ref<Item[]>([]);
const addItem = (item: Item) => {
  items.value.push(item);
};
const incrementItemCount = (index: number) => {
  if (!items.value[index]) return 
  const isMax = items.value[index].count >= items.value[index].maxStack;
  if (isMax) {
    items.value.push({ ...items.value[index], count: 1, key: useId() });
  } else {
    items.value[index].count += 1;
  }

  saveToLocalStorage();
};

const decrementItemCount = (index: number) => {
  if (!items.value[index]) return 
  if (items.value[index].count > 1) {
    items.value[index].count -= 1;
  } else {
    deleteItem(index);
  }

  saveToLocalStorage();
}

const deleteItem = (index: number) => {
  if (!items.value[index]) return 
  items.value.splice(index, 1);

  saveToLocalStorage();
}

const saveToLocalStorage = () => {
  localStorage.setItem('items', JSON.stringify(items.value));
}

const getFromLocalStorage = () => {
  return localStorage.getItem('items');
}

const init = () => {
  const localItems = getFromLocalStorage();
  if (localItems !== null) {
    console.log(localItems)
    items.value = JSON.parse(localItems);
  } else {
    items.value = [...initState];
  }
  saveToLocalStorage();
}
return { items, addItem,incrementItemCount, decrementItemCount, deleteItem, deleteItem, init };
});