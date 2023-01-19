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

[Read More](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/07-Input_Validation_Testing/18-Testing_for_Server_Side_Template_Injection "OWASP SSTI")

## XXE

### Summary
An XML External Entity attack is a type of attack against an application that parses XML input. This attack occurs when XML input containing a reference to an external entity is processed by a weakly configured XML parser. This attack may lead to the disclosure of confidential data, denial of service, server side request forgery, port scanning from the perspective of the machine where the parser is located, and other system impacts.

[Read More](https://owasp.org/www-community/vulnerabilities/XML_External_Entity_(XXE)_Processing "OWASP XXE")

## Insecure Deserialization

### Summary
Serialization is the process of turning some object into a data format that can be restored later. People often serialize objects in order to save them to storage, or to send as part of communications.

Deserialization is the reverse of that process, taking data structured from some format, and rebuilding it into an object. Today, the most popular data format for serializing data is JSON. Before that, it was XML.

However, many programming languages offer a native capability for serializing objects. These native formats usually offer more features than JSON or XML, including customizability of the serialization process.

Unfortunately, the features of these native deserialization mechanisms can be repurposed for malicious effect when operating on untrusted data. Attacks against deserializers have been found to allow denial-of-service, access control, and remote code execution (RCE) attacks.

[Read More](https://cheatsheetseries.owasp.org/cheatsheets/Deserialization_Cheat_Sheet.html) "OWASP Insecure Deserialization")

## SSRF

### Summary
SSRF flaws occur whenever a web application is fetching a remote resource without validating the user-supplied URL. It allows an attacker to coerce the application to send a crafted request to an unexpected destination, even when protected by a firewall, VPN, or another type of network access control list (ACL).

[Read More](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/ "OWASP SSRF")
