<template>
<div class="slash">
  <input type="checkbox" class="absolute z-5 w-20 h-20 hidden" id="slash-open-trigger" />
  <label
    for="slash-open-trigger"
    class="absolute z-5 hv-center btn btn-primary btn-ghost cursor-pointer slash-open-label"
  >Slash!</label>
  <div class="relative w-screen h-screen flex justify-center items-center slash-open">
    <div class="flex flex-col text-center play-state-inherit">
      <div class="font-bold text-3xl fade-in" style="animation-delay: 1.2s;">Slash Open Animation</div>
      <div class="fade-in" style="animation-delay: 1.4s;">made by alphardex with pure css</div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'SlashOpen'
}
</script>
<style scoped lang="scss">
.slash {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.play-state-inherit {
  & > * {
    animation-play-state: inherit !important;
  }
}

#slash-open-trigger {
  &:checked {
    & ~ .slash-open-label {
      opacity: 0;
      cursor: auto;
    }

    & ~ .slash-open {
      & > * {
        animation-play-state: running;
      }

      &::before,
      &::after {
        animation-play-state: running;
      }
    }
  }
}

.slash-open {
  --cover-color: black;
  --slash-color: white;
  --slash-scale: 0.005;

  // cover
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--cover-color);
    animation: hide 1.2s var(--ease-in-out-quint) both;
  }

  // slash
  &::after {
    position: absolute;
    content: '';
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--slash-color);
    transform: scaleY(var(--slash-scale));
    animation: slash 1.2s var(--ease-in-out-quint) both;
  }

  & > * {
    animation-play-state: paused;
  }

  &::before,
  &::after {
    animation-play-state: paused;
  }
}

.fade-in {
  opacity: 0;
  animation: fade-in 0.6s both;
}

@keyframes slash {
  0% {
    transform: scale(0, var(--slash-scale));
    transform-origin: left;
  }

  49%,
  50% {
    transform: scale(1, var(--slash-scale));
    transform-origin: left;
  }

  51%,
  52% {
    transform: scale(1, var(--slash-scale));
    transform-origin: center;
  }

  100% {
    transform: scale(1, 1);
    transform-origin: center;
  }

  99.9%,
  100% {
    visibility: hidden;
  }
}

@keyframes hide {
  99.9%,
  100% {
    visibility: hidden;
  }
}
</style>