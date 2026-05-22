import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSpinner } from "../../ionic-replica";
function SpinnerShowcase() {
  return <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Spinner</IonCardSubtitle>
        <IonCardTitle>Loading Indicators</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Lines</span>
            <IonSpinner name="lines" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Crescent</span>
            <IonSpinner name="crescent" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Dots</span>
            <IonSpinner name="dots" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Circles</span>
            <IonSpinner name="circles" />
          </div>
          
          <div className="mt-4 pt-4 border-t border-[rgba(60,60,67,0.29)] dark:border-[#38383A]">
            <p className="text-sm font-medium text-gray-500 mb-4">Custom Colors</p>
            <div className="flex justify-around">
              <IonSpinner name="lines" color="primary" />
              <IonSpinner name="crescent" color="secondary" />
              <IonSpinner name="dots" color="danger" />
              <IonSpinner name="circles" color="warning" />
            </div>
          </div>
        </div>
      </IonCardContent>
    </IonCard>;
}
export {
  SpinnerShowcase as default
};
