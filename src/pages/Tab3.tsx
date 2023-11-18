import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Coming Soon</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Coming Soon</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="This page is under development. Please wait while we release the next build" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
