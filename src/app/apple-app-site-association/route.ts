import {
  appleAppSiteAssociation,
  associationJsonResponse,
} from "@/app/_lib/app-associations";

export const dynamic = "force-static";

export function GET() {
  return associationJsonResponse(appleAppSiteAssociation);
}
