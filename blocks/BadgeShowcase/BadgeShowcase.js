import { IonBadge, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList } from "../../ionic-replica";
function BadgeShowcase() {
  return <div className="">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Badges</IonCardTitle>
          <IonCardSubtitle>Inline notifications & counters</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <p className="mb-4">
            On iOS, badges typically have a softer border radius compared to Material Design, 
            often appearing pill-shaped.
          </p>
          <div className="flex gap-4 flex-wrap mb-6">
            <IonBadge color="primary">22</IonBadge>
            <IonBadge color="secondary">99+</IonBadge>
            <IonBadge color="tertiary">New</IonBadge>
            <IonBadge color="success">Paid</IonBadge>
            <IonBadge color="warning">Pending</IonBadge>
            <IonBadge color="danger">Failed</IonBadge>
            <IonBadge color="light">Light</IonBadge>
            <IonBadge color="medium">Medium</IonBadge>
            <IonBadge color="dark">Dark</IonBadge>
          </div>

          <IonList className="mb-4">
            <IonItem>
              <IonLabel>Followers</IonLabel>
              <IonBadge color="primary" slot="end">22k</IonBadge>
            </IonItem>
            <IonItem>
              <IonLabel>Likes</IonLabel>
              <IonBadge color="secondary" slot="end">118k</IonBadge>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>Messages</IonLabel>
              <IonBadge color="danger" slot="end">5</IonBadge>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
    </div>;
}
export {
  BadgeShowcase as default
};
