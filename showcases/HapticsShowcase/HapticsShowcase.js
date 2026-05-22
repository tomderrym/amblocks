import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "../../ionic-replica";
function HapticsShowcase() {
  const triggerHaptic = (type) => {
    if (typeof navigator === "undefined" || !navigator.vibrate) {
      alert("Your browser or device does not support the Vibration API.");
      return;
    }
    switch (type) {
      case "impact-light":
        navigator.vibrate(10);
        break;
      case "impact-medium":
        navigator.vibrate(20);
        break;
      case "impact-heavy":
        navigator.vibrate([30]);
        break;
      case "selection":
        navigator.vibrate(5);
        break;
      case "notification-success":
        navigator.vibrate([10, 30, 20]);
        break;
      case "notification-warning":
        navigator.vibrate([20, 40, 20, 40, 20]);
        break;
      case "notification-error":
        navigator.vibrate([50, 100, 50, 100, 50]);
        break;
    }
  };
  return <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Haptics</IonCardSubtitle>
        <IonCardTitle>Web Vibration API</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p className="mb-6 text-gray-500">
          Simulating native iOS haptics using the Web Vibration API. Note: This requires a compatible device (like Android) as iOS Safari currently does not support the Vibration API.
        </p>

        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Impact</h3>
        <div className="flex flex-col gap-3 mb-6">
          <IonButton expand="block" color="light" onClick={() => triggerHaptic("impact-light")}>Light</IonButton>
          <IonButton expand="block" color="light" onClick={() => triggerHaptic("impact-medium")}>Medium</IonButton>
          <IonButton expand="block" color="light" onClick={() => triggerHaptic("impact-heavy")}>Heavy</IonButton>
        </div>

        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Notification</h3>
        <div className="flex flex-col gap-3 mb-6">
          <IonButton expand="block" color="success" onClick={() => triggerHaptic("notification-success")}>Success</IonButton>
          <IonButton expand="block" color="warning" onClick={() => triggerHaptic("notification-warning")}>Warning</IonButton>
          <IonButton expand="block" color="danger" onClick={() => triggerHaptic("notification-error")}>Error</IonButton>
        </div>

        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Selection</h3>
        <IonButton expand="block" color="light" onClick={() => triggerHaptic("selection")}>Selection</IonButton>
      </IonCardContent>
    </IonCard>;
}
export {
  HapticsShowcase as default
};
