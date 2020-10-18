<template>
  <button type="button" class="vab-button-subscribe" @focus="onFocus" @mouseover="onMouseOver" @click="onClick">
    <svg
      v-if="color"
      class="vab-button-subscribe__icon"
      :style="animatedElementStyle"
      version="1.1"
      viewBox="0 0 198.54 215.47"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(29.721 100.17)">
        <g transform="translate(21.924 -214.69)" stroke-width=".26458">
          <path
            class="vab-button-subscribe__icon__bell"
            d="m104.61 250.37c-5.1118-5.4928-14.676-13.756-14.676-40.823 0-20.558-14.414-37.015-33.851-41.053v-5.5139c0-4.6752-3.7888-8.4667-8.4614-8.4667-4.6725 0-8.4614 3.7915-8.4614 8.4667v5.5139c-19.436 4.0375-33.851 20.495-33.851 41.053 0 27.067-9.5647 35.33-14.676 40.823-1.5875 1.7066-2.2913 3.7465-2.2781 5.7441 0.0291 4.3392 3.4343 8.4667 8.4931 8.4667h101.55c5.0588 0 8.4667-4.1275 8.4931-8.4667 0.0132-1.9976-0.69056-4.0402-2.2781-5.7441z"
            :fill="color"
          />
          <path
            class="vab-button-subscribe__icon__clapper"
            d="m47.625 289.98c9.3451 0 16.925-7.5803 16.925-16.933h-33.851c0 9.353 7.5803 16.933 16.925 16.933z"
            :fill="color"
          />
        </g>
      </g>
    </svg>
    <span ref="label" class="vab-button-subscribe__label">{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: 'ButtonSubscribe',

  props: {
    label: {
      type: String,
      default: 'SUBSCRIBE'
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

    const labelWidth = this.$refs.label.clientWidth + 'px'
    this.$el.style.setProperty('--label-width', labelWidth)
  }
}
</script>

<style scoped>
.vab-button-subscribe {
  --duration: 200ms;
  --bounce: cubic-bezier(0.91, 0.5, 0.2, 1.5);

  position: relative;
  transition: width var(--duration) var(--bounce);
  border: none;
  border-radius: 2rem;
  padding: 0.8rem 2rem;
  width: var(--width);
  font: inherit;
}

.vab-button-subscribe:hover,
.vab-button-subscribe:focus {
  transition: width var(--duration) var(--bounce);
  width: calc(var(--width) + 2rem);
}

.vab-button-subscribe__icon {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 2.3rem;
  height: 2.3rem;
}

.vab-button-subscribe__label {
  display: inline-block;
  transition: margin var(--duration) var(--bounce);
  margin: 0;
}

.vab-button-subscribe:hover,
.vab-button-subscribe:focus .vab-button-subscribe__label {
  margin: 0 0 0 1.5rem;
  transition: margin var(--duration) var(--bounce);
}

@keyframes icon-bell-reverse {
  0% {
    opacity: 1;
    transform: rotate(0deg);
  }

  50% {
    opacity: 1;
    transform: rotate(10deg);
  }

  99.9% {
    opacity: 1;
    transform: rotate(0);
  }

  100% {
    opacity: 0;
    transform: rotate(0);
  }
}

.vab-button-subscribe__icon__bell {
  opacity: 0;
  transform-origin: 18.56% center;
  transform: rotate(0);
  animation: icon-bell-reverse calc(var(--duration) / 2);
  animation-fill-mode: forwards;
}

@keyframes icon-clapper-reverse {
  0% {
    opacity: 1;
    transform: rotate(0);
  }

  50% {
    opacity: 1;
    transform: rotate(-5deg);
  }

  99.9% {
    opacity: 1;
    transform: rotate(0);
  }

  100% {
    opacity: 0;
    transform: rotate(0);
  }
}

.vab-button-subscribe__icon__clapper {
  opacity: 0;
  transform-origin: 46.41% center;
  transform: rotate(0);
  animation: icon-clapper-reverse calc(var(--duration) / 2);
  animation-fill-mode: forwards;
}

@keyframes icon-bell {
  0% {
    opacity: 1;
    transform: rotate(0);
  }

  50% {
    opacity: 1;
    transform: rotate(10deg);
  }

  100% {
    opacity: 1;
    transform: rotate(0deg);
  }
}

.vab-button-subscribe:hover,
.vab-button-subscribe:focus .vab-button-subscribe__icon__bell {
  animation: icon-bell calc(var(--duration) + var(--duration) / 2);
  animation-delay: calc(var(--duration) / 3);
  animation-fill-mode: forwards;
}

@keyframes icon-clapper {
  0% {
    opacity: 1;
    transform: rotate(0);
  }

  50% {
    opacity: 1;
    transform: rotate(-5deg);
  }

  100% {
    opacity: 1;
    transform: rotate(0);
  }
}

.vab-button-subscribe:hover,
.vab-button-subscribe:focus .vab-button-subscribe__icon__clapper {
  animation: icon-clapper calc(var(--duration) + var(--duration) / 2);
  animation-delay: calc(var(--duration) / 3);
  animation-fill-mode: forwards;
}
</style>
