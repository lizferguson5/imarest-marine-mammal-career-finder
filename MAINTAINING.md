# Maintaining the Marine Mammal Career Finder

These are internal notes for IMarEST MM SIG members who update the Career Finder.

**Live site:** https://lizferguson5.github.io/imarest-marine-mammal-career-finder/
**Repo:** https://github.com/lizferguson5/imarest-marine-mammal-career-finder

---

## How the site updates

The site is served by GitHub Pages from the `main` branch, root folder (Settings → Pages → *Deploy from a branch*). Any change committed to `main` goes live automatically, usually within one to two minutes. Nothing needs to be built or uploaded anywhere else.

If a change doesn't appear, check the **Actions** tab for the *pages build and deployment* run, then hard-refresh the site (Ctrl/Cmd + Shift + R).

> If a `.github/workflows/pages.yml` file was uploaded with the repo, delete it. It is only needed when Pages is set to *GitHub Actions*, and it will fail with the current *Deploy from a branch* setting.

### Editing without installing anything

1. Open the file on GitHub, for example `data/profiles.js`.
2. Click the ✏️ pencil icon, make the change, and click **Commit changes**.
3. To add an image, open the folder (for example `assets/people/`), then choose **Add file → Upload files**.

---

## Where things live

```
imarest-marine-mammal-career-finder/
├── index.html              # page layout, styles and matching logic
├── data/
│   └── profiles.js         # ALL content: filters, profiles and presets
├── assets/
│   ├── imarest-logo.png
│   ├── people/             # role model headshots, named <id>.jpg
│   └── photos/             # header and section photos
├── docs/
│   ├── Careers-with-Marine-Mammals-IMarEST-MMSIG-2022.pdf
│   └── screenshots/        # images used in the README
├── README.md               # public front page of the repo
└── MAINTAINING.md          # this file
```

Most updates only touch `data/profiles.js` and, for role models, `assets/people/`.

---

## The profile format

Each profile is one entry in the `P` list in `data/profiles.js`. Both kinds share the same basic fields:

```js
{
  id: "heather",                 // unique, lowercase, no spaces; also the photo filename
  kind: "person",                // "role" = career path, "person" = role model
  draft: false,                  // true = proposed, shown with an amber "Proposed" label
  title: "Marine Mammal Consultant (MMO/PSO/MMS)",
  summary: "One sentence shown on the card.",
  setting:   ["At sea / offshore"],
  sector:    ["Consultancy", "Industry"],
  skills:    ["Visual survey & species ID", "Acoustics & PAM"],
  lifestyle: ["Long offshore rotations"],
  entry:     ["Bachelor's"],
  ...                            // plus the fields below for each kind
}
```

**Role model fields** (`kind: "person"`):

| Field | Shown as | Notes |
|---|---|---|
| `person` | Name | |
| `role` | Current role | 2–4 bullet points |
| `path` | Path to this role | Oldest first. The **last item is their current job** and is highlighted. |
| `education` | Education & training | Degrees, tickets, courses |
| `keyskills` | Key skills | |
| `drivers` | What drives them | A paragraph, from their case study |
| `challenges` | Challenges | A paragraph, from their case study |

**Career path fields** (`kind: "role"`):

| Field | Shown as | Notes |
|---|---|---|
| `overview` | Overview | 2–4 sentences on what the job is and why it matters |
| `activities` | What the work involves | 3–6 bullets |
| `keyskills` | Key skills & experience | 3–6 bullets |
| `entryRoute` | How to get in | Qualifications, certificates, experience |
| `workPattern` | Work pattern | One or two sentences on hours, rotations, travel |
| `progression` | Where it can lead | Next roles |
| `models` | Meet people doing this work | List of role model `id`s, e.g. `["diana", "heather"]` |

A role model automatically shows "Career paths like theirs" for every career path that lists their `id` in `models`. When you add a role model, add their `id` to the `models` of the matching career paths.

> The `overview`, `entryRoute`, `workPattern` and `progression` text for career paths was drafted in 2026 to expand the brochure. It has not yet been checked by practitioners and needs review, especially regional details such as certification names.

Watch these when editing:

- Each entry is wrapped in `{ }` and followed by a comma.
- Text goes in straight double quotes `"..."`. Inside the text, use typographic apostrophes (’) or `\"`, not a plain `"`.
- One missing comma or bracket breaks the whole page. If the site goes blank after an edit, that is almost always the cause.

### Tag values must match exactly

Filtering only works when the words in `setting`, `sector`, `skills`, `lifestyle` and `entry` match the `FACETS` list at the top of `data/profiles.js`, character for character. The current values are:

