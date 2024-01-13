<script lang="ts">
  import type { Writable } from "svelte/store";
  import { Modal, Button, Textarea, Flex } from "@svelteuidev/core";

  import defaultWords from "./words.json";
  import { state } from "./stores";

  export let open: Writable<boolean>;
  let words = $state.words.join("\n");

  const modalClose = () => {
    $state.words = words.trim().split("\n");
    $open = false;
  };

  const reset = () => {
    words = defaultWords.join("\n");
  };
</script>

<Modal
  opened={$open}
  on:close={() => ($open = false)}
  title={"Edit Word List"}
  size="lg"
>
  <Textarea
    label="List of words to choose from, one per line. At least four words are required."
    resize="vertical"
    rows={10}
    bind:value={words}
  ></Textarea>
  <br />

  <Flex gap={10}>
    <Button variant="outline" on:click={modalClose}>Save</Button>
    <Button variant="outline" on:click={reset}>Reset</Button>
  </Flex>
</Modal>
