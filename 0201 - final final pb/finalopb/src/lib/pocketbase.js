import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

const pb = new PocketBase('https://hissing-machine.pockethost.io');

export const loggedUser = writable(pb.authStore.model);

pb.authStore.onChange(() => {
    loggedUser.set(pb.authStore.model);
});