import type { PracticalSubject } from "@/types";

export interface Term {
  abbreviation: string;
  fullName: string;
  korean: string;
  description: string;
  subject: PracticalSubject;
}

export const allTerms: Term[] = [
  // ===== 1. 시스템 보안 (system-security) =====
  {
    abbreviation: "chmod",
    fullName: "Change Mode",
    korean: "파일 권한 변경 명령어",
    description:
      "파일이나 디렉터리의 접근 권한(읽기/쓰기/실행)을 변경하는 리눅스 명령어. 숫자(755) 또는 기호(u+x) 방식으로 설정한다.",
    subject: "system-security",
  },
  {
    abbreviation: "chown",
    fullName: "Change Owner",
    korean: "소유자 변경 명령어",
    description:
      "파일이나 디렉터리의 소유자(owner)와 소유 그룹(group)을 변경하는 리눅스 명령어. 'chown user:group file' 형식으로 사용한다.",
    subject: "system-security",
  },
  {
    abbreviation: "umask",
    fullName: "User File Creation Mask",
    korean: "기본 권한 마스크",
    description:
      "새로 생성되는 파일이나 디렉터리의 기본 권한을 제한하는 값. 파일은 666에서, 디렉터리는 777에서 umask 값을 빼서 기본 권한이 결정된다.",
    subject: "system-security",
  },
  {
    abbreviation: "SetUID",
    fullName: "Set User ID",
    korean: "SetUID 비트",
    description:
      "실행 파일에 설정하면 실행 시 파일 소유자의 권한으로 동작한다. 권한값 4000이며, passwd 명령어가 대표적 예시이다.",
    subject: "system-security",
  },
  {
    abbreviation: "SetGID",
    fullName: "Set Group ID",
    korean: "SetGID 비트",
    description:
      "실행 파일에 설정하면 실행 시 파일 소유 그룹의 권한으로 동작한다. 권한값 2000이며, 디렉터리에 설정하면 하위 파일이 해당 그룹을 상속한다.",
    subject: "system-security",
  },
  {
    abbreviation: "Sticky Bit",
    fullName: "Sticky Bit",
    korean: "스티키 비트",
    description:
      "디렉터리에 설정하면 해당 디렉터리 내 파일을 소유자만 삭제할 수 있다. 권한값 1000이며, /tmp 디렉터리가 대표적 예시이다.",
    subject: "system-security",
  },
  {
    abbreviation: "crontab",
    fullName: "Cron Table",
    korean: "크론 테이블",
    description:
      "주기적으로 반복 실행할 작업을 예약하는 리눅스 스케줄러. '분 시 일 월 요일 명령어' 형식이며, crontab -e로 편집, -l로 목록을 확인한다.",
    subject: "system-security",
  },
  {
    abbreviation: "iptables",
    fullName: "IP Tables",
    korean: "리눅스 방화벽",
    description:
      "리눅스 커널의 넷필터(Netfilter) 기반 패킷 필터링 도구. INPUT, OUTPUT, FORWARD 체인으로 트래픽을 제어하며, ACCEPT/DROP/REJECT 정책을 설정한다.",
    subject: "system-security",
  },
  {
    abbreviation: "tcpdump",
    fullName: "TCP Dump",
    korean: "패킷 캡처 도구",
    description:
      "네트워크 인터페이스를 통과하는 패킷을 캡처하여 분석하는 CLI 도구. '-i' 옵션으로 인터페이스, '-w'로 파일 저장, 'port' 등 필터를 지정한다.",
    subject: "system-security",
  },
  {
    abbreviation: "PAM",
    fullName: "Pluggable Authentication Modules",
    korean: "장착형 인증 모듈",
    description:
      "리눅스에서 인증 방식을 모듈화하여 관리하는 프레임워크. /etc/pam.d/ 디렉터리에 서비스별 설정 파일이 존재하며, auth/account/password/session 4가지 타입이 있다.",
    subject: "system-security",
  },
  {
    abbreviation: "xinetd",
    fullName: "Extended Internet Services Daemon",
    korean: "확장 인터넷 슈퍼데몬",
    description:
      "요청이 있을 때만 해당 서비스를 실행하는 데몬 관리 프로그램. /etc/xinetd.d/ 디렉터리에 서비스별 설정이 있으며, 접근 제어(only_from, no_access) 기능을 제공한다.",
    subject: "system-security",
  },
  {
    abbreviation: "wtmp",
    fullName: "wtmp log",
    korean: "로그인/로그아웃 기록",
    description:
      "/var/log/wtmp 파일에 사용자의 로그인·로그아웃 기록이 저장된다. 'last' 명령어로 조회하며, 바이너리 형식이다.",
    subject: "system-security",
  },
  {
    abbreviation: "utmp",
    fullName: "utmp log",
    korean: "현재 로그인 사용자 기록",
    description:
      "/var/run/utmp 파일에 현재 접속 중인 사용자 정보가 저장된다. 'who', 'w', 'finger' 명령어로 조회할 수 있다.",
    subject: "system-security",
  },
  {
    abbreviation: "btmp",
    fullName: "btmp log",
    korean: "로그인 실패 기록",
    description:
      "/var/log/btmp 파일에 로그인 실패 기록이 저장된다. 'lastb' 명령어로 조회하며, 무차별 대입 공격 탐지에 활용한다.",
    subject: "system-security",
  },
  {
    abbreviation: "lastlog",
    fullName: "Last Login Log",
    korean: "마지막 로그인 기록",
    description:
      "/var/log/lastlog 파일에 각 사용자의 마지막 로그인 시간, 접속 IP 등이 기록된다. 'lastlog' 명령어로 조회한다.",
    subject: "system-security",
  },
  {
    abbreviation: "syslog",
    fullName: "System Log",
    korean: "시스템 로그",
    description:
      "시스템 전반의 로그를 중앙 관리하는 데몬. facility(kern, mail 등)와 severity(emerg~debug) 조합으로 로그를 분류하며, /etc/rsyslog.conf에서 설정한다.",
    subject: "system-security",
  },
  {
    abbreviation: "passwd",
    fullName: "Password File",
    korean: "패스워드 파일/명령어",
    description:
      "/etc/passwd 파일은 사용자 계정 정보(UID, GID, 홈디렉터리, 쉘)를 저장한다. /etc/shadow 파일에 실제 암호화된 패스워드가 저장되며, passwd 명령어로 비밀번호를 변경한다.",
    subject: "system-security",
  },
  {
    abbreviation: "Registry",
    fullName: "Windows Registry",
    korean: "윈도우 레지스트리",
    description:
      "윈도우 OS의 시스템 설정 정보를 저장하는 계층형 데이터베이스. HKLM, HKCU, HKCR, HKU, HKCC 5개 루트 키로 구성되며, regedit으로 편집한다.",
    subject: "system-security",
  },
  {
    abbreviation: "GPO",
    fullName: "Group Policy Object",
    korean: "그룹 정책",
    description:
      "윈도우 도메인 환경에서 사용자와 컴퓨터에 대한 보안 정책을 중앙에서 관리하는 기능. 암호 정책, 계정 잠금 정책, 감사 정책 등을 설정할 수 있다.",
    subject: "system-security",
  },
  {
    abbreviation: "Event Viewer",
    fullName: "Windows Event Viewer",
    korean: "이벤트 뷰어",
    description:
      "윈도우 시스템의 로그를 확인하는 도구. 응용 프로그램, 보안, 시스템 로그로 구분되며, 보안 로그에서 로그인 성공/실패 등의 감사 기록을 확인한다.",
    subject: "system-security",
  },

  // ===== 2. 네트워크 보안 (network-security) =====
  {
    abbreviation: "TCP",
    fullName: "Transmission Control Protocol",
    korean: "전송 제어 프로토콜",
    description:
      "연결 지향형(Connection-oriented) 프로토콜로 3-Way Handshake(SYN→SYN/ACK→ACK)로 연결을 설정하고, 신뢰성 있는 데이터 전송을 보장한다.",
    subject: "network-security",
  },
  {
    abbreviation: "UDP",
    fullName: "User Datagram Protocol",
    korean: "사용자 데이터그램 프로토콜",
    description:
      "비연결형(Connectionless) 프로토콜로 신뢰성보다 속도를 우선시한다. DNS(53), SNMP(161), TFTP(69) 등에서 사용된다.",
    subject: "network-security",
  },
  {
    abbreviation: "ICMP",
    fullName: "Internet Control Message Protocol",
    korean: "인터넷 제어 메시지 프로토콜",
    description:
      "IP 통신의 오류 보고 및 진단 기능을 수행하는 프로토콜. ping(Echo Request/Reply), traceroute에 사용되며, Type과 Code 필드로 메시지를 구분한다.",
    subject: "network-security",
  },
  {
    abbreviation: "ARP",
    fullName: "Address Resolution Protocol",
    korean: "주소 결정 프로토콜",
    description:
      "IP 주소를 MAC 주소로 변환하는 프로토콜. ARP Request는 브로드캐스트, ARP Reply는 유니캐스트로 동작하며, ARP 테이블에 매핑 정보를 캐싱한다.",
    subject: "network-security",
  },
  {
    abbreviation: "DNS",
    fullName: "Domain Name System",
    korean: "도메인 네임 시스템",
    description:
      "도메인 이름을 IP 주소로 변환하는 분산 데이터베이스 시스템. UDP 53번 포트를 사용하며, A, AAAA, MX, CNAME, NS, PTR 등의 레코드 타입이 있다.",
    subject: "network-security",
  },
  {
    abbreviation: "SNMP",
    fullName: "Simple Network Management Protocol",
    korean: "단순 네트워크 관리 프로토콜",
    description:
      "네트워크 장비를 원격에서 모니터링·관리하는 프로토콜. Manager-Agent 구조이며, GET/SET/TRAP 메시지를 사용한다. Community String이 인증에 사용된다.",
    subject: "network-security",
  },
  {
    abbreviation: "DDoS",
    fullName: "Distributed Denial of Service",
    korean: "분산 서비스 거부 공격",
    description:
      "다수의 좀비 PC(봇넷)를 이용하여 대상 시스템에 대량의 트래픽을 발생시켜 서비스를 마비시키는 공격. C&C 서버를 통해 공격을 지시한다.",
    subject: "network-security",
  },
  {
    abbreviation: "SYN Flood",
    fullName: "SYN Flooding Attack",
    korean: "SYN 플러딩 공격",
    description:
      "TCP 3-Way Handshake의 취약점을 이용하여 대량의 SYN 패킷을 보내 백로그 큐를 가득 채워 서비스를 마비시키는 공격. SYN Cookie로 대응한다.",
    subject: "network-security",
  },
  {
    abbreviation: "Smurf Attack",
    fullName: "Smurf Attack",
    korean: "스머프 공격",
    description:
      "출발지 IP를 피해자 IP로 위조한 ICMP Echo Request를 브로드캐스트 주소로 전송하여, 다수의 응답이 피해자에게 집중되도록 하는 DDoS 공격이다.",
    subject: "network-security",
  },
  {
    abbreviation: "Land Attack",
    fullName: "Land Attack",
    korean: "랜드 공격",
    description:
      "출발지 IP와 목적지 IP를 동일하게 위조하여 패킷을 전송함으로써 시스템이 자기 자신과 통신을 시도하며 무한 루프에 빠지게 하는 공격이다.",
    subject: "network-security",
  },
  {
    abbreviation: "Teardrop",
    fullName: "Teardrop Attack",
    korean: "티어드롭 공격",
    description:
      "IP 패킷의 Fragment Offset 값을 조작하여 수신 측에서 패킷 재조립 시 오류를 발생시켜 시스템을 마비시키는 공격이다.",
    subject: "network-security",
  },
  {
    abbreviation: "IDS",
    fullName: "Intrusion Detection System",
    korean: "침입 탐지 시스템",
    description:
      "네트워크나 시스템에서 비인가 접근이나 악의적 활동을 탐지하여 관리자에게 알리는 보안 시스템. 탐지만 하며 차단은 하지 않는다.",
    subject: "network-security",
  },
  {
    abbreviation: "IPS",
    fullName: "Intrusion Prevention System",
    korean: "침입 방지 시스템",
    description:
      "IDS의 탐지 기능에 실시간 차단 기능을 추가한 보안 시스템. 인라인(Inline) 모드로 동작하여 악성 트래픽을 즉시 차단한다.",
    subject: "network-security",
  },
  {
    abbreviation: "NIDS",
    fullName: "Network-based Intrusion Detection System",
    korean: "네트워크 기반 침입 탐지 시스템",
    description:
      "네트워크 세그먼트에 설치하여 통과하는 패킷을 분석해 침입을 탐지하는 시스템. 프로미스큐어스(Promiscuous) 모드로 동작하며, Snort가 대표적이다.",
    subject: "network-security",
  },
  {
    abbreviation: "HIDS",
    fullName: "Host-based Intrusion Detection System",
    korean: "호스트 기반 침입 탐지 시스템",
    description:
      "개별 호스트에 설치하여 시스템 로그, 파일 무결성, 프로세스 등을 모니터링하여 침입을 탐지하는 시스템. Tripwire가 대표적이다.",
    subject: "network-security",
  },
  {
    abbreviation: "WAF",
    fullName: "Web Application Firewall",
    korean: "웹 애플리케이션 방화벽",
    description:
      "웹 애플리케이션 계층(L7)에서 SQL Injection, XSS 등 웹 공격을 탐지·차단하는 보안 장비. HTTP/HTTPS 트래픽을 분석한다.",
    subject: "network-security",
  },
  {
    abbreviation: "NAC",
    fullName: "Network Access Control",
    korean: "네트워크 접근 제어",
    description:
      "네트워크에 접속하는 단말의 보안 상태(백신, 패치 등)를 점검하여 정책에 부합하지 않는 단말의 접근을 차단하는 보안 솔루션이다.",
    subject: "network-security",
  },
  {
    abbreviation: "VPN",
    fullName: "Virtual Private Network",
    korean: "가상 사설 네트워크",
    description:
      "공중 네트워크를 통해 암호화된 터널을 구성하여 안전한 사설 통신을 제공하는 기술. IPSec, SSL/TLS, L2TP 등의 프로토콜을 사용한다.",
    subject: "network-security",
  },
  {
    abbreviation: "UTM",
    fullName: "Unified Threat Management",
    korean: "통합 위협 관리",
    description:
      "방화벽, IDS/IPS, VPN, 안티바이러스, 스팸 필터 등 다양한 보안 기능을 하나의 장비에 통합한 보안 솔루션이다.",
    subject: "network-security",
  },
  {
    abbreviation: "Snort",
    fullName: "Snort IDS",
    korean: "스노트",
    description:
      "오픈소스 네트워크 기반 IDS/IPS. 규칙(Rule)은 'action protocol src_ip src_port -> dst_ip dst_port (options)' 형식이며, content, sid, msg 등의 옵션을 사용한다.",
    subject: "network-security",
  },

  // ===== 3. 어플리케이션 보안 (application-security) =====
  {
    abbreviation: "SQL Injection",
    fullName: "SQL Injection",
    korean: "SQL 삽입 공격",
    description:
      "웹 입력값에 악의적인 SQL 구문을 삽입하여 데이터베이스를 비정상적으로 조작하는 공격. PreparedStatement(바인드 변수) 사용과 입력값 검증으로 대응한다.",
    subject: "application-security",
  },
  {
    abbreviation: "XSS",
    fullName: "Cross-Site Scripting",
    korean: "크로스 사이트 스크립팅",
    description:
      "웹 페이지에 악성 스크립트를 삽입하여 다른 사용자의 브라우저에서 실행시키는 공격. Stored/Reflected/DOM Based 유형이 있으며, 입출력값 검증 및 HTML 엔티티 인코딩으로 대응한다.",
    subject: "application-security",
  },
  {
    abbreviation: "CSRF",
    fullName: "Cross-Site Request Forgery",
    korean: "크로스 사이트 요청 위조",
    description:
      "인증된 사용자의 브라우저를 이용해 사용자 의도와 무관한 요청을 웹 서버에 전송하는 공격. CSRF 토큰, Referer 검증, SameSite 쿠키 속성으로 대응한다.",
    subject: "application-security",
  },
  {
    abbreviation: "Directory Traversal",
    fullName: "Directory Traversal Attack",
    korean: "디렉터리 순회 공격",
    description:
      "URL이나 파일 경로에 '../' 등을 삽입하여 웹 서버의 상위 디렉터리에 접근하는 공격. 입력값에서 경로 문자 필터링과 chroot 설정으로 대응한다.",
    subject: "application-security",
  },
  {
    abbreviation: "Command Injection",
    fullName: "OS Command Injection",
    korean: "명령어 삽입 공격",
    description:
      "웹 입력값에 OS 명령어를 삽입하여 서버에서 시스템 명령을 실행시키는 공격. 세미콜론(;), 파이프(|) 등 메타문자 필터링과 화이트리스트 방식으로 대응한다.",
    subject: "application-security",
  },
  {
    abbreviation: "File Upload",
    fullName: "File Upload Vulnerability",
    korean: "파일 업로드 취약점",
    description:
      "웹 서버에 웹쉘 등 악성 파일을 업로드하여 서버를 장악하는 공격. 파일 확장자 화이트리스트 검증, 업로드 디렉터리 실행 권한 제거, 파일명 랜덤화로 대응한다.",
    subject: "application-security",
  },
  {
    abbreviation: "OWASP",
    fullName: "Open Web Application Security Project",
    korean: "오픈 웹 애플리케이션 보안 프로젝트",
    description:
      "웹 애플리케이션 보안 향상을 위한 비영리 단체. OWASP Top 10은 가장 위험한 웹 취약점 10가지를 선정하여 발표하며, 시험에서 자주 출제된다.",
    subject: "application-security",
  },
  {
    abbreviation: "Secure Coding",
    fullName: "Secure Coding",
    korean: "시큐어 코딩",
    description:
      "소프트웨어 개발 시 보안 취약점을 사전에 제거하는 코딩 기법. 입력값 검증, 출력값 인코딩, 에러 처리, 세션 관리 등이 핵심 원칙이다.",
    subject: "application-security",
  },
  {
    abbreviation: "DCL",
    fullName: "Data Control Language",
    korean: "데이터 제어어",
    description:
      "데이터베이스의 접근 권한을 제어하는 SQL 명령어. GRANT(권한 부여)와 REVOKE(권한 회수)가 있으며, 'GRANT SELECT ON table TO user' 형식으로 사용한다.",
    subject: "application-security",
  },
  {
    abbreviation: "DDL",
    fullName: "Data Definition Language",
    korean: "데이터 정의어",
    description:
      "데이터베이스 스키마를 정의·변경·삭제하는 SQL 명령어. CREATE, ALTER, DROP, TRUNCATE가 있으며, 자동 커밋(Auto Commit)된다.",
    subject: "application-security",
  },
  {
    abbreviation: "DML",
    fullName: "Data Manipulation Language",
    korean: "데이터 조작어",
    description:
      "데이터베이스의 데이터를 조회·삽입·수정·삭제하는 SQL 명령어. SELECT, INSERT, UPDATE, DELETE가 있으며, 트랜잭션 제어가 가능하다.",
    subject: "application-security",
  },
  {
    abbreviation: "View",
    fullName: "Database View",
    korean: "뷰",
    description:
      "하나 이상의 테이블로부터 유도된 가상 테이블. 보안 목적으로 특정 컬럼만 노출하거나 접근을 제한할 때 활용하며, 'CREATE VIEW' 문으로 생성한다.",
    subject: "application-security",
  },
  {
    abbreviation: "Session Hijacking",
    fullName: "Session Hijacking",
    korean: "세션 하이재킹",
    description:
      "정상적으로 인증된 사용자의 세션 ID를 탈취하여 해당 사용자로 위장하는 공격. 세션 ID 암호화, 주기적 갱신, IP 바인딩으로 대응한다.",
    subject: "application-security",
  },
  {
    abbreviation: "MITM",
    fullName: "Man-In-The-Middle",
    korean: "중간자 공격",
    description:
      "통신하는 두 당사자 사이에 공격자가 끼어들어 통신 내용을 도청·변조하는 공격. SSL/TLS 암호화, 인증서 검증, HSTS 적용으로 대응한다.",
    subject: "application-security",
  },
  {
    abbreviation: "Cookie",
    fullName: "HTTP Cookie",
    korean: "쿠키",
    description:
      "웹 서버가 클라이언트 브라우저에 저장하는 작은 데이터. Secure(HTTPS 전용), HttpOnly(JS 접근 차단), SameSite(CSRF 방지) 속성으로 보안을 강화한다.",
    subject: "application-security",
  },
  {
    abbreviation: "HTTP Response Splitting",
    fullName: "HTTP Response Splitting",
    korean: "HTTP 응답 분할",
    description:
      "HTTP 헤더에 개행문자(CRLF)를 삽입하여 응답을 분할하고, 악의적인 응답을 추가하는 공격. 입력값에서 CR(\\r), LF(\\n) 문자를 필터링하여 대응한다.",
    subject: "application-security",
  },
  {
    abbreviation: "Prepared Statement",
    fullName: "Prepared Statement",
    korean: "프리페어드 스테이트먼트",
    description:
      "SQL 쿼리의 구조를 미리 컴파일하고 변수를 바인딩하는 방식. SQL Injection을 원천적으로 방지하는 가장 효과적인 대응 방법이다.",
    subject: "application-security",
  },
  {
    abbreviation: "Web Shell",
    fullName: "Web Shell",
    korean: "웹쉘",
    description:
      "웹 서버에 업로드되어 원격에서 시스템 명령을 실행할 수 있게 하는 악성 스크립트. 파일 업로드 취약점을 통해 설치되며, 서버 전체를 장악할 수 있다.",
    subject: "application-security",
  },

  // ===== 4. 정보보안 일반 (security-general) =====
  {
    abbreviation: "AES",
    fullName: "Advanced Encryption Standard",
    korean: "고급 암호화 표준",
    description:
      "미국 NIST에서 선정한 대칭키 블록 암호 알고리즘. 128/192/256비트 키를 사용하며, SPN(Substitution-Permutation Network) 구조이다. DES의 후속 표준이다.",
    subject: "security-general",
  },
  {
    abbreviation: "DES",
    fullName: "Data Encryption Standard",
    korean: "데이터 암호화 표준",
    description:
      "56비트 키를 사용하는 대칭키 블록 암호 알고리즘. Feistel 구조이며 64비트 블록 단위로 암호화한다. 현재는 키 길이가 짧아 안전하지 않다.",
    subject: "security-general",
  },
  {
    abbreviation: "3DES",
    fullName: "Triple DES",
    korean: "트리플 DES",
    description:
      "DES를 3회 반복 적용하여 보안성을 높인 암호 알고리즘. 암호화→복호화→암호화(EDE) 방식으로 동작하며, 유효 키 길이는 112비트이다.",
    subject: "security-general",
  },
  {
    abbreviation: "RSA",
    fullName: "Rivest-Shamir-Adleman",
    korean: "RSA 공개키 암호",
    description:
      "큰 정수의 소인수분해의 어려움에 기반한 공개키 암호 알고리즘. 암호화, 전자서명, 키 교환에 사용되며, 대표적인 비대칭키(공개키) 암호 방식이다.",
    subject: "security-general",
  },
  {
    abbreviation: "ECC",
    fullName: "Elliptic Curve Cryptography",
    korean: "타원 곡선 암호",
    description:
      "타원 곡선의 이산 대수 문제에 기반한 공개키 암호 알고리즘. RSA보다 짧은 키 길이로 동등한 보안 강도를 제공하여 IoT 등 경량 환경에 적합하다.",
    subject: "security-general",
  },
  {
    abbreviation: "DH",
    fullName: "Diffie-Hellman Key Exchange",
    korean: "디피-헬만 키 교환",
    description:
      "이산 대수 문제에 기반하여 안전하지 않은 채널에서 두 당사자가 공유 비밀키를 합의하는 키 교환 프로토콜. 중간자 공격에 취약하여 인증과 함께 사용해야 한다.",
    subject: "security-general",
  },
  {
    abbreviation: "SHA",
    fullName: "Secure Hash Algorithm",
    korean: "안전한 해시 알고리즘",
    description:
      "임의 길이의 데이터를 고정 길이의 해시값으로 변환하는 해시 함수. SHA-1(160비트), SHA-256, SHA-384, SHA-512 등이 있으며, 무결성 검증에 사용된다.",
    subject: "security-general",
  },
  {
    abbreviation: "HMAC",
    fullName: "Hash-based Message Authentication Code",
    korean: "해시 기반 메시지 인증 코드",
    description:
      "해시 함수와 비밀키를 결합하여 메시지의 무결성과 인증을 동시에 제공하는 기법. HMAC-SHA256 등으로 사용되며, API 인증에 널리 활용된다.",
    subject: "security-general",
  },
  {
    abbreviation: "PKI",
    fullName: "Public Key Infrastructure",
    korean: "공개키 기반 구조",
    description:
      "공개키 암호 방식에 기반하여 디지털 인증서의 생성·관리·배포·폐기를 수행하는 보안 인프라. CA, RA, CRL, 디렉터리 서비스 등으로 구성된다.",
    subject: "security-general",
  },
  {
    abbreviation: "CA",
    fullName: "Certificate Authority",
    korean: "인증 기관",
    description:
      "디지털 인증서를 발급하고 관리하는 신뢰할 수 있는 제3자 기관. 인증서에 자신의 개인키로 전자서명하여 공개키의 유효성을 보증한다.",
    subject: "security-general",
  },
  {
    abbreviation: "RA",
    fullName: "Registration Authority",
    korean: "등록 기관",
    description:
      "CA를 대신하여 인증서 발급 신청자의 신원을 확인하고 등록 업무를 수행하는 기관. CA의 업무 부담을 경감시키는 역할을 한다.",
    subject: "security-general",
  },
  {
    abbreviation: "CRL",
    fullName: "Certificate Revocation List",
    korean: "인증서 폐기 목록",
    description:
      "유효 기간 만료 전에 폐기된 인증서의 일련번호를 기록한 목록. CA가 주기적으로 발행하며, 인증서 유효성 검증 시 참조한다.",
    subject: "security-general",
  },
  {
    abbreviation: "OCSP",
    fullName: "Online Certificate Status Protocol",
    korean: "온라인 인증서 상태 프로토콜",
    description:
      "인증서의 폐기 여부를 실시간으로 확인하는 프로토콜. CRL의 갱신 지연 문제를 해결하며, 개별 인증서 상태를 즉시 조회할 수 있다.",
    subject: "security-general",
  },
  {
    abbreviation: "MAC (Access)",
    fullName: "Mandatory Access Control",
    korean: "강제적 접근 제어",
    description:
      "보안 등급(레이블)에 기반하여 관리자가 중앙에서 접근 권한을 통제하는 방식. 주체와 객체에 보안 레이블을 부여하며, 군사/정부기관에서 주로 사용한다.",
    subject: "security-general",
  },
  {
    abbreviation: "DAC",
    fullName: "Discretionary Access Control",
    korean: "임의적 접근 제어",
    description:
      "데이터 소유자가 자신의 판단에 따라 다른 사용자에게 접근 권한을 부여하는 방식. ACL(접근 제어 목록)을 사용하며, 유닉스 파일 시스템이 대표적이다.",
    subject: "security-general",
  },
  {
    abbreviation: "RBAC",
    fullName: "Role-Based Access Control",
    korean: "역할 기반 접근 제어",
    description:
      "사용자에게 역할(Role)을 할당하고, 역할에 권한을 부여하는 접근 제어 방식. 최소 권한 원칙과 직무 분리 원칙을 효과적으로 구현할 수 있다.",
    subject: "security-general",
  },
  {
    abbreviation: "BLP",
    fullName: "Bell-LaPadula Model",
    korean: "벨-라파듈라 모델",
    description:
      "기밀성을 중시하는 접근 제어 모델. 'No Read Up(상위 등급 읽기 금지), No Write Down(하위 등급 쓰기 금지)' 규칙을 적용한다. 군사 기밀 보호에 적합하다.",
    subject: "security-general",
  },
  {
    abbreviation: "Biba",
    fullName: "Biba Integrity Model",
    korean: "비바 모델",
    description:
      "무결성을 중시하는 접근 제어 모델. 'No Read Down(하위 등급 읽기 금지), No Write Up(상위 등급 쓰기 금지)' 규칙을 적용한다. BLP의 무결성 버전이다.",
    subject: "security-general",
  },
  {
    abbreviation: "Clark-Wilson",
    fullName: "Clark-Wilson Model",
    korean: "클락-윌슨 모델",
    description:
      "무결성을 강조하는 상업용 접근 제어 모델. 주체가 TP(변환 절차)를 통해서만 CDI(제약 데이터)에 접근하도록 하여 무결성을 보장한다. 직무 분리 원칙을 포함한다.",
    subject: "security-general",
  },
  {
    abbreviation: "AAA",
    fullName: "Authentication, Authorization, Accounting",
    korean: "인증, 인가, 과금",
    description:
      "네트워크 접근 제어의 3가지 핵심 기능. 인증(Authentication)은 신원 확인, 인가(Authorization)는 권한 부여, 과금(Accounting)은 사용 기록 관리이다.",
    subject: "security-general",
  },
  {
    abbreviation: "Kerberos",
    fullName: "Kerberos Authentication Protocol",
    korean: "커버로스 인증 프로토콜",
    description:
      "대칭키 기반의 티켓(Ticket) 인증 프로토콜. KDC(AS+TGS) 구조로, TGT를 발급받아 서비스 티켓을 획득하는 방식이며, SSO 구현에 활용된다.",
    subject: "security-general",
  },
  {
    abbreviation: "OTP",
    fullName: "One-Time Password",
    korean: "일회용 비밀번호",
    description:
      "매번 새로운 비밀번호를 생성하여 사용하는 인증 방식. 시간 동기화(TOTP), 이벤트 동기화(HOTP), 챌린지-응답 방식이 있으며, 재사용 공격을 방지한다.",
    subject: "security-general",
  },
  {
    abbreviation: "SSO",
    fullName: "Single Sign-On",
    korean: "통합 인증",
    description:
      "한 번의 인증으로 여러 시스템이나 서비스에 접근할 수 있는 인증 체계. Kerberos, SAML, OAuth 등의 기술로 구현하며, 사용자 편의성과 관리 효율성을 높인다.",
    subject: "security-general",
  },
  {
    abbreviation: "ECB",
    fullName: "Electronic Codebook",
    korean: "전자 코드북 모드",
    description:
      "블록 암호 운용 모드 중 가장 단순한 방식으로, 각 블록을 독립적으로 암호화한다. 동일 평문 블록이 동일 암호문을 생성하므로 패턴 노출 위험이 있어 권장하지 않는다.",
    subject: "security-general",
  },
  {
    abbreviation: "CBC",
    fullName: "Cipher Block Chaining",
    korean: "암호 블록 연쇄 모드",
    description:
      "이전 암호문 블록과 현재 평문 블록을 XOR한 후 암호화하는 방식. 초기벡터(IV)를 사용하며, 동일 평문도 다른 암호문을 생성한다. 가장 널리 사용되는 모드이다.",
    subject: "security-general",
  },
  {
    abbreviation: "Digital Signature",
    fullName: "Digital Signature",
    korean: "전자서명",
    description:
      "송신자의 개인키로 메시지 해시값을 암호화하여 생성하는 서명. 인증(Authentication), 무결성(Integrity), 부인방지(Non-repudiation)를 보장한다.",
    subject: "security-general",
  },

  // ===== 5. 정보보안 관리 및 법규 (security-management) =====
  {
    abbreviation: "ISMS-P",
    fullName: "Information Security Management System - Privacy",
    korean: "정보보호 및 개인정보보호 관리체계 인증",
    description:
      "정보보호와 개인정보보호 관리체계를 통합한 국내 인증 제도. 관리체계 수립·운영, 보호대책 요구사항, 개인정보 처리단계별 요구사항으로 구성된다.",
    subject: "security-management",
  },
  {
    abbreviation: "ISO 27001",
    fullName: "ISO/IEC 27001",
    korean: "정보보안 경영시스템 국제 표준",
    description:
      "정보보안 관리체계(ISMS)에 대한 국제 표준 인증. PDCA(Plan-Do-Check-Act) 사이클 기반으로 지속적인 보안 개선 프로세스를 요구한다.",
    subject: "security-management",
  },
  {
    abbreviation: "CC",
    fullName: "Common Criteria",
    korean: "공통 평가기준",
    description:
      "정보보안 제품의 보안성을 평가하기 위한 국제 표준(ISO 15408). PP(보호프로파일), ST(보안목표명세서), EAL(평가보증등급 1~7)으로 구성된다.",
    subject: "security-management",
  },
  {
    abbreviation: "개인정보보호법",
    fullName: "Personal Information Protection Act",
    korean: "개인정보 보호법",
    description:
      "개인정보의 수집·이용·제공·파기 등 처리에 관한 기본법. 개인정보처리자의 의무, 정보주체의 권리, 개인정보 보호위원회 등을 규정한다.",
    subject: "security-management",
  },
  {
    abbreviation: "정보통신망법",
    fullName: "Act on Promotion of Information and Communications Network Utilization and Information Protection",
    korean: "정보통신망 이용촉진 및 정보보호 등에 관한 법률",
    description:
      "정보통신서비스 제공자의 개인정보 보호 의무, 정보통신망의 안정성 확보, 불법 정보 유통 방지 등을 규정하는 법률이다.",
    subject: "security-management",
  },
  {
    abbreviation: "전자서명법",
    fullName: "Digital Signature Act",
    korean: "전자서명법",
    description:
      "전자서명의 법적 효력과 인증 체계를 규정하는 법률. 전자서명의 효력을 수기 서명과 동등하게 인정하며, 공인인증서 제도를 규정하였다.",
    subject: "security-management",
  },
  {
    abbreviation: "BCP",
    fullName: "Business Continuity Planning",
    korean: "업무 연속성 계획",
    description:
      "재난·재해 발생 시 핵심 업무를 지속하거나 빠르게 복구하기 위한 종합 계획. BIA(업무영향분석)를 기반으로 수립하며, 주기적인 테스트와 갱신이 필요하다.",
    subject: "security-management",
  },
  {
    abbreviation: "BIA",
    fullName: "Business Impact Analysis",
    korean: "업무 영향 분석",
    description:
      "재해 발생 시 업무 중단이 조직에 미치는 영향을 분석하는 과정. MTD(최대허용중단시간), RPO(목표복구시점), RTO(목표복구시간) 등을 산정한다.",
    subject: "security-management",
  },
  {
    abbreviation: "RPO",
    fullName: "Recovery Point Objective",
    korean: "목표 복구 시점",
    description:
      "재해 발생 시 데이터를 복구할 수 있는 목표 시점. RPO가 0이면 데이터 손실 없이 복구해야 함을 의미하며, 백업 주기 결정의 기준이 된다.",
    subject: "security-management",
  },
  {
    abbreviation: "RTO",
    fullName: "Recovery Time Objective",
    korean: "목표 복구 시간",
    description:
      "재해 발생 후 시스템을 정상으로 복구하는 데 허용되는 최대 시간. RTO가 짧을수록 높은 수준의 재해복구 체계(미러 사이트 등)가 필요하다.",
    subject: "security-management",
  },
  {
    abbreviation: "DRP",
    fullName: "Disaster Recovery Plan",
    korean: "재해 복구 계획",
    description:
      "재해 발생 시 IT 시스템과 데이터를 복구하기 위한 세부 계획. Mirror Site, Hot Site, Warm Site, Cold Site 등 복구 수준에 따라 유형이 구분된다.",
    subject: "security-management",
  },
  {
    abbreviation: "CERT",
    fullName: "Computer Emergency Response Team",
    korean: "침해사고 대응팀",
    description:
      "컴퓨터 보안 사고에 대한 예방, 대응, 복구 활동을 수행하는 전문 조직. 침해사고 접수, 분석, 대응, 복구, 재발 방지 활동을 수행한다.",
    subject: "security-management",
  },
  {
    abbreviation: "CSIRT",
    fullName: "Computer Security Incident Response Team",
    korean: "컴퓨터 보안 사고 대응팀",
    description:
      "조직 내 보안 사고에 대응하는 전담팀. CERT와 유사하나 조직 내부에 구성되며, 사고 탐지·분석·대응·복구·사후 관리까지 전 과정을 담당한다.",
    subject: "security-management",
  },
  {
    abbreviation: "Digital Forensics",
    fullName: "Digital Forensics",
    korean: "디지털 포렌식",
    description:
      "디지털 증거를 수집·분석·보존하여 법적 증거로 활용하는 과학적 절차. 정당성, 무결성, 재현성, 신속성, 연계보관성(Chain of Custody) 원칙을 준수해야 한다.",
    subject: "security-management",
  },
  {
    abbreviation: "Chain of Custody",
    fullName: "Chain of Custody",
    korean: "증거 연계 보관성",
    description:
      "디지털 증거의 수집부터 법정 제출까지 모든 취급 과정을 문서화하여 증거의 무결성과 신뢰성을 보장하는 절차. 누가, 언제, 어떻게 취급했는지 기록한다.",
    subject: "security-management",
  },
  {
    abbreviation: "PIA",
    fullName: "Privacy Impact Assessment",
    korean: "개인정보 영향평가",
    description:
      "개인정보를 활용하는 시스템 구축·변경 시 개인정보 침해 위험을 사전에 분석·평가하는 제도. 공공기관의 경우 일정 규모 이상 시 의무적으로 실시해야 한다.",
    subject: "security-management",
  },
  {
    abbreviation: "Risk Assessment",
    fullName: "Risk Assessment",
    korean: "위험 평가",
    description:
      "자산의 위협과 취약점을 식별하고 위험도를 산정하여 적절한 보호 대책을 수립하는 과정. 위험도 = 자산가치 × 위협 × 취약점으로 산정하며, 기준선/상세/복합 접근법이 있다.",
    subject: "security-management",
  },
  {
    abbreviation: "정보주체의 권리",
    fullName: "Rights of Data Subject",
    korean: "정보주체의 권리",
    description:
      "개인정보보호법에서 보장하는 정보주체의 권리. 개인정보 열람권, 정정·삭제권, 처리정지권, 동의 철회권, 손해배상 청구권 등이 포함된다.",
    subject: "security-management",
  },
  {
    abbreviation: "개인정보 처리방침",
    fullName: "Privacy Policy",
    korean: "개인정보 처리방침",
    description:
      "개인정보처리자가 개인정보 처리 목적, 항목, 보유 기간, 제3자 제공, 파기 절차 등을 공개하는 문서. 인터넷 홈페이지에 지속적으로 게재해야 한다.",
    subject: "security-management",
  },
  {
    abbreviation: "GDPR",
    fullName: "General Data Protection Regulation",
    korean: "일반 데이터 보호 규정",
    description:
      "EU의 개인정보 보호 법률로, 전 세계적으로 가장 강력한 개인정보 보호 규정. 정보이동권, 잊힐 권리, DPO 지정 의무 등을 규정하며, 위반 시 고액의 과징금을 부과한다.",
    subject: "security-management",
  },

  // ===== 추가 용어 (각 과목 균형 맞추기) =====

  // 시스템 보안 추가
  {
    abbreviation: "TCP Wrapper",
    fullName: "TCP Wrapper",
    korean: "TCP 래퍼",
    description:
      "리눅스에서 네트워크 서비스의 접근을 IP 기반으로 제어하는 호스트 기반 ACL. /etc/hosts.allow와 /etc/hosts.deny 파일로 설정하며, allow가 deny보다 우선한다.",
    subject: "system-security",
  },
  {
    abbreviation: "sudo",
    fullName: "Superuser Do",
    korean: "관리자 권한 실행",
    description:
      "일반 사용자가 root 권한으로 명령을 실행할 수 있게 하는 명령어. /etc/sudoers 파일에서 권한을 설정하며, visudo 명령어로 편집해야 안전하다.",
    subject: "system-security",
  },

  // 네트워크 보안 추가
  {
    abbreviation: "ARP Spoofing",
    fullName: "ARP Spoofing",
    korean: "ARP 스푸핑",
    description:
      "위조된 ARP Reply 패킷을 전송하여 공격 대상의 ARP 테이블을 변조하고, 네트워크 트래픽을 가로채는 공격. 정적 ARP 테이블 설정이나 ARP 감시 도구로 대응한다.",
    subject: "network-security",
  },
  {
    abbreviation: "DNS Spoofing",
    fullName: "DNS Spoofing",
    korean: "DNS 스푸핑",
    description:
      "DNS 응답을 위조하여 사용자를 악성 사이트로 유도하는 공격. DNS 캐시 포이즈닝이 대표적이며, DNSSEC 적용으로 대응한다.",
    subject: "network-security",
  },
  {
    abbreviation: "IP Spoofing",
    fullName: "IP Spoofing",
    korean: "IP 스푸핑",
    description:
      "패킷의 출발지 IP 주소를 위조하여 신뢰된 호스트로 위장하는 공격. ingress/egress 필터링과 암호화 인증 프로토콜(IPSec)로 대응한다.",
    subject: "network-security",
  },
  {
    abbreviation: "Ping of Death",
    fullName: "Ping of Death",
    korean: "죽음의 핑 공격",
    description:
      "ICMP 패킷의 크기를 IP 최대 허용치(65,535바이트)보다 크게 조작하여 전송함으로써 수신 측 시스템의 버퍼 오버플로우를 유발하는 공격이다.",
    subject: "network-security",
  },

  // 정보보안 일반 추가
  {
    abbreviation: "RADIUS",
    fullName: "Remote Authentication Dial-In User Service",
    korean: "원격 인증 서비스",
    description:
      "원격 접속 사용자의 인증, 인가, 과금(AAA)을 제공하는 프로토콜. UDP 포트를 사용하며, 비밀번호만 암호화한다. 무선 네트워크 인증에 주로 사용된다.",
    subject: "security-general",
  },
  {
    abbreviation: "TACACS+",
    fullName: "Terminal Access Controller Access Control System Plus",
    korean: "터미널 접근 제어 시스템",
    description:
      "Cisco에서 개발한 AAA 프로토콜. TCP 49번 포트를 사용하며, 전체 패킷을 암호화한다. RADIUS보다 보안성이 높고, 인증·인가·과금을 분리하여 처리한다.",
    subject: "security-general",
  },
  {
    abbreviation: "X.509",
    fullName: "X.509 Certificate Standard",
    korean: "X.509 인증서 표준",
    description:
      "공개키 인증서의 국제 표준 형식. 버전, 일련번호, 서명 알고리즘, 발행자, 유효기간, 주체, 공개키 정보, 확장 필드 등으로 구성된다.",
    subject: "security-general",
  },
  {
    abbreviation: "CFB",
    fullName: "Cipher Feedback",
    korean: "암호 피드백 모드",
    description:
      "블록 암호를 스트림 암호처럼 사용하는 운용 모드. 이전 암호문을 암호화한 결과와 평문을 XOR하여 암호문을 생성한다. IV를 사용하며 자기 동기화 기능이 있다.",
    subject: "security-general",
  },
  {
    abbreviation: "OFB",
    fullName: "Output Feedback",
    korean: "출력 피드백 모드",
    description:
      "블록 암호를 스트림 암호처럼 사용하는 운용 모드. 초기벡터를 반복 암호화하여 키 스트림을 생성하고, 평문과 XOR한다. 오류 전파가 없는 것이 특징이다.",
    subject: "security-general",
  },
  {
    abbreviation: "CTR",
    fullName: "Counter Mode",
    korean: "카운터 모드",
    description:
      "카운터 값을 암호화하여 키 스트림을 생성하고 평문과 XOR하는 방식. 병렬 처리가 가능하여 성능이 우수하며, 랜덤 접근이 가능한 것이 장점이다.",
    subject: "security-general",
  },

  // 어플리케이션 보안 추가
  {
    abbreviation: "Stored XSS",
    fullName: "Stored Cross-Site Scripting",
    korean: "저장형 XSS",
    description:
      "악성 스크립트가 서버(DB)에 저장되어 해당 페이지를 조회하는 모든 사용자에게 실행되는 XSS 공격. 게시판, 댓글 등에서 발생하며, Reflected XSS보다 위험하다.",
    subject: "application-security",
  },
  {
    abbreviation: "Reflected XSS",
    fullName: "Reflected Cross-Site Scripting",
    korean: "반사형 XSS",
    description:
      "악성 스크립트가 URL 파라미터 등에 포함되어 서버 응답에 반사되어 실행되는 XSS 공격. 피싱 메일의 링크를 통해 유포되며, 일회성으로 동작한다.",
    subject: "application-security",
  },

  // 보안 관리 추가
  {
    abbreviation: "정보보호산업법",
    fullName: "Information Security Industry Act",
    korean: "정보보호산업의 진흥에 관한 법률",
    description:
      "정보보호 산업의 기반 조성과 경쟁력 강화를 위한 법률. 정보보호 기업의 지원, 전문인력 양성, 정보보호 공시 제도 등을 규정한다.",
    subject: "security-management",
  },
  {
    abbreviation: "MTD",
    fullName: "Maximum Tolerable Downtime",
    korean: "최대 허용 중단 시간",
    description:
      "업무 중단이 조직에 심각한 영향을 미치기 전까지 허용할 수 있는 최대 시간. BIA에서 산정하며, RTO는 반드시 MTD 이내여야 한다.",
    subject: "security-management",
  },
  {
    abbreviation: "Residual Risk",
    fullName: "Residual Risk",
    korean: "잔여 위험",
    description:
      "보안 대책을 적용한 후에도 남아 있는 위험. 경영진이 수용 가능한 수준인지 판단하여 위험 수용, 위험 회피, 위험 전가 등의 전략을 선택한다.",
    subject: "security-management",
  },
  {
    abbreviation: "Incident Response",
    fullName: "Incident Response Procedure",
    korean: "침해사고 대응 절차",
    description:
      "보안 사고 발생 시 대응하는 표준 절차. 사고 탐지 및 보고 → 초기 대응 → 대응 전략 수립 → 사고 조사 → 보고서 작성 → 재발 방지 순으로 진행한다.",
    subject: "security-management",
  },

  // 시스템 보안 추가
  {
    abbreviation: "Buffer Overflow",
    fullName: "Buffer Overflow Attack",
    korean: "버퍼 오버플로우 공격",
    description:
      "프로그램의 버퍼 크기를 초과하는 데이터를 입력하여 인접 메모리를 덮어쓰고, 실행 흐름을 변경하는 공격. Stack Guard, ASLR, NX bit 등으로 대응한다.",
    subject: "system-security",
  },
  {
    abbreviation: "Race Condition",
    fullName: "Race Condition",
    korean: "레이스 컨디션",
    description:
      "여러 프로세스가 공유 자원에 동시에 접근할 때 실행 순서에 따라 결과가 달라지는 취약점. TOCTOU(Time of Check to Time of Use) 공격이 대표적이며, 임시파일 사용 시 주의해야 한다.",
    subject: "system-security",
  },

  // 네트워크 보안 추가
  {
    abbreviation: "IPSec",
    fullName: "Internet Protocol Security",
    korean: "인터넷 프로토콜 보안",
    description:
      "IP 계층에서 암호화와 인증을 제공하는 프로토콜 모음. AH(인증 헤더)와 ESP(암호화 페이로드)로 구성되며, 전송 모드와 터널 모드가 있다.",
    subject: "network-security",
  },
  {
    abbreviation: "SSL/TLS",
    fullName: "Secure Sockets Layer / Transport Layer Security",
    korean: "보안 소켓 계층 / 전송 계층 보안",
    description:
      "전송 계층에서 데이터 암호화, 서버 인증, 무결성을 제공하는 보안 프로토콜. HTTPS(443)에 사용되며, 핸드셰이크 과정에서 암호 알고리즘과 세션키를 협상한다.",
    subject: "network-security",
  },

  // 어플리케이션 보안 추가
  {
    abbreviation: "Blind SQL Injection",
    fullName: "Blind SQL Injection",
    korean: "블라인드 SQL 인젝션",
    description:
      "에러 메시지가 노출되지 않는 환경에서 참/거짓 조건의 응답 차이를 이용하여 데이터를 추출하는 SQL Injection 기법. Boolean-based와 Time-based 방식이 있다.",
    subject: "application-security",
  },

  // 정보보안 일반 추가
  {
    abbreviation: "MD5",
    fullName: "Message Digest 5",
    korean: "MD5 해시 함수",
    description:
      "128비트 해시값을 생성하는 해시 함수. 충돌(Collision) 취약점이 발견되어 현재는 보안 용도로 권장하지 않으며, SHA-256 이상으로 대체하여 사용한다.",
    subject: "security-general",
  },
  {
    abbreviation: "Birthday Attack",
    fullName: "Birthday Attack",
    korean: "생일 공격",
    description:
      "생일 역설에 기반하여 해시 함수의 충돌쌍을 찾는 공격. n비트 해시 함수에 대해 2^(n/2)번 연산으로 충돌을 찾을 수 있으며, 해시 길이가 충분해야 안전하다.",
    subject: "security-general",
  },

  // 보안 관리 추가
  {
    abbreviation: "Mirror Site",
    fullName: "Mirror Site",
    korean: "미러 사이트",
    description:
      "주 센터와 동일한 수준의 데이터와 시스템을 실시간으로 동기화하여 유지하는 재해복구 센터. RTO가 가장 짧지만 구축·운영 비용이 가장 높다.",
    subject: "security-management",
  },
  {
    abbreviation: "Hot Site",
    fullName: "Hot Site",
    korean: "핫 사이트",
    description:
      "주 센터와 동일한 장비와 데이터를 보유하나 실시간 동기화 수준이 미러 사이트보다 낮은 재해복구 센터. 수시간 내 복구가 가능하다.",
    subject: "security-management",
  },
  {
    abbreviation: "Cold Site",
    fullName: "Cold Site",
    korean: "콜드 사이트",
    description:
      "전산 장비 없이 공간과 전력 등 기본 시설만 갖춘 재해복구 센터. 복구까지 수주~수개월이 소요되지만 비용이 가장 저렴하다.",
    subject: "security-management",
  },
];
