<script setup lang="ts">
  const {supabase} = useSupabase();
</script>


<template>
  <div>
    <div class="container">
      {{supabase}}
      <AuthCard />
    </div>

  </div>
</template>

<style scoped>
.container {
  max-width: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