| Facet | Allowed values |
|---|---|
| `setting` | At sea / offshore · Coast & field sites · Lab · Office / remote · Animal care facility · Classroom & public |
| `sector` | Industry · Consultancy · Academia · Government · NGO & charity · Rescue & rehab · Eco-tourism |
| `skills` | Visual survey & species ID · Acoustics & PAM · Data analysis & stats · Coding (R / Python) · GIS & mapping · Report writing · Regulation & compliance · Leadership & project mgmt · Communication & outreach · Teaching & mentoring · Hands-on animal care · Veterinary & medical · Equipment & tech · Fundraising & grants · Genetics & lab methods · Policy & management · Drones & aerial survey |
| `lifestyle` | Long offshore rotations · Frequent travel · On-call / irregular hours · Mostly one base · Physically demanding |
| `entry` | Certificate / training · Bachelor's · Master's · PhD |

Aim for 2–6 skills per profile. Too many tags make a profile match everything.

---

## Common tasks

### Add a role model

1. Get the person's written permission to use their name, photo and story on a public website.
2. Ask them for: current title and employer, education and certifications, career progression, key skills, and a few sentences on what drives them and what is hard about the job.
3. Copy an existing `kind: "person"` entry in `data/profiles.js`, paste it below, and replace the content. Give it a new `id`. Make sure the last item in `path` is their current job.
4. Add their `id` to the `models` list of each career path that matches their work.
5. Crop a square headshot to about 320 × 320 px, save it as a JPG named after the `id` (for example `jane-smith.jpg`), and upload it to `assets/people/`.
6. Check the live site: search their name, open the profile and confirm the photo shows.

### Add a career path

1. Copy an existing `kind: "role"` entry and fill it in. Set `draft: true` until it has been reviewed.
2. Write `summary` as one plain sentence a student would understand.
3. Fill in `overview`, `activities`, `keyskills`, `entryRoute`, `workPattern` and `progression`.
4. List any matching role models in `models`.

### Approve a proposed career path

Have someone working in that role review the text and tags, then change `draft: true` to `draft: false`. The amber "Proposed" label disappears.

These proposed paths currently need review:

- [ ] Bioacoustic Data Scientist
- [ ] Protected Species Biologist (Government)
- [ ] Drone (UAS) Pilot & Photogrammetry Analyst
- [ ] Photo-ID & Research Technician
- [ ] Science Communicator / Educator
- [ ] Marine Spatial Planner
- [ ] Fisheries Observer (bycatch)

### Update or remove a profile

To update a profile, edit its entry in place. To remove one, delete the whole `{ ... },` block and its photo in `assets/people/`. If someone withdraws consent, remove them the same day; the change is live within minutes.

### Add a new filter option

1. Add the new value to the right list in `FACETS` in `data/profiles.js`.
2. Add the value to the relevant profiles.
3. Update the table in this file.

### Make a keyword find the right profiles

Typed keywords are matched in two ways: against the full profile text, and through a synonym list that maps common words to tags (for example `drone` → *Drones & aerial survey*). To add a synonym, edit the `SYN` list in `index.html`:

```js
const SYN = { ..., photogrammetry:"Drones & aerial survey", ... };
```

Keys are lowercase single words. Values must be an exact facet value.

### Change the "Start from" buttons

Edit the `PRESETS` list in `data/profiles.js`. Each preset has a `label` and the tags it selects.

### Update the README screenshots

Take screenshots of the live site and replace the files in `docs/screenshots/`, keeping the same filenames: `finder-v2.png`, `profile-v2.png` and `mobile-v2.png` (or upload with new names and update README.md, since GitHub caches images by filename).

---

## Testing before a big change

For small text edits, editing on GitHub and checking the live site is fine. For larger changes, test locally first:

```bash
git clone https://github.com/lizferguson5/imarest-marine-mammal-career-finder.git
cd imarest-marine-mammal-career-finder
python3 -m http.server 8000
# open http://localhost:8000
```

Opening `index.html` directly from the file browser also works in most browsers.

After a change, check that:

- the page loads and shows the expected number of profiles
- the new or changed profile appears when you search its name
- each filter you tagged it with brings it up
- the role model photo loads
- the page works at phone width (narrow the browser window)

---

## Before sharing widely

- [ ] Practitioners have reviewed the setting, lifestyle and entry-level tags on the original 18 career paths
- [ ] Practitioners have reviewed the new overview, how to get in, work pattern and where it can lead text for each career path
- [ ] Proposed career paths are reviewed, or hidden by default. To hide them, open `index.html`, change `draft:true` to `draft:false` in the `const state = {...}` line, and remove `checked` from the `showDraft` checkbox. Visitors can still turn them on.
- [ ] Every featured role model has agreed to appear on the public site
- [ ] IMarEST has approved use of the logo and brochure photos on the site

---

## Ideas for future versions

- A submission form so SIG members and role models can propose new profiles
- Salary ranges, typical training providers and certification links for each career path
- Region filters (UK, US, EU, Australia and others) for regulations and certifications
- More role models, especially early-career people and those in the proposed career paths
- Links from each career path to related IMarEST events, courses and mentoring
- Usage tracking to see which filters and searches people use most
