<template>
  <div>
    <Html :lang="dynamic > 50 ? 'en-GB' : 'en-US'">
      <Head>
        <Title>Top 50 Restaurants in the world</Title>
        <Meta name="description" content="this page is nice"/>
        <Link rel="preload" href="https://images.unsplash.com/photo-1617440168937-c6497eaa8db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" as="script"/>
      </Head>
    </Html>
    <NuxtLayout name="custom">
    <div class="container">
      <RestaurantTable />
    </div>
    </NuxtLayout>

  </div>
</template>
