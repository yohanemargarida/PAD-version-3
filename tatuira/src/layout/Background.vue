<template>
  <div class="background">
    <div class="body-border">
      <slot>

      </slot>
    </div>
  </div>
</template>

<script>

export default {
  
};
</script>

<style>
.background {
  width: contain;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.body-border {
  width: 100%;
  height: 100%;
  border: 32px solid rgba(73, 208, 178, 0.6);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .background {
    background-size: 500%;
    background-position: 60%;
  }

  .body-border {
    border: 25px solid rgba(73, 208, 178, 0.6);
    flex-direction: column;
  }
}
</style>