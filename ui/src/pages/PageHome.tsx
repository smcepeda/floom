import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonModal,
  IonPage,
  IonRow,
  IonSlides,
  IonText,
  IonTitle,
  IonSlide,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./PageHome.css";
import { useState } from "react";
import PageMeditation from "./PageMeditation";
import PageRelax from "./PageRelax";
import PageStretching from "./PageStretching";
import PageBreathwork from "./PageBreathwork";

interface Props {}

interface State {
  openMeditationModal: boolean;
  openRelaxModal: boolean;
  openStretchingModal: boolean;
  openBreathworkModal: boolean;
}

class PageHome extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      openMeditationModal: false,
      openRelaxModal: false,
      openStretchingModal: false,
      openBreathworkModal: false,
    };
  }

  openMeditationModal() {
    this.setState({ openMeditationModal: true });
  }

  cancelMeditationModal() {
    this.setState({ openMeditationModal: false });
  }

  openBreathworkModal() {
    this.setState({ openBreathworkModal: true });
  }

  cancelBreathworkModal() {
    this.setState({ openBreathworkModal: false });
  }

  openRelaxModal() {
    this.setState({ openRelaxModal: true });
  }

  cancelRelaxModal() {
    this.setState({ openRelaxModal: false });
  }

  openStretchingModal() {
    this.setState({ openStretchingModal: true });
  }

  cancelStretchingModal() {
    this.setState({ openStretchingModal: false });
  }
  render() {
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonTitle></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader className="ion-no-border">
            <IonToolbar>
              <IonTitle size="large" color="white">
                FLOOM
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonModal isOpen={this.state.openMeditationModal}>
            <PageMeditation onCancel={(_) => this.cancelMeditationModal()} />
            <IonButton
              color="white"
              expand="block"
              onClick={() => this.setState({ openMeditationModal: false })}
            ></IonButton>
          </IonModal>
          <IonModal isOpen={this.state.openRelaxModal}>
            <PageRelax onCancel={(_) => this.cancelRelaxModal()} />
            <IonButton
              color="white"
              expand="block"
              onClick={() => this.setState({ openRelaxModal: false })}
            ></IonButton>
          </IonModal>
          <IonModal isOpen={this.state.openStretchingModal}>
            <PageStretching onCancel={(_) => this.cancelStretchingModal()} />
            <IonButton
              color="white"
              expand="block"
              onClick={() => this.setState({ openStretchingModal: false })}
            ></IonButton>
          </IonModal>

          <IonModal isOpen={this.state.openBreathworkModal}>
            <PageBreathwork onCancel={(_) => this.cancelBreathworkModal()} />
            <IonButton
              color="white"
              expand="block"
              onClick={() => this.setState({ openBreathworkModal: false })}
            ></IonButton>
          </IonModal>
          <IonList lines="none">
            <IonListHeader>
              <IonLabel>Programm aussuchen:</IonLabel>
            </IonListHeader>
            <IonCard onClick={(_) => this.openMeditationModal()}>
              <IonImg src="/assets/msplash.jpg" />{" "}
              <IonCardHeader>
                <IonCardSubtitle>F??R MENTALE KLARHEIT</IonCardSubtitle>
                <IonCardTitle>Gef??hrte Meditation</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonText>
                  Meditiere mit gef??hrten Sessions und finde mit bewussten
                  Atemz??gen zu deiner Ausgeglichenheit zur??ck.
                </IonText>
              </IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol size="3">
                    {" "}
                    <IonButton
                      color="tertiary"
                      onClick={(_) => this.openMeditationModal()}
                    >
                      Jetzt meditieren
                    </IonButton>
                  </IonCol>
                  <IonCol></IonCol>
                  <IonCol size="3"></IonCol>
                </IonRow>{" "}
              </IonGrid>
            </IonCard>
            <IonCard onClick={(_) => this.openRelaxModal()}>
              {/* <br /> */}
              <IonImg src="/assets/rsplash.jpg" />
              <IonCardHeader>
                <IonCardSubtitle>Entspannende Kl??nge</IonCardSubtitle>
                <IonCardTitle>Entspannen</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonText>
                  Entspanne deinen Geist und K??rper zu entspannenden Kl??ngen und
                  eine angenehme Lichtshow.
                </IonText>
              </IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol size="3">
                    {" "}
                    <IonButton
                      color="tertiary"
                      onClick={(_) => this.openRelaxModal()}
                    >
                      Jetzt entspannen
                    </IonButton>
                  </IonCol>
                  <IonCol></IonCol>
                  <IonCol size="3"></IonCol>
                </IonRow>{" "}
              </IonGrid>
            </IonCard>{" "}
            <IonCard onClick={(_) => this.openStretchingModal()}>
              <IonImg src="/assets/ssplash.jpg" />
              <IonCardHeader>
                <IonCardSubtitle>Stretching ??bungen</IonCardSubtitle>
                <IonCardTitle>Stretching</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonText>
                  Erreiche eine bessere Durchblutung des K??rpers, inkl. Gehirn -
                  f??r bessere kognitive Leistung.
                </IonText>
              </IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol size="3">
                    {" "}
                    <IonButton
                      color="tertiary"
                      onClick={(_) => this.openStretchingModal()}
                    >
                      Jetzt stretchen{" "}
                    </IonButton>
                  </IonCol>
                  <IonCol></IonCol>
                  <IonCol size="3"></IonCol>
                </IonRow>{" "}
              </IonGrid>
            </IonCard>
            <IonCard onClick={(_) => this.openBreathworkModal()}>
              <IonImg src="/assets/breath.jpg" />
              <IonCardHeader>
                <IonCardSubtitle>BREATHWORK</IonCardSubtitle>
                <IonCardTitle>Atem??bungen</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonText>
                  Schnellere und tiefere Entspannung von K??rper und Geist durch
                  Atem??bungen.
                </IonText>
              </IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol size="3">
                    {" "}
                    <IonButton
                      color="tertiary"
                      onClick={(_) => this.openBreathworkModal()}
                    >
                      Breathwork ausprobieren{" "}
                    </IonButton>
                  </IonCol>
                  <IonCol></IonCol>
                  <IonCol size="3"></IonCol>
                </IonRow>{" "}
              </IonGrid>
            </IonCard>
          </IonList>
        </IonContent>
      </IonPage>
    );
  }
}

export default PageHome;
