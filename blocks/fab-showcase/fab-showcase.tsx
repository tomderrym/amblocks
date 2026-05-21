import { IoAdd, IoShare, IoChevronUpOutline } from 'react-icons/io5';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonFab, IonFabButton } from '../../ionic-replica';

export default function FabShowcase() {
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>FAB</IonCardSubtitle>
          <IonCardTitle>Floating Action Button</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>FABs are positioned relative to the screen. You can use standard or small size buttons.</p>
          <p className="mt-4 text-sm text-gray-500">Look at the corners of this page to see the FABs.</p>
        </IonCardContent>
      </IonCard>

      <IonFab vertical="bottom" horizontal="end">
        <IonFabButton>
          <IoAdd className="w-8 h-8" />
        </IonFabButton>
      </IonFab>

      <IonFab vertical="bottom" horizontal="start">
        <IonFabButton color="danger" size="small">
          <IoShare className="w-5 h-5" />
        </IonFabButton>
      </IonFab>

      <IonFab vertical="top" horizontal="end">
        <IonFabButton color="light" size="small">
          <IoChevronUpOutline className="w-5 h-5" />
        </IonFabButton>
      </IonFab>
    </>
  );
}
