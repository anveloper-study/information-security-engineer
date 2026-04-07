import type { PracticalSubject } from "@/types";

export interface DescriptiveQuestion {
  question: string;
  answer: string;
  keywords: string[];
  subject: PracticalSubject;
}

export const allDescriptive: DescriptiveQuestion[] = [
  // ============================================================
  // 1. 시스템 보안 (system-security) — 10문항
  // ============================================================
  {
    question:
      "setuid, setgid, sticky bit의 개념을 각각 설명하고, 숫자 모드(Octal)로 설정하는 방법을 서술하시오.",
    answer:
      "setuid는 파일 실행 시 소유자의 권한으로 실행되도록 하는 특수 권한으로, 숫자 모드 4000으로 설정한다. setgid는 파일 실행 시 소유 그룹의 권한으로 실행되며 디렉터리에 설정 시 하위 파일이 해당 그룹을 상속받고, 숫자 모드 2000으로 설정한다. sticky bit는 디렉터리에 설정 시 소유자만 파일을 삭제할 수 있도록 제한하며, 숫자 모드 1000으로 설정한다. 예를 들어 chmod 4755 file 명령으로 setuid를 설정할 수 있다.",
    keywords: ["setuid", "setgid", "sticky bit", "4000", "2000", "1000", "chmod", "특수 권한"],
    subject: "system-security",
  },
  {
    question:
      "/etc/passwd 파일과 /etc/shadow 파일의 구조를 각각 설명하고, shadow 파일을 사용하는 이유를 서술하시오.",
    answer:
      "/etc/passwd 파일은 사용자명:패스워드:UID:GID:설명:홈디렉터리:셸 형태의 7개 필드로 구성되며, 모든 사용자가 읽을 수 있다. /etc/shadow 파일은 사용자명:암호화된패스워드:최종변경일:최소사용기간:최대사용기간:경고기간:비활성기간:만료일:예약 형태의 9개 필드로 구성되며, root만 읽을 수 있다. shadow 파일을 사용하는 이유는 passwd 파일이 모든 사용자에게 읽기 권한이 있어 암호화된 패스워드가 노출될 위험이 있으므로, 별도의 shadow 파일에 패스워드를 저장하여 보안성을 높이기 위함이다.",
    keywords: ["/etc/passwd", "/etc/shadow", "UID", "GID", "암호화", "root", "7개 필드", "9개 필드"],
    subject: "system-security",
  },
  {
    question:
      "umask의 개념을 설명하고, umask 값이 022일 때 파일과 디렉터리의 기본 생성 권한을 계산하시오.",
    answer:
      "umask(user file creation mask)는 새로 생성되는 파일이나 디렉터리의 기본 권한에서 제외할 권한을 지정하는 값이다. 파일의 기본 최대 권한은 666, 디렉터리의 기본 최대 권한은 777이다. umask가 022일 경우 파일은 666 - 022 = 644(rw-r--r--), 디렉터리는 777 - 022 = 755(rwxr-xr-x)가 된다. umask 값이 클수록 생성되는 파일의 권한은 더 제한적이 된다.",
    keywords: ["umask", "022", "666", "777", "644", "755", "기본 권한", "마스크"],
    subject: "system-security",
  },
  {
    question: "cron과 at의 차이점을 설명하고, crontab의 시간 설정 형식을 서술하시오.",
    answer:
      "cron은 주기적·반복적으로 작업을 예약 실행하는 데몬으로, crontab 파일에 '분 시 일 월 요일 명령어' 형식으로 등록한다. at은 일회성 작업 예약에 사용되며, 지정된 시간에 한 번만 실행된 후 큐에서 제거된다. cron은 /etc/crontab 또는 사용자별 crontab -e 명령으로 관리하며, at은 at 명령어로 등록하고 atq로 확인, atrm으로 삭제할 수 있다. 접근 제어는 cron.allow/cron.deny, at.allow/at.deny 파일로 수행한다.",
    keywords: ["cron", "at", "반복", "일회성", "crontab", "분 시 일 월 요일", "cron.allow", "cron.deny"],
    subject: "system-security",
  },
  {
    question: "PAM(Pluggable Authentication Module)의 개념과 주요 구성 요소를 설명하시오.",
    answer:
      "PAM은 리눅스에서 인증을 모듈화하여 관리하는 프레임워크로, 애플리케이션이 인증 방식에 독립적으로 동작할 수 있게 한다. PAM 설정 파일은 /etc/pam.d/ 디렉터리에 서비스별로 존재하며, 각 행은 '모듈타입 제어플래그 모듈경로 인자' 형식으로 구성된다. 모듈 타입에는 auth(인증), account(계정), password(패스워드), session(세션)이 있으며, 제어 플래그에는 required, requisite, sufficient, optional이 있다. PAM을 사용하면 인증 정책을 유연하게 변경할 수 있어 보안 관리가 용이하다.",
    keywords: ["PAM", "모듈", "auth", "account", "password", "session", "required", "/etc/pam.d"],
    subject: "system-security",
  },
  {
    question: "리눅스의 런레벨(Runlevel) 0~6을 각각 설명하시오.",
    answer:
      "런레벨 0은 시스템 종료(halt), 1은 단일 사용자 모드(single user mode)로 시스템 복구 시 사용된다. 런레벨 2는 NFS를 제외한 다중 사용자 모드, 3은 완전한 다중 사용자 모드(텍스트 모드)이다. 런레벨 4는 사용자 정의용으로 예약되어 있으며, 5는 그래픽 환경의 다중 사용자 모드(X Window)이다. 런레벨 6은 시스템 재부팅(reboot)이며, init 명령이나 systemctl을 통해 런레벨을 변경할 수 있다.",
    keywords: ["런레벨", "0", "halt", "1", "single user", "3", "다중 사용자", "5", "X Window", "6", "reboot"],
    subject: "system-security",
  },
  {
    question:
      "inode의 개념을 설명하고, 하드링크와 심볼릭링크(소프트링크)의 차이점을 서술하시오.",
    answer:
      "inode는 파일의 메타데이터(소유자, 권한, 크기, 데이터 블록 위치 등)를 저장하는 자료구조로, 각 파일마다 고유한 inode 번호가 부여된다. 하드링크는 원본 파일과 동일한 inode를 공유하므로 원본 파일이 삭제되어도 데이터에 접근 가능하며, 같은 파일시스템 내에서만 생성 가능하고 디렉터리에는 생성할 수 없다. 심볼릭링크는 원본 파일의 경로를 가리키는 별도의 inode를 가지며, 원본이 삭제되면 링크가 깨지고(dangling link), 파일시스템 간에도 생성 가능하다.",
    keywords: ["inode", "하드링크", "심볼릭링크", "동일 inode", "경로 참조", "파일시스템"],
    subject: "system-security",
  },
  {
    question:
      "리눅스의 주요 로그 파일인 wtmp, utmp, btmp, lastlog, messages, secure의 역할을 각각 설명하시오.",
    answer:
      "wtmp는 사용자의 로그인·로그아웃 이력을 기록하며 last 명령으로 확인한다. utmp는 현재 로그인 중인 사용자 정보를 기록하며 who, w 명령으로 확인한다. btmp는 로그인 실패 기록을 저장하며 lastb 명령으로 확인한다. lastlog는 각 사용자의 마지막 로그인 정보를 기록하며 lastlog 명령으로 확인한다. messages(또는 syslog)는 시스템의 전반적인 로그 메시지를 기록하고, secure는 인증 관련 로그(ssh 접속, su 사용 등)를 기록한다.",
    keywords: ["wtmp", "utmp", "btmp", "lastlog", "messages", "secure", "last", "who", "lastb"],
    subject: "system-security",
  },
  {
    question: "루트킷(Rootkit)의 종류를 설명하고, 탐지 방법을 서술하시오.",
    answer:
      "루트킷은 공격자가 시스템 침투 후 관리자 권한을 유지하고 자신의 존재를 은닉하기 위해 설치하는 도구 모음이다. 커널 레벨 루트킷은 커널 모듈을 변조하여 운영체제 자체를 조작하며, 사용자 레벨 루트킷은 시스템 명령어(ls, ps, netstat 등)를 변조하여 악성 프로세스를 숨긴다. 탐지 방법으로는 chkrootkit, rkhunter 등 전용 도구 사용, 파일 무결성 검사(Tripwire), 알려진 정상 바이너리와의 해시값 비교, 그리고 메모리 포렌식 등이 있다.",
    keywords: ["루트킷", "커널 레벨", "사용자 레벨", "은닉", "chkrootkit", "rkhunter", "Tripwire", "무결성"],
    subject: "system-security",
  },
  {
    question: "버퍼 오버플로우 공격의 원리를 설명하고, 이에 대한 대응 방법을 서술하시오.",
    answer:
      "버퍼 오버플로우는 프로그램이 할당된 버퍼의 크기를 초과하는 데이터를 입력받아 인접 메모리 영역(특히 복귀 주소)을 덮어씀으로써 공격자가 원하는 코드를 실행하게 하는 공격이다. 스택 기반 오버플로우는 지역 변수 영역을 넘어 RET 주소를 변조하고, 힙 기반 오버플로우는 동적 할당 메모리를 넘어쓴다. 대응 방법으로는 스택 가드(Stack Guard/Canary), ASLR(Address Space Layout Randomization), DEP/NX bit(실행 불가 메모리), 안전한 함수 사용(strncpy, snprintf 등), 그리고 시큐어 코딩 등이 있다.",
    keywords: ["버퍼 오버플로우", "복귀 주소", "RET", "스택 가드", "ASLR", "NX bit", "DEP", "시큐어 코딩"],
    subject: "system-security",
  },

  // ============================================================
  // 2. 네트워크 보안 (network-security) — 10문항
  // ============================================================
  {
    question:
      "TCP 3-way handshake와 4-way handshake의 과정을 각각 설명하시오.",
    answer:
      "3-way handshake는 TCP 연결 수립 과정으로, 클라이언트가 SYN 패킷을 전송하면 서버가 SYN+ACK로 응답하고, 클라이언트가 ACK를 보내 연결이 설정(ESTABLISHED)된다. 4-way handshake는 TCP 연결 종료 과정으로, 한쪽이 FIN을 전송하면 상대방이 ACK로 응답하고, 상대방도 FIN을 전송하면 최초 요청 측이 ACK로 응답하여 연결이 종료된다. 연결 종료를 먼저 요청한 측은 TIME_WAIT 상태로 일정 시간 대기한 후 완전히 종료된다.",
    keywords: ["SYN", "SYN+ACK", "ACK", "FIN", "3-way handshake", "4-way handshake", "ESTABLISHED", "TIME_WAIT"],
    subject: "network-security",
  },
  {
    question:
      "SYN Flood 공격의 원리를 설명하고, SYN Cookie를 이용한 대응 방법을 서술하시오.",
    answer:
      "SYN Flood 공격은 공격자가 출발지 IP를 위조(Spoofing)하여 대량의 SYN 패킷을 서버에 전송하면, 서버는 SYN+ACK를 보내고 ACK를 기다리는 반개방(Half-Open) 상태의 연결이 백로그 큐에 쌓여 정상 연결을 수용하지 못하게 되는 DoS 공격이다. SYN Cookie는 서버가 SYN 수신 시 백로그 큐에 저장하지 않고, 연결 정보를 암호학적으로 인코딩하여 SYN+ACK의 시퀀스 번호(ISN)에 포함시켜 응답한다. 클라이언트가 정상적으로 ACK를 보내면 해당 쿠키 값을 검증하여 연결을 수립하므로, 백로그 큐가 고갈되지 않는다.",
    keywords: ["SYN Flood", "반개방", "Half-Open", "백로그 큐", "SYN Cookie", "IP 위조", "시퀀스 번호"],
    subject: "network-security",
  },
  {
    question: "ARP Spoofing 공격의 원리를 설명하고, 대응 방법을 서술하시오.",
    answer:
      "ARP Spoofing은 공격자가 위조된 ARP Reply 패킷을 네트워크에 전송하여 다른 호스트의 ARP 캐시 테이블을 변조함으로써, 통신 데이터를 가로채는 중간자(MITM) 공격이다. 예를 들어 게이트웨이의 MAC 주소를 공격자의 MAC으로 변조하면, 해당 네트워크의 모든 외부 통신이 공격자를 경유하게 된다. 대응 방법으로는 정적 ARP 테이블 설정(arp -s), ARP 감시 도구(arpwatch) 사용, VLAN 분리, 802.1X 인증, 그리고 스위치의 Dynamic ARP Inspection(DAI) 기능 활성화 등이 있다.",
    keywords: ["ARP Spoofing", "ARP Reply", "ARP 캐시", "MITM", "중간자", "arpwatch", "정적 ARP", "DAI"],
    subject: "network-security",
  },
  {
    question:
      "DNS Spoofing 공격의 원리와 DNSSEC의 동작 방식을 설명하시오.",
    answer:
      "DNS Spoofing은 DNS 질의에 대해 공격자가 위조된 DNS 응답을 보내 사용자를 악성 사이트로 유도하는 공격이다. DNS 캐시 포이즈닝은 DNS 서버의 캐시를 오염시켜 다수의 사용자에게 영향을 미친다. DNSSEC(DNS Security Extensions)은 DNS 응답에 전자서명을 추가하여 데이터의 출처 인증과 무결성을 보장하는 보안 확장 기술이다. DNSSEC은 RRSIG, DNSKEY, DS, NSEC 등의 레코드를 사용하며, 상위 도메인에서 하위 도메인의 키를 인증하는 신뢰 체인(Chain of Trust) 구조로 동작한다.",
    keywords: ["DNS Spoofing", "캐시 포이즈닝", "DNSSEC", "전자서명", "무결성", "신뢰 체인", "RRSIG", "DNSKEY"],
    subject: "network-security",
  },
  {
    question: "IDS(침입탐지시스템)와 IPS(침입방지시스템)의 차이점을 설명하시오.",
    answer:
      "IDS(Intrusion Detection System)는 네트워크 트래픽이나 시스템 활동을 모니터링하여 침입을 탐지하고 관리자에게 경고(Alert)하는 수동적 보안 시스템이다. IPS(Intrusion Prevention System)는 IDS의 탐지 기능에 더해 탐지된 공격을 실시간으로 차단(Block)하는 능동적 보안 시스템이다. IDS는 네트워크 경로 외부에 미러링 방식으로 설치(Out-of-Band)되는 반면, IPS는 네트워크 경로 상에 인라인(In-Line)으로 설치되어 트래픽을 직접 제어한다. IPS는 오탐(False Positive) 시 정상 트래픽이 차단될 수 있는 위험이 있다.",
    keywords: ["IDS", "IPS", "탐지", "차단", "인라인", "미러링", "수동적", "능동적", "오탐"],
    subject: "network-security",
  },
  {
    question: "Snort 룰(Rule)의 구조를 설명하고, 주요 구성 요소를 서술하시오.",
    answer:
      "Snort 룰은 크게 룰 헤더(Rule Header)와 룰 옵션(Rule Options)으로 구성된다. 룰 헤더는 '액션 프로토콜 출발지IP 출발지포트 방향연산자 목적지IP 목적지포트' 형식이며, 액션에는 alert, log, pass, drop 등이 있다. 룰 옵션은 괄호 안에 세미콜론으로 구분하여 기술하며, msg(경고 메시지), content(패턴 매칭 문자열), sid(룰 고유 ID), rev(룰 버전), classtype(분류), priority(우선순위) 등이 있다. 예시: alert tcp any any -> 192.168.1.0/24 80 (msg:\"Web Attack\"; content:\"/etc/passwd\"; sid:1000001; rev:1;)",
    keywords: ["Snort", "룰 헤더", "룰 옵션", "alert", "content", "sid", "msg", "액션"],
    subject: "network-security",
  },
  {
    question:
      "VPN의 IPSec과 SSL VPN의 차이점을 비교하여 설명하시오.",
    answer:
      "IPSec VPN은 OSI 3계층(네트워크 계층)에서 동작하며, 모든 IP 트래픽을 암호화하여 사이트 간(Site-to-Site) 연결에 주로 사용된다. 별도의 VPN 클라이언트 소프트웨어 설치가 필요하며 터널 모드와 전송 모드를 지원한다. SSL VPN은 OSI 7계층(응용 계층)과 4계층(전송 계층) 사이에서 동작하며, 웹 브라우저만으로 접속 가능하여 원격 접속(Remote Access)에 주로 사용된다. IPSec VPN은 네트워크 전체 접근 제어에 유리하고, SSL VPN은 애플리케이션 단위의 세밀한 접근 제어가 가능하다.",
    keywords: ["IPSec", "SSL VPN", "3계층", "7계층", "Site-to-Site", "Remote Access", "터널 모드", "전송 모드"],
    subject: "network-security",
  },
  {
    question: "IPSec의 AH(Authentication Header)와 ESP(Encapsulating Security Payload)의 차이점을 설명하시오.",
    answer:
      "AH(Authentication Header)는 IP 패킷의 인증과 무결성을 제공하지만 암호화(기밀성)는 제공하지 않으며, IP 프로토콜 번호 51을 사용한다. ESP(Encapsulating Security Payload)는 인증, 무결성에 더해 암호화(기밀성)까지 제공하며, IP 프로토콜 번호 50을 사용한다. AH는 IP 헤더를 포함한 전체 패킷에 대해 인증을 수행하므로 NAT 환경에서 문제가 발생하고, ESP는 페이로드만 암호화하므로 NAT 환경에서 NAT-Traversal을 통해 사용 가능하다. 실무에서는 기밀성까지 제공하는 ESP가 더 널리 사용된다.",
    keywords: ["AH", "ESP", "인증", "무결성", "기밀성", "암호화", "프로토콜 51", "프로토콜 50", "NAT"],
    subject: "network-security",
  },
  {
    question:
      "방화벽의 주요 유형인 패킷 필터링, 상태 검사(Stateful Inspection), 애플리케이션 게이트웨이 방식을 각각 설명하시오.",
    answer:
      "패킷 필터링 방화벽은 IP 주소, 포트 번호, 프로토콜 등 패킷 헤더 정보를 기반으로 ACL(접근제어목록)에 따라 트래픽을 허용/차단하는 방식으로, 처리 속도가 빠르지만 패킷의 내용(페이로드) 검사가 불가하다. 상태 검사 방화벽은 세션의 연결 상태 정보를 유지하는 상태 테이블을 관리하여 연결의 컨텍스트를 기반으로 판단하므로, 패킷 필터링보다 정교한 제어가 가능하다. 애플리케이션 게이트웨이(프록시 방화벽)는 OSI 7계층에서 동작하며 각 애플리케이션 프로토콜별로 프록시를 통해 내용을 분석하므로 가장 정밀한 제어가 가능하지만, 처리 속도가 가장 느리다.",
    keywords: ["패킷 필터링", "상태 검사", "Stateful Inspection", "애플리케이션 게이트웨이", "프록시", "ACL", "상태 테이블", "7계층"],
    subject: "network-security",
  },
  {
    question:
      "DDoS 공격의 3가지 유형(Volumetric, Protocol, Application Layer)을 각각 설명하고 대표적인 공격 기법을 서술하시오.",
    answer:
      "Volumetric(대역폭 소진) 공격은 대량의 트래픽을 발생시켜 네트워크 대역폭을 고갈시키며, UDP Flood, ICMP Flood, DNS Amplification 등이 대표적이다. Protocol(프로토콜 취약점) 공격은 네트워크 프로토콜의 약점을 이용하여 서버나 네트워크 장비의 자원을 소모시키며, SYN Flood, Smurf Attack, Ping of Death 등이 있다. Application Layer(응용 계층) 공격은 HTTP, DNS 등 특정 서비스를 대상으로 소량이지만 정교한 요청을 보내 서버 자원을 소모시키며, HTTP GET/POST Flood, Slowloris, Slow HTTP POST(RUDY) 등이 대표적이다.",
    keywords: ["DDoS", "Volumetric", "Protocol", "Application Layer", "UDP Flood", "SYN Flood", "Slowloris", "대역폭"],
    subject: "network-security",
  },

  // ============================================================
  // 3. 어플리케이션 보안 (application-security) — 10문항
  // ============================================================
  {
    question:
      "SQL Injection 공격의 주요 유형을 설명하고, 대응 방법을 서술하시오.",
    answer:
      "SQL Injection은 웹 애플리케이션의 입력값에 악의적인 SQL 구문을 삽입하여 데이터베이스를 비정상적으로 조작하는 공격이다. 주요 유형으로는 에러 기반(Error-based)으로 에러 메시지를 통해 정보를 획득하는 방식, UNION 기반으로 UNION SELECT를 이용해 추가 데이터를 조회하는 방식, Blind SQL Injection으로 참/거짓 응답 차이나 시간 지연(Time-based)으로 정보를 추론하는 방식이 있다. 대응 방법으로는 PreparedStatement(매개변수화된 쿼리) 사용, 입력값 검증(화이트리스트), 저장 프로시저 사용, 에러 메시지 노출 방지, 최소 권한 DB 계정 사용 등이 있다.",
    keywords: ["SQL Injection", "Error-based", "UNION", "Blind", "PreparedStatement", "매개변수화", "입력값 검증"],
    subject: "application-security",
  },
  {
    question:
      "XSS(Cross-Site Scripting) 공격의 3가지 유형(Stored, Reflected, DOM-based)을 각각 설명하시오.",
    answer:
      "Stored XSS(저장형)는 악성 스크립트가 게시판 등 서버에 저장되어, 다른 사용자가 해당 페이지를 열람할 때 스크립트가 실행되는 방식으로 가장 위험하다. Reflected XSS(반사형)는 악성 스크립트가 포함된 URL을 사용자가 클릭하면, 서버가 해당 입력값을 응답 페이지에 그대로 반사하여 실행되는 방식이다. DOM-based XSS는 서버 응답과 무관하게 클라이언트 측 JavaScript가 DOM을 조작하는 과정에서 악성 스크립트가 실행되는 방식이다. 대응 방법으로는 출력 시 HTML 엔티티 인코딩, 입력값 필터링, CSP(Content Security Policy) 적용, HttpOnly 쿠키 설정 등이 있다.",
    keywords: ["XSS", "Stored", "Reflected", "DOM-based", "인코딩", "필터링", "CSP", "HttpOnly"],
    subject: "application-security",
  },
  {
    question: "CSRF(Cross-Site Request Forgery) 공격의 원리와 방어 방법을 설명하시오.",
    answer:
      "CSRF는 사용자가 인증된 상태(로그인)에서 공격자가 작성한 악성 웹페이지를 방문하면, 사용자의 의도와 무관하게 인증된 세션을 이용하여 서버에 요청을 전송하는 공격이다. 예를 들어 로그인된 사용자가 공격 페이지를 방문하면, 해당 페이지에 포함된 이미지 태그나 폼이 자동으로 비밀번호 변경·송금 등의 요청을 서버로 전송한다. 방어 방법으로는 CSRF 토큰(임의의 난수 값)을 폼에 포함하여 서버에서 검증, Referer/Origin 헤더 검증, SameSite 쿠키 속성 설정, 중요 요청 시 재인증(CAPTCHA, 비밀번호 재입력) 등이 있다.",
    keywords: ["CSRF", "인증된 세션", "CSRF 토큰", "Referer", "SameSite", "재인증"],
    subject: "application-security",
  },
  {
    question: "시큐어 코딩(Secure Coding)의 주요 원칙을 설명하시오.",
    answer:
      "시큐어 코딩은 소프트웨어 개발 시 보안 취약점을 사전에 제거하기 위한 안전한 코딩 기법이다. 주요 원칙으로는 입력 데이터 검증 및 표현(SQL Injection, XSS 방지), 보안 기능(인증, 접근제어, 암호화의 적절한 구현), API 오용 방지, 시간 및 상태(동시성 제어, TOCTOU 방지), 에러 처리(에러 메시지를 통한 정보 노출 방지), 코드 품질(널 포인터 역참조, 자원 해제 등), 캡슐화(내부 데이터 보호)가 있다. 행정안전부에서 발간한 '소프트웨어 개발 보안 가이드'에서 47개 보안 약점을 7가지 유형으로 분류하여 제시하고 있다.",
    keywords: ["시큐어 코딩", "입력 데이터 검증", "보안 기능", "에러 처리", "캡슐화", "행정안전부", "보안 약점"],
    subject: "application-security",
  },
  {
    question:
      "소프트웨어 개발 보안 생명주기(Secure SDLC)의 각 단계별 보안 활동을 설명하시오.",
    answer:
      "요구사항 분석 단계에서는 보안 요구사항을 정의하고 위협 모델링을 수행한다. 설계 단계에서는 보안 아키텍처 설계, 공격 표면 분석, 위협에 대한 대응 설계를 수행한다. 구현 단계에서는 시큐어 코딩 가이드를 적용하고 소스코드 정적 분석(SAST)을 수행한다. 테스트 단계에서는 동적 분석(DAST), 모의 침투 테스트, 퍼징(Fuzzing) 테스트를 실시한다. 배포·운영 단계에서는 보안 패치 관리, 보안 모니터링, 침해사고 대응을 수행하며, 전체 과정에서 지속적인 보안 교육이 이루어져야 한다.",
    keywords: ["Secure SDLC", "위협 모델링", "시큐어 코딩", "SAST", "DAST", "모의 침투", "퍼징"],
    subject: "application-security",
  },
  {
    question:
      "Apache 웹 서버의 주요 보안 설정 항목을 설명하시오.",
    answer:
      "디렉터리 리스팅 차단을 위해 Options에서 Indexes를 제거하여 디렉터리 내 파일 목록 노출을 방지한다. 심볼릭 링크 추적 방지를 위해 FollowSymLinks를 제거한다. ServerTokens Prod, ServerSignature Off 설정으로 서버 버전 정보 노출을 최소화한다. 불필요한 HTTP 메서드(PUT, DELETE, TRACE)를 제한하고, 접근 제어를 위해 Require 지시자를 사용한다. 또한 mod_security(웹 방화벽 모듈) 적용, SSL/TLS 설정(HTTPS), 적절한 타임아웃 설정 등으로 보안을 강화할 수 있다.",
    keywords: ["디렉터리 리스팅", "Indexes", "ServerTokens", "ServerSignature", "HTTP 메서드", "mod_security", "SSL/TLS"],
    subject: "application-security",
  },
  {
    question:
      "웹 애플리케이션의 세션 관리 취약점과 대응 방법을 설명하시오.",
    answer:
      "세션 하이재킹은 공격자가 유효한 세션 ID를 탈취하여 사용자를 사칭하는 공격으로, XSS를 통한 쿠키 탈취나 네트워크 스니핑이 주요 경로이다. 세션 고정(Session Fixation)은 공격자가 미리 지정한 세션 ID를 사용자에게 할당한 후, 해당 사용자가 로그인하면 같은 세션을 공유하는 공격이다. 대응 방법으로는 로그인 성공 시 세션 ID 재발급, HttpOnly·Secure·SameSite 쿠키 속성 설정, 세션 타임아웃 설정, SSL/TLS를 통한 전송 구간 암호화, 동시 세션 제한 등이 있다.",
    keywords: ["세션 하이재킹", "세션 고정", "Session Fixation", "세션 ID 재발급", "HttpOnly", "Secure", "타임아웃"],
    subject: "application-security",
  },
  {
    question:
      "파일 업로드 취약점의 공격 원리와 대응 방법을 설명하시오.",
    answer:
      "파일 업로드 취약점은 웹 애플리케이션에서 업로드된 파일에 대한 검증이 미흡할 때, 공격자가 웹셸(WebShell) 등 악성 스크립트 파일을 업로드하여 서버에서 실행하는 공격이다. 대응 방법으로는 업로드 파일의 확장자를 화이트리스트 방식으로 제한하고, 파일의 Content-Type과 매직 바이트(Magic Bytes)를 서버 측에서 검증한다. 업로드 디렉터리의 실행 권한을 제거하고, 파일명을 랜덤하게 변경하여 저장하며, 웹 루트 외부에 파일을 저장하는 것이 안전하다. 또한 파일 크기 제한과 업로드 파일에 대한 악성코드 검사를 수행해야 한다.",
    keywords: ["파일 업로드", "웹셸", "WebShell", "확장자 제한", "화이트리스트", "실행 권한 제거", "매직 바이트"],
    subject: "application-security",
  },
  {
    question: "HTTP Response Splitting 공격의 원리와 대응 방법을 설명하시오.",
    answer:
      "HTTP Response Splitting은 HTTP 응답 헤더에 개행 문자(CR: \\r, LF: \\n)가 포함된 입력값을 삽입하여, 하나의 HTTP 응답을 두 개로 분리시키는 공격이다. 공격자는 두 번째 응답의 내용을 제어할 수 있어 XSS, 캐시 포이즈닝, 페이지 변조 등의 2차 공격이 가능하다. 대응 방법으로는 HTTP 헤더에 사용되는 모든 사용자 입력값에서 CRLF(\\r\\n) 문자를 필터링하거나 인코딩하고, 헤더 값을 설정하는 API 사용 시 개행 문자가 포함되지 않도록 검증해야 한다.",
    keywords: ["HTTP Response Splitting", "CRLF", "개행 문자", "CR", "LF", "캐시 포이즈닝", "헤더 인젝션"],
    subject: "application-security",
  },
  {
    question: "OWASP Top 10의 주요 항목 5가지를 선택하여 각각 설명하시오.",
    answer:
      "Broken Access Control(취약한 접근 제어)은 인가되지 않은 사용자가 다른 사용자의 데이터나 기능에 접근할 수 있는 취약점이다. Cryptographic Failures(암호화 실패)는 민감 데이터가 평문 저장·전송되거나 취약한 암호 알고리즘을 사용하는 문제이다. Injection은 SQL, OS 명령, LDAP 등의 인젝션 공격으로, 신뢰할 수 없는 데이터가 명령어의 일부로 전달되는 취약점이다. Security Misconfiguration(보안 설정 오류)은 기본 설정 미변경, 불필요한 기능 활성화, 에러 메시지 노출 등의 문제이다. Vulnerable and Outdated Components(취약하고 오래된 컴포넌트)는 알려진 취약점이 있는 라이브러리나 프레임워크를 사용하는 문제이다.",
    keywords: ["OWASP", "Broken Access Control", "Injection", "Cryptographic Failures", "Security Misconfiguration", "Vulnerable Components"],
    subject: "application-security",
  },

  // ============================================================
  // 4. 정보보안 일반 (security-general) — 10문항
  // ============================================================
  {
    question: "대칭키 암호화와 비대칭키 암호화를 비교하여 설명하시오.",
    answer:
      "대칭키 암호화는 암호화와 복호화에 동일한 키를 사용하는 방식으로, 속도가 빠르지만 키 분배 문제가 있으며, 대표 알고리즘으로 AES, DES, 3DES, SEED, ARIA 등이 있다. 비대칭키(공개키) 암호화는 공개키로 암호화하고 개인키로 복호화하는 방식으로, 키 분배 문제가 해결되지만 처리 속도가 느리며, 대표 알고리즘으로 RSA, ECC, ElGamal 등이 있다. 실무에서는 하이브리드 방식으로, 비대칭키로 대칭키를 안전하게 교환한 후 대칭키로 실제 데이터를 암호화하는 방식을 주로 사용한다. n명이 통신할 때 대칭키는 n(n-1)/2개, 비대칭키는 2n개의 키가 필요하다.",
    keywords: ["대칭키", "비대칭키", "공개키", "개인키", "AES", "RSA", "키 분배", "하이브리드"],
    subject: "security-general",
  },
  {
    question:
      "전자서명의 원리를 설명하고, 전자서명이 제공하는 보안 특성(무결성, 인증, 부인방지)을 서술하시오.",
    answer:
      "전자서명은 송신자가 메시지의 해시값을 자신의 개인키로 암호화하여 생성하며, 수신자는 송신자의 공개키로 복호화하여 검증한다. 무결성(Integrity)은 서명된 메시지가 전송 중 변조되지 않았음을 해시값 비교를 통해 확인하는 것이다. 인증(Authentication)은 공개키로 검증이 성공하면 해당 개인키의 소유자가 서명했음을 확인할 수 있는 것이다. 부인방지(Non-repudiation)는 서명자만이 개인키를 보유하므로, 서명 사실을 부인할 수 없게 하는 것이다.",
    keywords: ["전자서명", "해시", "개인키", "공개키", "무결성", "인증", "부인방지"],
    subject: "security-general",
  },
  {
    question: "PKI(Public Key Infrastructure)의 구성요소와 동작 과정을 설명하시오.",
    answer:
      "PKI는 공개키 기반의 인증 체계로, 주요 구성요소로는 인증기관(CA: Certificate Authority), 등록기관(RA: Registration Authority), 인증서 저장소(디렉터리/LDAP), 사용자(최종 엔티티)가 있다. CA는 인증서를 발급·관리·폐지하는 핵심 기관이고, RA는 사용자의 신원을 확인하여 CA에 인증서 발급을 요청하는 중개 기관이다. 동작 과정은 사용자가 키 쌍을 생성하고 공개키와 함께 인증서 발급을 RA에 신청하면, RA가 신원을 확인하고 CA에 전달하며, CA가 자신의 개인키로 서명한 인증서(X.509)를 발급하여 디렉터리에 저장한다.",
    keywords: ["PKI", "CA", "RA", "인증서", "X.509", "공개키", "디렉터리", "LDAP"],
    subject: "security-general",
  },
  {
    question:
      "블록 암호 운용 모드인 ECB, CBC, CFB, OFB, CTR의 특징을 비교하여 설명하시오.",
    answer:
      "ECB(Electronic Codebook)는 각 블록을 독립적으로 암호화하여 구현이 간단하지만, 동일 평문 블록이 동일 암호문을 생성하여 패턴이 노출되므로 사용을 권장하지 않는다. CBC(Cipher Block Chaining)는 이전 암호문 블록을 현재 평문 블록과 XOR 후 암호화하며, IV(초기화 벡터)가 필요하고 가장 널리 사용된다. CFB(Cipher Feedback)와 OFB(Output Feedback)는 블록 암호를 스트림 암호처럼 사용하며, CFB는 이전 암호문을 피드백하고 OFB는 암호화 출력을 피드백한다. CTR(Counter)은 카운터 값을 암호화하여 키 스트림을 생성하고 평문과 XOR하며, 병렬 처리가 가능하여 성능이 우수하다.",
    keywords: ["ECB", "CBC", "CFB", "OFB", "CTR", "IV", "XOR", "블록 암호", "운용 모드"],
    subject: "security-general",
  },
  {
    question: "Kerberos 인증 프로토콜의 동작 과정을 설명하시오.",
    answer:
      "Kerberos는 신뢰할 수 있는 제3자(KDC: Key Distribution Center)를 기반으로 한 대칭키 인증 프로토콜로, KDC는 AS(Authentication Server)와 TGS(Ticket Granting Server)로 구성된다. 먼저 사용자가 AS에 인증을 요청하면, AS는 사용자 확인 후 TGT(Ticket Granting Ticket)를 발급한다. 사용자가 TGT를 TGS에 제출하며 특정 서비스 접근을 요청하면, TGS는 서비스 티켓(ST)을 발급한다. 사용자는 서비스 티켓을 해당 서비스 서버에 제출하여 인증을 완료하고, 이 과정에서 사용자의 비밀번호는 네트워크에 직접 전송되지 않는다.",
    keywords: ["Kerberos", "KDC", "AS", "TGS", "TGT", "서비스 티켓", "대칭키", "제3자 인증"],
    subject: "security-general",
  },
  {
    question: "암호학적 해시 함수의 특성과 대표적인 종류를 설명하시오.",
    answer:
      "암호학적 해시 함수는 임의 길이의 입력을 고정 길이의 해시값으로 변환하는 일방향 함수이다. 주요 특성으로는 역상 저항성(해시값으로부터 원본을 구하기 어려움), 제2역상 저항성(같은 해시값을 가진 다른 입력을 찾기 어려움), 충돌 저항성(같은 해시값을 가진 두 입력을 찾기 어려움)이 있다. 또한 눈사태 효과(입력의 미세한 변화가 출력에 큰 변화를 일으킴)가 있어야 한다. 대표적인 해시 함수로는 MD5(128비트, 안전하지 않음), SHA-1(160비트, 취약), SHA-256/SHA-3(안전) 등이 있으며, 현재 SHA-256 이상을 권장한다.",
    keywords: ["해시 함수", "역상 저항성", "충돌 저항성", "일방향", "MD5", "SHA-256", "SHA-3", "눈사태 효과"],
    subject: "security-general",
  },
  {
    question:
      "접근통제 모델인 BLP(Bell-LaPadula), Biba, Clark-Wilson 모델을 각각 설명하시오.",
    answer:
      "BLP(Bell-LaPadula) 모델은 기밀성을 중시하는 군사용 모델로, 'No Read Up(상위 등급 읽기 금지)'과 'No Write Down(하위 등급 쓰기 금지)' 규칙을 적용하여 기밀 정보의 하향 유출을 방지한다. Biba 모델은 무결성을 중시하는 모델로, 'No Read Down(하위 등급 읽기 금지)'과 'No Write Up(상위 등급 쓰기 금지)' 규칙을 적용하여 신뢰할 수 없는 데이터에 의한 오염을 방지하며, BLP와 정반대이다. Clark-Wilson 모델은 상업적 환경의 무결성 모델로, 잘 정의된 트랜잭션(TP: Transformation Procedure)을 통해서만 데이터를 변경하고, 직무 분리(Separation of Duty)를 적용한다.",
    keywords: ["BLP", "Biba", "Clark-Wilson", "기밀성", "무결성", "No Read Up", "No Write Down", "직무 분리"],
    subject: "security-general",
  },
  {
    question:
      "생체인증에서 FAR(False Acceptance Rate), FRR(False Rejection Rate), CER(Crossover Error Rate)의 개념을 설명하시오.",
    answer:
      "FAR(오인식률, False Acceptance Rate)은 등록되지 않은 사용자를 정당한 사용자로 잘못 인식하여 허용하는 비율로, 타인수락률이라고도 하며 보안성과 관련된다. FRR(오거부율, False Rejection Rate)은 등록된 정당한 사용자를 거부하는 비율로, 본인거부률이라고도 하며 편의성과 관련된다. CER(교차오류율, Crossover Error Rate)은 FAR과 FRR이 같아지는 지점의 값으로, CER이 낮을수록 생체인증 시스템의 정확도가 높다. 보안 수준을 높이면(임계값 상향) FAR은 감소하지만 FRR은 증가하는 트레이드오프 관계가 있다.",
    keywords: ["FAR", "FRR", "CER", "오인식률", "오거부율", "교차오류율", "생체인증", "트레이드오프"],
    subject: "security-general",
  },
  {
    question: "Diffie-Hellman 키 교환 알고리즘의 원리를 설명하시오.",
    answer:
      "Diffie-Hellman은 두 당사자가 안전하지 않은 채널을 통해 공통의 비밀 키(세션 키)를 합의하는 키 교환 프로토콜이다. 양측이 공개 매개변수(큰 소수 p와 생성자 g)에 합의한 후, 각자 비밀 값(a, b)을 선택하고 g^a mod p, g^b mod p를 계산하여 상대방에게 전송한다. 각자 상대방의 값에 자신의 비밀 값을 지수로 적용하면 동일한 공유 비밀(g^(ab) mod p)을 얻는다. 이산대수 문제의 어려움에 안전성의 기반을 두지만, 중간자 공격(MITM)에는 취약하므로 인증과 함께 사용해야 한다.",
    keywords: ["Diffie-Hellman", "키 교환", "이산대수", "공유 비밀", "소수", "생성자", "MITM"],
    subject: "security-general",
  },
  {
    question:
      "인증서 폐지 방법인 CRL(Certificate Revocation List)과 OCSP(Online Certificate Status Protocol)를 비교 설명하시오.",
    answer:
      "CRL은 CA가 폐지된 인증서 목록을 주기적으로 발행하여 디렉터리에 게시하는 방식으로, 클라이언트가 CRL을 다운로드하여 인증서의 유효성을 확인한다. CRL은 발행 주기 사이에 폐지된 인증서를 즉시 반영하지 못하는 시간 지연 문제가 있고, 목록이 커지면 다운로드 부하가 발생한다. OCSP는 인증서 상태를 실시간으로 질의할 수 있는 온라인 프로토콜로, OCSP Responder 서버에 특정 인증서의 상태를 즉시 확인할 수 있어 CRL의 시간 지연 문제를 해결한다. OCSP Stapling은 웹 서버가 OCSP 응답을 미리 확보하여 클라이언트에 제공함으로써 성능을 개선한 방식이다.",
    keywords: ["CRL", "OCSP", "인증서 폐지", "실시간", "CA", "OCSP Responder", "OCSP Stapling", "시간 지연"],
    subject: "security-general",
  },

  // ============================================================
  // 5. 정보보안 관리 및 법규 (security-management) — 10문항
  // ============================================================
  {
    question: "ISMS-P 인증 체계의 개념과 인증 기준 구조를 설명하시오.",
    answer:
      "ISMS-P(정보보호 및 개인정보보호 관리체계 인증)는 기존 ISMS(정보보호 관리체계)와 PIMS(개인정보보호 관리체계)를 통합한 인증 체계로, 과학기술정보통신부와 개인정보보호위원회가 공동 운영한다. 인증 기준은 관리체계 수립 및 운영(16개), 보호대책 요구사항(64개), 개인정보 처리 단계별 요구사항(22개)의 3개 영역, 총 102개 인증 기준으로 구성된다. ISMS 인증은 일정 기준 이상의 ISP, IDC, 의료기관, 교육기관 등에 의무이며, 3년 유효에 매년 사후 심사를 받아야 한다.",
    keywords: ["ISMS-P", "관리체계", "보호대책", "개인정보", "102개", "인증", "사후 심사"],
    subject: "security-management",
  },
  {
    question: "OECD 개인정보 보호 8원칙을 설명하시오.",
    answer:
      "수집 제한의 원칙은 적법하고 공정한 수단으로 정보주체의 동의를 얻어 수집해야 한다는 것이다. 정보 정확성의 원칙은 이용 목적에 필요한 범위 내에서 정확하고 완전하며 최신의 상태로 유지해야 한다는 것이다. 목적 명확화의 원칙은 수집 시 목적을 명확히 하고, 이용 제한의 원칙은 명확화된 목적 외로 이용·제공하지 않아야 한다. 안전보호의 원칙은 분실·훼손·유출 등에 대해 합리적 안전 조치를 취해야 한다. 공개의 원칙, 개인참여의 원칙(열람·정정·삭제 요구권), 책임의 원칙(관리자의 책임 준수)으로 총 8가지이다.",
    keywords: ["수집 제한", "정보 정확성", "목적 명확화", "이용 제한", "안전보호", "공개", "개인참여", "책임"],
    subject: "security-management",
  },
  {
    question:
      "위험분석 방법론 중 정량적 분석과 정성적 분석을 비교하여 설명하시오.",
    answer:
      "정량적 위험분석은 자산의 가치와 위협의 빈도, 취약성을 금전적(화폐) 가치로 수치화하여 분석하는 방법으로, ALE(연간 예상 손실액) = SLE(단일 예상 손실액) × ARO(연간 발생률)로 계산한다. 객관적이고 비용 대비 효과 분석에 유리하지만, 정확한 데이터 수집이 어렵고 시간과 비용이 많이 소요된다. 정성적 위험분석은 위험을 수치가 아닌 높음/중간/낮음 등의 등급으로 평가하는 방법으로, 델파이법, 시나리오법, 순위결정법 등이 있다. 정량적 분석보다 빠르고 간편하지만 주관적이며, 결과에 대한 객관적 비교가 어렵다.",
    keywords: ["정량적", "정성적", "ALE", "SLE", "ARO", "델파이", "시나리오", "금전적 가치"],
    subject: "security-management",
  },
  {
    question: "BCP, DRP, BIA의 개념과 상호 관계를 설명하시오.",
    answer:
      "BCP(Business Continuity Planning, 업무연속성계획)는 재해·재난 발생 시 핵심 비즈니스 기능을 지속하거나 빠르게 복구하기 위한 종합적인 계획이다. DRP(Disaster Recovery Plan, 재해복구계획)는 BCP의 하위 개념으로, IT 시스템과 데이터의 복구에 초점을 맞춘 기술적 계획이다. BIA(Business Impact Analysis, 업무영향분석)는 BCP 수립의 첫 단계로, 각 업무 프로세스의 중단이 조직에 미치는 영향을 분석하여 핵심 업무 기능과 복구 우선순위를 결정한다. 즉, BIA를 통해 핵심 업무를 식별하고, 이를 기반으로 BCP와 DRP를 수립한다.",
    keywords: ["BCP", "DRP", "BIA", "업무연속성", "재해복구", "업무영향분석", "복구 우선순위"],
    subject: "security-management",
  },
  {
    question: "RPO, RTO, MTD의 개념을 설명하고 상호 관계를 서술하시오.",
    answer:
      "RPO(Recovery Point Objective, 목표 복구 시점)는 데이터 손실을 허용할 수 있는 최대 시간으로, 마지막 백업 시점부터 장애 발생 시점까지의 허용 가능한 데이터 손실량을 의미한다. RTO(Recovery Time Objective, 목표 복구 시간)는 장애 발생 후 시스템을 정상 운영 상태로 복구하는 데 걸리는 목표 시간이다. MTD(Maximum Tolerable Downtime, 최대 허용 중단 시간)는 비즈니스가 허용할 수 있는 최대 중단 시간으로, RTO보다 크거나 같아야 한다. 세 지표는 BIA를 통해 결정되며, RPO는 백업 전략, RTO는 복구 전략 수립의 기준이 된다.",
    keywords: ["RPO", "RTO", "MTD", "목표 복구 시점", "목표 복구 시간", "최대 허용 중단 시간", "백업", "복구"],
    subject: "security-management",
  },
  {
    question: "디지털 포렌식의 5대 원칙을 설명하시오.",
    answer:
      "정당성의 원칙은 증거가 적법한 절차와 방법으로 수집되어야 법적 효력이 있다는 것이다. 재현의 원칙은 동일한 조건에서 같은 결과가 재현될 수 있어야 한다는 것이다. 신속성의 원칙은 디지털 증거는 휘발성이 있으므로 가능한 빠르게 수집해야 한다는 것이다. 연계보관성(Chain of Custody)의 원칙은 증거의 수집·이송·분석·보관·제출까지 전 과정에서 담당자와 변경 이력이 기록되어 무결성이 보장되어야 한다는 것이다. 무결성의 원칙은 수집된 증거가 위·변조되지 않았음을 해시값 등을 통해 증명할 수 있어야 한다는 것이다.",
    keywords: ["정당성", "재현", "신속성", "연계보관성", "Chain of Custody", "무결성", "해시값", "디지털 포렌식"],
    subject: "security-management",
  },
  {
    question: "침해사고 대응 7단계를 순서대로 설명하시오.",
    answer:
      "1단계 사전 준비는 침해사고 대응팀 구성, 대응 절차 수립, 도구 준비 등을 수행한다. 2단계 탐지 및 보고는 보안 장비, 로그 분석 등을 통해 침해사고를 탐지하고 관련 부서에 보고한다. 3단계 초기 대응은 사고 유형과 범위를 파악하고 증거를 확보한다. 4단계 대응 전략 수립은 분석 결과를 바탕으로 구체적인 대응 방안을 결정한다. 5단계 사고 조사는 데이터 수집·분석을 통해 공격 원인, 경로, 피해 범위를 상세히 조사한다. 6단계 보고서 작성은 사고 내용과 대응 과정을 문서화한다. 7단계 복구 및 해결은 시스템을 정상 상태로 복구하고 재발 방지 대책을 수립한다.",
    keywords: ["사전 준비", "탐지", "초기 대응", "대응 전략", "사고 조사", "보고서", "복구", "7단계"],
    subject: "security-management",
  },
  {
    question: "개인정보 영향평가(PIA)의 개념과 수행 절차를 설명하시오.",
    answer:
      "개인정보 영향평가(PIA: Privacy Impact Assessment)는 개인정보를 수집·이용하는 새로운 정보시스템의 도입이나 기존 시스템의 중대한 변경 시, 개인정보 침해 위험을 사전에 조사·분석·평가하여 개선 방안을 도출하는 제도이다. 공공기관은 일정 규모(5만 명 이상 민감정보·고유식별정보, 50만 명 이상 개인정보 등) 이상의 개인정보 파일을 구축·변경할 때 의무적으로 수행해야 한다. 수행 절차는 사전 분석(대상 선정) → 영향평가 수행(개인정보 흐름 분석, 침해요인 분석, 위험도 산정) → 개선 계획 수립 → 이행 점검 순서로 진행되며, 개인정보보호위원회에 평가 결과를 제출한다.",
    keywords: ["PIA", "개인정보 영향평가", "침해 위험", "사전 분석", "개선 계획", "공공기관", "의무"],
    subject: "security-management",
  },
  {
    question: "정보보호 관리체계(ISMS) 수립 절차를 단계별로 설명하시오.",
    answer:
      "1단계 관리체계 범위 설정은 보호해야 할 정보자산과 조직, 서비스의 범위를 정의한다. 2단계 경영진 책임 및 조직 구성은 최고경영자의 참여를 확보하고 정보보호 조직 및 역할을 수립한다. 3단계 위험 관리는 자산 식별, 위협·취약성 분석, 위험 평가를 수행하고 수용 가능한 위험 수준을 결정한다. 4단계 정보보호 대책 구현은 위험 분석 결과를 바탕으로 관리적·기술적·물리적 보호 대책을 선택하여 구현한다. 5단계 사후 관리는 내부 감사, 관리 검토를 통해 관리체계의 효과를 점검하고 지속적으로 개선(PDCA 사이클)한다.",
    keywords: ["ISMS", "범위 설정", "위험 관리", "보호 대책", "사후 관리", "PDCA", "경영진 책임"],
    subject: "security-management",
  },
  {
    question:
      "CC(Common Criteria) 인증의 개념과 EAL(Evaluation Assurance Level) 등급을 설명하시오.",
    answer:
      "CC(Common Criteria, 공통평가기준)는 IT 제품 및 시스템의 보안성을 국제적으로 표준화된 기준(ISO/IEC 15408)에 따라 평가하는 인증 체계이다. 보호프로파일(PP)은 특정 제품군에 대한 보안 요구사항 집합이고, 보안목표명세서(ST)는 특정 제품의 보안 목표를 기술한 문서이다. EAL 등급은 1~7단계로 구분되며, EAL1(기능 시험)은 가장 낮은 보증 수준이고, EAL4(체계적 설계·시험·검토)는 상용 제품에서 일반적으로 달성 가능한 최고 수준이며, EAL7(정형적 설계 검증 및 시험)은 가장 높은 보증 수준으로 군사·국가 기밀 시스템에 적용된다.",
    keywords: ["CC", "Common Criteria", "EAL", "ISO 15408", "보호프로파일", "PP", "보안목표명세서", "ST"],
    subject: "security-management",
  },
];
