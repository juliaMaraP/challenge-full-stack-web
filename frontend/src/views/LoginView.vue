<template>
  <v-card width="400" class="pa-6">
    <v-card-title class="text-h6 font-weight-bold mb-4">
      Sistema de Alunos - Login
    </v-card-title>

    <v-form @submit.prevent="login">
      <v-text-field
        label="Email"
        v-model="email"
        prepend-inner-icon="mdi-email"
        required
      />
      <v-text-field
        label="Senha"
        v-model="password"
        type="password"
        prepend-inner-icon="mdi-lock"
        required
      />

      <v-btn type="submit" color="primary" block class="mt-4">Entrar</v-btn>

      <v-alert v-if="error" type="error" class="mt-4" dense>{{
        error
      }}</v-alert>
    </v-form>
  </v-card>
</template>

<script>
import api from "../api";

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await api.post("/login", {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("token", response.data.token);
        this.$router.push({ name: "Home" });
      } catch (err) {
        this.error = "Credenciais inválidas";
      }
    },
  },
};
</script>
