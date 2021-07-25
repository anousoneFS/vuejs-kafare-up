<template>
  <v-container>
      <v-btn to="/checkout" v-if="haveOrders" color="pink" dark large block>ມີສິນຄ້າ {{numberOfOrders}} ລາຍການລໍຖ້າໃຫ້ຈ່າຍເງິນ</v-btn>
    <v-row>
      <v-col cols="12">
        <v-card elevation="24">
          <v-carousel cycle show-arrows hide-delimiters height="300" >
            <v-carousel-item v-for="(item, index) in specials" :key="index">
              <v-img class="align-end" height="300" :src="item.image" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                <v-card-title class="white--text">
                    {{item.text}}
                </v-card-title>
              </v-img> </v-carousel-item
            >
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
        <v-col cols="6" md="3" v-for="(item, index) in menus" :key="index">
            <v-card :to="'/order/'+index">
                <v-img :src="item.image" height="200" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                <v-card-title class="white--text">{{item.text}} <strong>{{item.price}}</strong></v-card-title>
                </v-img>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-icon v-if="item.love" class="mr-3">mdi-heart</v-icon>
                    <v-icon v-else class="mr-3">mdi-heart-outline</v-icon>
                    <v-icon>mdi-share-variant</v-icon>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    computed:{
        specials(){
            return this.$store.getters.specials;
        },
        menus(){
            return this.$store.getters.menus;
        },
        haveOrders(){
            return this.$store.getters.haveOrders;
        },
        numberOfOrders(){
            return this.$store.getters.numberOfOrders;
        }
    }
};
</script>

<style></style>
