import { useState } from "react";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSegment, IonSegmentButton } from "../../ionic-replica";
function SegmentShowcase() {
  const [segment, setSegment] = useState("first");
  const [segment3, setSegment3] = useState("all");
  return <>
      <IonSegment value={segment} onIonChange={(e) => setSegment(e.detail.value)}>
        <IonSegmentButton value="first">Left</IonSegmentButton>
        <IonSegmentButton value="second">Right</IonSegmentButton>
      </IonSegment>

      <IonSegment value={segment3} onIonChange={(e) => setSegment3(e.detail.value)}>
        <IonSegmentButton value="all">All</IonSegmentButton>
        <IonSegmentButton value="missed">Missed</IonSegmentButton>
        <IonSegmentButton value="voicemail">Voicemail</IonSegmentButton>
      </IonSegment>

      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Segment</IonCardSubtitle>
          <IonCardTitle>Tab Selection</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          Selected segment: <strong>{segment}</strong>
        </IonCardContent>
      </IonCard>
    </>;
}
export {
  SegmentShowcase as default
};
