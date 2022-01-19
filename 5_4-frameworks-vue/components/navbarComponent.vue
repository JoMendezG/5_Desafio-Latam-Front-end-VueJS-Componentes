<template>
  <div>
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Mi App</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute left temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item>
            <NuxtLink class="menuTxt" to="/">Desafío</NuxtLink>
          </v-list-item>
          <v-list-item>
            <NuxtLink class="menuTxt" to="/404">404</NuxtLink>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
  }),
};
</script>
<style>
.menuTxt {
  text-decoration: none;
}

a:link {
  color: white;
}

a:visited {
  color: white;
}

a:hover {
  color: white;
}

a:active {
  color: white;
}
</style>
