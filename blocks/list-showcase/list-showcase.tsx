import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList } from '../../ionic-replica';

export default function ListShowcase() {
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>List</IonCardSubtitle>
          <IonCardTitle>Data Rows</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>Lists are used to display rows of information, such as a contact list, playlist, or menu.</p>
        </IonCardContent>
      </IonCard>

      <div className="mx-4 mb-4 mt-6 text-sm font-semibold text-gray-500 uppercase tracking-wider pl-4">Standard List</div>
      <IonList>
        <IonItem>
          <IonLabel>Pokémon Yellow</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Super Smash Bros.</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Mario Kart 64</IonLabel>
        </IonItem>
        <IonItem lines="none">
          <IonLabel>GoldenEye 007</IonLabel>
        </IonItem>
      </IonList>

      <div className="mx-4 mb-4 mt-8 text-sm font-semibold text-gray-500 uppercase tracking-wider pl-4">Inset List</div>
      <IonList inset>
        <IonItem>
          <IonLabel>
            <h2>Winston Churchill</h2>
            <p className="text-gray-500 text-sm">winston@example.com</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <h2>Franklin D. Roosevelt</h2>
            <p className="text-gray-500 text-sm">franklin@example.com</p>
          </IonLabel>
        </IonItem>
        <IonItem lines="none">
          <IonLabel>
            <h2>Joseph Stalin</h2>
            <p className="text-gray-500 text-sm">joseph@example.com</p>
          </IonLabel>
        </IonItem>
      </IonList>
    </>
  );
}
