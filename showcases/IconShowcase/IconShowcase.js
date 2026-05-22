import { IoPlanetOutline, IoRocketOutline, IoMoonOutline, IoStarOutline } from "react-icons/io5";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList } from "../../ionic-replica";
function IconShowcase() {
  return <>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Icon</IonCardSubtitle>
          <IonCardTitle>Visual Indicators</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>Ionicons is an open-sourced icon set that powers Ionic Framework. Here we replicate them using <code>react-icons/io5</code>.</p>
        </IonCardContent>
      </IonCard>

      <IonList inset>
        <IonItem>
          <IoPlanetOutline className="w-6 h-6 mr-4 text-primary" slot="start" />
          <IonLabel>Planet</IonLabel>
        </IonItem>
        <IonItem>
          <IoRocketOutline className="w-6 h-6 mr-4 text-danger" slot="start" />
          <IonLabel>Rocket</IonLabel>
        </IonItem>
        <IonItem>
          <IoMoonOutline className="w-6 h-6 mr-4 text-warning" slot="start" />
          <IonLabel>Moon</IonLabel>
        </IonItem>
        <IonItem lines="none">
          <IoStarOutline className="w-6 h-6 mr-4 text-success" slot="start" />
          <IonLabel>Star</IonLabel>
        </IonItem>
      </IonList>

      <div className="mx-4 mt-6 flex justify-around p-4 bg-white dark:bg-[#1C1C1E] rounded-xl shadow-sm border border-[rgba(0,0,0,0.04)] dark:border-[#38383A]">
        <IoPlanetOutline className="w-8 h-8 text-indigo-500" />
        <IoRocketOutline className="w-8 h-8 text-pink-500" />
        <IoMoonOutline className="w-8 h-8 text-yellow-500" />
        <IoStarOutline className="w-8 h-8 text-lime-500" />
      </div>
    </>;
}
export {
  IconShowcase as default
};
