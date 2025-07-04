<template>
  <v-app-bar app fixed color="indigo darken-3" dark>
    <v-toolbar-title></v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if="userEmail" class="mr-4">Olá, {{ userEmail }}</div>
  </v-app-bar>
</template>

<script>
import { jwtDecode } from "jwt-decode";

export default {
  name: "AppHeader",
  data() {
    return {
      userEmail: null,
    };
  },
  mounted() {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log(decoded);
        this.userEmail = decoded.email;
      } catch {
        console.warn("Token inválido ou expirado");
      }
    }
  },
};
</script>
