import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, useIonActionSheet } from '../../ionic-replica';

export default function ActionSheetShowcase() {
  const [present] = useIonActionSheet();

  const openActionSheet = () => {
    present({
      header: 'Albums',
      buttons: [
        { text: 'Delete', role: 'destructive' },
        { text: 'Share' },
        { text: 'Play' },
        { text: 'Favorite' },
        { text: 'Cancel', role: 'cancel' },
      ],
    });
  };

  const openMinimalActionSheet = () => {
    present({
      buttons: [
        { text: 'Save Image' },
        { text: 'Copy Link' },
        { text: 'Cancel', role: 'cancel' },
      ],
    });
  };

  return (
    <div className="">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Action Sheet</IonCardTitle>
          <IonCardSubtitle>iOS implementation</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <p className="mb-4">
            On iOS, the Action Sheet slides up from the bottom of the screen. Notice the 
            distinctive border radius, the separation of the Cancel button, and how the 
            destructive action (Delete) is styled with red text.
          </p>
          <div className="flex flex-col gap-4">
            <IonButton expand="block" onClick={openActionSheet}>Standard Action Sheet</IonButton>
            <IonButton expand="block" color="secondary" onClick={openMinimalActionSheet}>Minimal Action Sheet</IonButton>
          </div>
        </IonCardContent>
      </IonCard>
    </div>
  );
}
