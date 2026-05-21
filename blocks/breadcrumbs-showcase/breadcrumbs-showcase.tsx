import { IoChevronForwardOutline, IoHomeOutline, IoFolderOutline, IoDocumentOutline } from 'react-icons/io5';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonBreadcrumbs, IonBreadcrumb } from '../../ionic-replica';

export default function BreadcrumbsShowcase() {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Breadcrumbs</IonCardSubtitle>
        <IonCardTitle>Navigation Trails</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm text-gray-500 mb-2">Default</p>
            <IonBreadcrumbs>
              <IonBreadcrumb href="#">Home</IonBreadcrumb>
              <IonBreadcrumb separator />
              <IonBreadcrumb href="#">Electronics</IonBreadcrumb>
              <IonBreadcrumb separator />
              <IonBreadcrumb href="#">Photography</IonBreadcrumb>
              <IonBreadcrumb separator />
              <IonBreadcrumb active>Cameras</IonBreadcrumb>
            </IonBreadcrumbs>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-2">Icons</p>
            <IonBreadcrumbs>
              <IonBreadcrumb href="#">
                <IoHomeOutline className="w-4 h-4 mr-1" />
                Home
              </IonBreadcrumb>
              <IonBreadcrumb separator />
              <IonBreadcrumb href="#">
                <IoFolderOutline className="w-4 h-4 mr-1" />
                Documents
              </IonBreadcrumb>
              <IonBreadcrumb separator />
              <IonBreadcrumb active>
                <IoDocumentOutline className="w-4 h-4 mr-1" />
                Resume.pdf
              </IonBreadcrumb>
            </IonBreadcrumbs>
          </div>
        </div>
      </IonCardContent>
    </IonCard>
  );
}
