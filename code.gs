function doGet(e) {
  // Optionally return a message for GET requests
  return ContentService.createTextOutput("This is a GET request.");
}

function doPost(e) {
  if (!e.parameter.task) {
    return ContentService.createTextOutput("Invalid request: No task provided.");
  }

  var response = saveTask(e.parameter.task);
  return ContentService.createTextOutput(response);
}

// New function to retrieve tasks from the Google Sheet
function doGetTasks() {
  const sheet = SpreadsheetApp.openById('17QGEeJiHoV6A9PCF6BxXcoObezmvqZulSIHnjsBe79I').getActiveSheet();
  const tasks = sheet.getDataRange().getValues(); // Get all tasks

  // Create an array of task descriptions
  const taskList = tasks.map(row => row[1]); // Assuming the task is in the second column

  return ContentService.createTextOutput(JSON.stringify(taskList)).setMimeType(ContentService.MimeType.JSON);
}

function saveTask(task) {
  const sheet = SpreadsheetApp.openById('17QGEeJiHoV6A9PCF6BxXcoObezmvqZulSIHnjsBe79I').getActiveSheet();
  sheet.appendRow([new Date(), task]);
  return "Task saved successfully!";
}