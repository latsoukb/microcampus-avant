const COURSES = [
    {id:"budget",lvl:1,title:"Budget étudiant",blurb:"Savoir où va chaque dollar pendant la session.",lessons:[
      {t:"Ce qui entre chaque mois",m:3,d:"Bourses, prêts, emploi, aide familiale : additionne tout ce que tu reçois."},
      {t:"Les dépenses fixes",m:4,d:"Loyer, frais de scolarité, téléphone, transport : ce qui revient à chaque période."},
      {t:"Les dépenses variables",m:4,d:"Épicerie, sorties, vêtements : les montants que tu peux ajuster."},
      {t:"Besoin ou désir ?",m:3,d:"Une question simple à te poser avant de payer."},
      {t:"La règle 50/30/20",m:4,d:"Une répartition de départ à adapter à ton budget d'étudiant."},
      {t:"Budgéter par session",m:4,d:"Pourquoi planifier par session quand l'argent arrive en un seul versement."},
      {t:"Suivre ses dépenses",m:4,d:"Papier, tableur ou application : choisis un outil et tiens-le une semaine."},
      {t:"Les abonnements oubliés",m:3,d:"Repère les paiements récurrents que tu n'utilises plus."},
      {t:"Prêt ou bourse ?",m:5,d:"La différence entre ce qui se rembourse et ce qui est donné."},
      {t:"Le fonds d'urgence",m:4,d:"Un petit coussin pour les imprévus, alimenté chaque semaine."}]},
    {id:"credit",lvl:1,title:"Comprendre le crédit",blurb:"Cote de crédit, carte et intérêts, sans mauvaise surprise.",lessons:[
      {t:"C'est quoi, le crédit ?",m:3,d:"Emprunter aujourd'hui, rembourser demain, et ce que ça coûte."},
      {t:"La cote de crédit",m:4,d:"Un chiffre qui résume comment tu rembourses tes dettes."},
      {t:"Ce qui fait bouger ta cote",m:4,d:"Paiements à temps, utilisation du crédit et âge de tes comptes."},
      {t:"Ta première carte de crédit",m:4,d:"Choisir une carte simple et fixer sa limite à un niveau raisonnable."},
      {t:"Date de facturation et période sans intérêt",m:4,d:"Deux dates à connaître pour ne jamais payer d'intérêts."},
      {t:"Les intérêts simples",m:4,d:"Un pourcentage calculé seulement sur le montant emprunté."},
      {t:"Les intérêts composés",m:5,d:"Des intérêts sur les intérêts : pourquoi une dette grossit de plus en plus vite."},
      {t:"Le paiement minimum",m:4,d:"Calcule le coût réel de ne payer que le minimum."},
      {t:"Marge de crédit ou prêt ?",m:4,d:"Deux façons d'emprunter et quand choisir l'une ou l'autre."},
      {t:"Lire le taux avant de signer",m:4,d:"Taux annuel, frais et coût total : les trois chiffres à vérifier."}]},
    {id:"epargne",lvl:2,title:"Épargner et investir",blurb:"Faire travailler tes premiers dollars.",lessons:[
      {t:"Pourquoi épargner tôt",m:3,d:"Le temps travaille pour toi : un petit montant commencé tôt pèse lourd."},
      {t:"Épargne ou placement ?",m:3,d:"L'argent dont tu auras besoin bientôt n'a pas la même place que celui à long terme."},
      {t:"Le CELI",m:4,d:"Un compte où la croissance de tes placements n'est pas imposée."},
      {t:"Le REER",m:4,d:"Un compte pour la retraite qui peut réduire ton impôt."},
      {t:"Le CELIAPP",m:4,d:"Un compte destiné à l'achat d'une première propriété."},
      {t:"Le rendement",m:4,d:"Lire un rendement annuel et le comparer à l'inflation."},
      {t:"Le risque",m:4,d:"Pourquoi un rendement attendu plus élevé s'accompagne de plus de risque."},
      {t:"Actions et obligations",m:5,d:"Posséder une part d'entreprise ou prêter de l'argent : deux logiques différentes."},
      {t:"Fonds indiciels et FNB",m:5,d:"Acheter tout un marché d'un seul coup, à faible coût."},
      {t:"Les frais de gestion",m:4,d:"Un petit pourcentage par an qui change beaucoup le résultat sur 30 ans."},
      {t:"La diversification",m:4,d:"Répartir tes placements pour qu'un seul mauvais résultat ne pèse pas trop."},
      {t:"Investir régulièrement",m:4,d:"Un montant fixe à intervalles réguliers plutôt qu'un seul gros dépôt."}]},
    {id:"impots",lvl:2,title:"Impôts de l'étudiant",blurb:"Ta première déclaration, étape par étape.",lessons:[
      {t:"Pourquoi produire une déclaration",m:3,d:"Même avec un petit revenu, elle peut te rapporter de l'argent."},
      {t:"Le Relevé 8 et le T2202",m:4,d:"Les documents de ton université qui attestent tes frais de scolarité."},
      {t:"Les autres relevés",m:4,d:"T4, Relevé 1 et autres feuillets reçus de tes employeurs."},
      {t:"Réunir tes documents",m:3,d:"La liste à cocher avant de commencer."},
      {t:"Remplir la déclaration en ligne",m:5,d:"Les grandes sections d'un logiciel de déclaration, dans l'ordre."},
      {t:"Les frais de scolarité",m:4,d:"Comment ils peuvent réduire ton impôt, maintenant ou plus tard."},
      {t:"Pourboires et travail autonome",m:4,d:"Ce qu'il faut déclarer quand tu reçois des pourboires ou travailles à ton compte."},
      {t:"Les dates limites",m:3,d:"Quand produire et quand payer pour éviter les pénalités."},
      {t:"L'avis de cotisation",m:4,d:"Lire le document de réponse du gouvernement et suivre ton remboursement."}]},
    {id:"evaluation",lvl:3,title:"Évaluer un investissement",blurb:"Valeur actualisée, états financiers et ratios.",lessons:[
      {t:"La valeur de l'argent dans le temps",m:4,d:"Un dollar aujourd'hui vaut plus qu'un dollar dans un an."},
      {t:"La valeur future",m:4,d:"Ce que vaudra un placement après quelques années de croissance."},
      {t:"La valeur actualisée",m:5,d:"Ramener un montant futur à sa valeur d'aujourd'hui."},
      {t:"Le taux d'actualisation",m:4,d:"Choisir le taux qui reflète le risque d'un projet."},
      {t:"La valeur actuelle nette",m:5,d:"Additionner les flux actualisés et soustraire la mise de départ."},
      {t:"Le taux de rendement interne",m:5,d:"Le taux qui rend la valeur actuelle nette égale à zéro."},
      {t:"Le bilan",m:5,d:"Ce que l'entreprise possède, ce qu'elle doit et ce qui reste aux propriétaires."},
      {t:"L'état des résultats",m:5,d:"Revenus moins charges : l'entreprise a-t-elle gagné de l'argent ?"},
      {t:"Les flux de trésorerie",m:5,d:"D'où vient l'argent réel et où il va."},
      {t:"Les ratios de liquidité",m:4,d:"L'entreprise peut-elle payer ses factures à court terme ?"},
      {t:"Les ratios de rentabilité",m:4,d:"Marge, rendement de l'actif et rendement des capitaux propres."},
      {t:"Les ratios d'endettement",m:4,d:"Quelle part de l'entreprise est financée par la dette."}]},
    {id:"couverture",lvl:3,title:"Couverture et produits dérivés",blurb:"Réduire un risque de prix, de taux ou de change.",lessons:[
      {t:"C'est quoi, un risque financier ?",m:3,d:"Une variation de prix qui peut coûter de l'argent."},
      {t:"Le risque de prix",m:4,d:"Quand le prix d'une matière première fait bouger les profits."},
      {t:"Le risque de taux d'intérêt",m:4,d:"Quand une hausse des taux alourdit les paiements d'une dette."},
      {t:"Le risque de change",m:4,d:"Quand une devise étrangère change la valeur de tes revenus ou de tes coûts."},
      {t:"Pourquoi couvrir",m:4,d:"Accepter un résultat prévisible plutôt qu'un résultat incertain."},
      {t:"Le contrat à terme",m:5,d:"S'engager aujourd'hui sur un prix pour une livraison future."},
      {t:"La marge et le règlement quotidien",m:5,d:"Comment les gains et les pertes sont réglés chaque jour."},
      {t:"Couvrir avec un contrat à terme",m:5,d:"Un exemple chiffré de couverture d'une exposition au prix."},
      {t:"Couvrir sur plusieurs échéances",m:5,d:"Étaler la couverture dans le temps plutôt que sur une seule date."},
      {t:"Les options",m:5,d:"Un droit d'acheter ou de vendre, sans obligation."},
      {t:"Acheter une option d'achat",m:4,d:"La prime payée et les scénarios de gain ou de perte."},
      {t:"Acheter une option de vente",m:4,d:"Se protéger contre une baisse de prix."}]}
  ];
