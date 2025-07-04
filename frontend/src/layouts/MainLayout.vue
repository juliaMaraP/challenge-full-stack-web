<template>
  <v-app>
    <v-navigation-drawer app permanent width="240" color="#3b6ba7">
      <div
        style="
          background-color: white;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          user-select: none;
          border-bottom: 1px solid #ccc;
        "
        @click="$router.push('/')"
      >
        <span
          style="
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 1.25rem;
            color: #333;
            letter-spacing: 0.05em;
          "
        >
          Módulo Acadêmico
        </span>
      </div>

      <v-list dense nav>
        <v-list-group
          value="true"
          no-action
          class="mt-4 mb-4"
          color="white"
          activatable
        >
          <v-list-item
            link
            :to="{ name: 'StudentList' }"
            :active="$route.name === 'StudentList'"
            class="rounded-lg mb-2"
            active-class="drawer-active"
          >
            <v-list-item-content>
              <v-list-item-title
                class="white--text font-weight-medium"
                style="font-family: 'Roboto', sans-serif"
              >
                Alunos
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container
        fluid
        class="pa-0"
        style="min-height: 100vh; background-color: #f4f6f8"
      >
        <div
          class="main-content"
          style="
            background: white;
            border-radius: 12px;
            box-shadow: 0 6px 12px rgb(0 0 0 / 0.1);
            min-height: 80vh;
            padding: 30px;
          "
        >
          <router-view />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.drawer-active {
  background-color: #3b6ba7 !important;
}

.v-list-item:hover {
  background-color: #3b547c !important;
  cursor: pointer;
}

.v-list-item-icon {
  min-width: 36px;
}

.v-list-item-title {
  font-size: 1.1rem;
}

.v-list-item {
  justify-content: center !important;
  text-align: center;
}

.v-list-item-content {
  justify-content: center !important;
}

.v-list-item-title {
  text-align: center !important;
}

.v-navigation-drawer {
  left: 0 !important;
  margin-left: 0 !important;
  padding-left: 0 !important;
}
</style>
