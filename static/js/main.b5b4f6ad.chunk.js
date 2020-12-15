(this.webpackJsonpcvpage=this.webpackJsonpcvpage||[]).push([[0],{49:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(14),o=n.n(r),l=(n(49),n(29),n(24)),c=n(28),s=n(26),d=n(30),u=n(4),m=n(39),p=n.n(m),g=n(38),h=n.n(g),f=n(40),y=n.n(f),b=n(33),v=n.n(b),C=n(35),E=n.n(C),k=n(36),w=n.n(k),F=n(37),I=n.n(F),x={person:{firstName:"Andree",lastName:"Hultgren",phoneNumber:"+46736544491",imageSrc:"https://raw.githubusercontent.com/andreehultgren/cvpage/master/public/andree.jpg",title:"Machine Learning and Electrical Engineer",description:"I love complicated things. I am stubborn, therefore I find solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend dictum volutpat. Cras sed ultricies ipsum. In vulputate leo eget sem aliquet, quis aliquet enim fringilla. ",skills:["Python","React","Machine Learning","Django"],links:[{url:"http://www.github.com/andreehultgren",icon:v.a},{url:"mailto:andree_hultgren@hotmail.com",icon:E.a},{url:"tel:+46736544491",icon:w.a},{url:"https://github.com/andreehultgren/cvpage/raw/master/public/CV_Andree_Hultgren.pdf",icon:I.a}]},theme:{headerColor:"#E0F0FF",timelineCenterlineColor:"#ddd",filterButtonBackgroundColor:"#BB89ED",filterButtonTextColor:"#FFF"},timelineTypes:[{id:1,title:"Education",backgroundColor:"#F48024",textColor:"#FFFFFF",icon:h.a},{id:2,title:"Work",backgroundColor:"#62B0DF",textColor:"#FFFFFF",icon:p.a},{id:3,title:"Other",backgroundColor:"#62DFB0",textColor:"#FFFFFF",icon:y.a}],timeline:[{title:"Masters Degree in Machine Learning",company:"Royal Institute of Technology",description:"Masters degree in Machine Learning with a focus on deep learning and computer vision.",time:"2019 - Present",type:1},{title:"Fullstack Developer",company:"Skyqraft",description:"I developed their UI and all logic for both frontend and backend. The work was very successful. 50 new features were released over the span of two months.",time:"Jun 2020 - Present",type:2},{title:"Entrepreneur",company:"Hultan IT AB",description:"I built a company where I sell technical services focused on fullstack development,",time:"Sep 2019 - Present",type:2},{title:"Technical AI Trainer",company:"Front AI",description:"I trained conversational AI with managing APIs as my main responsibility.",time:"Aug 2019 - Aug 2020",type:2},{title:"Teacher in religious studies",company:"The Church of Jesus Christ of Latter-day Saints",description:"I taught fundamental teachings of my beliefs to a class of approximately 15 students aged 14-18.",time:"Aug 2016 - Dec 2019",type:3},{title:"Connection Administrator",company:"Ellevio",description:"I managed incoming special orders and dispatched contractors to install a new electrical facility.",time:"Summer 2019",type:2},{title:"Bachelor Degree in Electrical Engineering",company:"Royal Institute of Technology",description:"Bachelor degree in Electrical Engineering. My bachelor thesis discussed a motion planning system for autonomous driving.",time:"2016 - 2019",type:1},{title:"Supervisor",company:"Haninge municipality",description:"I guided and introduced teenagers to their first job as facility maintenance.",time:"Summer 2018",type:2},{title:"IT Support",company:"Brandskyddsf\xf6reningen",description:"I acted as on-site first-line IT support.",time:"Apr 2017 - Feb 2018",type:2},{title:"Senior Techbuddy",company:"TechBuddy",description:"I was responsible for providing technical assistance for high profile customers and support for other employees that got stuck when visiting a customer.",time:"Jan 2017 - Okt 2017",type:2},{title:"Missionary",company:"The Church of Jesus Christ of Latter day Saints",description:"Teaching and guiding people in the beliefs of the denomination",time:"Aug 2014 - Aug 2016",type:3},{title:"Natural Science",company:"Fredrika Bremergymnasiet",description:"High school was spent studying natural sciences with a very good result.",time:"2011 - 2014",type:1}]},T={dateText:{color:"#333"},timeline:{"&::before":{backgroundColor:x.theme.timelineCenterlineColor}},timelineElement:{"& .vertical-timeline-element-icon":{boxShadow:"0 0 0 4px ".concat(x.theme.timelineCenterlineColor,", inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)")}},filterContainer:{display:"flex",justifyContent:"center",marginLeft:"auto",marginRight:"auto",marginTop:10,marginBottom:10},filterButton:{textAlign:"center",backgroundColor:"rgba(0,0,0,0)",color:"#333","&:hover":{backgroundColor:"rgba(0,0,0,0)",color:"#333"},"&:focus":{boxShadow:"none"}},header:{width:"100%",backgroundColor:x.theme.headerColor,display:"flex",flexDirection:"column",paddingBottom:50,"& h1":{textAlign:"center"}},linkSection:{marginRight:10,width:"100%",textAlign:"right",padding:20,"& a":{color:"#000"},"& > *":{margin:10}},skillContainer:{display:"flex",margin:"auto",marginTop:30,flexWrap:"wrap",justifyContent:"center","& > div":{backgroundColor:"rgba(0,0,0,0.5)",color:"#FFF",fontWeight:700,margin:5,padding:5,paddingLeft:20,paddingRight:20,borderRadius:10}},imgContainer:{overflow:"hidden",position:"relative",height:250,width:250,borderRadius:1e3,border:"5px solid white",margin:"auto",marginBottom:20,"& img":{position:"absolute",width:"auto",height:"100%",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}}},S=n(79),A=n(80),B=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).handleIDUpdate=function(e){var t=i.state.usedIDs;t.includes(e)?i.setState({usedIDs:t.filter((function(t){return t!==e}))}):i.setState({usedIDs:t.concat([e])})},i.render=function(){var e=x.timeline,t=x.timelineTypes,n=i.props.classes,r=e.filter((function(e){return i.state.usedIDs.includes(e.type)}));return a.a.createElement("div",{style:{background:"#FFF"}},a.a.createElement("div",{className:n.filterContainer},t.map((function(e){return a.a.createElement(A.a,{control:a.a.createElement(S.a,{checked:i.state.usedIDs.includes(e.id),style:{color:e.backgroundColor},onChange:function(){i.handleIDUpdate(e.id)}}),label:e.title})}))),a.a.createElement(d.VerticalTimeline,{className:n.timeline},r.map((function(e){var i=t.find((function(t){return t.id===e.type}));return a.a.createElement(d.VerticalTimelineElement,{className:n.timelineElement,contentStyle:{background:i.backgroundColor,color:i.textColor},contentArrowStyle:{borderRight:"7px solid  ".concat(i.backgroundColor)},date:e.time,dateClassName:n.dateText,iconStyle:{background:i.backgroundColor,color:i.textColor},icon:a.a.createElement(i.icon,null)},a.a.createElement("h3",null,e.title),a.a.createElement("h4",null,e.company),a.a.createElement("p",null,e.description))}))))},i.state={usedIDs:x.timelineTypes.map((function(e){return e.id}))},i}return n}(a.a.Component),D=Object(u.a)(T)(B),N=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).render=function(){var t=e.props.classes,n=x.person;return a.a.createElement("div",{className:t.header},a.a.createElement("div",{className:t.linkSection},n.links.map((function(e){return a.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},a.a.createElement(e.icon,null))}))),a.a.createElement("div",{className:t.imgContainer},a.a.createElement("img",{src:n.imageSrc,alt:"Profile"})),a.a.createElement("h1",{style:{margin:"auto"}},n.firstName," ",n.lastName),a.a.createElement("h4",{style:{margin:"auto",textAlign:"center"}},n.title),a.a.createElement("div",{className:t.skillContainer},n.skills.map((function(e){return a.a.createElement("div",null,e)}))))},e}return n}(a.a.Component),j=Object(u.a)(T)(N);var M=function(){return a.a.createElement("div",null,a.a.createElement(j,null),a.a.createElement(D,null))};n(58);var O=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.b5b4f6ad.chunk.js.map