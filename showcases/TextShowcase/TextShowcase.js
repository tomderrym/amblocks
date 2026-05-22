import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonText } from "../../ionic-replica";
function TextShowcase() {
  return <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Text</IonCardSubtitle>
        <IonCardTitle>Typography Component</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <div className="flex flex-col gap-4">
          <IonText color="primary">
            <h3>Primary Text</h3>
            <p>This text is colored with the primary color.</p>
          </IonText>
          
          <IonText color="secondary">
            <h3>Secondary Text</h3>
            <p>This text uses the secondary color theme.</p>
          </IonText>
          
          <IonText color="danger">
            <h3>Danger Text</h3>
            <p>Useful for error messages or destructive actions.</p>
          </IonText>
          
          <IonText color="warning">
            <h3>Warning Text</h3>
            <p>Highlights items needing attention.</p>
          </IonText>

          <IonText color="success">
            <h3>Success Text</h3>
            <p>Indicates a successful action.</p>
          </IonText>

          <IonText color="medium">
            <h3>Medium Text</h3>
            <p>Provides less emphasis than regular text.</p>
          </IonText>
        </div>
      </IonCardContent>
    </IonCard>;
}
export {
  TextShowcase as default
};
