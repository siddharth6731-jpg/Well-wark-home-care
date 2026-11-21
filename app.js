const services=[
["Antiseptic Dressing","Wound-care dressing support following a clinician’s instructions.","🩹"],
["Sterilization Support","Support for safe care practices and infection-prevention routines.","🛡️"],
["Physiotherapy","Mobility and rehabilitation support as advised by a qualified professional.","🧘"],
["Nursing Care","Home nursing support based on assessed patient needs.","🩺"],
["Lab Test Collection","Coordination for eligible home sample collection services.","🧪"],
["Elder Care","Daily living assistance and companionship for older adults.","🤝"],
["Medical Equipment","Guidance on arranging suitable home-care equipment.","🩻"],
["Critical Care","Specialised home-care coordination subject to clinical assessment and availability.","❤️‍🩹"],
["Post-Operative Care","Recovery support after hospital discharge, as prescribed.","🏥"],
["Tracheostomy Care","Care support by appropriately trained staff under clinical guidance.","🫁"],
["Urinary Catheterization","Catheter-related care by trained personnel with appropriate prescription.","💧"],
["Colostomy Care","Stoma-care assistance and patient/family support.","🌿"],
["Supportive Care","Comfort-focused assistance and coordination for patients and families.","🫶"],
["Pregnancy, Women’s & Baby Care","Mother-and-baby support and care coordination.","🤱"]
];
const grid=document.getElementById("serviceGrid"),select=document.getElementById("serviceSelect");
services.forEach(([name,desc,ico])=>{const card=document.createElement("article");card.className="service reveal";card.innerHTML=`<div class="ico" aria-hidden="true"><span>${ico}</span></div><h3><span>${name}</span></h3><p>${desc}</p>`;grid.append(card);const opt=document.createElement("option");opt.value=name;opt.textContent=name;select.append(opt)});
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("menuBtn").addEventListener("click",()=>document.getElementById("navLinks").classList.toggle("open"));
document.querySelectorAll("#navLinks a").forEach(a=>a.addEventListener("click",()=>document.getElementById("navLinks").classList.remove("open")));
// Horizontal service carousel controls
const serviceTrack=document.getElementById("serviceGrid");
const serviceStep=()=>Math.max(280,Math.round(serviceTrack.clientWidth*0.72));
document.getElementById("servicePrev").addEventListener("click",()=>serviceTrack.scrollBy({left:-serviceStep(),behavior:"smooth"}));
document.getElementById("serviceNext").addEventListener("click",()=>serviceTrack.scrollBy({left:serviceStep(),behavior:"smooth"}));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
function demoSubmit(id,resultId,msg){document.getElementById(id).addEventListener("submit",e=>{e.preventDefault();const out=document.getElementById(resultId);out.className="result";out.textContent=msg+" (Demo mode: no data is sent or saved.)";});}
document.getElementById("bookingForm").addEventListener("submit",e=>{
 e.preventDefault(); const form=e.currentTarget; const data=new FormData(form);
 const message=["Hello Well Work Home Care, I want to request a service booking.","Name: "+(data.get("name")||""),"Phone: "+(data.get("phone")||""),"Email: "+(data.get("email")||"Not provided"),"Service: "+(data.get("service")||""),"Patient details: "+(data.get("patient")||"Not provided"),"Address: "+(data.get("address")||"Not provided"),"PIN: "+(data.get("pin")||""),"Start date: "+(data.get("startDate")||"Flexible"),"Duration: "+(data.get("duration")||"To discuss"),"Shift: "+(data.get("shift")||"To discuss"),"Special requirements: "+(data.get("notes")||"None")].join("\n");
 document.getElementById("bookingResult").textContent="WhatsApp is opening with your booking details. Please press Send in WhatsApp to submit.";
 window.open("https://wa.me/918434046974?text="+encodeURIComponent(message),"_blank","noopener");
});
demoSubmit("jobForm","jobResult","Application preview received.");
// Animated first-visit booking invitation
const popup=document.getElementById("bookingPopup");
const closePopup=()=>{popup.classList.remove("show");popup.setAttribute("aria-hidden","true");};
document.getElementById("popupClose").addEventListener("click",closePopup);
popup.addEventListener("click",e=>{if(e.target===popup)closePopup();});
if(!sessionStorage.getItem("wwBookingPopupSeen")) setTimeout(()=>{popup.classList.add("show");popup.setAttribute("aria-hidden","false");sessionStorage.setItem("wwBookingPopupSeen","1");},1400);
