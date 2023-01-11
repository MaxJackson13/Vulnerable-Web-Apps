# Vulnerable-Web-Apps

A series of intentionally vulnerable web applications to help me learn node.js and how web application vulnerabilities arise and can be mitigated.

### There are currently apps that cover 
* SSTI
* XXE & Insecure Deserialization
* SSRF

All apps are dockerized and served on localhost:5000 

## SSTI

### Summary
Web applications commonly use server side templating technologies (Jinja2, Twig, FreeMaker, etc.) to generate dynamic HTML responses. Server Side Template Injection vulnerabilities (SSTI) occur when user input is embedded in a template in an unsafe manner and results in remote code execution on the server. Any features that support advanced user-supplied markup may be vulnerable to SSTI including wiki-pages, reviews, marketing applications, CMS systems etc. Some template engines employ various mechanisms (eg. sandbox, whitelisting, etc.) to protect against SSTI.

[Read More](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/07-Input_Validation_Testing/18-Testing_for_Server_Side_Template_Injection "OWASP")

### Summary
SSRF flaws occur whenever a web application is fetching a remote resource without validating the user-supplied URL. It allows an attacker to coerce the application to send a crafted request to an unexpected destination, even when protected by a firewall, VPN, or another type of network access control list (ACL).

[Read More](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/ "OWASP")
