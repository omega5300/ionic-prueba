<template>
  <ion-app>
    <toolbar />
    <ion-router-outlet />
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="" href="/">
          <ion-icon :icon="triangle" />
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tab2">
          <ion-icon :icon="ellipse" />
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tab3">
          <ion-icon :icon="square" />
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon
  },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
    }
  }
});
</script>