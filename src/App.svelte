<script lang="ts">
  import { SimpleGrid, Button, Flex, Text } from "@svelteuidev/core";
  import { Symbol } from "radix-icons-svelte";
  import { state } from "./lib/stores";

  let words = ["", "", "", ""];
  const refresh = () => (words = $state.randomWords());
  if ($state.count() != 0) refresh();
</script>

<main>
  <div class="grid">
    <SimpleGrid cols={2}>
      <div class="word">{words[0]}</div>
      <div class="word">{words[1]}</div>
      <div class="word">{words[2]}</div>
      <div class="word">{words[3]}</div>
    </SimpleGrid>
  </div>

  <div class="footer">
    <div class="left">
      <Button on:click={refresh}>
        <Symbol />
      </Button>
      <Button>Edit Wordlist ({$state.count()})</Button>
    </div>
    <div class="right">
      <Text>Connor Slade &bull; <a href="/">Source</a></Text>
    </div>
  </div>
</main>

<style>
  .word {
    height: 200px;
    width: 600px;

    font-size: 100px;
    font-family: sans-serif;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    border: 1px solid #ccc;
  }

  main {
    height: 100vh;
  }

  .grid {
    width: fit-content;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .footer {
    width: calc(100vw - 30px);
    position: fixed;
    bottom: 0;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }

  .footer .left,
  .footer .right {
    display: flex;
    align-items: center;
    gap: 10px;
  }
</style>
