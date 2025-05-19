import { onCleanup, onMount } from "solid-js"
import { createRoot } from "solid-js";

const pageSize = () => {

  onMount(() => {
    console.log("pagesize onmount");
  })

  onCleanup(() => {
    console.log("pagesize oncleanup");
  })

  return 100;
}

export default createRoot(pageSize);
