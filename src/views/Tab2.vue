<template>
  <ion-page>
    <toolbar />
    <ion-content :fullscreen="false">
      <p>holis</p>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';

import toolbar from '../components/toolbar.vue'

export default  {
  name: 'Tab2',
  components: { IonContent, IonPage, toolbar }
}
</script>