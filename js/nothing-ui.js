/* nothing-ui · minimal vanilla JS */
const t_dark=document.getElementById('t-dark'),t_light=document.getElementById('t-light');
  function setTheme(t){document.documentElement.setAttribute('data-theme',t);t_dark.setAttribute('aria-pressed',t==='dark');t_light.setAttribute('aria-pressed',t==='light');}
  // spacing ruler
  const steps=[4,8,12,16,24,32,40,48,56,64,72,80,96,128];
  const ru=document.getElementById('ruler'),rc=document.getElementById('rulercap');
  steps.forEach(s=>{const i=document.createElement('i');i.style.height=Math.min(s/128*48,48)+'px';ru.appendChild(i);
    const c=document.createElement('span');c.textContent=s;rc.appendChild(c);});
  // calendar
  const cal=document.getElementById('cal');['Mo','Tu','We','Th','Fr','Sa','Su'].forEach(w=>{const e=document.createElement('div');e.className='wd';e.textContent=w;cal.appendChild(e);});
  for(let blank=0;blank<2;blank++){const e=document.createElement('div');cal.appendChild(e);}
  for(let d=1;d<=31;d++){const e=document.createElement('div');e.className='d';e.textContent=d;if(d===20)e.classList.add('today');if(d===8)e.classList.add('sel');cal.appendChild(e);}
  // icon library
  // dot-matrix icons — real 9×9 bitmaps, every '#' = one complete round dot
  const G={
    signal:['.......#.','.....#.#.','.....#.#.','...#.#.#.','...#.#.#.','...#.#.#.','.#.#.#.#.','.#.#.#.#.','.#.#.#.#.'],
    wifi:['..#####..','.#.....#.','#.......#','...###...','..#...#..','.........','....#....','.........','.........'],
    battery:['.........','.#######.','#.......#','#.#####.#','#.#####.#','#.#####.#','#.......#','.#######.','.........'],
    bell:['....#....','...###...','..#...#..','..#...#..','.#.....#.','.#.....#.','#########','.........','...###...'],
    search:['.#####...','#.....#..','#.....#..','#.....#..','.#####...','....##...','.....##..','......##.','.........'],
    gear:['...#.#...','.#######.','.#.....#.','.#.###.#.','##.#.#.##','.#.###.#.','.#.....#.','.#######.','...#.#...'],
    heart:['.##...##.','####.####','#########','#########','#########','.#######.','..#####..','...###...','....#....'],
    star:['....#....','...###...','...###...','#########','.#######.','..#####..','.##.#.##.','.#.....#.','.........'],
    play:['..#......','..##.....','..###....','..####...','..#####..','..####...','..###....','..##.....','..#......'],
    pause:['.##...##.','.##...##.','.##...##.','.##...##.','.##...##.','.##...##.','.##...##.','.##...##.','.##...##.'],
    lock:['..#####..','.#.....#.','.#.....#.','#########','####.####','###.#.###','###.#.###','####.####','#########'],
    clock:['.#######.','#.......#','#...#...#','#...#...#','#...####.','#.......#','#.......#','#.......#','.#######.'],
    home:['....#....','...###...','..#####..','.#######.','#########','.#.....#.','.#.###.#.','.#.#.#.#.','.#.#.#.#.'],
    user:['...###...','..#...#..','..#...#..','..#...#..','...###...','.#######.','#########','#########','#########'],
    music:['.....###.','....####.','....#..#.','....#..#.','....#..#.','.##.#..#.','###.#..#.','.#...##..','.........'],
    camera:['.........','..##.####','#########','#..###..#','#.#####.#','#.#####.#','#..###..#','#########','.........'],
    grid:['####.####','####.####','####.####','####.####','.........','####.####','####.####','####.####','####.####'],
    plus:['....#....','....#....','....#....','....#....','#########','....#....','....#....','....#....','....#....'],
    check:['.........','........#','.......##','......##.','#....##..','##..##...','.####....','..##.....','.........'],
    close:['#.......#','##.....##','.##...##.','..##.##..','...###...','..##.##..','.##...##.','##.....##','#.......#'],
    power:['....#....','..#.#.#..','.#..#..#.','#...#...#','#.......#','#.......#','.#.....#.','..#...#..','...###...'],
    more:['.........','.........','.........','.........','#...#...#','.........','.........','.........','.........'],
    folder:['.........','.###.....','#...#....','#########','#.......#','#.......#','#.......#','#########','.........'],
    up:['....#....','...###...','..#.#.#..','.#..#..#.','#...#...#','....#....','....#....','....#....','....#....'],
    sun:['....#....','#...#...#','..#####..','.#######.','#######.#','.#######.','..#####..','#...#...#','....#....'],
    moon:['...###...','..##.....','.##......','.#.......','.#.......','.#.......','.##......','..##.....','...###...'],
    cloud:['.........','...###...','..#...##.','.#.....#.','#.......##','#........#','##########','.........','.........'],
    mail:['.........','#########','##.....##','#.#...#.#','#..#.#..#','#...#...#','#.......#','#########','.........'],
    calendar:['.#.....#.','#########','#.......#','#.#.#.#.#','#.......#','#.#.#.#.#','#.......#','#########','.........'],
    trash:['..#####..','.#.....#.','#########','.#.#.#.#.','.#.#.#.#.','.#.#.#.#.','.#.#.#.#.','..#####..','.........'],
    eye:['.........','..#####..','.#.....#.','#..###..#','#.#####.#','#..###..#','.#.....#.','..#####..','.........'],
    bolt:['...###...','..##.....','.##......','#######..','....##...','...##....','..##.....','.##......','#........'],
    download:['....#....','....#....','....#....','#...#...#','.#..#..#.','..#.#.#..','...###...','....#....','#########'],
    mappin:['...###...','..#...#..','.#.....#.','.#.....#.','..#...#..','...#.#...','....#....','....#....','....#....'],
    chat:['#########','#.......#','#.#.#.#.#','#.......#','#########','...##....','..##.....','.#.......','.........']
  };
  function gico(name){let h='<span class="gico">';(G[name]||[]).forEach(r=>{for(const c of r)h+=(c==='#'?'<i class="on"></i>':'<i></i>');});return h+'</span>';}
  const sysList=['signal','wifi','battery','bell','search','gear','heart','star','play','lock','clock','home','user','music','camera','grid'];
  const sys=document.getElementById('sysico');
  sysList.forEach(n=>{const s=document.createElement('span');s.className='i';s.innerHTML=gico(n);sys.appendChild(s);});
  const lib=document.getElementById('iconlib');
  Object.keys(G).forEach(n=>{const s=document.createElement('span');s.className='i';s.innerHTML=gico(n);lib.appendChild(s);});
  // inline dot-icons via [data-dot] (empty state, dropzone, …) — fill existing .gico hosts
  document.querySelectorAll('[data-dot]').forEach(el=>{const r=G[el.getAttribute('data-dot')];if(!r)return;let h='';r.forEach(row=>{for(const c of row)h+=(c==='#'?'<i class="on"></i>':'<i></i>');});el.innerHTML=h;});
  // === Glyph Matrix · authentic 25×25 circular-masked panel ===
  // each glyph is a geometric function (x,y,c)->bool on a 25×25 grid, masked to a circle.
  const GMX = [
    {name:'power', sig:false, fn:(x,y,c)=>{const d=Math.hypot(x-c,y-c);
      const ring=d>=6.5&&d<=8.4&&!(y<c-1&&Math.abs(x-c)<=2.3);
      const bar=Math.abs(x-c)<=1&&y>=c-9&&y<=c-0.5; return ring||bar;}},
    {name:'play', sig:false, fn:(x,y,c)=>{const rx=x-(c-6); if(rx<0||x>c+7)return false; return Math.abs(y-c)<=(13-rx)/13*7;}},
    {name:'heart', sig:false, fn:(x,y,c)=>{const X=(x-c)/7.6,Y=-(y-c-1.6)/7.6; return Math.pow(X*X+Y*Y-1,3)-X*X*Y*Y*Y<=0;}},
    {name:'live', sig:true, fn:(x,y,c)=>Math.hypot(x-c,y-c)<=6},
    {name:'arrow', sig:false, fn:(x,y,c)=>{const bar=Math.abs(x-c)<=1&&y>=c-3&&y<=c+8;
      const head=y>=c-9&&y<=c-3&&Math.abs(x-c)<=(y-(c-9)); return bar||head;}},
    {name:'sound', sig:false, fn:(x,y,c)=>{const cols={[c-8]:4,[c-4]:8,[c]:6,[c+4]:9,[c+8]:3};
      for(const k in cols){if(Math.abs(x-(+k))<=1&&y<=c+8&&y>=c+8-cols[k])return true;} return false;}},
    {name:'smiley', sig:false, fn:(x,y,c)=>{const d=Math.hypot(x-c,y-c);
      const ring=d>=9.5&&d<=11; const eyes=Math.hypot(x-(c-4),y-(c-3))<=1.4||Math.hypot(x-(c+4),y-(c-3))<=1.4;
      const md=Math.hypot(x-c,y-(c-2)); const smile=md>=6&&md<=7.3&&y>c+1; return ring||eyes||smile;}},
    {name:'plus', sig:false, fn:(x,y,c)=>(Math.abs(x-c)<=1&&Math.abs(y-c)<=8)||(Math.abs(y-c)<=1&&Math.abs(x-c)<=8)}
  ];
  const gmxHost=document.getElementById('gmx');
  if(gmxHost){const N=25,c=12,R=12.3;
    GMX.forEach(g=>{let h='';
      for(let y=0;y<N;y++)for(let x=0;x<N;x++){
        if(Math.hypot(x-c,y-c)>R){h+='<i class="void"></i>';continue;}
        h+= g.fn(x,y,c)?`<i class="${g.sig?'sig':'on'}"></i>`:'<i class="off"></i>';
      }
      const cell=document.createElement('div');cell.className='gmx-cell';
      cell.innerHTML=`<div class="gmx">${h}</div><span class="label">${g.name}</span>`;
      gmxHost.appendChild(cell);});
  }
  // scalable 9×9 demo — same glyph at increasing --gs sizes
  const gsc=document.getElementById('gicoscale');
  if(gsc){[16,24,34,48].forEach(px=>{const s=document.createElement('span');s.innerHTML=gico('gear');s.firstChild.style.setProperty('--gs',px+'px');gsc.appendChild(s);});}
  // segmented bars
  function seg(id,total,filled,color){const el=document.getElementById(id);if(!el)return;for(let i=0;i<total;i++){const s=document.createElement('i');s.style.background=i<filled?color:'var(--line)';el.appendChild(s);}}
  // agent status dot-row in hero (5 running · 6 idle · 1 needs)
  const ad=document.getElementById('agentdots');
  if(ad){const cls=['run','run','run','run','run','','','','','','','need'];
    cls.forEach(c=>{const i=document.createElement('i');if(c)i.className=c;ad.appendChild(i);});}
  seg('card-seg',16,12,'var(--display)');
  seg('seg-mem',22,17,'var(--display)');seg('ag-run',12,5,'var(--display)');seg('ag-idle',12,6,'var(--secondary)');seg('ag-need',12,1,'var(--accent)');seg('seg-bat',20,17,'var(--display)');
  const sp=document.getElementById('spark');[16,30,22,34,26,32,14,28,34,20,30,24,34].forEach(h=>{const i=document.createElement('i');i.style.height=h+'px';i.style.background=h>30?'var(--display)':'var(--muted)';sp.appendChild(i);});

  /* ===== interactive components — click to activate. State changes reuse the existing
     `.on` / `.sel` inversion classes only; never introduces a new color. ===== */
  document.addEventListener('click',e=>{
    // single active among siblings: tabs, pill tabs, segmented, button group, nav bar
    const seg=e.target.closest('.tabs span,.tabpills span,.seg button,.bgroup .btn,.navbar .i');
    if(seg&&seg.parentElement){[...seg.parentElement.children].forEach(c=>c.classList&&c.classList.remove('on'));seg.classList.add('on');}
    // pagination — numeric pages only (skip arrows / ellipsis)
    const pg=e.target.closest('.pager a');
    if(pg&&/^\d+$/.test(pg.textContent.trim())){pg.parentElement.querySelectorAll('a').forEach(a=>a.classList.remove('on'));pg.classList.add('on');}
    // chips & tags toggle (skip inline-styled status chips like ● CONNECTED)
    const chip=e.target.closest('.chip,.tag'); if(chip&&!chip.getAttribute('style')) chip.classList.toggle('on');
    // calendar day select (leave today's marker)
    const day=e.target.closest('.cal .grid .d');
    if(day&&!day.classList.contains('today')){day.parentElement.querySelectorAll('.d.sel').forEach(d=>d.classList.remove('sel'));day.classList.add('sel');}
    // rating — fill up to the clicked dot
    const star=e.target.closest('.rate i');
    if(star){const s=[...star.parentElement.children],idx=s.indexOf(star);s.forEach((x,k)=>x.classList.toggle('on',k<=idx));}
    // tree node select
    const node=e.target.closest('.tree .n');
    if(node){node.closest('.tree').querySelectorAll('.n.sel').forEach(n=>n.classList.remove('sel'));node.classList.add('sel');}
    // checkbox toggle (inject / remove the dot-matrix check)
    const box=e.target.closest('.box');
    if(box){box.classList.toggle('on');box.innerHTML=box.classList.contains('on')?'<svg class="ico sm" style="width:12px;height:12px"><use href="#i-check"/></svg>':'';}
    // radio select within its module
    const rdo=e.target.closest('.rdo');
    if(rdo){(rdo.closest('.mod')||document).querySelectorAll('.rdo').forEach(r=>r.classList.remove('on'));rdo.classList.add('on');}
  });
  // number stepper +/-
  document.querySelectorAll('.nstep').forEach(ns=>{const v=ns.querySelector('.v'),b=ns.querySelectorAll('button');
    if(b[0])b[0].onclick=()=>v.textContent=Math.max(0,(+v.textContent||0)-1);
    if(b[1])b[1].onclick=()=>v.textContent=(+v.textContent||0)+1;});

  /* ===== ambient "live" motion in the Applied console (only runs where these nodes exist) ===== */
  const app=document.querySelector('.app');
  if(app){
    const pad=n=>String(n).padStart(2,'0');
    // SESSION UPTIME counts up (mm:ss), live dot preserved
    const ck=app.querySelector('.clock');
    if(ck){let t=4*60+17;const col='<span class="colon" style="--pxd:8px"><i></i><i></i></span>';
      const draw=()=>ck.innerHTML='<span class="livedot"></span>'+pad(Math.floor(t/60))+col+pad(t%60);
      draw();setInterval(()=>{t++;draw();},1000);}
    // CPU gauge breathes 62–84%
    const arc=app.querySelector('.gauge svg circle:last-of-type'),gn=app.querySelector('.gauge .num b');
    if(arc&&gn){let g=0;setInterval(()=>{g+=.18;const v=Math.round(73+Math.sin(g)*11);
      if(gn.firstChild)gn.firstChild.textContent=v;arc.setAttribute('stroke-dashoffset',(239*(1-v/100)).toFixed(1));},900);}
    // NOW RUNNING spark — equalizer, heights shift in place (CSS transitions smooth it)
    const spk=app.querySelector('#spark');
    if(spk){setInterval(()=>{[...spk.children].forEach((b,i)=>{const h=12+Math.round(Math.abs(Math.sin(Date.now()/600+i*0.6))*24);
      b.style.height=h+'px';b.style.background=h>28?'var(--display)':'var(--muted)';});},500);}
    // MEMORY segbar drifts ±3 cells
    let mt=0;const memseg=document.getElementById('seg-mem');
    if(memseg)setInterval(()=>{mt+=.5;const f=17+Math.round(Math.sin(mt)*3);
      [...memseg.children].forEach((c,i)=>c.style.background=i<f?'var(--display)':'var(--line)');},1500);
  }
