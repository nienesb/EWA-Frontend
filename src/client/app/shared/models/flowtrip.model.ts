export class FlowTrip {
    public id: string;
    public patients: Array<Patient> = new Array<Patient>();
    public incident: Incident = new Incident();
    public financial: Array<Financial> = new Array<Financial>();
    public gms: Gms = new Gms();
}

class Patient {
    public patientInfo: PatientInfo = new PatientInfo();
    public situation: Situation = new Situation();
    public primarySurvey: PrimarySurvey = new PrimarySurvey();
    public secondarySurvey: SecondarySurvey = new SecondarySurvey();
    public measurements: Array<Measurement> = new Array<Measurement>();
    public workingDiagnosis: WorkingDiagnosis = new WorkingDiagnosis();
    public medication: Array<Medication> = new Array<Medication>();
    public infusion: Array<Infusion> = new Array<Infusion>();
    public announcement: Announcement = new Announcement();
}

class Incident {
    public pickupLocation: Location = new Location();
    public deliveryLocation: Location = new Location();
    public deliveryHospital: NVP = new NVP();
    public pickupHospital: NVP = new NVP();
    public foreignTrip: boolean;
    public zipcodeDeparture: string;
    public referrer: string;
    public urgencyAmbulance: string;
    public nurse: string;
    public ach: string;
    public region: string;
    public transportation: string;
    public reasonForTypeOfTransportation: string;
    public transportationType: string;
    public tripStatus: boolean;
}

class PatientInfo {
    public copiedFromGMS: boolean;
    public name: string;
    public initials: string;
    public prefix: string;
    public gender: string;
    public dateOfBirth: DateEpoch = new DateEpoch;
    public age: number;
    public email: string;
    public address: Location = new Location();
    public telephoneNumber: string;
    public bsn: string;
    public bsnSource: string;
    public wid: string;
    public widNumber: string;
    public identificationDate: DateEpoch = new DateEpoch;
    public generalPractitioner: string;
    public insuranceCompany: NVP = new NVP();
    public insuranceNumber: string;
    public specialDebtor: NVP = new NVP();
    public creditcardNumber: string;
    public creditcardCvc: string;
    public micuTrip: boolean;
}

class Situation {
    public incidentType: string;
    public generalPractitionerPresent: boolean;
    public generalPractitionerName: string;
    public generalPractitionerAlreadyLeft: boolean;
    public generalPractitionerTransferredDocuments: boolean;
    public impactSpeed: number;
    public fallingHeight: number;
    public driverProtection: boolean;
    public passengerProtection: boolean;
    public mechanism: Array<string> = [];
    public assistanceOnSite: Array<string> = [];
    public driverProtectionType: Array<string> = [];
    public passengerProtectionType: Array<string> = [];
    public patient: string;
    public contra: string;
}

class PrimarySurvey {
    public airway: Airway = new Airway();
    public breathing: Breathing = new Breathing();
    public circulation: Circulation = new Circulation();
    public disability: Disability = new Disability();
    public exposure: Exposure = new Exposure();
}

class Airway {
    public airway: string;
    public airwayCricothyrotomy: boolean;
    public airwayCricothyrotomyThrough: string;
    public airwayEndotrachealThrough: string;
    public airwayEndotrachealTubeNumber: string;
    public airwayMayoNumber: string;
    public airwayNasalMayoNumber: string;
    public airwayObstructionByBloodVomitSlime: boolean;
    public airwayObstructionByCorpusAlienum: boolean;
    public airwayObstructionByPosition: boolean;
    public airwayObstructionByTrachealConstipation: boolean;
    public airwayObstructionBySwellingInflammation: boolean;
    public airwayOtherActions: Array<string> = [];
}