(function(){
(function(){const hd=document.querySelector('header .flex.items-center.gap-space-xs:last-child')||document.querySelector('header');
const btn=document.createElement('button');btn.type='button';btn.id='mc-theme';btn.setAttribute('aria-label','Changer de thème');btn.className='w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant';
const ic=()=>{btn.innerHTML='<span class="material-symbols-outlined text-[22px]">'+(document.documentElement.classList.contains('dark')?'light_mode':'dark_mode')+'</span>'};ic();
btn.onclick=()=>{const d=document.documentElement.classList.toggle('dark');try{localStorage.setItem('mc-theme',d?'dark':'light')}catch(e){}ic()};
hd.insertBefore(btn,hd.firstChild)})();
const page=document.body.dataset.page;
(function(){const st=document.createElement('style');st.textContent='nav a.mc-active{color:#006c49!important;font-weight:700}nav a.mc-active .material-symbols-outlined:first-child{font-variation-settings:"FILL" 1}html.dark nav a.mc-active{color:#4edea3!important}';document.head.appendChild(st);
const map={index:'accueil',simuler:'microprets',demande:'microprets',formations:'formations',finances:'finances',offres:'profil',profil:'profil'};const cur=map[page];
document.querySelectorAll('nav a[data-path]').forEach(l=>{const on=l.dataset.path==cur;l.classList.remove('text-primary-container','font-semibold','text-on-surface-variant');l.classList.toggle('mc-active',on);if(!on)l.classList.add('text-on-surface-variant');
const dot=l.querySelector('span:last-child');if(dot){dot.classList.toggle('opacity-0',!on);dot.classList.toggle('opacity-100',on)}if(on)l.setAttribute('aria-current','page');else l.removeAttribute('aria-current')})})(),$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const cad=n=>n.toLocaleString('fr-CA',{minimumFractionDigits:2,maximumFractionDigits:2}).replace(/\u00a0/g,' ')+' $';
function rep(re,v){const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode()){if(n.parentNode.tagName=='SCRIPT')continue;if(re.test(n.nodeValue))n.nodeValue=n.nodeValue.replace(re,v)}}
function goByText(txt,url,sel){$$(sel||'button,a').forEach(b=>{if(b.textContent.replace(/\s+/g,' ').trim().toLowerCase().startsWith(txt.toLowerCase())){b.addEventListener('click',e=>{e.preventDefault();location.href=url})}})}
(function(){const g=document.querySelector('main section .shrink-0');if(g){g.remove()}
let rd=0;try{rd=localStorage.getItem('mc-read')}catch(e){}
const hb=document.querySelector('header button[aria-label^="Notifications"]');
if(hb&&page!='notifications'&&!rd){hb.classList.add('relative');hb.insertAdjacentHTML('beforeend','<span class="absolute top-1 right-0.5 w-4 h-4 rounded-full bg-error text-on-error text-[9px] font-bold flex items-center justify-center">2</span>')}
const m=document.getElementById('mark-all-read-btn');if(m)m.addEventListener('click',()=>{try{localStorage.setItem('mc-read','1')}catch(e){}})})();
$$('button[aria-label^="Notifications"]').forEach(b=>b.onclick=()=>location.href='notifications.html');
$$('button[aria-label="Retour"]').forEach(b=>b.onclick=()=>history.length>1?history.back():location.href='index.html');
let P;try{P=JSON.parse(localStorage.getItem('mc-progress')||'null')}catch(e){}
if(!P)P={budget:[0,1,2,3],credit:[0,1]};
const save=()=>{try{localStorage.setItem('mc-progress',JSON.stringify(P))}catch(e){}};
const dn=c=>P[c.id]||[],tot=()=>COURSES.reduce((a,c)=>a+dn(c).length,0),N=65;
const mins=c=>c.lessons.reduce((a,l)=>a+l.m,0);
const first=c=>{for(let i=0;i<c.lessons.length;i++)if(dn(c).indexOf(i)<0)return i;return 0};
let loan;try{loan=JSON.parse(localStorage.getItem('mc-loan')||'null')}catch(e){}loan=loan||{amt:400,weeks:6};
try{const q=new URLSearchParams(location.search),a=+q.get('amt'),w=+q.get('weeks');if(a>=50&&a<=1500)loan.amt=a;if(w>=2&&w<=12)loan.weeks=w;if(q.get('amt')||q.get('weeks')){try{localStorage.setItem('mc-loan',JSON.stringify(loan))}catch(e){}}}catch(e){}
const calc=()=>{const c=Math.round((loan.amt+loan.amt*.14*loan.weeks/52)*100),p=Math.floor(c/loan.weeks);return{total:c/100,pay:p/100}};

if(page=='index'){
  const t=tot();rep(/\d+ leçons? terminées? sur 65/,t+' leçons terminées sur 65');rep(/^\s*10 %\s*$/,Math.round(t/N*100)+' %');
  $$('[style*="width: 10%"]').forEach(e=>e.style.width=Math.round(t/N*100)+'%');
  
  
}
if(page=='simuler'){
  const b=$('#submitLoanRequestBtn');if(b)b.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();
    const A=+$('#amountSlider').value,W=+$('#durationSlider').value;try{localStorage.setItem('mc-loan',JSON.stringify({amt:A,weeks:W}))}catch(x){}location.href='demande.html?amt='+A+'&weeks='+W},true);
}
if(page=='demande'){
  const c=calc();rep(/^\s*400,00\s*\$\s*$/,cad(loan.amt));rep(/\/ \d+ semaines/,'/ '+loan.weeks+' semaines');rep(/66,67\s*\$/,cad(c.pay));
  
  const u=$('#university');if(u)u.value='Université de Sherbrooke';
  const sel=$('#loan_purpose');if(sel)sel.innerHTML='<option value="">Choisir…</option><option>Loyer</option><option>Alimentation</option><option>Transport</option><option>Matériel scolaire</option><option>Autre</option>';
  const f=$('#loan-application-form');
  const err=(el,m)=>{let e=el.parentNode.parentNode.querySelector('.mc-err');if(!e){e=document.createElement('p');e.className='mc-err text-error text-xs mt-1';el.closest('div').parentNode.appendChild(e)}e.textContent=m;el.style.outline=m?'2px solid #ba1a1a':''};
  f.removeAttribute('onsubmit');f.setAttribute('novalidate','');
  f.addEventListener('submit',e=>{e.preventDefault();let ok=1;const nm=$('#full_name'),em=$('#edu_email'),pu=$('#loan_purpose');
    const chk=(el,bad,m)=>{err(el,bad?m:'');if(bad)ok=0};
    chk(nm,!nm.value.trim(),'Indique ton nom complet.');chk(em,!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em.value.trim()),'Entre un courriel valide, par exemple prenom@usherbrooke.ca.');
    chk(u,!u.value.trim(),'Indique ton université.');chk(pu,!pu.value,'Choisis ton besoin principal.');
    const c1=$('#check_age'),c2=$('#check_enrolled');let m=f.querySelector('.mc-chk');if(!m){m=document.createElement('p');m.className='mc-chk text-error text-xs';c2.closest('label,div').parentNode.appendChild(m)}
    const bad=!(c1.checked&&c2.checked);m.textContent=bad?'Confirme les deux conditions pour continuer.':'';if(bad)ok=0;
    if(ok){rep(/Merci !/,'Merci '+nm.value.trim().split(' ')[0]+' !');openSuccessSheet()}else{const x=f.querySelector('[style*="outline"]');if(x)x.focus()}});
  $$('button').forEach(b=>{if(/Retour à l'accueil|Suivre ma demande/.test(b.textContent)){const old=b.getAttribute('onclick');b.addEventListener('click',()=>{if(/accueil/.test(b.textContent))location.href='index.html'})}});
}
if(page=='finances'){}
if(page=='notifications'){}
if(page=='offres'){}
if(page=='formations'){
  let cur=0,lsn=0;const bc=COURSES.findIndex(c=>dn(c).length<c.lessons.length);cur=bc<0?0:bc;lsn=first(COURSES[cur]);
  let lvl=0;const LV={1:'Niveau 1 · Débutant',2:'Niveau 2 · Intermédiaire',3:'Niveau 3 · Avancé'};
  const secs=$$('main > div > section');const prog=secs[0],chips=secs[1],player=secs[2],foot=secs[secs.length-1],lists=secs.slice(3,secs.length-1);
  lists.forEach(s=>s.remove());const host=document.createElement('div');foot.before(host);
  const pbar=()=>{const t=tot(),p=Math.round(t/N*100);rep(/\d+ sur 65 leçons complétées/,t+' sur 65 leçons complétées');const sp=prog.querySelectorAll('span');sp.forEach(s=>{if(/^\s*\d+ %\s*$/.test(s.textContent))s.textContent=p+' %'});const b=prog.querySelector('.rounded-full div,.rounded-full > div');if(b)b.style.width=p+'%'};
  function drawPlayer(){const c=COURSES[cur],l=c.lessons[lsn],d=dn(c).indexOf(lsn)>=0,n=c.lessons.length;
    const badge=[...player.querySelectorAll('span')].find(s=>/^Leçon \d+\/\d+$/.test(s.textContent.trim()));if(badge)badge.textContent='Leçon '+(lsn+1)+'/'+n;
    clearInterval(window.__vt);window.__vt=null;const ts=[...player.querySelectorAll('span')].filter(s=>/^\s*\d+:\d\d\s*$/.test(s.textContent));if(ts[0])ts[0].textContent='0:00';if(ts[1])ts[1].textContent=l.m+':00';const pb=player.querySelector('.bg-secondary.rounded-full[style*="width"]');if(pb)pb.style.width='0%';
    const pl=player.querySelector('button[aria-label="Lancer la vidéo"]');if(pl){const ic=pl.querySelector('.material-symbols-outlined');let pc=0;pl.onclick=()=>{if(window.__vt){clearInterval(window.__vt);window.__vt=null;ic.textContent='play_arrow';return}ic.textContent='pause';window.__vt=setInterval(()=>{pc=Math.min(pc+2,100);if(pb)pb.style.width=pc+'%';const s=Math.round(l.m*60*pc/100);if(ts[0])ts[0].textContent=Math.floor(s/60)+':'+String(s%60).padStart(2,'0');if(pc>=100){clearInterval(window.__vt);window.__vt=null;ic.textContent='replay';pc=0}},300)}}
    const body=player.querySelector('div.p-space-md');
    body.innerHTML=`<div class="flex items-center gap-2 mb-1.5"><span class="font-label-sm text-label-sm text-secondary bg-surface-container px-2 py-0.5 rounded-full">${LV[c.lvl]}</span><span class="font-label-sm text-label-sm text-on-surface-variant">${c.title}</span></div>
    <h2 class="font-headline-sm text-headline-sm text-primary">${l.t}</h2><p class="font-body-md text-body-md text-on-surface-variant mt-1.5 leading-relaxed">${l.d}</p>
    <div class="mt-4 pt-4 flex flex-col gap-2"><button id="mc-done" class="w-full h-12 ${d?'bg-surface-container-high text-primary':'bg-secondary text-on-secondary'} rounded-xl font-label-md flex items-center justify-center gap-2"><span class="material-symbols-outlined text-[20px]">check_circle</span>${d?'Leçon terminée ✓':'Marquer comme terminée'}</button>
    <div class="grid grid-cols-2 gap-2"><button id="mc-prev" class="h-10 bg-surface-container-lowest text-primary rounded-xl font-label-md border border-outline-variant flex items-center justify-center gap-1"><span class="material-symbols-outlined text-[18px]">arrow_back</span> Précédente</button><button id="mc-next" class="h-10 bg-surface-container-lowest text-primary rounded-xl font-label-md border border-outline-variant flex items-center justify-center gap-1">Suivante <span class="material-symbols-outlined text-[18px]">arrow_forward</span></button></div></div>
    <details class="mt-4" open><summary class="flex items-center gap-2 py-1 cursor-pointer"><span class="material-symbols-outlined text-[20px] text-primary">format_list_bulleted</span><span class="font-title-md text-title-md text-primary">Sommaire du module (${dn(c).length}/${n})</span></summary><div class="mt-3 flex flex-col gap-2">${c.lessons.map((x,i)=>{const k=dn(c).indexOf(i)>=0,a=i==lsn;return `<div data-l="${i}" class="cursor-pointer flex items-center justify-between p-2.5 rounded-xl ${a?'bg-secondary-container/30':'bg-surface-container-low'}"><div class="flex items-center gap-2.5"><div class="w-6 h-6 rounded-full flex items-center justify-center ${k?'bg-secondary text-on-secondary':'bg-surface-container text-on-surface-variant'}"><span class="material-symbols-outlined text-[16px]">${k?'check':(a?'play_arrow':'radio_button_unchecked')}</span></div><div><p class="font-label-md text-label-md text-primary leading-tight ${a?'font-semibold':''}">${i+1}. ${x.t}</p><span class="font-body-sm text-[11px] text-on-surface-variant">${k?'Terminée':(a?'En cours':'À venir')} · ${x.m} min</span></div></div>${a?'<span class="font-label-sm text-[10px] bg-secondary text-on-secondary px-2 py-0.5 rounded-full">Actuel</span>':''}</div>`}).join('')}</div></details>`;
    $('#mc-done').onclick=()=>{const a=P[c.id]=P[c.id]||[];if(a.indexOf(lsn)<0)a.push(lsn);save();if(lsn<n-1)lsn++;all()};
    $('#mc-prev').onclick=()=>{if(lsn>0){lsn--;all()}};$('#mc-next').onclick=()=>{if(lsn<n-1){lsn++;all()}};
    body.querySelectorAll('[data-l]').forEach(e=>e.onclick=()=>{lsn=+e.dataset.l;all()})}
  function drawList(){let h='';[1,2,3].forEach(L=>{if(lvl&&lvl!=L)return;h+=`<section class="px-margin mt-7"><h3 class="font-title-md text-title-md text-primary mb-3">${LV[L]}</h3><div class="flex flex-col gap-3">`;
    COURSES.forEach((c,i)=>{if(c.lvl!=L)return;const n=dn(c).length,t=c.lessons.length,p=Math.round(n/t*100);h+=`<div data-c="${i}" class="cursor-pointer bg-surface-container-lowest rounded-2xl p-space-md shadow-sm"><div class="flex items-center justify-between"><div><p class="font-title-md text-title-md text-primary">${c.title}</p><p class="font-body-sm text-body-sm text-on-surface-variant">${c.blurb}</p><p class="font-body-sm text-[11px] text-on-surface-variant mt-1">${t} leçons · ${mins(c)} min au total</p></div><span class="font-label-md text-secondary">${p} %</span></div><div class="w-full h-2 bg-surface-container rounded-full overflow-hidden mt-3"><div class="h-full bg-secondary rounded-full" style="width:${p}%"></div></div><div class="flex items-center justify-between mt-2"><span class="font-body-sm text-[11px] text-on-surface-variant">${n} sur ${t} leçons complétées</span><span class="font-label-md text-primary-container">${n==t?'Revoir':n?'Continuer':'Commencer'} ›</span></div></div>`});h+='</div></section>'});
    host.innerHTML=h;host.querySelectorAll('[data-c]').forEach(e=>e.onclick=()=>{cur=+e.dataset.c;lsn=first(COURSES[cur]);all();player.scrollIntoView({behavior:'smooth'})})}
  chips.querySelectorAll('button').forEach((b,i)=>b.onclick=()=>{lvl=i;chips.querySelectorAll('button').forEach((x,j)=>{x.classList.toggle('bg-primary-container',j==i);x.classList.toggle('text-on-primary',j==i);x.classList.toggle('bg-surface-container',j!=i);x.classList.toggle('text-on-surface-variant',j!=i)});drawList()});
  function all(){pbar();drawPlayer();drawList()}all();const hs=location.hash.slice(1),ix=COURSES.findIndex(c=>c.id==hs);if(ix>=0){cur=ix;lsn=first(COURSES[cur]);all()}
}
})();
