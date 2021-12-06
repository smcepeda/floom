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

class PagePlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <IonHeader className="ion-no-border" translucent={true}>
          <IonToolbar>
            <IonTitle>BREATHWORK</IonTitle>
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
              <IonImg src="/assets/7breathwork.jpg" />{" "}
              <IonCardHeader>
                <IonCardSubtitle>MEHR ENERGIE</IonCardSubtitle>
                <IonCardTitle>7-min geführte Breathwork Session</IonCardTitle>
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
                  Use this gentle morning breath practice to start the day with
                  an clear, calm, and energized mind.
                </IonText>
              </IonCardContent>
            </IonCard>
            <IonCard>
              <IonImg src="/assets/20breathwork.jpg" /> <br />
              <IonCardHeader>
                <IonCardSubtitle>FÜR FORTGESCHRITTENE</IonCardSubtitle>
                <IonCardTitle>20-min geführte Pranayama-Session</IonCardTitle>
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
                  Meditative bass music optimized with healing low frequencies
                  and theta waves to rhythmically guide your breathing.
                </IonText>
              </IonCardContent>
            </IonCard>
          </IonList>
        </IonContent>
      </Fragment>
    );
  }
}

export default PagePlayer;
