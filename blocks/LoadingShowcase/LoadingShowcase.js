import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, useIonLoading } from "../../ionic-replica";
function LoadingShowcase() {
  const [present] = useIonLoading();
  const showLoading = () => {
    present({
      message: "Loading...",
      duration: 3e3,
      spinner: "circles"
    });
  };
  const showCustomLoading = () => {
    present({
      message: "Fetching your settings, please wait...",
      duration: 2e3,
      spinner: "dots"
    });
  };
  return <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Loading</IonCardSubtitle>
        <IonCardTitle>Overlay Indicators</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <div className="flex flex-col gap-2">
          <IonButton expand="block" onClick={showLoading}>Show Default Loading</IonButton>
          <IonButton expand="block" color="secondary" onClick={showCustomLoading}>Show Custom Loading</IonButton>
        </div>
      </IonCardContent>
    </IonCard>;
}
export {
  LoadingShowcase as default
};
