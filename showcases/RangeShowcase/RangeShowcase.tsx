import { useState } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonRange } from '../../ionic-replica';

export default function RangeShowcase() {
  const [value, setValue] = useState(50);

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Range</IonCardSubtitle>
        <IonCardTitle>Sliders</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p className="mb-4">Standard iOS Slider with a white thumb and solid colored active track.</p>
        <IonItem>
          <IonLabel className="w-12">{value}</IonLabel>
          <IonRange value={value} min={0} max={100} onInput={(e: any) => setValue(parseInt(e.target.value))} />
        </IonItem>
        <IonItem>
          <IonLabel className="w-12 text-secondary">Sec</IonLabel>
          <IonRange value={60} color="secondary" />
        </IonItem>
        <IonItem>
          <IonLabel className="w-12 text-success">Succ</IonLabel>
          <IonRange value={80} color="success" />
        </IonItem>
        <IonItem lines="none">
          <IonLabel className="w-12 text-danger">Dang</IonLabel>
          <IonRange value={40} color="danger" />
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
}
