// Global Svelte Kit store
import { writable } from "svelte/store";

// Global state (grab from anyware similar to Redux in React)
export const openModal = writable(false)