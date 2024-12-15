// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Extinction gambling task with unknown probabilities ",
    "description": "",
    "repository": "",
    "contributors": "Leah Wu \u003Czcjtwux@ucl.ac.uk\u003E"
  },
  "messageHandlers": {
    "epilogue": function anonymous(
) {
var resultJson = study.options.datastore.exportJson();
jatos.submitResultData(resultJson, jatos.startNextComponent);
}
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "title": "",
          "content": "\u003Cstyle\u003E\n#div1{\n  width:100%;\n  text-align:left;\n#main{\n  width: 100%;\n}\nbutton{\n  padding:12px;\n  color:white;\n  border:none;\n  background-color:#7393B3;\n  border-radius:4px;\n  cursor:pointer;  \n}\nbutton:hover{\n  background-color: #B2BEB5;\n}\n\u003C\u002Fstyle\u003E\n\n\u003Cheader style = \"padding: 5px;  height: 100px; color:darkblue;\"\u003E\n\u003Ch2\u003E Welcome! \u003C\u002Fh2\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain class = \"main\"\u003E\n  \u003Cdiv id = \"div1\"\u003E\n    \u003Cp\u003E Hello and welcome to our experiment.\u003C\u002Fp\u003E\n    \u003Cp\u003EMake sure you can work for to 10 minutes without any interruption. Please avoid any distractions (e.g., TV, music, smartphones, children, etc). \u003C\u002Fp\u003E\n      \u003Cp\u003EPlease, do not refresh the webpage during the experiment. You will not be able to restart or complete the experiment if you refresh.\u003C\u002Fp\u003E\n       \u003Cp\u003EThis decision making experiment involves repeatedly deciding between playing a \"risky\" and a \"safe\" lottery. Please, read the instructions very carefully and try to do the best you can with the given tasks. Your performance will be monitored to understand whether you are paying attention or not. \u003Cp\u003E\n      \u003Cp\u003E\u003Cspan style=\"color: #0000a0\"\u003E \u003Cb\u003EWhat will you be doing in this experiment?\u003C\u002Fp\u003E\u003C\u002Fb\u003E \u003C\u002Fspan\u003E\n      \u003Cp\u003EIn this experiment, we are interested in how people decide between risky and safe options in a gambling task.\u003C\u002Fp\u003E\n      \u003Cp\u003EThis experiment has 100 trials.  In each trial, you will need to decide between a risky and a safe lottery. If you choose the risky lottery, you will, on average, get more bonus in this trial. However, there is a chance that you go extinct and do not receive any bonus for the experiment at all.\u003C\u002Fp\u003E        \n   \u003Cp\u003E\u003Cb\u003EWe advise against participation if you have or had problems with gambling (i.e., gambling addiction) at any point in your life. \u003C\u002Fb\u003E\u003C\u002Fp\u003E        \n   \u003Cp\u003E\u003Cb\u003EAt one point during the experiment, you may view a picture of a mushroom cloud. If you are not comfortable with this, please do not continue. \u003C\u002Fb\u003E\u003C\u002Fp\u003E    \n        \u003Cp\u003E\u003Cspan style=\"color: #0000a0\"\u003EPress \u003Ckbd\u003EContinue\u003C\u002Fkbd\u003E to start.\u003C\u002Fspan\u003E\u003Cp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- \u002F\u002F Behavior -\u003E target -\u003E button#b --\u003E\n\u003Cfooter\u003E\n  \u003Cbutton id =\"b\"\u003EContinue\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
window.condition =  this.random.choice([0,1])

window.currentChoice = 0
window.currentOutcome = -9

window.randomNumber = 2
window.outcomeChoice = "blubber"
window.trialNr = 0
window.trialNr2 = 0
window.counter = 0
window.counter2 = 0
window.money = 0
window.status = "living"

window.piggybank = "blubber"
window.whatextinction = "blubber"

window.other = "blubber"

if (typeof jatos !== "undefined") {

   this.data.prolific_pid = jatos.urlQueryParameters.PROLIFIC_PID;

   this.data.pstudy_id = jatos.urlQueryParameters.STUDY_ID;

   this.data.psession_id = jatos.urlQueryParameters.SESSION_ID;

}
}
      },
      "title": "Opening",
      "tardy": true,
      "width": "l"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "",
          "content": "\u003Cstyle\u003E\n#div1{\nwidth: 100%;\ntext-align:  left;\n}\n\u003C\u002Fstyle\u003E\n\n\n\u003Cheader style = \"padding: 5px;  height: 100px; color:darkblue;\"\u003E\n\u003Ch2\u003E Participation Information \u003Cbr\u003E (for Consent) \u003C\u002Fh2\u003E \n\u003CBr\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain class=\"content-horizontal-center\"\u003E\n  \u003Cdiv id = \"div1\"\u003E\n    \u003Cp\u003EThis study has been approved by the Ethics Committee of the UCL Research Department of Experimental Psychology, ID No: EP\u002F2021\u002F005\u003C\u002Fp\u003E\n\n    \u003Cp\u003EName, Address and Contact Details of investigators: \u003Cbr\u003E\n    Main researcher: Leah Wu, Dept of Experimental Psychology, UCL, 26 Bedford Way, London WC1H 0AP, \u003Ca href=\"mailto:zcjtwuc@ucl.ac.uk\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Ezcjtwux@ucl.ac.uk\u003C\u002Fa\u003E\n\u003Chr\u003E\n     Supervisors: \u003Cbr\u003E\n(1) Henrik Singmann, Dept of Experimental Psychology, UCL, 26 Bedford Way, London WC1H 0AP \u003Ca href=\"mailto: h.singmann@ucl.ac.uk\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Eh.singmann@ucl.ac.uk\u003C\u002Fa\u003E\u003Cbr\u003E \n(2) Maximillian Maeir, Dept of Experimental Psychology, UCL, 26 Bedford Way, London WC1H 0AP \u003Ca href=\"mailto: m.maeir@ucl.ac.uk\" target=\"_blank\" rel=\"noopener noreferrer\"\u003E m.maeir@ucl.ac.uk\u003C\u002Fa\u003E\u003Cbr\u003E\n\n\u003Chr\u003E\n    \u003Cp\u003EYou are being invited to take part in a research study. All proposals for research using human participants are reviewed by an ethics committee before they can proceed. This proposal was reviewed by the Ethics Committee of the UCL Department of Experimental Psychology. Take time to decide whether or not you wish to take part. If you do decide to take part you will be asked to consent, and any information you give will be treated in strictest confidence. It is up to you whether or not you take part. Before you agree, it is important for you to read the following information carefully and ask us if there is anything that is not clear or if you would like more information. \u003C\u002Fp\u003E\n\n    \u003Cp\u003E\u003Cspan style=\"color: #0000a0\"\u003E \u003Cb\u003EWhat is the purpose of the study?\u003C\u002Fp\u003E\u003C\u002Fb\u003E \u003C\u002Fspan\u003E\n    \u003Cp\u003EWe are investigating how people choose among lottery options if the options are presented sequentially. The experiment comprises a single session lasting up to 10 min. In each trial, you will decide between a safe lottery and a risky lottery. All the instructions will be presented on the display and the computer will store your responses. \n \u003C\u002Fp\u003E \n\n    \u003Cp\u003E \u003Cspan style=\"color: #0000a0\"\u003E \u003Cb\u003EWhat are the possible disadvantages and risks of taking part?\u003C\u002Fp\u003E\u003C\u002Fb\u003E \u003C\u002Fspan\u003E\n\u003Cul\u003E\n\u003Cli\u003E We advise against participation if you have or had problems with gambling (i.e., gambling addiction) at any point in your life. \u003C\u002Fli\u003E\n\u003Cli\u003E At one point during the experiment, you may view a picture of a mushroom cloud. If you are not comfortable with this, please do not continue. \u003C\u002Fli\u003E\n\u003C\u002Ful\u003E \n\n    \u003Cp\u003E \u003Cspan style=\"color: #0000a0\"\u003E \u003Cb\u003EWhat are the possible benefits of taking part? \u003C\u002Fp\u003E\u003C\u002Fb\u003E \u003C\u002Fspan\u003E\n    \u003Cp\u003EIt is hoped that this work will inform the application of research in the area of psychology and help us understand how people make risky choices. Further, you will be paid and also receive a bonus, which depends on your responses. \u003C\u002Fp\u003E\n    \n    \u003Cp\u003E \u003Cspan style=\"color: #0000a0\"\u003E \u003Cb\u003EWhat happens if I do not want to take part in the study?\u003C\u002Fp\u003E\u003C\u002Fb\u003E \u003C\u002Fspan\u003E\n    \u003Cp\u003EYou do not have to take part in this study if you do not want to do so. Choosing not to take part will not disadvantage you in any way. If you decide to, you may withdraw at any time without giving a reason by simply closing the browser. If you decide to withdraw, the data you have provided up to that point will be destroyed.\u003C\u002Fp\u003E\n\n    \u003Cp\u003E \u003Cspan style=\"color: #0000a0\"\u003E \u003Cb\u003EWho will collect the information, and how will it be stored and used?\u003C\u002Fp\u003E\u003C\u002Fb\u003E \u003C\u002Fspan\u003E\n    \u003Cp\u003EYour information will be collected by main researcher, Leah Wu, and treated with strictest confidence. All data collected as part of this research will be anonymized and handled and stored in compliance with the General Data Protecting Regulation (GDPR).\u003C\u002Fp\u003E\n    \u003Cp\u003EOnly researchers working with the Main researcher, Leah Wu, will have access to datafiles containing identifying information (Worker ID).\u003C\u002Fp\u003E\n    \u003Cp\u003ECompletely anonymized datafiles (no Profilic ID, no Worker ID, no IP address) will be shared online in accordance with open-science practices. If you do not consent to anonymized data being shared, please close your browser window and do not take part in this study.\u003C\u002Fp\u003E\n     \u003Cp\u003EOnce anonimized data has been shared, it is impossible to withdraw consent for your data to be used, because the data will be anonymous at that time. Please only continue if you are happy for your anonymized data to be used in this way.  \u003C\u002Fp\u003E\n      \n      \u003Cp\u003E \u003Cspan style=\"color: #0000a0\"\u003E \u003Cb\u003EData Protection Privacy Notice:\u003C\u002Fp\u003E\u003C\u002Fb\u003E \u003C\u002Fspan\u003E\n    \u003Cp\u003EThe controller for this project will be University College London (UCL). The UCL Data Protection Officer provides oversight of UCL activities involving the processing of personal data, and can be contacted at \u003Ca href=\"mailto:data-protection@ucl.ac.uk\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Edata-protection@ucl.ac.uk\u003C\u002Fa\u003E\u003Cbr\u003E\n    This ‘local’ privacy notice sets out the information that applies to this particular study. Further information on how UCL uses participant information can be found in our ‘general’ privacy notice: For participants in research studies, click \u003Ca href=\"https:\u002F\u002Fwww.ucl.ac.uk\u002Flegal-services\u002Fprivacy\u002Fucl-general-research-participant-privacy-notice\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Ehere\u003C\u002Fa\u003E.\u003Cbr\u003E\n    The information that is required to be provided to participants under data protection legislation (GDPR and DPA 2018) is provided across both the ‘local’ and ‘general’ privacy notices. The lawful basis that will be used to process your personal data are: ‘Public task’ for personal data.\n    \u003Cbr\u003EYour personal data will be processed so long as it is required for the research project. If we are able to anonymise or pseudonymise the personal data you provide we will undertake this, and will endeavour to minimise the processing of personal data wherever possible.\u003Cbr\u003E\n    If you are concerned about how your personal data is being processed, or if you would like to contact us about your rights, please contact UCL in the first instance at \u003Ca href=\"meilto:data-protection@ucl.ac.uk\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Edata-protection@ucl.ac.uk\u003C\u002Fa\u003E. \u003C\u002Fp\u003E\n\n    \u003Cp\u003E \u003Cspan style=\"color: #0000a0\"\u003E \u003Cb\u003EWhat if something goes wrong? \u003C\u002Fp\u003E\u003C\u002Fb\u003E \u003C\u002Fspan\u003E\n    \u003Cp\u003EIf you would like to raise a complaint about this research, please contact the Main Researcher (contact details above). If you are concerned about the ethics of the research, please contact \u003Ca href=\"mailto:ethics@ucl.ac.uk\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Eethics@ucl.ac.uk\u003C\u002Fa\u003E .\u003C\u002Fp\u003E\n\n\n    \u003Cp\u003EThank you for reading this information sheet and for considering taking part in this research study.\u003C\u002Fp\u003E\n\n    \u003Cp\u003E\u003Cspan style=\"color: #0000a0\"\u003EPlease press \u003Ckbd\u003EContinue\u003C\u002Fkbd\u003E. \u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- \u002F\u002F Behavior -\u003E target -\u003E button#b --\u003E\n\u003Cfooter\u003E\n  \u003Cbutton id =\"b\"\u003EContinue\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Participant information sheet",
      "tardy": true,
      "width": "l"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cstyle\u003E\n\n#div1{width: 100%;text-align: left;}\nheader{  padding: 5px;  height: 100px; color:darkblue;}\nfooter{  padding: 5px;  height: 70px;}\ndt{line-height: 2;font-weight: bold;}\ntable, th, td {  border: 1px solid black;\n  border-collapse: collapse;  background-color: #ecf2f9;}\nth, td {  padding: 1px;}\n\n\nfieldset {width: 100%;}\nfieldset \u003E dd {display: flex;}\nfieldset \u003E dd \u003E * {align-self: baseline;}\nfieldset \u003E dd \u003E input[type=checkbox] {\n  margin: 0 0.5ch 0 0;\n  width: 1em;\n  height: 1em;\n}\n\u003C\u002Fstyle\u003E\n\n\u003Cheader\u003E\n\u003Ch2\u003EConsent Form\u003C\u002Fh2\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain class=\"content-horizontal-center\"\u003E\n\u003Cform id = \"consent\"\u003E\n\u003Cdiv id = \"div1\"\u003E\n\n\u003Cp\u003EINFORMED CONSENT FOR PARTICIPANTS\u003C\u002Fp\u003E\n\u003Cp\u003EThis study has been approved by the Ethics Committee of the UCL Department of Experimental Psychology: ID No: EP\u002F2021\u002F005\u003C\u002Fp\u003E\n\n\u003Cfieldset\u003E\n\u003Cp\u003E\u003Cdt\u003EBy checking the boxes below, I confirm that:\u003C\u002Fdt\u003E\n  \u003Cdd\u003E\u003Cinput type=\"checkbox\" name=\"consent_box\" value=\"consent_given\" id=\"consent_box_1\" required\u002F\u003E\n  \u003Clabel for=\"consent_box_1\"\u003EI have read and understand the information sheet. I have had the opportunity to consider the information.\u003C\u002Flabel\u003E\u003C\u002Fdd\u003E\u003Cbr\u003E\n  \u003Cdd\u003E\u003Cinput type=\"checkbox\" name=\"consent_box\" value=\"consent_given\" id=\"consent_box_2\" required\u002F\u003E\n  \u003Clabel for=\"consent_box_2\"\u003EI understand that all information collected will be treated as strictly confidential and handled in accordance with the provisions of the General Data Protection Regulation.\u003C\u002Flabel\u003E\u003C\u002Fdd\u003E\u003Cbr\u003E\n  \u003Cdd\u003E\u003Cinput type=\"checkbox\" name=\"consent_box\" value=\"consent_given\" id=\"consent_box_3\" required\u002F\u003E\n  \u003Clabel for=\"consent_box_3\"\u003EI understand that anonymous data that cannot be traced back to me individually may be used in academic publications and shared in accordance with open science guidelines and I consent to this.\u003C\u002Flabel\u003E\u003C\u002Fdd\u003E\u003Cbr\u003E\n  \u003Cdd\u003E\u003Cinput type=\"checkbox\" name=\"consent_box\" value=\"consent_given\" id=\"consent_box_4\" required\u002F\u003E\n  \u003Clabel for=\"consent_box_4\"\u003EI understand that the legal basis for processing any personal information about me is my consent.\u003C\u002Flabel\u003E\u003C\u002Fdd\u003E\u003Cbr\u003E\n  \u003Cdd\u003E\u003Cinput type=\"checkbox\" name=\"consent_box\" value=\"consent_given\" id=\"consent_box_5\" required\u002F\u003E\n  \u003Clabel for=\"consent_box_5\"\u003EI understand that I can withdraw from the study at any time but that it will be difficult or impossible to withdraw my data once the task has been completed.\u003C\u002Flabel\u003E\u003C\u002Fdd\u003E\u003Cbr\u003E\n  \u003Cdd\u003E\u003Cinput type=\"checkbox\" name=\"consent_box\" value=\"consent_given\" id=\"consent_box_6\" required\u002F\u003E\n  \u003Clabel for=\"consent_box_6\"\u003EI am over 18 years of age\u003C\u002Flabel\u003E\u003C\u002Fdd\u003E\u003Cbr\u003E\n  \u003Cdd\u003E\u003Cinput type=\"checkbox\" name=\"consent_box\" value=\"consent_given\" id=\"consent_box_7\" required\u002F\u003E\n  \u003Clabel for=\"consent_box_7\"\u003EI consent to take part in this study\u003C\u002Flabel\u003E\u003C\u002Fdd\u003E\u003C\u002Fp\u003E  \n\u003C\u002Ffieldset\u003E\n\u003C\u002Fdiv\u003E\n\n\u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  \u003Cbutton type=\"submit\" form=\"consent\"\u003ESubmit \u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Consent Form",
      "tardy": true
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "",
          "content": "\u003Cstyle\u003E\ndiv.outer {\n    width: 100%;\n    text-align: left;\n}\ndiv.inner {\n    display: inline-block; \n    position:relative; \n    right: -50%;\n}\ndiv.inner img {\n    position: relative; \n    left:-50%; \n}\n\u003C\u002Fstyle\u003E\n\n\n\u003Cheader style=\"color:darkblue\"\u003E\n\u003Ch2\u003E Task Instructions \u003C\u002Fh2\u003E \n\u003C\u002Fheader\u003E\n\n\u003Cmain class=\"content-horizontal-center\"\u003E\n\n\u003Cdiv class = \"outer\"\u003E\n\n\u003Cp style=\"color: red;\"\u003E \u003Cb\u003E Please read the below instructions carefully as there will be a comprehension check after this page. \u003C\u002Fb\u003E \u003C\u002Fp\u003E\n\n\u003Cp\u003E In this experiment, there will be 100 trials in total. In each trial, you will need to decide between a \"safe\" and a \"risky\" lottery. Each lottery has different reward outcomes with unknown probabilities of each outcome occurring. \u003C\u002Fp\u003E\n\u003Cp\u003E Safe Lottery: \u003C\u002Fp\u003E\n\u003Cul\u003E\n   \u003Cli\u003E?% chance of winning 1p \u003C\u002Fli\u003E\n   \u003Cli\u003E?% chance of winning 0p \u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003E Risky Lottery:\u003C\u002Fp\u003E\n\u003Cul\u003E\n   \u003Cli\u003E ?% chance of winning 5p \u003C\u002Fli\u003E\n   \u003Cli\u003E ?% chance of \u003Cb\u003E extinction \u003C\u002Fb\u003E \u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003E If you draw the \u003Cb\u003E extinction \u003C\u002Fb\u003E outcome, your bonus payment for the whole experiment will be wiped out, and you cannot get any more bonus payments for future trials. In other words, if you draw the extinction outcome only once during the study, you will lose all bonus that you have accumulated before and \u003Cb\u003E you will not be able to receive more bonus for trials after the extinction event \u003C\u002Fb\u003E. However,\u003Cb\u003E \u003Cstrong\u003Eyou will still need to finish the rest of the trials \u003C\u002Fstrong\u003E\u003C\u002Fb\u003E (so choosing the extinction option will not save you any time). \u003C\u002Fp\u003E\n\n\u003Cp\u003E During the experiment, you will always see your \u003Cb\u003E current bonus\u003C\u002Fb\u003E on the top right. The current trial number is on the top left, and the two lotteries are in the middle.  \u003C\u002Fp\u003E\n\n\u003Cp\u003E See below a picture of the display. \u003C\u002Fp\u003E\n\n\n\u003Cdiv class = \"inner\"\u003E\n\u003Cimg src=\"static\u002F5p manipulation.jpg\" alt=\"Illustrated safe and risky lotteries\" style=\"width: 100%;\"\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Cp\u003E\u003Ccenter\u003E If you understand these instructions, please click \u003Ckbd\u003EContinue\u003C\u002Fkbd\u003E to start the experiment.\u003C\u002Fcenter\u003E\u003C\u002Fp\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\n\n\u003C!-- \u002F\u002F Behavior -\u003E target -\u003E button#b --\u003E\n\u003Cfooter\u003E\n  \u003Cbutton id =\"b\"\u003EContinue\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {
        "unknown condition pic .png": "embedded\u002F8757c5933b7903d18b1321839964be0766afdc496eaf0b03134eec63028f5c91.png"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Instructions Unknown",
      "tardy": true,
      "width": "l",
      "skip": "${condition === 1}"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "",
          "content": "\u003Cstyle\u003E\ndiv.outer {\n    width: 100%;\n    text-align: left;\n}\ndiv.inner {\n    display: inline-block; \n    position:relative; \n    right: -50%;\n}\ndiv.inner img {\n    position: relative; \n    left:-50%; \n}\n\u003C\u002Fstyle\u003E\n\n\n\u003Cheader style=\"color:darkblue\"\u003E\n\u003Ch2\u003E Task Instructions \u003C\u002Fh2\u003E \n\u003C\u002Fheader\u003E\n\n\u003Cmain class=\"content-horizontal-center\"\u003E\n\n\u003Cdiv class = \"outer\"\u003E\n\n\u003Cp style=\"color:red;\"\u003E \u003Cb\u003E Please read the below instructions carefully as there will be a comprehension check after this page. \u003C\u002Fb\u003E \u003C\u002Fp\u003E\n\n\u003Cp\u003E In this experiment, there will be 100 trials in total. In each trial, you will need to decide between a \"safe\" and a \"risky\" lottery. Each lottery has different reward outcomes with different probabilities of each outcome occurring. \u003C\u002Fp\u003E\n\u003Cp\u003E Safe Lottery: \u003C\u002Fp\u003E\n\u003Cul\u003E\n   \u003Cli\u003E50% chance of winning 1p \u003C\u002Fli\u003E\n   \u003Cli\u003E50% chance of winning 0p \u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003E Risky Lottery:\u003C\u002Fp\u003E\n\u003Cul\u003E\n   \u003Cli\u003E 95% chance of winning 5p\n   \u003Cli\u003E 5% chance of \u003Cb\u003E extinction \u003C\u002Fb\u003E \u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003E If you draw the \u003Cb\u003E extinction \u003C\u002Fb\u003E outcome, your bonus payment for the whole experiment will be wiped out, and you cannot get any more bonus payments for future trials. In other words, if you draw the extinction outcome only once during the study, you will lose all bonus that you have accumulated before and \u003Cb\u003E you will not be able to receive more bonus for trials after the extinction event \u003C\u002Fb\u003E. However,\u003Cb\u003E \u003Cstrong\u003Eyou will still need to finish the rest of the trials \u003C\u002Fstrong\u003E\u003C\u002Fb\u003E (so choosing the extinction option will not save you any time). \u003C\u002Fp\u003E\n\n\u003Cp\u003E During the experiment, you will always see your \u003Cb\u003E current bonus\u003C\u002Fb\u003E on the top right. The current trial number is on the top left, and the two lotteries are in the middle.  \u003C\u002Fp\u003E\n\n\u003Cp\u003E See below a picture of the display. \u003C\u002Fp\u003E\n\n\u003Cdiv class = \"inner\"\u003E\n\u003Cimg src=\"static\u002Fcontrol_adjusted risky .jpg\" alt=\"Illustrated safe and risky lotteries\" style=\"max-width: 100%;\"\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Cp\u003E\u003Ccenter\u003E If you understand these instructions, please click \u003Ckbd\u003EContinue\u003C\u002Fkbd\u003E to start the experiment.\u003C\u002Fcenter\u003E\u003C\u002Fp\u003E\n\n\u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\n\n\u003C!-- \u002F\u002F Behavior -\u003E target -\u003E button#b --\u003E\n\u003Cfooter\u003E\n  \u003Cbutton id =\"b\"\u003EContinue\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {
        "unknown condition pic .png": "embedded\u002F8757c5933b7903d18b1321839964be0766afdc496eaf0b03134eec63028f5c91.png",
        "Control.jpg": "embedded\u002Fa3cfda60ccda0f006efa126f3df4da09e79b147c4b6a767124b6b463c495a287.jpg"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Instructions Control",
      "tardy": true,
      "width": "l",
      "skip": "${condition === 0}"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cstyle\u003E\n#div1{\nwidth: 700px;\ntext-align:  left;\n}\nfooter{\n  margin-top: 5%;\n}\n\u003C\u002Fstyle\u003E\n\n\u003Cmain class=\"content-horizontal-center\"\u003E\n  \u003Cform\u003E\n    \u003Cdiv id = \"div1\"\u003E\n      \u003Ch2 style = \"color:darkblue;\"\u003EBefore you go ahead to the main experiment...\u003C\u002Fh2\u003E\n      \u003Cp\u003E Answer the following comprehension checks to make sure you understand the experimental setup. \u003C\u002Fp\u003E\u003Chr\u003E\n\n      \u003Cp\u003E What happens if you choose the risky lottery and you draw the extinction option? \u003C\u002Fp\u003E \n      \u003Cinput id = \"C11\" type = \"radio\" name=\"whatextinction\" value = \"nothing\" required\u003E \u003Clabel for=\"C11\"\u003E Nothing. \u003C\u002Flabel\u003E \u003Cbr\u003E\n      \u003Cinput id = \"C12\" type = \"radio\" name=\"whatextinction\" value = \"noreward\" required\u003E \u003Clabel for=\"C12\"\u003E I will not get a bonus for this trial. \u003C\u002Flabel\u003E \u003Cbr\u003E\n      \u003Cinput id = \"C13\" type = \"radio\" name=\"whatextinction\" value = \"nofuture\" required\u003E \u003Clabel for=\"C13\"\u003E I will keep all my past bonus money, but I cannot make more bonus money in the next trials. \u003C\u002Flabel\u003E \u003Cbr\u003E\n      \u003Cinput id = \"C14\" type = \"radio\" name=\"whatextinction\" value = \"correct\" required\u003E \u003Clabel for=\"C14\"\u003E I will lose all my bonus money, and I cannot get any more bonus payments for future trials. \u003C\u002Flabel\u003E \u003Cbr\u003E\u003Cbr\u003E\n\n\n      \u003Cp\u003E What does the piggy bank on the top right indicate?  \u003C\u002Fp\u003E\n      \u003Cinput id = \"C21\" type = \"radio\" name=\"piggybank\" value = \"nexttrial\" required\u003E \u003Clabel for=\"C21\"\u003EHow much bonus you can make in the next trial with good gambling skills. \u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cinput id = \"C22\" type = \"radio\" name=\"piggybank\" value = \"predictedmoney\" required\u003E \u003Clabel for=\"C22\"\u003E Your predicted amount of bonus after the next trial. \u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cinput id = \"C23\" type = \"radio\" name=\"piggybank\" value = \"correct\" required\u003E \u003Clabel for=\"C23\"\u003E Your current bonus. \u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cinput id = \"C24\" type = \"radio\" name=\"piggybank\" value = \"random\" required\u003E \u003Clabel for=\"C24\"\u003E A random number. \u003C\u002Flabel\u003E\u003Cbr\u003E\n\n    \u003C\u002Fdiv\u003E\n\n    \u003Cfooter\u003E\n      \u003Cbutton type = \"submit\" id = \"button\"\u003E\n        Submit\n      \u003C\u002Fbutton\u003E\n    \u003C\u002Ffooter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E\n\n\n\n",
      "scrollTop": true,
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Comprehension check",
      "tardy": true
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cstyle\u003E\n#div1{\nwidth: 700px;\ntext-align:  left;\n}\nfooter{\nmargin-top:20%;\n}\n\u003C\u002Fstyle\u003E\n\n\u003Cmain class=\"content-horizontal-center\"\u003E\n  \u003Cdiv id = \"div1\"\u003E\n \u003Ch2 style = \"color:darkblue;\"\u003EYou will now start the experiment.\u003C\u002Fh2\u003E\n\u003Chr\u003E\n\n\u003Cp\u003E Any bonus you earn now will be paid to you after this experiment. If you draw the extinction event in the main trials, you will not receive any bonus, however you can continue playing. \u003Cbr\u003E\u003Cbr\u003E  The experiment has \u003Cb\u003E 100 trials. \u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E Please click continue to start the experiment.\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- \u002F\u002F Behavior -\u003E target -\u003E button#b --\u003E\n\u003Cfooter\u003E\n  \u003Cbutton id =\"b\"\u003EContinue\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Start Main Task ",
      "tardy": true,
      "width": "l"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "Type": "main"
        }
      ],
      "sample": {
        "mode": "draw-replace",
        "n": "101"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Main task",
      "tardy": true,
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Trial",
        "content": [
          {
            "type": "lab.html.Form",
            "content": "\u003Chead\u003E \n  \u003Cstyle\u003E\n  form {\n    margin: 0 auto;\n    padding: 20px;\n    box-sizing: border-box;\n    max-width: 600px;  \n  }\n\n  .question {\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n    justify-content: flex-start;\n    box-sizing: border-box;\n    margin-top:5px;\n    padding:10px;\n    font-size: 1rem; \n    font-family:Arial;\n  }\n\n  .instruct {\n    text-align: left;  \n    margin-bottom: 10px;\n    line-height: 1.5;  \n    box-sizing: border-box;\n  }\n\n  label {\n    display: block;\n    margin-bottom: 15px;  \n    text-align: left;  \n    box-sizing: border-box;\n  }\n\n  .slider {\n    width: 100%; \n    box-sizing: border-box;\n  }\n\n  .label-row {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 50px;\n    padding: 5px;\n    font-size: 1rem;  \n  }\n\n  .value {\n    padding: 10px;\n    text-align: center;\n    font-weight: bold;\n    margin-top: 15px;\n    margin-bottom: 10px;\n    border: 2px solid rgb(199, 221, 228);\n    border-radius: 8px;\n    background-color: #f0f8ff;\n    width: fit-content;\n    margin: 10px auto;\n  }\n\n  input[type=\"range\"] { \n    \n    display: block;\n    height: 1px;\n    background: #ddd;\n    border-radius: 5px;\n    outline: none;\n   -webkit-appearance: none;\n    appearance: none;\n    }\n\n  input[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    background: blue;\n    cursor: pointer;\n  }\n\n  footer {\n    margin-top: 5%;\n    text-align: center;\n  }\n\u003C\u002Fstyle\u003E\n\n\n  \u003C\u002Fhead\u003E\n    \n  \u003Cform id=\"questionnaire\"\u003E\n\n    \u003Cheader style=\"color:darkblue\"\u003E\n        \u003Ch2\u003E You're still alive! \u003Cbr\u003E Take a little break: \u003C\u002Fh2\u003E\n    \u003C\u002Fheader\u003E\n\n    \u003Cp id = \"instruct\"\u003E\u003Cb\u003EPlease move the slider to choose a value.\u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\n    \u003C!-- Slider 1 --\u003E\n    \u003Cdiv class=\"question\"\u003E\n        \u003Clabel for=\"slider1\"\u003E1. If you choose the risky lottery how likely do you think it is that you would draw the extinction event?\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"label-row\"\u003E\n        \u003Cdiv class=\"label-left\"\u003E0%\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"label-right\"\u003E100%\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv\u003E\n        \u003Cinput class=\"slider\" id=\"slider1\" type=\"range\" name=\"slider1\" min=\"0\" max=\"100\" step=\"1\" required\u003E\n        \u003Ccenter class = \"value\"\u003E\n            \u003Cb\u003E\u003Cspan id=\"demo1\"\u003E  50%  \u003C\u002Fspan\u003E\u003C\u002Fb\u003E\n        \u003C\u002Fcenter\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Slider 2 --\u003E\n    \u003Cdiv class=\"question\"\u003E\n        \u003Clabel for=\"slider2\"\u003E2. If you choose the risky lottery 1000 times, how often do you think the extinction event would come up (assume for the purpose of this question that you could theoretically draw it multiple times)?\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"label-row\"\u003E\n        \u003Cdiv class=\"label-left\"\u003E0 times\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"label-right\"\u003E1000 times\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv\u003E\n        \u003Cinput class=\"slider\" id=\"slider2\" type=\"range\" name=\"slider2\" min=\"0\" max=\"1000\" step=\"1\" required\u003E\n        \u003Ccenter class = \"value\"\u003E\n            \u003Cb\u003E\u003Cspan id=\"demo2\"\u003E  500 times\u003C\u002Fspan\u003E\u003C\u002Fb\u003E\n        \u003C\u002Fcenter\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003C!-- Slider 3 --\u003E\n    \u003Cdiv class=\"question\"\u003E\n        \u003Clabel for=\"slider3\"\u003E3. If you choose the risky lottery 1000 times, how often do you think the extinction event would come up (assume for the purpose of this question that you could theoretically draw it multiple times)?\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"label-row\"\u003E\n        \u003Cdiv class=\"label-left\"\u003E0\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"label-right\"\u003E1000\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv\u003E\n        \u003Cinput class=\"slider\" id=\"slider3\" type=\"range\" name=\"slider3\" min=\"1\" max=\"999.9\" step=\"0.001\" required\u003E\n        \u003Ccenter class = \"value\"\u003E\n            \u003Cb\u003E \u003Cspan id=\"demo3\"\u003E  0.0  \u003C\u002Fspan\u003E\u003C\u002Fb\u003E\n        \u003C\u002Fcenter\u003E\n    \u003C\u002Fdiv\u003E\n\u003C\u002Fform\u003E\n\n\u003Cfooter\u003E\n    \u003Cbutton id=\"submit\" type=\"submit\" form=\"questionnaire\"\u003ESubmit\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E\n\n\n",
            "scrollTop": true,
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
var slider1 = document.getElementById("slider1");
var input1 = document.getElementById("demo1");
var slider2 = document.getElementById("slider2");
var input2 = document.getElementById("demo2");
var slider3 = document.getElementById("slider3");
var input3 = document.getElementById("demo3");
// const slider3Labels = document.getElementById("slider3-labels");

// function logOdds(p) {
//   return Math.log(p / (1 - p));
// }

// var cumulativeLogOdds = [];
// let logOddsSum = 0;

// for (let i = 0.01; i <= 0.9999; i += 0.001) {
//   const p1 = i;
//   const p2 = Math.min(i + 0.001, 0.9999); 
//   logOddsSum += logOdds(p2) - logOdds(p1);
//   cumulativeLogOdds.push(logOddsSum);
// }

// //calculate log-odds value for a given slider value
// function calculateLogOddsSum(value) {
//   if (value < 1) return 0;
//   if (value > 999.9) value = 999.9;

//   // Map the slider value (1 to 999.9) to cumulativeLogOdds indices (0 to 999)
//   const index = Math.round((value - 1) * 10); // 1 corresponds to index 0
//   return cumulativeLogOdds[index] || 0; // Use precomputed value or fallback
// }

// // Generate labels for every 100 increments
// function generateLabels() {
//   const step = 100; // Label every 100 increments
//   const max = parseFloat(slider3.max);
//   const min = parseFloat(slider3.min);

//   for (let i = min; i <= max; i += step) {
//     const label = document.createElement("div");
//     label.style.textAlign = "center";
//     label.style.flex = "1";
//     label.innerHTML = i.toFixed(1); // Display slider value
//     slider3Labels.appendChild(label);
//   }
// }

slider1.oninput = function () {
    input1.innerHTML = this.value + '%';
};
slider2.oninput = function () {
    input2.innerHTML = this.value + ' times';
};
slider3.oninput = function () {
  input3.innerHTML = parseFloat(this.value).toFixed(2);
  // const logOddsValue = calculateLogOddsSum(value);
};
// generateLabels();
}
            },
            "title": "Extinction estimate ",
            "tardy": true,
            "skip": "${counter!=20}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": -211,
                "top": 66.13,
                "angle": 0,
                "width": 225.28,
                "height": 327.84,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Control risky .PNG\"] }",
                "autoScale": "height"
              },
              {
                "type": "image",
                "left": -225,
                "top": 250,
                "angle": 0,
                "width": 90.24,
                "height": 89.28,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"F KEY.png\"] }",
                "autoScale": undefined
              },
              {
                "type": "i-text",
                "left": 311,
                "top": -150,
                "angle": 0,
                "width": 143.45,
                "height": 33.9,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#000000",
                "text": "${money}p",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "30",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -300,
                "top": -190,
                "angle": 0,
                "width": 186.78,
                "height": 73.22,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#fcbb0a",
                "text": "Trial Number\n${trialNr}\u002F100",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "30",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": -225,
                "angle": 0,
                "width": 390.53,
                "height": 61.02,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Please Chose Between One of the \nFollowing Two Lotteries",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "25",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 175,
                "top": -100,
                "angle": 0,
                "width": 112.05,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Lottery B",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "image",
                "left": 175,
                "top": 239.6,
                "angle": 0,
                "width": 93.05999999999999,
                "height": 92.11999999999999,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"J KEY.png\"] }",
                "autoScale": undefined
              },
              {
                "type": "image",
                "left": 306.8,
                "top": -229.48,
                "angle": 0,
                "width": 118.56,
                "height": 102.18,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"piggy bank 2.png\"] }",
                "autoScale": false
              },
              {
                "type": "image",
                "left": 175,
                "top": 50,
                "angle": 0,
                "width": 264.02,
                "height": 256.28,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"SAFE.png\"] }",
                "autoScale": undefined
              },
              {
                "type": "i-text",
                "left": -115,
                "top": 12,
                "angle": 0,
                "width": 27.81,
                "height": 28.25,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#036201",
                "text": "5p",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "25",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -60,
                "top": 163,
                "angle": 0,
                "width": 151.39,
                "height": 28.25,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#fb0404",
                "text": "EXTINCTION",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "25",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -335,
                "top": 161,
                "angle": 0,
                "width": 36.13,
                "height": 28.25,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#fb0404",
                "text": "5%",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "25",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -336,
                "top": 10,
                "angle": 0,
                "width": 50.04,
                "height": 28.25,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#036402",
                "text": "95%",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "25",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -215,
                "top": -100,
                "angle": 0,
                "width": 112.05,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Lottery A",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "F KEY.png": "embedded\u002Fae03c49c8283f73d26fc6ede08af7e514151291f3d74b53940c6a7b8a8041c0c.png",
              "J KEY.png": "embedded\u002F60822cce9ef4a5c970c48ce782e15d3afeebbc49bcc5d4efac948b7c63f7d642.png",
              "RISKY CONTROL.png": "embedded\u002F6c27e34a6b548d760d475aa609c7e417e6be46f9ce16a42d8c6222acdd205a60.png",
              "SAFE.png": "embedded\u002Fe80fc1e8fc8ad085959cda30a300b39046dead9398fc36b0c83938b02d43776f.png",
              "piggy bank 2.png": "embedded\u002F0215ec88e4fe9b8d3d1a0e42ad8dd6decd5c790cba2823fa6a04fa2bc9ba6b3a.png",
              "Control risky choice .png": "embedded\u002Fa7cc02ac8cb82ae0daa80c8b92b79aca2864f1b705d1a2ce462ff982ef0b4ed2.png",
              "risky choice .png": "embedded\u002F833fe395274dddc7343494c8d6162371e8c0b8b6f62f41fc736f0ea61a390805.png",
              "Control risky .PNG": "embedded\u002Feaec241f99af4f894584c7d09656b25c212eebba795a82514a0e729046463a39.PNG"
            },
            "responses": {
              "keypress(f)": "risky",
              "keypress(j)": "safe"
            },
            "parameters": {},
            "messageHandlers": {
              "end": function anonymous(
) {
currentChoice = this.data.response
randomNumber = this.random.random()
this.data.trialNr = trialNr
this.data.counter = counter
this.data.outcomeChoice = outcomeChoice
this.data.status = status

if(status === "living"){
  if (condition === 1){
  trialNr++
  counter++
    if(counter >= 20){
      counter = 0
    }
  }
  if(currentChoice == "risky"){
    if(randomNumber < .95){
      outcomeChoice = "five"
      money = money + 5
    } else {
      outcomeChoice = "extinction" 
    }
  }
  if(currentChoice == "safe"){
    if(randomNumber < .5){
      outcomeChoice = "zero"
      money = money + 0
    } else {
      outcomeChoice = "one"
      money = money + 1
    }
  }
}
}
            },
            "title": "Gamble Control",
            "tardy": true,
            "skip": "${status === \"extinct\" || condition === 0}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": -300,
                "top": -175,
                "angle": 0,
                "width": 181.93,
                "height": 73.22,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#fcbb0a",
                "text": "Trial Number\n${trialNr}\u002F100",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "30",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 315,
                "top": -150,
                "angle": 0,
                "width": 131.09,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${money}p",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": -225,
                "angle": 0,
                "width": 344.35,
                "height": 61.02,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Please Chose Between One of the \nFollowing Two Lotteries",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "25",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -200,
                "top": -75,
                "angle": 0,
                "width": 109.63,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Lottery A",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 190,
                "top": -75,
                "angle": 0,
                "width": 108.09,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Lottery B",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "image",
                "left": 311.31,
                "top": -213,
                "angle": 0,
                "width": 112.48,
                "height": 96.94,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"piggy bank 2.png\"] }",
                "autoScale": undefined
              },
              {
                "type": "image",
                "left": -200,
                "top": 250,
                "angle": 0,
                "width": 84.60000000000001,
                "height": 83.7,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"F KEY.png\"] }",
                "autoScale": undefined
              },
              {
                "type": "image",
                "left": 189,
                "top": 250,
                "angle": 0,
                "width": 87.12,
                "height": 86.24,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"J KEY.png\"] }",
                "autoScale": undefined
              },
              {
                "type": "rect",
                "left": 187,
                "top": 50,
                "angle": 0,
                "width": 119.85,
                "height": 119.85,
                "stroke": "#aaaaaa",
                "strokeWidth": 2,
                "fill": "#ffffff"
              },
              {
                "type": "i-text",
                "left": 186,
                "top": 35,
                "angle": 0,
                "width": 70.89,
                "height": 28.25,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#a3c786",
                "text": "?% 1p",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "25",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -150,
                "top": 50,
                "angle": 0,
                "width": 240.85,
                "height": 127.2,
                "stroke": "#aaaaaa",
                "strokeWidth": 2,
                "fill": "#f1efef"
              },
              {
                "type": "i-text",
                "left": 186,
                "top": 75,
                "angle": 0,
                "width": 70.89,
                "height": 28.25,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#919191",
                "text": "?% 0p",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "25",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -150,
                "top": 75,
                "angle": 0,
                "width": 194.47,
                "height": 28.25,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#c4452c",
                "text": "?% EXTINCTION",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "25",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -214,
                "top": 25,
                "angle": 0,
                "width": 70.89,
                "height": 28.25,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#35722a",
                "text": "?% 5p",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "25",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "piggy bank 2.png": "embedded\u002F0215ec88e4fe9b8d3d1a0e42ad8dd6decd5c790cba2823fa6a04fa2bc9ba6b3a.png",
              "F KEY.png": "embedded\u002Fae03c49c8283f73d26fc6ede08af7e514151291f3d74b53940c6a7b8a8041c0c.png",
              "J KEY.png": "embedded\u002F60822cce9ef4a5c970c48ce782e15d3afeebbc49bcc5d4efac948b7c63f7d642.png",
              "SAFE.png": "embedded\u002Fe80fc1e8fc8ad085959cda30a300b39046dead9398fc36b0c83938b02d43776f.png",
              "manipulation safe.png": "embedded\u002Fe41dbd27faae3f86e490e34e826ba0b76d98b74e0f54f75dc945a0b381c59237.png",
              "manipulation risky .png": "embedded\u002F403a43578a7d59c35905f189b64eb529688100c684d39045df897a2567346f7c.png"
            },
            "responses": {
              "keypress(f)": "risky",
              "keypress(j)": "safe"
            },
            "parameters": {},
            "messageHandlers": {
              "end": function anonymous(
) {
currentChoice = this.data.response
randomNumber = this.random.random()
this.data.trialNr = trialNr
this.data.counter = counter
this.data.outcomeChoice = outcomeChoice
this.data.status = status

if(status === "living"){
  if (condition === 0){
  trialNr++
  counter++
    if(counter >= 20){
      counter = 0
    }
  }
  if(currentChoice == "risky"){
    if(randomNumber < .95){
      outcomeChoice = "five"
      money = money + 5
    } else {
      outcomeChoice = "extinction" 
    }
  }
  if(currentChoice == "safe"){
    if(randomNumber < .5){
      outcomeChoice = "zero"
      money = money + 0
    } else {
      outcomeChoice = "one"
      money = money + 1
    }
  }
} 
}
            },
            "title": "Gamble Unknown",
            "tardy": true,
            "skip": "${status === \"extinct\" || condition === 1}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": -211,
                "top": 66.13,
                "angle": 0,
                "width": 225.28,
                "height": 327.84,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"Control risky .PNG\"] }",
                "autoScale": "height"
              },
              {
                "type": "image",
                "left": -225,
                "top": 250,
                "angle": 0,
                "width": 90.24,
                "height": 89.28,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"F KEY.png\"] }",
                "autoScale": undefined
              },
              {
                "type": "i-text",
                "left": 312,
                "top": -150,
                "angle": 0,
                "width": 143.45,
                "height": 33.9,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#000000",
                "text": "${money}p",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "30",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -300,
                "top": -200,
                "angle": 0,
                "width": 186.78,
                "height": 73.22,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#fcbb0a",
                "text": "Trial Number\n${trialNr}\u002F100",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "30",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": -225,
                "angle": 0,
                "width": 390.53,
                "height": 61.02,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Please Chose Between One of the \nFollowing Two Lotteries",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "25",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 175,
                "top": -100,
                "angle": 0,
                "width": 112.05,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Lottery B",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "image",
                "left": 175,
                "top": 239.6,
                "angle": 0,
                "width": 93.05999999999999,
                "height": 92.11999999999999,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"J KEY.png\"] }",
                "autoScale": undefined
              },
              {
                "type": "image",
                "left": 175,
                "top": 50,
                "angle": 0,
                "width": 264.02,
                "height": 256.28,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"SAFE.png\"] }",
                "autoScale": undefined
              },
              {
                "type": "i-text",
                "left": -115,
                "top": 12,
                "angle": 0,
                "width": 27.81,
                "height": 28.25,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#036201",
                "text": "5p",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "25",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -60,
                "top": 163,
                "angle": 0,
                "width": 151.39,
                "height": 28.25,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#fb0404",
                "text": "EXTINCTION",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "25",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -335,
                "top": 161,
                "angle": 0,
                "width": 36.13,
                "height": 28.25,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#fb0404",
                "text": "5%",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "25",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -336,
                "top": 10,
                "angle": 0,
                "width": 50.04,
                "height": 28.25,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#036402",
                "text": "95%",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "25",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -220,
                "top": -100,
                "angle": 0,
                "width": 112.05,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Lottery A",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "image",
                "left": 312.97,
                "top": -225,
                "angle": 0,
                "width": 86.94000000000001,
                "height": 97.2,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"mushroom cloud.png\"] }",
                "autoScale": undefined
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "F KEY.png": "embedded\u002Fae03c49c8283f73d26fc6ede08af7e514151291f3d74b53940c6a7b8a8041c0c.png",
              "J KEY.png": "embedded\u002F60822cce9ef4a5c970c48ce782e15d3afeebbc49bcc5d4efac948b7c63f7d642.png",
              "RISKY CONTROL.png": "embedded\u002F6c27e34a6b548d760d475aa609c7e417e6be46f9ce16a42d8c6222acdd205a60.png",
              "SAFE.png": "embedded\u002Fe80fc1e8fc8ad085959cda30a300b39046dead9398fc36b0c83938b02d43776f.png",
              "piggy bank 2.png": "embedded\u002F0215ec88e4fe9b8d3d1a0e42ad8dd6decd5c790cba2823fa6a04fa2bc9ba6b3a.png",
              "Control risky choice .png": "embedded\u002Fa7cc02ac8cb82ae0daa80c8b92b79aca2864f1b705d1a2ce462ff982ef0b4ed2.png",
              "risky choice .png": "embedded\u002F833fe395274dddc7343494c8d6162371e8c0b8b6f62f41fc736f0ea61a390805.png",
              "Control risky .PNG": "embedded\u002Feaec241f99af4f894584c7d09656b25c212eebba795a82514a0e729046463a39.PNG",
              "mushroom cloud.png": "embedded\u002F10323f1d5976e011b40198ca88cf82bdf26fa7c1db9faedf4e7e22b54638f0ee.png"
            },
            "responses": {
              "keypress(f)": "risky",
              "keypress(j)": "safe"
            },
            "parameters": {},
            "messageHandlers": {
              "end": function anonymous(
) {
currentChoice = this.data.response
randomNumber = this.random.random()
this.data.trialNr = trialNr
this.data.counter = counter
this.data.outcomeChoice = outcomeChoice

if(status === "extinct"){
  if (condition === 1){
  trialNr++
  counter++
    if(counter >= 20){
      counter = 0
    }
  }
  if(currentChoice == "risky"){
    if(randomNumber < .95){
      outcomeChoice = "five"
    } else {
      outcomeChoice = "extinction" 
    }
  }
  if(currentChoice == "safe"){
    if(randomNumber < .5){
      outcomeChoice = "zero"
    } else {
      outcomeChoice = "one"
    }
  }
} 


}
            },
            "title": "After-extinct Control",
            "tardy": true,
            "skip": "${status !== \"extinct\" || condition === 0}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": -300,
                "top": -175,
                "angle": 0,
                "width": 186.78,
                "height": 73.22,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#fcbb0a",
                "text": "Trial Number\n${trialNr}\u002F100",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "30",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 313,
                "top": -139,
                "angle": 0,
                "width": 143.45,
                "height": 33.9,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${money}p",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "30",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": -225,
                "angle": 0,
                "width": 390.53,
                "height": 61.02,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Please Chose Between One of the \nFollowing Two Lotteries",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "25",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -200,
                "top": -75,
                "angle": 0,
                "width": 112.05,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Lottery A",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 189,
                "top": -75,
                "angle": 0,
                "width": 112.05,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Lottery B",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "image",
                "left": -200,
                "top": 250,
                "angle": 0,
                "width": 84.60000000000001,
                "height": 83.7,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"F KEY.png\"] }",
                "autoScale": undefined
              },
              {
                "type": "image",
                "left": 189,
                "top": 250,
                "angle": 0,
                "width": 87.12,
                "height": 86.24,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"J KEY.png\"] }",
                "autoScale": undefined
              },
              {
                "type": "rect",
                "left": 187,
                "top": 50,
                "angle": 0,
                "width": 119.85,
                "height": 119.85,
                "stroke": "#aaaaaa",
                "strokeWidth": 2,
                "fill": "#ffffff"
              },
              {
                "type": "i-text",
                "left": 186,
                "top": 35,
                "angle": 0,
                "width": 70.89,
                "height": 28.25,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#a3c786",
                "text": "?% 1p",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "25",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -150,
                "top": 50,
                "angle": 0,
                "width": 240.85,
                "height": 127.2,
                "stroke": "#aaaaaa",
                "strokeWidth": 2,
                "fill": "#f1efef"
              },
              {
                "type": "i-text",
                "left": 186,
                "top": 75,
                "angle": 0,
                "width": 70.89,
                "height": 28.25,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#919191",
                "text": "?% 0p",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "25",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -150,
                "top": 75,
                "angle": 0,
                "width": 194.47,
                "height": 28.25,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#c4452c",
                "text": "?% EXTINCTION",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "25",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -214,
                "top": 25,
                "angle": 0,
                "width": 70.89,
                "height": 28.25,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#35722a",
                "text": "?% 5p",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "25",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "image",
                "left": 312.45,
                "top": -210.68,
                "angle": 0,
                "width": 86.94000000000001,
                "height": 97.2,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"mushroom cloud.png\"] }",
                "autoScale": undefined
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "piggy bank 2.png": "embedded\u002F0215ec88e4fe9b8d3d1a0e42ad8dd6decd5c790cba2823fa6a04fa2bc9ba6b3a.png",
              "F KEY.png": "embedded\u002Fae03c49c8283f73d26fc6ede08af7e514151291f3d74b53940c6a7b8a8041c0c.png",
              "J KEY.png": "embedded\u002F60822cce9ef4a5c970c48ce782e15d3afeebbc49bcc5d4efac948b7c63f7d642.png",
              "SAFE.png": "embedded\u002Fe80fc1e8fc8ad085959cda30a300b39046dead9398fc36b0c83938b02d43776f.png",
              "manipulation safe.png": "embedded\u002Fe41dbd27faae3f86e490e34e826ba0b76d98b74e0f54f75dc945a0b381c59237.png",
              "manipulation risky .png": "embedded\u002F403a43578a7d59c35905f189b64eb529688100c684d39045df897a2567346f7c.png",
              "mushroom cloud.png": "embedded\u002F10323f1d5976e011b40198ca88cf82bdf26fa7c1db9faedf4e7e22b54638f0ee.png"
            },
            "responses": {
              "keypress(f)": "risky",
              "keypress(j)": "safe"
            },
            "parameters": {},
            "messageHandlers": {
              "end": function anonymous(
) {
currentChoice = this.data.response
randomNumber = this.random.random()
this.data.trialNr = trialNr
this.data.counter = counter
this.data.outcomeChoice = outcomeChoice

if(status === "extinct"){
  if (condition === 0){
  trialNr++
  counter++
    if(counter >= 20){
      counter = 0
    }
  }
  if(currentChoice == "risky"){
    if(randomNumber < .95){
      outcomeChoice = "five"
    } else {
      outcomeChoice = "extinction" 
    }
  }
  if(currentChoice == "safe"){
    if(randomNumber < .5){
      outcomeChoice = "zero"
    } else {
      outcomeChoice = "one"
    }
  }
} 
}
            },
            "title": "After-extinct Unknown",
            "tardy": true,
            "skip": "${status !== \"extinct\" || condition === 1}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": -25,
                "top": -239,
                "angle": 0,
                "width": 439.45,
                "height": 61.02,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#d6341a",
                "text": "You've gone extinct!\nYou won't get any bonus in this experiment.",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "30",
                "fontFamily": "serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "image",
                "left": -25,
                "top": -15,
                "angle": 0,
                "width": 286.58,
                "height": 320.4,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"mushroom cloud.png\"] }",
                "autoScale": undefined
              },
              {
                "type": "i-text",
                "left": -25,
                "top": 188,
                "angle": 0,
                "width": 589.06,
                "height": 61.02,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "You will still need to continue playing the remaining trials.\nHowever, you won't be able to recieve any more payoffs.",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "25",
                "fontFamily": "serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -15,
                "top": 260,
                "angle": 0,
                "width": 323.3,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Press SPACE to continue",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "extinction feedback.png": "embedded\u002F5b1d27126735b661ce85d4bd381750581c7cb2a77e780b356b9613f675da8018.png",
              "mushroom cloud.png": "embedded\u002F10323f1d5976e011b40198ca88cf82bdf26fa7c1db9faedf4e7e22b54638f0ee.png"
            },
            "responses": {
              "keypress(Space)": "space"
            },
            "parameters": {},
            "messageHandlers": {
              "commit": function anonymous(
) {
if (outcomeChoice === "extinction") {
    status = "extinct"
    money = 0
}


}
            },
            "title": "Extinction feedback",
            "tardy": true,
            "skip": "${outcomeChoice !== \"extinction\"}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": -1.5,
                "top": -25,
                "angle": 0,
                "width": 171.76,
                "height": 150.96,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin.png\"] }",
                "autoScale": undefined
              },
              {
                "type": "i-text",
                "left": 0,
                "top": -25,
                "angle": 0,
                "width": 43.79,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+5p",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "35",
                "fontFamily": "serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "coin.png": "embedded\u002Ff39f2dbe8e933599fec5bed4cb37fb332f25672c994f5f4ef7550e910c6548eb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Feedback 5p",
            "tardy": true,
            "timeout": "1000",
            "skip": "${outcomeChoice !== \"five\"}"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": -1.5,
                "top": -25,
                "angle": 0,
                "width": 171.76,
                "height": 150.96,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${ this.files[\"coin.png\"] }",
                "autoScale": undefined
              },
              {
                "type": "i-text",
                "left": 0,
                "top": -25,
                "angle": 0,
                "width": 54.74,
                "height": 39.55,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+1p",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "35",
                "fontFamily": "serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "coin.png": "embedded\u002Ff39f2dbe8e933599fec5bed4cb37fb332f25672c994f5f4ef7550e910c6548eb.png"
            },
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Feedback 1p",
            "tardy": true,
            "timeout": "1000",
            "skip": "${outcomeChoice !== \"one\" }"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": -25,
                "top": -25,
                "angle": 0,
                "width": 54.74,
                "height": 39.55,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+0p",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "35",
                "fontFamily": "serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Feedback 0p",
            "tardy": true,
            "timeout": "1000",
            "skip": "${outcomeChoice !== \"zero\"}"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "",
          "content": "\u003Chtml\u003E\n\u003Cstyle\u003E\n#text{\ntext-align:center;\n}\nhtml{\nwidth:100%;\npadding:20px;\n}\n\u003C\u002Fstyle\u003E\n\n\u003Cheader style=\"color:darkblue\"\u003E\n\u003Ch2\u003E Well done!  You made it :) \u003C\u002Fh2\u003E \u003Cbr\u003E\n\u003Ch3\u003E Just three more little tasks before you go! \u003C\u002Fh3\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cdiv id = \"text\"\u003E\n\u003Cp\u003E There are one attention check & two questionnaires following this page, \n    please answer the questions to the best of your ability.\n\u003C\u002Fp\u003E\n\u003C\u002Fhtml\u003E"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Let's go! →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Prep for questionnaires"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cstyle\u003E\n#div1{\nwidth: 700px;\ntext-align:  left;\n}\nfooter{\n  margin-top:10%;\n}\n\u003C\u002Fstyle\u003E\n\n\u003Cmain class=\"content-horizontal-center\"\u003E\n  \u003Cform\u003E\n    \u003Cdiv id = \"div1\"\u003E\n        \n      \u003Ch2 style = \"color:darkblue;\"\u003E \n        You earned a total bonus of: \u003Cstrong\u003E  0p\u003C\u002Fstrong\u003E\n      \u003C\u002Fh2\u003E \n\n      \u003Cp\u003EPlease answer the following two attention check questions. \u003C\u002Fp\u003E\n\n      \u003Cp\u003E1. How many trials were there in the main part of the experiment? \u003C\u002Fp\u003E \n        \u003Cinput id = \"trial20\" type = \"radio\" name=\"attentiontrials\" value = \"20\" required\u003E \u003Clabel for=\"trial20\"\u003E 20 \u003C\u002Flabel\u003E \u003Cbr\u003E\n        \u003Cinput id = \"trial50\" type = \"radio\" name=\"attentiontrials\" value = \"50\" required\u003E \u003Clabel for=\"trial50\"\u003E 50 \u003C\u002Flabel\u003E \u003Cbr\u003E\n        \u003Cinput id = \"trial100\" type = \"radio\" name=\"attentiontrials\" value = \"100\" required\u003E \u003Clabel for=\"trial100\"\u003E 100 \u003C\u002Flabel\u003E \u003Cbr\u003E\n        \u003Cinput id = \"trial200\" type = \"radio\" name=\"attentiontrials\" value = \"200\" required\u003E \u003Clabel for=\"trial200\"\u003E 200 \u003C\u002Flabel\u003E \u003Cbr\u003E\n\n\n      \u003Cp\u003E2. What were the three possible bonus payments per trial in this study? \u003C\u002Fp\u003E\n       \u003Cinput id = \"bonus012\" type = \"radio\" name=\"attentionpayoffs\" value = \"0-1-2\" required\u003E \u003Clabel for=\"bonus012\"\u003Eextinction, 0, +1, +2 \u003C\u002Flabel\u003E \u003Cbr\u003E\n        \u003Cinput id = \"bonus015\" type = \"radio\" name=\"attentionpayoffs\" value = \"0-1-5\" required\u003E \u003Clabel for=\"bonus015\"\u003Eextinction, 0, +1, +5 \u003C\u002Flabel\u003E\u003Cbr\u003E\n        \u003Cinput id = \"bonus0110\" type = \"radio\" name=\"attentionpayoffs\" value = \"0-1-10\" required\u003E \u003Clabel for=\"bonus0110\"\u003Eextinction, 0, +1, +10 \u003C\u002Flabel\u003E\u003Cbr\u003E\n        \u003Cinput id = \"bonus0220\" type = \"radio\" name=\"attentionpayoffs\" value = \"0-2-20\" required\u003E \u003Clabel for=\"bonus0220\"\u003Eextinction, 0, +2, +20 \u003C\u002Flabel\u003E\u003Cbr\u003E\n\n      \u003Cp\u003E3. Is there anything you want to tell us about how you went about this task? \u003C\u002Fp\u003E\n      \u003Ctextarea name=\"text_response\" rows = \"5\" cols = \"60\"\u003E\n      \u003C\u002Ftextarea\u003E\n      \u003Cfooter\u003E\n        \u003Cbutton type=\"submit\" style = \"text-align:center;\"\u003ESubmit\u003C\u002Fbutton\u003E\n      \u003C\u002Ffooter\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Attention check",
      "tardy": true
    },
    {
      "type": "lab.html.Form",
      "content": "\u003C!DOCTYPE html\u003E\n\u003Chtml\u003E\n\u003Chead\u003E\n\u003Cstyle\u003E\n\nhtml{\n  width: 100%;\n}\n\nbody{\n  margin-right:10px;\n}\n\nh2{\n  text-align:center;\n  margin-bottom:10px;\n  color:darkblue;\n}\n\n.questions {\n  display:flex;\n  align-items:center;\n  margin-bottom: 20px;\n}\n\n.questions label {\n  margin-right:20px;\n  min-width:100px;\n}\n.radio-container {\n    display:flex;\n    flex-wrap:wrap;\n    justify-content:space-between;\n    gap:5px;\n    align-items:center;\n    padding: 10px; \n    border: 2px solid rgb(199, 221, 228); \n    border-radius: 8px; \n    background-color: #f0f8ff;\n    margin-bottom: 30px;\n}\n\n.radio-container input{\n  margin:0;\n}\n         \n.radio-button {\n  display:flex; \n  justify-content: wrap;\n  margin-right: 20px; \n}\n       \n.radio-button label {\n    margin-left: 10px;\n    display:flex;\n    position:relative;\n}\n\n.radio-container-cause{\n    display:flex;\n    justify-content: center;\n    align-items:center;\n    margin: 5px;\n    padding: 10px; \n    border: 2px solid rgb(199, 221, 228); \n    border-radius: 8px; \n    background-color: #f0f8ff;\n}\n.radio-button-c{\n    display:flex; \n    justify-content: space-between;\n    margin-right: 10px; \n}\n\n.radio-button-text{\n    flex-direction: column;\n    align-items:flex-start;\n    justify-content: space-between;\n    margin-right: 10px;\n}\n\n.radio-button-text textarea {\n    margin-top: 5px; \n    width: 80px;\n    height: 30px;\n}\n\n\u003C\u002Fstyle\u003E\n\n\u003C\u002Fhead\u003E\n\n\u003Ch2\u003E Questionnaire 1. \u003C\u002Fh2\u003E\n\u003Cbody\u003E\n\n\u003Cp\u003EPlease read the questions below carefully before answering. \u003Cbr\u003E \u003Cbr\u003E\n\u003Cstrong\u003EHuman extinction\u003C\u002Fstrong\u003E, in this context, refers to a catastrophic event (a large-scale disaster) that eliminates the entire human population and erases all of humanity's past achievements, leaving no possibility for recovery or rebuilding in the future. \u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EPlease choose the option that best represent how you feel. \u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cmain\u003E\n  \u003Cform name = \"questionnaire\"\u003E\n  \u003Cdiv class = \"questions\"\u003E\n    \u003Clabel\u003E1.\tHuman extinction would be a bad outcome.\u003C\u002Flabel\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class = \"radio-container\"\u003E\n      \u003Cdiv class=\"radio-button\"\u003E\n        \u003Cinput type=\"radio\" id = \"Q1_Strongly-disagree\" name=\"Q1_likelihood\" value=\"Strongly-disagree\"\u003E\n        \u003Clabel for=\"Q1_Strongly-disagree\"\u003EStrongly Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E    \n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q1_Disagree\" name=\"Q1_likelihood\" value=\"Disagree\"\u003E\n      \u003Clabel for=\"Q1_Disagree\"\u003EDisagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n     \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q1_Slightly-disagree\" name=\"Q1_likelihood\" value=\"Slightly-disagree\"\u003E\n      \u003Clabel for=\"Q1_Slightly-disagree\"\u003ESlightly disagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q1_Neutral\" name=\"Q1_likelihood\" value=\"Neutral\"\u003E\n      \u003Clabel for=\"Q1_Neutral\"\u003ENeutral\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q1_Slightly-agree\" name=\"Q1_likelihood\" value=\"Slightly-agree\"\u003E\n      \u003Clabel for=\"Q1_Slightly-agree\"\u003ESlightly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q1_Agree\" name=\"Q1_likelihood\" value=\"Agree\"\u003E\n      \u003Clabel for=\"Q1_Agree\"\u003EAgree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q1_Strongly-agree\" name=\"Q1_likelihood\" value=\"Strongly-agree\"\u003E\n      \u003Clabel for=\"Q1_Strongly-agree\"\u003EStrongly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n  \u003Cdiv class = \"questions\"\u003E\n    \u003Clabel\u003E2. The risk of human extinction this century is substantial (i.e., more than 1 in 10).\u003C\u002Flabel\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class = \"radio-container\"\u003E\n      \u003Cdiv class=\"radio-button\"\u003E\n        \u003Cinput type=\"radio\" id = \"Q2_Strongly-disagree\" name=\"Q2_likelihood\" value=\"Strongly-disagree\"\u003E\n        \u003Clabel for=\"Q2_Strongly-disagree\"\u003EStrongly Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E    \n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q2_Disagree\" name=\"Q2_likelihood\" value=\"Disagree\"\u003E\n      \u003Clabel for=\"Q2_Disagree\"\u003EDisagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n     \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q2_Slightly-disagree\" name=\"Q2_likelihood\" value=\"Slightly-disagree\"\u003E\n      \u003Clabel for=\"Q2_Slightly-disagree\"\u003ESlightly disagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q2_Neutral\" name=\"Q2_likelihood\" value=\"Neutral\"\u003E\n      \u003Clabel for=\"Q2_Neutral\"\u003ENeutral\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q2_Slightly-agree\" name=\"Q2_likelihood\" value=\"Slightly-agree\"\u003E\n      \u003Clabel for=\"Q2_Slightly-agree\"\u003ESlightly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q2_Agree\" name=\"Q2_likelihood\" value=\"Agree\"\u003E\n      \u003Clabel for=\"Q2_Agree\"\u003EAgree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q2_Strongly-agree\" name=\"Q2_likelihood\" value=\"Strongly-agree\"\u003E\n      \u003Clabel for=\"Q2_Strongly-agree\"\u003EStrongly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n\n\u003Cdiv class = \"questions\"\u003E\n    \u003Clabel\u003E3.\tHumanity’s extinction is more meaningful than its survival. \u003C\u002Flabel\u003E\n  \u003C\u002Fdiv\u003E\n \u003Cdiv class = \"radio-container\"\u003E\n      \u003Cdiv class=\"radio-button\"\u003E\n        \u003Cinput type=\"radio\" id = \"Q3_Strongly-disagree\" name=\"Q3_likelihood\" value=\"Strongly-disagree\"\u003E\n        \u003Clabel for=\"Q3_Strongly-disagree\"\u003EStrongly Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E    \n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q3_Disagree\" name=\"Q3_likelihood\" value=\"Disagree\"\u003E\n      \u003Clabel for=\"Q3_Disagree\"\u003EDisagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n     \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q3_Slightly-disagree\" name=\"Q3_likelihood\" value=\"Slightly-disagree\"\u003E\n      \u003Clabel for=\"Q3_Slightly-disagree\"\u003ESlightly disagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q3_Neutral\" name=\"Q3_likelihood\" value=\"Neutral\"\u003E\n      \u003Clabel for=\"Q3_Neutral\"\u003ENeutral\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q3_Slightly-agree\" name=\"Q3_likelihood\" value=\"Slightly-agree\"\u003E\n      \u003Clabel for=\"Q3_Slightly-agree\"\u003ESlightly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q3_Agree\" name=\"Q3_likelihood\" value=\"Agree\"\u003E\n      \u003Clabel for=\"Q3_Agree\"\u003EAgree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q3_Strongly-agree\" name=\"Q3_likelihood\" value=\"Strongly-agree\"\u003E\n      \u003Clabel for=\"Q3_Strongly-agree\"\u003EStrongly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003Cdiv class = \"questions\"\u003E\n    \u003Clabel\u003E4. The world would be better off if humans no longer existed. \u003Clabel\u003E\n\u003C\u002Fdiv\u003E\n  \u003Cdiv class = \"radio-container\"\u003E\n      \u003Cdiv class=\"radio-button\"\u003E\n        \u003Cinput type=\"radio\" id = \"Q4_Strongly-disagree\" name=\"Q4_likelihood\" value=\"Strongly-disagree\"\u003E\n        \u003Clabel for=\"Q4_Strongly-disagree\"\u003EStrongly Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E    \n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q4_Disagree\" name=\"Q4_likelihood\" value=\"Disagree\"\u003E\n      \u003Clabel for=\"Q4_Disagree\"\u003EDisagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n     \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q4_Slightly-disagree\" name=\"Q4_likelihood\" value=\"Slightly-disagree\"\u003E\n      \u003Clabel for=\"Q4_Slightly-disagree\"\u003ESlightly disagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q4_Neutral\" name=\"Q4_likelihood\" value=\"Neutral\"\u003E\n      \u003Clabel for=\"Q4_Neutral\"\u003ENeutral\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q4_Slightly-agree\" name=\"Q4_likelihood\" value=\"Slightly-agree\"\u003E\n      \u003Clabel for=\"Q4_Slightly-agree\"\u003ESlightly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q4_Agree\" name=\"Q4_likelihood\" value=\"Agree\"\u003E\n      \u003Clabel for=\"Q4_Agree\"\u003EAgree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q4_Strongly-agree\" name=\"Q4_likelihood\" value=\"Strongly-agree\"\u003E\n      \u003Clabel for=\"Q4_Strongly-agree\"\u003EStrongly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003Cdiv class = \"questions\"\u003E\n    \u003Clabel\u003E5.\tAs a society, we should invest considerable resources in reducing risks of human extinction. \u003C\u002Flabel\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class = \"radio-container\"\u003E\n      \u003Cdiv class=\"radio-button\"\u003E\n        \u003Cinput type=\"radio\" id = \"Q5_Strongly-disagree\" name=\"Q5_likelihood\" value=\"Strongly-disagree\"\u003E\n        \u003Clabel for=\"Q5_Strongly-disagree\"\u003EStrongly Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E    \n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q5_Disagree\" name=\"Q5_likelihood\" value=\"Disagree\"\u003E\n      \u003Clabel for=\"Q5_Disagree\"\u003EDisagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n     \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q5_Slightly-disagree\" name=\"Q5_likelihood\" value=\"Slightly-disagree\"\u003E\n      \u003Clabel for=\"Q5_Slightly-disagree\"\u003ESlightly disagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q5_Neutral\" name=\"Q5_likelihood\" value=\"Neutral\"\u003E\n      \u003Clabel for=\"Q5_Neutral\"\u003ENeutral\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q5_Slightly-agree\" name=\"Q5_likelihood\" value=\"Slightly-agree\"\u003E\n      \u003Clabel for=\"Q5_Slightly-agree\"\u003ESlightly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q5_Agree\" name=\"Q5_likelihood\" value=\"Agree\"\u003E\n      \u003Clabel for=\"Q5_Agree\"\u003EAgree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q5_Strongly-agree\" name=\"Q5_likelihood\" value=\"Strongly-agree\"\u003E\n      \u003Clabel for=\"Q5_Strongly-agree\"\u003EStrongly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003Cdiv class = \"questions\"\u003E\n    \u003Clabel\u003E6.\tWe have a moral obligation to leave the planet in a similar or better state for future generations.\u003C\u002Flabel\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class = \"radio-container\"\u003E\n      \u003Cdiv class=\"radio-button\"\u003E\n        \u003Cinput type=\"radio\" id = \"Q6_Strongly-disagree\" name=\"Q6_likelihood\" value=\"Strongly-disagree\"\u003E\n        \u003Clabel for=\"Q6_Strongly-disagree\"\u003EStrongly Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E    \n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q6_Disagree\" name=\"Q6_likelihood\" value=\"Disagree\"\u003E\n      \u003Clabel for=\"Q6_Disagree\"\u003EDisagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n     \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q6_Slightly-disagree\" name=\"Q6_likelihood\" value=\"Slightly-disagree\"\u003E\n      \u003Clabel for=\"Q6_Slightly-disagree\"\u003ESlightly disagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q6_Neutral\" name=\"Q6_likelihood\" value=\"Neutral\"\u003E\n      \u003Clabel for=\"Q6_Neutral\"\u003ENeutral\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q6_Slightly-agree\" name=\"Q6_likelihood\" value=\"Slightly-agree\"\u003E\n      \u003Clabel for=\"Q6_Slightly-agree\"\u003ESlightly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q6_Agree\" name=\"Q6_likelihood\" value=\"Agree\"\u003E\n      \u003Clabel for=\"Q6_Agree\"\u003EAgree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q6_Strongly-agree\" name=\"Q6_likelihood\" value=\"Strongly-agree\"\u003E\n      \u003Clabel for=\"Q6_Strongly-agree\"\u003EStrongly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n\n\u003Cdiv class = \"questions\"\u003E\n    \u003Clabel\u003E7.\tIt is important future generations live good lives.\u003C\u002Flabel\u003E\n\u003C\u002Fdiv\u003E\n  \u003Cdiv class = \"radio-container\"\u003E\n      \u003Cdiv class=\"radio-button\"\u003E\n        \u003Cinput type=\"radio\" id = \"Q7_Strongly-disagree\" name=\"Q7_likelihood\" value=\"Strongly-disagree\"\u003E\n        \u003Clabel for=\"Q7_Strongly-disagree\"\u003EStrongly Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E    \n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q7_Disagree\" name=\"Q7_likelihood\" value=\"Disagree\"\u003E\n      \u003Clabel for=\"Q7_Disagree\"\u003EDisagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n     \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q7_Slightly-disagree\" name=\"Q7_likelihood\" value=\"Slightly-disagree\"\u003E\n      \u003Clabel for=\"Q7_Slightly-disagree\"\u003ESlightly disagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q7_Neutral\" name=\"Q7_likelihood\" value=\"Neutral\"\u003E\n      \u003Clabel for=\"Q7_Neutral\"\u003ENeutral\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q7_Slightly-agree\" name=\"Q7_likelihood\" value=\"Slightly-agree\"\u003E\n      \u003Clabel for=\"Q7_Slightly-agree\"\u003ESlightly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q7_Agree\" name=\"Q7_likelihood\" value=\"Agree\"\u003E\n      \u003Clabel for=\"Q7_Agree\"\u003EAgree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q7_Strongly-agree\" name=\"Q7_likelihood\" value=\"Strongly-agree\"\u003E\n      \u003Clabel for=\"Q7_Strongly-agree\"\u003EStrongly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n\n\u003Cdiv class = \"questions\"\u003E\n    \u003Clabel\u003E8.\tHuman extinction is going to happen regardless of what we do.\u003C\u002Flabel\u003E\n\u003C\u002Fdiv\u003E\n  \u003Cdiv class = \"radio-container\"\u003E\n      \u003Cdiv class=\"radio-button\"\u003E\n        \u003Cinput type=\"radio\" id = \"Q8_Strongly-disagree\" name=\"Q8_likelihood\" value=\"Strongly-disagree\"\u003E\n        \u003Clabel for=\"Q8_Strongly-disagree\"\u003EStrongly Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E    \n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q8_Disagree\" name=\"Q8_likelihood\" value=\"Disagree\"\u003E\n      \u003Clabel for=\"Q8_Disagree\"\u003EDisagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n     \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q8_Slightly-disagree\" name=\"Q8_likelihood\" value=\"Slightly-disagree\"\u003E\n      \u003Clabel for=\"Q8_Slightly-disagree\"\u003ESlightly disagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q8_Neutral\" name=\"Q8_likelihood\" value=\"Neutral\"\u003E\n      \u003Clabel for=\"Q8_Neutral\"\u003ENeutral\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q8_Slightly-agree\" name=\"Q8_likelihood\" value=\"Slightly-agree\"\u003E\n      \u003Clabel for=\"Q8_Slightly-agree\"\u003ESlightly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q8_Agree\" name=\"Q8_likelihood\" value=\"Agree\"\u003E\n      \u003Clabel for=\"Q8_Agree\"\u003EAgree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q8_Strongly-agree\" name=\"Q8_likelihood\" value=\"Strongly-agree\"\u003E\n      \u003Clabel for=\"Q8_Strongly-agree\"\u003EStrongly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003Cdiv class = \"questions\"\u003E\n    \u003Clabel\u003E9.\tThere’s not much we can do to reduce risks of human extinction.\u003C\u002Flabel\u003E\n\u003C\u002Fdiv\u003E\n \u003Cdiv class = \"radio-container\"\u003E\n      \u003Cdiv class=\"radio-button\"\u003E\n        \u003Cinput type=\"radio\" id = \"Q9_Strongly-disagree\" name=\"Q9_likelihood\" value=\"Strongly-disagree\"\u003E\n        \u003Clabel for=\"Q9_Strongly-disagree\"\u003EStrongly Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E    \n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q9_Disagree\" name=\"Q9_likelihood\" value=\"Disagree\"\u003E\n      \u003Clabel for=\"Q9_Disagree\"\u003EDisagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n     \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q9_Slightly-disagree\" name=\"Q9_likelihood\" value=\"Slightly-disagree\"\u003E\n      \u003Clabel for=\"Q9_Slightly-disagree\"\u003ESlightly disagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q9_Neutral\" name=\"Q9_likelihood\" value=\"Neutral\"\u003E\n      \u003Clabel for=\"Q9_Neutral\"\u003ENeutral\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q9_Slightly-agree\" name=\"Q9_likelihood\" value=\"Slightly-agree\"\u003E\n      \u003Clabel for=\"Q9_Slightly-agree\"\u003ESlightly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q9_Agree\" name=\"Q9_likelihood\" value=\"Agree\"\u003E\n      \u003Clabel for=\"Q9_Agree\"\u003EAgree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q9_Strongly-agree\" name=\"Q9_likelihood\" value=\"Strongly-agree\"\u003E\n      \u003Clabel for=\"Q9_Strongly-agree\"\u003EStrongly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003Cdiv class = \"questions\"\u003E\n    \u003Clabel\u003E10.\tWith the right policies and actions, our choices today can impact the far future considerably. \u003C\u002Flabel\u003E\n\u003C\u002Fdiv\u003E\n  \u003Cdiv class = \"radio-container\"\u003E\n      \u003Cdiv class=\"radio-button\"\u003E\n        \u003Cinput type=\"radio\" id = \"Q10_Strongly-disagree\" name=\"Q10_likelihood\" value=\"Strongly-disagree\"\u003E\n        \u003Clabel for=\"Q10_Strongly-disagree\"\u003EStrongly Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E    \n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q10_Disagree\" name=\"Q10_likelihood\" value=\"Disagree\"\u003E\n      \u003Clabel for=\"Q10_Disagree\"\u003EDisagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n     \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q10_Slightly-disagree\" name=\"Q10_likelihood\" value=\"Slightly-disagree\"\u003E\n      \u003Clabel for=\"Q10_Slightly-disagree\"\u003ESlightly disagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q10_Neutral\" name=\"Q10_likelihood\" value=\"Neutral\"\u003E\n      \u003Clabel for=\"Q10_Neutral\"\u003ENeutral\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q10_Slightly-agree\" name=\"Q10_likelihood\" value=\"Slightly-agree\"\u003E\n      \u003Clabel for=\"Q10_Slightly-agree\"\u003ESlightly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q10_Agree\" name=\"Q10_likelihood\" value=\"Agree\"\u003E\n      \u003Clabel for=\"Q10_Agree\"\u003EAgree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q10_Strongly-agree\" name=\"Q10_likelihood\" value=\"Strongly-agree\"\u003E\n      \u003Clabel for=\"Q10_Strongly-agree\"\u003EStrongly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n\n\u003Cdiv class = \"questions\"\u003E\n    \u003Clabel\u003E11.\tHumankind's future will be very different from today. \u003C\u002Flabel\u003E\n\u003C\u002Fdiv\u003E\n  \u003Cdiv class = \"radio-container\"\u003E\n      \u003Cdiv class=\"radio-button\"\u003E\n        \u003Cinput type=\"radio\" id = \"Q11_Strongly-disagree\" name=\"Q11_likelihood\" value=\"Strongly-disagree\"\u003E\n        \u003Clabel for=\"Q11_Strongly-disagree\"\u003EStrongly Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E    \n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q11_Disagree\" name=\"Q11_likelihood\" value=\"Disagree\"\u003E\n      \u003Clabel for=\"Q11_Disagree\"\u003EDisagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n     \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q11_Slightly-disagree\" name=\"Q11_likelihood\" value=\"Slightly-disagree\"\u003E\n      \u003Clabel for=\"Q11_Slightly-disagree\"\u003ESlightly disagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q11_Neutral\" name=\"Q11_likelihood\" value=\"Neutral\"\u003E\n      \u003Clabel for=\"Q11_Neutral\"\u003ENeutral\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q11_Slightly-agree\" name=\"Q11_likelihood\" value=\"Slightly-agree\"\u003E\n      \u003Clabel for=\"Q11_Slightly-agree\"\u003ESlightly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q11_Agree\" name=\"Q11_likelihood\" value=\"Agree\"\u003E\n      \u003Clabel for=\"Q11_Agree\"\u003EAgree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q11_Strongly-agree\" name=\"Q11_likelihood\" value=\"Strongly-agree\"\u003E\n      \u003Clabel for=\"Q11_Strongly-agree\"\u003EStrongly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n\n\u003Cdiv class = \"questions\"\u003E\n    \u003Clabel\u003E12.\tHumankind’s future will be better than the present.\u003C\u002Flabel\u003E\n\u003C\u002Fdiv\u003E\n  \u003Cdiv class = \"radio-container\"\u003E\n      \u003Cdiv class=\"radio-button\"\u003E\n        \u003Cinput type=\"radio\" id = \"Q12_Strongly-disagree\" name=\"Q12_likelihood\" value=\"Strongly-disagree\"\u003E\n        \u003Clabel for=\"Q12_Strongly-disagree\"\u003EStrongly Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E    \n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q12_Disagree\" name=\"Q12_likelihood\" value=\"Disagree\"\u003E\n      \u003Clabel for=\"Q12_Disagree\"\u003EDisagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n     \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q12_Slightly-disagree\" name=\"Q12_likelihood\" value=\"Slightly-disagree\"\u003E\n      \u003Clabel for=\"Q12_Slightly-disagree\"\u003ESlightly disagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q12_Neutral\" name=\"Q12_likelihood\" value=\"Neutral\"\u003E\n      \u003Clabel for=\"Q12_Neutral\"\u003ENeutral\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q12_Slightly-agree\" name=\"Q12_likelihood\" value=\"Slightly-agree\"\u003E\n      \u003Clabel for=\"Q12_Slightly-agree\"\u003ESlightly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q12_Agree\" name=\"Q12_likelihood\" value=\"Agree\"\u003E\n      \u003Clabel for=\"Q12_Agree\"\u003EAgree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q12_Strongly-agree\" name=\"Q12_likelihood\" value=\"Strongly-agree\"\u003E\n      \u003Clabel for=\"Q12_Strongly-agree\"\u003EStrongly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n\n\u003Cdiv class = \"questions\"\u003E\n    \u003Clabel\u003E13.\tThe lives of those that are alive today are more important than the lives that will live in the future.\u003C\u002Flabel\u003E\n\u003C\u002Fdiv\u003E\n  \u003Cdiv class = \"radio-container\"\u003E\n      \u003Cdiv class=\"radio-button\"\u003E\n        \u003Cinput type=\"radio\" id = \"Q13_Strongly-disagree\" name=\"Q13_likelihood\" value=\"Strongly-disagree\"\u003E\n        \u003Clabel for=\"Q13_Strongly-disagree\"\u003EStrongly Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E    \n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q13_Disagree\" name=\"Q13_likelihood\" value=\"Disagree\"\u003E\n      \u003Clabel for=\"Q13_Disagree\"\u003EDisagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n     \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q13_Slightly-disagree\" name=\"Q13_likelihood\" value=\"Slightly-disagree\"\u003E\n      \u003Clabel for=\"Q13_Slightly-disagree\"\u003ESlightly disagree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q13_Neutral\" name=\"Q13_likelihood\" value=\"Neutral\"\u003E\n      \u003Clabel for=\"Q13_Neutral\"\u003ENeutral\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q13_Slightly-agree\" name=\"Q13_likelihood\" value=\"Slightly-agree\"\u003E\n      \u003Clabel for=\"Q13_Slightly-agree\"\u003ESlightly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q13_Agree\" name=\"Q13_likelihood\" value=\"Agree\"\u003E\n      \u003Clabel for=\"Q13_Agree\"\u003EAgree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q13_Strongly-agree\" name=\"Q13_likelihood\" value=\"Strongly-agree\"\u003E\n      \u003Clabel for=\"Q13_Strongly-agree\"\u003EStrongly Agree\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003Cdiv class = \"questions\"\u003E\n  \u003Clabel\u003E14. I think humnan extinction would most likley be caused by:\u003C\u002Flabel\u003E\n\u003C\u002Fdiv\u003E\n  \u003Cdiv class = \"radio-container-cause\"\u003E\n    \u003Cdiv class=\"radio-button-c\"\u003E\n    \u003Cinput type=\"radio\" id=\"Global-nuclear-war\" name=\"Q14_likelihood\" value=\"Global-nuclear-war\"\u003E\n        \u003C\u002Fdiv\u003E    \n    \u003Clabel for=\"Global-nuclear-war\"\u003EGlobal Nuclear war\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n    \u003Cdiv class=\"radio-button-c\"\u003E\n      \u003Cinput type=\"radio\" id=\"global-warming\" name=\"Q14_likelihood\" value=\"global-warming\"\u003E\n    \u003C\u002Fdiv\u003E\n      \u003Clabel for=\"global-warming\"\u003ERunaway global warming \u003C\u002Flabel\u003E\u003Cbr\u003E\n\n    \u003Cdiv class=\"radio-button-c\"\u003E\n      \u003Cinput type=\"radio\" id=\"collision\" name=\"Q14_likelihood\" value=\"collision\"\u003E\n    \u003C\u002Fdiv\u003E\n      \u003Clabel for=\"collision\"\u003EAsteroidal\u002F cometary collision with earth \u003C\u002Flabel\u003E\u003Cbr\u003E\n\n    \u003Cdiv class=\"radio-button-c\"\u003E\n      \u003Cinput type=\"radio\" id=\"tech\" name=\"Q14_likelihood\" value=\"tech\"\u003E\n     \u003C\u002Fdiv\u003E\n      \u003Clabel for=\"tech\"\u003EIntentional or accidental misuse of bio\u002F nanotechnologies\u003C\u002Flabel\u003E\u003Cbr\u003E\n\n    \u003Cdiv class=\"radio-button-c\"\u003E\n      \u003Cinput type=\"radio\" id=\"AI\" name=\"Q14_likelihood\" value=\"AI\"\u003E\n    \u003C\u002Fdiv\u003E\n      \u003Clabel for=\"AI\"\u003EArtificial intelligence \u003C\u002Flabel\u003E\u003Cbr\u003E\n\n    \u003Cdiv class=\"radio-button-c\"\u003E\n      \u003Cinput type=\"radio\" id=\"text\" name=\"Q14_likelihood\" value=\"text\"\u003E\n    \u003C\u002Fdiv\u003E\n      \u003Clabel for=\"text\"\u003EOther. \u003C\u002Flabel\u003E\u003Cbr\u003E\n\n\u003C\u002Fdiv\u003E\n\u003Cbr\u003E\n\u003Chr\u003E\n\n  \u003Cbutton type = \"submit\" id = \"Submit\"\u003ESubmit\u003C\u002Fbutton\u003E\n\n\u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E\n\n\n\u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Extinction perception",
      "tardy": true
    },
    {
      "type": "lab.html.Form",
      "content": "\u003C!DOCTYPE html\u003E\n\u003Chtml\u003E\n\u003Chead\u003E\n\u003Cstyle\u003E\nhtml{\n  width:100%;\n}\n\nh2{\n  text-align:center;\n  margin-bottom:10px;\n  color:darkblue;\n}\nbody{\n  margin-right:10px;\n}\n.questions {\n  display:flex;\n  align-items:center;\n  margin-bottom: 20px;\n}\n\n.questions label {\n  margin-right:20px;\n  min-width:100px;\n}\n.radio-container {\n    display:flex;\n    flex-wrap:wrap;\n    justify-content:space-between;\n    gap:5px;\n    align-items:center;\n    padding: 10px; \n    border: 2px solid rgb(199, 221, 228); \n    border-radius: 8px; \n    background-color: #f0f8ff;\n    margin-bottom: 30px;\n}\n\n.radio-container input{\n  margin:0;\n}\n         \n.radio-button {\n  display:flex; \n  justify-content: wrap;\n  margin-right: 20px; \n}\n       \n.radio-button label {\n    margin-left: 10px;\n    display:flex;\n    position:relative;\n}\n\n.radio-container-cause{\n    display:flex;\n    justify-content: center;\n    align-items:center;\n    margin: 5px;\n    padding: 10px; \n    border: 2px solid rgb(199, 221, 228); \n    border-radius: 8px; \n    background-color: #f0f8ff;\n}\n.radio-button-c{\n    display:flex; \n    justify-content: space-between;\n    margin-right: 10px; \n}\n\n.radio-button-text{\n    flex-direction: column;\n    align-items:flex-start;\n    justify-content: space-between;\n    margin-right: 10px;\n}\n\n.radio-button-text textarea {\n    margin-top: 5px; \n    width: 80px;\n    height: 30px;\n}\n\n\u003C\u002Fstyle\u003E\n\n\u003C\u002Fhead\u003E\n\n\n\u003Ch2\u003E Questionnaire 2.\u003C\u002Fh2\u003E\n\n\u003Cbody\u003E\n\u003Cp\u003EPlease read the questions below carefully before answering. \u003Cbr\u003E \n   The following statements does not have to be physically achievable at the moment, please consider the statements based on how \u003Cstrong\u003Elikley\u003C\u002Fstrong\u003E you would do those things. \u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EPlease choose the option that best represent how you feel. \u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EHow likley are you to...\u003C\u002Fp\u003E\n\n\u003Cmain\u003E\n  \u003Cform name = \"questionnaire\"\u003E\n  \u003Cdiv class = \"questions\"\u003E\n    \u003Clabel\u003E1.\tBet a day’s income at the horse races.\u003C\u002Flabel\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class = \"radio-container\"\u003E\n      \u003Cdiv class=\"radio-button\"\u003E\n        \u003Cinput type=\"radio\" id = \"Q1_Extremely-unlikley\" name=\"Q1_likelihood\" value=\"Extremely-unlikley\"\u003E\n        \u003Clabel for=\"Q1_Extremely-unlikley\"\u003EExtremely\u003Cbr\u003E unlikley\u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E    \n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q1_Moderately-unlikley\" name=\"Q1_likelihood\" value=\"Moderately-unlikley\"\u003E\n      \u003Clabel for=\"Q1_Moderately-unlikley\"\u003EModerately\u003Cbr\u003E  unlikley\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n     \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q1_Somewhat-Unlikely\" name=\"Q1_likelihood\" value=\"Somewhat-Unlikely\"\u003E\n      \u003Clabel for=\"Q1_Somewhat-Unlikely\"\u003ESomewhat\u003Cbr\u003E  Unlikely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q1_Not-sure\" name=\"Q1_likelihood\" value=\"Not-sure\"\u003E\n      \u003Clabel for=\"Q1_Not-sure\"\u003ENot \u003Cbr\u003E sure\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q1_Somewhat-likely\" name=\"Q1_likelihood\" value=\"Somewhat-likely\"\u003E\n      \u003Clabel for=\"Q1_Somewhat-likely\"\u003ESomewhat \u003Cbr\u003E likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q1_Moderately-likely\" name=\"Q1_likelihood\" value=\"Moderately-likely\"\u003E\n      \u003Clabel for=\"Q1_Moderately-likely\"\u003EModerately\u003Cbr\u003E  likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q1_Extremely-likely\" name=\"Q1_likelihood\" value=\"Extremely-likely\"\u003E\n      \u003Clabel for=\"Q1_Extremely-likely\"\u003EExtremely \u003Cbr\u003E likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003Cdiv class = \"questions\"\u003E\n    \u003Clabel\u003E2.\tInvest 10% of your annual income in a new business venture.\u003C\u002Flabel\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class = \"radio-container\"\u003E\n      \u003Cdiv class=\"radio-button\"\u003E\n        \u003Cinput type=\"radio\" id = \"Q2_Extremely-unlikley\" name=\"Q2_likelihood\" value=\"Extremely-unlikley\"\u003E\n        \u003Clabel for=\"Q2_Extremely-unlikley\"\u003EExtremely\u003Cbr\u003E  unlikley\u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E    \n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q2_Moderately-unlikley\" name=\"Q2_likelihood\" value=\"Moderately-unlikley\"\u003E\n      \u003Clabel for=\"Q2_Moderately-unlikley\"\u003EModerately\u003Cbr\u003E  unlikley\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n     \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q2_Somewhat-Unlikely\" name=\"Q2_likelihood\" value=\"Somewhat-Unlikely\"\u003E\n      \u003Clabel for=\"Q2_Somewhat-Unlikely\"\u003ESomewhat \u003Cbr\u003E Unlikely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q2_Not-sure\" name=\"Q2_likelihood\" value=\"Not-sure\"\u003E\n      \u003Clabel for=\"Q2_Not-sure\"\u003ENot\u003Cbr\u003E  sure\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q2_Somewhat-likely\" name=\"Q2_likelihood\" value=\"Somewhat-likely\"\u003E\n      \u003Clabel for=\"Q2_Somewhat-likely\"\u003ESomewhat\u003Cbr\u003E  likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q2_Moderately-likely\" name=\"Q2_likelihood\" value=\"Moderately-likely\"\u003E\n      \u003Clabel for=\"Q2_Moderately-likely\"\u003EModerately\u003Cbr\u003E  likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q2_Extremely-likely\" name=\"Q2_likelihood\" value=\"Extremely-likely\"\u003E\n      \u003Clabel for=\"Q2_Extremely-likely\"\u003EExtremely \u003Cbr\u003E likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003Cdiv class = \"questions\"\u003E\n    \u003Clabel\u003E3.\tTake a skydiving class.\u003C\u002Flabel\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class = \"radio-container\"\u003E\n      \u003Cdiv class=\"radio-button\"\u003E\n        \u003Cinput type=\"radio\" id = \"Q3_Extremely-unlikley\" name=\"Q3_likelihood\" value=\"Extremely-unlikley\"\u003E\n        \u003Clabel for=\"Q3_Extremely-unlikley\"\u003EExtremely \u003Cbr\u003E unlikley\u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E    \n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q3_Moderately-unlikley\" name=\"Q3_likelihood\" value=\"Moderately-unlikley\"\u003E\n      \u003Clabel for=\"Q3_Moderately-unlikley\"\u003EModerately\u003Cbr\u003E  unlikley\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n     \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q3_Somewhat-Unlikely\" name=\"Q3_likelihood\" value=\"Somewhat-Unlikely\"\u003E\n      \u003Clabel for=\"Q3_Somewhat-Unlikely\"\u003ESomewhat\u003Cbr\u003E  Unlikely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q3_Not-sure\" name=\"Q3_likelihood\" value=\"Not-sure\"\u003E\n      \u003Clabel for=\"Q3_Not-sure\"\u003ENot\u003Cbr\u003E  sure\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q3_Somewhat-likely\" name=\"Q3_likelihood\" value=\"Somewhat-likely\"\u003E\n      \u003Clabel for=\"Q3_Somewhat-likely\"\u003ESomewhat\u003Cbr\u003E  likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q3_Moderately-likely\" name=\"Q3_likelihood\" value=\"Moderately-likely\"\u003E\n      \u003Clabel for=\"Q3_Moderately-likely\"\u003EModerately \u003Cbr\u003E likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q3_Extremely-likely\" name=\"Q3_likelihood\" value=\"Extremely-likely\"\u003E\n      \u003Clabel for=\"Q3_Extremely-likely\"\u003EExtremely\u003Cbr\u003E  likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003Cdiv class = \"questions\"\u003E\n    \u003Clabel\u003E4.\tGo down a ski run that is beyond your ability.\u003C\u002Flabel\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class = \"radio-container\"\u003E\n      \u003Cdiv class=\"radio-button\"\u003E\n        \u003Cinput type=\"radio\" id = \"Q4_Extremely-unlikley\" name=\"Q4_likelihood\" value=\"Extremely-unlikley\"\u003E\n        \u003Clabel for=\"Q4_Extremely-unlikley\"\u003EExtremely \u003Cbr\u003E unlikley\u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E    \n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q4_Moderately-unlikley\" name=\"Q4_likelihood\" value=\"Moderately-unlikley\"\u003E\n      \u003Clabel for=\"Q4_Moderately-unlikley\"\u003EModerately \u003Cbr\u003E unlikley\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n     \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q4_Somewhat-Unlikely\" name=\"Q4_likelihood\" value=\"Somewhat-Unlikely\"\u003E\n      \u003Clabel for=\"Q4_Somewhat-Unlikely\"\u003ESomewhat\u003Cbr\u003E  Unlikely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q44_Not-sure\" name=\"Q4_likelihood\" value=\"Not-sure\"\u003E\n      \u003Clabel for=\"Q4_Not-sure\"\u003ENot\u003Cbr\u003E  sure\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q4_Somewhat-likely\" name=\"Q4_likelihood\" value=\"Somewhat-likely\"\u003E\n      \u003Clabel for=\"Q4_Somewhat-likely\"\u003ESomewhat \u003Cbr\u003E likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q4_Moderately-likely\" name=\"Q4_likelihood\" value=\"Moderately-likely\"\u003E\n      \u003Clabel for=\"Q4_Moderately-likely\"\u003EModerately\u003Cbr\u003E  likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q4_Extremely-likely\" name=\"Q4_likelihood\" value=\"Extremely-likely\"\u003E\n      \u003Clabel for=\"Q4_Extremely-likely\"\u003EExtremely \u003Cbr\u003E likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003Cdiv class = \"questions\"\u003E\n    \u003Clabel\u003E5.\tPass off somebody else’s work as your own.\u003C\u002Flabel\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class = \"radio-container\"\u003E\n      \u003Cdiv class=\"radio-button\"\u003E\n        \u003Cinput type=\"radio\" id = \"Q5_Extremely-unlikley\" name=\"Q5_likelihood\" value=\"Extremely-unlikley\"\u003E\n        \u003Clabel for=\"Q5_Extremely-unlikley\"\u003EExtremely\u003Cbr\u003E  unlikley\u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E    \n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q5_Moderately-unlikley\" name=\"Q5_likelihood\" value=\"Moderately-unlikley\"\u003E\n      \u003Clabel for=\"Q5_Moderately-unlikley\"\u003EModerately \u003Cbr\u003E unlikley\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n     \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q5_Somewhat-Unlikely\" name=\"Q5_likelihood\" value=\"Somewhat-Unlikely\"\u003E\n      \u003Clabel for=\"Q5_Somewhat-Unlikely\"\u003ESomewhat\u003Cbr\u003E  Unlikely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q5_Not-sure\" name=\"Q5_likelihood\" value=\"Not-sure\"\u003E\n      \u003Clabel for=\"Q5_Not-sure\"\u003ENot \u003Cbr\u003E sure\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q5_Somewhat-likely\" name=\"Q5_likelihood\" value=\"Somewhat-likely\"\u003E\n      \u003Clabel for=\"Q5_Somewhat-likely\"\u003ESomewhat\u003Cbr\u003E  likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q5_Moderately-likely\" name=\"Q5_likelihood\" value=\"Moderately-likely\"\u003E\n      \u003Clabel for=\"Q5_Moderately-likely\"\u003EModerately\u003Cbr\u003E  likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q5_Extremely-likely\" name=\"Q5_likelihood\" value=\"Extremely-likely\"\u003E\n      \u003Clabel for=\"Q5_Extremely-likely\"\u003EExtremely\u003Cbr\u003E  likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003Cdiv class = \"questions\"\u003E\n    \u003Clabel\u003E6.\tReveal a friend’s secret to someone else. \u003C\u002Flabel\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class = \"radio-container\"\u003E\n      \u003Cdiv class=\"radio-button\"\u003E\n        \u003Cinput type=\"radio\" id = \"Q6_Extremely-unlikley\" name=\"Q6_likelihood\" value=\"Extremely-unlikley\"\u003E\n        \u003Clabel for=\"Q6_Extremely-unlikley\"\u003EExtremely\u003Cbr\u003E  unlikley\u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E    \n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q6_Moderately-unlikley\" name=\"Q6_likelihood\" value=\"Moderately-unlikley\"\u003E\n      \u003Clabel for=\"Q6_Moderately-unlikley\"\u003EModerately \u003Cbr\u003E unlikley\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n     \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q6_Somewhat-Unlikely\" name=\"Q6_likelihood\" value=\"Somewhat-Unlikely\"\u003E\n      \u003Clabel for=\"Q6_Somewhat-Unlikely\"\u003ESomewhat\u003Cbr\u003E  Unlikely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q6_Not-sure\" name=\"Q6_likelihood\" value=\"Not-sure\"\u003E\n      \u003Clabel for=\"Q6_Not-sure\"\u003ENot\u003Cbr\u003E  sure\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q6_Somewhat-likely\" name=\"Q6_likelihood\" value=\"Somewhat-likely\"\u003E\n      \u003Clabel for=\"Q6_Somewhat-likely\"\u003ESomewhat\u003Cbr\u003E  likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q6_Moderately-likely\" name=\"Q6_likelihood\" value=\"Moderately-likely\"\u003E\n      \u003Clabel for=\"Q6_Moderately-likely\"\u003EModerately\u003Cbr\u003E  likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q6_Extremely-likely\" name=\"Q6_likelihood\" value=\"Extremely-likely\"\u003E\n      \u003Clabel for=\"Q6_Extremely-likely\"\u003EExtremely \u003Cbr\u003E likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003Cdiv class = \"questions\"\u003E\n    \u003Clabel\u003E7.\tDrive a car without wearing a seat belt. \u003C\u002Flabel\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class = \"radio-container\"\u003E\n      \u003Cdiv class=\"radio-button\"\u003E\n        \u003Cinput type=\"radio\" id = \"Q7_Extremely-unlikley\" name=\"Q7_likelihood\" value=\"Extremely-unlikley\"\u003E\n        \u003Clabel for=\"Q7_Extremely-unlikley\"\u003EExtremely\u003Cbr\u003E  unlikley\u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E    \n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q7_Moderately-unlikley\" name=\"Q7_likelihood\" value=\"Moderately-unlikley\"\u003E\n      \u003Clabel for=\"Q7_Moderately-unlikley\"\u003EModerately\u003Cbr\u003E  unlikley\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n     \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q7_Somewhat-Unlikely\" name=\"Q7_likelihood\" value=\"Somewhat-Unlikely\"\u003E\n      \u003Clabel for=\"Q7_Somewhat-Unlikely\"\u003ESomewhat \u003Cbr\u003E Unlikely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q7_Not-sure\" name=\"Q7_likelihood\" value=\"Not-sure\"\u003E\n      \u003Clabel for=\"Q7_Not-sure\"\u003ENot \u003Cbr\u003E sure\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q7_Somewhat-likely\" name=\"Q7_likelihood\" value=\"Somewhat-likely\"\u003E\n      \u003Clabel for=\"Q7_Somewhat-likely\"\u003ESomewhat\u003Cbr\u003E  likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q7_Moderately-likely\" name=\"Q7_likelihood\" value=\"Moderately-likely\"\u003E\n      \u003Clabel for=\"Q7_Moderately-likely\"\u003EModerately\u003Cbr\u003E  likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q7_Extremely-likely\" name=\"Q7_likelihood\" value=\"Extremely-likely\"\u003E\n      \u003Clabel for=\"Q7_Extremely-likely\"\u003EExtremely\u003Cbr\u003E  likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003Cdiv class = \"questions\"\u003E\n    \u003Clabel\u003E8.\tWalk home alone at night in an unsafe area of town.\u003C\u002Flabel\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class = \"radio-container\"\u003E\n      \u003Cdiv class=\"radio-button\"\u003E\n        \u003Cinput type=\"radio\" id = \"Q8_Extremely-unlikley\" name=\"Q8_likelihood\" value=\"Extremely-unlikley\"\u003E\n        \u003Clabel for=\"Q8_Extremely-unlikley\"\u003EExtremely\u003Cbr\u003E  unlikley\u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E    \n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q8_Moderately-unlikley\" name=\"Q8_likelihood\" value=\"Moderately-unlikley\"\u003E\n      \u003Clabel for=\"Q8_Moderately-unlikley\"\u003EModerately\u003Cbr\u003E  unlikley\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n     \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q8_Somewhat-Unlikely\" name=\"Q8_likelihood\" value=\"Somewhat-Unlikely\"\u003E\n      \u003Clabel for=\"Q8_Somewhat-Unlikely\"\u003ESomewhat\u003Cbr\u003E  Unlikely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q8_Not-sure\" name=\"Q8_likelihood\" value=\"Not-sure\"\u003E\n      \u003Clabel for=\"Q8_Not-sure\"\u003ENot\u003Cbr\u003E  sure\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q8_Somewhat-likely\" name=\"Q8_likelihood\" value=\"Somewhat-likely\"\u003E\n      \u003Clabel for=\"Q8_Somewhat-likely\"\u003ESomewhat\u003Cbr\u003E likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q8_Moderately-likely\" name=\"Q8_likelihood\" value=\"Moderately-likely\"\u003E\n      \u003Clabel for=\"Q18Moderately-likely\"\u003EModerately\u003Cbr\u003E  likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q8_Extremely-likely\" name=\"Q8_likelihood\" value=\"Extremely-likely\"\u003E\n      \u003Clabel for=\"Q8_Extremely-likely\"\u003EExtremely \u003Cbr\u003E likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003Cdiv class = \"questions\"\u003E\n    \u003Clabel\u003E9.\tStart a new career in your mid-thirties.\u003C\u002Flabel\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class = \"radio-container\"\u003E\n      \u003Cdiv class=\"radio-button\"\u003E\n        \u003Cinput type=\"radio\" id = \"Q9_Extremely-unlikley\" name=\"Q9_likelihood\" value=\"Extremely-unlikley\"\u003E\n        \u003Clabel for=\"Q9_Extremely-unlikley\"\u003EExtremely \u003Cbr\u003E unlikley\u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E    \n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q9_Moderately-unlikley\" name=\"Q9_likelihood\" value=\"Moderately-unlikley\"\u003E\n      \u003Clabel for=\"Q9_Moderately-unlikley\"\u003EModerately\u003Cbr\u003E  unlikley\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n     \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q9_Somewhat-Unlikely\" name=\"Q9_likelihood\" value=\"Somewhat-Unlikely\"\u003E\n      \u003Clabel for=\"Q9_Somewhat-Unlikely\"\u003ESomewhat\u003Cbr\u003E  Unlikely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q9_Not-sure\" name=\"Q9_likelihood\" value=\"Not-sure\"\u003E\n      \u003Clabel for=\"Q9_Not-sure\"\u003ENot\u003Cbr\u003E  sure\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q9_Somewhat-likely\" name=\"Q9_likelihood\" value=\"Somewhat-likely\"\u003E\n      \u003Clabel for=\"Q9_Somewhat-likely\"\u003ESomewhat\u003Cbr\u003E  likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q9_Moderately-likely\" name=\"Q9_likelihood\" value=\"Moderately-likely\"\u003E\n      \u003Clabel for=\"Q9_Moderately-likely\"\u003EModerately \u003Cbr\u003E likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q9_Extremely-likely\" name=\"Q9_likelihood\" value=\"Extremely-likely\"\u003E\n      \u003Clabel for=\"Q9_Extremely-likely\"\u003EExtremely\u003Cbr\u003E  likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n\n\u003Cdiv class = \"questions\"\u003E\n    \u003Clabel\u003E10.\tSpeak your mind about an unpopular issue in a meeting at work.\u003C\u002Flabel\u003E\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv class = \"radio-container\"\u003E\n      \u003Cdiv class=\"radio-button\"\u003E\n        \u003Cinput type=\"radio\" id = \"v_Extremely-unlikley\" name=\"Q10_likelihood\" value=\"Extremely-unlikley\"\u003E\n        \u003Clabel for=\"Q10_Extremely-unlikley\"\u003EExtremely\u003Cbr\u003E  unlikley\u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E    \n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q10_Moderately-unlikley\" name=\"Q10_likelihood\" value=\"Moderately-unlikley\"\u003E\n      \u003Clabel for=\"Q10_Moderately-unlikley\"\u003EModerately\u003Cbr\u003E  unlikley\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n     \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q10_Somewhat-Unlikely\" name=\"Q10_likelihood\" value=\"Somewhat-Unlikely\"\u003E\n      \u003Clabel for=\"Q10_Somewhat-Unlikely\"\u003ESomewhat\u003Cbr\u003E  Unlikely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q10_Not-sure\" name=\"Q10_likelihood\" value=\"Not-sure\"\u003E\n      \u003Clabel for=\"Q10_Not-sure\"\u003ENot\u003Cbr\u003E  sure\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q10_Somewhat-likely\" name=\"Q10_likelihood\" value=\"Somewhat-likely\"\u003E\n      \u003Clabel for=\"Q10_Somewhat-likely\"\u003ESomewhat\u003Cbr\u003E  likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"radio-button\"\u003E\n      \u003Cinput type=\"radio\" id = \"Q10_Moderately-likely\" name=\"Q10_likelihood\" value=\"Moderately-likely\"\u003E\n      \u003Clabel for=\"Q10_Moderately-likely\"\u003EModerately\u003Cbr\u003E  likely\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n\n\u003C\u002Fdiv\u003E\n\n  \u003Cbutton type = \"submit\" id = \"Submit\"\u003ESubmit\u003C\u002Fbutton\u003E\n\n\u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E\n\n\n\u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "RT assessment ",
      "tardy": true
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cstyle\u003E\n#div1{\nwidth: 100%;\ntext-align:  left;\n}\n\u003C\u002Fstyle\u003E\n\n\u003Cheader style=\"color:darkblue\"\u003E\n\u003Ch2\u003E Thank you for participating! \u003C\u002Fh2\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain class=\"content-horizontal-center\"\u003E\n  \u003Cdiv id = \"div1\"\u003E\n\n      \u003Cp\u003E Thank you for participating in this study. \u003Cbr\u003E The goal of this study was to understand how people reason about rare events with extreme consequences (the ‘extinction’ event). In particular, how participants' inclination to choose the risky option depends on (1) the number of trials, (2) and the probability of the extinction event. \u003C\u002Fp\u003E\n\n\u003Cp\u003E You can find more information about global catastrophic risks \u003Ca href=\"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FGlobal_catastrophic_risk\"\u003Ehere\u003C\u002Fa\u003E and more information about risk perception \u003Ca href=\"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FRisk_perception\"\u003Ehere.\u003C\u002Fa\u003E  \u003C\u002Fp\u003E\n    \n \u003Cp\u003E\u003Ccenter\u003E Please exit the study by clicking 'Finish' \u003C\u002Fcenter\u003E\u003C\u002Fp\u003E\n\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- \u002F\u002F Behavior -\u003E target -\u003E button#b --\u003E\n\u003Cfooter\u003E\n  \u003Cbutton id =\"b\"\u003EFinish\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Finish →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "End debrief"
    }
  ]
})

// Let's go!
jatos.onLoad(() => study.run())