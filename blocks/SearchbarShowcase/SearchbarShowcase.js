import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSearchbar } from "../../ionic-replica";
function SearchbarShowcase() {
  return <div className="">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Searchbar</IonCardTitle>
          <IonCardSubtitle>Native iOS look</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <p className="mb-4">
            The iOS searchbar has a distinctive gray rounded background, a centered placeholder 
            (which moves left when focused), and a clear button that appears when typing.
          </p>
          
          <IonSearchbar placeholder="Search" />
          <IonSearchbar placeholder="Animated" animated={true} />
          <IonSearchbar placeholder="Show Cancel Button" showCancelButton="always" />
          <IonSearchbar placeholder="Danger Color" color="danger" />
        </IonCardContent>
      </IonCard>
    </div>;
}
export {
  SearchbarShowcase as default
};
