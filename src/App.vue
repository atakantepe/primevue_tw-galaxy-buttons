<template>
  <div
    class="min-h-screen bg-surface-0 dark:bg-surface-900 bg-gradient-to-tl from-surface-0 to-surface-50 dark:from-black dark:to-surface-700/80  p-8 flex items-center justify-center transition-colors duration-200"
  >
    <div
      class="fixed w-full top-0 left-0 flex items-center justify-end gap-3 p-8"
    >
      <DarkToggle />
      <ColorPalette />
    </div>

    <div
      class="p-12 shadow-md bg-gradient-to-tl from-surface-0 to-surface-50 dark:from-surface-900 dark:to-surface-700/60 dark:border dark:border-surface-700 rounded-md"
    >
      <h1
        class="text-xl font-extralight text-surface-700 dark:text-surface-0/80 mb-1"
      >
        Galaxy Custom Preset Buttons
      </h1>
      <p class="p-0 m-0 mb-8 text-md font-light text-surface-700 dark:text-surface-0/60">These PrimeVue buttons styled with custom tailwind classes. (BasePreset: Wind)</p>
      <div
        class="pt-3 pb-5 px-5 bg-gradient-to-tr from-surface-50 to-surface-100/60 dark:from-surface-700/80 dark:to-surface-600/40 rounded-md shadow-inner"
      >
        <h3
          class="text-sm font-light text-surface-700 dark:text-surface-0/80 mb-3"
        >
          Severity
        </h3>
        <div class="flex justify-start flex-wrap gap-3">
          <Button label="Primary" />
          <Button label="Secondary" severity="secondary" />
          <Button label="Success" severity="success" />
          <Button label="Info" severity="info" />
          <Button label="Warning" severity="warning" />
          <Button label="Help" severity="help" />
          <Button label="Danger" severity="danger" />
        </div>
      </div>
      <div
        class="pt-3 pb-5 px-5 bg-gradient-to-tr from-surface-50 to-surface-100/60 dark:from-surface-700/80 dark:to-surface-600/40 rounded-md shadow-inner mt-6"
      >
        <h3
          class="text-sm font-light text-surface-700 dark:text-surface-0/80 mb-3"
        >
          Rounded
        </h3>
        <div class="flex justify-start flex-wrap gap-3">
          <Button label="Primary" />
          <Button label="Secondary" severity="secondary" />
          <Button label="Success" severity="success" />
          <Button label="Info" severity="info" />
          <Button label="Warning" severity="warning" />
          <Button label="Help" severity="help" />
          <Button label="Danger" severity="danger" />
        </div>
      </div>
      <div
        class="pt-3 pb-5 px-5 bg-gradient-to-tr from-surface-50 to-surface-100/60 dark:from-surface-700/80 dark:to-surface-600/40 rounded-md shadow-inner mt-6"
      >
        <h3
          class="text-sm font-light text-surface-700 dark:text-surface-0/80 mb-3"
        >
          Rounded
        </h3>
        <div class="flex justify-start flex-wrap gap-3">
          <Button label="Primary" rounded />
        <Button label="Secondary" severity="secondary" rounded />
        <Button label="Success" severity="success" rounded />
        <Button label="Info" severity="info" rounded />
        <Button label="Warning" severity="warning" rounded />
        <Button label="Help" severity="help" rounded />
        <Button label="Danger" severity="danger" rounded />
        </div>
      </div>
      <div
        class="pt-3 pb-5 px-5 bg-gradient-to-tr from-surface-50 to-surface-100/60 dark:from-surface-700/80 dark:to-surface-600/40 rounded-md shadow-inner mt-6"
      >
        <h3
          class="text-sm font-light text-surface-700 dark:text-surface-0/80 mb-3"
        >
          Outlined
        </h3>
        <div class="flex justify-start flex-wrap gap-3">
          <Button label="Primary" outlined />
        <Button label="Secondary" severity="secondary" outlined />
        <Button label="Success" severity="success" outlined />
        <Button label="Info" severity="info" outlined />
        <Button label="Warning" severity="warning" outlined />
        <Button label="Help" severity="help" outlined />
        <Button label="Danger" severity="danger" outlined />
        </div>
      </div>
      <div
        class="pt-3 pb-5 px-5 bg-gradient-to-tr from-surface-50 to-surface-100/60 dark:from-surface-700/80 dark:to-surface-600/40 rounded-md shadow-inner mt-6"
      >
        <h3
          class="text-sm font-light text-surface-700 dark:text-surface-0/80 mb-3"
        >
          Text
        </h3>
        <div class="flex justify-start flex-wrap gap-3">
          <Button label="Primary" text />
        <Button label="Secondary" severity="secondary" text />
        <Button label="Success" severity="success" text />
        <Button label="Info" severity="info" text />
        <Button label="Warning" severity="warning" text />
        <Button label="Help" severity="help" text />
        <Button label="Danger" severity="danger" text />
        </div>
      </div>
      <div
        class="pt-3 pb-5 px-5 bg-gradient-to-tr from-surface-50 to-surface-100/60 dark:from-surface-700/80 dark:to-surface-600/40 rounded-md shadow-inner mt-6"
      >
        <h3
          class="text-sm font-light text-surface-700 dark:text-surface-0/80 mb-3"
        >
          Raised Text
        </h3>
        <div class="flex justify-start flex-wrap gap-3">
          <Button label="Primary" text raised />
        <Button label="Secondary" severity="secondary" text raised />
        <Button label="Success" severity="success" text raised />
        <Button label="Info" severity="info" text raised />
        <Button label="Warning" severity="warning" text raised />
        <Button label="Help" severity="help" text raised />
        <Button label="Danger" severity="danger" text raised />
        </div>
      </div>
     
    </div>
  </div>
</template>

<script setup>
import DarkToggle from "./components/DarkToggle.vue";
import ColorPalette from "./components/ColorPalette.vue";
</script>
