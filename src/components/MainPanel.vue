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
          <v-card class="pa-4" elevation="16">
            <v-text-field label="참가자 이름" v-model="newPerson" hide-details="auto" @keyup.enter="addPerson" placeholder="ex)홍길동 철수 영희" append-inner-icon="mdi-plus" @click:append-inner="addPerson" />
            <!-- <v-btn v-if="people.length > 0" @click="removeAllPeople" class="float-right" color="warning">Clear All</v-btn> -->

            <v-card class="mx-auto mt-4" v-if="people.length > 0">
              <v-toolbar color="deep-purple-accent-4" density="compact">
                <v-toolbar-title>모임 멤버</v-toolbar-title>
                <v-btn icon="mdi-close" @click="removeAllPeople"></v-btn>
              </v-toolbar>
              <v-card-text>
                <v-chip class="mr-1" v-for="person in people" :key="person" closable @click:close="() => removePersonByName(person)">
                  {{ person }}
                </v-chip>
              </v-card-text>
            </v-card>
          </v-card>
        </v-col>
      </v-row>

      <v-row v-if="people.length>0">
        <v-col cols="12" sm="6">
          <v-card class="pa-2" elevation="16">
            <v-dialog v-model="isPaymentDialogOpen" max-width="500px" persistent>
              <v-card>
                <v-card-title>{{ isEditMode ? '결제 수정' : '결제 추가' }}</v-card-title>
                <v-card-text>
                  <v-text-field label="모임 제목(선택)" placeholder="꼭 입력하지 않아도 됩니다" v-model="newPayment.title" prepend-icon="mdi-account-group" />
                  <v-text-field label="결제 금액(필수)" v-model.number="newPayment.amount" type="number" prefix="₩" prepend-icon="mdi-cash" :rules="[v => v > 0 || '금액은 0원이 될 수 없습니다.']" ref="amountSelect"/>
                  <v-select label="결제자 선택(필수)" v-model="newPayment.payer" :items="people" prepend-icon="mdi-account-cash" :rules="[v => !!v || '결제자를 선택해주세요']" ref="payerSelect"/>
                  <v-select
                    label="참가자 선택"
                    v-model="newPayment.selectedPeople"
                    :items="people"
                    multiple
                    chips
                    prepend-icon="mdi-account-star" />
                  <v-text-field label="시간(선택)" v-model="newPayment.time" type="datetime-local" prepend-icon="mdi-calendar-clock" />
                </v-card-text>
                <v-card-actions>
                  <v-btn @click="closePaymentDialog">취소</v-btn>
                  <v-btn color="primary" @click="validateAndAddPayment">입력 완료</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-list v-if="payments.length>0" class="ma-1">
              <v-list-item v-for="(payment, index) in payments" :key="index" @click="editPayment(index)">
                <v-divider v-if="index > 0"></v-divider>
                <v-list-item-title>{{ payment.title }} <small>(금액: <span  class="text-primary">{{ payment.amount }}</span> 원)</small></v-list-item-title>
                <v-list-item-content>
                  <v-list-item-subtitle>
                    결제: <span class="text-primary">{{ payment.payer }}</span>) <span v-if="payment.selectedPeople.length>1">외에 참석자 {{payment.selectedPeople.length-1}} 명</span>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                  <sup class="mt-2">{{ payment.time }}</sup>
                  </v-list-item-subtitle>
                </v-list-item-content>
                <template v-slot:append>
                  <v-btn
                    color="grey-lighten-1"
                    icon="mdi-close"
                    variant="text"
                    @click="removePayment(index)"
                  ></v-btn>
                </template>
              </v-list-item>
            </v-list>
            
            <v-btn block class="" color="secondary" prepend-icon="mdi-plus" @click="openPaymentDialog">결제 추가</v-btn>
          </v-card>
        </v-col>
      </v-row>

      <v-row v-if="payments.length > 0">
        <v-col cols="12" ref="contentToCopy">
          <v-card class="pa-2" elevation="16">
              <b class="ma-2">
                총무는 <span class="text-primary">{{ treasurer }}</span> 입니다.
              </b>
            <v-list>
              <v-list-item v-for="(cost, person) in splitCosts" :key="person">
                <v-list-item-content>
                  <!-- {{ person }}: 단순 산술 부담금 {{ cost }} 원, 먼저 지불한 금액 {{ payerCosts[person] || 0 }} 원 <br> -->
                  <template v-if="cost < 0">
                    <span v-if="person === treasurer">
                      - 총무(<span class="text-primary"><b>{{ treasurer }}</b></span>)는 총 {{ Math.abs(cost) }} 원을 받아야됩니다
                    </span>
                    <span v-else>
                      - 총무(<span class="text-primary"><b>{{ treasurer }}</b></span>)는 {{ person }}에게 {{ Math.abs(cost) }} 원을 보내야됩니다.
                    </span>
                  </template>
                  <template v-else-if="cost > 0">
                    - {{ person }}은 총무(<span class="text-primary"><b>{{ treasurer }}</b></span>)에게 {{ cost }} 원을 송금해야 합니다.
                  </template>
                  <template v-else>
                    - 추가로 송금할 금액이 없습니다.
                  </template>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-btn block color="primary" @click="copyRenderedHtml">복사하기</v-btn>
            <v-btn block class="mt-2" color="secondary" @click="shareInfo">공유하기</v-btn>
          </v-card>
        </v-col>
      </v-row>

      <v-row v-if="payments.length > 0">
        <v-col cols="12">
          <v-expansion-panels>
            <v-expansion-panel v-for="(person, index) in people" :key="index">
              <v-expansion-panel-title>{{ person }}</v-expansion-panel-title>
              <v-expansion-panel-text>
                총무는 {{ treasurer }}
                <p>
                  <template v-if="splitCosts[person] < 0">
                    총무가 {{ person }}에게 {{ Math.abs(splitCosts[person]) }} 원을 {{ person === treasurer ? '받아야됩니다' : '송금해야 합니다' }}.
                  </template>
                  <template v-else-if="splitCosts[person] > 0">
                    {{ person }}은 총무에게 {{ splitCosts[person] }} 원을 송금해야 합니다.
                  </template>
                  <template v-else>
                    추가로 송금할 금액이 없습니다.
                  </template>
                </p>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
      <v-snackbar
        :timeout="2000"
        v-model="isAlertOn"
      >
      {{ alertMessage }}
    </v-snackbar>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      newPerson: '',
      isAlertOn: false,
      alertMessage: "",
      people: [],
      payments: [],
      newPayment: {
        title: '',
        amount: 0,
        time: '',
        payer: '',
        selectedPeople: this.people,
      },
      splitCosts: {},
      payerCosts: {},
      treasurer: '',
      isPaymentDialogOpen: false,
      isEditMode: false,
      editingIndex: null,
    };
  },
  methods: {
    validateAndAddPayment() {
      this.$refs.payerSelect.validate();
      this.$refs.amountSelect.validate();
      if (this.newPayment.amount == 0) {
        this.myAlert('금액을 입력하세요');
        return;
      }
      if (!this.newPayment.payer) {
        this.myAlert('결제자를 선택해주세요.');
        return;
      }
      if (this.isEditMode) {
        this.updatePayment();
      } else {
        this.addPayment();
      }
    },
    addPerson() {
      if (this.newPerson.trim() !== '') {
        const newPeople = this.newPerson.split(' ').map(person => person.trim()).filter(person => person !== '' && !this.people.includes(person));
        this.people.push(...newPeople);
        this.newPerson = '';
      }
    },
    removePerson(index) {
      this.people.splice(index, 1);
    },
    removePersonByName(name) {
      this.people = this.people.filter(person => person !== name);
    },
    removeAllPeople() {
      this.people = [];
    },
    openPaymentDialog() {
      this.isPaymentDialogOpen = true;
      this.newPayment = {
        title: '',
        amount: 0,
        time: '',
        payer: '',
        selectedPeople: [...this.people]
      };
    },
    closePaymentDialog() {
      this.isPaymentDialogOpen = false;
      this.isEditMode = false;
      this.editingIndex = null;
    },
    addPayment() {
      this.payments.push({ ...this.newPayment });
      this.newPayment = {
        title: '',
        amount: 0,
        time: '',
        payer: '',
        selectedPeople: [],
      };
      this.closePaymentDialog();
      this.calculateSplit();
    },
    editPayment(index) {
      this.editingIndex = index;
      this.newPayment = { ...this.payments[index] };
      this.isEditMode = true;
      this.isPaymentDialogOpen = true;
      //this.openPaymentDialog();
    },
    updatePayment() {
      if (this.editingIndex !== null) {
        this.payments[this.editingIndex] = { ...this.newPayment };
        this.newPayment = {
          title: '',
          amount: 0,
          time: '',
          payer: '',
          selectedPeople: [],
        };
        this.closePaymentDialog();
        this.calculateSplit();
      }
    },
    removePayment(index) {
      this.payments.splice(index, 1);
      this.calculateSplit();
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
    copyRenderedHtml() {
      // ref를 사용하여 복사할 내용을 가져옴
      const contentElement = this.$refs.contentToCopy?.$el || this.$refs.contentToCopy;
      if (contentElement && contentElement instanceof Node) {
        const range = document.createRange();
        range.selectNodeContents(contentElement);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
 
        try {
          const successful = document.execCommand('copy');
          if (successful) {
            this.myAlert('HTML이 클립보드에 복사되었습니다.');
          } else {
            this.myAlert('복사에 실패했습니다.');
          }
        } catch (err) {
          this.myAlert('복사 중 오류가 발생했습니다.');
        }

        // 선택 해제
        selection.removeAllRanges();
      } else {
        this.myAlert('복사할 내용을 찾을 수 없습니다.');
      }
    },
    shareInfo() {
      // 클립보드에 HTML 내용을 복사
      this.copyRenderedHtml();

      // 복사된 내용을 가져와서 공유
      navigator.clipboard.readText().then((text) => {
        if (navigator.share) {
          navigator.share({
            title: '정산내역 공유',
            text: text,
          })
          .then(() => this.myAlert('복사된 내용이 성공적으로 공유되었습니다.'))
          .catch((error) => this.myAlert(`공유 중 오류가 발생했습니다: ${error}`));
        } else {
          this.myAlert('공유 API를 지원하지 않는 브라우저입니다.');
        }
      }).catch((error) => {
        this.myAlert(`클립보드에서 내용을 읽는 중 오류가 발생했습니다: ${error}`);
      });
    },
    myAlert(message){
      this.isAlertOn = true;
      this.alertMessage = message;
    }
  },
};
</script>

<style>
@import "vuetify/styles";
.float-right {
  float: right;
}
</style>