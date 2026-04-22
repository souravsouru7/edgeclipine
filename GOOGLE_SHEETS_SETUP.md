# Google Sheets Waitlist Setup

This landing page now sends form submissions to a Google Apps Script webhook.

## 1. Create the Google Sheet

Create a new Google Sheet and add this header row in `Sheet1`:

```text
Email | Phone Number | Trading Experience | Submitted At
```

## 2. Add the Apps Script

In the Google Sheet:

1. Click `Extensions` -> `Apps Script`
2. Replace the default code with this:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  var email = e.parameter.email || "";
  var phone = e.parameter.phone || "";
  var experience = e.parameter.experience || "";
  var submittedAt = e.parameter.submittedAt || new Date().toISOString();

  if (!email) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: "Missing email" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  sheet.appendRow([email, phone, experience, submittedAt]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 3. Deploy the Script

1. Click `Deploy` -> `New deployment`
2. Choose type: `Web app`
3. Execute as: `Me`
4. Who has access: `Anyone`
5. Click `Deploy`
6. Copy the `Web app URL`

## 4. Add the Vercel Environment Variable

In Vercel project settings, add this environment variable:

```text
NEXT_PUBLIC_WAITLIST_WEBHOOK_URL=YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL
```

Add it to:

- Production
- Preview
- Development

## 5. Redeploy

After saving the environment variable, redeploy the Vercel project.

## 6. Test

Open the live site, submit the waitlist form, and confirm a new row appears in the Google Sheet.
