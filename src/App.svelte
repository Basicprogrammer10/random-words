<script lang="ts">
  import { SimpleGrid, Button, Flex } from "@svelteuidev/core";
  import { Symbol } from "radix-icons-svelte";
  import { state } from "./lib/stores";

  let words = ["", "", "", ""];
  const refresh = () => (words = $state.randomWords());
</script>

<main>
  <SimpleGrid cols={2}>
    <div class="word">{words[0]}</div>
    <div class="word">{words[1]}</div>
    <div class="word">{words[2]}</div>
    <div class="word">{words[3]}</div>
  </SimpleGrid>

  <div class="footer">
    <Flex gap={10}>
      <Button on:click={refresh}>
        <Symbol />
      </Button>
      <Button>Edit Wordlist {$state.count()}</Button>
    </Flex>
  </div>
</main>

<style>
  .word {
    font-size: 100px;
    font-family: sans-serif;
  }

  .footer {
    position: fixed;
    bottom: 0;
    padding: 20px;
  }
</style>
