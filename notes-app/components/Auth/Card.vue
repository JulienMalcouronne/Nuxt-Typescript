<script setup lang="ts">
  const authState = ref<"Login" | "Signup">('Login');

  const toggleAuthState = () => {
    if (authState.value === 'Login') authState.value = "Signup";
    else authState.value = "Login";
  }
</script>

<template>
  <div>
    <NCard class="card">
      <h3>{{authState}}</h3>
      <div class="input-container">
        <input placeholder="Email" type="text">
        <input placeholder="Password" type="text">
      </div>
      <NButton >Submit</NButton>
      <p @click="toggleAuthState">{{authState === "Login" ? "Don't have an account yet? Create one now" : "Already have an account? Go ahead and login"}}</p>
    </NCard>
  </div>
</template>


<style scoped>
.card {
  padding: 1rem;
  width: 25rem;
}

.card h3 {
  font-size: 1.75rem;
  text-transform: capitalize;
}

.input-container {
  display: flex;
  flex-direction: column;
}

.input-container input {
  margin-bottom: 0.3rem;
  padding: 0.2rem;
  outline: none;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
}

p {
  margin-top: 1px;
  color: blue;
  font-size: 0.8rem;
  cursor: pointer;
}
</style>
