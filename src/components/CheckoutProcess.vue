<template>
  <v-container>
      <v-card>
          <v-card-text class="text-center">
              <v-icon color="green" size="64">
                  mdi-check-circle-outline
              </v-icon>
              <p>ຂອບໃຈທີ່ໃຊ້ບໍລິການພວກເຮົາກໍາລັງດໍາເນີນການໃຫ້</p>
          </v-card-text>
          <v-card-actions class="d-flec justify-center">
              <v-btn x-large to="/">ກັບໄປໜ້າຫຼັກ</v-btn>
          </v-card-actions>
      </v-card>
  </v-container>
</template>

<script>
export default {
    mounted(){
        this.$store.commit("CLEAR_ORDER");
    }
}
</script>

<style>

</style>