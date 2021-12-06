import React, { Fragment, useState } from "react";
import ReactPlayer from "react-player";
import { closeOutline } from "ionicons/icons";
import ReactAudioPlayer from "react-audio-player";

import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

interface Props {
  onCancel: Function;
}

interface State {}

class PageRelax extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <IonHeader className="ion-no-border" translucent={true}>
          <IonToolbar>
            <IonTitle>ENTSPANNEN</IonTitle>
            <IonButtons slot="start">
              <IonButton onClick={(_) => this.props.onCancel()}>
                <IonIcon icon={closeOutline}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonList>
            <IonCard>
              <IonImg src="/assets/30ocean.jpg" /> <br />
              <IonCardHeader>
                <IonCardSubtitle>Entspanne am Strand</IonCardSubtitle>
                <IonCardTitle>30-min Meeresgeräusche</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <ReactAudioPlayer
                  src="/assets/5guided.mp3"
                  autoPlay={false}
                  controls
                />
                <br />
                <br />
                <IonText>
                  Entspanne deinen Geist und Körper zu entspannenden Klängen und
                  eine angenehme Lichtshow.
                </IonText>
              </IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol size="3"> </IonCol>
                  <IonCol></IonCol>
                  <IonCol size="3"></IonCol>
                </IonRow>{" "}
              </IonGrid>
            </IonCard>
            <IonCard>
              <IonImg src="/assets/15forest.jpg" /> <br />
              <IonCardHeader>
                <IonCardSubtitle>Tauche in den Wald ein</IonCardSubtitle>
                <IonCardTitle>60-min Naturgeräusche</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <ReactAudioPlayer
                  src="/assets/5guided.mp3"
                  autoPlay={false}
                  controls
                />
                <br />
                <br />
                <IonText>
                  Entspanne deinen Geist und Körper zu entspannenden Klängen.
                </IonText>
              </IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol size="3"> </IonCol>
                  <IonCol></IonCol>
                  <IonCol size="3"></IonCol>
                </IonRow>{" "}
              </IonGrid>
            </IonCard>
          </IonList>
        </IonContent>
      </Fragment>
    );
  }
}

export default PageRelax;
