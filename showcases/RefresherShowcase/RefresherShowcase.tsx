import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonRefresher, IonRefresherContent } from '../../ionic-replica';
import { useState } from 'react';

export default function RefresherShowcase() {
  const [items, setItems] = useState([1, 2, 3]);

  const handleRefresh = (event: CustomEvent) => {
    setTimeout(() => {
      setItems([Math.random(), ...items]);
      event.detail.complete();
    }, 2000);
  };

  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Refresher</IonCardSubtitle>
          <IonCardTitle>Pull to Refresh</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>Tap the refresh control below to simulate a pull-to-refresh action.</p>
        </IonCardContent>
      </IonCard>

      <div className="bg-white dark:bg-[#1C1C1E] mx-4 rounded-xl shadow-sm border border-[rgba(0,0,0,0.04)] dark:border-[#38383A] overflow-hidden my-4 min-h-[200px]">
        <IonRefresher onIonRefresh={handleRefresh}>
          <IonRefresherContent />
        </IonRefresher>

        {items.map((i, index) => (
          <IonItem key={index}>
            <IonLabel>Item {i.toString().substring(0, 5)}</IonLabel>
          </IonItem>
        ))}
      </div>
    </>
  );
}