class Breathing {
    public breathing: string;
    public breathingSoundAbsentLeft: boolean;
    public breathingSoundAbsentRight: boolean;
    public breathingSoundReducedLeft: boolean;
    public breathingSoundReducedRight: boolean;
    public breathingRespiration: Array<string> = [];
    public breathingRespirationDeviceAmvLitersPerMinute: string;
    public breathingRespirationDeviceFiO2: string;
    public breathingRespirationDeviceFrequencyPerMinute: string;
    public breathingRespirationDevicePEEPcmPerH2O: string;
    public breathingBoussignac: boolean;
    public breathingCpapMask: boolean;
    public breathingCrepitationsLeft: boolean;
    public breathingCrepitationsRight: boolean;
    public breathingDrainTensionPneumothorax: boolean;
    public breathingDrainTensionPneumothoraxThrough: string;
    public breathingHeadgearLiterPerMinute: number;
    public breathingNonRebreathingMask: boolean;
    public breathingOtherResearch: Array<string> = [];
    public breathingPainfulBreatingLeft: boolean;
    public breathingPainfulBreathingRight: boolean;
    public breathingResp: number;
    public breathingRhonchiLeft: boolean;
    public breathingRhonchiRight: boolean;
    public breathingSat: number;
    public breathingVagLeft: boolean;
    public breathingVagRight: boolean;
}

class Circulation {
    public circulation: string;
    public circulationSkinPale: string;
    public circulationSkinColdDampTranspiring: string;
    public circulationCapillaryRefillExtended: string;
    public circulationCardioversionCount: string;
    public circulationDefibrillationCount: string;
    public circulationHeartFrequency: number;
    public circulationIONeedleThrough: string;
    public circulationIONeedlePosition: string;
    public circulationOtherActions: Array<string> = [];
    public circulationRhythmType: Array<string> = [];
    public circulationRhythmTypeExplanation: string;
    public circulationExternalBloodloss: string;
    public circulationSYS: number;
    public circulationDIA: number;
    public circulationTranscutaneousPacingFrequency: number;
    public circulationTranscutaneousPacingmA: number;
}

class Disability {
    public disability: string;
    public disabilityArmsPalsy: string;
    public disabilityDurationUnconscious: number;
    public disabilityEyesContractureTo: string;
    public disabilityFacePalsy: string;
    public disabilityGlucose: string;
    public disabilityNystagmus: boolean;
    public disabilityComments: string;
    public disabilityPupils: string;
    public disabilityPupilLeft: Array<string> = [];
    public disabilityPupilRight: Array<string> = [];
    public disabilityNeurology: Array<string> = [];
    public disabilitySpeechAphasia: string;
    public disabilityTimeUnknown: boolean;
    public disabilityNoDeviation: boolean;
    public disabilityStartTime: string;
    public disabilityResearchOther: Array<string> = [];
}

class Exposure {
    public exposureHyperthermia: boolean;
    public exposureHypothermia: boolean;
    public exposureTemperature: string;
    public exposureFreeText: string;
}

class SecondarySurvey {
    public AMPLE: AMPLE = new AMPLE();
    public head: Head = new Head();
    public neckCervicalSpine: NeckCervicalSpine = new NeckCervicalSpine();
    public thorax: Thorax = new Thorax();
    public abdomen: Abdomen = new Abdomen();
    public extremities: Extremities = new Extremities();
    public skinSecretion: SkinSecretion = new SkinSecretion();
    public back: Back = new Back();
    public remainingOperations: RemainingOperations = new RemainingOperations();
}

class AMPLE {
    public allergy: string;
    public allergyDescription: string;
    public medication: string;
    public medicationDescription: string;
    public past: string;
    public pastDescription: string;
    public lastMeal: string;
    public lastMealTime: string;
    public eventText: string;
    public eventFreeText: string;
    public eventInfectionRisk: string;
}

class Head {
    public headNoParticularities: boolean;
    public headSkullMiddle: Array<string> = [];
    public headSkullLeft: Array<string> = [];
    public headSkullRight: Array<string> = [];
    public headEyesLeft: Array<string> = [];
    public headEyesRight: Array<string> = [];
    public headNoseMiddle: Array<string> = [];
    public headJawLeft: Array<string> = [];
    public headJawRight: Array<string> = [];
    public headMouthMiddle: Array<string> = [];
    public headEarsLeft: Array<string> = [];
    public headEarsRight: Array<string> = [];
    public headFaceLeft: Array<string> = [];
    public headFaceRight: Array<string> = [];
    public headRemaining: string;
}

