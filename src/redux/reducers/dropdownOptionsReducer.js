const optionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_STATUS_OPTIONS':
      return currentStatusOptions;
    case 'GET_PRIMARY_LOC_OPTIONS':
      return primaryLocationOptions;
    case 'GET_M_LOCATION_OPTIONS':
      return mLocationOptions;
    case 'GET_DIFFERENTIATION_OPTIONS':
      return differentiationOptions;
    case 'GET_INTERVENTION_TYPE_OPTIONS':
      return interventionTypeOptions;
    case 'GET_SETTING_OPTIONS':
      return settingOptions;
    case 'GET_REASON_ACUTE_OPTIONS':
      return reasonAcuteOptions;
    case 'GET_TUMOR_SURGERY_OPTIONS':
      return primaryTumorSurgeryOptions;
    case 'GET_ADJ_CHEMO_TYPE_OPTIONS':
      return adjChemoTypeOptions;
    case 'GET_BIOLOGICAL_OPTIONS':
      return biologicalOptions;
    case 'GET_SCOPY_CONCLUSION_OPTIONS':
      return scopyConclusionOptions;
    case 'GET_SYNCH_META_OPTIONS':
      return synchMetaOptions;
    case 'GET_ASA_SCORE_OPTIONS':
      return asaScoreOptions;
    case 'GET_TIMING_OPTIONS':
      return timingTreamentOptions;
    case 'GET_TREATMENT_TYPE_OPTIONS':
      return treamentTypeOptions;
    case 'GET_HIPEC_TYPE_OPTIONS':
      return hipecTypeOptions;
    case 'GET_OPEN_CLOSE_OPTIONS':
      return reasonOpenCloseOptions;
    case 'GET_STOMA_TYPE_OPTIONS':
      return stomaTypeOptions;
    case 'GET_HIPEC_REGIMENT_OPTIONS':
      return hipecRegimentOptions;
    case 'GET_R_SCORE_OPTIONS':
      return rScoreOptions;
    case 'GET_REC_MODALITY_OPTIONS':
      return recModalityOptions;
    case 'GET_REC_LOCATION_OPTIONS':
      return recLocationOptions;
    case 'GET_SYS_LOCATION_OPTIONS':
      return systemicLocationOptions;
    case 'GET_REC_TREATMENT_OPTIONS':
      return recTreatmentOptions;
    default:
      return state;
  }
};

const currentStatusOptions = [
  {id: 1, status: 'Death of Disease'},
  {id: 2, status: 'Alive with Disease'},
  {id: 3, status: 'No Evidence of Disease'},
  {id: 4, status: 'Treatment Related Death'}
];

const primaryLocationOptions = [
  {id: 1, status: 'Appendix'},
  {id: 2, status: 'Right Colon'},
  {id: 3, status: 'Transverse'},
  {id: 4, status: 'Left Colon'},
  {id: 5, status: 'Sigmoid'},
  {id: 6, status: 'Rectum'},
  {id: 7, status: 'NS'},
  {id: 8, status: 'Unknown'},
];

const mLocationOptions = [
  {id: 1, status: 'No'},
  {id: 2, status: 'PC'},
  {id: 3, status: 'Liver'},
  {id: 4, status: 'PC + Liver'},
  {id: 5, status: 'Lung'},
  {id: 6, status: 'PC + Lung'},
  {id: 7, status: 'Ovarian'},
  {id: 8, status: 'PC + Ovarian'},
  {id: 9, status: 'Other'},
];

const differentiationOptions = [
  {id: 1, status: 'Good'},
  {id: 2, status: 'Moderate'},
  {id: 3, status: 'Poor'},
  {id: 4, status: 'Signet Cell'},
  {id: 5, status: 'Unknown'},
]

const interventionTypeOptions = [
  {id: 1, status: 'Open'},
  {id: 2, status: 'Lap Scope'},
  {id: 3, status: 'HIPEC at Primary'},
  {id: 4, status: 'Unknown'},
]

const settingOptions = [
  {id: 1, status: 'Elective'},
  {id: 2, status: 'Acute'},
  {id: 3, status: 'At HIPEC'},
  {id: 4, status: 'Unknown'},
]

const reasonAcuteOptions = [
  {id: 1, status: 'Not Acute'},
  {id: 2, status: 'Obstruction'},
  {id: 3, status: 'Perforation'},
  {id: 4, status: 'Blow Out'},
  {id: 5, status: 'Other'},
]

