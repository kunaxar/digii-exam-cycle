const cs=['CS301','CS302','CS303','CS304','MA301'],bb=['BB201','BB202','BB203','BB204','BB205','EN201'],co=['CO301','CO302','CO303','CO304','CO305'];
export const students=[
{id:'S01',name:'Aarav Mehta',program:'B.Tech CSE',sem:5,courses:cs,backlogs:[],att:[82,84,85],dues:0},
{id:'S02',name:'Diya Nair',program:'B.Tech CSE',sem:5,courses:cs,backlogs:['CS204'],att:[71,77,79],dues:0},
{id:'S03',name:'Rohan Gupta',program:'B.Tech CSE',sem:5,courses:cs,backlogs:[],att:[78,72,68],dues:0,paid:'2026-11-03T12:00'},
{id:'S04',name:'Ishita Rao',program:'BBA',sem:3,courses:bb,backlogs:[],att:[68,69,70],dues:0},
{id:'S05',name:'Kabir Singh',program:'B.Sc Physics',sem:5,courses:['PH301','PH302','PH303','MA305'],backlogs:[],att:[68,70,71],dues:0},
{id:'S06',name:'Meera Iyer',program:'B.Tech CSE',sem:5,courses:cs,backlogs:['MA201','CS210'],att:[88,87,86],dues:18000},
{id:'S07',name:'Arjun Das',program:'BBA',sem:3,courses:bb,backlogs:['BB105','BB108'],att:[90,91,90],dues:0,paid:'2026-11-12T12:00',paidBacklogs:['BB105']},
{id:'S08',name:'Sana Khan',program:'B.Com',sem:5,courses:co,backlogs:[],att:[76,76,76],dues:0,paid:'2026-11-20T23:58',confirmation:'2026-11-21T00:03'},
{id:'S09',name:'Vikram Joshi',program:'B.Tech CSE',sem:5,courses:cs,backlogs:[],att:[74.6,74.6,75.2],dues:0},
{id:'S10',name:'Priya Menon',program:'B.Sc Physics',sem:7,courses:['PH401','PH402','PH403','PH404'],backlogs:[],att:[80,81,82],dues:0,improvements:['PH301'],grade:'C'},
{id:'S11',name:'Nikhil Verma',program:'B.Tech CSE',sem:5,courses:cs,backlogs:[],att:[85,85,86],dues:0,debarDate:'2026-11-25'},
{id:'S12',name:'Ananya Pillai',program:'B.Com',sem:5,courses:co,backlogs:[],att:[79,80,80],dues:0,draftDate:'2026-11-11'}
];
export const events=[
{id:'freeze',date:'2026-10-31',title:'Freeze attendance snapshot',explain:'Record attendance up to31 October. Frozen snapshots only change through an approved revision.'},
{id:'open',date:'2026-11-01',title:'Issue circular and open applications',explain:'Activate configured application window. First close:15 November. No automatic tickets.'},
{id:'shorten',date:'2026-11-11',title:'Earlier exams; close12 November',explain:'Preserve drafts; notify everyone losing time. CoE must accept lead-time impact.'},
{id:'rate',date:'2026-11-13',title:'Backlog/improvement fee becomes Rs400',explain:'Prospective pricing. Settled registrations keep their paid rate; unpaid quotes reprice.'},
{id:'extend',date:'2026-11-14',title:'Reopen until20 November with late fee',explain:'Applications completed from14 November pay Rs500 late fee. Do not retrocharge earlier payments.'},
{id:'condonation',date:'2026-11-18',title:'Enable state condonation',explain:'B.Tech/BBA only,65% to below75%, approval and Rs1,000. No automatic student acceptance.'},
{id:'settlement',date:'2026-11-21',title:'Reconcile late bank confirmation',explain:'S08 paid20 Nov23:58, confirmed21 Nov00:03. Trusted initiation time counts as on-time.'},
{id:'cutoff',date:'2026-11-22',title:'Move attendance cut-off to20 November',explain:'S02 improves to77%; S03 falls to72%. A remedial window to26 Nov lets affected students settle new conditions.'},
{id:'debar',date:'2026-11-25',title:'Record S11 disciplinary debarment',explain:'One-semester debarment overrides attendance and payment. Finance reviews any refund.'},
{id:'classes',date:'2026-11-30',title:'Classes end; keep approved snapshot',explain:'New attendance does not silently replace the approved20 November snapshot.'},
{id:'publish',date:'2026-12-05',title:'Publish hall-ticket roster',explain:'Only fully cleared student-paper registrations feed tickets, seating and print counts.'},
{id:'correction',date:'2026-12-06',title:'Correct S09 October attendance',explain:'31 October changes74.6% to75.1%. Active20 November snapshot remains74.6% pending source reconciliation.'},
{id:'exam',date:'2026-12-12',title:'Exams begin',explain:'Check latest valid roster/ticket version. No new automatic registrations.'}
];
