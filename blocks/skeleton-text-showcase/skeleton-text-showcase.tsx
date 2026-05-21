import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonSkeletonText } from '../../ionic-replica';

export default function SkeletonTextShowcase() {
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Skeleton Text</IonCardSubtitle>
          <IonCardTitle>Loading States</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          Display placeholder skeleton components while content is loading.
        </IonCardContent>
      </IonCard>

      <div className="bg-white dark:bg-[#1C1C1E] rounded-xl overflow-hidden mx-4 my-4 shadow-sm border border-[rgba(0,0,0,0.04)] dark:border-[#38383A]">
        {[1, 2, 3].map((i) => (
          <IonItem key={i}>
            <IonAvatar slot="start" className="mr-4">
              <IonSkeletonText className="w-full h-full" />
            </IonAvatar>
            <IonLabel>
              <h2><IonSkeletonText className="w-1/2 h-5 mb-1" /></h2>
              <p><IonSkeletonText className="w-3/4 h-3" /></p>
            </IonLabel>
          </IonItem>
        ))}
      </div>
    </>
  );
}
