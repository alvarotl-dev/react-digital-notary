import svg1 from '../../images/metamask.svg'
import svg2 from '../../images/svg-2.svg'
import svg3 from '../../images/svg-3.svg'

export const homeObjOne = {
    id: 'install',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'install metamask',
    headline: 'Your ID, your transactions',
    description: 'Install Metamask in your browser to interact with the Blockchain and start uploading files.',
    buttonLabel: 'Install Metamask',
    imgStart: false,
    img: svg1,
    alt: 'Metamask',
    dark: true,
    primary: false,
    darkText: false,
};

export const homeObjTwo = {
    id: 'upload',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Upload your documents',
    headline: 'Push your documents into the Blockchain',
    description: 'Immutable, secure and restricted for you. Create a permanent transaction in the Blockchain and leave a legacy.',
    buttonLabel: 'Upload',
    imgStart: true,
    img: svg2,
    alt: 'Bank',
    dark: true,
    primary: true,
    darkText: true,
    page:"/upload"
};

export const homeObjThree = {
    id: 'wallet',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Create your own',
    headline: 'Get your own wallet',
    description: "Want a new wallet created by us? You can get your own wallet made just for you. Just don't forget to write down your private key!",
    buttonLabel: 'New Wallet',
    imgStart: false,
    img: svg3,
    alt: 'False',
    dark: true,
    primary: true,
    darkText: true,
    page:"/generate-wallet"
};