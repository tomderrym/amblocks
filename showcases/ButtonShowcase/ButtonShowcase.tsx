import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '../../ionic-replica';
import { IoStar } from 'react-icons/io5';

export default function ButtonShowcase() {
  return (
    <div className="">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Buttons</IonCardTitle>
          <IonCardSubtitle>iOS standard buttons</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <p className="mb-4">
            Notice that in iOS Mode, buttons are slightly more compact, have different 
            active opacity states when pressed, and use standard rounded corners.
          </p>

          <h3 className="font-semibold mb-2">Default</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <IonButton>Default</IonButton>
            <IonButton disabled={true}>Disabled</IonButton>
          </div>

          <h3 className="font-semibold mb-2">Fill Looks</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <IonButton fill="clear">Clear</IonButton>
            <IonButton fill="outline">Outline</IonButton>
            <IonButton fill="solid">Solid</IonButton>
          </div>

          <h3 className="font-semibold mb-2">Colors</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <IonButton color="primary">Primary</IonButton>
            <IonButton color="secondary">Secondary</IonButton>
            <IonButton color="success">Success</IonButton>
            <IonButton color="warning">Warning</IonButton>
            <IonButton color="danger">Danger</IonButton>
            <IonButton color="light">Light</IonButton>
            <IonButton color="dark">Dark</IonButton>
            <IonButton color="medium">Medium</IonButton>
            <IonButton color="tertiary">Tertiary</IonButton>
          </div>

          <h3 className="font-semibold mb-2">Shapes</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <IonButton shape="round">Round</IonButton>
          </div>

          <h3 className="font-semibold mb-2">Icons</h3>
          <div className="flex flex-wrap gap-2">
            <IonButton>
              <IoStar className="mr-2" />
              Left Icon
            </IonButton>
            <IonButton>
              Right Icon
              <IoStar className="ml-2" />
            </IonButton>
            <IonButton>
              <IoStar />
            </IonButton>
          </div>
        </IonCardContent>
      </IonCard>
    </div>
  );
}
