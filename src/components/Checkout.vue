<template>
  <v-container>
    <v-card>
      <v-card-title>ລາຍການສິນຄ້າໃນກະຕ່າ</v-card-title>
      <v-list>
        <v-list-item v-for="(item, index) in orders" :key="index">
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
            <v-list-item-subtitle>
              ລາຄາ {{ item.price }} x {{ item.quantity }} =
              {{ item.price * item.quantity }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click="deleteOrder">
              <v-icon color="red">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-card-text class="text-center display-1">
        ລວມເປັນເງິນ {{ totalPrice }} bath
      </v-card-text>

      <v-divider></v-divider>

      <v-form v-model="valid">
        <v-card-text>
          <p>ວິທີການສົ່ງສິນຄ້າ</p>
          <v-radio-group v-model="shippingType">
            <v-radio label="ມາເອົາຢູ່ຮ້ານເອງ" value="picking"></v-radio>
            <v-radio label="ມາສົ່ງຢູ່ທີດ້ານລຸ່ມນີ້" value="shipping"></v-radio>
          </v-radio-group>
          <!-- :rules="[(v)=> v==null || v=='' ? 'ຈໍາເປັນຕ້ອງບອກທີຢູ່' : true]" -->
          <v-textarea
            :rules="[(v) => !!v || 'ຈໍາເປັນຕ້ອງບອກທີຢູ່']"
            v-if="shippingType == 'shipping'"
            v-model="shippingAddress"
            label="ທີ່ຢູ່ຈັດສົ່ງສິນຄ້າ"
            filled
          >
          </v-textarea>
          <v-text-field
            :rules="[(v) => !!v || 'ຈໍາເປັນຕ້ອງບອກເບີໂທ']"
            v-model="telephone"
            label="ເບີໂທລະສັບ"
            filled
          ></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          <p>ວິທີການຈ່າຍເງິນ</p>
          <v-radio-group v-model="paymentMesthod">
            <v-radio label="ຈ່າຍເງິນປາຍທາງ" value="cash"></v-radio>
            <v-radio label="ຈ່າຍເງິນຜ່ານ e-Banking" value="eBanking"></v-radio>
            <v-radio label="ຈ່າຍເງິນຜ່ານບັດເຄດິດ" value="credit"></v-radio>
          </v-radio-group>
        </v-card-text>
      </v-form>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn @click="submitOrder"
          x-large
          color="pink"
          class="white--text"
          :disabled="valid == false"
          >ຈ່າຍເງິນ</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn to="/" x-large>ກັບໄປໜ້າຫຼັກ</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      shippingType: "picking",
      shippingAddress: null,
      telephone: null,
      paymentMesthod: "cash",
    };
  },
  computed: {
    orders() {
      return this.$store.getters.orders;
    },
    totalPrice() {
      var total = 0;
      this.orders.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total;
    },
  },
  methods: {
    deleteOrder(index) {
      this.$store.commit("DELETE_ORDER", index);
    },
    submitOrder(){
        this.$store.commit("SUBMIT_ORDER",{
            shippingType: this.shippingType,
            shippingAddress: this.shippingAddress,
            telephone: this.telephone,
            paymentMesthod: this.paymentMesthod
        });

        this.$router.replace("/checkout-process");
    }
  },
};
</script>

<style></style>
