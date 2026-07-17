import S01SystemBasics from './s01-system-basics.mdx';
import S02UnixLinuxServer from './s02-unix-linux-server.mdx';
import S03WindowsServer from './s03-windows-server.mdx';
import S04NetworkBasics from './s04-network-basics.mdx';
import S05SecurityProtocols from './s05-security-protocols.mdx';
import S06RouterSecurity from './s06-router-security.mdx';
import S07ApplicationBasics from './s07-application-basics.mdx';
import S08WebAppVulns from './s08-web-app-vulns.mdx';
import S09WebServerVulns from './s09-web-server-vulns.mdx';
import S10EmailSecurity from './s10-email-security.mdx';
import S11DatabaseSecurity from './s11-database-security.mdx';
import S12CloudSecurity from './s12-cloud-security.mdx';
import S13SecurityDevices from './s13-security-devices.mdx';
import S14AnalysisTools from './s14-analysis-tools.mdx';
import S15IncidentScenarios from './s15-incident-scenarios.mdx';
import S16MajorVulns from './s16-major-vulns.mdx';
import S17AccessControlRisk from './s17-access-control-risk.mdx';
import S18SecurityLaws from './s18-security-laws.mdx';

export interface SummarySection {
  id: string;
  no: number;
  title: string;
  subject: string;
  component: React.ComponentType;
}

export const summarySections: SummarySection[] = [
  { id: 's01', no: 1, title: '시스템 기본학습', subject: '1과목 시스템', component: S01SystemBasics },
  { id: 's02', no: 2, title: 'UNIX/Linux 서버 취약점', subject: '1과목 시스템', component: S02UnixLinuxServer },
  { id: 's03', no: 3, title: '윈도우 서버 취약점', subject: '1과목 시스템', component: S03WindowsServer },
  { id: 's04', no: 4, title: '네트워크 기본 학습', subject: '2과목 네트워크', component: S04NetworkBasics },
  { id: 's05', no: 5, title: '네트워크 보안 프로토콜', subject: '2과목 네트워크', component: S05SecurityProtocols },
  { id: 's06', no: 6, title: '라우터 보안', subject: '2과목 네트워크', component: S06RouterSecurity },
  { id: 's07', no: 7, title: '애플리케이션 기본 학습', subject: '2과목 네트워크', component: S07ApplicationBasics },
  { id: 's08', no: 8, title: '웹 애플리케이션 취약점', subject: '2과목 네트워크', component: S08WebAppVulns },
  { id: 's09', no: 9, title: '웹 서버 취약점', subject: '2과목 네트워크', component: S09WebServerVulns },
  { id: 's10', no: 10, title: '이메일 보안', subject: '3과목 애플리케이션', component: S10EmailSecurity },
  { id: 's11', no: 11, title: '데이터베이스 보안', subject: '3과목 애플리케이션', component: S11DatabaseSecurity },
  { id: 's12', no: 12, title: '클라우드 컴퓨팅 보안', subject: '3과목 애플리케이션', component: S12CloudSecurity },
  { id: 's13', no: 13, title: '보안장비 운영', subject: '4과목 침해사고 분석 및 대응', component: S13SecurityDevices },
  { id: 's14', no: 14, title: '시스템 접근 도구', subject: '4과목 침해사고 분석 및 대응', component: S14AnalysisTools },
  { id: 's15', no: 15, title: '침해사고 유형별 시나리오', subject: '4과목 침해사고 분석 및 대응', component: S15IncidentScenarios },
  { id: 's16', no: 16, title: '주요 취약점', subject: '4과목 침해사고 분석 및 대응', component: S16MajorVulns },
  { id: 's17', no: 17, title: '접근통제와 위험관리', subject: '5과목 정보보안 일반/관리', component: S17AccessControlRisk },
  { id: 's18', no: 18, title: '정보보안 법규', subject: '5과목 정보보안 일반/관리', component: S18SecurityLaws },
];

export const summarySubjects = [...new Set(summarySections.map((s) => s.subject))];
