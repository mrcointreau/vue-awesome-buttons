<template>
  <button type="button" class="vab-button-create" @focus="onFocus" @mouseover="onMouseOver" @click="onClick">
    <span class="vab-button-create__ripple" :style="animatedElementStyle" />
    <svg
      v-if="color"
      class="vab-button-create__icon"
      :style="animatedElementStyle"
      version="1.1"
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
        :fill="color"
      ></path>
    </svg>
    <span ref="label" class="vab-button-create__label">{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: 'ButtonCreate',

  props: {
    label: {
      type: String,
      default: 'CREATE'
    }
  },

  data() {
    return {
      color: null,
      isFirstInteraction: true
    }
  },

  computed: {
    animatedElementStyle() {
      if (this.isFirstInteraction) {
        return { display: 'none' }
      }

      return {}
    }
  },

  methods: {
    onFocus() {
      this.isFirstInteraction = false
    },

    onMouseOver() {
      this.isFirstInteraction = false
    },

    onClick() {
      this.$emit('click')
    }
  },

  mounted() {
    const { color } = window.getComputedStyle(this.$el)
    this.color = color || ''

    const width = this.$el.clientWidth + 'px'
    this.$el.style.setProperty('--width', width)

    const height = this.$el.clientHeight + 'px'
    this.$el.style.setProperty('--height', height)

    const labelWidth = this.$refs.label.clientWidth + 'px'
    this.$el.style.setProperty('--label-width', labelWidth)
  }
}
</script>

<style scoped>
.vab-button-create {
  --duration: 200ms;
  --bounce: cubic-bezier(0.91, 1.5, 0.2, 1.5);

  position: relative;
  transition: width var(--duration) var(--bounce);
  border: none;
  border-radius: 2rem;
  padding: 0.8rem 2rem;
  width: var(--width);
  font: inherit;
}

@keyframes ripple-reverse {
  0% {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.3;
  }

  50% {
    --radius: calc(var(--height) / 2);

    top: calc(var(--height) / 2 - var(--radius));
    right: calc((var(--width) + 2rem) / 2 - var(--radius));
    bottom: calc(var(--height) / 2 - var(--radius));
    left: calc((var(--width) + 2rem) / 2 - var(--radius));
  }

  100% {
    opacity: 0;
  }
}

.vab-button-create__ripple {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.3;
  animation: ripple-reverse var(--duration);
  animation-fill-mode: forwards;
  border-radius: 2rem;
  background-color: #000;
}

@keyframes icon-reverse {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1) rotate(90deg);
  }

  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0) rotate(0);
  }
}

.vab-button-create__icon {
  position: absolute;
  top: 50%;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0) rotate(0);
  animation: icon-reverse var(--duration);
  animation-fill-mode: forwards;
  width: 1.2rem;
  height: 1.2rem;
}

.vab-button-create__label {
  position: relative;
  z-index: 1;
  display: inline-block;
  transition: margin var(--duration) var(--bounce);
  margin: 0;
}

.vab-button-create:hover,
.vab-button-create:focus {
  transition: width var(--duration) var(--bounce);
  width: calc(var(--width) + 2rem);
}

@keyframes ripple {
  0% {
    opacity: 0;
  }

  50% {
    --radius: calc(var(--height) / 2);

    top: calc(var(--height) / 2 - var(--radius));
    right: calc((var(--width) + 2rem) / 2 - var(--radius));
    bottom: calc(var(--height) / 2 - var(--radius));
    left: calc((var(--width) + 2rem) / 2 - var(--radius));
  }

  100% {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.3;
  }
}

.vab-button-create:hover,
.vab-button-create:focus > .vab-button-create__ripple {
  animation: ripple;
  animation-duration: var(--duration);
  animation-fill-mode: forwards;
}

@keyframes icon {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0) rotate(0deg);
  }

  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1) rotate(90deg);
  }
}

.vab-button-create:hover,
.vab-button-create:focus > .vab-button-create__icon {
  animation: icon var(--duration);
  animation-fill-mode: forwards;
}

.vab-button-create:hover,
.vab-button-create:focus > .vab-button-create__label {
  margin: 0 0 0 1.5rem;
  transition: margin var(--duration) var(--bounce);
}
</style>
