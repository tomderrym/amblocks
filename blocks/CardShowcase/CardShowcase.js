import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "../../ionic-replica";
function CardShowcase() {
  return <div className="">
      <div className="mb-4 text-sm text-gray-600 px-2">
        iOS cards drop more shadow, have slightly different padding on the header/content, and do not use the sharp ripple effect of Material Design.
      </div>
      
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Here's a small text description for the card content. Nothing more, nothing less.
        </IonCardContent>
      </IonCard>

      <IonCard>
        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        <IonCardHeader>
          <IonCardTitle>Destination</IonCardTitle>
          <IonCardSubtitle>Explore the mountains</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          The mountains are calling, and I must go. Just a beautiful picture to demonstrate card media.
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Card with Buttons</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p className="mb-2">A card structure demonstrating interactive elements.</p>
          <IonButton fill="clear">Action 1</IonButton>
          <IonButton fill="clear">Action 2</IonButton>
        </IonCardContent>
      </IonCard>
    </div>;
}
export {
  CardShowcase as default
};
