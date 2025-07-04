<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="pa-6" elevation="10">
          <v-card-title class="text-h5 font-weight-bold">
            Bem-vindo ao sistema de Gestão de Alunos
          </v-card-title>
          <v-card-text>
            Use o menu lateral para listar alunos existentes ou cadastrar um
            novo aluno.
          </v-card-text>
          <v-card-actions>
            <v-btn color="indigo darken-3" dark to="/students">
              Listar Alunos
            </v-btn>
            <v-btn color="indigo lighten-1" text to="/students/new">
              Novo Aluno
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped></style>
