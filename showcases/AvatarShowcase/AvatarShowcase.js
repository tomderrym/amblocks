import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonNote, IonThumbnail } from "../../ionic-replica";
function AvatarShowcase() {
  return <>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Avatars & Thumbnails</IonCardSubtitle>
          <IonCardTitle>Displaying Media</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>Avatars and thumbnails in list items.</p>
        </IonCardContent>
      </IonCard>

      <div className="bg-white dark:bg-[#1C1C1E] rounded-xl overflow-hidden mx-4 my-4 shadow-sm border border-[rgba(0,0,0,0.04)] dark:border-[#38383A]">
        <IonItem>
          <IonAvatar slot="start" className="mr-4">
            <img src="https://i.pravatar.cc/150?img=11" alt="avatar" className="w-full h-full object-cover" />
          </IonAvatar>
          <IonLabel>
            <h2>Finn</h2>
            <p className="text-[13px] text-gray-500">I'm a big deal</p>
          </IonLabel>
          <IonNote slot="end">10:30</IonNote>
        </IonItem>
        <IonItem>
          <IonThumbnail slot="start" className="mr-4">
            <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=150" alt="thumbnail" className="w-full h-full object-cover" />
          </IonThumbnail>
          <IonLabel>
            <h2>Mountain</h2>
            <p className="text-[13px] text-gray-500">Photography</p>
          </IonLabel>
        </IonItem>
      </div>
    </>;
}
export {
  AvatarShowcase as default
};