const primaryTumorSurgeryOptions = [
  {id: 1, status: 'Tumor in Sito'},
  {id: 2, status: 'Resected'},
  {id: 3, status: 'Not Applicable'}
]

const adjChemoTypeOptions = [
  {id: 1, status: 'Oxaliplatin'},
  {id: 2, status: 'Capecitabine'},
  {id: 3, status: 'Capox'},
  {id: 4, status: 'Folfox'},
  {id: 5, status: 'Folfiri'},
  {id: 6, status: '5FU'},
  {id: 7, status: 'Irinotecan'},
  {id: 8, status: 'Other'}
]

const biologicalOptions = [
  {id: 1, status: 'Bevacizumab'},
  {id: 2, status: 'Cetuximab'},
  {id: 3, status: 'Panitimumab'}
]

const scopyConclusionOptions = [
  {id: 1, status: 'Amenable'},
  {id: 2, status: 'Benefit of Doubt'},
  {id: 3, status: 'No Go'}
]

const synchMetaOptions = [
  {id: 1, status: 'Synchronous'},
  {id: 2, status: 'Metachronous'}
]

const asaScoreOptions = [
  {id: 1, status: 'Normal Healthy'},
  {id: 2, status: 'Mild Systemic Disease'},
  {id: 3, status: 'Severe Systemic Disease'},
  {id: 4, status: 'Severe Systemic Disease + Constant Threat To Life'},
]

const timingTreamentOptions = [
  {id: 1, status: 'Before Diagnosis PC'},
  {id: 2, status: 'Before HIPEC Procedure'},
  {id: 3, status: 'In HIPEC Procedure'},
  {id: 4, status: 'After HIPEC'},
]

const treamentTypeOptions = [
  {id: 1, status: 'RFA'},
  {id: 2, status: 'Surgery'},
  {id: 3, status: 'Systemic Chemotherapy'},
  {id: 4, status: 'Other'},
]

const hipecTypeOptions = [
  {id: 1, status: 'Open CRS + HIPEC'},
  {id: 2, status: 'Scopic CRS + HIPEC'},
  {id: 3, status: 'CRS Only'},
  {id: 4, status: 'Open-Close'},
  {id: 5, status: 'HIPEC Only'},
  {id: 6, status: 'Open CRS + Closed HIPEC'},
]

const reasonOpenCloseOptions = [
  {id: 1, status: 'sPCI/PCI Too High'},
  {id: 2, status: 'Small Bowel Involvement'},
  {id: 3, status: 'Irresectable Primary Tumor'},
  {id: 4, status: 'Liver Metastasis'},
  {id: 5, status: 'No PC'},
]

const stomaTypeOptions = [
  {id: 1, status: 'Double Barrel Ileostomy'},
  {id: 2, status: 'Ileostomy'},
  {id: 3, status: 'Double Barrel Colonostomy'},
  {id: 4, status: 'Colonostomy'}
]

const hipecRegimentOptions = [
  {id: 1, status: 'MMC'},
  {id: 2, status: 'Oxaliplaten/5FU/LV'},
  {id: 3, status: 'Cisplatin'},
  {id: 4, status: 'Other'},
]

const rScoreOptions = [
  {id: 1, status: 'R1 - No Macroscopic Tumor'},
  {id: 2, status: 'R2A - Residual Tumor < 2.5mm'},
  {id: 3, status: 'R2B - Residual Tumor 2.5mm - 2.5cm'},
]

const recModalityOptions = [
  {id: 1, status: 'Radiology'},
  {id: 2, status: 'Surgery'},
  {id: 3, status: 'Autopsy'},
  {id: 4, status: 'Other'},
]

const recLocationOptions = [
  {id: 1, status: 'Local / PC'},
  {id: 2, status: 'Systemic'},
  {id: 3, status: 'Local / Systemic'}
]

const systemicLocationOptions = [
  {id: 1, status: 'Liver'},
  {id: 2, status: 'Lung'},
  {id: 3, status: 'Liver / Lung'},
  {id: 4, status: 'Other'},
]

const recTreatmentOptions = [
  {id: 1, status: 'Curative Surgery'},
  {id: 2, status: 'Palliative Surgery'},
  {id: 3, status: 'Systemic Chemotherapy'},
  {id: 4, status: 'reHIPEC'},
  {id: 5, status: 'Palliative / No Treatment'},
  {id: 6, status: 'Radiotherapy'},
  {id: 7, status: 'Combination Treatment'},
]

// user will be on the redux state at:
// state.user
export default optionsReducer;
