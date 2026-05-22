import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonLabel, IonAvatar } from "../../ionic-replica";
function ChipShowcase() {
  return <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Chips</IonCardSubtitle>
        <IonCardTitle>Pill Components</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <div className="flex flex-wrap gap-2">
          <IonChip>Default Chip</IonChip>
          <IonChip color="primary">Primary Chip</IonChip>
          <IonChip color="success">Success Chip</IonChip>
          <IonChip color="danger">Danger</IonChip>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <IonChip outline color="primary">Outline Primary</IonChip>
          <IonChip outline color="danger">Outline Danger</IonChip>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <IonChip>
            <IonAvatar className="w-6 h-6 mr-1 -ml-1">
              <img src="https://i.pravatar.cc/150?img=33" alt="avatar" className="w-full h-full object-cover" />
            </IonAvatar>
            <IonLabel>Avatar Chip</IonLabel>
          </IonChip>
        </div>
      </IonCardContent>
    </IonCard>;
}
export {
  ChipShowcase as default
};
