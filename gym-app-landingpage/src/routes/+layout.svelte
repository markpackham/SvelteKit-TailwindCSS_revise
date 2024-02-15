<script>
  import "../app.css";
  import Footer from "../components/Footer.svelte";

  let y;
  $: outerHeight = 0;
</script>

<slot />
<Footer />
<svelte:window bind:scrollY={y} bind:outerHeight/>