class NeckCervicalSpine {
    public neckCervicalSpineNoParticularities: boolean;
    public neckLeft: Array<string> = [];
    public neckMiddle: Array<string> = [];
    public neckRight: Array<string> = [];
    public cervicalSpineMiddle: Array<string> = [];
    public cervicalSpineLeft: Array<string> = [];
    public cervicalSpineRight: Array<string> = [];
    public neckCervicalSpineRemaining: string;
}

class Thorax {
    public thoraxNoParticularities: boolean;
    public thoraxUpperMiddle: Array<string> = [];
    public thoraxUpperLeft: Array<string> = [];
    public thoraxUpperRight: Array<string> = [];
    public thoraxLowerMiddle: Array<string> = [];
    public thoraxLowerLeft: Array<string> = [];
    public thoraxLowerRight: Array<string> = [];
    public thoraxLowerRemaining: string;
}

class Abdomen {
    public abdomenNoParticularities: boolean;
    public abdomenUpperMiddle: Array<string> = [];
    public abdomenUpperLeft: Array<string> = [];
    public abdomenUpperRight: Array<string> = [];
    public abdomenLowerMiddle: Array<string> = [];
    public abdomenLowerLeft: Array<string> = [];
    public abdomenLowerRight: Array<string> = [];
    public abdomenRemaining: string;
}

class Extremities {
    public extremitiesUpperNoParticularities: boolean;
    public extremitiesShoulderLeft: Array<string> = [];
    public extremitiesShoulderRight: Array<string> = [];
    public extremitiesUpperArmLeft: Array<string> = [];
    public extremitiesUpperArmRight: Array<string> = [];
    public extremitiesElbowLeft: Array<string> = [];
    public extremitiesElbowRight: Array<string> = [];
    public extremitiesLowerArmLeft: Array<string> = [];
    public extremitiesLowerArmRight: Array<string> = [];
    public extremitiesWristLeft: Array<string> = [];
    public extremitiesWristRight: Array<string> = [];
    public extremitiesHandLeft: Array<string> = [];
    public extremitiesHandRight: Array<string> = [];
    public extremitiesUpperRemaining: string;
    public extremitiesLowerNoParticularities: boolean;
    public extremitiesPelvisLeft: Array<string> = [];
    public extremitiesPelvisRight: Array<string> = [];
    public extremitiesHipLeft: Array<string> = [];
    public extremitiesHipRight: Array<string> = [];
    public extremitiesUpperLegLeft: Array<string> = [];
    public extremitiesUpperLegRight: Array<string> = [];
    public extremitiesKneeLeft: Array<string> = [];
    public extremitiesKneeRight: Array<string> = [];
    public extremitiesLowerLegLeft: Array<string> = [];
    public extremitiesLowerLegRight: Array<string> = [];
    public extremitiesAnkleLeft: Array<string> = [];
    public extremitiesAnkleRight: Array<string> = [];
    public extremitiesFootLeft: Array<string> = [];
    public extremitiesFootRight: Array<string> = [];
    public extremitiesLowerRemaining: string;
}

class SkinSecretion {
    public skinSecretionNoParticularities: boolean;
    public skinPale: boolean;
    public skinRed: boolean;
    public skinColdDampTranspiring: boolean;
    public skinIcterus: boolean;
    public skinCyanosis: boolean;
    public skinRemaining: string;
    public secretionVomitBlood: boolean;
    public secretionVomitFecal: boolean;
    public secretionVomitBile: boolean;
    public secretionVomitStomachContents: boolean;
    public secretionHematuria: boolean;
    public secretionIncontinentFaeces: boolean;
    public secretionIncontinentUrine: boolean;
    public secretionMelaena: boolean;
    public secretionRectalBloodloss: boolean;
    public secretionSputum: boolean;
    public secretionRemaining: string;
}

