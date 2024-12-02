import { defineStore } from 'pinia';
import type { User } from '~/types/UserType';

export const userStore = defineStore("user", () => {
    const user = ref<User | null>(null);
});
