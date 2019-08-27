# Welcome to the Unix Lab Website

Only peer tutors working in the unix lab can push updates to the unix lab website.

Access will be revoked at the end of the semester. This readme describes
the main files required to update shifts and tutor info.

**The main files you will need to update can be found in the data folder.**

### Tutors

tutors.js contains each tutor's information.

```javascript
{
  id: 0,
  name: "Alejandra Trejo Rodriguez",
  bio: "Hi there! Call me Ale ..."
  image: "images/tutors/ale-e1550660921516-225x300.jpg",
  email: "alejandra.trejo@nyu.edu",
},
```

When you update your information, make sure 
- you place a comma after the closing
brace even if you are the last entry,
- you use a sequential id number,
- you upload your image to the **images/tutors/** folder and refer to it correctly
in the image entry,
- do not modify other entries or ids, and
- remember you id.


### Schedule

shifts.js contains the semester's schedule. If you need to change 
your shift, update (add or delete) entries with your id only.

```javascript
    {
        id: 0,
        day: "monday",
        from: "14:00",
        to: "15:30"
    },
```

When you amend this file, make sure
- you use your id,
- you enter the day in lowercase, and you add from and to for each 
shift in 24 hour format, i.e. two digits for hours from 01 to 23 and
two digits for minutes from 00 to 59,
- you schedule your shift at the hour or half hour (e.g. 12:30 not 12:39),
- a maximum of two tutors at any time, and
- you schedule your shift during reasonable/busy hours.

### Absence

If you need to skip a shift and you cannot find a replacement, then update
the absent.csv file by appending to it

```csv
date,id,from,to
27/08/19,0,13:00,16:30
20/08/19,0,13:00,16:30
31/08/19,0,13:00,16:30
01/09/19,0,13:00,16:30
28/08/19,2,20:00,21:00
```
Add an entry with the date in the following format dd/mm/yy, your id, the start and end of 
the shift (or part of the shift) that you will skip. Do not introduce any spaces