class Back {
    public backNoParticularities: boolean;
    public backThoracicMiddle: Array<string> = [];
    public backThoracicLeft: Array<string> = [];
    public backThoracicRight: Array<string> = [];
    public backLumbarMiddle: Array<string> = [];
    public backLumbarLeft: Array<string> = [];
    public backLumbarRight: Array<string> = [];
    public backSacralMiddle: Array<string> = [];
    public backSacralLeft: Array<string> = [];
    public backSacralRight: Array<string> = [];
    public backRemaining: string;
}

class RemainingOperations {
    public remainingOperationsRemaining: Array<string> = [];
    public remainingOperationsTraumatology: Array<string> = [];
    public remainingOperationsTransport: Array<string> = [];
    public patientPosition: string;
}

class Measurement {
    public timestamp: string;
    public SAT: number;
    public RESP: number;
    public etCO2: number;
    public SYS: number;
    public DIA: number;
    public POLS: number;
    public glucose: string;
    public painScore: number;
    public temperature: string;
    public ageCategory: number;
    public eye: string;
    public motor: string;
    public verbal: string;
    public GCS: number;
    public weight: number;
    public length: number;
    public PTS: number;
    public RTS: number;
    public PTSAirway: string;
    public PTSConsciousness: string;
    public PTSOpenWound: string;
    public PTSBoneLesion: string;
    public PTSSYSAlter: string;
    public rhythmType: Array<string> = [];
    public pupils: string;
    public pupilLeft: Array<string> = [];
    public pupilRight: Array<string> = [];
    public apgarBreathing: string;
    public apgarOrPTS: string;
    public apgarStimulus: string;
    public apgarScore: number;
    public apgarMuscleActivity: string;
    public apgarAppearance: string;
}

class WorkingDiagnosis {
    public deceasedDateTime: string;
    public deceased: boolean;
    public specialism: string;
    public intoxication: Array<string> = [];
    public injuryCodeCardiology: Array<string> = [];
    public injuryCodeSurgery: Array<string> = [];
    public injuryCodeTraumatologySurgery: Array<string> = [];
    public injuryCodeGynaecology: Array<string> = [];
    public injuryCodeInternalMedicine: Array<string> = [];
    public injuryCodeNeurology: Array<string> = [];
    public injuryCodePediatrics: Array<string> = [];
    public injuryCodePsychiatry: Array<string> = [];
    public injuryCodePulmonology: Array<string> = [];
    public injuryCodeRadiology: Array<string> = [];
    public injuryCodeRadiotherapy: Array<string> = [];
    public injuryCodeUrology: Array<string> = [];
    public injuryCodeResuscitation: Array<string> = [];
    public injuryCodeObstetrics: Array<string> = [];
    public explanation: string;
}

class Medication {
    public code: string;
    public name: string;
    public amount: string;
    public unit: string;
    public administration: string;
    public lastAdministered: string;
    public extra: boolean;
}

class Infusion {
    public code: string;
    public name: string;
    public amount: string;
    public unit: string;
    public extra: boolean;
}

