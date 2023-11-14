// import React, {createRef, useEffect, useRef, useState} from 'react';
// import {
//   Alert,
//   ScrollView,
//   StatusBar,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   Dimensions,
//   TouchableHighlight,
//   StyleSheet,
//   SafeAreaView,
// } from 'react-native';
// // import styles from './Payment.Styles';
// import {primary, white, secondary, inputBackColor} from '../../Stylings/Colors';
// import {Black, Medium} from '../../Stylings/Font.Family';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import Text_Input from '../../Components/TextInput/TextInput';
// import Primary_Button from '../../Components/PrimaryButton/PrimaryButton.Components';
// import LoaderModel from '../../Components/DialogBox/LoaderBox.Component';
// import MessageBox from '../../Components/DialogBox/MessageBox.Component';
// import Main_Logo from '../../../assets/SvgIcons/Main.Logo';
// import Header from '../../Components/Header/Header';
// import Pdf from 'react-native-pdf';

// // import storage from '@react-native-firebase/storage';

// // import {primary, secondary} from '../../Stylings/Colors';
// // import textInputStyles from '../../Components/TextInput/TextInput.Styles';
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import SignatureCapture from 'react-native-signature-capture';
// import RNFS from 'react-native-fs'; // Import the React Native File System library
// import storage from '@react-native-firebase/storage'; // Import Firebase Storage

// // import RNSignatureExample from '../comp/signature/signature';

