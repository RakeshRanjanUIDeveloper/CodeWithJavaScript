
import ProcessAssessment from '../components/Assessments/ProcessAssessment';
import DataAssessment from '../components/Assessments/DataAssessment';
import TalentAssessment from '../components/Assessments/TalentAssessment';
import ArchitectureAssessment from '../components/Assessments/ArchitectureAssessment';
import SecurityAssessment from '../components/Assessments/SecurityAssessment';
import DevelopmentAssessment from '../components/Assessments/DevelopmentAssessment';    
import IntegrationAssessment from '../components/Assessments/IntegrationAssessment';

export const AssessmentsComponentData = [
  {
    id: 1,
    title: "Process Assessment",
    description: "Fit to Standard, Harmonization of processes, Maximize S/4 Hana usage/ value",
    assessmentComponent: ProcessAssessment
  },
  {
    id: 2,
    title: "Data Assessment",
    description: "Data quality profiling, cleansing, construction and validation",
     assessmentComponent: DataAssessment
  },
  {
    id: 3,
    title: "Talent & Change Assessment",
    description: "Change journeys by process, new ways of working and learning needs",
     assessmentComponent: TalentAssessment
  },
  {
    id: 4,
    title: "Architecture Assessment",
    description: "Cloud readiness/RISE, Resiliency with E2E Obeservability, Devops readiness",
    assessmentComponent: ArchitectureAssessment
  },
  {
    id: 5,
    title: "Security Assessment",
    description: "Communication, Code, Audit, logging, Data Security and Privacy",
    assessmentComponent: SecurityAssessment
  },
  {
    id: 6,
    title: "Development Assessment",
    description: "Ensure clean core development, reduce technical debt. Fiori first approach",
    assessmentComponent: DevelopmentAssessment
  },
  {
    id: 7,
    title: "Integration Assessment",
    description: "Modern Integration platform and Services, API and event driven Compatibility",
    assessmentComponent: IntegrationAssessment
  }
];