class Announcement {
    public typeOfShelter: string;
    public minimumResponseTime: number;
    public passedTimeOfArrival: string;
    public particularities: string;
    public expectation: string;
    public announcementType: string;
    public nonTraumaAcuteAbdomen: boolean;
    public nonTraumaVentilator: boolean;
    public nonTraumaCramped: boolean;
    public nonTraumaUnconciousness: boolean;
    public nonTraumaCollapse: boolean;
    public nonTraumaHeadache: boolean;
    public nonTraumaHypoHyperthermia: boolean;
    public nonTraumaInfusion: boolean;
    public nonTraumaInsult: boolean;
    public nonTraumaIntoxication: boolean;
    public nonTraumaIntubation: boolean;
    public nonTraumaFeverInfection: boolean;
    public nonTraumaMedication: boolean;
    public nonTraumaObstetricAffection: boolean;
    public nonTraumaChestPain: boolean;
    public nonTraumaBackSidesPain: boolean;
    public nonTraumaPsychicDisorder: boolean;
    public nonTraumaResuscitation: boolean;
    public nonTraumaShockBleeding: boolean;
    public traumaVentilator: boolean;
    public traumaEntrapment: boolean;
    public traumaFire: boolean;
    public traumaChemical: boolean;
    public traumaElectrical: boolean;
    public traumaHighEnergyYes: boolean;
    public traumaInfusion: boolean;
    public traumaInjuryExtremities: boolean;
    public traumaInjuryHead: boolean;
    public traumaInjuryTorso: boolean;
    public traumaIntubation: boolean;
    public traumaMedication: boolean;
    public traumaAccidentRemaining: boolean;
    public traumaExplosion: boolean;
    public traumaResuscitation: boolean;
    public traumaShot: boolean;
    public traumaStab: boolean;
    public traumaFallFromHeight: boolean;
    public traumaDrowning: boolean;
    public traumaPatientCar: boolean;
    public traumaPatientCycArray: boolean;
    public traumaPatientMotorcycle: boolean;
    public traumaPatientOther: boolean;
    public traumaPatientScooter: boolean;
    public traumaPatientPedestrian: boolean;
    public treatmentExtraInformation: string;
}

class Location {
    public highway: string;
    public street: string;
    public houseNr: string;
    public houseNrAddition: string;
    public houseNrDesignation: string;
    public zipcode: string;
    public city: string;
    public countrycode: string;
}

class Financial {
    public invoiceNr: string;
    public debtorStatus: DebtorStatus;
    public date: DateEpoch = new DateEpoch();
    public dueDate: DateEpoch = new DateEpoch();
    public billingTarget: BillingTargets;
    public billingTargetAddress: Location = new Location();
    public hospitalOrganisation: string;
    public price: number;
    public kmPrice: number;
    public urgencyPrice: number;
    public history: Array<Financial> = new Array<Financial>();
}

enum DebtorStatus {
    Open,
    ClosedAsNonBillable,
    ClosedAsBillable,
    ExportDone,
    RejectedByVecozo,
    AcceptedByVecozo,
    Reopen,
    ErrorOnExport
}

enum BillingTargets {
    InsuranceCompany,
    PrivateDebtor,
    SpecialDebtor,
    HospitalOrganisation,
    Alternative
}

class NVP {
    public name: string;
    public value: string;
}

class DateEpoch {
    public Date: Date;
    public DateOnly: string;
    public Epoch: number;
}

class Gms {
	public date: DateEpoch = new DateEpoch();
	public time: DateEpoch = new DateEpoch();
	public version: Version = new Version();
	public tripData: TripData = new TripData();
}

class Version {
	public mainVersion: number;
	public subVersion: number;
}

class TripData {
	public trip: Trip = new Trip();
	public tripDetails: TripDetails = new TripDetails();
	public emergencyCallDetails: Array<EmergencyCallDetails> = new Array<EmergencyCallDetails>();
	public patientDetails: Array<PatientRecord> = new Array<PatientRecord>();

}

class Trip {
	public tripNumber: number;
	public navaraRegionNumber: number;
	public incidentNumber: string;
	public urgency: string;
	public closeCode: string;
	public pickUpLocation: GmsLocation = new GmsLocation();
	public xCoordinatePickUpLocation: string;
	public yCoordinatePickUpLocation: string;
	public fromAmbulanceRegion: string;
	public fromWCCCode: string;
	public deliveryLocation: GmsLocation = new GmsLocation();
	public xCoordinateDeliveryLocation: string;
	public yCoordinateDeliveryLocation: string;
	public toAmbulanceRegion: string;
	public toWCCCode: string;
	public ambulanceServiceName: string;
	public reasonForDelay: string;
	public departureZipCode: string;
	public departureCoordinateX: string;
	public departureCoodrinateY: string;
	public driverCode: string;
	public driverName: string;
	public driverEmployeeNumber: string;
	public nurseCode: string;
	public nurseName: string;
	public nurseEmployeeNumber: string;
	public nurseCode2: string;
	public nurseName2: string;
	public nurseEmployeeNumber2: string;
	public dispatcherNumber: string;
	public reportingTime: DateEpoch = new DateEpoch();
}

