<template>
  <button type="button" class="vab-button-learn-more" @click="onClick">
    <span class="vab-button-learn-more__label">{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: 'ButtonLearnMore',

  props: {
    label: {
      type: String,
      default: 'LEARN MORE'
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
.vab-button-learn-more {
  --duration: 100ms;

  position: relative;
  border: none;
  border-radius: 0.2rem;
  padding: 0.8rem 2rem;
}

.vab-button-learn-more__label {
  display: inline-block;
}

@keyframes button-shake {
  0% {
    transform: rotate(-2deg);
  }

  50% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-2deg);
  }
}

.vab-button-learn-more:hover,
.vab-button-learn-more:focus {
  animation: button-shake var(--duration) infinite;
}

@keyframes label-shake {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(2deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.vab-button-learn-more:hover > .vab-button-learn-more__label,
.vab-button-learn-more:focus > .vab-button-learn-more__label {
  animation: label-shake var(--duration) infinite;
}
</style>
