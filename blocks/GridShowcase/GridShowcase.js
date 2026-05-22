import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow } from "../../ionic-replica";
function GridShowcase() {
  return <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Grid</IonCardSubtitle>
        <IonCardTitle>Flexbox Layout</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p className="mb-4">The grid is a powerful mobile-first flexbox system for building custom layouts.</p>
        
        <IonGrid>
          <IonRow>
            <IonCol className="bg-[#3880FF] text-white text-center rounded m-1 py-2">1 of 3</IonCol>
            <IonCol className="bg-[#3dc2ff] text-white text-center rounded m-1 py-2">2 of 3</IonCol>
            <IonCol className="bg-[#5260ff] text-white text-center rounded m-1 py-2">3 of 3</IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="bg-[#2dd36f] text-white text-center rounded m-1 py-2">1 of 2</IonCol>
            <IonCol className="bg-[#ffc409] text-white text-center rounded m-1 py-2">2 of 2</IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3" className="bg-[#eb445a] text-white text-center rounded m-1 py-2">Size 3</IonCol>
            <IonCol className="bg-[#92949c] text-white text-center rounded m-1 py-2">Auto width</IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>;
}
export {
  GridShowcase as default
};
