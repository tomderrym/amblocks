import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, useIonAlert } from '../../ionic-replica';

export default function AlertShowcase() {
  const [presentAlert] = useIonAlert();

  return (
    <div className="">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Standard Alert</IonCardTitle>
          <IonCardSubtitle>iOS native styling</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <p className="mb-4">
            Notice the semi-transparent backdrop, the center alignment, and the horizontal 
            button placement with thin border separators characteristic of iOS alerts.
          </p>
          <IonButton
            expand="block"
            onClick={() =>
              presentAlert({
                header: 'Use Location?',
                message: 'This app wants to use your location for better recommendations.',
                buttons: ['Disagree', 'Agree'],
              })
            }
          >
            Show Alert
          </IonButton>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Prompt Alert</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
           <p className="mb-4">
            Alerts can contain inputs. Notice the input styling resembles a native iOS text field inside a UIAlertController.
          </p>
          <IonButton
            expand="block"
            onClick={() =>
              presentAlert({
                header: 'Please enter your info',
                buttons: ['OK'],
                inputs: [
                  {
                    placeholder: 'Name',
                  },
                  {
                    placeholder: 'Nickname (max 8 characters)',
                    attributes: {
                      maxlength: 8,
                    },
                  },
                  {
                    type: 'number',
                    placeholder: 'Age',
                    min: 1,
                    max: 100,
                  },
                  {
                    type: 'textarea',
                    placeholder: 'A little about yourself',
                  },
                ],
              })
            }
          >
            Show Prompt
          </IonButton>
        </IonCardContent>
      </IonCard>
    </div>
  );
}
