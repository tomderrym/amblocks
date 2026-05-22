import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonDatetime } from '../../ionic-replica';

export default function DatetimeShowcase() {
  return (
    <div className="">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Datetime Picker</IonCardTitle>
          <IonCardSubtitle>Inline iOS Calendar</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
           <p className="mb-4">
            Notice the distinct iOS styling for the calendar, including the rounded selection 
            indicators, the specific scroll snapping for time wheels, and the compact presentation.
          </p>
          <div className="flex justify-center flex-col items-center">
            <IonDatetime presentation="date" />
          </div>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Time Picker</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <div className="flex justify-center flex-col items-center">
            <IonDatetime presentation="time" />
          </div>
        </IonCardContent>
      </IonCard>
    </div>
  );
}