// // import Pdf from 'react-native-pdf';
// class W9Form extends Component {
//   const source = require('../../../assets/INDEPENDENTCONTRACTORAGREEMENT.pdf');
//   const sign = createRef();
//   const [email, setEmail] = useState();
//   const [name, setName] = useState();
//   const [url, setUrl] = useState();
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     if (url) {
//       setLoading(true);
//       firestore()
//         .collection('signatureData')
//         .doc(auth().currentUser?.uid)
//         .set({
//           email: email,
//           uid: auth().currentUser?.uid,
//           name: name,
//           imageUri: url,
//           signedOn: new Date(),
//         })
//         .then(() => {
//           setLoading(false);
//         });
//     }
//   }, [url]);
//   // const [url, setUrl] = useState()
//   useEffect(() => {
//     const getData = async () => {
//       setLoading(true);

//       const user = await firestore()
//         .collection('userDetails')
//         .doc(auth().currentUser?.uid)
//         .get();
//       setEmail(user._data.email);
//       setName(user._data.firstName + ' ' + user._data.lastName);
//       setLoading(false);
//     };

//     getData();
//   }, []);

//   const _onSaveEvent = result => {
//     setLoading(true);

//     const imageBase64 = result.encoded; // Get the base64-encoded image data

//     // Define the file path where you want to save the image
//     const filePath = `${RNFS.DocumentDirectoryPath}/signature.png`;

//     // Write the base64 image data to the file
//     RNFS.writeFile(filePath, imageBase64, 'base64')
//       .then(() => {
//         setLoading(true);
//         // Upload the image to Firebase Storage
//         const storageRef = storage().ref(
//           `Signature/${auth().currentUser?.email}/signature.png`,
//         );
//         // let url;
//         storageRef
//           .putFile(filePath)
//           .then(async snapshot => {
//             // console.log(snapshot);
//             const reference = storage().ref(`${snapshot.metadata.name}`);

//             const url = await reference.getDownloadURL();
//             console.log(url);
//             setUrl(url);
//           })
//           .catch(error => {
//             setLoading(false);
//             console.error('Error uploading image to Firebase Storage:', error);
//           });
//       })
//       .catch(error => {
//         setLoading(false);
//         console.error('Error saving image:', error);
//       });
//     setLoading(false);
//   };

//   // const onDragEvent = () => {};
//   render(){
//   return (
//     <View style={{flex: 1}}>
//       {/* <ScrollView style={{flex: 1}}> */}
//       <StatusBar barStyle={'light-content'} backgroundColor={primary} />
//       <LoaderModel isVisible={loading} color={primary} />
//       <Header onPress={() => props.navigation.navigate('Home_Screen')} />
//       <Text style={{fontFamily: '600', fontSize: 20, textAlign: 'center'}}>
//         Signature the License
//       </Text>
//       <Text
//         style={{
//           fontStyle: 'italic',
//           fontSize: 18,
//           fontWeight: '500',
//           marginVertical: 5,
//           textAlign: 'center',
//         }}>
//         Name : {name}
//       </Text>
//       <Text
//         style={{
//           fontStyle: 'italic',
//           fontSize: 16,
//           fontWeight: '500',
//           marginVertical: 5,
//           textAlign: 'center',
//         }}>
//         Email : {email}
//       </Text>
//       <Pdf
//         // singlePage={true}

//         // page={1}
//         showsHorizontalScrollIndicator={true}
//         horizontal={true}
//         source={source}
//         onLoadComplete={numberOfPages => {
//           console.log(`Number of pages: ${numberOfPages}`);
//         }}
//         onPageChanged={(page, numberOfPages) => {
//           console.log(`Current page: ${page}`);
//         }}
//         onError={error => {
//           console.log(error);
//         }}
//         onPressLink={uri => {
//           console.log(`Link pressed: ${uri}`);
//         }}
//         style={{width: '90%', height: 300, alignSelf: 'center'}}
//       />

//       <SignatureCapture
//         // showTitleLabel={true}
//         style={[{flex: 1}, styles.signature]}
//         ref={sign}
//         onSaveEvent={result => {
//           _onSaveEvent(result);
//         }}
//         // onDragEvent={this._onDragEvent}
//         // saveImageFileInExtStorage={false}
//         showNativeButtons={true}
//         showTitleLabel={false}
//         backgroundColor="white"
//         strokeColor="black"
//         minStrokeWidth={4}
//         maxStrokeWidth={4}
//         viewMode={'landscape'}
//       />
//       {/* </ScrollView> */}
//     </View>
//   );
// };
// }

// const styles = StyleSheet.create({
//   signature: {
//     flex: 1,
//     borderColor: '#000033',
//     borderWidth: 1,
//     backgroundColor: 'blue',
//     // marginTop:
//     // height: 200,
//   },
//   buttonStyle: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 100,
//     backgroundColor: '#eeeeee',
//     margin: 10,
//   },
// });

// export default W9Form;

// import React, {Component} from 'react';
// import {
//   Alert,
//   ScrollView,
//   StatusBar,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   Dimensions,
//   TouchableHighlight,
//   StyleSheet,
//   SafeAreaView,
// } from 'react-native';

// import {primary, white, secondary, inputBackColor} from '../../Stylings/Colors';

// import {Black, Medium} from '../../Stylings/Font.Family';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import Text_Input from '../../Components/TextInput/TextInput';
// import Primary_Button from '../../Components/PrimaryButton/PrimaryButton.Components';
// import LoaderModel from '../../Components/DialogBox/LoaderBox.Component';
// import MessageBox from '../../Components/DialogBox/MessageBox.Component';
// import Main_Logo from '../../../assets/SvgIcons/Main.Logo';
// import Header from '../../Components/Header/Header';
// import Pdf from 'react-native-pdf';

// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import SignatureCapture from 'react-native-signature-capture';
// import RNFS from 'react-native-fs';
// import storage from '@react-native-firebase/storage';

// class W9Form extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       source: require('../../../assets/INDEPENDENTCONTRACTORAGREEMENT.pdf'),
//       sign: React.createRef(),
//       email: null,
//       name: null,
//       url: null,
//       loading: false,
//     };
//   }

//   componentDidMount() {
//     this.getData();
//   }

//   getData = async () => {
//     this.setState({loading: true});

//     const user = await firestore()
//       .collection('userDetails')
//       .doc(auth().currentUser?.uid)
//       .get();

//     this.setState({
//       email: user._data.email,
//       name: user._data.firstName + ' ' + user._data.lastName,
//       loading: false,
//     });
//   };

//   _onSaveEvent = result => {
//     this.setState({loading: true});

//     const imageBase64 = result.encoded;
//     const filePath = `${RNFS.DocumentDirectoryPath}/signature.png`;

//     RNFS.writeFile(filePath, imageBase64, 'base64')
//       .then(() => {
//         const storageRef = storage().ref(
//           `Signature/${auth().currentUser?.email}/signature.png`,
//         );

//         storageRef
//           .putFile(filePath)
//           .then(async snapshot => {
//             const reference = storage().ref(`${snapshot.metadata.name}`);
//             const url = await reference.getDownloadURL();
//             this.setState({url});
//           })
//           .catch(error => {
//             this.setState({loading: false});
//             console.error('Error uploading image to Firebase Storage:', error);
//           });
//       })
//       .catch(error => {
//         this.setState({loading: false});
//         console.error('Error saving image:', error);
//       });

//     this.setState({loading: false});
//   };

//   render() {
//     const {source, sign, email, name, url, loading} = this.state;

//     return (
//       <View style={{flex: 1}}>
//         <StatusBar barStyle={'light-content'} backgroundColor={primary} />
//         <LoaderModel isVisible={loading} color={primary} />
//         <Header onPress={() => this.props.navigation.navigate('Home_Screen')} />
//         <Text style={{fontFamily: '600', fontSize: 20, textAlign: 'center'}}>
//           Signature the License
//         </Text>
//         <Text
//           style={{
//             fontStyle: 'italic',
//             fontSize: 18,
//             fontWeight: '500',
//             marginVertical: 5,
//             textAlign: 'center',
//           }}>
//           Name : {name}
//         </Text>
//         <Text
//           style={{
//             fontStyle: 'italic',
//             fontSize: 16,
//             fontWeight: '500',
//             marginVertical: 5,
//             textAlign: 'center',
//           }}>
//           Email : {email}
//         </Text>
//         <Pdf
//           showsHorizontalScrollIndicator={true}
//           horizontal={true}
//           source={source}
//           onLoadComplete={numberOfPages => {
//             console.log(`Number of pages: ${numberOfPages}`);
//           }}
//           onPageChanged={(page, numberOfPages) => {
//             console.log(`Current page: ${page}`);
//           }}
//           onError={error => {
//             console.log(error);
//           }}
//           onPressLink={uri => {
//             console.log(`Link pressed: ${uri}`);
//           }}
//           style={{width: '90%', height: 300, alignSelf: 'center'}}
//         />

//         <SignatureCapture
//           style={[{flex: 1}, styles.signature]}
//           ref={sign}
//           onSaveEvent={result => {
//             this._onSaveEvent(result);
//           }}
//           showNativeButtons={true}
//           showTitleLabel={false}
//           backgroundColor="white"
//           strokeColor="black"
//           minStrokeWidth={4}
//           maxStrokeWidth={4}
//           viewMode={'landscape'}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   signature: {
//     flex: 1,
//     borderColor: '#000033',
//     borderWidth: 1,
//     backgroundColor: 'blue',
//   },
//   buttonStyle: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 100,
//     backgroundColor: '#eeeeee',
//     margin: 10,
//   },
// });

// export default W9Form;
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {primary} from '../../Stylings/Colors';
import Pdf from 'react-native-pdf';
import SignatureCapture from 'react-native-signature-capture';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import RNFS from 'react-native-fs';
import storage from '@react-native-firebase/storage';
import LoaderModel from '../../Components/DialogBox/LoaderBoxComponent';
import Header from '../../Components/Header/Header';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import W9FormModal from '../../Components/W9FormModal/W9FormModal';
import {useIsFocused} from '@react-navigation/native';

const Contract = props => {
  const [filePath, setFilePath] = useState(null);
  const [inputModal, setInputModal] = useState(false);
  const [dataModal, setDataModal] = useState(null);
  const [contractPath, setContractPath] = useState();
  const sign = useRef(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageB64, setImageB64] = useState(false);
  const [signImagePath, setSignImagePath] = useState(false);
  const [URL, setURL] = useState();
  const isFocused = useIsFocused();
  // android: {uri: 'asset:/../../../assets/INDEPENDENTCONTRACTORAGREEMENT.pdf'},
  // });
  const source = require('../../../assets/INDEPENDENTCONTRACTORAGREEMENT.pdf');
  const modalData = data => {
    setDataModal(data);
    if (data) {
      console.log(data.contractName);
      setEmail(data.contractEmail);
    }
  };
  useEffect(() => {
    const checkForm = async () => {
      const user = await firestore()
        .collection('userContracts')
        .doc(auth().currentUser?.uid)
        .get();
      setURL(user._data.downUrl);
      // setLoading(true); .
      console.log(user._data.downUrl);
    };
    checkForm();
  }, [isFocused]);
  const createPDF = async () => {
    setLoading(true);

    let options = {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Independent Contractor Agreement</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .container {
      margin: 20px;
    }
    .header {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
    }
    .section {
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">Independent Contractor Agreement</div>
    
    <div class="section">
      <div> <b>I. THE PARTIES</b></div>
      <div>This Independent Contractor (hereinafter referred to as the “Contractor” and “Massage Therapist”) is entering into this Agreement by and between Massage by Design, Inc. with mailing address of 4452 Park Blvd, Suite 212 San Diego, CA 92116 (hereinafter referred to as the "Client")</div>
      <div> <b> AND </b> </div>
      <div> <b> (your name) ${
        dataModal.contractName
      } </b>with mailing address of</div>
      <div> <b> ${dataModal.contractEmail}  </b>(“hereinafter </div>
      <div>referred to as the “Contractor" and “Massage Therapist”).</div>
    </div>

    <div class="section">

     <div> <b> GENERAL</b> </div>
<div>The Client and Contractor both agree that the Contractor possesses the relevant experience, necessary skills, qualifications and abilities to provide the outlined services for the Client.</div>
    </div>

    <div class="section">
      <div> <b> 1. TERM </b>  </div>
      <div> The Agreement shall be effective on the date of signing this Agreement (the “Effective Date”) and will terminate when either party determines the working relationship is no longer an equitable or viable fit. Contractor acknowledges and agrees that the engagement with the Client is at will. Notice of termination is not required from either party.</div>
    </div>

    <div class="section">
      <div> <b> 2. INDEPENDENT CONTRACTOR STATUS </b>  </div>
      <div>The Parties agree and acknowledge that the Contractor is an independent contractor and is not, for any purpose, an employee of the Client. The Contractor does not have the authority to enter into agreements or contracts on behalf of the Client, and shall not represent that it possesses any such authority. Independent Contractor shall not be entitled to any Client’s benefits, including, but not limited to: Coverage under medical, dental, retirement or other plans. The Client shall not be obligated to pay worker’s compensation insurance, unemployment compensation, social security tax or other taxes or withholdings for or on behalf of the Contractor in connection with the performance of the Services under this Agreement. Nothing in this Agreement shall be deemed or construed by the Parties to create the relationship of a partnership, a joint venture or any other fiduciary relationship.</div>

    </div>

    <div class="section">
      <div> <b> 3. SCOPE OF WORK </b>  </div>
      <div>The Independent Contractor shall provide chair massage services for the contracted client/account at various locations and events of which they have signed up for. Contractor/Therapist will provide their own transportation, equipment and supplies necessary to effectively provide the services. All costs and expenses incurred by the Contractor in connection with the execution of the services shall be the sole responsibility of and paid by the Contractor.</div>
    </div>
    <div class="section">
     <div> <b> 4. BASIC REQUIREMENTS.</b> </div>
      <div>The Contractor is expected to represent themselves in a professional manner that is consistent with and conducive to the Massage Therapy Industry Code of Ethics. The Massage Therapist is expected to exercise best judgment in the delivery of services to create the best possible customer experience.</div>
           <ol>
        <li>-The contractor will submit a W9 for yearly 1099-NEC distribution.</li>
        <li>-The contractor must be licensed (or certified) and insured in the state in which they work.</li>
        <li>-The contractor will have satisfied all Massage Therapy schooling requirements deemed necessary by the state in which they work.</li>
        <li>-The contractor is expected to arrive at each event in a timely manner, in accordance with the parking and unloading requirements at the venue where they are working.</li>
        <li>-The contractor is expected to dress in attire that is professional yet comfortable, and appropriate in the field of massage therapy.</li>
        <li>The contractor is expected to arrive at each event in a timely manner, in accordance with the parking and unloading requirements at the venue where they are working.</li>
        <li>The contractor is expected to dress in attire that is professional yet comfortable, and appropriate in the field of massage therapy.</li>
        <li>-The contractor is allowed to distribute business cards to promote their private practice. However, the contractor is not allowed to solicit chair massage services.</li>
      </ol>
    </div>
 <div class="section">
      <div> <b> 5. COMPENSATION.</b>  </div>
      <div> Compensation varies from job to job, and will be clearly stated in each job posting. Complete details of the Job/Gig will be sent to the Contractor via email. The Contractor may then accept or decline the position based on the event details, event requirements and compensation. Independent Contractor is responsible for all expenses in addition to any and all taxes related to their compensation.</div>
          <ol>
        <li>-Invoices must be submitted post event, and prior to weekly payment distribution.</li>
        <li>-Payments will be processed every Friday via one of the following methods: Check, Direct Deposit, PayPal. Processing and delivery are not the same day.</li>
        <li>-Parking expenses will be reimbursed, however certain receipts may have a dollar cap.li>
      </ol>
      </div>
    <div class="section">
      <div> <b> 6. CONTRACTOR STATUS </b> </div>
      <div>The Independent Contractor may engage in other business activities related to their field of work (Massage Therapy), independent of this agreement. However, the Contractor shall not during the term of this Agreement solicit Company's contacts or accounts.</div>
    </div>

    <div class="section">
      <div> <b> INTENDING TO BE LEGALLY BOUND, </b>the parties hereto have caused this Agreement to be executed as of the date first above written.</div>
    </div>

    <div class="signature">
      <div> <b> Independent Contractor’s Signature</b> <div/>
      <img src=${url} alt="Description of the image" width="100" height="100">

      <div>Date ${new Date()} </div>
 
    </div>

    <div class="signature">
      <div> <b> Client’s Signature </b>___________________________</div>
      <div> Date ____________________ </div>

    </div>
  </div>
</body>
</html>
`,
      fileName: 'test',
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options);
    // setContractPath(file.filePath);
    // alert(file.filePath);
    setLoading(false);

    props.navigation.navigate('ClientForm', {pdfPath: file.filePath});
    // return file.filePath;
  };

  const _onSaveEvent = async result => {
    if (result) {
      setInputModal(true);
    }

    // setLoading(true);
    const imageBase64 = result.encoded;
    const filePath = `${RNFS.DocumentDirectoryPath}/signature.png`;
    setImageB64(imageBase64);
    setSignImagePath(filePath);

    RNFS.writeFile(filePath, imageBase64, 'base64')
      .then(() => {
        const fileUri = `file://${filePath}`;
        setUrl(fileUri);
        console.log(fileUri);
        // setLoading(true);
        // const storageRef = storage().ref(
        //   `Signature/${auth().currentUser?.email}/signature.png`,
        // );

        // storageRef
        //   .putFile(filePath)
        //   .then(async snapshot => {
        //     const reference = storage().ref(`${snapshot.metadata.name}`);
        //     const imageUrl = await reference.getDownloadURL();
        //     setUrl(imageUrl);
        //   })
        //   .catch(error => {
        //     // setLoading(false);
        //     console.error('Error uploading image to Firebase Storage:', error);
        //   });
      })
      .catch(error => {
        setLoading(false);
        console.error('Error saving image:', error);
      });
    // setLoading(false);
  };
  if (URL != null) {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar barStyle={'light-content'} backgroundColor={primary} />
        <LoaderModel isVisible={loading} color={primary} />
        <Header onPress={() => props.navigation.navigate('Home_Screen')} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{textAlign: 'center', fontSize: 24, fontFamily: 'bold'}}>
            W9FORM SUBMITTED
          </Text>
        </View>
      </View>
    );
  } else if (URL === null) {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle={'light-content'} backgroundColor={primary} />
        <LoaderModel isVisible={loading} color={primary} />
        <Header onPress={() => props.navigation.navigate('Home_Screen')} />

        <Pdf
          showsHorizontalScrollIndicator={true}
          horizontal={true}
          source={source}
          onLoadComplete={numberOfPages => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={{width: '90%', height: 400, alignSelf: 'center'}}
        />
        <SignatureCapture
          style={[{flex: 1}, styles.signature]}
          ref={sign}
          onSaveEvent={result => {
            _onSaveEvent(result);
          }}
          showNativeButtons={true}
          showTitleLabel={false}
          backgroundColor="white"
          strokeColor="black"
          minStrokeWidth={4}
          maxStrokeWidth={4}
          viewMode={'landscape'}
        />
        <W9FormModal
          visible={inputModal}
          obData={modalData}
          onPressDone={() => {
            setInputModal(false);
            createPDF();
            // if (contractPath) {
          }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  signature: {
    flex: 1,
    borderColor: '#000033',
    borderWidth: 1,
    backgroundColor: 'blue',
  },
  textStyle: {
    fontStyle: 'italic',
    fontSize: 18,
    fontWeight: '500',
    // marginVertical: 5,
    textAlign: 'center',
  },
});

export default Contract;
