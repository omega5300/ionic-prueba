<template>
  <ion-page>
    <toolbar />
    <ion-content>
      <ion-text>holis</ion-text>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import { IonPage, IonContent, IonText } from '@ionic/vue';

import toolbar from '../components/toolbar.vue'

export default  {
  name: 'Tab1',
  components: {
  IonContent,
  IonPage,
  IonText, 
  toolbar }
}
</script>