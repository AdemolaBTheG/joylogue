# Joylogue web

The marketing site and universal-link fallback for the Joylogue mobile app.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## App links

Joylogue friend invitations use this URL format:

```text
https://joylogue.app/invite/{uuid}
```

The site publishes:

- `/.well-known/apple-app-site-association` for iOS Universal Links
- `/apple-app-site-association` as Apple's root-path fallback
- `/.well-known/assetlinks.json` for Android App Links
- `/invite/[token]` as the no-index browser fallback

The iOS association is scoped to `ZNBX79MLFS.com.flingex.joylogue` and only
matches `/invite/*`.

The Android association includes the current local debug certificate. Before a
production Android release, copy the **App signing key certificate** SHA-256
fingerprint from Google Play Console into `ANDROID_APP_CERTIFICATE_SHA256` on
Vercel. Multiple fingerprints may be comma-separated.

Set `NEXT_PUBLIC_APP_STORE_ID` after the App Store Connect Apple ID exists to
enable the Smart App Banner on invite fallback pages.

## Verification

```bash
npm run lint
./node_modules/.bin/next build --webpack
```

After deploying, verify the association endpoints return `200`,
`Content-Type: application/json`, and no redirects.
