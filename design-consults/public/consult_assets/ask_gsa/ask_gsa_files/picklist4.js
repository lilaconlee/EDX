function picklist(a,b,d,e,f,c,g,h,m){if(a){if(!this.sanityCheck())return null;this.setup(a,b,d,e,f,c,g,h,m);this.nonelabel=pl.noneLabel;this.nalabel=pl.naLabel}}picklist.prototype.sanityCheck=function(){if(picklist.loadFailure)return!1;if("undefined"==typeof pl){wait(1E3);if("undefined"!=typeof pl)return!0;picklist.loadFailure=!0;window.location.replace(UserContext.getUrl("/ex/errorduringprocessing.jsp?retURL\x3d")+escape(window.location.pathname+window.location.search));return!1}return!0};
picklist.prototype.setup=function(a,b,d,e,f,c,g,h,m){this.id=a;this.attributes=c;a=!isFinite(b)&&b.match(/^0Nt/);this.values=this.filterValues(a?d:b,m);this.initialValue=f;this.controller_id=e;this.mapping=null!=e&&null!=d?eval("pl.map_"+d):{};this.firstRound=!0;this.nullable=g;this.isValid=h;this.loaded=!1;if(null==picklist.picklists){picklist.picklists={};var k=window.onload;window.onload=function(){picklist.initAll();k&&k()}}picklist.picklists[this.id]=this;this.labelEl=null};
picklist.prototype.filterValues=function(a,b){var d=pl["vals_"+a];if(b){for(var e=pl["filter_"+a],f=[],c=0;c<d.length;c++)b==e[c]&&(f.push(d[2*c]),f.push(d[2*c+1]));return f}return d};
picklist.prototype.onLoad=function(){if(!this.loaded){this.loaded=!0;if(picklist.picklists[this.controller_id])picklist.picklists[this.controller_id].onLoad();var a=getElementByIdCS(this.id);a&&(this.container=a.parentNode,a=null,this.isDependent()&&(a=getElementByIdCS(this.controller_id)),a?(a.dependents?a.dependents.push(this):(a.dependents=[this],a.getControllingValue=picklist.getControllingValue,"checkbox"==a.type?(a.dplOldHandler=a.onclick,a.onclick=picklist.onControllerChange):(a.dplOldHandler=
a.onchange,a.onchange=picklist.onControllerChange)),this.generate(a.getControllingValue())):this.generate(null))}};picklist.prototype.isDependent=function(){return null!=this.controller_id};picklist.prototype.condRequired=function(a,b){if(a&&!this.nullable){for(var d=b?/requiredInput/:/condRequiredInput/,e=b?"condRequiredInput":"requiredInput";a&&!d.test(a.className);)a=a.parentNode;a&&(a.className=a.className.replace(d,e))}};
picklist.prototype.addOption=function(a,b,d,e){b=new Option(d,b);try{a.add(b,a.options[e])}catch(f){a.add(b,e)}};picklist.prototype.unescape=function(a){a=a.replace(/\&quot;/g,'"');a=a.replace(/\&#39;/g,"'");return a=unescapeHTML(a)};
picklist.prototype.generate=function(a,b){var d=this.container.firstChild,e=d.value==picklistNAMarker?"":d.value;if(b&&!document.getElementById("picklist-trigger-state")){var f=document.createElement("input");f.setAttribute("type","hidden");f.setAttribute("id","picklist-trigger-state");document.body.appendChild(f)}b||(b=!!document.getElementById("picklist-trigger-state"));var c=[];c.push("\x3cselect "+this.attributes+"\x3e");for(var g=new Bitset(this.mapping[a]),h=0,f=!0,h=0;h<this.values.length;h+=
2)if(!this.isDependent()||g.testBit(h/2))f=!1,c.push('\x3coption value\x3d"',this.values[h],'"\x3e',this.values[h+1]);c.push("\x3c/select\x3e");this.container.innerHTML=c.join("");c=this.container.firstChild;c.value=e;g=""!=e&&c.value==e;if(this.firstRound&&(!g&&""!=this.initialValue[0]&&this.initialValue[0]!=picklistNAMarker)&&(!this.isDependent()||this.isDependent()&&!b))e=this.unescape(this.initialValue[0]),this.addOption(c,e,this.unescape(this.initialValue[1]),0),c.value=e,g=""!=e&&c.value==e;
this.isDependent()&&f?this.addOption(c,picklistNAMarker,this.nonelabel,0):(this.nullable||1!=c.options.length&&!g)&&this.addOption(c,"",this.nonelabel,0);this.isDependent()&&(this.condRequired(c,f),this.condRequired(this.labelEl,f));c.selectedIndex=0;c.value=e;if(c.value!=e||""==e)c.selectedIndex=0;c.dependents=d.dependents;c.onchange=d.onchange;c.onclick=d.onclick;c.getControllingValue=d.getControllingValue;c.dplOldHandler=d.dplOldHandler;if(!this.firstRound&&(""!=e||""==e&&c.value!=picklistNAMarker)&&
!g)c.dependents?picklist.onControllerChange.apply(c):c.dplOldHandler&&c.dplOldHandler();f&&1>=c.options.length&&this.disable();this.firstRound=!1};picklist.prototype.disable=function(){this.container.firstChild.disabled=!0;var a=document.createElement("input");a.type="hidden";a.name=this.id;a.value=this.isDependent()?picklistNAMarker:"";this.container.appendChild(a)};
function picklistForInlineEditing(a,b,d,e,f,c,g,h,m,k){if(a){if(!this.sanityCheck())return null;this.onGenerate=k;k=!isFinite(b)&&b.match(/^0Nt/);this.setup(a,b,k?d:b,e,f,c,g,h,m);this.nonelabel=pl.noneLabel;this.nalabel=pl.naLabel}}picklistForInlineEditing.prototype=new picklist;picklistForInlineEditing.prototype.generate=function(a){picklist.prototype.generate.call(this,a);this.onGenerate&&"function"===typeof this.onGenerate&&this.onGenerate.apply(this,[this])};
function multiPicklist(a,b,d,e,f,c,g,h,m,k,l){if(!this.sanityCheck())return null;var n=!isFinite(b)&&b.match(/^0Nt/);this.setup(a,b,n?d:b,e,f,c,m,k,null);this.selectedLabel=pl.selectedLabel;this.availableLabel=pl.availableLabel;this.nalabel=pl.naLabel;this.size=h;4>this.size&&(-1!=navigator.userAgent.indexOf("Firefox/")&&-1!=navigator.platform.indexOf("Mac"))&&(this.size=4);this.baseTabIndex=l;this.title=g}multiPicklist.prototype=new picklist;
multiPicklist.prototype.getSelectMap=function(a){for(var b={},d=0;d<a.length;d+=2)b[a[d]]=a[d+1];return b};multiPicklist.prototype.getSelectedValue=function(){if(this.firstRound)return this.initialValue;for(var a=[],b=getElementByIdCS(this.id+"_selected").options,d=getElementByIdCS(this.id).options,e=0;e<b.length;e++)a.push(Sfdc.String.escapeToHtml(d[parseInt(b[e].value)].value)),a.push(b[e].text);return a};
multiPicklist.prototype.generate=function(a){var b=[],d=this.getSelectedValue(),e=this.getSelectMap(d),d=this.getSelectMap(d);a=new Bitset(this.mapping[a]);b.push("\x3cselect ");b.push(this.attributes);b.push("\x3e");b.push("");for(var f=!0,c=0;c<this.values.length;c+=2){var g=this.values[c];if(!this.isDependent()||a.testBit(c/2))b.push('\x3coption value\x3d"'+g+'"'),f=!1,e[g]&&(b.push(" selected"),delete d[g]),b.push("\x3e"),b.push(this.values[c+1])}this.isDependent()&&(f&&this.initialValue[0]!=
picklistNAMarker)&&b.push("\x3coption value\x3d'"+picklistNAMarker+"' selected\x3e");b.push("\x3c/select\x3e");if(this.firstRound){g=[];for(c in d)g.push('\x3coption value\x3d"'+c+'" selected\x3e'),g.push(d[c]);b[3]=g.join("")}var h=getElementByIdCS(this.id),c=h.value==picklistNAMarker?"":h.value,g=h.onchange,h=h.parentNode;h.innerHTML=b.join("");b=getElementByIdCS(this.id);g&&(b.onchange=g);this.isDependent()&&(this.condRequired(h.firstChild,f),this.condRequired(this.labelEl,f));this.displaySelectElement(a,
e,d,!0,f,this.baseTabIndex+2);this.displaySelectElement(a,e,d,!1,f,this.baseTabIndex);if(b.onchange&&this.isDependent()&&!this.firstRound&&(""!=c||""==c&&newMe.value!=picklistNAMarker)&&b.value!=c)b.onchange();this.firstRound=!1};
multiPicklist.prototype.displaySelectElement=function(a,b,d,e,f,c){var g=e?"MultiSelectPicklist.handleMSPUnSelect":"MultiSelectPicklist.handleMSPSelect",h=f?this.nalabel:e?this.selectedLabel:this.availableLabel;f=this.id+(e?"_selected":"_unselected");var m=!0;if(window.Sfdc&&Sfdc.userAgent.isWebkit&&!Sfdc.userAgent.isChrome){var k=navigator.userAgent;if(-1<k.indexOf("iPad")||-1<k.indexOf("iPhone"))m=!1}k=[];k.push('\x3cselect multiple\x3d"multiple" size\x3d"'+this.size+'" id\x3d"'+f+'" ');-1<this.baseTabIndex&&
("undefined"==typeof c&&(c=this.baseTabIndex),k.push(' tabIndex\x3d"'+c+'" '));k.push('title\x3d"'+this.title+" - "+h+'" ');k.push('ondblclick\x3d"'+g+"('"+this.id+"');\" \x3e");m&&(k.push('\x3coptgroup style\x3d"text-decoration:none;" label\x3d"'+h+'"\x3e'),isFirefox&&k.push("\x3c/optgroup\x3e"));c=0;if(this.firstRound)for(var l in d)e&&d[l]!=picklistNAMarker&&"function"!=typeof d[l]?(k.push('\x3coption value\x3d"'+c++ +'"\x3e'),k.push(d[l])):c++;l=0;for(d=c-1;l<this.values.length;l+=2)if(!this.isDependent()||
a.testBit(l/2))d++,void 0!=b[this.values[l]]==e&&(k.push('\x3coption value\x3d"'+d+'"\x3e'),k.push(this.values[l+1]));!isFirefox&&m&&k.push("\x3c/optgroup\x3e");k.push("\x3c/select\x3e");getElementByIdCS(f).parentNode.innerHTML=k.join("")};picklist.loadFailure=!1;picklist.picklists=null;picklist.initialized=!1;
picklist.initAll=function(){if(!(this.initialized||null==this.picklists)){this.initialized=!0;for(var a=document.getElementsByTagName("label"),b=0;b<a.length;b++){var d=this.picklists[a[b].htmlFor];d&&(d.labelEl=a[b])}for(b in this.picklists)if(null!=this.picklists[b].onLoad)this.picklists[b].onLoad()}};picklist.getControllingValue=function(){return"checkbox"==this.type?this.checked?"1":"0":this.value};
picklist.onControllerChange=function(){this.dplOldHandler&&this.dplOldHandler.apply(this,arguments);for(var a=0;a<this.dependents.length;a++)this.dependents[a].generate(this.getControllingValue(),!0)};function Bitset(a){"string"!=typeof a&&(a="");Bitset.init();this.data=a.split("");this.trim()}Bitset.prototype.testBit=function(a){var b=Math.floor(a/6);return b>=this.data.length?!1:0!=(Bitset.codes[this.data[b]]&32>>a%6)};
Bitset.prototype.setBit=function(a){var b=Math.floor(a/6);this.pad(b);this.data[b]=Bitset.alphabet[Bitset.codes[this.data[b]]|32>>a%6]};Bitset.prototype.clearBit=function(a){var b=Math.floor(a/6);b<this.data.length&&(this.data[b]=Bitset.alphabet[Bitset.codes[this.data[b]]&(255^32>>a%6)],this.trim())};Bitset.prototype.toString=function(){return this.data.join("")};Bitset.prototype.trim=function(){for(var a=this.data.length-1;0<=a&&this.data[a]==Bitset.alphabet[0];a--);this.data.splice(a+1,this.data.length)};
Bitset.prototype.pad=function(a){for(var b=this.data.length,d=0;d<=a-b;d++)this.data.push(Bitset.alphabet[0])};Bitset.prototype.length=function(){return this.data.length};Bitset.initialized=!1;Bitset.init=function(){if(!Bitset.initialized){Bitset.initialized=!0;Bitset.alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");Bitset.codes=[];for(var a=0;a<Bitset.alphabet.length;a++)Bitset.codes[Bitset.alphabet[a]]=a}};