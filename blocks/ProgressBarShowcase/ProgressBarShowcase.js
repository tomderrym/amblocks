import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonProgressBar, IonSpinner } from "../../ionic-replica";
function ProgressBarShowcase() {
  return <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Progress & Spinners</IonCardSubtitle>
        <IonCardTitle>Loaders</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <div className="mb-4">
          <p className="mb-2 text-sm text-gray-500">Determinate (50%)</p>
          <IonProgressBar value={0.5} />
        </div>

        <div className="mb-4">
          <p className="mb-2 text-sm text-gray-500">Determinate colored</p>
          <IonProgressBar value={0.7} color="danger" />
        </div>
        
        <div className="mb-4">
          <p className="mb-2 text-sm text-gray-500">Indeterminate</p>
          <IonProgressBar type="indeterminate" color="success" />
        </div>

        <div>
          <p className="mb-2 text-sm text-gray-500">Spinners</p>
          <div className="flex justify-center mt-2 gap-4">
            <IonSpinner name="lines" color="primary" />
            <IonSpinner name="lines" color="danger" />
            <IonSpinner name="lines" color="success" />
            <IonSpinner name="lines" color="secondary" />
          </div>
        </div>
      </IonCardContent>
    </IonCard>;
}
export {
  ProgressBarShowcase as default
};
