STEP 1: CREATE A DB CALLED therma_solutions

STEP 2: RUN CMDS

CREATE TABLE "person" (
	"id" serial NOT NULL,
	"username" varchar NOT NULL,
	"password" varchar NOT NULL,
	"access_level" integer,
	"type_of_cancer" integer,
	"active" BOOLEAN DEFAULT 't',
	"first_name" varchar,
	"last_name" varchar,
	"title" varchar,
	CONSTRAINT person_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "types_of_cancer" (
	"id" serial NOT NULL,
	"name" varchar NOT NULL,
	"abbreviation" varchar NOT NULL,
	CONSTRAINT types_of_cancer_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "patients" (
	"id" serial NOT NULL,
	"toc_id" integer,
	"user_id" integer,
	"patient_no" varchar,
	"dob" DATE,
	"gender" varchar,
	"referal_date" DATE,
	"hipec_date" DATE,
	"diagnosis_date" DATE,
	"sensor" BOOLEAN,
	"hospital_telephone" varchar,
	"refering_doctor" varchar,
	"notes" varchar,
	"current_status" integer,
	"current_date" DATE,
	"current_time" TIME,
	"last_contact_date" DATE,
	"date_of_death" DATE,
	"alive_on_date" DATE,
	CONSTRAINT patients_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "primary_tumor" (
	"id" serial NOT NULL,
	"patient_id" integer NOT NULL,
	"date_primary_diagnosis" DATE,
	"primary_location" integer,
	"tumor_type" varchar,
	"t" varchar,
	"n" varchar,
	"m" varchar,
	"m_location" integer,
	"differentiation" integer,
	"mucinous" BOOLEAN,
	"date_prime_surgery" DATE,
	"intervention_type" integer,
	"setting" integer,
	"reason_acute" integer,
	"prime_tumor_surgery" integer,
	"adj_chemotherapy" BOOLEAN,
	"type" varchar,
	"biological" integer,
	"notes" varchar,
	"chemo_type_1" varchar,
	"chemo_type_2" varchar,
	"adj_chemotherapy_type" integer,
	CONSTRAINT primary_tumor_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "intake" (
	"id" serial NOT NULL,
	"patient_id" integer NOT NULL,
	"weight_kg" integer,
	"length_m" integer,
	"bmi_auto" integer,
	"crp" varchar,
	"ca125" varchar,
	"leucoctye" varchar,
	"smoking" integer,
	"diabetes" integer,
	"insulin_dependent" integer,
	"cardiovascular" integer,
	"hypertension" integer,
	"stoma_pre_hipec" varchar,
	"stoma_type" varchar,
	"neo_adjuvant_chemo" BOOLEAN,
	"neo_adjuvant_chemo_type" integer,
	"biological" integer,
	"notes" varchar,
	"diagnostic_scopy" BOOLEAN,
	"date_scopy" DATE,
	"scopy_conclusion" integer,
	"scopy_notes" varchar,
	"syn_metachronous" integer,
	"date_diagnosis_pc" DATE,
	"assessment_of_pss" varchar,
	"asa_score" integer,
	"date_time_stamp" TIMESTAMP,
	"date" DATE,
	"pss_score" integer,
	CONSTRAINT intake_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "psdss" (
	"id" serial NOT NULL,
	"patient_id" integer NOT NULL,
	"clinical" integer,
	"pci" integer,
	"hostology" integer,
	"synchronos_liver_treatment" BOOLEAN,
	"timing" integer,
	"date_treatment" DATE,
	"treatment_type" integer,
	"notes" varchar,
	"total" integer,
	CONSTRAINT psdss_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "intervention" (
	"id" serial NOT NULL,
	"patient_id" integer NOT NULL,
	"Surgeion_1" varchar,
	"Surgeion_2" varchar,
	"Surgeion_3" varchar,
	"nrhipec" varchar,
	"hipec_type" integer,
	"reason_oc" integer,
	"pci_score" varchar,
	"anastomosis" BOOLEAN,
	"anastomosis_number" integer,
	"revision_stoma" BOOLEAN,
	"stoma_post_hipec" BOOLEAN,
	"stoma_post_hipec_type" integer,
	"bloodloss" varchar,
	"time" TIME,
	"hipec_regiment" integer,
	"duration" varchar,
	"volume" varchar,
	"concentration" varchar,
	"r_score" integer,
	"pci_0" integer,
	"pci_1" integer,
	"pci_2" integer,
	"pci_3" integer,
	"pci_4" integer,
	"pci_5" integer,
	"pci_6" integer,
	"pci_7" integer,
	"pci_8" integer,
	"pci_9" integer,
	"pci_10" integer,
	"pci_11" integer,
	"pci_12" integer,
	CONSTRAINT intervention_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "postop" (
	"id" serial NOT NULL,
	"patient_id" integer NOT NULL,
	"icu_stays" integer,
	"mcu_stays" integer,
	"hospital_stays" integer,
	"notes" varchar,
	"serious_adverse_event" BOOLEAN,
	"score" varchar,
	"reoperation" BOOLEAN,
	"hospital_mortality" BOOLEAN,
	"status_at_discharge" integer,
	"discharge_notes" varchar,
	CONSTRAINT postop_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "adverse_events" (
	"id" serial NOT NULL,
	"postop_id" integer NOT NULL,
	"name" varchar,
	"clavian_score" integer,
	"sae_grade" integer,
	CONSTRAINT events_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "follow_up" (
	"id" serial NOT NULL,
	"patient_id" integer,
	"adjuvant_chemo" integer,
	"adjuvant_chemo_type" integer,
	"biological" integer,
	"evidence_of_disease" BOOLEAN,
	"last_contact" DATE,
	"date_of_death" DATE,
	"notes" text,
	CONSTRAINT follow_up_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "follow_up_history" (
	"id" serial NOT NULL,
	"follow_up_id" integer NOT NULL,
	"date" DATE,
	"evidence_of_disease" BOOLEAN DEFAULT 'f',
  "follow_up_notes" varchar,
	"cea" varchar,
	"rec_modality" integer,
	"syst_location" integer,
	"treatment" integer,
	"date_treatment" DATE,
	"status" integer,
	"treatment_notes" varchar,
	"location" integer,
	CONSTRAINT follow_up_history_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "other_info" (
	"id" serial NOT NULL,
	"patient_id" integer NOT NULL,
	"live_metasis_treatment" varchar,
	"timing" varchar,
	"date_treatment" DATE,
	"treatment_type" varchar,
	"notes" varchar,
	CONSTRAINT other_info_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "pathology_op_notes" (
	"id" serial NOT NULL,
	"patient_id" integer NOT NULL,
	"pathology_report" varchar,
	CONSTRAINT pathology_op_notes_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "operative_op_notes" (
    "id" SERIAL PRIMARY KEY,
    "patient_id" integer NOT NULL REFERENCES patients(id),
    "operative_notes" varchar
);



CREATE TABLE "other_data" (
	"id" serial NOT NULL,
	"patient_id" integer NOT NULL,
	"synchronous_liver_metastases " BOOLEAN,
	"timing_of_treatment" integer,
	"date_of_treatment" DATE,
	"treatment_type" integer,
	"notes" varchar,
	CONSTRAINT other_data_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "resections" (
	"id" serial NOT NULL,
	"intervention_id" integer NOT NULL,
	"ovaries" BOOLEAN DEFAULT 'f',
	"uterus" BOOLEAN DEFAULT 'f',
	"omentum" BOOLEAN DEFAULT 'f',
	"rectum" BOOLEAN DEFAULT 'f',
	"sigmoid" BOOLEAN DEFAULT 'f',
	"left_colon" BOOLEAN DEFAULT 'f',
	"transverse_colon" BOOLEAN DEFAULT 'f',
	"right_colon" BOOLEAN DEFAULT 'f',
	"ileocaecal" BOOLEAN DEFAULT 'f',
	"appendix" BOOLEAN DEFAULT 'f',
	"duodenum" BOOLEAN DEFAULT 'f',
	"jejunum" BOOLEAN DEFAULT 'f',
	"ileum" BOOLEAN DEFAULT 'f',
	"gallbladder" BOOLEAN DEFAULT 'f',
	"stomach" BOOLEAN DEFAULT 'f',
	"spleen" BOOLEAN DEFAULT 'f',
	"diagphram_l" BOOLEAN DEFAULT 'f',
	"diagphram_r" BOOLEAN DEFAULT 'f',
	"pancreas" BOOLEAN DEFAULT 'f',
	"bladder" BOOLEAN DEFAULT 'f',
	"urether" BOOLEAN DEFAULT 'f',
	"lymphnodes" BOOLEAN DEFAULT 'f',
	"left_peritoneum" BOOLEAN DEFAULT 'f',
	"right_peritoneum" BOOLEAN DEFAULT 'f',
	"peritoneum" BOOLEAN DEFAULT 'f',
	"pelvis" BOOLEAN DEFAULT 'f',
	CONSTRAINT resections_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "person" ADD CONSTRAINT "person_fk0" FOREIGN KEY ("type_of_cancer") REFERENCES "types_of_cancer"("id");


ALTER TABLE "patients" ADD CONSTRAINT "patients_fk0" FOREIGN KEY ("toc_id") REFERENCES "types_of_cancer"("id");
ALTER TABLE "patients" ADD CONSTRAINT "patients_fk1" FOREIGN KEY ("user_id") REFERENCES "person"("id");

ALTER TABLE "primary_tumor" ADD CONSTRAINT "primary_tumor_fk0" FOREIGN KEY ("patient_id") REFERENCES "patients"("id");

ALTER TABLE "intake" ADD CONSTRAINT "intake_fk0" FOREIGN KEY ("patient_id") REFERENCES "patients"("id");

ALTER TABLE "psdss" ADD CONSTRAINT "psdss_fk0" FOREIGN KEY ("patient_id") REFERENCES "patients"("id");

ALTER TABLE "intervention" ADD CONSTRAINT "intervention_fk0" FOREIGN KEY ("patient_id") REFERENCES "patients"("id");

ALTER TABLE "postop" ADD CONSTRAINT "postop_fk0" FOREIGN KEY ("patient_id") REFERENCES "patients"("id");

ALTER TABLE "follow_up" ADD CONSTRAINT "follow_up_fk0" FOREIGN KEY ("patient_id") REFERENCES "patients"("id");

ALTER TABLE "follow_up_history" ADD CONSTRAINT "follow_up_history_fk0" FOREIGN KEY ("follow_up_id") REFERENCES "follow_up"("id");

ALTER TABLE "events" ADD CONSTRAINT "events_fk0" FOREIGN KEY ("postop_id") REFERENCES "postop"("id");

ALTER TABLE "other_info" ADD CONSTRAINT "other_info_fk0" FOREIGN KEY ("patient_id") REFERENCES "patients"("id");

ALTER TABLE "pathology_op_notes" ADD CONSTRAINT "pathology_op_notes_fk0" FOREIGN KEY ("patient_id") REFERENCES "patients"("id");

ALTER TABLE "other_data" ADD CONSTRAINT "other_data_fk0" FOREIGN KEY ("patient_id") REFERENCES "patients"("id");

ALTER TABLE "resections" ADD CONSTRAINT "resections_fk0" FOREIGN KEY ("intervention_id") REFERENCES "intervention"("id");
