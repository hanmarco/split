// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

loadFonts();

createApp(App)
  .use(vuetify)
  .mount('#app');

// src/plugins/vuetify.js
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
});

// src/App.vue
<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field label="참가자 이름" v-model="newPerson" @keyup.enter="addPerson" />
          <v-btn @click="addPerson">참가자 추가</v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-list>
            <v-list-item v-for="(person, index) in people" :key="index">
              <v-list-item-content>{{ person }}</v-list-item-content>
              <v-btn icon @click="removePerson(index)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6">
          <v-card v-for="(payment, index) in payments" :key="index" class="mb-4">
            <v-card-text>
              <v-text-field label="결제 금액" v-model.number="payment.amount" type="number" />
              <v-text-field label="시간 (예: 2024-10-13 14:00)" v-model="payment.time" type="datetime-local" />
              <v-select
                label="결제자 선택"
                v-model="payment.payer"
                :items="people"
              />
              <v-select
                label="참가자 선택"
                v-model="payment.selectedPeople"
                :items="people"
                multiple
                chips
              />
            </v-card-text>
          </v-card>
          <v-btn @click="addPayment">결제 추가</v-btn>
          <v-btn @click="calculateSplit">금액 산출</v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-list>
            <v-list-item v-for="(cost, person) in splitCosts" :key="person">
              <v-list-item-content>
                {{ person }}: 단순 산술 부담금 {{ cost }} 원, 먼저 지불한 금액 {{ payerCosts[person] || 0 }} 원
                <template v-if="cost < 0">
                  - 총무가 {{ person }}에게 {{ Math.abs(cost) }} 원을 송금해야 합니다.
                </template>
                <template v-else-if="cost > 0">
                  - {{ person }}은 총무에게 {{ cost }} 원을 송금해야 합니다.
                </template>
                <template v-else>
                  - 추가로 송금할 금액이 없습니다.
                </template>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-alert type="info" class="mt-4">
            총무는 가장 많은 금액을 결제한 사람입니다. 총무는 {{ treasurer }}입니다.<br>
            참석자들은 총무에게 자신이 부담해야 할 금액을 송금해야 합니다.<br>
            만약 총무가 아닌 사람이 결제한 경우, 총무는 해당 결제자에게 차액을 송금해야 합니다.<br>
            예를 들어, 결제 금액이 가장 많은 총무가 A이고, 다른 결제자인 B가 결제를 진행한 경우, A는 B에게 해당 금액만큼의 차액을 송금해야 합니다. 이렇게 하면 최종적으로 각 참석자가 자신이 부담해야 하는 금액을 명확하게 정산할 수 있습니다.
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      newPerson: '',
      people: [],
      payments: [
        {
          amount: 0,
          time: '',
          payer: '',
          selectedPeople: [],
        },
      ],
      splitCosts: {},
      payerCosts: {},
      treasurer: '',
    };
  },
  methods: {
    addPerson() {
      if (this.newPerson.trim() !== '' && !this.people.includes(this.newPerson)) {
        this.people.push(this.newPerson);
        this.newPerson = '';
      }
    },
    removePerson(index) {
      this.people.splice(index, 1);
    },
    addPayment() {
      this.payments.push({
        amount: 0,
        time: '',
        payer: '',
        selectedPeople: [],
      });
    },
    calculateSplit() {
      const totalCosts = {};
      const payerCosts = {};

      // Calculate each payment's split and assign costs
      this.payments.forEach(payment => {
        if (payment.amount > 0 && payment.selectedPeople.length > 0 && payment.payer) {
          const splitAmount = (payment.amount / payment.selectedPeople.length).toFixed(2);
          payment.selectedPeople.forEach(person => {
            if (!totalCosts[person]) {
              totalCosts[person] = 0;
            }
            totalCosts[person] += parseFloat(splitAmount);
          });

          // Track the payer's total payment
          if (!payerCosts[payment.payer]) {
            payerCosts[payment.payer] = 0;
          }
          payerCosts[payment.payer] += payment.amount;
        }
      });

      // Adjust costs based on payer's payments
      Object.keys(payerCosts).forEach(payer => {
        if (!totalCosts[payer]) {
          totalCosts[payer] = 0;
        }
        totalCosts[payer] -= payerCosts[payer];
      });

      // Determine the treasurer (person who paid the most)
      this.treasurer = Object.keys(payerCosts).reduce((a, b) => payerCosts[a] > payerCosts[b] ? a : b, '');

      this.splitCosts = totalCosts;
      this.payerCosts = payerCosts;
    },
  },
};
</script>

<style>
@import "vuetify/styles";
</style>