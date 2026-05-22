import { useState } from "react";
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonBackdrop } from "../../ionic-replica";
function BackdropShowcase() {
  const [showBackdrop, setShowBackdrop] = useState(false);
  return <>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Backdrop</IonCardSubtitle>
          <IonCardTitle>Dark Overlays</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p className="mb-4 text-gray-500">
            Backdrops are full-screen dark overlays used for modals, popovers, and loading spinners.
          </p>
          <IonButton expand="block" onClick={() => setShowBackdrop(true)}>
            Show Backdrop
          </IonButton>
        </IonCardContent>
      </IonCard>

      <IonBackdrop
    visible={showBackdrop}
    onIonBackdropTap={() => setShowBackdrop(false)}
  />
      {showBackdrop && <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000] text-white text-center pointer-events-none">
          <p className="text-xl font-semibold mb-2">Backdrop Active</p>
          <p className="text-sm opacity-80">Tap anywhere to dismiss</p>
        </div>}
    </>;
}
export {
  BackdropShowcase as default
};
