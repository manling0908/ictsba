function doPost(e) {
  saveTask(JSON.stringify(e.parameter.task))
  return ContentService.createTextOutput("Invalid request.");
}
function saveTask(task) {
  const sheet = SpreadsheetApp.openById('17QGEeJiHoV6A9PCF6BxXcoObezmvqZulSIHnjsBe79I').getActiveSheet();
  sheet.appendRow([new Date(), task]);
  return "Task saved successfully!";
}