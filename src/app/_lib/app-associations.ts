const APPLE_APP_ID = "ZNBX79MLFS.com.flingex.joylogue";
const ANDROID_PACKAGE_NAME = "com.flingex.joylogue";
const ANDROID_DEBUG_CERTIFICATE_SHA256 =
  "F1:E0:04:18:20:53:A4:EB:46:9A:86:8B:7B:55:80:D9:49:47:08:C5:CE:C9:74:26:53:E5:31:7C:61:05:FE:FD";

const certificateFingerprintPattern = /^([0-9A-F]{2}:){31}[0-9A-F]{2}$/;

export const appleAppSiteAssociation = {
  applinks: {
    apps: [],
    details: [
      {
        appIDs: [APPLE_APP_ID],
        components: [
          {
            "/": "/invite/*",
            comment: "Matches private Joylogue friend invitation links.",
          },
        ],
      },
    ],
  },
};

function getAndroidCertificateFingerprints() {
  const productionFingerprints = (
    process.env.ANDROID_APP_CERTIFICATE_SHA256 ?? ""
  )
    .split(",")
    .map((fingerprint) => fingerprint.trim().toUpperCase())
    .filter(Boolean);

  for (const fingerprint of productionFingerprints) {
    if (!certificateFingerprintPattern.test(fingerprint)) {
      throw new Error(
        "ANDROID_APP_CERTIFICATE_SHA256 must contain colon-separated SHA-256 fingerprints.",
      );
    }
  }

  return Array.from(
    new Set([ANDROID_DEBUG_CERTIFICATE_SHA256, ...productionFingerprints]),
  );
}

export function getAndroidAssetLinks() {
  return [
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: ANDROID_PACKAGE_NAME,
        sha256_cert_fingerprints: getAndroidCertificateFingerprints(),
      },
    },
  ];
}

export function associationJsonResponse(body: unknown) {
  return new Response(JSON.stringify(body), {
    headers: {
      "Cache-Control":
        "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      "Content-Type": "application/json",
    },
  });
}
