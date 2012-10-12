# FocusIn

## Overview

This is a bookmarklet tool to aid the reading of websites.

## Usage

It is intended to be used by people with disabilities that cause them to get distracted by other content on the page.

These disabilities may include:
- Dyslexia
- ADHD
- ASD

## Instructions

###To install

1. Add the following below as a bookmark. 
*I find it works best if it is on your bookmarks bar.*

`javascript:(function(){function%20gapMover(a){var%20b=a.clientY;var%20c=b-GapHeight/2+"px";var%20d=b+GapHeight/2+"px";document.getElementById("fcsn-t").style.height=c;document.getElementById("fcsn-b").style.top=d}function%20toggle(){if(fcsn===true){fcsn=false;document.getElementById("fcsn-t").style.display="none";document.getElementById("fcsn-b").style.display="none";document.removeEventListener("mousemove",gapMover,false);if(document.all){document.getElementById("fcsn-c").innerText="Enable%20FocusIn"}else{document.getElementById("fcsn-c").textContent="Enable%20FocusIn"}}else{fcsn=true;document.getElementById("fcsn-t").style.display="block";document.getElementById("fcsn-b").style.display="block";document.addEventListener("mousemove",gapMover,false);if(document.all){document.getElementById("fcsn-c").innerText="Disable%20FocusIn"}else{document.getElementById("fcsn-c").textContent="Disable%20FocusIn"}}}if(!document.getElementById("fcsn-c")){var%20fcsn=true;var%20fcsnT=document.createElement("div");fcsnT.setAttribute("id","fcsn-t");var%20fcsnB=document.createElement("div");fcsnB.setAttribute("id","fcsn-b");var%20fcsnC=document.createElement("div");fcsnC.setAttribute("id","fcsn-c");var%20body=document.body;body.insertBefore(fcsnT,body.childNodes[0]);body.insertBefore(fcsnB,body.childNodes[0]);body.insertBefore(fcsnC,body.childNodes[0]);if(document.all){document.getElementById("fcsn-c").innerText="Disable%20FocusIn"}else{document.getElementById("fcsn-c").textContent="Disable%20FocusIn"}var%20GapHeight=100;var%20fcsn=true;document.getElementById("fcsn-t").style.background="rgba(0,0,0,0.7)";document.getElementById("fcsn-t").style.position="fixed";document.getElementById("fcsn-t").style.width="100%";document.getElementById("fcsn-t").style.left="0";document.getElementById("fcsn-t").style.top="-30px";document.getElementById("fcsn-t").style.borderBottom="30px%20solid%20rgba(0,0,0,.7)";document.getElementById("fcsn-t").style.zIndex="1000000";document.getElementById("fcsn-b").style.background="rgba(0,0,0,0.7)";document.getElementById("fcsn-b").style.position="fixed";document.getElementById("fcsn-b").style.width="100%";document.getElementById("fcsn-b").style.left="0";document.getElementById("fcsn-b").style.paddingTop="30px";document.getElementById("fcsn-b").style.borderTop="30px%20solid%20rgba(0,0,0,.7)";document.getElementById("fcsn-b").style.height="100%";document.getElementById("fcsn-b").style.zIndex="1000000";document.getElementById("fcsn-c").style.borderRadius="3px";document.getElementById("fcsn-c").style.border="1px%20solid%20#ccc";document.getElementById("fcsn-c").style.background="#56b3e6";document.getElementById("fcsn-c").style.display="inline-block";document.getElementById("fcsn-c").style.right="10px";document.getElementById("fcsn-c").style.padding="5px%2010px";document.getElementById("fcsn-c").style.cursor="pointer";document.getElementById("fcsn-c").style.zIndex="1000002";document.getElementById("fcsn-c").style.position="fixed"}document.addEventListener("mousemove",gapMover,false);document.getElementById("fcsn-c").addEventListener("click",toggle,false)})();`

###To use

1. Browse to your website of choice.
2. Activate bookmark.
3. Enjoy.

## Browsers

It works, in principle, in:
+ Internet Explorer 9
+ Google Chrome (latest \- 22)
+ Firefox (latest \- 16)
+ and probably other standards compliant browsers.

Please submit an issue if there are any websites or browsers which it is not behaving in. I will try to fix the issue or give an alternative. I am not intending to support anything below IE 8\.



## Roadmap

1. Remove dependance on jquery
2. Browser testing
3. Customisable

## Copyright and License

Copyright (c) 2012 Laura Dickinson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.