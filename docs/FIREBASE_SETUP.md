# Firebase booking setup

Appointment requests from `/contact` are saved to Cloud Firestore via
`pages/api/book.ts` using `firebase-admin`. The browser never talks to
Firebase directly — client access can stay fully locked.

## One-time setup

1. **Create the database**: Firebase console → Build → Firestore Database →
   Create database → **Native mode**, production (locked) rules. No rule
   changes needed — the server SDK bypasses rules.

2. **Create a service-account key**: Project settings → Service accounts →
   Generate new private key. A JSON file downloads.

3. **Encode it** (avoids newline issues in env vars):

   ```bash
   base64 -i path/to/serviceAccountKey.json | tr -d '\n' | pbcopy
   ```

4. **Set the env var** — name: `FIREBASE_SERVICE_ACCOUNT_BASE64`
   - Local: create `.env.local` in the repo root with
     `FIREBASE_SERVICE_ACCOUNT_BASE64=<paste>`
   - Vercel: Project → Settings → Environment Variables → add for
     Production (and Preview if you want branch deploys to write bookings)

5. **Redeploy** (Vercel only picks up env vars on the next deployment).

Then delete the downloaded JSON file — the base64 copy in the env var is
the only place it needs to live.

## Data model

Collection `bookings`, one document per request:

| Field     | Notes                          |
|-----------|--------------------------------|
| name      | required                       |
| email     | required, validated            |
| company   | optional                       |
| date      | `YYYY-MM-DD`, must be future   |
| time      | one of the fixed slots, optional |
| message   | optional, max 2000 chars       |
| status    | `new` — update by hand as you process them |
| source    | `website`                      |
| createdAt | server timestamp               |

View submissions in Firebase console → Firestore → `bookings`.
