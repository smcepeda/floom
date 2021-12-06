import React, { Fragment, useState } from "react";
import ReactPlayer from "react-player";
import { closeOutline } from "ionicons/icons";

import {
  IonButton,
  IonButtons,
  IonCard,
  IonSlide,
  IonImg,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRow,
  IonSlides,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const slideOpts = {
  speed: 200,
  spaceBetween: 1,
  slidesPerView: 1.1,
  loop: false,
  direction: "horizontal",
};

interface Props {
  onCancel: Function;
}

interface State {}

class PageStretching extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <IonHeader className="ion-no-border" translucent={true}>
          <IonToolbar>
            <IonTitle>STRETCHING</IonTitle>
            <IonButtons slot="start">
              <IonButton onClick={(_) => this.props.onCancel()}>
                <IonIcon icon={closeOutline}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonList>
            <IonSlides pager={true} options={slideOpts}>
              <IonSlide>
                <IonCard>
                  <IonImg src="/assets/triceps.gif" /> <br />
                  <IonCardHeader>
                    <IonCardSubtitle>AUF BEIDEN SEITEN</IonCardSubtitle>
                    <IonCardTitle>Trizeps-Stretch</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonText>
                      Nehmen Sie die andere Hand und ziehen Sie den Ellbogen zum
                      Kopf. Halten Sie die Position für 10 bis 30 Sekunden.
                      Wiederholen Sie die Übung auf der anderen Seite.
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
              </IonSlide>
              <IonSlide>
                <IonCard>
                  <IonImg src="/assets/lats.gif" /> <br />
                  <IonCardHeader>
                    <IonCardSubtitle>AUF BEIDEN SEITEN</IonCardSubtitle>
                    <IonCardTitle>Latissimus-Stretch</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonText>
                      Strecken Sie jeden Arm über Kopf aus. Greifen Sie zur
                      gegenüberliegenden Seite. Halten Sie die Position für 10
                      bis 30 Sekunden. Wiederholen Sie die Übung auf der anderen
                      Seite.
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
              </IonSlide>
              <IonSlide>
                <IonCard>
                  <IonImg src="/assets/upper.gif" /> <br />
                  <IonCardHeader>
                    <IonCardSubtitle>MEHRMALS REPETIEREN</IonCardSubtitle>
                    <IonCardTitle>Oberkörper- und Armstreckung</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonText>
                      Fassen Sie die Hände über dem Kopf zusammen, wobei die
                      Handflächen nach außen zeigen. Drücken Sie die Arme nach
                      oben und strecken Sie sie nach oben. Halten Sie die
                      Haltung für 10 bis 30 Sekunden.
                    </IonText>
                  </IonCardContent>
                </IonCard>
              </IonSlide>
              <IonSlide>
                <IonCard>
                  <IonImg src="/assets/torso.gif" /> <br />
                  <IonCardHeader>
                    <IonCardSubtitle>MEHRMALS REPETIEREN</IonCardSubtitle>
                    <IonCardTitle>Pectoralis Stretch</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonText>
                      Verschränken Sie die Hände hinter dem Rücken. Drücken Sie
                      die Brust nach außen und heben Sie das Kinn an. Halten Sie
                      die Haltung für 10 bis 30 Sekunden.
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
              </IonSlide>
              <IonSlide>
                <IonCard>
                  <IonImg src="/assets/down.gif" /> <br />
                  <IonCardHeader>
                    <IonCardSubtitle>MEHRMALS REPETIEREN</IonCardSubtitle>
                    <IonCardTitle>Vorwärtsstreckung</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonText>
                      Verschränken Sie die Hände vor sich und senken Sie den
                      Kopf in einer Linie mit den Armen. Drücken Sie nach vorne
                      und halten Sie die Position für 10 bis 30 Sekunden.
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
              </IonSlide>
              <IonSlide>
                <IonCard>
                  <IonImg src="/assets/trunk.gif" /> <br />
                  <IonCardHeader>
                    <IonCardSubtitle>MEHRMALS REPETIEREN</IonCardSubtitle>
                    <IonCardTitle>Torso-Stretch</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonText>
                      Stehen Sie mit den Füßen fest auf dem Boden und schauen
                      Sie nach vorne. Drehen Sie den Oberkörper in Richtung des
                      Arms, der auf der Stuhllehne ruht. Halten Sie die Position
                      für 10 bis 30 Sekunden. Wiederholen Sie die Übung auf der
                      anderen Seite.
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
              </IonSlide>
            </IonSlides>
          </IonList>
        </IonContent>
      </Fragment>
    );
  }
}

export default PageStretching;
