<template>
  <button type="button" class="vab-button-upgrade" @click="onClick">
    <span class="vab-button-upgrade__pocket"></span>
    <span class="vab-button-upgrade__ripple"></span>
    <svg
      v-if="color"
      class="vab-button-upgrade__icon"
      version="1.1"
      viewBox="0 0 92.129 58.286"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(-43.601 -81.327)">
        <path
          transform="scale(.26458)"
          d="m338.89 338.03-87.096 111.24-64.674-62.949 8.623 122.45h286.29l8.625-122.45-64.676 62.949z"
          :fill="color"
          :stroke="borderColor"
          stroke-width="37.795"
          style="paint-order:markers stroke fill"
        />
      </g>
    </svg>
    <span class="vab-button-upgrade__label">{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: 'ButtonUpgrade',

  props: {
    label: {
      type: String,
      default: 'UPGRADE'
    }
  },

  data() {
    return {
      color: null,
      borderColor: null
    }
  },

  methods: {
    onClick() {
      this.$emit('click')
    }
  },

  mounted() {
    const { color, backgroundColor } = window.getComputedStyle(this.$el)
    this.color = color || ''
    this.borderColor = backgroundColor || ''
  }
}
</script>

<style scoped>
.vab-button-upgrade {
  --duration: 200ms;

  position: relative;
  top: 0;
  transition: top var(--duration) ease-in-out;
  border: none;
  border-radius: 0.2rem;
  padding: 0.8rem 2rem;
}

.vab-button-upgrade__pocket {
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0;
  border-radius: inherit;
  width: 100%;
  height: 75%;
  background-color: inherit;
}

.vab-button-upgrade__ripple {
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity var(--duration) ease-in-out;
  border-radius: inherit;
  border-top-left-radius: 15%;
  border-top-right-radius: 15%;
  width: 100%;
  height: 75%;
  background-color: #fff;
}

.vab-button-upgrade__icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: top var(--duration) ease-in-out;
  width: 1.5rem;
  height: 1.5rem;
}

.vab-button-upgrade__label {
  position: relative;
  z-index: 2;
  display: inline-block;
  transform: scale(1);
  transition: transform var(--duration) ease-in-out;
}

.vab-button-upgrade:hover,
.vab-button-upgrade:focus {
  top: -0.1rem;
  transition: top var(--duration) ease-in-out;
}

.vab-button-upgrade:hover > .vab-button-upgrade__ripple,
.vab-button-upgrade:focus > .vab-button-upgrade__ripple {
  opacity: 0.3;
  transition: opacity var(--duration) ease-in-out;
}

.vab-button-upgrade:hover > .vab-button-upgrade__icon,
.vab-button-upgrade:focus > .vab-button-upgrade__icon {
  top: -0.1rem;
  opacity: 1;
  transition: top var(--duration) ease-in-out, opacity var(--duration) ease-in-out;
}

.vab-button-upgrade:hover > .vab-button-upgrade__label,
.vab-button-upgrade:focus > .vab-button-upgrade__label {
  transform: scale(1.2);
  transition: transform var(--duration) ease-in-out;
}
</style>
