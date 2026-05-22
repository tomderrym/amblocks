import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonList, IonToggle } from '../../ionic-replica';

export default function ToggleShowcase() {
  return (
    <div className="">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Toggles</IonCardTitle>
          <IonCardSubtitle>The classic iOS switch</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <p className="mb-4">
            Notice how the iOS toggle is highly robust: it uses a large pill background that 
            expands to show color when active, combined with a precise shadow on the knob.
          </p>
          
          <IonList className="mb-4">
            <IonItem>
              <IonToggle justify="space-between">Default (Primary)</IonToggle>
            </IonItem>
            
            <IonItem>
              <IonToggle justify="space-between" checked={true} color="secondary">Secondary</IonToggle>
            </IonItem>
            
            <IonItem>
              <IonToggle justify="space-between" checked={true} color="success">Success</IonToggle>
            </IonItem>
            
            <IonItem>
              <IonToggle justify="space-between" checked={true} color="danger">Danger</IonToggle>
            </IonItem>

            <IonItem>
              <IonToggle justify="space-between" checked={true} color="primary">Primary (Checked)</IonToggle>
            </IonItem>
            
            <IonItem lines="none">
              <IonToggle justify="space-between" disabled={true} checked={true}>Disabled & Checked</IonToggle>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
    </div>
  );
}
