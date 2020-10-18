<template>
  <button type="button" class="vab-button-get-started" @click="onClick">
    <span class="vab-button-start__ripple" />
    <span class="vab-button-start__label">{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: 'ButtonGetStarted',

  props: {
    label: {
      type: String,
      default: 'GET STARTED'
    }
  },

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.vab-button-get-started {
  --duration: 200ms;

  position: relative;
  transition: border-radius var(--duration) ease-in-out;
  border: none;
  border-radius: 0.2em;
  padding: 0.8em 2em;
}

.vab-button-start__ripple {
  position: absolute;
  top: 0.2em;
  right: 100%;
  bottom: 0.2em;
  left: 0.2em;
  opacity: 0;
  transition: right var(--duration) ease-in-out, opacity var(--duration) ease-in-out,
    border-radius var(--duration) ease-in-out;
  border-radius: 0.2em;
  background-color: #fff;
}

.vab-button-start__label {
  display: inline-block;
  transform: scale(1);
  transition: transform var(--duration) ease-in-out;
}

.vab-button-get-started:hover,
.vab-button-get-started:focus {
  transition: border-radius var(--duration) ease-in-out;
  border-radius: 2em;
}

.vab-button-get-started:hover > .vab-button-start__label,
.vab-button-get-started:focus > .vab-button-start__label {
  transform: scale(1.2);
  transition: transform var(--duration) ease-in-out;
}

.vab-button-get-started:hover > .vab-button-start__ripple,
.vab-button-get-started:focus > .vab-button-start__ripple {
  right: 0.2em;
  opacity: 20%;
  transition: right var(--duration) ease-in-out, opacity var(--duration) ease-in-out,
    border-radius var(--duration) ease-in-out;
  border-radius: 2em;
}
</style>
