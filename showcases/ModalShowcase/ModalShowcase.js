import { useState } from "react";
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonModal, IonInput, IonHeader, IonTitle, IonToolbar, IonButtons } from "../../ionic-replica";
function ModalShowcase() {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Modal</IonCardSubtitle>
          <IonCardTitle>Overlay</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonButton expand="block" onClick={() => setIsOpen(true)}>Open Modal</IonButton>
        </IonCardContent>
      </IonCard>

      <IonModal isOpen={isOpen} onDidDismiss={() => setIsOpen(false)}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Modal View</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <div className="flex-1 overflow-y-auto bg-white dark:bg-black p-4 pt-8">
          <p className="text-gray-500 mb-4 text-center">This is a sheet modal that slides up from the bottom.</p>
          <IonInput label="Email" placeholder="Enter email" type="email" />
          <IonInput label="Password" placeholder="Enter password" type="password" />
          <div className="mt-8">
            <IonButton expand="block" onClick={() => setIsOpen(false)}>Save & Close</IonButton>
          </div>
        </div>
      </IonModal>
    </>;
}
export {
  ModalShowcase as default
};
