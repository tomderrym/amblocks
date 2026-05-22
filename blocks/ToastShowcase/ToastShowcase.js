import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, useIonToast } from "../../ionic-replica";
function ToastShowcase() {
  const [present] = useIonToast();
  const openBottomToast = () => {
    present({
      message: "Your settings have been saved.",
      duration: 3e3,
      position: "bottom",
      buttons: [{ text: "Close", role: "cancel" }]
    });
  };
  const openTopToast = () => {
    present({
      message: "New message received!",
      duration: 3e3,
      position: "top"
    });
  };
  return <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Toast</IonCardSubtitle>
        <IonCardTitle>Notifications</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <div className="flex flex-col gap-2">
          <IonButton expand="block" onClick={openBottomToast}>Bottom Toast</IonButton>
          <IonButton expand="block" color="secondary" onClick={openTopToast}>Top Toast</IonButton>
        </div>
      </IonCardContent>
    </IonCard>;
}
export {
  ToastShowcase as default
};
