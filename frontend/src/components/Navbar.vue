<template>
  <v-app-bar color="indigo darken-3" dark flat app elevate-on-scroll>
    <v-app-bar-title class="text-h6 font-weight-bold d-flex align-center">
      <v-icon class="mr-2">mdi-school</v-icon>
      Gestão de Alunos
    </v-app-bar-title>

    <v-spacer />

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        to="/students"
        text
        class="mx-2"
        :ripple="false"
        variant="text"
        color="white"
      >
        <v-icon left>mdi-format-list-bulleted</v-icon>
        Listar Alunos
      </v-btn>

      <v-btn
        to="/students/new"
        text
        class="mx-2"
        :ripple="false"
        variant="text"
        color="white"
      >
        <v-icon left>mdi-account-plus</v-icon>
        Novo Aluno
      </v-btn>
    </v-toolbar-items>

    <v-menu class="hidden-md-and-up" bottom right transition="scale-transition">
      <template #activator="{ props }">
        <v-btn icon v-bind="props" color="white">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item to="/students" link>
          <v-list-item-icon>
            <v-icon>mdi-format-list-bulleted</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Listar Alunos</v-list-item-title>
        </v-list-item>

        <v-list-item to="/students/new" link>
          <v-list-item-icon>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Novo Aluno</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.v-application .v-btn {
  text-transform: none;
  font-weight: 500;
}
</style>
