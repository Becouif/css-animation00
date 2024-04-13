<template>
  <div class="backdrop" @click="$emit('close')"></div>
  <transition name="modal">
  <dialog open>
    <slot></slot>
  </dialog>
  </transition>
</template>

<script>
export default {
  emits: ['close'],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}
/* basically we use our keyframes animation design to animate the dialog*/

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
  /* animation: model 0.3s ease-out forwards;s */
}
/* fi=or keyframes towork you need to add animation key to the css class you wanna apply it  */

.modal-enter-from {

}

.modal-enter-active {
  animation: modal 0.3s ease-out;
}

.modal-enter-to {

}

@keyframes model {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity:1;
    transform: translateY(0) scale(1);
  }
}
</style>