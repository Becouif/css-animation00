<template>
  <div class="container">
    <div class="block" :class="{animate: animateBlock}"></div>
    <button @click="animateBtn">Animate</button>
  </div>
  <!-- we wanna toggle this paragraph and animate the visiblity  -->
  <!-- * we use v-if to check if a boolean value  -->
  <!-- then change the boolean value in the function trigger by the button toggle  -->
  <div class="container">
    <transition>
      <p v-if="toggleParagraph">This is only a paragraph that may be visible or not!!!</p>
    </transition>
    <button @click="toggleParagraphBtn">Toggle Paragraph</button>
  </div>
  <!-- using transition to handle this base modal  -->

<!-- we are using a prop name open  -->
<!-- we are sendin the props to BaseModel -->
    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>

  <!-- start of video player test using dialog -->
    <base-modal @close="hideDialog" :open="videoIsVisible">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/4Ywid2ei6bA?si=kweuOd4wN3df3nEO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <button @click="hideVideo">Close it!</button>
    </base-modal>

  <div class="container">
    <button @click="showVideo">Show Clip</button>
  </div>
  <!-- end of showing clip  -->
  <!-- show this and hide that  -->
  <div class="container">
  <transition name="fade-button" mode="out-in">
    <button @click="showUsers" v-if="usersIsVisible">Show Users</button>
    <button @click="hideUsers" v-else>Hide Users</button>
  </transition>
  </div>
</template>  

<script>
export default {
  data() {
    return { 
      usersIsVisible:false,
      videoIsVisible: false,
      dialogIsVisible: false,
      animateBlock:false,
      toggleParagraph: false,

    };

  },
  methods: {
    showVideo(){
      this.videoIsVisible = true;
    },
    hideVideo(){
      this.videoIsVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBtn(){
      this.animateBlock = !this.animateBlock;
    },
    toggleParagraphBtn(){
      this.toggleParagraph = !this.toggleParagraph;
    },
    showUsers(){
      this.usersIsVisible = false;
    },
    hideUsers(){
      this.usersIsVisible = true;
    }

  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

/* for simple animation we use transition in css but  */
/* then we add the name of the transition we are using it to monitor  */
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-50px); */

  animation: slide-scale 0.3s ease-out forwards;
}

/* we use animation key for @keyframes  */
/* CSS animation  */
/* we use @keyframes then the name i want  */
@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}

/* transition css  */
/* this is the default name that came with transition  */
.v-enter-from {
  /* opacity: 0;
  transform: translateY(-30px); */
}

.v-enter-active {
  /* transition: all 0.3s ease-out; */
  animation: slide-scale 0.3s ease-out;
}

.v-enter-to {
  /* opacity: 1; */
  /* transform: translateY(0); */
}

.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-active {
  /* transition: all 0.3s ease-in; */
  animation:slide0scale 0.3s ease-out;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-button-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity:1;
}

</style>