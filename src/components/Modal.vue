<template>
<div>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        TEXT
      </div>
    </div>
    <button class="modal-close" aria-label="close" @click="close"></button>
  </div>
</div>
</template>
<script>
export default {
  name: 'Modal',
  methods: {
    close() {
      this.$emit('close')
    }

  }
}
</script>
