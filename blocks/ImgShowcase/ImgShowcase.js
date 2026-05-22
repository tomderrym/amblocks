import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from "../../ionic-replica";
function ImgShowcase() {
  return <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Img</IonCardSubtitle>
        <IonCardTitle>Images</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p className="mb-4 text-gray-500">
          The IonImg component lazy loads images by default and smoothly fades them in once fully loaded.
        </p>
        
        <div className="w-full h-[200px] bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-inner flex items-center justify-center text-gray-400 text-sm">
          <IonImg src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" alt="Abstract landscape" />
        </div>
        
        <div className="w-full h-[200px] mt-4 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-inner flex items-center justify-center text-gray-400 text-sm">
          <IonImg src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop" alt="Abstract gradient" />
        </div>
      </IonCardContent>
    </IonCard>;
}
export {
  ImgShowcase as default
};
