# Google Apps Script Code

Copy this code into your Google Sheet's Script Editor (Extensions > Apps Script).

```javascript
const SHEET_NAME = "Sheet1"; // Change if your sheet name is different

// This function handles GET requests (when you visit the URL in a browser)
// It's useful for testing that your deployment is working
function doGet(e) {
  return ContentService
    .createTextOutput('✅ Google Apps Script is working! The form will submit data via POST requests.')
    .setMimeType(ContentService.MimeType.TEXT);
}

// This function handles POST requests (form submissions)
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      throw new Error('Sheet "' + SHEET_NAME + '" not found. Please check the sheet name.');
    }

    // Get headers from the first row
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;

    // Log the incoming data for debugging
    Logger.log('Received data: ' + JSON.stringify(e.parameter));

    // Create new row based on headers
    const newRow = headers.map(function(header) {
      if (header === 'timestamp') {
        return new Date();
      }
      return e.parameter[header] || ''; // Use empty string if parameter is missing
    });

    // Write to sheet
    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  finally {
    lock.releaseLock();
  }
}
```

## Setup Instructions

1.  Make sure your Spreadsheet has the following **Headers** in Row 1 (exact case):
    *   `timestamp` (optional, script adds it automatically if present)
    *   `name`
    *   `email`
    *   `phone`
    *   `occupation`
    *   `referral`
    *   `consent`

2.  **Deploy**:
    *   Click **Deploy** > **New deployment**.
    *   Select type: **Web app**.
    *   **Execute as**: Me.
    *   **Who has access**: **Anyone** (Important!).
    *   Click **Deploy**.
    *   Copy the **Web App URL**.
