import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonNote } from "../../ionic-replica";
function NoteShowcase() {
  return <>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Note</IonCardSubtitle>
          <IonCardTitle>Text Context</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>Notes are text elements generally used as subtitles or to provide additional information.</p>
        </IonCardContent>
      </IonCard>

      <IonList inset>
        <IonItem>
          <IonLabel>Default Note</IonLabel>
          <IonNote slot="end">99</IonNote>
        </IonItem>
        <IonItem>
          <IonLabel>Primary Note</IonLabel>
          <IonNote slot="end" color="primary">New</IonNote>
        </IonItem>
        <IonItem>
          <IonLabel>Secondary Note</IonLabel>
          <IonNote slot="end" color="secondary">Draft</IonNote>
        </IonItem>
        <IonItem>
          <IonLabel>Danger Note</IonLabel>
          <IonNote slot="end" color="danger">Failed</IonNote>
        </IonItem>
        <IonItem>
          <IonLabel>
            <h2>Meeting</h2>
            <p>Team sync</p>
          </IonLabel>
          <IonNote slot="end">10:00 AM</IonNote>
        </IonItem>
      </IonList>
    </>;
}
export {
  NoteShowcase as default
};
