import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, useIonPopover } from '../../ionic-replica';

const PopoverList = ({ onDismiss }: { onDismiss: () => void }) => (
  <IonList>
    <IonItem onClick={onDismiss} button>
      <IonLabel>Settings</IonLabel>
    </IonItem>
    <IonItem onClick={onDismiss} button>
      <IonLabel>Profile</IonLabel>
    </IonItem>
    <IonItem onClick={onDismiss} button>
      <IonLabel>Help & Feedback</IonLabel>
    </IonItem>
    <IonItem lines="none" onClick={onDismiss} button color="danger">
      <IonLabel color="danger">Sign Out</IonLabel>
    </IonItem>
  </IonList>
);

export default function PopoverShowcase() {
  const [present, dismiss] = useIonPopover();

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Popover</IonCardSubtitle>
        <IonCardTitle>Contextual Menus</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p className="mb-4 text-gray-500">
          Popovers typically appear to provide contextual settings or menus.
        </p>

        <div className="flex gap-4">
          <IonButton
            expand="block"
            onClick={(e) =>
              present({
                component: PopoverList,
                event: e,
              })
            }
          >
            Show Popover
          </IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  );
}
