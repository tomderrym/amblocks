import { useState } from "react";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSelect, IonSelectOption } from "../../ionic-replica";
function SelectShowcase() {
  const [value, setValue] = useState("apples");
  return <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Select</IonCardSubtitle>
        <IonCardTitle>Pickers</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonSelect
    label="Favorite Fruit"
    value={value}
    onChange={(e) => setValue(e.target.value)}
  >
          <IonSelectOption value="apples">Apples</IonSelectOption>
          <IonSelectOption value="oranges">Oranges</IonSelectOption>
          <IonSelectOption value="bananas">Bananas</IonSelectOption>
          <IonSelectOption value="grapes">Grapes</IonSelectOption>
        </IonSelect>

        <p className="mt-4 text-sm text-gray-500">Selected value: {value}</p>
      </IonCardContent>
    </IonCard>;
}
export {
  SelectShowcase as default
};
