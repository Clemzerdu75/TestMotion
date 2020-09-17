import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';


// Component needed for the chatbot

const Video = () => (
    <div className="VideoWrapper">
        C'est la video
    </div>
)

const Abo = () => (
    <div className='AboWrapper'>
        C'est les abos
    </div>
)

const Review = (props) => {
    return (
        <div>
        </div>
    )
}

const SubAlone = () => (
    <div />
)
const SeeAllSub = () => (
    <div />
)

const theme = {
    background: '#ebedef',
    fontFamily: 'Open Sans',
    botBubbleColor: '#42c19a',
    botFontColor: '#fff',
    userBubbleColor: '#8bdafc',
    userFontColor: '#fff',
};


const ChatBotWrapper = ({ handleNameP, handleOfficesP, handleEnd, handleUserP }) => {
    let name = "";
    let lastname = "";
    let etabs = [];
    let offices = [];
    let users = [];

    const handleName = (props) => {
        name = props.steps.name.value;
        lastname = props.steps.lastname.value;
        return (handleNameP(props))
    }

    const handleOffices = (props, etabs) => {
        if (checkEtab(props.steps.etab.value, etabs) === true) etabs.push(props.steps.etab.value);
        offices.push({
            etab: props.steps.etab.value,
            name: props.steps.office.value,
            size: props.steps.seats.value,
        })
        return (handleOfficesP(props))
    }

    const handleUser = (props, users) => {
        const re = /([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;

        const list = props.steps.users.value.match(re) ? props.steps.users.value.match(re) : false;
        users = list;
        console.log(list);
        return (handleUserP(list))
    }

    const checkEtab = (value, etabs) => {
        if (etabs.includes(value)) {
            return 'Cet établissement a déjà été crée'
        }
        return true;
    }

    return (
        <ThemeProvider theme={theme}>
            <ChatBot
                userDelay={0}
                customDelay={0}
                botDelay={0}
                handleEnd={handleEnd}
                steps={[
                    {
                        id: '1',
                        message: `Bienvenue sur Sittin'Jack! Je suis Bot, le robot qui vous aidera  lors de la configuration de l'application! `,
                        trigger: '2',
                    },
                    /*--- Steps with user inputs --- */
                    {
                        id: 'name',
                        user: true,
                        placeholder: "Votre prénom",
                        trigger: 'lastname',
                    },
                    {
                        id: 'etab',
                        user: true,
                        placeholder: `Le nom de votre établisement`,
                        trigger: 'new office',
                        validator: (value) => checkEtab(value, etabs)
                    },
                    {
                        id: 'office',
                        user: true,
                        trigger: 'places',
                    },


                    /*--- Steps with user inputs + function --- */

                    { // Submit name + lastname 
                        id: 'lastname',
                        user: true,
                        placeholder: "Votre nom de famille",
                        trigger: handleName,
                    },
                    { // Submit etab (if new), one office and number of seats.
                        id: 'seats',
                        user: true,
                        trigger: (props) => handleOffices(props, etabs, offices),
                        validator: (value) => {
                            if (isNaN(value)) {
                                return 'value must be a number';
                            } else if (value < 0) {
                                return 'value must be positive';
                            }
                            return true;
                        },
                    },
                    {
                        id: 'users',
                        user: true,
                        trigger: (props) => handleUser(props, users)
                    },


                    /*---  Component steps --- */
                    {
                        id: 'tuto',
                        component: <Video />,
                        trigger: 'startChoice',
                    },
                    {
                        id: 'abonnements',
                        component: <Abo />,
                        trigger: 'startChoice',
                    },
                    {
                        id: 'review',
                        component: <Review />,
                        trigger: 'reviewChoices',
                    },
                    {
                        id: 'suggestedSub',
                        component: <SubAlone />,
                        trigger: 'OtherSubChoices'
                    },
                    {
                        id: 'seeAllSub',
                        component: <SeeAllSub />,
                        trigger: 'OtherSubChoices'
                    },

                    /*--- Multiple Choice steps --- */
                    {
                        id: 'startChoice',
                        options: [
                            { value: 'Regardez la demo', label: 'Regardez la demo', trigger: 'tuto' },
                            { value: 'Je veux créer ma configuration', label: 'Créer votre configuration', trigger: 'configuration' },
                            { value: 'Je veux voir les abonnements', label: 'Voir les abonements', trigger: 'abonnements' },
                        ],
                    },
                    {
                        id: 'choose next action',
                        options: [
                            { value: "new Etab", label: 'Créer un nouvel etablissement', trigger: 'MoreEtab' },
                            { value: 'more office', label: 'Créer un autre bureau', trigger: 'moreOffice' },
                            { value: 'finish', label: "Terminer la création d'espace de travail", trigger: 'userLaunch' }
                        ]
                    },
                    {
                        id: 'userEnd choice',
                        options: [
                            { value: "new users", label: 'Rajouter des utlisateurs', trigger: 'userExplanation' },
                            { value: 'sub', label: 'Voir le resumé de votre configuration', trigger: 'reviewIntro' },
                        ]
                    },
                    {
                        id: 'reviewChoices',
                        options: [
                            { value: "modify users", label: "Modifier la liste d'utilisateurs", trigger: 'userExplanation' },
                            { value: 'modify offices', label: 'Modifier les établissements et bureaux', trigger: 'reviewIntro' },
                            { value: 'subcription', label: "Passer aux abonnements", trigger: 'subscriptionIntro' }
                        ]
                    },
                    {
                        id: 'OtherSubChoices',
                        options: [
                            { value: 'Choose this one', label: "Choisir cet abonnements", trigger: 'ConfirmSub' },
                            { value: 'see Other', label: "Voir les autres options", trigger: 'seeAllSub' },
                        ]
                    },
                    {
                        id: 'ConfirmSub',
                        options: [
                            { value: "yes", label: 'Je confirme mon choix' },
                            { value: "no", label: 'Je souhaite revenir a la question précedente', trigger: "seeAllSub" }
                        ]
                    },


                    /*--- Steps with just text --- */
                    // WELCOME TEXT
                    {
                        id: '2',
                        message: `Mais d'abord, j'aimerai connaitre votre nom et votre prénom si vous plait`,
                        trigger: `name`,
                    },
                    {
                        id: '3',
                        message: ({ steps }) => `Bienvenue ${steps.name.value}! Que souhaitez vous faire?`,
                        trigger: 'startChoice',
                    },

                    // ETAB TEXT
                    {
                        id: 'configuration',
                        message: "Pour commencer, nous allons créer un premier etablissement. Comment voulez-vous l'appeler?",
                        trigger: 'etab',
                    },
                    {
                        id: 'MoreEtab',
                        message: 'Comment souhaitez vous appeler ce nouveau batiment?',
                        trigger: 'etab',
                    },

                    {
                        id: 'new office',
                        message: '{previousValue} sera composé de bureaux. Comment souhaitez-vous nommez le premier?',
                        trigger: 'office',
                    },
                    {
                        id: 'moreOffice',
                        message: 'Comment souhaitez vous appeler ce nouveau bureau?',
                        trigger: 'office',
                    },
                    {
                        id: 'places',
                        message: 'Combien de personnes peut-il accueillir ?',
                        trigger: 'seats',

                    },
                    {
                        id: 'end of etab',
                        message: 'Votre etablissement a bien été enregistré! Que souhaitez-vous faire à présent?',
                        trigger: 'choose next action'
                    },

                    // USER TEXT
                    {
                        id: 'userLaunch',
                        message: "Tres bien, maintenant passons a la création d'utilisateur",
                        trigger: 'userExplanation',
                    },
                    {
                        id: 'userExplanation',
                        message: "Mettez un mail ou une liste d'email pour inviter vos collaborateurs, ils recevront un mail permettant de se connecter",
                        trigger: 'users',
                    },
                    {
                        id: 'end of user',
                        message: "Les utilisateurs ont bien été rentré, vous pouvez en rajouter d'autre ou choisir votre formule d'abonnement",
                        trigger: 'userEnd choice',
                    },
                    {
                        id: 'reviewIntro',
                        message: 'Passons maintenant au résumé de ce que vous avez crée. Vous aurez le choix de modifier ce que vous voulez ou de passer aux choix de votre abonnement',
                        trigger: 'review',
                    },
                    {
                        id: 'subscriptionIntro',
                        message: 'Passons maintenant au choix de l"abonnement',
                        trigger: 'suggestedSub',
                    },
                ]}
            />
        </ThemeProvider>
    )
}

export default ChatBotWrapper;