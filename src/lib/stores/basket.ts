import { persisted } from "svelte-persisted-store";

export const basket = persisted("basket", [] as { [key: number | string]: any }[]);
