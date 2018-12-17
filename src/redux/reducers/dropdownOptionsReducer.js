const optionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_DROPDOWN_OPTIONS':
      return dropDownOptions;
    default:
      return state;
  }
};
const dropDownOptions ={
currentStatusOptions: [
  {id: 1, status: 'Death of Disease'},
  {id: 2, status: 'Alive with Disease'},
  {id: 3, status: 'No Evidence of Disease'},
  {id: 4, status: 'Treatment Related Death'}
],

primaryLocationOptions: [
  {id: 1, status: 'Appendix'},
  {id: 2, status: 'Right Colon'},
  {id: 3, status: 'Transverse'},
  {id: 4, status: 'Left Colon'},
  {id: 5, status: 'Sigmoid'},
  {id: 6, status: 'Rectum'},
  {id: 7, status: 'NS'},
  {id: 8, status: 'Unknown'},
],

mLocationOptions: [
  {id: 1, status: 'No'},
  {id: 2, status: 'PC'},
  {id: 3, status: 'Liver'},
  {id: 4, status: 'PC + Liver'},
  {id: 5, status: 'Lung'},
  {id: 6, status: 'PC + Lung'},
  {id: 7, status: 'Ovarian'},
  {id: 8, status: 'PC + Ovarian'},
  {id: 9, status: 'Other'},
],

 differentiationOptions: [
  {id: 1, status: 'Good'},
  {id: 2, status: 'Moderate'},
  {id: 3, status: 'Poor'},
  {id: 4, status: 'Signet Cell'},
  {id: 5, status: 'Unknown'},
],

interventionTypeOptions: [
  {id: 1, status: 'Open'},
  {id: 2, status: 'Lap Scope'},
  {id: 3, status: 'HIPEC at Primary'},
  {id: 4, status: 'Unknown'},
],

settingOptions: [
  {id: 1, status: 'Elective'},
  {id: 2, status: 'Acute'},
  {id: 3, status: 'At HIPEC'},
  {id: 4, status: 'Unknown'},
],

reasonAcuteOptions: [
  {id: 1, status: 'Not Acute'},
  {id: 2, status: 'Obstruction'},
  {id: 3, status: 'Perforation'},
  {id: 4, status: 'Blow Out'},
  {id: 5, status: 'Other'},
],

primaryTumorSurgeryOptions: [
  {id: 1, status: 'Tumor in Sito'},
  {id: 2, status: 'Resected'},
  {id: 3, status: 'Not Applicable'}
],

adjChemoTypeOptions: [
  {id: 1, status: 'Oxaliplatin'},
  {id: 2, status: 'Capecitabine'},
  {id: 3, status: 'Capox'},
  {id: 4, status: 'Folfox'},
  {id: 5, status: 'Folfiri'},
  {id: 6, status: '5FU'},
  {id: 7, status: 'Irinotecan'},
  {id: 8, status: 'Other'}
],

biologicalOptions: [
  {id: 1, status: 'Bevacizumab'},
  {id: 2, status: 'Cetuximab'},
  {id: 3, status: 'Panitimumab'}
],

scopyConclusionOptions: [
  {id: 1, status: 'Amenable'},
  {id: 2, status: 'Benefit of Doubt'},
  {id: 3, status: 'No Go'}
],

synchMetaOptions: [
  {id: 1, status: 'Synchronous'},
  {id: 2, status: 'Metachronous'}
],

asaScoreOptions: [
  {id: 1, status: 'Normal Healthy'},
  {id: 2, status: 'Mild Systemic Disease'},
  {id: 3, status: 'Severe Systemic Disease'},
  {id: 4, status: 'Severe Systemic Disease + Constant Threat To Life'},
],

timingTreamentOptions: [
  {id: 1, status: 'Before Diagnosis PC'},
  {id: 2, status: 'Before HIPEC Procedure'},
  {id: 3, status: 'In HIPEC Procedure'},
  {id: 4, status: 'After HIPEC'},
],

treamentTypeOptions: [
  {id: 1, status: 'RFA'},
  {id: 2, status: 'Surgery'},
  {id: 3, status: 'Systemic Chemotherapy'},
  {id: 4, status: 'Other'},
],

hipecTypeOptions: [
  {id: 1, status: 'Open CRS + HIPEC'},
  {id: 2, status: 'Scopic CRS + HIPEC'},
  {id: 3, status: 'CRS Only'},
  {id: 4, status: 'Open-Close'},
  {id: 5, status: 'HIPEC Only'},
  {id: 6, status: 'Open CRS + Closed HIPEC'},
],

reasonOpenCloseOption: [
  {id: 1, status: 'sPCI/PCI Too High'},
  {id: 2, status: 'Small Bowel Involvement'},
  {id: 3, status: 'Irresectable Primary Tumor'},
  {id: 4, status: 'Liver Metastasis'},
  {id: 5, status: 'No PC'},
],

stomaTypeOptions: [
  {id: 1, status: 'Double Barrel Ileostomy'},
  {id: 2, status: 'Ileostomy'},
  {id: 3, status: 'Double Barrel Colonostomy'},
  {id: 4, status: 'Colonostomy'}
],

hipecRegimentOptions: [
  {id: 1, status: 'MMC'},
  {id: 2, status: 'Oxaliplaten/5FU/LV'},
  {id: 3, status: 'Cisplatin'},
  {id: 4, status: 'Other'},
],

rScoreOptions: [
  {id: 1, status: 'R1 - No Macroscopic Tumor'},
  {id: 2, status: 'R2A - Residual Tumor < 2.5mm'},
  {id: 3, status: 'R2B - Residual Tumor 2.5mm - 2.5cm'},
],

recModalityOptions: [
  {id: 1, status: 'Radiology'},
  {id: 2, status: 'Surgery'},
  {id: 3, status: 'Autopsy'},
  {id: 4, status: 'Other'},
],

recLocationOptions: [
  {id: 1, status: 'Local / PC'},
  {id: 2, status: 'Systemic'},
  {id: 3, status: 'Local / Systemic'}
],

systemicLocationOptions: [
  {id: 1, status: 'Liver'},
  {id: 2, status: 'Lung'},
  {id: 3, status: 'Liver / Lung'},
  {id: 4, status: 'Other'},
],

recTreatmentOptions: [
  {id: 1, status: 'Curative Surgery'},
  {id: 2, status: 'Palliative Surgery'},
  {id: 3, status: 'Systemic Chemotherapy'},
  {id: 4, status: 'reHIPEC'},
  {id: 5, status: 'Palliative / No Treatment'},
  {id: 6, status: 'Radiotherapy'},
  {id: 7, status: 'Combination Treatment'},
],
}

// user will be on the redux state at:
// state.user
export default optionsReducer;
