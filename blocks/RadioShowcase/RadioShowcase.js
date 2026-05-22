import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonList, IonRadio, IonRadioGroup } from "../../ionic-replica";
function RadioShowcase() {
  return <div className="">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Radio Buttons</IonCardTitle>
          <IonCardSubtitle>iOS Radio Style</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <p className="mb-4">
            On iOS, radio buttons conventionally resemble checkboxes appearing on the right side of the list item, often with a simple checkmark and no bounding circle.
          </p>
          
          <IonList className="mb-4">
            <IonRadioGroup value="biff">
              <IonItem>
                <IonRadio value="biff" justify="space-between">Biff (Default)</IonRadio>
              </IonItem>
              <IonItem>
                <IonRadio value="griff" justify="space-between" color="secondary">Griff (Secondary)</IonRadio>
              </IonItem>
              <IonItem>
                <IonRadio value="buford" justify="space-between" color="danger">Buford (Danger)</IonRadio>
              </IonItem>
              <IonItem lines="none">
                <IonRadio value="tannen" justify="space-between" color="success">Tannen (Success)</IonRadio>
              </IonItem>
            </IonRadioGroup>
          </IonList>
        </IonCardContent>
      </IonCard>
    </div>;
}
export {
  RadioShowcase as default
};
