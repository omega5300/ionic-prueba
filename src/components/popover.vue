<template>
  <ion-content>
    <ion-list>
      <ion-item class="dark-theme-option">
        <ion-icon slot="start" :icon="moon"></ion-icon>
        <ion-label>dark mode</ion-label>
        <ion-toggle id="themeToggle" slot="end"></ion-toggle>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script lang="ts">
import { IonContent, IonIcon, IonList, IonItem, IonLabel, IonToggle } from '@ionic/vue';

import { moon } from 'ionicons/icons'

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Popover',
components: { IonContent, IonIcon, IonItem, IonLabel, IonToggle, IonList },
setup() {
 return {moon} 
}
});
</script>

<style>
.dark-theme-option {
 --color: #428cff;
 }
 </style>