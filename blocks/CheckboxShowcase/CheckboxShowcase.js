import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonItem, IonList } from "../../ionic-replica";
function CheckboxShowcase() {
  return <div className="">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Checkboxes</IonCardTitle>
          <IonCardSubtitle>iOS round styling</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <p className="mb-4">
            Notice how iOS checkboxes are perfectly circular, resembling standard radio buttons visually. 
            When checked, the interior fills up and a checkmark appears.
          </p>
          
          <IonList className="mb-4">
            <IonItem>
              <IonCheckbox justify="space-between">Primary</IonCheckbox>
            </IonItem>
            
            <IonItem>
              <IonCheckbox justify="space-between" color="secondary" checked={true}>
                Secondary (Checked)
              </IonCheckbox>
            </IonItem>

            <IonItem>
              <IonCheckbox justify="space-between" color="danger" checked={true}>
                Danger
              </IonCheckbox>
            </IonItem>

            <IonItem lines="none">
              <IonCheckbox justify="space-between" disabled={true}>
                Disabled
              </IonCheckbox>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
    </div>;
}
export {
  CheckboxShowcase as default
};
