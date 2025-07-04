<template>
  <v-container>
    <v-card-title>
      Lista de Alunos
      <v-spacer></v-spacer>
      <v-btn color="primary" :to="'/students/new'">Novo Aluno</v-btn>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="students"
      class="elevation-1"
      :items-per-page="5"
    >
      <template #item.actions="{ item }">
        <v-btn
          small
          color="primary"
          outlined
          :to="`/students/${item.id}/edit`"
          class="mr-2"
        >
          Editar
        </v-btn>
        <v-btn small color="error" text @click="deleteStudent(item.id)">
          Excluir
        </v-btn>
      </template>

      <template #no-data> Nenhum aluno cadastrado. </template>
    </v-data-table>
  </v-container>
</template>

<script>
import api from "../api.js";

export default {
  name: "StudentListView",
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "Nome", value: "name" },
        { text: "RA", value: "registration" },
        { text: "CPF", value: "cpf" },
        { text: "Ações", value: "actions", sortable: false },
      ],
      students: [],
    };
  },
  mounted() {
    this.loadStudents();
  },
  methods: {
    async loadStudents() {
      try {
        const response = await api.get("/students");
        this.students = response.data;
      } catch (error) {
        console.error("Erro ao carregar alunos:", error);
      }
    },
    async deleteStudent(id) {
      if (confirm("Deseja realmente deletar este aluno?")) {
        try {
          await api.delete(`/students/${id}`);
          this.loadStudents();
        } catch (error) {
          console.error("Erro ao deletar aluno:", error);
        }
      }
    },
  },
};
</script>

<style scoped>
.mr-2 {
  margin-right: 8px;
}
</style>
