import { persisted } from "svelte-persisted-store";

export const basket = persisted("basket", [] as object[]);
