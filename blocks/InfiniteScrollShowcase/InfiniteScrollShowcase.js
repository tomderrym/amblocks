import { useState } from "react";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel } from "../../ionic-replica";
function InfiniteScrollShowcase() {
  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 20; i++) {
      newItems.push(`Item ${1 + i}`);
    }
    return newItems;
  };
  const [items, setItems] = useState(generateItems());
  const [disabled, setDisabled] = useState(false);
  const loadData = (ev) => {
    setTimeout(() => {
      setItems([...items, ...generateItems().map((_, i) => `Item ${items.length + 1 + i}`)]);
      ev.detail.complete();
      if (items.length > 50) {
        setDisabled(true);
      }
    }, 1e3);
  };
  return <>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Infinite Scroll</IonCardSubtitle>
          <IonCardTitle>Scroll to Load</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>Scroll down to the bottom of the list to trigger more items to load.</p>
        </IonCardContent>
      </IonCard>

      <div className="bg-white dark:bg-[#1C1C1E] mx-4 rounded-xl shadow-sm border border-[rgba(0,0,0,0.04)] dark:border-[#38383A] my-4 h-[300px] overflow-y-auto">
        {items.map((item, index) => <IonItem key={index}>
            <IonLabel>{item}</IonLabel>
          </IonItem>)}

        <IonInfiniteScroll onIonInfinite={loadData} disabled={disabled}>
          <IonInfiniteScrollContent loadingText="Loading more items..." loadingSpinner="bubbles" />
        </IonInfiniteScroll>
      </div>
    </>;
}
export {
  InfiniteScrollShowcase as default
};
