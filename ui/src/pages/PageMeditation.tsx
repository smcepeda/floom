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
            <IonTitle>MEDITATION</IonTitle>
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
              <IonImg src="/assets/m1.jpg" />{" "}
              <IonCardHeader>
                <IonCardSubtitle>ANFÄNGER</IonCardSubtitle>
                <IonCardTitle>5-min geführte Meditation</IonCardTitle>
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
                  Geschrieben und erzählt von John Davisi. John ist ein
                  Achtsamkeits Lebenscoach, Lehrer und Sprecher.
                </IonText>
              </IonCardContent>
            </IonCard>
            <IonCard>
              <IonImg src="/assets/m2.jpg" /> <br />
              <IonCardHeader>
                <IonCardSubtitle>ANFÄNGER</IonCardSubtitle>
                <IonCardTitle>10-min geführte Meditation</IonCardTitle>
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
                  Geschrieben und erzählt von John Davisi. John ist ein
                  Achtsamkeits Lebenscoach, Lehrer und Sprecher.
                </IonText>
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonImg src="/assets/m.jpg" /> <br />
              <IonCardHeader>
                <IonCardSubtitle>Anfänger</IonCardSubtitle>
                <IonCardTitle>15-min Meditation</IonCardTitle>
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
                  In dieser 15-minütigen geführten Meditation für Achtsamkeit
                  erhalten Sie Aufforderungen, Ihre Aufmerksamkeit auf den Atem
                  zu richten sowie regelmäßige Erinnerungen, um aus dem
                  Überdenken und den Ablenkungen herauszukommen und sich wieder
                  zu konzentrieren und achtsam zu sein
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
