<template>
  <v-card width="400">
      <v-card-item>
        <v-img
          
          src="@/assets/tuca_cover.jpg"
          cover
          class="text-white"
        ></v-img>
        <!-- <v-card-title>This is a title</v-card-title>

        <v-card-subtitle>This is a subtitle</v-card-subtitle> -->
      </v-card-item>

      <!-- <v-card-text>
        This is content
      </v-card-text> -->
    </v-card>

    <v-card>
      <v-tabs
      v-model="tab"
      bg-color="primary"
    >
      <v-tab value="one">Todo</v-tab>
      <v-tab value="two">Experiencias</v-tab>
      <v-tab value="three">Coctelería Creativa</v-tab>
      <v-tab value="three">Coctelería Clásica</v-tab>
      <v-tab value="three">Shots</v-tab>
      <v-tab value="three">Piqueos</v-tab>
    </v-tabs>
    </v-card>
  <!-- <v-app-bar flat>
    <v-app-bar-title>
      <v-img height="300" src="@/assets/tuca_logo.png" />
    </v-app-bar-title>
  </v-app-bar> -->
</template>
<style>
.v-card-item {
  padding: 0 !important;
}
</style>

<script setup>
  //zz
</script>