class GmsLocation {
	public address: GmsAddress = new GmsAddress();
	public knownIntersection: KnownIntersection = new KnownIntersection();
	public unknownIntersection: UnknownIntersection = new UnknownIntersection();
	public objectType: ObjectType = new ObjectType();
}

class GmsAddress {
	public highway: string;
	public street: string;
	public houseNr: string;
	public houseNumberAdditional: string;
	public houseNrDesignation: string;
	public zipcode: string;
	public city: string;
	public countrycode: string;
	public municipality: string;
	public municipalityCode: string;
}

class KnownIntersection {
	public name: string;
	public city: string;
	public municipality: string;
	public municipalityCode: string;
}

class UnknownIntersection {
	public streetname1: string;
	public streetname2: string;
	public city: string;
	public municipality: string;
	public municipalityCode: string;
}

class ObjectType {
	public name: string;
	public funtion: string;
	public street: string;
	public houseNr: string;
	public addition: string;
	public designation: string;
	public city: string;
	public municipality: string;
	public municipalityCode: string;
	public zipCode: string;
}

class TripDetails {
	public ambulanceNumber: string;
	public discipline: string;
	public ambulanceServiceRegionCode: string;
	public dispatchTime: DateEpoch = new DateEpoch();
	public timeAmbulanceIsAvailableAgain: DateEpoch = new DateEpoch();
	public departureStation: string;
	public statusTimes: StatusTimes = new StatusTimes();
}

class StatusTimes {
	public departureTimeToIncident: Array<StatusTime> = new Array<StatusTime>();
	public arrivalTimeByIncident: Array<StatusTime> = new Array<StatusTime>();
	public departureTimeWithPatient: Array<StatusTime> = new Array<StatusTime>();
	public arrivalTimeAtHospital: Array<StatusTime> = new Array<StatusTime>();
	public timeAmbulanceIsAvailebleAgain: Array<StatusTime> = new Array<StatusTime>();
	public endOfTrip: Array<StatusTime> = new Array<StatusTime>();
	public default: Array<StatusTime> = new Array<StatusTime>();

}

class StatusTime {
	public created: DateEpoch = new DateEpoch();
	public changed: DateEpoch = new DateEpoch();
	public manualOrAutomatic: boolean;
	public reasonInternStatus: string;
	public valid: boolean;
}

class EmergencyCallDetails {
	public notificationNumber: number;
	public incidentNumber: number;
	public sourceMessage: string;
	public alertDateTime: DateEpoch = new DateEpoch();
	public terminationCode: string;
	public dispatcherPersonnelNumber: string;
	public nameOfAlerter: string;
	public notificationLocation: GmsLocation = new GmsLocation();
	public notifierPhoneNumber: string;
	public anonimousNotifier: string;
	public notificationLine: string;
	public notificationClassificationCode: string;
	public notificationClassificationDescription: string;
}

class PatientRecord {
	public transportDateTime: DateEpoch = new DateEpoch();
	public transportDistance: string;
	public referringPhysician: string;
	public specialism: string;
	public disease: string;
	public incidentAnnotation: string;
	public timeCode: string;
	public name: string;
	public gender: string;
	public dateOfBirth: DateEpoch = new DateEpoch();
	public bsn: number;
	public givenVictimNumber: string;
	public address: GmsAddress = new GmsAddress();
	public ambulanceTreatment: string;
	public hospitalTreatment: string;
	public art19TypeOfIncident: string;
	public art19Specialism: string;
	public art19TypeOfDestination: string;
	public art19TraumaScore: string;
	public threatments: Array<Threatments> = new Array<Threatments>();
	public injuries: Array<Injuries> = new Array<Injuries>();
}

class Threatments {
	public threatment: string;
}

class Injuries {
	public partOfBody: string;
	public typeOfInjury: string;
}
