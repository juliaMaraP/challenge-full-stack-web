<template>
  <v-container class="mt-5" max-width="600px">
    <v-card>
      <v-toolbar color="indigo darken-3" dark flat>
        <v-toolbar-title>
          {{ isEditMode ? "Editar Aluno" : "Cadastrar Aluno" }}
        </v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            label="Nome"
            v-model="student.name"
            :rules="[(v) => !!v || 'Nome é obrigatório']"
            required
          ></v-text-field>

          <v-text-field
            label="Email"
            v-model="student.email"
            :rules="[
              (v) => !!v || 'Email é obrigatório',
              (v) => /.+@.+\..+/.test(v) || 'Email inválido',
            ]"
            required
          ></v-text-field>

          <v-text-field
            label="RA"
            v-model="student.registration"
            :rules="[(v) => !!v || 'RA é obrigatório']"
            :readonly="isEditMode"
            required
          ></v-text-field>

          <v-text-field
            label="CPF"
            v-model="student.cpf"
            :rules="[
              (v) => !!v || 'CPF é obrigatório',
              (v) =>
                /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(v) ||
                'Formato CPF inválido (ex: 000.000.000-00)',
            ]"
            :readonly="isEditMode"
            required
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey" @click="cancel">Cancelar</v-btn>
        <v-btn color="indigo darken-3" :disabled="!valid" @click="save"
          >Salvar</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import api from "../api.js";

export default {
  name: "StudentFormView",
  data() {
    return {
      valid: false,
      student: {
        name: "",
        email: "",
        registration: "",
        cpf: "",
      },
    };
  },
  computed: {
    isEditMode() {
      return !!this.$route.params.id;
    },
  },
  async mounted() {
    if (this.isEditMode) {
      const id = this.$route.params.id;
      try {
        const response = await api.get(`/students/${id}`);
        this.student = response.data;
      } catch (error) {
        console.error("Erro ao carregar aluno:", error);
      }
    }
  },
  methods: {
    cancel() {
      this.$router.push("/students");
    },
    async save() {
      if (this.$refs.form.validate()) {
        try {
          if (this.isEditMode) {
            await api.put(`/students/${this.$route.params.id}`, {
              name: this.student.name,
              email: this.student.email,
            });
            alert("Aluno atualizado com sucesso!");
          } else {
            await api.post("/students", this.student);
            alert("Aluno criado com sucesso!");
          }
          this.$router.push("/students");
        } catch (error) {
          console.error("Erro ao salvar aluno:", error);
          alert("Erro ao salvar aluno. Veja o console para mais detalhes.");
        }
      }
    },
  },
};
</script>

<style scoped></style>
