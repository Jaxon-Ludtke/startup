# CS260 Notes

## Assignment 1 Reflection
For this first assignment, I learned how to clone a repository, commit a repository, and push a repository. I also learned other basic navigation tools/commands of GitHub, like `git add`, `git fetch`, `git status`, etc. through the reading given. I also learned some basic markdown syntax for GitHub files like this. 

## AWS EC2 Assignment
Public IP for server: 52.71.196.124.

I learned that files, directories, and even code can be manipulated in a terminal. At its core, the terminal (like git bash, for example) is the stripped down version of a PC's software. Once it's mastered, I can be a much more efficient developer, as well as have newer, better ways of navigating my way around my PC. I also learned that the internet was largely derived from the Department of Defense's efforts during the Cold War to maintain communications incase of a nuclear war. 

ssh -i [key pair file] ubuntu@[ip address] <=== This command is widely used and important. Ssh means secure shell, the key pair file is the key developed to get into my server that I have, ubuntu@ip_address is specifying the amazon server operatings system (ubuntu linux) and the address is the IP address to my server. This is the breakdown of this important command.

It's also worth noting that AWS is extremely popular, and once it's mastered, there's a variety of different services I have at my disposal. Even getting proficient at serverwork unlocks a completely new level of harnessing computers and development that I previously wouldn't have had. 

## AWS Route 53 Assignment

I learned that A records route your domain name to an IP, and CNAME records route domains to other domains. I also learned that connections to servers usually go through a process where my computer checks to see if a domain name is cached in my browser or operating system first, and if not, it will go to a DNS server to look up the domain name related to the IP, then finally connect to it. 

## Caddy Reflection - What is it?

Caddy acts like a security guard, as well as a service to help balance and serve incoming requests. If it sees a request that needs static files, it will hand it to the one requesting it. If it needs other programs to handle requests, it will also assist in that process. 

As a sidenote, I also learned you can SSH into your server and alter the files in that server as you please, and even code in that server through your SSH, not even on an IDE downloaded locally. It can all be remotely coded. 

## CodePen Assignment Notes/Reflection

The difference between block-level elements and in-line elements - Block-level elements generally start a new line, create the structure of the page, and have "blocks" - like paragraphs, sections, etc. Common block elements include `<p>`, `<div>`, `<header>`, `<footer>`, etc. In-line elements are modifications to words "in a line", they stay in the same line of text. Examples include bolding a word, images, hyperlinks, etc. Examples include `<span>`, `<a>`, `<img>`, etc. 

I'm also beginning to see the structure of webpages and web applications more clearly. HTML is purely skeletal, with little to no affect on aesthetics or function. CSS/JavaScript/React add the functionality, and the aesthetics. When each language can be compartmentalized like that, it's easier to have a mental model of how websites are made and how to optimize different parts of a web application. 

