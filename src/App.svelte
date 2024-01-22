<script lang="ts">
  import { writable } from "svelte/store";
  import {
    SvelteUIProvider,
    SimpleGrid,
    Button,
    Text,
  } from "@svelteuidev/core";
  import { Symbol } from "radix-icons-svelte";

  import { state } from "./lib/stores";
  import WordsModal from "./lib/WordsModal.svelte";

  const DEFAULT_WORDS = ["", "", "", ""];
  let words = DEFAULT_WORDS;
  const refresh = () =>
    (words = $state.count() >= 4 ? $state.randomWords() : DEFAULT_WORDS);
  if ($state.count() != 0) refresh();

  let wordsModal = writable(false);
</script>

<svelte:head>
  <title>Random Word Gen</title>
</svelte:head>

<SvelteUIProvider class="main">
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
        <Button on:click={() => ($wordsModal = true)}>
          Edit Wordlist ({$state.count()})
        </Button>
      </div>
      <div class="right">
        <Text>Connor Slade &bull; <a href="https://github.com/Basicprogrammer10/random-words">Source</a></Text>
      </div>
    </div>

    <WordsModal open={wordsModal} />
  </main>
</SvelteUIProvider>

<style>
  .word {
    height: 18.5vh;
    min-width: 600px;
    width: 32vw;

    font-size: min(10vw, 10vh);
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
