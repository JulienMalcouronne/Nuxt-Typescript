<template>
  <div>
    <slot name="header" />
    <div>
      <img src="https://images.unsplash.com/photo-1617440168937-c6497eaa8db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
    </div>
    <slot name="redirectEl" />
  </div>
</template>


<style scoped>

img {
  width: 10rem;
}

</style>
